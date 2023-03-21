const express = require("express");
require('dotenv').config()
// создаем объект приложения
const app = express();
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors');
const sequelize = require('./sequelize')
const adminBroRouter = require('./routers/admin.router')

const Address = require('./models/Address')
const AboutUs = require('./models/AboutUs')
const Emails = require('./models/Emails')
const Licenses = require('./models/Licenses')
const Partners = require('./models/Partners')
const Phones = require('./models/Phones')




app.set("view engine", "ejs");

app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));




app.use(bodyParser.json());
app.use(express.static(__dirname + "/views"));
app.use('/admin', adminBroRouter)
// определяем обработчик для маршрута "/"
app.get("/", async function(request, response){
    // отправляем ответ
    const addresses = await Address.findOne({raw:true})
    const about_us = await AboutUs.findOne({raw:true})
    const emails = await Emails.findOne({raw:true})
    const phones = await Phones.findAll({raw:true})
    const partners = await Partners.findAll({raw:true})
    console.log(phones)

    response.render("index", {
        address: addresses.address,
        about_us_title: about_us.title,
        about_us_text: about_us.text,
        phones: phones
    });
});
// начинаем прослушивать подключения на 3000 порту
app.listen(process.env.PORT, () => {
    sequelize.sync().then()
    .catch(err=> console.log(err));
    console.log(`Server started on port ${process.env.PORT}`)
});