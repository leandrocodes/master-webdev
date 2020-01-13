const Product = require('../model/product')

//admin
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { path: '/admin/add-product' })
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/products')
}

exports.getAdmProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', { prods: products, path: '/admin/products' })
    console.log(products)
  })
}

//shop
exports.getProductsShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { prods: products, path: '/products' })
    console.log(products)
  })
}

exports.getIndexShop = (req, res, next) => {
  res.render('shop/index', { path: '/' })
}

exports.getCartShop = (req, res, next) => {
  res.render('shop/cart', { path: '/cart' })
}