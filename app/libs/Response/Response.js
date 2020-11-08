'use strict';
const ClientError = require('../ClientError');
const {
  SuccessResponseTemplate,
  ErrorResponseTemplate
} = require('./response-interfaces');

/**
 * Class to facilitates and guarantee a response pattern in all application's
 * routes.
 */
class Response {
  /**
   * @param {*} res
   */
  constructor(res) {
    this.res = res;
  }

  /**
   * Setter for status.
   * @param value
   */
  setStatus(value) {
    this.res.status(value);
  }

  /**
   * Check if value is an instance of ClientError.
   * @param {any} value
   * @return {boolean}
   */
  static isClientError (value) {
    return value instanceof ClientError;
  }

  /**
   * Centralize the calls of methods used to prepare the response.
   */
  prepareResponse () {
    this.formatResponse();
    this.setHeaders();
  }

  /**
   * Check if response data is on a correct format and put it in according with
   * error or success interfaces.
   * @throws
   * @return {boolean}
   */
  formatResponse () {
    this.isArray = Array.isArray(this.body);
    this.isObject = typeof this.body === 'object';
    this.isClientErr = Response.isClientError(this.body);

    if (this.isArray || this.isObject || this.isClientErr) {
      if (this.isClientErr) {
        this.setStatus(this.body.errorResource.statusCode);

        this.responseData = ErrorResponseTemplate.apply(this.body.format());
      } else {
        this.responseData = SuccessResponseTemplate.apply(this.body);
      }

      return true;
    }

    throw Error('Response body is not valid');
  }

  /**
   * Set response default headers.
   */
  setHeaders () {
    this.res.set('Content-Type', 'text/JSON');
    this.res.set('Content-Length', JSON.stringify(this.responseData).length);
  }

  /**
   * Sends response to client after put it on the default format.
   * @param body {Array|Object|ClientError|*}
   * @returns {*}
   */
  send (body) {
    this.body = body;
    this.prepareResponse();
    return this.res.send(this.responseData);
  }
}

module.exports = Response;
