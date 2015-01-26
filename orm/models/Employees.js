/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employees', { 
    EmployeeID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    TitleOfCourtesy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BirthDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    HireDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PostalCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HomePhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Extension: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Photo: {
      type: 'LONGBLOB',
      allowNull: true,
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ReportsTo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    PhotoPath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Salary: {
      type: DataTypes.FLOAT,
      allowNull: true,
    }
    },{timestamps: false, freezeTableName: true,});
};
