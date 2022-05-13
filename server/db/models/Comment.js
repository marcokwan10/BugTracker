const { DataTypes } = require("sequelize");
const db = require("../db");

const Comment = db.define("comment", {
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
});

module.exports = Comment;
