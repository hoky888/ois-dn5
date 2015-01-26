var fs = require('fs'),
  path = require('path'),
  Sequelize = require('sequelize'),
  config = require('../../config/config'),
  db = {};

var sequelize = new Sequelize(
                      config.db.database,
                      config.db.username,
                      config.db.password,
                      config.db.options);

// Import current folder, ignore this file (index.js).
db = require('sequelize-import')(__dirname, sequelize, { exclude: ['index.js'] });

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;