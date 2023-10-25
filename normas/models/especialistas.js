'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');

const especialista = database.define(
  "especialistas",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: Sequelize.STRING},
    adress: { type: Sequelize.STRING},
    email: { type: Sequelize.STRING},
    video: { type: Sequelize.STRING},
    status: { type: Sequelize.STRING},
    inicio: { type: Sequelize.STRING},
    file_name: { type: Sequelize.STRING},
    fim: { type: Sequelize.STRING },
    description: { type: Sequelize.TEXT },
    sector_id: { type: Sequelize.STRING},
    createdAt: { type: Sequelize.DATE},
    updatedAt: { type: Sequelize.DATE}
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "especialistas",
  }
);

module.exports = especialista;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class especialistas extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   especialistas.init({
//     name: DataTypes.STRING,
//     adress: DataTypes.STRING,
//     email: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     video: DataTypes.STRING,
//     status: DataTypes.STRING,
//     inicio: DataTypes.STRING,
//     fim: DataTypes.STRING,
//     file_name: DataTypes.STRING,
//     sector_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'especialistas',
//   });
//   return especialistas;
// };