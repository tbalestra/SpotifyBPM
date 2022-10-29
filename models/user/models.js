import expressAsyncHandler from 'express-async-handler';
import { convertAttributeValue } from '../../libs/mysql/attributeTypes.js';
import * as userRepository from './queries.js';

export const routeGetUserById = expressAsyncHandler(async (req, res) => {
	let user = await getUserById(req.params.userId);

	if (!user) return res.status(404).json({});

	return res.json({ user });
});

const getUserById = async (userId) => {
	let user = await getUsers([userId]);
	return user.length ? user[0] : null;
};

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