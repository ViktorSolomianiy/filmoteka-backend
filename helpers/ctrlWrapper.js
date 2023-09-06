const HttpError = require('./HttpError');

const ctrlWrapper = (ctrl) => {
  const func = async (request, reply) => {
    try {
      await ctrl(request, reply);
    } catch (error) {
      throw HttpError(error.status, error);
    }
  };

  return func;
};

module.exports = ctrlWrapper;
