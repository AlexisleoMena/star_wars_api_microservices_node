const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getCharacters: catchAsyncHandler(require("./getCharacters")),
  getCharacter: catchAsyncHandler(require("./getCharacter")),
};
