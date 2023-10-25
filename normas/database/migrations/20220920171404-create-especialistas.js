'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('especialistas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      video: {
        type: Sequelize.STRING
      },
      status: {
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
      sector_id: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('especialistas');
  }
};