'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');

const Training = require('./training');
const Arquivo = require('./arquivo');
//const Document = require('./document');

Training.hasMany(models.Arquivo, {foreignKey: 'training_id', as: 'Arquivo'});
Arquivo.belongsTo(models.Training, {foreignKey: 'training_id', as: 'Training'});

// Define what associations you need.

module.exports = {
    Training,
    Arquivo,
//    Document
};