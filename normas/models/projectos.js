'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');

const Projecto = database.define(
  "projectos",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nr: { type: Sequelize.STRING},
    name: { type: Sequelize.STRING},
    status: { type: Sequelize.STRING},
    financiador: { type: Sequelize.STRING},
    financiamento: { type: Sequelize.STRING},
    tipo_pagamento: { type: Sequelize.STRING},
    valor_financiando: { type: Sequelize.STRING},
    nivel_desempenho: { type: Sequelize.STRING},
    ponto_de_situacao: { type: Sequelize.STRING},
    constrangimentos: { type: Sequelize.STRING},
    inicio: { type: Sequelize.STRING},
    fim: { type: Sequelize.STRING},    
    file_name: { type: Sequelize.STRING},
    sector_id: { type: Sequelize.STRING},
    created_at: { type: Sequelize.DATE},
    updated_at: { type: Sequelize.DATE}
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "projectos",
  }
);

module.exports = Projecto;