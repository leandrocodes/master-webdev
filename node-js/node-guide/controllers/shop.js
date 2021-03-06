const Product = require('../models/product')
//shop
exports.getProductsShop = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/product-list', { prods: products, path: '/products' })
    })
    .catch(err => console.log(err))
}

exports.getIndexShop = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop/index', { prods: products, path: '/' })
    })
    .catch(err => console.log(err))
}

exports.getProductById = (req, res, next) => {
  const prodId = req.params.productId
  // TODO: Ler sobre o método findAll passndo o where
  Product.findByPk(prodId)
    .then(product =>
      res.render('shop/product-detail', {
        product: product,
        path: '/products'
      })
    )
    .catch(err => console.log(err))
}

exports.getCartShop = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            products
          })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

exports.postCartShop = (req, res, next) => {
  const prodId = req.body.productId
  let fetchedCart
  let newQuantity = 1
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart
      return cart.getProducts({ where: { id: prodId } })
    })
    .then(products => {
      let product

      if (products.length > 0) product = products[0]

      if (product) {
        const oldQty = product.cartItem.quantity
        newQuantity += oldQty
        return product
      }
      return Product.findByPk(prodId)
    })
    .then(product => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      })
    })
    .then(() => {
      res.redirect('/cart')
    })
    .catch(err => console.log(err))
}

exports.postCartDeleteItem = (req, res, next) => {
  const prodId = req.body.productId
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } })
    })
    .then(products => {
      const product = products[0]
      return product.cartItem.destroy()
    })
    .then(result => {
      res.redirect('/cart')
    })
    .catch(err => console.log(err))

  /*   Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price)
  })
  res.redirect('/cart') */
}

exports.postOrdersShop = (req, res, next) => {
  let fetchedCart
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart
      return cart.getProducts()
    })
    .then(products => {
      return req.user
        .createOrder()
        .then(order => {
          order.addProducts(
            products.map(product => {
              product.orderItem = { quantity: product.cartItem.quantity }
              return product
            })
          )
        })
        .catch(err => console.log(err))
      // console.log(products)
    })
    .then(result => {
      fetchedCart.setProducts(null)
      //res.redirect('/orders')
    })
    .then(result => {
      res.redirect('/orders')
    })
    .catch(err => console.log(err))
}

exports.getOrdersShop = (req, res, next) => {
  req.user
    .getOrders({include: ['products']})
    .then(orders => res.render('shop/orders', { path: '/orders', orders }))
    .catch(err => console.log(err))
}
