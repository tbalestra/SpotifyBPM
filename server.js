import dotenv from 'dotenv';
dotenv.config({ path: `config/${process.env.NODE_ENV}.env` });

import express from 'express';

import compression from 'compression';
import bearerToken from 'express-bearer-token';
import expressAsyncHandler from 'express-async-handler';

import userRoutes from './models/user/router.js';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(compression());
app.use(bearerToken());

app.get('/healthcheck', expressAsyncHandler(async (req, res) => {
	return res.status(200).json({ environment: process.env.NODE_ENV, deployGroup: process.env.DEPLOY_GROUP, deployId: process.env.DEPLOYMENT_ID });
}));

app.use('/api/v1/user', userRoutes);

// eslint-disable-next-line no-unused-vars
app.use(async (err, req, res, _next) => {
	// const errorHash = crypto.createHash('sha512').update(err.stack, 'utf8').digest('hex');

	return res.status(500).json({ error: err.stack });
});

const start = async () => {
	app.listen(process.env.PORT, err => {
		if (err) throw err;

		console.log(`Listening at http://localhost:${process.env.PORT}`);
	});
};

start();