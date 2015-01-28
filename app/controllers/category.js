var express = require('express'),
  router = express.Router(),
  db = require('../models');
  // Handlebars = require('handlebars');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/category/:cid', function (req, res, next) {

  // find all categories
  db.Categories.findAll().success(function (categories) {
    var cidInt = parseInt(req.params.cid) || req.params.cid;
    // find products with categoryid
    db.Products.findAll({ where: { CategoryID: cidInt } }).success(function (products) {
      // map dataValues (creates array), if error occured, set products to null
      var foundProducts;
      try {
        foundProducts = products.map(function(e) { return e.dataValues; });
      }
      catch (e) {
        foundProducts = null;
      }
      var selectedCategory;
      try {
        var foundCategories = categories.filter(function(e) { return e.dataValues.CategoryID === cidInt; });
        selectedCategory = foundCategories.length > 0 ? foundCategories[0].dataValues : null;
      }
      catch (e) {
        selectedCategory = null;
      }
      // set category name from selected category or use empty string
      var categoryName = selectedCategory != null ? selectedCategory.CategoryName : '';

      // render index with master / detail view
      res.render('index', {
        title: 'Kategorije izdelkov',
        categories: categories.map(function(e) { return e.dataValues; }),
        productsTitle: categoryName,
        products: foundProducts,
        selectedCategory: cidInt,
        helpers: {
          checkCid: function (cid) { return cid == cidInt ? 'checked' : ''; }
        }
      });
    });
  });
});