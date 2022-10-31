import { convertAttributeValue } from '../../../libs/mysql/attributeType.model.js';

/**
* @typedef {object} BusinessDto
* @property {number} id
* @property {string} name
*/

/**
 * @typedef {object} Business
 * @property {number} id
 * @property {string} name
 * @property {Date} created_at
 * @property {Date} updated_at 
 */
export class Business {
	/**
	* @param {DbBusiness} business 
	* @param {DbBusinessAttribute[]} attributes 
	*/
	constructor(business, attributes) {
		this.id = business.id;
		this.name = business.name;

		attributes.forEach(attribute => {
			this[attribute.key] = convertAttributeValue(attribute.type, attribute.value);
		});
	}

	/**
	* @returns {BusinessDto}
	*/
	toDto() {
		return {
			id: this.id,
			name: this.name
		};
	}
}

/**
 * 
 * @typedef {object} DbBusiness
 * @property {number} id
 * @property {string} name
 * @property {Date} created_at
 * @property {Date} updated_at 
 */

/**
 * 
 * @typedef {object} DbBusinessAttribute
 * @property {number} business_id
 * @property {string} key
 * @property {string} value
 * @property {number} type
 * @property {Date} updated_at 
 */