const { Pedido, Cliente } = require("../models");

const controllerConexos = {
  listarPedido: async (req, res) => {
    try {
      const listaDePedidos = await Pedido.findAll({
        include: {
          model: Cliente,
        },
      });
      console.log(listaDePedidos)
      res.json(listaDePedidos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
  },

  async enviarPedido(req, res) {
    const { cliente, servico, data_efetuar_servico, status } = req.body;
    const novoPedido = await Pedido.create({
      cliente: cliente,
      servico: servico,
      data_efetuar_servico: data_efetuar_servico,
      status: status,
    });

    res.json(novoPedido);
  },

  async enviarCliente(req, res) {
    const { cpf, nome_completo, telefone, email, preferencia_horario, plano } =
      req.body;

    const novoCliente = await Cliente.create({
      cpf: cpf,
      nome_completo: nome_completo,
      telefone: telefone,
      email: email,
      preferencia_horario: preferencia_horario,
      plano: plano,
    });

    res.json(novoCliente);
  },

  async deletarPedido(req, res) {
    const { codigo_pedido } = req.params;
    await Pedido.destroy({
      where: {
        codigo_pedido: codigo_pedido,
      },
    });
    res.json("Pedido deletado");
  },
  async atualizarStatus(req, res) {
    const { codigo_pedido } = req.params;
    const { cliente, servico, data_contratacao, status } = req.body;
    const pedidoAtualizado = await Pedido.update(
      {
        cliente: cliente,
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
};

module.exports = controllerConexos;
