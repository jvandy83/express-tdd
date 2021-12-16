import nodemailer from 'nodemailer';
import nodemailerStub from 'nodemailer-stub';
export const transport = nodemailer.createTransport({
	host: 'localhost',
	port: 8587,
	tls: {
		rejectUnauthorized: false,
	},
});
