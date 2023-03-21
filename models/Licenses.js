
const sequelize = require('../sequelize')
const Sequelize = require("sequelize");

const Licenses = sequelize.define("license", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    preview_image: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    file_to_view: {
        type: Sequelize.TEXT,
        allowNull: true
    }
  });


  module.exports = Licenses;