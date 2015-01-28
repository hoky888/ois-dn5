var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = /*process.env.NODE_ENV ||*/ 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 8080,
    // Nastavi podatke za bazo.
    db: {
      database: 'northwind',
      username: 'nodejs',
      password: 'nodejs',
      options: {
        dialect: 'mysql',
        pool: false
      }
    }
  }
};

module.exports = config[env];
