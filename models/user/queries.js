import mysql from '../mysql/index.js';

export const getUserById = async (userId) => {
	let user = await mysql.awaitQuery('SELECT * FROM user WHERE id = ?', [userId]);

	return user.length ? user[0] : null;
};