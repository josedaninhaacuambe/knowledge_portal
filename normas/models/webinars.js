'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');

const Webinar = database.define(
  "webinars",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tema: { type: Sequelize.STRING, allowNull: false },
    url: { type: Sequelize.STRING },
    file_name: { type: Sequelize.STRING},
    data: {type: Sequelize.STRING },
    resumo: { type: Sequelize.TEXT},
    sector_id: { type: Sequelize.INTEGER},
    created: { type: Sequelize.DATE },
    updated: { type: Sequelize.DATE},
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "webinars",
  }
);
module.exports = Webinar;
