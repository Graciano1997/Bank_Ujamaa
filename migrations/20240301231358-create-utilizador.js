'use strict';
/** @type {import('sequelize-cli').Migration} */
// const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Utilizadors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique:true
      },
      senha: {
        type: Sequelize.STRING
      },
      administrador: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      chave: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      codeRecuperacao: {
        type: Sequelize.STRING,
        defaultValue:null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Utilizadors');
  }
};