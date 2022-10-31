import express from 'express';
import * as userService from './service.js';

const router = express.Router();

/**
 * GET /api/v1/user/{userId}
 * @tags User
 * @description Get a user by id
 * @param {number} userId.path
 * @return {GetUserDto} 200
 * @return {object} 404 - Not found
*/
router.get('/:userId', userService.routeGetUserById);

export default router;