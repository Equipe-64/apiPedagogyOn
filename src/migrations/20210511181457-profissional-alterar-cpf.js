'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Profissionals',
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
        'Profissionals',
        'cpf',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  }
};
