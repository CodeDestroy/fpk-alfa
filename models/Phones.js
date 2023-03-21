
const sequelize = require('../sequelize')
const Sequelize = require("sequelize");

const Phones = sequelize.define("phone", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
  });


  module.exports = Phones;