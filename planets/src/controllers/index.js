const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getPlanets: catchAsyncHandler(require("./getPlanets")),
  getPlanet: catchAsyncHandler(require("./getPlanet")),
};
