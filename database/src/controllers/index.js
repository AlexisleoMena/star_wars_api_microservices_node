const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getDocuments: catchAsyncHandler(require("./getDocuments")),
  getDocument: catchAsyncHandler(require("./getDocument")),
};
