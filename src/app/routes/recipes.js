const Response = require('../libs/Response');
const { RecipePuppy } = require('../services');

module.exports = (router) => {
  router.get('/', async (req, res, next) => {
    try {
      const searchResponse = await RecipePuppy.search({
        ingredients: req.query.i,
        searchQuery: req.query.q,
        searchGif: true
      });

      return (new Response(res)).send(searchResponse);
    } catch (e) {
      return next(e);
    }
  });

  return router;
};
