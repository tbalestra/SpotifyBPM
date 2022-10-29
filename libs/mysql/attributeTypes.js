const AttributeTypes = Object.freeze({
	Text: 0,
	Json: 1,
	Date: 2
});

export const convertAttributeValue = (type, value) => {
	switch(type) {
	case AttributeTypes.Text:
		return value;
	case AttributeTypes.Json:
		return JSON.parse(value);
	case AttributeTypes.Date:
		return new Date(value);
	}
};

export default AttributeTypes;