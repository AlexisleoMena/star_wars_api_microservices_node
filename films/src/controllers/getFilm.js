const sendResponse = require("../utils/sendResponse");
const Films = require("../data");

module.exports = async (req, res) => {
  const film = await Films.get(req.params.id);
	if(!film) return sendResponse(res, 404, null);
  sendResponse(res, 200, film);
};
