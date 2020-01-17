const path = require('path')
const http = require('http')
//
const express = require('express')
const bodyParser = require('body-parser')
//
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const db = require('./util/db')

const app = express()

db.execute('select * from products')
  .then(result => console.log(result[0], result[1]))
  .catch(err => console.log(err))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

const server = http.createServer(app)
server.listen(3000)
