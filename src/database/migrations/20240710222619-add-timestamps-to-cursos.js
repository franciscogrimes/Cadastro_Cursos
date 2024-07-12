"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("cursos", "createdAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW"),
    });
    await queryInterface.addColumn("cursos", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn("NOW"),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("cursos", "createdAt");
    await queryInterface.removeColumn("cursos", "updatedAt");
  },
};
