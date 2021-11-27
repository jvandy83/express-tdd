import { transport } from '../config/emailTransporter.js';

const sendAccountActivation = async (token, email) => {
	return await transport.sendMail({
		from: 'My App <info@my-app.com>',
		to: email,
		subject: 'Account Activation',
		html: `Token is ${token}`,
	});
};

const config = {
	sendAccountActivation,
};

export default config;
