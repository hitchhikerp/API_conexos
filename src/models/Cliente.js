const db = require("../database");
const { DataTypes } = require("sequelize");

const Cliente = db.define(
  "Cliente",
  {
    cpf: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,  
    },
    nome_completo: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferencia_horario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plano: {
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
    tableName: "cliente",
  }
);

module.exports = Cliente;
