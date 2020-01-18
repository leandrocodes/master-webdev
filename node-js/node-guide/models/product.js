const Cart = require('./cart')
const db = require('../util/db')

module.exports = class Product {
  constructor(id, title, imgUrl, desc, price) {
    this.id = id
    this.title = title
    this.imgUrl = imgUrl
    this.desc = desc
    this.price = parseFloat(price)
  }

  save() {
    return db.execute(
      'INSERT INTO `products` (`title`, `price`, `desc`, `imgUrl`) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.desc, this.imgUrl]
    )
  }

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {}
}
