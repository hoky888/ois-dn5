var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.post('/product/add/:cid', function(req, res, next) {
  var cidInt = parseInt(req.params.cid) || 0;
  if(cidInt <= 0)
    return;
  db.Products.create({
    ProductName: req.body.ProductName,
    UnitPrice: req.body.UnitPrice,
    UnitsInStock: req.body.UnitsInStock,
    CategoryID: cidInt,
    SupplierID: 1
  }).on('success', function() {
    res.sendStatus(200);
  });
});

router.post('/product/update/:pid', function(req, res, next) {
  var pidInt = parseInt(req.params.pid) || 0;
  if(pidInt <= 0)
    return;

  db.Products.find({ where: { ProductID: pidInt } }).on('success', function(product) {
    if (product) {
      product.updateAttributes({
        ProductName: req.body.ProductName,
        UnitPrice: req.body.UnitPrice,
        UnitsInStock: req.body.UnitsInStock
      }).success(function() {
        res.sendStatus(200);
      }).error(function() {
        res.sendStatus(500);
      });
    }
    else
      res.sendStatus(400);
  });
});

router.post('/product/delete/:pid', function(req, res, next) {
  var pidInt = parseInt(req.params.pid) || 0;
  if(pidInt <= 0)
    return;

  db.Products.findOne({ where: { ProductID: pidInt } }).on('success', function(product) {
    if(!product)
        res.sendStatus(400).end();

    db.OrderDetails.findAll({ where: {ProductID: pidInt} }).on('success', function(orderDetails) {
         orderDetails.forEach(function(e) {
           e.destroy();
         });
         product.destroy().on('success', function(u) {
           res.sendStatus(200).end();
        });
    });
  });
});
