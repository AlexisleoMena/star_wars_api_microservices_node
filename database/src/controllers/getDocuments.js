const db = require("../db")
const sendResponse = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection } = req.params;
  const documents = await db[collection].list();
  sendResponse(res, 200, documents);
};

