const db = require("../database");
const { DataTypes } = require("sequelize");

const Admin = db.define(
  "Admin",
  {
    login: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "admin",
  }
);

module.exports = Admin;
