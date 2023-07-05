const axios = require("axios");
const sendResponse = require("../utils/sendResponse");

module.exports = async (req, res) => {
  const { data } = await axios.get("http://database:8004/Planet/" + req.params.id);
  sendResponse(res, 200, data.data);
};
