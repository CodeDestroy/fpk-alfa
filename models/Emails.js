const sequelize = require('../sequelize')
const Sequelize = require("sequelize");
const Emails = sequelize.define("email", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });


  module.exports = Emails;