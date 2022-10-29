import expressAsyncHandler from 'express-async-handler';
import { convertAttributeValue } from '../../libs/mysql/attributeTypes.js';
import * as businessRepository from './queries.js';

export const routeGetBusinessById = expressAsyncHandler(async (req, res) => {
	let business = await getBusinessById(req.params.businessId);

	if (!business) return res.status(404).json({});

	return res.json({ business });
});

const getBusinessById = async (businessId) => {
	let business = await getBusinesses([businessId]);
	return business.length ? business[0] : null;
};

const getBusinesses = async (businessIds) => {
	let [businesses, attributes] = await Promise.all([
		businessRepository.getBusinesses(businessIds),
		businessRepository.getBusinessesAttributes(businessIds)
	]);

	return businesses.map(user => {
		let businessAttributes = attributes.filter(attribute => attribute.user_id == user.id);
		businessAttributes.forEach(attribute => {
			user[attribute.key] = convertAttributeValue(attribute.type, attribute.value);
		});
	});
};