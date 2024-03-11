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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
      // // Hash the password before inserting it into the database
      // const hashedPassword = await bcrypt.hash('password', 10);
      // await queryInterface.bulkInsert('Utilizadors', [{
      //   email: 'test@example.com',
      //   senha: hashedPassword,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Utilizadors');
  }
};