const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getFilms: catchAsyncHandler(require("./getFilms")),
  getFilm: catchAsyncHandler(require("./getFilm")),
};
