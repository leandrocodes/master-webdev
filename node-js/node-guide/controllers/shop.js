const Product = require('../models/product')
const Cart = require('../models/cart')
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
  Product.findById(prodId)
    .then(([product]) =>
      res.render('shop/product-detail', {
        product: product[0],
        path: '/products'
      })
    )
    .catch(err => console.log(err))
}

exports.getCartShop = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = []
      const totalPrice = cart.totalPrice
      for (product of products) {
        const productData = cart.products.find(prod => prod.id === product.id)
        if (productData) {
          cartProducts.push({ productData: product, qty: productData.qty })
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        products: cartProducts,
        totalPrice
      })
      console.log(cartProducts)
    })
  })
}

exports.postCartShop = (req, res, next) => {
  const prodId = req.body.productId
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price)
  })
  res.redirect('/cart')
}

exports.postCartDeleteItem = (req, res, next) => {
  const prodId = req.body.productId
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price)
  })
  res.redirect('/cart')
}

exports.getCheckoutShop = (req, res, next) => {
  res.render('shop/checkout', { path: '/checkout' })
}

exports.getOrdersShop = (req, res, next) => {
  res.render('shop/orders', { path: '/orders' })
}
