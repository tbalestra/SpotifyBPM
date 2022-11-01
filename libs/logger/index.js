import winston from 'winston';

let logger;

if(process.env.NODE_ENV == 'local') {
	logger = winston.createLogger({
		format: winston.format.cli(),
		transports: [new winston.transports.Console()],
	});
} else {
	logger = winston.createLogger({
		format: winston.format.combine(winston.format.timestamp({
			format: 'YYYY-MM-DD hh:mm:ss.SSS A'
		}), winston.format.json()),
		transports: [
			new winston.transports.File({ filename: 'error.log', level: 'error' }),
			new winston.transports.File({ filename: 'combined.log' }),
		],
	});
}

/**
 * @typedef {winston.Logger}
 */
export {logger};