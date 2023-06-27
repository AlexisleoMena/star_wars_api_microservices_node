const sendResponse = require("../utils/sendResponse");
const Films = require("../data");

module.exports = async (req, res) => {
  const films = await Films.list();
  sendResponse(res, 200, films);
};
