const sendResponse = require("../utils/sendResponse");
const Character = require("../data");

module.exports = async (req, res) => {
  const characters = await Character.list();
  sendResponse(res, 200, characters);
};
