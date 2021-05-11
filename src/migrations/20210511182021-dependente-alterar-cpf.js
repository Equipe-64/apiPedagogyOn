'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn(
        'Dependentes',
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
        'Dependentes',
        'cpf',
        {
          type: Sequelize.INTEGER
        }
      )
    ]);
  }
};
