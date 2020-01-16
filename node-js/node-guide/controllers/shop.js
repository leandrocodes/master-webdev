const Product = require('../models/product')
const Cart = require('../models/cart')
//shop
exports.getProductsShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { prods: products, path: '/products' })
  })
}

exports.getProductById = (req, res, next) => {
  const prodId = req.params.productId
  Product.findById(prodId, product => {
    res.render('shop/product-detail', { product, path: '/products' })
  })
}

exports.getIndexShop = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', { prods: products, path: '/' })
  })
}

exports.getCartShop = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = []
      for (product of products) {
        const productData = cart.products.find(prod => prod.id === product.id)
        if (productData) {
          cartProducts.push({ productData: product, qty: productData.qty })
        }
      }
      res.render('shop/cart', { path: '/cart', products: cartProducts })
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
  Cart.deleteProduct(prodId)
  res.redirect('/cart')
}

exports.getCheckoutShop = (req, res, next) => {
  res.render('shop/checkout', { path: '/checkout' })
}

exports.getOrdersShop = (req, res, next) => {
  res.render('shop/orders', { path: '/orders' })
}