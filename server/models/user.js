"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      password: DataTypes.STRING,
      dateOfBirth: DataTypes.DATEONLY,
      gender: DataTypes.ENUM("Male", "Female", "Others"),
      fitnessGoal: DataTypes.ENUM("Gain Muscle", "Burn Fat", "Get Fit"),
      currentFitness: DataTypes.ENUM(
        "Not Fit At All",
        "New to Fitness",
        "Exercise Casually",
        "Exercise Regularly",
        "Experienced",
        "Advanced"
      ),
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
