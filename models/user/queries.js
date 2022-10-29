import mysql from '../../libs/mysql/index.js';

export const getUserById = async (userId) => {
	let user = await mysql.awaitQuery('SELECT * FROM user WHERE id = ?', [userId]);

	return user.length ? user[0] : null;
};

export const getUsers = async (userIds) => await mysql.awaitQuery('SELECT * FROM user WHERE id IN ?', [userIds]);
export const getUsersAttributes = async (userIds) => await mysql.awaitQuery('SELECT * FROM user_attributes WHERE id IN ?', [userIds]);