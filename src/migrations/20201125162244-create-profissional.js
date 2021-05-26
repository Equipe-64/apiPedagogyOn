'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profissionals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      especializacao: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rg: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      orgao_exp: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      data_nasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      cep: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observacoes: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profissionals');
  }
};