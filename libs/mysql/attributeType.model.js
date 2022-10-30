/**
 * @typedef {number} AttributeType
 */

/**
 * @readonly
 * @enum {AttributeType}
 */
const AttributeType = Object.freeze({
	Text: 0,
	Json: 1,
	Date: 2
});

/**
 * 
 * @param {AttributeType} type 
 * @param {string} value 
 * @returns 
 */
export const convertAttributeValue = (type, value) => {
	switch(type) {
	case AttributeType.Text:
		return value;
	case AttributeType.Json:
		return JSON.parse(value);
	case AttributeType.Date:
		return new Date(value);
	}
};

export default AttributeType;