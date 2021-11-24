import { Router } from 'express';

import { createUser, findByEmail } from '../controllers/user.js';

import { check } from 'express-validator';

const router = Router();

router.post(
	'/users',
	[
		check('username')
			.notEmpty()
			.withMessage('usernameNull')
			.bail()
			.isLength({ min: 4, max: 32 })
			.withMessage('usernameSize'),
		check('email')
			.notEmpty()
			.withMessage('emailNull')
			.bail()
			.isEmail()
			.withMessage('emailInvalid')
			.bail()
			.custom(async (email) => {
				const user = await findByEmail(email);
				if (user) {
					throw new Error('emailInUse');
				}
			}),
		check('password', 'passwordNull')
			.notEmpty()
			.bail()
			.isLength({ min: 6 })
			.withMessage('passwordMin')
			.bail()
			.matches(/^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/)
			.withMessage('passwordPattern'),
	],
	createUser,
);

export default router;
