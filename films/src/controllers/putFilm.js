const axios = require("axios");
const sendResponse = require("../utils/sendResponse");
const sendError = require("../utils/createClientError");

module.exports = async (req, res, next) => {
  if(req.body._id !== req.params.id) return next(sendError("IDs do not match."));
  const { data } = await axios.put("http://database:8004/Film/" + req.params.id, req.body);
  sendResponse(res, 201, data.data);
};
