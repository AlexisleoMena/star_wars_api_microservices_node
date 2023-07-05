const { catchAsyncHandler } = require("../utils/middlewares");

module.exports = {
  getDocuments: catchAsyncHandler(require("./getDocuments")),
  getDocument: catchAsyncHandler(require("./getDocument")),
  postDocument: catchAsyncHandler(require("./postDocument")),
  putDocument: catchAsyncHandler(require("./putDocument")),
  deleteDocument: catchAsyncHandler(require("./deleteDocument")),
};
