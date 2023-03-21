const sequelize = require('../sequelize')
const Sequelize = require("sequelize");

const Partners = sequelize.define("partner", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    title: {
        type: Sequelize.TEXT,
        allowNull: true
    }
  });


  module.exports = Partners;