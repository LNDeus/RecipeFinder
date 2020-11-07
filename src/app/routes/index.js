const { Router } = require('express');
const recipes = require('./recipes');

module.exports = (app) => {
  // Here we'll call all routes files
  app.use('/recipes', recipes(new Router()));
};
