'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buyers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buyers.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    cashLimit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buyers',
    tableName: 'buyers'
  });
  return buyers;
};