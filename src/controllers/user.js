import User from '../models/user/User.js';

import argon2 from 'argon2';

import { validationResult } from 'express-validator';

export const createUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const validationErrors = {};
		errors.array().forEach((error) => {
			validationErrors[error.param] = error.msg;
		});
		return res.status(400).json({
			validationErrors,
		});
	}
	const { username, email, password } = req.body;

	const hashedPassword = await argon2.hash(password, 10);
	await User.create({ username, email, password: hashedPassword });

	return res.status(200).json({
		ok: true,
	});
};

export const findByEmail = async (email) => {
	return await User.findOne({ where: { email } });
};
