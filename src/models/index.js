const Pedido = require("./Pedido");
const Cliente = require("./Cliente");

Pedido.belongsTo(Cliente, {
    foreignKey: 'cliente'
})
Cliente.hasMany(Pedido, {
    foreignKey: 'cliente'
})

module.exports = {
    Pedido,
    Cliente,
};

