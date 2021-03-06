const express = require('express')
//
const shopController = require('../controllers/shop')

const router = express.Router()
// /index => GET
router.get('/', shopController.getIndexShop)
// /products-list => GET
router.get('/products', shopController.getProductsShop)
// /index => GET
router.get('/products/:productId', shopController.getProductById)
// /cart => GET
router.get('/cart', shopController.getCartShop)
// /cart => POST
router.post('/cart', shopController.postCartShop)
// /cart-delete-item => POST
router.post('/cart-delete-item', shopController.postCartDeleteItem)
// /orders => GET
router.get('/orders', shopController.getOrdersShop)
// /orders => Post
router.post('/create-order', shopController.postOrdersShop)

module.exports = router
