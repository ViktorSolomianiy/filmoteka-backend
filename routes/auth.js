const { getInfo } = require('../controllers/auth');

const routes = (fastify) => {
  fastify.get('/', getInfo);
};

module.exports = routes;
