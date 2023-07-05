module.exports = function (err, req, res, next) {
  res.status(err.response?.status || err.statusCode || 500).send({
    error: true,
    message: err.response?.data?.message ?? err.message,
  });
};
