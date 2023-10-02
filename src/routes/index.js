const express = require('express');
const controllerConexos = require('../controllers/controllerConexos');
const routes = express.Router();

routes.get("/pedido/lista", controllerConexos.listarPedido);
routes.post("/pedido/criar", controllerConexos.enviarPedido);
routes.post("/cliente/criar", controllerConexos.enviarCliente);
routes.delete("/pedido/:codigo_pedido/deletar", controllerConexos.deletarPedido);
routes.put("/pedido/:codigo_pedido/atualizar", controllerConexos.atualizarStatus);

module.exports = routes;