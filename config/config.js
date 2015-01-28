var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 8080,
    // new Sequelize(...) arguments: database, user, pass, options.
    db: {
      database: 'northwind',
      username: 'nodejs',
      password: 'nodejs',
      options: {
        dialect: 'mysql',
        pool: false
      }
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 8080,
    // new Sequelize(...) arguments: database, user, pass, options.
    db: {
      database: 'northwind',
      username: 'nodejs',
      password: 'nodejs',
      options: {dialect: 'mysql'}
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 8080,
    // new Sequelize(...) arguments: database, user, pass, options.
    db: {
      database: 'northwind',
      username: 'nodejs',
      password: 'nodejs',
      options: {dialect: 'mysql'}
    }
  }
};

module.exports = config[env];
