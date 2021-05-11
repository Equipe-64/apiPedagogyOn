'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Clientes',
        'rg',
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
        'rg',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  }
};
