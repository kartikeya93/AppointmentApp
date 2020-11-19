"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.BIGINT,
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("Male", "Female", "Others"),
      },
      fitnessGoal: {
        allowNull: false,
        type: Sequelize.ENUM("Gain Muscle", "Burn Fat", "Get Fit"),
      },
      currentFitness: {
        allowNull: false,
        type: Sequelize.ENUM(
          "Not Fit At All",
          "New to Fitness",
          "Exercise Casually",
          "Exercise Regularly",
          "Experienced",
          "Advanced"
        ),
      },
      height: {
        type: Sequelize.INTEGER,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
