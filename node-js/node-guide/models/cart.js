const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')

module.exports = class Cart {
  static addProduct(id, productPrice) {
    // Fetch the previous cart
    this.productPrice = parseFloat(productPrice)
    fs.readFile(p, (err, data) => {
      let cart
      if (!err) {
        try {
          cart = JSON.parse(data)
        } catch {
          cart = { products: [], totalPrice: 0 }
        }
      } else {
        cart = { products: [], totalPrice: 0 }
      }
      // Analyze the cart => Find existing product
      const existingProductIndex = cart.products.findIndex( prod => prod.id === id)
      const existingProduct = cart.products[existingProductIndex]
      let updatedProduct
      // Add new product / increase quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct }
        updatedProduct.qty++
        cart.products = [...cart.products]
        cart.products[existingProductIndex] = updatedProduct
      } else {
        updatedProduct = { id: id, qty: 1 }
        cart.products = [...cart.products, updatedProduct]
      }
      cart.totalPrice = cart.totalPrice + this.productPrice
      fs.writeFile(p, JSON.stringify(cart), (err) => console.log(err))
      console.log(cart)
    })
  }
}