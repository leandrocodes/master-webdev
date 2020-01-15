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
  constructor(id, title, imgUrl, desc, price) {
    this.id = id
    this.title = title
    this.imgUrl = imgUrl
    this.desc = desc
    this.price = parseFloat(price)
  }

  save() {
    getProductsFromFile(products => {
      if (this.id) {
        const existingProductIndex = products.findIndex(prod => prod.id === this.id)
        const updadetedProducts = [...products]
        updadetedProducts[existingProductIndex] = this
        fs.writeFile(p, JSON.stringify(updadetedProducts), err => console.log(err))
      } else {
        this.id = Math.random().toString()
        products.push(this)
        fs.writeFile(p, JSON.stringify(products), (err) => console.log(err))
      }
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