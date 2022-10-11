import expressAsyncHandler from 'express-async-handler';
import * as userRepository from './queries.js';

export const getUserById = expressAsyncHandler(async (req, res) => {
	let user = await userRepository.getUserById(req.params.userId);

	if (!user) return res.status(404).json({});

	return res.json({ user });
});