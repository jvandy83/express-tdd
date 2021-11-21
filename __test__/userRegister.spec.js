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

describe('User Registration', () => {
	it('returns 200 ok when signup request is valid', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'password',
			})
			.then((response) => {
				expect(response.status).toBe(200);
				done();
			});
	});

	it('returns success message when signup request is valid', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'password',
			})
			.then((response) => {
				expect(response.ok).toBe(true);
				done();
			});
	});
	it('saves the user to a database', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'password',
			})
			.then(() => {
				User.findAll().then((userList) => {
					expect(userList.length).toBe(1);
					done();
				});
			});
	});
	it('saves the username and email to a database', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'password',
			})
			.then(() => {
				User.findAll().then((userList) => {
					const user = userList[0];
					expect(user.username).toBe('user1');
					expect(user.email).toBe('user1@mail.com');
					done();
				});
			});
	});
	it('it hashes the password in database', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'password',
			})
			.then(() => {
				User.findAll().then((userList) => {
					const user = userList[0];
					expect(user.password).not.toBe('password');
					done();
				});
			});
	});
});
