const handleError = require('./handle-error');
const routeNotFound = require('./route-not-found');

module.exports = (app) => {
  app.use(handleError);
  app.use(routeNotFound);
};
