const sendError = require("../createClientError");

module.exports = (req, res, next) => {
  const requiredProperties = [
    "_id",
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "residents",
    "films"
  ]
  const requestBodyKeys = Object.keys(req.body);

  const areAllPropertiesPresent = requiredProperties.every(
    (property) => requestBodyKeys.includes(property)
  );

  if (!areAllPropertiesPresent) {
    return next(sendError("Some Required properties are missing."));
  }

  next();
};
