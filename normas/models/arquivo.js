'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');
const Training = require("./training");

const Arquivos = database.define(
  "arquivo",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    file_name: { type: Sequelize.STRING},
    sector_id: { type: Sequelize.STRING},
    training_id: { type: Sequelize.INTEGER(11) },
    created: { type: "TIMESTAMP", defaultValue: Sequelize.literal("NOW()")},
    updated: {type: Sequelize.DATE, defaultValue: Sequelize.literal("NOW()"), onUpdate: Sequelize.literal("NOW()"),},
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "arquivo",
  }
);


Arquivos.sync()
Arquivos.associate = (models) => {
   Arquivos.belongsTo(models.Training, {foreignKey: 'training_id', as: 'Training'})
}


// Arquivos.belongsTo(Training, { 
//  as: "training",
//  foreignKey: "training_id",  
// });

module.exports = Arquivos;

// 'use strict';
// const {  Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class arquivo extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   arquivo.init({
//     file_name: DataTypes.STRING,
//     sector_id: DataTypes.STRING,
//     training_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'arquivo',
//   });
//   return arquivo;
// };