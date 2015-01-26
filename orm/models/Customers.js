/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customers', { 
    CustomerID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ContactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ContactTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PostalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Fax: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
