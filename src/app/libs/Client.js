const http = require('http');
const querystring = require('querystring');

class Client {
  /**
   * @param stringBody
   * @return {{'Cache-Control': string, Accept: string, Connection: string, 'Content-Type': string}}
   */
  static defaultHeaders(stringBody = null) {
    const headers = {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
    };

    if (stringBody) {
      headers['Content-Length'] = stringBody.length;
    }

    return headers;
  }

  /**
   * @param {object} options
   * @param {object} body
   * @return {Promise<unknown>}
   */
  static request(options, body= null) {
    if (options.query) {
      options.path += `?${querystring.stringify(options.query)}`;
    }

    return new Promise((resolve, reject) => {
      const req = http.request(options, response => {
        try {
          let responseData = '';

          response.on('data', data => {
            responseData += data;
          });

          response.on('end', () => {
            if (options.parseData) {
              responseData = JSON.parse(responseData);
            }

            resolve({
              data: responseData,
              response,
            });
          });

          response.on('error', err => {
            reject(err);
          });
        } catch (err) {
          reject(err);
        }
      });

      req.on('error', err => {
        reject(err);
      });

      if (body) req.write(body);

      req.end();
    });
  }

  /**
   * @param {object} options
   * @return {Promise<unknown>}
   */
  static get( options) {
    const mergedOptions = {
      headers: Client.defaultHeaders(),
      method: 'GET',
      parseData: true,
      ...options,
    };

    return Client.request(mergedOptions);
  }
}

module.exports = Client;
