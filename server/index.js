const { serverPort } = require("./config/env.dev");
const app = require("./app");
const { db } = require("./db");

const init = async () => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		console.log("Attempt to sync db.");
		await db.sync({ force: true }); //sync({ force: true }) - This creates the table, dropping it first if it already existed
		console.log("db synced!");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}

	app.listen(serverPort, () => console.log(`Mixing it up on port ${serverPort}`));
};

init();
