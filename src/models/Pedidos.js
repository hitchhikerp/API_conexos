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
      allowNull: false
    },
    cliente_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Clientes,
        key: 'cliente_id',
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
    db.sync().then(() => {
    console.log('Tabela sincronizada com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabela:', error);
  })
);

module.exports = Pedidos;
