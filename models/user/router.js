import express from 'express';
import * as userService from './service.js';

const router = express.Router();

router.get('/:userId', userService.routeGetUserById);

export default router;