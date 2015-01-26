var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Suppliers.findAll().success(function (articles) {
    console.log(articles);
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});
