const { DataTypes } = require("sequelize");
const db = require("../db");

const Project = db.define("project", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Project;
