const { DataTypes } = require("sequelize");
const db = require("../db");

const Team = db.define("team", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Team;
