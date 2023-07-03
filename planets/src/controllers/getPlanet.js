const axios = require("axios");
const sendResponse = require("../utils/sendResponse");
const sendError = require("../utils/createClientError");

module.exports = async (req, res) => {
  const { data } = await axios.get("http://database:8004/Planet/" + req.params.id);
  if (data.error) return sendError(data.error);
  if(!data.data) return sendResponse(res, 404, null);
  sendResponse(res, 200, data.data);
};
