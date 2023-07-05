const sendError = require("../createClientError");

module.exports = (req, res, next) => {
  const requiredProperties = [
    "_id",
    "title",
    "opening_crawl",
    "director",
    "producer",
    "release_date",
    "characters",
    "planets",
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
