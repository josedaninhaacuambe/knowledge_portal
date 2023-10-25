'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lote: {
        type: Sequelize.STRING
      },
      ambito: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      distrito: {
        type: Sequelize.STRING
      },
      financiador: {
        type: Sequelize.STRING
      },
      financiamento: {
        type: Sequelize.STRING
      },
      inicio: {
        type: Sequelize.STRING
      },
      fim: {
        type: Sequelize.STRING
      },
      file_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      estado: {
        type: Sequelize.STRING
      },
      sector_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projectos');
  }
};