import expressAsyncHandler from 'express-async-handler';
import * as businessRepository from './queries.js';

export const getBusinessById = expressAsyncHandler(async (req, res) => {
	let business = await businessRepository.getBusinessById(req.params.businessId);

	if (!business) return res.status(404).json({});

	return res.json({ business });
});