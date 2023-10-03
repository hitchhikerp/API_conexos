const { Pedidos, Clientes } = require("../models");

const controllerConexos = {
  listarPedidos: async (req, res) => {
    try {
      const listaDePedidos = await Pedidos.findAll({
        include: {
          model: Clientes,
        },
      });
      console.log(listaDePedidos);
      res.json(listaDePedidos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
  },

  listarClientes: async (req, res) => {
    try {
      const listaDeClientes = await Clientes.findAll();
      console.log(listaDeClientes);
      res.json(listaDeClientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar os Clientes" });
    }
  },

  async enviarPedido(req, res) {
    const { nome_cliente, cliente_id, servico, data_efetuar_servico, status } =
      req.body;
    const novoPedido = await Pedidos.create({
      nome_cliente: nome_cliente,
      cliente_id: cliente_id,
      servico: servico,
      data_efetuar_servico: data_efetuar_servico,
      status: status,
    });

    res.status(201).json(novoPedido);
  },

  async enviarCliente(req, res) {
    const { cpf, nome_completo, telefone, email, preferencia_horario, plano } =
      req.body;

    const novoCliente = await Clientes.create({
      cpf: cpf,
      nome_completo: nome_completo,
      telefone: telefone,
      email: email,
      preferencia_horario: preferencia_horario,
      plano: plano,
    });

    res.status(201).json(novoCliente);
  },

  async deletarPedido(req, res) {
    try {
      const { codigo_pedido } = req.params;
      await Pedidos.destroy({
        where: {
          codigo_pedido: codigo_pedido,
        },
      });
      res.status(204);
    } catch (error) {
      return res.status(500).json("Ocoreu algum problema");
    }
  },

  async deletarCliente(req, res) {
    const { cliente_id } = req.params;
    await Clientes.destroy({
      where: {
        cliente_id: cliente_id,
      },
    });
    res.status(204);
  },

  async atualizarStatus(req, res) {
    const { codigo_pedido } = req.params;
    const { nome_cliente, servico, data_contratacao, status } = req.body;

    if (!codigo_pedido)
      return res.status(400).json("codigo_pedido não enviado");

    const pedidoAtualizado = await Pedidos.update(
      {
        nome_cliente: nome_cliente,
        servico: servico,
        data_contratacao: data_contratacao,
        status: status,
      },
      {
        where: {
          codigo_pedido: codigo_pedido,
        },
      }
    );
    res.json("Pedido atualizado");
  },

  async atualizarDadosCliente(req, res) {
    const { cliente_id } = req.params;
    const { cpf, nome_completo, telefone, email, preferencia_horario, plano } =
      req.body;

    if (!codigo_pedido)
      return res.status(400).json("codigo_pedido não enviado");

    const pedidoAtualizado = await Clientes.update(
      {
        cpf: cpf,
        nome_completo: nome_completo,
        telefone: telefone,
        email: email,
        preferencia_horario: preferencia_horario,
        plano: plano,
      },
      {
        where: {
          cliente_id: cliente_id,
        },
      }
    );
    res.json("Cliente atualizado");
  },
};

module.exports = controllerConexos;
