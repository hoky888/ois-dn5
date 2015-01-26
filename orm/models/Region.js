/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Region', { 
    RegionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    RegionDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    },{timestamps: false, freezeTableName: true,});
};
