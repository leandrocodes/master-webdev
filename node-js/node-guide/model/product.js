const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    fs.readFile(p, (err, data) => {
      let products = []

      if (!err) products = JSON.parse(data)

      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })

    })
  }

  static fetchAll() {
    fs.readFile(p, (err, data) => {
      if (err) return []

      return JSON.parse(data)
    })
  }
}