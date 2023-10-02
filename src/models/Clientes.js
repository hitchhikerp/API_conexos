const db = require("../database");
const { DataTypes } = require("sequelize");

const Clientes = db.define(
  "Clientes",
  {
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    nome_completo: {
      type: DataTypes.STRING,
      primaryKey: true,
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
    tableName: "clientes",
  }
);

module.exports = Clientes;
