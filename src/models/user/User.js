import Sequelize from 'sequelize';

import sequelize from '../../config/database.js';

const Model = Sequelize.Model;

class User extends Model {}

User.init(
	{
		username: {
			type: Sequelize.STRING,
		},
		email: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		inactive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		},
		activationToken: Sequelize.STRING,
	},
	{ sequelize, modelName: 'user' },
);

export default User;
