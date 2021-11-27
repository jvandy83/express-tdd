import nodemailer from 'nodemailer';
import nodemailerStub from 'nodemailer-stub';
export const transport = nodemailer.createTransport(
	nodemailerStub.stubTransport,
);
