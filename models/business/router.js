import express from 'express';
import * as businessService from './service.js';

const router = express.Router();

/**
 * GET /api/v1/business/{businessId}
 * @tags Business
 * @description Get a business by id
 * @param {number} businessId.path
 * @return {GetBusinessDto} 200
 * @return {object} 404 - Not found
*/
router.get('/:businessId', businessService.routeGetBusinessById);

export default router;