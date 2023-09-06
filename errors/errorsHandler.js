const notFoundHandler = (request, reply) => {
  reply.code(404).send({ message: 'Not Found' });
};

const errorHandler = (error, request, reply) => {
  const { status = 500, message = 'Server error' } = error;
  reply.code(status).send({ message });
};

module.exports = { notFoundHandler, errorHandler };
