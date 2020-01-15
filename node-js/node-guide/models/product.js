const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    let products
    if (!err) {
      try {
        products = JSON.parse(data)
      } catch {
        products = []
      }
    } else {
      products = []
    }
    return cb(products)
  })
}


module.exports = class Product {
  constructor(title, imgUrl, desc, price) {
    this.title = title
    this.imgUrl = imgUrl
    this.desc = desc
    this.price = parseFloat(price)
  }

  save() {
    this.id = Math.random().toString()
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id)
      cb(product)
    })
  }

}