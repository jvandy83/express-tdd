import { Router } from 'express';

import { createUser } from '../controllers/user.js';

import { validateUser } from '../middleware/user.js';

const router = Router();

router.post('/users', validateUser, createUser);

export default router;
