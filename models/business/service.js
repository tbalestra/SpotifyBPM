import expressAsyncHandler from 'express-async-handler';

import * as businessRepository from './repository.js';

import { Business } from './models/business.model.js';

export const routeGetBusinessById = expressAsyncHandler(async (req, res) => {
	let businessId = parseInt(req.params.businessId);
	let business = await getBusinessById(businessId);

	if (!business) return res.status(404).json({});

	return res.json({ business: business.toDto() });
});

/**
 * Get a business by its Id
 * @param {number} businessId 
 * @returns {(Business | null)}
 */
const getBusinessById = async (businessId) => {
	let business = await getBusinesses([businessId]);
	return business.length ? business[0] : null;
};

/**
 * Get multiple businesses by Ids
 * @param {number[]} businessIds 
 * @returns {Business[]}
 */
const getBusinesses = async (businessIds) => {
	let [businesses, attributes] = await Promise.all([
		businessRepository.getBusinesses(businessIds),
		businessRepository.getBusinessesAttributes(businessIds)
	]);

	return businesses.map(business => new Business(business, attributes.filter(attribute => attribute.business_id == business.id)));
};