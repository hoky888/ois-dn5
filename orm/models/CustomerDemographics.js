/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerDemographics', { 
    CustomerTypeID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CustomerDesc: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
