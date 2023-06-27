const sendResponse = require("../utils/sendResponse");
const Planets = require("../data");

module.exports = async (req, res) => {
  const planets = await Planets.list();
  sendResponse(res, 200, planets);
};
