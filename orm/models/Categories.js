/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categories', { 
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Picture: {
      type: 'LONGBLOB',
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
