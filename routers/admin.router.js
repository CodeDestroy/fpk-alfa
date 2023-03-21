const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const sequelize = require('../sequelize')
const AdminBroSequelize = require('@admin-bro/sequelize')

AdminBro.registerAdapter(AdminBroSequelize)

const AboutUs = require('../models/AboutUs')
const Address = require('../models/Address')
const Emails = require('../models/Emails')
const Licenses = require('../models/Licenses')
const Partners = require('../models/Partners')
const Phones = require('../models/Phones')



const ADMIN = {
    email: 'admin',
    password: 'admin',
  }

/* const adminBro = new AdminBro({
  databases: [sequelize],
  rootPath: '/admin',
}) */
const adminBro = new AdminBro({
    rootPath: '/admin',
    resources: [Address, AboutUs, Emails, Licenses, Partners, Phones],
  })
/* const router = AdminBroExpress.buildRouter(adminBro) */
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      if (ADMIN.password === password && ADMIN.email === email) {
        return ADMIN
      }
      return null
    },
    cookieName: 'admin',
    cookiePassword: 'admin',
  })

module.exports = router

