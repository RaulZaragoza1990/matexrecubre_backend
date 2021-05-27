'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false},
      lastname: { type: Sequelize.STRING, allowNull: false},
      type: Sequelize.STRING,
      email: { type: Sequelize.STRING, unique: true},
      password: { type: Sequelize.STRING, allowNull: false},
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
