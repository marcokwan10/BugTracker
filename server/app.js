const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const { clientOriginUrl } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");

const app = express();
const apiRouter = express.Router();

app.use(helmet());
app.use(cors({ origin: clientOriginUrl }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
	console.log(err);
	res.status(500).send(err.message);
});

module.exports = app;
