'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dependentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      rg: {
        type: Sequelize.INTEGER
      },
      orgao_exp: {
        type: Sequelize.STRING(20)
      },
      data_nasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      observacoes: {
        type: Sequelize.STRING
      },
      cod_cliente: {
        field:"cod_cliente",
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: "Clientes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('Dependentes');
  }
};