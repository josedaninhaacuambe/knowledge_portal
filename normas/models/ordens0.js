'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ordens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ordens.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    file_name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    data: DataTypes.STRING,
    sector_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ordens',
  });
  return ordens;
};