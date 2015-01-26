/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OrderDetails', { 
    OrderDetailID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    OrderID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    ProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      defaultValue: '0.0000'
    },
    Quantity: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    Discount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
    },{timestamps: false, freezeTableName: true,});
};
