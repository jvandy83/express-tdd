import request from 'supertest';

import app from '../src/app.js';
import User from '../src/models/user/User.js';

import sequelize from '../src/config/database.js';

beforeAll(() => {
	return sequelize.sync();
});
beforeEach(() => {
	return User.destroy({ truncate: true });
});

const postUser = async (user) => {
	return request(app).post('/api/1.0/users').send(user);
};

const validUser = {
	username: 'user1',
	email: 'user1@mail.com',
	password: 'password',
};

describe('User Registration', () => {
	it('returns 200 ok when signup request is valid', async () => {
		const response = await postUser(validUser);
		expect(response.status).toBe(200);
	});

	it('returns success message when signup request is valid', async () => {
		const response = await postUser(validUser);
		expect(response.ok).toBe(true);
	});
	it('saves the user to a database', async () => {
		await postUser(validUser);
		const userList = await User.findAll();
		expect(userList.length).toBe(1);
	});
	it('saves the username and email to a database', async () => {
		await postUser(validUser);
		const userList = await User.findAll();
		const user = userList[0];
		expect(user.username).toBe('user1');
		expect(user.email).toBe('user1@mail.com');
	});
	it('hashes the password in database', async () => {
		await postUser(validUser);
		const userList = await User.findAll();
		const user = userList[0];
		expect(user.password).not.toBe('password');
	});
	it('returns 400 when username is null', async () => {
		const response = await postUser({
			username: null,
			email: 'user1@mail.com',
			password: 'password',
		});

		expect(response.status).toBe(400);
	});
	it('returns validationErrors field in response body when validation errors occurr', async () => {
		const response = await postUser({
			username: null,
			email: 'user1@mail.com',
			password: 'password',
		});
		expect(response.body.validationErrors).not.toBeUndefined();
	});
	it('returns errors for both when username and email is null', async () => {
		const response = await postUser({
			username: null,
			email: null,
			password: 'password',
		});
		const { validationErrors } = response.body;
		expect(Object.keys(validationErrors)).toEqual(['username', 'email']);
	});
	it.each([
		['username', 'Username cannot be null'],
		['email', 'E-mail cannot be null'],
		['password', 'Password cannot be null'],
	])('when %s is null %s is received', async (field, expectedMessage) => {
		const user = {
			username: 'user1',
			email: 'user1@mail.com',
			password: 'password',
		};
		user[field] = null;
		const response = await postUser(user);
		const { body } = response;
		expect(body.validationErrors[field]).toBe(expectedMessage);
	});
	// it('returns Username cannot be null when username is null', async () => {
	// 	const response = await request(app).post('/api/1.0/users').send({
	// 		username: null,
	// 		email: 'user1mail.com',
	// 		password: 'password',
	// 	});
	// 	const { validationErrors } = response.body;
	// 	expect(validationErrors.username).toBe('Username cannot be null');
	// });
	// it('returns E-mail cannot be null when email is null', async () => {
	// 	const response = await request(app).post('/api/1.0/users').send({
	// 		username: 'user1',
	// 		email: null,
	// 		password: 'password',
	// 	});
	// 	const { validationErrors } = response.body;
	// 	console.log(response.body);
	// 	expect(validationErrors.email).toBe('E-mail cannot be null');
	// });
	// it('returns Password cannot be null message when password is null', async () => {
	// 	const response = await request(app).post('/api/1.0/users').send({
	// 		username: 'user1',
	// 		email: 'user1@mail.com',
	// 		password: null,
	// 	});
	// 	const { validationErrors } = response.body;
	// 	expect(validationErrors.password).toBe('Password cannot be null');
	// });
});
