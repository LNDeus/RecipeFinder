const texts = {};
texts.checkAndTryAgain = 'Please, check it and try again.';
texts.contactMe = 'contact-me on lucas@norenberg.com.br';
texts.tryAgainLater = `Please, try again later. If the problem persists, please, ${texts.contactMe}.`;

const extraFields = {
  validationError: {
    field: 'details',
    type: 'array'
  },
  pathNotFoundError: {
    field: 'path',
    type: 'string'
  },
  thirdPartServiceError: {
    field: 'serviceName',
    type: 'string'
  }
};

module.exports = [
  {
    code: 1,
    name: 'BAD_REQUEST_ERROR',
    description: `It looks like there is an error on your request. ${texts.checkAndTryAgain}`,
    statusCode: 400,
    extraField: extraFields.validationError
  },
  {
    code: 2,
    name: 'THIRD_PART_SERVICES_UNAVAILABLE_ERROR',
    description: `Looks like a third part service we depend on is unavailable. ${texts.tryAgainLater}`,
    statusCode: 503,
    extraFields: extraFields.thirdPartServiceError
  },
  {
    code: 3,
    name: 'PATH_NOT_FOUND',
    description: `Recieved path not found. ${texts.checkAndTryAgain}`,
    statusCode: 404,
    extraField: extraFields.pathNotFoundError
  },
  {
    code: 4,
    name: 'INTERNAL_ERROR',
    description: `Looks like our service has an internal error. Please, ${texts.contactMe}`,
    statusCode: 500,
    extraField: null
  }
];
