const Sequelize = require("sequelize");
const sequelize = new Sequelize("szagoskin_fpk_new", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});

module.exports = sequelize;