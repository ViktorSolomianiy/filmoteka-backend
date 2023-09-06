const { register, getInfo } = require('../controllers/auth');

const authRouter = (fastify) => {
  fastify.get('/', getInfo);
  fastify.post('/register', register);
};

module.exports = authRouter;
