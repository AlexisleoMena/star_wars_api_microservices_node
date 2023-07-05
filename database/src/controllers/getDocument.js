const db = require("../db")
const sendResponse = require('../utils/sendResponse');
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  const { collection, id } = req.params;
  const document = await db[collection].get(id);
  if(!document) return next(sendError("Document not found.", 404));
  sendResponse(res, 200, document);
};
