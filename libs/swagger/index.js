import expressJSDocSwagger from 'express-jsdoc-swagger';
// import { init } from 'express-oas-validator';
import { __dirname } from '../globals/index.js';

const swaggerOptions = {
	info: {
		version: '1.0.0',
		title: 'DWJG Api',
		license: {
			name: 'MIT',
		},
	},
	filesPattern: './**/*.js',
	baseDir: `${__dirname}../../`,
	swaggerUIPath: '/api-docs',
	exposeSwaggerUI: true,
	exposeApiDocs: false,
	apiDocsPath: '/v3/api-docs',
	notRequiredAsNullable: false,
	security: {
		BearerAuth: {
			type: 'http',
			scheme: 'bearer',
		},
	},
};

/**
 * 
 * @param {Express} app 
 */
export const setUpSwagger = async (app) => {
	const instance = expressJSDocSwagger(app)(swaggerOptions);
	
	return new Promise(resolve => {
		// eslint-disable-next-line no-unused-vars
		instance.on('finish', data => {
			// init(data);
			resolve(app);
		});
	});
};