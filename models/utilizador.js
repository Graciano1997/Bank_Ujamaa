'use strict';
const { sequelize } = require("./index.js");
const {
  Model, DataTypes
} = require('sequelize');

const bcrypt = require('bcrypt');
const { emailSender } = require("../module/mailer.js");

// module.exports = (sequelize, DataTypes) => {
class Utilizador extends Model {
  static usuarioCorrente=null;
  static associate(models) {
    // define association here
  }

}

Utilizador.init({
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
  chave:DataTypes.STRING,
  codeRecuperacao:DataTypes.INTEGER,
  administrador: DataTypes.BOOLEAN,
  ativo: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Utilizador',
});

Utilizador.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.senha, 10);
  user.senha = hashedPassword;
});

Utilizador.afterCreate(async (user, options) => {
  const userData = {
    nome: user.nome,
    email:user.email,
    code: Math.floor(1000 + Math.random() * 9000),
    assunto:'Activação de Conta'
  };
  user.chave=userData.code;
  const template='/../views/email/templateConfirmation.ejs';
  await user.save();
  emailSender(userData,template);
});

module.exports = { Utilizador }