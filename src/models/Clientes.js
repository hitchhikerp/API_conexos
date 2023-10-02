const db = require("../database");
const { DataTypes } = require("sequelize");

const Clientes = db.define(
  "Clientes",
  {
    cliente_id:{
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }, 
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    nome_completo: {
      type: DataTypes.STRING,
      allowNull: false
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
  },
    db.sync().then(() => {
    console.log('Tabela sincronizada com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabela:', error);
  })
);

module.exports = Clientes;
