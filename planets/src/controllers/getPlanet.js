const sendResponse = require("../utils/sendResponse");
const Planets = require("../data");

module.exports = async (req, res) => {
  const planet = await Planets.get(req.params.id);
	if(!planet) return sendResponse(res, 404, null);
  sendResponse(res, 200, planet);
};
