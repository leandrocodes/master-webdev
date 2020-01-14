const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) return cb([])
    else return cb(JSON.parse(data))
  })
}


module.exports = class Product {
  constructor(title, imgUrl, desc, price) {
    this.title = title
    this.imgUrl = imgUrl
    this.desc = desc
    this.price = price
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
}