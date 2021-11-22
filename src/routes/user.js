import { Router } from 'express';

import { createUser } from '../controllers/user.js';

import { check } from 'express-validator';

const router = Router();

router.post(
	'/users',
	[
		check('username')
			.notEmpty()
			.withMessage('Username cannot be null')
			.bail()
			.isLength({ min: 4, max: 32 })
			.withMessage('Must have min 4 and max 32 characters'),
		check('email', 'E-mail cannot be null')
			.notEmpty()
			.bail()
			.isEmail()
			.withMessage('E-mail is not valid'),
		check('password', 'Password cannot be null')
			.notEmpty()
			.bail()
			.isLength({ min: 6 })
			.withMessage('Password must be at least 6 characters')
			.bail()
			.matches(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)
			.withMessage(
				'Password must have at least 1 uppercase, 1 lowercase letter and 1 number',
			),
	],
	createUser,
);

export default router;
