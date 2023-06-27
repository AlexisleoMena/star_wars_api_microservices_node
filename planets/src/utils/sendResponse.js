module.exports = function sendRespose (res, statusCode, data) {
  res.status(statusCode).json({
    error: false,
    data,
  });
};
