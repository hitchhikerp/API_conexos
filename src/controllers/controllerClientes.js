const { Clientes } = require("../models");

const controllerClientes = {
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

  async deletarCliente(req, res) {
    const { cliente_id } = req.params;
    await Clientes.destroy({
      where: {
        cliente_id: cliente_id,
      },
    });
    res.status(204);
  },

  async atualizarDadosCliente(req, res) {
    const { cliente_id } = req.params;
    const { cpf, nome_completo, telefone, email, preferencia_horario, plano } =
      req.body;
    if (!codigo_pedido)
      return res.status(400).json("codigo_pedido não enviado");
    const clienteAtualizado = await Clientes.update(
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

module.exports = controllerClientes;