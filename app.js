const fastify = require('fastify')();
fastify.register(require('@fastify/sensible'));
const cors = require('fastify-cors');

const { errorHandler, notFoundHandler } = require('./errors/errorsHandler');
const { connectToDatabase } = require('./server');
const authRouter = require('./routes/auth');

fastify.setErrorHandler(errorHandler);
fastify.setNotFoundHandler(notFoundHandler);

const startServer = async () => {
  await connectToDatabase();

  fastify.register(cors, {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  authRouter(fastify);

  fastify.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log(`Server is listening at ${address}`);
  });
};

startServer();
