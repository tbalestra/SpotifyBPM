import mysql from '../../libs/mysql/index.js';

export const getBusinesses = async (businessIds) => await mysql.awaitQuery('SELECT * FROM business WHERE id IN ?', [businessIds]);
export const getBusinessesAttributes = async (businessIds) => await mysql.awaitQuery('SELECT * FROM business_attributes WHERE id IN ?', [businessIds]);