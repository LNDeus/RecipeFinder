const Reponse = require('../../../app/libs/Response');
const ClientError = require('../../../app/libs/ClientError');
const mock = require('./mock');

test('Sending response to client', () => {
  const response = new Reponse(mock.res);
  expect((response.send(mock.body)).data).toEqual(mock.body);

  const clientError = (new ClientError(ClientError.ERROR_INTERNAL_ERROR));
  expect((response.send(clientError)).details).toEqual(clientError.format());
});
