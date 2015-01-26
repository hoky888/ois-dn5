/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeTerritories', { 
    EmployeeTerritoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    EmployeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    },{timestamps: false, freezeTableName: true,});
};
