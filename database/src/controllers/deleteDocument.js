const db = require("../db")
const sendResponse = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection, id } = req.params;
  const deletedDocument = await db[collection].delete(id);
  sendResponse(res, 200, deletedDocument);
};
