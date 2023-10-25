'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');

const Books = database.define(
  "books",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    author: { type: Sequelize.STRING},
    file_name: { type: Sequelize.STRING},
    subject: { type: Sequelize.STRING},
    description: { type: Sequelize.TEXT},
    category: { type: Sequelize.STRING},
    published: { type: Sequelize.STRING},
    sector_id: { type: Sequelize.STRING},
    created_at: { type: Sequelize.DATE},
    updated_at: { type: Sequelize.DATE}
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "books",
  }
);

module.exports = Books;