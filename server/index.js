const { serverPort } = require("./config/env.dev");
const app = require("./app");

const init = () => {
	app.listen(serverPort, () => console.log(`Mixing it up on port ${serverPort}`));
};

init();
