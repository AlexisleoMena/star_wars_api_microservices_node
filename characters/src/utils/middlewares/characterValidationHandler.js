const sendError = require("../createClientError");

module.exports = (req, res, next) => {
  const requiredProperties = [
    "_id",
    "name",
    "birth_year",
    "eye_color",
    "gender",
    "hair_color",
    "height",
    "mass",
    "skin_color",
    "homeworld",
    "films",
  ];
  const requestBodyKeys = Object.keys(req.body);

  const areAllPropertiesPresent = requiredProperties.every(
    (property) => requestBodyKeys.includes(property)
  );

  if (!areAllPropertiesPresent) {
    return next(sendError("Some Required properties are missing."));
  }

  next();
};
