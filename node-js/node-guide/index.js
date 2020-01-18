const path = require('path')
//
const express = require('express')
const bodyParser = require('body-parser')
//
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const sequelize = require('./util/db')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

sequelize
  .sync()
  .then(result => {
    // console.log(result)
    app.listen(3000)
  })
  .catch(err => console.log(err))

