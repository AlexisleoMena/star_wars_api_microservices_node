const db = require("../db")
const sendResponse = require('../utils/sendResponse');
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  const { collection, id } = req.params;
  const deletedDocument = await db[collection].delete(id);
  if(!deletedDocument) return next(sendError("Document not found.", 404));
  sendResponse(res, 200, deletedDocument);
};
