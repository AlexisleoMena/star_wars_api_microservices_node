const axios = require("axios");
const sendResponse = require("../utils/sendResponse");
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  const { data } = await axios.delete("http://database:8004/Character/" + req.params.id);
  if(!data.data) return next(sendError("Document not found.", 404));
  sendResponse(res, 200, null);
};
