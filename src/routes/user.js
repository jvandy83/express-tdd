import { Router } from 'express';

import { createUser } from '../controllers/user.js';

import { validateUsername, validateEmail } from '../middleware/user.js';

const router = Router();

router.post('/users', validateUsername, validateEmail, createUser);

export default router;
