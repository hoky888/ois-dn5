/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Orders', { 
    OrderID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CustomerID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EmployeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    RequiredDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ShippedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ShipVia: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    Freight: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true,
      defaultValue: '0.0000'
    },
    ShipName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShipAddress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShipCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShipRegion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShipPostalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShipCountry: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
