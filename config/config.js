var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 3000,
    db: 'mysql://localhost/ois-dn5-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 3000,
    db: 'mysql://localhost/ois-dn5-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'ois-dn5'
    },
    port: 3000,
    db: 'mysql://localhost/ois-dn5-production'
  }
};

module.exports = config[env];
