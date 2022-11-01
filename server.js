import dotenv from 'dotenv';
dotenv.config({ path: `config/${process.env.NODE_ENV}.env` });

import express from 'express';

import compression from 'compression';
import bearerToken from 'express-bearer-token';
import expressAsyncHandler from 'express-async-handler';
import morgan from 'morgan';

import userRoutes from './models/user/router.js';
import businessRoutes from './models/business/router.js';
import { setUpSwagger } from './libs/swagger/index.js';
import { logger } from './libs/logger/index.js';

const app = express();

const start = async () => {
	await setUpSwagger(app);

	app.use(express.json({ limit: '50mb' }));
	app.use(compression());
	app.use(bearerToken());
	app.use(morgan(
		function (tokens, req, res) {
			return JSON.stringify({
				method: tokens.method(req, res),
				url: tokens.url(req, res),
				status: Number.parseFloat(tokens.status(req, res)),
				content_length: tokens.res(req, res, 'content-length'),
				response_time: Number.parseFloat(tokens['response-time'](req, res)),
			});
		},
		{
			stream: {
			// Configure Morgan to use our custom logger with the http severity
				write: (message) => {
					logger.info(message);
				},
			},
		}
	));

	app.get('/healthcheck', expressAsyncHandler(async (req, res) => {
		return res.status(200).json({ environment: process.env.NODE_ENV, deployGroup: process.env.DEPLOY_GROUP, deployId: process.env.DEPLOYMENT_ID });
	}));

	app.use('/api/v1/user', userRoutes);
	app.use('/api/v1/business', businessRoutes);

	// eslint-disable-next-line no-unused-vars
	app.use(async (err, req, res, _next) => {
		// const errorHash = crypto.createHash('sha512').update(err.stack, 'utf8').digest('hex');
		logger.error(err.stack);
		return res.status(500).json({ error: err.stack });
	});

	app.listen(process.env.PORT, err => {
		if (err) throw err;

		logger.info(`Listening at http://localhost:${process.env.PORT}`);
	});
};

start();