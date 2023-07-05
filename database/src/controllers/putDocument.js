const db = require("../db")
const sendResponse = require('../utils/sendResponse');
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  const { collection, id } = req.params;
  const updatedDocument = await db[collection].update(id, req.body);
  if(!updatedDocument) return next(sendError("Document not found.", 404));
  sendResponse(res, 201, updatedDocument);
};
