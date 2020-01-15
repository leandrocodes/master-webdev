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
// /checkout => GET
router.get('/checkout', shopController.getCheckoutShop)
// /orders => GET
router.get('/orders', shopController.getOrdersShop)

module.exports = router
