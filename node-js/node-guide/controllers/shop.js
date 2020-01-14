const Product = require('../models/product')

//shop
exports.getProductsShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { prods: products, path: '/products' })
  })
}

exports.getProductById = (req, res, next) => {
  const prodId = req.params.productId
  Product.findById(prodId, product => {
    console.log(product)
    res.render('shop/product-detail', { product })
  })
}

exports.getIndexShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', { prods: products, path: '/' })
  })
}

exports.getCartShop = (req, res, next) => {
  res.render('shop/cart', { path: '/cart' })
}

exports.getCheckoutShop = (req, res, next) => {
  res.render('shop/checkout', { path: '/checkout' })
}

exports.getOrdersShop = (req, res, next) => {
  res.render('shop/orders', { path: '/orders' })
}