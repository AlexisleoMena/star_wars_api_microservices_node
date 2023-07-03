const db = require("../db")
const response = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection } = req.params;
  const documents = await db[collection].list();
  response(res, 200, documents);
};

