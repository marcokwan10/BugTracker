const { DataTypes } = require("sequelize");
const db = require("../db");

const UserTeam = db.define("user-team", {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
});

module.exports = UserTeam;
