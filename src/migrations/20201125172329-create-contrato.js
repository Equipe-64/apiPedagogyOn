'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contratos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      valor_pago: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avaliacao_servico: {
        type: Sequelize.INTEGER
      },
      comentario: {
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
      cod_dependente: {
        field:"cod_dependente",
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: "Dependentes", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      cod_profissional: {
        field:"cod_profissional",
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{ model: "Profissionals", key: "id" },
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
    await queryInterface.dropTable('Contratos');
  }
};