import express from 'express';
import * as businessService from './models.js';

const router = express.Router();

router.get('/:businessId', businessService.getBusinessById);

export default router;