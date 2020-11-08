'use strict';
const Response = require('../libs/Response');
const ClientError = require('../libs/ClientError');

module.exports = function (err, req, res, next) {
  try {
    let response = err;
    if (err) {
      // If the err is not a ClientError instance, we suppose it's an internal
      // error.
      if (!(err instanceof ClientError)) {
        console.error(err);
        response = new ClientError(ClientError.ERROR_INTERNAL_ERROR);
      }

      return (new Response(res)).send(response);
    }

    return next();
  } catch (e) {
    console.error(e);
    const clientError = ClientError.findByCode(ClientError.ERROR_INTERNAL_ERROR);
    return res.sendStatus(clientError.statusCode);
  }
};
