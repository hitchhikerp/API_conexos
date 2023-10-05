const express = require('express');
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");
const controllerClientes = require('../controllers/controllerClientes');
const controllerPedidos = require('../controllers/controllerPedidos');
const controllerAdmin = require('../controllers/controllerAdmin');
const routes = express.Router();

routes.get("/pedidos/lista", requestLog, bloqueio, controllerPedidos.listarPedidos);
routes.get("/clientes/lista", controllerClientes.listarClientes);
routes.post("/pedidos/criar", controllerPedidos.enviarPedido);
routes.post("/clientes/criar", controllerClientes.enviarCliente);
routes.post("/admin/criar", controllerAdmin.login);
routes.delete("/pedidos/:codigo_pedido", controllerPedidos.deletarPedido);
routes.delete("/clientes/:cliente_id", controllerClientes.deletarCliente);
routes.put("/pedidos/:codigo_pedido", controllerPedidos.atualizarStatus);
routes.put("/clientes/:cliente_id", controllerClientes.atualizarDadosCliente);

module.exports = routes;