const { DataTypes } = require("sequelize");
const db = require("../db");

const Ticket = db.define("ticket", {
	description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	status: {
		type: DataTypes.ENUM,
		values: ["open", "closed"],
		allowNull: false,
	},
	priority: {
		type: DataTypes.INTEGER,
		validate: {
			max: 5,
			min: 1,
		},
	},
	time_allocated: {
		type: DataTypes.INTEGER,
		validate: {
			max: 30,
		},
	},
});

module.exports = Ticket;
