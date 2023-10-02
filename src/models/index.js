const Pedidos = require("./Pedidos");
const Clientes = require("./Clientes");

Pedidos.belongsTo(Clientes, {
    foreignKey: 'nome_cliente'
})
Clientes.hasMany(Pedidos, {
    foreignKey: 'nome_cliente'
})

module.exports = {
    Pedidos,
    Clientes,
};

