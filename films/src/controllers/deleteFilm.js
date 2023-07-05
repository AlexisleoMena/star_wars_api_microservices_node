const axios = require("axios");
const sendResponse = require("../utils/sendResponse");

module.exports = async (req, res) => {
  await axios.delete("http://database:8004/Film/" + req.params.id);
  sendResponse(res, 200, null);
};