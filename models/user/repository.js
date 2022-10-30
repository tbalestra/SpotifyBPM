import mysql from '../../libs/mysql/index.js';

/**
 * Get the base information of a user
 * @param {number[]} userIds 
 * @returns {DbUser[]}
 */
export const getUsers = async (userIds) => await mysql.awaitQuery('SELECT * FROM user WHERE id IN ?', [userIds]);

/**
 * Get the attributes of a user
 * @param {number[]} userIds 
 * @returns {DbUserAttribute[]}
 */
export const getUsersAttributes = async (userIds) => await mysql.awaitQuery('SELECT * FROM user_attributes WHERE id IN ?', [userIds]);