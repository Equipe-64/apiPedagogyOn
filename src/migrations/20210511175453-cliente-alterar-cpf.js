'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Clientes',
        'cpf',
        {
          type: Sequelize.STRING
        }
      )
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Clientes',
        'cpf',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  }
};

