import User from '../models/user/User.js';

import argon2 from 'argon2';

import { validationResult } from 'express-validator';

import crypto from 'crypto';

import EmailService from '../email/EmailService.js';

import sequelize from '../config/database.js';

const generateToken = (length) => {
	return crypto.randomBytes(length).toString('hex').substring(0, length);
};

export const createUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		const validationErrors = {};
		errors.array().forEach((error) => {
			validationErrors[error.param] = req.t(error.msg);
		});
		return res.status(400).json({
			validationErrors,
		});
	}

	const { username, email, password } = req.body;

	let hashedPassword;

	const transaction = await sequelize.transaction();

	try {
		hashedPassword = await argon2.hash(password, 10);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}

	const user = {
		username,
		email,
		activationToken: generateToken(16),
		password: hashedPassword,
	};

	try {
		await User.create(user, { transaction });
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}

	try {
		await EmailService.sendAccountActivation(user.activationToken, email);
		await transaction.commit();
	} catch (error) {
		transaction.rollback();
		return res.status(502).json({
			message: req.t('emailFailure'),
		});
	}

	res.status(200).json({
		message: req.t('userCreatedSuccess'),
	});
};

export const findByEmail = async (email) => {
	return await User.findOne({ where: { email } });
};
