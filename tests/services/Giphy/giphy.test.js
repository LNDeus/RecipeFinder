const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const {Giphy} = require('../../../app/services');
const mock = require('./mock');

let axiosMock;

beforeEach(() => {
  axiosMock = new MockAdapter(axios);
  axiosMock.reset();
});

it('Fetches a gif from Giphy', async () => {
  axiosMock.onGet(/\/v1\/gifs\/search/).replyOnce(200, mock.response);

  const gifUrl = (await Giphy.search('teste')).data[0].url;

  expect(gifUrl).toEqual(mock.gifUrl);
});
