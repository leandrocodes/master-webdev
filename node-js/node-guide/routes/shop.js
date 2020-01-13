const express = require('express')
//
const shopController = require('../controllers/shop')

const router = express.Router()

router.get('/', shopController.getIndexShop)
router.get('/products', shopController.getProductsShop)
router.get('/cart', shopController.getCartShop)
router.get('/checkout', shopController.getCheckoutShop)

module.exports = router
