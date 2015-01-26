/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shippers', { 
    ShipperID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
