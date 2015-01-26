/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerCustomerDemo', { 
    CustomerID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CustomerTypeID: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    },{timestamps: false, freezeTableName: true,});
};
