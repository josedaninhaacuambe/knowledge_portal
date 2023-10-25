'use strict';
const { Sequelize } = require("sequelize");
const database = require("../database/config/connection");
const {  Model } = require('sequelize');
const Chat = require("./chat");

const Room = database.define(
  "room",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: { type: Sequelize.STRING},
    created_at: { type: Sequelize.DATE},
    updated_at: { type: Sequelize.DATE}
  },
  {
    // sequelize,
    freezeTableName: true,
    timestamps: false,
    tableName: "room",
  }
);

Room.hasMany(Chat, { 
  through: Chat,
  as: "chat", 
  foreignKey: "roomId" 
})

module.exports = Room;


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Room extends Model {
//     static associate(models) {
//       // define association here
//     }
//   }
//   Room.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Room',
//   });
//   return Room;
// };