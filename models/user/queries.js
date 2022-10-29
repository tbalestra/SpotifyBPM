import mysql from '../../libs/mysql/index.js';

export const getUsers = async (userIds) => await mysql.awaitQuery('SELECT * FROM user WHERE id IN ?', [userIds]);
export const getUsersAttributes = async (userIds) => await mysql.awaitQuery('SELECT * FROM user_attributes WHERE id IN ?', [userIds]);