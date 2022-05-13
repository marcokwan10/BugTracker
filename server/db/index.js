const db = require("./db");

const User = require("./models/User");
const Ticket = require("./models/Ticket");
const Team = require("./models/Team");
const Project = require("./models/Project");
const Comment = require("./models/Comment");
const UserTeam = require("./models/User-Team");

//table associations
Team.hasMany(User);
User.belongsToMany(Team, { through: UserTeam });

Team.hasMany(Project);
Project.belongsTo(Team);

Project.hasMany(Ticket);
Ticket.belongsTo(Project);

Ticket.hasMany(Comment);
Comment.belongsTo(Ticket);

module.exports = {
	db,
	models: {
		User,
		Ticket,
		Team,
		Project,
		Comment,
		UserTeam,
	},
};
