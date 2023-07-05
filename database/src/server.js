const express = require("express");
const morgan = require("morgan");
const { notFoundHandler, errorHandler } = require("../src/utils/middlewares");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan("dev"));
server.use(require("./routes"));

server.use("*", notFoundHandler);
server.use(errorHandler);

module.exports = server;
