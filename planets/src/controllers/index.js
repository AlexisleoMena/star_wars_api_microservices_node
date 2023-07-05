const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getPlanets: catchAsyncHandler(require("./getPlanets")),
  getPlanet: catchAsyncHandler(require("./getPlanet")),
  postPlanet: catchAsyncHandler(require("./postPlanet")),
  putPlanet: catchAsyncHandler(require("./putPlanet")),
  deletePlanet: catchAsyncHandler(require("./deletePlanet")),
};
