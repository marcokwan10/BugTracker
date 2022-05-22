const Sequelize = require("sequelize");
const databaseName = "bugtracker";

const config = {
	logging: false,
};

const db = new Sequelize(process.env.SERVER_URL || `postgres://localhost:5432/${databaseName}`, config);

module.exports = db;
