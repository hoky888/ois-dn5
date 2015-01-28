var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

// Handler za home stran.
router.get('/', function (req, res, next) {

  // Najdi vse izdelke in jih prikazi na index view.
  db.Categories.findAll().success(function (categories) {
    res.render('index', {
      title: 'Kategorije izdelkov',
      // Mapaj seznam kategorij v senzam dataValues iz posamezne kategorije.
      categories: categories.map(function(e) { return e.dataValues; })
    });
  });
});
