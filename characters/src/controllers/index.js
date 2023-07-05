const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getCharacters: catchAsyncHandler(require("./getCharacters")),
  getCharacter: catchAsyncHandler(require("./getCharacter")),
  postCharacter: catchAsyncHandler(require("./postCharacter")),
  putCharacter: catchAsyncHandler(require("./putCharacter")),
  deleteCharacter: catchAsyncHandler(require("./deleteCharacter")),
};
