const { Sequelize, DataTypes } = require('sequelize');
const Clientes = require("./Clientes");
const db = require("../database");

const Pedidos = db.define(
  "Pedidos",
  {
    codigo_pedido: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Clientes,
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
    tableName: "pedidos" ,
  },
  
);

module.exports = Pedidos;
