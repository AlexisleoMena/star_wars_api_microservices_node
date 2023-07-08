const db = require("../db")
const sendResponse = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection, id } = req.params;
  const document = await db[collection].get(id);
  sendResponse(res, 200, document);
};
