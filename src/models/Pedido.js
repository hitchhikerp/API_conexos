const { Sequelize, DataTypes } = require('sequelize');
const Cliente = require("./Cliente");
const db = require("../database");

const Pedido = db.define(
  "Pedido",
  {
    codigo_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    cliente: {
      type: DataTypes.STRING(200),
      primaryKey: true,
      allowNull: false,
      unique: true,
      references: {
        model: Cliente,
        key: 'nome_completo',
      },
    },
    servico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_efetuar_servico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
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
    tableName: "pedido" ,
  }
);

module.exports = Pedido;
