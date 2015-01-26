var express = require('express'),
  config = require('./config/config'),
  models = require('./app/models/index.js');

var app = express();

require('./config/express')(app, config);

// models.sequelize
//   .sync()
//   .then(function () {
//     app.listen(config.port);
//   }).catch(function (e) {
//     throw new Error(e);
//   });
app.listen(config.port);
