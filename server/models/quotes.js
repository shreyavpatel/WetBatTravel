"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class quotes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  quotes.init(
    {
      departure_location: DataTypes.STRING,
      destination_location: DataTypes.STRING,
      departure_date_time: DataTypes.DATE,
      return_date_time: DataTypes.DATE,
      num_travellers: DataTypes.INTEGER,
      transportation: DataTypes.STRING,
      price: DataTypes.FLOAT,
      contact_name: DataTypes.STRING,
      contact_email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "quotes",
    }
  );
  return quotes;
};
