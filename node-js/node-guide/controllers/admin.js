const Product = require('../models/product')

//admin
exports.getListProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        path: '/admin/products'
      })
    })
    .catch(err => console.log(err))
}

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', { path: '/admin/add-product' })
}

exports.getEditProduct = (req, res, next) => {
  const edit = req.query.edit
  if (!edit) return res.redirect('/')

  const prodId = req.params.productId
  Product.findByPk(prodId)
    .then(product => {
      if (!product) return res.redirect('/')
      else
        res.render('admin/edit-product', {
          path: 'admin/edit-product',
          edit,
          product
        })
    })
    .catch()
}

exports.postAddProduct = (req, res, next) => {
  const dt = req.body
  const title = dt.title
  const desc = dt.desc
  const imgUrl = dt.imgUrl
  const price = dt.price
  Product.create({
    title,
    price,
    imgUrl,
    desc
  })
    .then(() => {
      console.log('Produto Criado!')
      res.redirect('/')
    })
    .catch(err => console.log(err))
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
