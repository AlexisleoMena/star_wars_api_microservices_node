const axios = require("axios");
const sendResponse = require("../utils/sendResponse");

module.exports = async (req, res) => {
  const { data } = await axios.post("http://database:8004/Character", req.body);
  sendResponse(res, 201, data.data);
};
