const express = require("express");
const morgan = require("morgan");
const middlewares = require("./utils/middlewares");
const CharacterRouter = require("../src/routes");


const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));

server.use("/characters", CharacterRouter);

server.use("*", middlewares.notFoundHandler);
server.use(middlewares.errorHandler);

module.exports = server;
