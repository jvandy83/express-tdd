import { Sequelize } from 'sequelize';

const { DATABASE, DB_USER, DB_PASSWORD } = process.env;

console.log('process.env from database.js: ', process.env);

const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
	dialect: 'sqlite',
	storage: './database.sqlite',
	logging: false,
});

export default sequelize;
