const Product = require('../models/product')

//admin
exports.getListProducts = (req, res, next) => {
  // Product.findAll()
  req.user
    .getProducts()
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
  // Product.findByPk(prodId)
  req.user
    .getProducts({ where: { id: prodId } })
    .then(products => {
      const product = products[0]
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
  req.user
    .createProduct({
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
  Product.findByPk(id)
    .then(product => {
      product.title = updtTitle
      product.desc = updtDesc
      product.imgUrl = updtImgUrl
      product.price = updtPrice
      return product.save()
    })
    .then(() => {
      //console.log('updated')
      res.redirect('/admin/products')
    })
    .catch(err => console.log(err))
}

exports.postDelProduct = (req, res, next) => {
  const prodId = req.body.productId
  Product.destroy({ where: { id: prodId } })
    .then(() => {
      res.redirect('/admin/products')
    })
    .catch(err => console.log(err))
}
