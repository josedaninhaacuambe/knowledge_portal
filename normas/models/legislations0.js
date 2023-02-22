'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class legislations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  legislations.init({
    name: DataTypes.STRING,
    file_name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    data: DataTypes.STRING,
    sector_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'legislations',
  });
  return legislations;
};