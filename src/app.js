const fastify = require('fastify')();
const typeormConfig = require('./typeorm-config');

const connectToDatabase = async () => {
  try {
    const connection = await typeormConfig.initialize();
    console.log('Connected to the database');
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    setTimeout(connectToDatabase, 5000);
  }
};

connectToDatabase();

fastify.get('/', async (request, reply) => {
  return { message: 'Hello world' };
});

fastify.listen({ port: 3001, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server is listening at ${address}`);
});
