import dotenv from 'dotenv';
dotenv.config({ path: `config/${process.env.NODE_ENV}.env` });

import jwt from 'jsonwebtoken';

/**
 * 
 * @param {Object} payload 
 * @returns {string}
 */
export const createToken = (payload) => {
	return jwt.sign(payload, process.env.JWT_TOKEN);
};

/**
 * 
 * @param {string} token 
 * @returns {(Object | null)}
 */
export const validateToken = (token) => {
	try {
		return jwt.verify(token, process.env.JWT_TOKEN);
	} catch (error) {
		return null;
	}
};