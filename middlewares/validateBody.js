const { HttpError } = require('../helpers');

const validateBody = (schema) => {
  const func = async (request, reply) => {
    const { error } = schema.validate(request.body);

    if (error) {
      throw HttpError(400, error.message);
    }
  };

  return func;
};

module.exports = validateBody;
