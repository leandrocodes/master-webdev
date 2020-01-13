const Product = require('../models/product')

//admin
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', { path: '/admin/add-product' })
}

exports.postAddProduct = (req, res, next) => {
  const dt = req.body
  const title = dt.title
  const desc = dt.desc
  const imgUrl = dt.imgUrl
  const price = dt.price
  const product = new Product(title, imgUrl, desc, price)
  product.save()
  res.redirect('/products')
}

exports.getListProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('admin/products', { prods: products, path: '/admin/products' })
    console.log(products)
  })
}