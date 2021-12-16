import request from 'supertest';

import app from '../src/app.js';
import User from '../src/models/user/User.js';

import sequelize from '../src/config/database.js';

import SMTP_SERVER from 'smtp-server';

const { SMTPServer } = SMTP_SERVER;

let lastMail, server;
let simulateSMTPServer = false;

beforeAll(async () => {
	server = new SMTPServer({
		authOptional: true,
		onData(stream, session, callback) {
			let mailBody;
			stream.on('data', (data) => {
				mailBody += data.toString();
			});
			stream.on('end', () => {
				if (simulateSMTPServer) {
					const err = new Error('invalid mailbox');
					err.responseCode = 553;
					return callback(err);
				}
				lastMail = mailBody;
				callback();
			});
		},
	});

	await server.listen(8587, 'localhost');

	await sequelize.sync({ force: true });
});
beforeEach(() => {
	simulateSMTPServer = false;
	return User.destroy({ truncate: true });
});

afterAll(async () => {
	await server.close();
});

const validUser = {
	username: 'user1',
	email: 'user1@mail.com',
	password: 'P4ssword',
};

const postUser = async (user = validUser, options = {}) => {
	const agent = request(app).post('/api/1.0/users');
	if (options.language) {
		agent.set('Accept-Language', options.language);
	}

	return agent.send(user);
};

