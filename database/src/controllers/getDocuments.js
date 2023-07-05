const db = require("../db")
const sendResponse = require('../utils/sendResponse');
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  const { collection } = req.params;
  const documents = await db[collection].list();
  if(!documents.length) return next(sendError("Collection empty.", 404));
  sendResponse(res, 200, documents);
};

