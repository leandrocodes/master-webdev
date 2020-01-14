const express = require('express')
//
const shopController = require('../controllers/shop')

const router = express.Router()

router.get('/', shopController.getIndexShop)
router.get('/products', shopController.getProductsShop)
router.get('/products/:productId', shopController.getProductById)
router.get('/cart', shopController.getCartShop)
router.post('/cart', shopController.postCartShop)
router.get('/checkout', shopController.getCheckoutShop)
router.get('/orders', shopController.getOrdersShop)

module.exports = router
