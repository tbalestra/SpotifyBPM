import express from 'express';
import * as userService from './models.js';

const router = express.Router();

router.get('/:userId', userService.routeGetUserById);

export default router;