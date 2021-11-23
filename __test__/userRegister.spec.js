import request from 'supertest';

import app from '../src/app.js';
import User from '../src/models/user/User.js';

import sequelize from '../src/config/database.js';

beforeAll(() => {
	return sequelize.sync({ force: true });
});
beforeEach(() => {
	return User.destroy({ truncate: true });
});

const validUser = {
	username: 'user1',
	email: 'user1@mail.com',
	password: 'P4ssword',
};

const postUser = async (user = validUser) => {
	return request(app).post('/api/1.0/users').send(user);
};

describe('User Registration', () => {
	it('returns 200 ok when signup request is valid', async () => {
		const response = await postUser();
		expect(response.status).toBe(200);
	});

	it('returns success message when signup request is valid', async () => {
		const response = await postUser();
		expect(response.ok).toBe(true);
	});
	it('saves the user to a database', async () => {
		await postUser();
		const userList = await User.findAll();
		expect(userList.length).toBe(1);
	});
	it('saves the username and email to a database', async () => {
		await postUser();
		const userList = await User.findAll();
		const user = userList[0];
		expect(user.username).toBe('user1');
		expect(user.email).toBe('user1@mail.com');
	});
	it('hashes the password in database', async () => {
		await postUser();
		const userList = await User.findAll();
		const user = userList[0];
		expect(user.password).not.toBe('password');
	});
	it('returns 400 when username is null', async () => {
		const response = await postUser({
			username: null,
			email: 'user1@mail.com',
			password: 'P4ssword',
		});

		expect(response.status).toBe(400);
	});
	it('returns validationErrors field in response body when validation errors occurr', async () => {
		const response = await postUser({
			username: null,
			email: 'user1@mail.com',
			password: 'P4ssword',
		});
		expect(response.body.validationErrors).not.toBeUndefined();
	});
	it('returns errors for both when username and email is null', async () => {
		const response = await postUser({
			username: null,
			email: null,
			password: 'P4ssword',
		});
		const { validationErrors } = response.body;
		expect(Object.keys(validationErrors)).toEqual(['username', 'email']);
	});

	const usernameNull = 'Username cannot be null';
	const usernameSize = 'Must have min 4 and max 32 characters';
	const emailNull = 'E-mail cannot be null';
	const emailValid = 'E-mail is not valid';
	const passwordNull = 'Password cannot be null';
	const passwordMin = 'Password must be at least 6 characters';
	const passwordValid =
		'Password must have at least 1 uppercase, 1 lowercase letter and 1 number';

	it.each`
		field         | value              | expectedMessage
		${'username'} | ${null}            | ${usernameNull}
		${'username'} | ${'usr'}           | ${usernameSize}
		${'username'} | ${'a'.repeat(33)}  | ${usernameSize}
		${'email'}    | ${null}            | ${emailNull}
		${'email'}    | ${'mail.com'}      | ${emailValid}
		${'email'}    | ${'user.mail.com'} | ${emailValid}
		${'email'}    | ${'user@com'}      | ${emailValid}
		${'password'} | ${null}            | ${passwordNull}
		${'password'} | ${'P4ssw'}         | ${passwordMin}
		${'password'} | ${'alllowercase'}  | ${passwordValid}
		${'password'} | ${'ALLUPPERCASE'}  | ${passwordValid}
		${'password'} | ${'123456789'}     | ${passwordValid}
		${'password'} | ${'lowerand6789'}  | ${passwordValid}
		${'password'} | ${'UPPERAND6789'}  | ${passwordValid}
	`(
		'returns $expectedMessage when $field is $value',
		async ({ field, expectedMessage, value }) => {
			const user = {
				username: 'user1',
				email: 'user1@mail.com',
				password: 'P4ssword',
			};
			user[field] = value;
			const response = await postUser(user);
			const { body } = response;
			expect(body.validationErrors[field]).toBe(expectedMessage);
		},
	);
	it('returns E-mail in use when same email is already in use', async () => {
		await User.create({ ...validUser });
		const response = await postUser();
		const { validationErrors } = response.body;
		expect(validationErrors.email).toBe('E-mail in use');
	});
	it('returns errors for both username is null and email is in use', async () => {
		await User.create({ ...validUser });
		const response = await postUser({
			username: null,
			email: validUser.email,
			password: 'P4ssword',
		});
		const { body } = response;
		expect(Object.keys(body.validationErrors)).toEqual(['username', 'email']);
	});
});
