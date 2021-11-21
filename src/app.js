import express from 'express';

import userRoutes from './routes/user.js';

const app = express();

app.use(express.json());

app.use('/api/1.0', userRoutes);

export default app;
