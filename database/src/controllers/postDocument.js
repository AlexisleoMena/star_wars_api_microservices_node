const db = require("../db")
const sendResponse = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection } = req.params;
  const createdDocument = await db[collection].add(req.body);
  sendResponse(res, 201, createdDocument);
};
