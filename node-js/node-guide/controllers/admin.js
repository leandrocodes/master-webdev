const Product = require('../models/product')

//admin
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', { path: '/admin/add-product' })
}

exports.getEditProduct = (req, res, next) => {
  const edit = req.query.edit
  if (!edit) return res.redirect('/')

  const prodId = req.params.productId
  Product.findById(prodId, product => {
    if (!product) return res.redirect('/')
    res.render('admin/edit-product', { path: '/admin/products', edit, product })
  })
}

exports.postEditProduct = (req, res, next) => {
  const dt = req.body
  const updtTitle = dt.title
  const updtDesc = dt.desc
  const updtImgUrl = dt.imgUrl
  const updtPrice = dt.price
  const id = dt.prodId
  const product = new Product(id, updtTitle, updtImgUrl, updtDesc, updtPrice)
  product.save()
  res.redirect('/admin/products')
}

exports.postDelProduct = (req, res, next) => {
  const prodId = req.body.productId
  Product.deleteById(prodId)
  res.redirect('/admin/products')
}

exports.postAddProduct = (req, res, next) => {
  const dt = req.body
  const title = dt.title
  const desc = dt.desc
  const imgUrl = dt.imgUrl
  const price = dt.price
  const product = new Product(null, title, imgUrl, desc, price)
  product
    .save()
    .then(() => {
      res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.getListProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      path: '/admin/products',
      editing: true
    })
  })
}
