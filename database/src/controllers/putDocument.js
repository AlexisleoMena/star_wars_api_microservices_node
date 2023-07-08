const db = require("../db")
const sendResponse = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection, id } = req.params;
  const updatedDocument = await db[collection].update(id, req.body);
  sendResponse(res, 201, updatedDocument);
};
