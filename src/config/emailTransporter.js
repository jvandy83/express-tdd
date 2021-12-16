import nodemailer from 'nodemailer';
export const transport = nodemailer.createTransport({
	host: 'localhost',
	port: 8587,
	tls: {
		rejectUnauthorized: false,
	},
});
