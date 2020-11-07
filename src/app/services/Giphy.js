const Client = require('../libs/Client');

class Giphy {
  static host = 'api.giphy.com';
  static path = '/v1/gifs/search';

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

    const { data } = await Client.get({
      hostname: this.host,
      path: this.path,
      query
    });

    return data;
  }
}

module.exports = Giphy;
