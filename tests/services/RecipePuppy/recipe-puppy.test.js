const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { RecipePuppy } = require('../../../src/app/services');
const mock = require('./mock');
const gifMock = require('../Giphy/mock');

let axiosMock;

beforeEach(() => {
  axiosMock = new MockAdapter(axios);
  axiosMock.reset();
});

it('Searches for recipes', async () => {
  axiosMock.onGet(/\/api/).replyOnce(200, mock.response);
  axiosMock.onGet(/\/v1\/gifs\/search/).reply(200, gifMock.response);

  const recipes = await RecipePuppy.search({
    ingredients: 'onions,tomato',
    searchQuery: 'omelete',
    searchGif: true
  });

  expect(recipes).toEqual(mock.expectedResultFromSearch);
});
