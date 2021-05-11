'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Profissionals',
        'cep',
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
        'cep',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  }
};