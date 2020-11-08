const { validationResult } = require('express-validator');
const { ClientError } = require('../libs');

class Validation {
  /**
   * @param req
   */
  static validate(req) {
    if (!req) {
      throw Error('Param \'req\' is required');
    }

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new ClientError(ClientError.ERROR_BAD_REQUEST_ERROR,
        errors.array());
    }
  }
}

module.exports = Validation;
