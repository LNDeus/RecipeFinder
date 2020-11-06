const Response = require('../libs/Response');
const ClientError = require('../libs/ClientError');

module.exports = (req, res) => {
  try {
    return (new Response(res)).send(new ClientError(ClientError.ERROR_PATH_NOT_FOUND, req.path));
  } catch (e) {
    console.error(e);
  }
};
