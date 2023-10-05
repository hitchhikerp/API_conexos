const { Admin } = require("../models");
const bycrypt = require("bcryptjs");

const ControlllerAdmin = {
  async login(req, res) {
    const { login, senha } = req.body;
    const newLogin = bycrypt.hashSync(login, 10);
    const newSenha = bycrypt.hashSync(senha, 10);
    const newAdmin = await Admin.create({ login: newLogin, senha: newSenha });
    return res.status(201).json(newAdmin);
  },
};

module.exports = ControlllerAdmin;

