const Sequelize = require("sequelize");

const config = {
	logging: false,
};

const db = new Sequelize(process.env.SERVER_URL, config);

module.exports = db;
