const sendResponse = require("../utils/sendResponse");
const Character = require("../data");

module.exports = async (req, res) => {
  const character = await Character.get(req.params.id);
	if(!character) return sendResponse(res, 404, null);
  sendResponse(res, 200, character);
};
