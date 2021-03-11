"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("quotes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departure_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination_location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      departure_date_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      return_date_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      num_travellers: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      transportation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      contact_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("quotes");
  },
};
