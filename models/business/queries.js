import mysql from '../mysql/index.js';

export const getBusinessById = async (businessId) => {
	let business = await mysql.awaitQuery('SELECT * FROM business WHERE id = ?', [businessId]);

	return business.length ? business[0] : null;
};