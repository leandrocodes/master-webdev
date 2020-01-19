const path = require('path')
//
const express = require('express')
const bodyParser = require('body-parser')
//
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')
const sequelize = require('./util/db')
const Product = require('./models/product')
const User = require('./models/user')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')

const app = express()

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user
      next()
    })
    .catch(err => console.log(err))
})

//routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)


//associations
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
User.hasMany(Product)

User.hasOne(Cart)
Cart.belongsTo(User)

Cart.belongsToMany(Product, { through: CartItem })
Product.belongsToMany(Cart, { through: CartItem })

sequelize
  .sync(/* {force: true} */)
  .then(result => {
    return User.findByPk(1)
    // console.log(result)
  })
  .then(user => {
    if (!user) {
      return User.create({ name: 'Leandro', email: 'lvm@gmail.com' })
    }
    return user
  })
  .then(user => {
    // console.log(user)
    return user.createCart()
  })
  .then(cart => {
    // console.log(cart)
    app.listen(3000)
  })
  .catch(err => console.log(err))
