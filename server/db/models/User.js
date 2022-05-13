const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
	id: {
		type: DataTypes.STRING,
		unique: true,
		primaryKey: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	picture: {
		type: DataTypes.STRING,
		validate: {
			isUrl: true,
		},
	},
});

module.exports = User;
