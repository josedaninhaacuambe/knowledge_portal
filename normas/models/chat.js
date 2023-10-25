'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');
const Roons = require("./room");
const User = require("./user");

const Chats = database.define(
  "chat",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    sender: { type: Sequelize.STRING},
    file_name: { type: Sequelize.STRING},
    message: { type: Sequelize.TEXT},
    userId: { type: Sequelize.STRING},
    roomId: { type: Sequelize.STRING},
    sector_id: { type: Sequelize.STRING},
    created_at: { type: Sequelize.DATE},
    updated_at: { type: Sequelize.DATE}
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "chat",
  }
);

Chats.belongsTo(User, {
  through: Chats,
  as: "users",
  foreignKey: "userId", 
});

Chats.belongsTo(Roons, {
  through: Chats,
  as: "sectors",
  foreignKey: "roomId",
});

module.exports = Chats;


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Chat extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   Chat.init({
//     sender: DataTypes.STRING,
//     message: DataTypes.STRING,
//     file_name: DataTypes.STRING,
//     userId: DataTypes.INTEGER,
//     roomId: DataTypes.INTEGER,
//     sector_id: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Chat',
//   });
//   return Chat;
// };