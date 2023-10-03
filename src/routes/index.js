const express = require('express');
const controllerConexos = require('../controllers/controllerConexos');
const routes = express.Router();

routes.get("/pedidos/lista", controllerConexos.listarPedidos);
routes.get("/clientes/lista", controllerConexos.listarClientes);
routes.post("/pedidos/criar", controllerConexos.enviarPedido);
routes.post("/clientes/criar", controllerConexos.enviarCliente);
routes.delete("/pedidos/:codigo_pedido", controllerConexos.deletarPedido);
routes.delete("/clientes/:cliente_id", controllerConexos.deletarCliente);
routes.put("/pedidos/:codigo_pedido", controllerConexos.atualizarStatus);
routes.put("/clientes/:cliente_id", controllerConexos.atualizarDadosCliente);

module.exports = routes;