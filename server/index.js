const { serverPort } = require("./config/env.dev");
const app = require("./app");
const { db } = require("./db");
const seed = require("../script/seed");

const init = async () => {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
		if (process.env.SEED === "true") {
			await seed();
		} else {
			await db.sync();
		}
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}

	app.listen(serverPort, () => console.log(`Mixing it up on port ${serverPort}`));
};

init();
