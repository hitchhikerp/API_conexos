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
  },
    db.sync().then(() => {
    console.log('Tabela sincronizada com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabela:', error);
  })
);

module.exports = Admin;
