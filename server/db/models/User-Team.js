const { DataTypes } = require("sequelize");
const db = require("../db");

const UserTeam = db.define("userToTeam");

module.exports = UserTeam;
