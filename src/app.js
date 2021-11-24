import express from 'express';

import userRoutes from './routes/user.js';

import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';

i18next
	.use(Backend)
	.use(middleware.LanguageDetector)
	.init({
		fallbackLng: 'en',
		lng: 'en',
		ns: ['translation'],
		defalutNS: 'translation',
		backend: {
			loadPath: './locales/{{lng}}/{{ns}}.json',
		},
		detection: {
			lookupHeader: 'accept-language',
		},
		degug: true,
	});

const app = express();

app.use(middleware.handle(i18next));

app.use(express.json());

app.use('/api/1.0', userRoutes);

export default app;
