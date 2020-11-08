const {query, oneOf} = require('express-validator');
const {RecipePuppy} = require('../services');
const {Validation, Response, ToolBox} = require('../libs');

module.exports = (router) => {
  router.get('/', [
    oneOf([
      query('i').isString().custom((v) => {
        const array = ToolBox.stringListToArray(v);

        if (array.length > 3) {
          throw new Error('Maximun lenght for this field is 3.');
        }

        return true;
      }),
      query('q').isString(),
    ]),
  ], async (req, res, next) => {
    try {
      Validation.validate(req);

      const searchResponse = await RecipePuppy.search({
        ingredients: req.query.i,
        searchQuery: req.query.q,
        searchGif: true,
      });

      return (new Response(res)).send(searchResponse);
    } catch (e) {
      return next(e);
    }
  });

  return router;
};
