'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');

const Ordem = database.define(
  "ordens",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING},
    code: {type: Sequelize.STRING},
    file_name: { type: Sequelize.STRING},
    type: { type: Sequelize.STRING},
    description: { type: Sequelize.TEXT},
    year: { type: Sequelize.STRING },
    sector_id: { type: Sequelize.STRING},
    created_at: { type: Sequelize.DATE},
    updated_at: { type: Sequelize.DATE}
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "ordens",
  }
);

module.exports = Ordem;