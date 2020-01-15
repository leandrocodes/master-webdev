const Product = require('../models/product')

//admin
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', { path: '/admin/add-product' })
}

exports.getEditProduct = (req, res, next) => {
  const edit = req.query.edit
  if(!edit) return res.redirect('/')

  const prodId = req.params.productId
  Product.findById(prodId, product => {
    if(!product) return res.redirect('/')
    res.render('admin/edit-product', {path: '/admin/products', edit, product})
  })
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
    res.render('admin/products', { prods: products, path: '/admin/products', editing: true })
    console.log(products)
  })
}