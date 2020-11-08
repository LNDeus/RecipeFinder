const querystring = require('querystring');
const axios = require('axios');
const { ClientError } = require('../libs');

class Giphy {
  static url = 'https://api.giphy.com/v1/gifs/search';

  /**
   * Searches for a gif.
   * @param {string} title
   * @return {Promise[]}
   */
  static async search(title) {
    const query = {
      api_key: process.env.GIPHY_API_KEY,
      q: title,
      limit: 1
    };

    const { data } = await axios.get(
      Giphy.url + `?${querystring.stringify(query)}`
    );

    return data;
  }
}

module.exports = Giphy;
