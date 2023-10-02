const express = require('express');
const controllerConexos = require('../controllers/controllerConexos');
const routes = express.Router();

routes.get("/pedidos/lista", controllerConexos.listarPedidos);
routes.get("/clientes/lista", controllerConexos.listarClientes);
routes.post("/pedido/criar", controllerConexos.enviarPedido);
routes.post("/cliente/criar", controllerConexos.enviarCliente);
routes.delete("/pedido/:codigo_pedido/deletar", controllerConexos.deletarPedido);
routes.delete("/clientes/:nome_completo/deletar", controllerConexos.deletarCliente);
routes.put("/pedido/:codigo_pedido/atualizar", controllerConexos.atualizarStatus);
routes.put("/cliente/:nome_completo/atualizar", controllerConexos.atualizarDadosCliente);

module.exports = routes;