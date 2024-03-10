'use strict';
const { sequelize } = require("./index.js");
const {
  Model,DataTypes
} = require('sequelize');

const bcrypt = require('bcrypt');
const { emailSender } = require("../module/mailer.js");

// module.exports = (sequelize, DataTypes) => {
  class Utilizador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Utilizador.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    administrador: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Utilizador',
  });

   // Hash the password before saving it to the database
   Utilizador.beforeCreate(async (user, options) => {
   const hashedPassword = await bcrypt.hash(user.senha, 10);
   user.senha = hashedPassword;
 });

   Utilizador.afterCreate(async (user, options) => {
    // const email={ subject:'BCU Activação de Conta'};
    const userData={nome:user.nome,email:user.email,code:1234};
    console.log("After create the User", userData);
    emailSender(userData);
 });

module.exports = { Utilizador }