var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

// Handler za dodajanje izdelka.
router.post('/product/add/:cid', function(req, res, next) {
  // Parsaj cid, ce po parsanju ni definiran, ne nadaljuj z izvajanjem.
  var cidInt = parseInt(req.params.cid) || 0;
  if(cidInt <= 0)
    return;

  // Dodaj izdelek z vrednostmi iz bodyja post zahteve.
  db.Products.create({
    ProductName: req.body.ProductName,
    UnitPrice: req.body.UnitPrice,
    UnitsInStock: req.body.UnitsInStock,
    CategoryID: cidInt,
    SupplierID: 1
  }).on('success', function() {
    // Poslji status 200 (OK) ob uspesnem dodajanju.
    res.sendStatus(200);
  });
});

// Handler za posodobitev izdelka.
router.post('/product/update/:pid', function(req, res, next) {
  // Parsaj cid, ce po parsanju ni definiran, ne nadaljuj z izvajanjem.
  var pidInt = parseInt(req.params.pid) || 0;
  if(pidInt <= 0)
    return;

  // Najdi izdelek z ujemajocim pid.
  db.Products.find({ where: { ProductID: pidInt } }).on('success', function(product) {
    if (product) {
      // Posodobi izdelek z vrednostmi iz bodyja post zahteve.
      product.updateAttributes({
        ProductName: req.body.ProductName,
        UnitPrice: req.body.UnitPrice,
        UnitsInStock: req.body.UnitsInStock
      }).success(function() {
        // Poslji status 200 (OK) ob uspesni posodobitvi.
        res.sendStatus(200);
      }).error(function() {
        // Poslji status 200 (Internal Server Error) ob napaki pri dodajanju.
        res.sendStatus(500);
      });
    }
    else
      // Poslji status 400 (Bad Request), ce izdelek ni bil najden.
      res.sendStatus(400);
  });
});

// Handler za brisanje izdelka.
router.post('/product/delete/:pid', function(req, res, next) {
  // Parsaj cid, ce po parsanju ni definiran, ne nadaljuj z izvajanjem.
  var pidInt = parseInt(req.params.pid) || 0;
  if(pidInt <= 0)
    return;

  // Najdi izdelek z ujemajocim pid.
  db.Products.findOne({ where: { ProductID: pidInt } }).on('success', function(product) {
    // V primeru, da izdelek ni definiran, zakljuci s stausom 400 (Bad Request).
    if(!product)
        return res.sendStatus(400).end();

    // Najdi vsa narocila s ProductID == pid.
    db.OrderDetails.findAll({ where: {ProductID: pidInt} }).on('success', function(orderDetails) {
         // Odstrani vsa narocila.
         orderDetails.forEach(function(e) {
           e.destroy();
         });
         // Odstrani najden izdelek.
         product.destroy().on('success', function() {
           // Poslji status 200 (OK) ob uspesnem brisanju.
           res.sendStatus(200).end();
        });
    });
  });
});
