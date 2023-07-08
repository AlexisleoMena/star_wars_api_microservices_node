const axios = require("axios");
const sendResponse = require("../utils/sendResponse");
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  const { data } = await axios.get("http://database:8004/Film");
  if(!data.data.length) return next(sendError("Collection empty.", 404));
  sendResponse(res, 200, data.data);
};
