import expressAsyncHandler from 'express-async-handler';

import * as userRepository from './repository.js';

import { User } from './models/user.model.js';

export const routeGetUserById = expressAsyncHandler(async (req, res) => {
	let userId = parseInt(req.params.userId);
	let user = await getUserById(userId);

	if (!user) return res.status(404).json({});

	return res.json({ user: user.toDto() });
});

/**
 * Fetch a user by its Id
 * @param {number} userId 
 * @returns {(User | null)}
 */
const getUserById = async (userId) => {
	let user = await getUsers([userId]);
	return user.length ? user[0] : null;
};

/**
 * Fetch multiple users by Ids
 * @param {number[]} userIds 
 * @returns {User[]}
 */
const getUsers = async (userIds) => {
	let [users, attributes] = await Promise.all([
		userRepository.getUsers(userIds),
		userRepository.getUsersAttributes(userIds)
	]);

	return users.map(user => new User(user, attributes.filter(attribute => attribute.user_id == user.id)));
};