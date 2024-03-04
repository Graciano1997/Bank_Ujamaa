'use strict';
const { sequelize } = require("./index.js");
const {
  Model,DataTypes
} = require('sequelize');

const bcrypt = require('bcrypt');

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

module.exports = { Utilizador }