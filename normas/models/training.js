'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');
const Arquivos = require("./arquivo");


const Training = database.define(
  "training",
  {
    id: {
      type: Sequelize.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING},
    email: { type: Sequelize.STRING},
    foto: { type: Sequelize.STRING},
    endereco: { type: Sequelize.STRING},
    telefone: { type: Sequelize.STRING},
    published: { type: Sequelize.TEXT }
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "training",
  }
);

Training.sync()
  Training.associate = (models) => {
  Training.hasMany(models.Arquivos, {foreignKey: 'training_id', as: 'Arquivos'});
}

// Training.hasMany(Arquivos, { 
//   as: "arquivos", 
//   foreignKey: "training_id" 
// })


module.exports = Training;