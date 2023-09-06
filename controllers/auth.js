const { nanoid } = require('nanoid');

const { ctrlWrapper, HttpError } = require('../helpers');
const { validateBody } = require('../middlewares');
const { schemas } = require('../schemas/auth');
const db = require('../typeorm-config');

const getInfo = async (request, reply) => {
  const userRepository = db.getRepository('User');
  const users = await userRepository.find();

  reply.code(200).send(users);
};

const register = async (request, reply) => {
  const { name, email, password } = request.body;
  const user = { id: nanoid(), name, email, password };

  await validateBody(schemas.registerSchema)(request, reply);

  const userRepository = db.getRepository('User');

  const existingUserByEmail = await userRepository.findOne({ where: { email } });
  const existingUserByPassword = await userRepository.findOne({ where: { password } });

  if (existingUserByEmail && existingUserByPassword) {
    throw HttpError(409, 'This email or password already exists');
  }

  await userRepository.save(user);

  reply.code(201).send({ id: user.id, name, email });
};

module.exports = {
  register: ctrlWrapper(register),
  getInfo: ctrlWrapper(getInfo),
};
