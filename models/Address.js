const sequelize = require('../sequelize')
const Sequelize = require("sequelize");
const Address = sequelize.define("address", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    address	: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  });


  module.exports = Address;