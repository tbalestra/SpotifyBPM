/**
 * @typedef {Object} DbSession
 * @property {number} id
 * @property {number} user_id
 * @property {string} ip
 * @property {string} agent
 * @property {Date} created_at
 * @property {Date} last_login_at
 */

/**
 * @typedef {Object} SessionPayload
 * @property {number} id
 */

/**
 * @typedef {number} LoginMethod
 */

/**
 * @readonly
 * @enum {LoginMethod}
 */
const LoginMethod = Object.freeze({
	Phone: 0,
	Apple: 1,
	Google: 2,
	Email: 3
});

export default LoginMethod;