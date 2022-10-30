import expressAsyncHandler from 'express-async-handler';

import * as userRepository from './repository.js';

import { convertAttributeValue } from '../../libs/mysql/attributeType.model.js';

export const routeGetUserById = expressAsyncHandler(async (req, res) => {
	let userId = parseInt(req.params.userId);
	let user = await getUserById(userId);

	if (!user) return res.status(404).json({});

	return res.json({ user });
});

/**
 * Get a user by its Id
 * @param {number} userId 
 * @returns {(UserDto | null)} user
 */
const getUserById = async (userId) => {
	let user = await getUsers([userId]);
	return user.length ? user[0] : null;
};

/**
 * Get multiple users by Ids
 * @param {number[]} userIds 
 * @returns {UserDto[]}
 */
const getUsers = async (userIds) => {
	let [users, attributes] = await Promise.all([
		userRepository.getUsers(userIds),
		userRepository.getUsersAttributes(userIds)
	]);

	return users.map(user => {
		let userAttributes = attributes.filter(attribute => attribute.user_id == user.id);
		userAttributes.forEach(attribute => {
			user[attribute.key] = convertAttributeValue(attribute.type, attribute.value);
		});
	});
};