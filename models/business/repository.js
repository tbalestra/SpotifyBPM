import mysql from '../../libs/mysql/index.js';

/**
 * Fetch the base information of a business
 * @param {number[]} businessIds 
 * @returns {DbBusiness[]}
 */
export const getBusinesses = async (businessIds) => await mysql.awaitQuery('SELECT * FROM business WHERE id IN ?', [businessIds]);

/**
 * Fetch the attributes of a business
 * @param {number[]} businessIds 
 * @returns {DbBusinessAttribute[]}
 */
export const getBusinessesAttributes = async (businessIds) => await mysql.awaitQuery('SELECT * FROM business_attributes WHERE id IN ?', [businessIds]);