const Product = require('../model/product')

//shop
exports.getProductsShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { prods: products, path: '/products' })
    console.log(products)
  })
}

exports.getIndexShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', { prods: products, path: '/' })
    console.log(products)
  })
}

exports.getCartShop = (req, res, next) => {
  res.render('shop/cart', { path: '/cart' })
}
exports.getCheckoutShop = (req, res, next) => {
  res.render('shop/checkout', { path: '/checkout' })
}