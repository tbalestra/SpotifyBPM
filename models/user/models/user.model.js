import { convertAttributeValue } from '../../../libs/mysql/attributeType.model.js';

/**
 * @typedef {Object} UserDto
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 */

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} firstName
 * @property {string} lastName
 */
export class User {
	/**
	 * 
	 * @param {DbUser} user 
	 * @param {DbUserAttribute[]} attributes 
	 */
	constructor(user, attributes) {
		this.id = user.id;
		this.firstName = user.first_name;
		this.lastName = user.last_name;

		attributes.forEach(attribute => {
			this[attribute.key] = convertAttributeValue(attribute.type, attribute.value);
		});
	}

	/**
	 * @returns {UserDto}
	 */
	toDto() {
		return {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName
		};
	}
}


/**
 * 
 * @typedef {Object} DbUser
 * @property {number} id
 * @property {string} first_name
 * @property {string} last_name
 * @property {string} email
 * @property {Date} created_at
 * @property {Date} updated_at 
 */

/**
 * 
 * @typedef {Object} DbUserAttribute
 * @property {number} user_id
 * @property {string} key
 * @property {string} value
 * @property {number} type
 * @property {Date} updated_at 
 */