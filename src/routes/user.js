import { Router } from 'express';

import { createUser } from '../controllers/user.js';

import { check } from 'express-validator';

const router = Router();

router.post(
	'/users',
	[
		check('username', 'Username cannot be null').notEmpty(),
		check('email', 'E-mail cannot be null').notEmpty(),
		check('password', 'Password cannot be null').notEmpty(),
	],
	createUser,
);

export default router;
