const { StatusCodes } = require('http-status-codes');

const { colorRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const data = await colorRepository.getById(id);
  if (!data) {
    throw new ApplicationError(
      messages.notFound('color'),
      StatusCodes.NOT_FOUND
    );
  }

  Object.assign(data, body);

  return colorRepository.update(data);
};
