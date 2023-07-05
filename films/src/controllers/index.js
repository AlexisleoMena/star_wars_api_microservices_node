const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getFilms: catchAsyncHandler(require("./getFilms")),
  getFilm: catchAsyncHandler(require("./getFilm")),
  postFilm: catchAsyncHandler(require("./postFilm")),
  putFilm: catchAsyncHandler(require("./putFilm")),
  deleteFilm: catchAsyncHandler(require("./deleteFilm")),
};
