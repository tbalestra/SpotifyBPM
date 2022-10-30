import express from 'express';
import * as businessService from './service.js';

const router = express.Router();

router.get('/:businessId', businessService.routeGetBusinessById);

export default router;