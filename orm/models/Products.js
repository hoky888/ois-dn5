/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Products', { 
    ProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SupplierID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    QuantityPerUnit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true,
      defaultValue: '0.0000'
    },
    UnitsInStock: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    UnitsOnOrder: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    ReorderLevel: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
      defaultValue: '0'
    },
    Discontinued: {
      type: 'BIT(1)',
      allowNull: false,
      defaultValue: '0'
    }
    },{timestamps: false, freezeTableName: true,});
};