describe('User Registration', () => {
	const usernameNull = 'Username cannot be null';
	const usernameSize = 'Must have min 4 and max 32 characters';
	const emailNull = 'E-mail cannot be null';
	const emailInvalid = 'E-mail is not valid';
	const passwordNull = 'Password cannot be null';
	const passwordMin = 'Password must be at least 6 characters';
	const passwordPattern =
		'Password must have at least 1 uppercase, 1 lowercase letter and 1 number';
	const emailInUse = 'E-mail in use';
	const userCreatedSuccess = 'User created';
	const emailFailure = 'E-mail failure';

	it('returns 200 ok when signup request is valid', async () => {
		const response = await postUser();
		expect(response.status).toBe(200);
	});

	it(`returns ${userCreatedSuccess} when signup request is valid`, async () => {
		const response = await postUser();
		expect(response.body.message).toBe(userCreatedSuccess);
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

	it.each`
		field         | value              | expectedMessage
		${'username'} | ${null}            | ${usernameNull}
		${'username'} | ${'usr'}           | ${usernameSize}
		${'username'} | ${'a'.repeat(33)}  | ${usernameSize}
		${'email'}    | ${null}            | ${emailNull}
		${'email'}    | ${'mail.com'}      | ${emailInvalid}
		${'email'}    | ${'user.mail.com'} | ${emailInvalid}
		${'email'}    | ${'user@com'}      | ${emailInvalid}
		${'password'} | ${null}            | ${passwordNull}
		${'password'} | ${'P4ssw'}         | ${passwordMin}
		${'password'} | ${'alllowercase'}  | ${passwordPattern}
		${'password'} | ${'ALLUPPERCASE'}  | ${passwordPattern}
		${'password'} | ${'123456789'}     | ${passwordPattern}
		${'password'} | ${'lowerand6789'}  | ${passwordPattern}
		${'password'} | ${'UPPERAND6789'}  | ${passwordPattern}
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
		expect(validationErrors.email).toBe(emailInUse);
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
	it('creates user in inactive mode', async () => {
		await postUser();
		const users = await User.findAll();
		const savedUser = users[0];
		expect(savedUser.inactive).toBe(true);
	});
	it('creates user in inactive mode even if the request body contains inactive as false', async () => {
		const newUser = { ...validUser, inactive: false };
		await postUser(newUser);
		const users = await User.findAll();
		const savedUser = users[0];
		expect(savedUser.inactive).toBe(true);
	});
	it('creates an activation token for user', async () => {
		await postUser();
		const users = await User.findAll();
		const savedUser = users[0];
		expect(savedUser.activationToken).toBeTruthy();
	});
	it('sends an account activation email with activationToken', async () => {
		await postUser();

		const users = await User.findAll();
		const savedUser = users[0];

		expect(lastMail).toContain('user1@mail.com');
		expect(lastMail).toContain(savedUser.activationToken);
	});
	it('returns 502 bad gateway when sending email fails', async () => {
		simulateSMTPServer = true;
		const response = await postUser();
		expect(response.status).toBe(502);
	});
	it('returns Email failure message when sending email', async () => {
		simulateSMTPServer = true;
		const response = await postUser();
		expect(response.body.message).toBe(emailFailure);
	});
	it('does not save user to database if activation email fails', async () => {
		simulateSMTPServer = true;
		const response = await postUser();
		const users = await User.findAll();
		expect(users.length).toBe(0);
	});
});

describe('Internationalization', () => {
	const usernameNull = 'El nombre de usuario no puede ser nulo';
	const usernameSize = 'Debe tener un mínimo de 4 y un máximo de 32 caracteres';
	const emailNull = 'El correo electrónico no puede ser nulo';
	const emailInvalid = 'El correo no es válido';
	const passwordNull = 'La contraseña no puede ser nula';
	const passwordMin = 'La contraseña debe tener al menos 6 caracteres';
	const passwordPattern =
		'La contraseña debe tener al menos 1 mayúscula, 1 letra minúscula y 1 número';
	const emailInUse = 'Correo electrónico en uso';
	const userCreatedSuccess = 'Usuario creado';
	const emailFailure = 'Error de correo electrónico';

	it.each`
		field         | value              | expectedMessage
		${'username'} | ${null}            | ${usernameNull}
		${'username'} | ${'usr'}           | ${usernameSize}
		${'username'} | ${'a'.repeat(33)}  | ${usernameSize}
		${'email'}    | ${null}            | ${emailNull}
		${'email'}    | ${'mail.com'}      | ${emailInvalid}
		${'email'}    | ${'user.mail.com'} | ${emailInvalid}
		${'email'}    | ${'user@com'}      | ${emailInvalid}
		${'password'} | ${null}            | ${passwordNull}
		${'password'} | ${'P4ssw'}         | ${passwordMin}
		${'password'} | ${'alllowercase'}  | ${passwordPattern}
		${'password'} | ${'ALLUPPERCASE'}  | ${passwordPattern}
		${'password'} | ${'123456789'}     | ${passwordPattern}
		${'password'} | ${'lowerand6789'}  | ${passwordPattern}
		${'password'} | ${'UPPERAND6789'}  | ${passwordPattern}
	`(
		'returns $expectedMessage when $field is $value when language is set to Spanish',
		async ({ field, expectedMessage, value }) => {
			const user = {
				username: 'user1',
				email: 'user1@mail.com',
				password: 'P4ssword',
			};
			user[field] = value;
			const response = await postUser(user, { language: 'es' });
			const { body } = response;
			expect(body.validationErrors[field]).toBe(expectedMessage);
		},
	);
	it(`returns ${emailInUse} when same email is already in use when language is set as Spanish`, async () => {
		await User.create({ ...validUser });
		const response = await postUser({ ...validUser }, { language: 'es' });
		const { validationErrors } = response.body;
		expect(validationErrors.email).toBe(emailInUse);
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
	it(`returns ${userCreatedSuccess} when signup request is valid and language is set to Spanish`, async () => {
		const response = await postUser({ ...validUser }, { language: 'es' });
		expect(response.body.message).toBe(userCreatedSuccess);
	});
	it(`returns ${emailFailure} email when sending email and language is set to Spanish`, async () => {
		simulateSMTPServer = true;
		const response = await postUser({ ...validUser }, { language: 'es' });

		expect(response.body.message).toBe(emailFailure);
	});
});
