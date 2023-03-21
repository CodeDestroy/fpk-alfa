const sequelize = require('../sequelize')
const Sequelize = require("sequelize");
const AboutUs = sequelize.define("about_us", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: true
    },
  });


  module.exports = AboutUs;