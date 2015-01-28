var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  db.Categories.findAll().success(function (categories) {
    res.render('index', {
      title: 'Kategorije izdelkov',
      categories: categories.map(function(e) { return e.dataValues; })
    });
  });
});
