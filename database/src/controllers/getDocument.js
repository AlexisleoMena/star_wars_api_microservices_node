const db = require("../db")
const response = require('../utils/sendResponse');

module.exports = async (req, res) => {
  const { collection, id } = req.params;
  const document = await db[collection].get(id);
  response(res, 200, document);
};
