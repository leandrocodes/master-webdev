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

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {}
}
