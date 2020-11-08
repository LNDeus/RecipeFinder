const axios = require('axios');
const querystring = require('querystring');
const {ToolBox, ClientError} = require('../libs');
const Giphy = require('./Giphy');

class RecipePuppy {
  static url = 'http://www.recipepuppy.com/api';

  /**
   * Searches for recipes.
   * @param {object} options
   * @param {string|undefined} options.ingredients String list of ingredients, separated by comma. Ex: "onion,tomato".
   * @param {string|undefined} options.searchQuery Normal search query.
   * @param {boolean} options.searchGif If true, searches a gif for each recipe by it's title.
   * @return {Promise[]}
   */
  static async search(options) {
    const query = {};

    if (!options.ingredients && !options.searchQuery) {
      throw new Error('You must inform one of: "ingredients" or "query".');
    }

    if (options.ingredients) {
      query.i = options.ingredients;
    }

    if (options.searchQuery) {
      query.q = options.searchQuery;
    }

    const {data} = await axios.get(
      RecipePuppy.url + `?${querystring.stringify(query)}`
    ).catch((err) => {
      console.error(err);
      throw new ClientError(ClientError.ERROR_THIRD_PART_SERVICES_UNAVAILABLE_ERROR, 'RecipePuppy');
    });

    data.results = data.results.map(async (recipe) => {
      const mappedRecipe = {
        title: recipe.title,
        ingredients: ToolBox.stringListToArray(recipe.ingredients, {
          splitter: ', ',
          order: true,
        }),
        link: recipe.href,
      };

      if (options.searchGif) {
        mappedRecipe.gif = (await Giphy.search(recipe.title)).data[0].url;
      }

      return mappedRecipe;
    });

    const recipes = await Promise.all(data.results);

    return {
      keywords: options.ingredients ? ToolBox.stringListToArray(
        options.ingredients) : undefined,
      query: options.searchQuery,
      recipes,
    };
  }
}

module.exports = RecipePuppy;
