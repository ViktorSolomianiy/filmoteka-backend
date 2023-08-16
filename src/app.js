const fastify = require('fastify')();
const typeormConfig = require('./typeorm-config');

typeormConfig
  .initialize()
  .then((connection) => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Error conncetion =', err);
  });

fastify.get('/', async (request, reply) => {
  return { message: 'Hello world' };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(`Server is listening at ${address}`);
});
