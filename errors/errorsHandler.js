const notFoundHandler = (req, rep) => {
  rep.code(404).send({ message: 'Not Found' });
};

const errorHandler = (err, req, rep) => {
  const { statusCode = 500, message = 'Server error' } = err;
  rep.code(statusCode).send({ message });
};

module.exports = { notFoundHandler, errorHandler };
