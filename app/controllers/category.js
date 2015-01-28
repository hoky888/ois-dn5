var express = require('express'),
  router = express.Router(),
  db = require('../models');
  // Handlebars = require('handlebars');

module.exports = function (app) {
  app.use('/', router);
};

// Handler za pregled izdelkov kategorije CategoryID == cid.
router.get('/category/:cid', function (req, res, next) {

  // Najdi vse kategorije.
  db.Categories.findAll().success(function (categories) {
    // Parsaj cid, ce po parsanju ni definiran, ne nadaljuj z izvajanjem.
    var cidInt = parseInt(req.params.cid) || req.params.cid;
    if(!cidInt) return;

    // Najdi vse izdelke, kjer je CategoryID == cid.
    db.Products.findAll({ where: { CategoryID: cidInt } }).success(function (products) {
      // Izberi samo dataValues (dejanske vrednosti) iz products objekta,
      // ce pride do napake, nastavi seznam na null.
      var foundProducts;
      try {
        foundProducts = products.map(function(e) { return e.dataValues; });
      }
      catch (e) {
        foundProducts = null;
      }
      // Najdi izbrano kategorijo, ce pride do napake, jo nastavi na null.
      var selectedCategory;
      try {
        var foundCategories = categories.filter(function(e) { return e.dataValues.CategoryID === cidInt; });
        selectedCategory = foundCategories.length > 0 ? foundCategories[0].dataValues : null;
      }
      catch (e) {
        selectedCategory = null;
      }
      // Nastavi ime kategorije iz najdene izbrane najdene kategorije,
      // ce ta ne obstaja, uporabi prazen string.
      var categoryName = selectedCategory != null ? selectedCategory.CategoryName : '';

      // Izrisi view s podatki o pregledu kategorije (izbrana kategorija, izdelki).
      res.render('index', {
        title: 'Kategorije izdelkov',
        // Mapaj seznam kategorij v senzam dataValues iz posamezne kategorije.
        categories: categories.map(function(e) { return e.dataValues; }),
        // Naslov pregleda kategorije.
        productsTitle: categoryName,
        // Seznam izdelkov za prikaz.
        products: foundProducts,
        // Id izbrane kategorije.
        selectedCategory: cidInt,
        // Handlebars helper, ki izbrani kategoriji doda atribut checked.
        helpers: {
          checkCid: function (cid) { return cid == cidInt ? 'checked' : ''; }
        }
      });
    });
  });
});
