/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Territories', { 
    TerritoryID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    TerritoryDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    }
    },{timestamps: false, freezeTableName: true,});
};
