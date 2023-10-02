const Pedidos = require("./Pedidos");
const Clientes = require("./Clientes");

Pedidos.belongsTo(Clientes, {
    foreignKey: 'cliente_id'
})
Clientes.hasMany(Pedidos, {
    foreignKey: 'cliente_id'
})

module.exports = {
    Pedidos,
    Clientes,
};

