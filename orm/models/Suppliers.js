/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Suppliers', { 
    SupplierID: {
      type: DataTypes.INTEGER(11),
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
    },
    HomePage: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
