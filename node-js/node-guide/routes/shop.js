const express = require('express')
//
const productsController = require('../controllers/products')

const router = express.Router()

router.get('/', productsController.getIndexShop)
router.get('/products', productsController.getProductsShop)
router.get('/cart', productsController.getCartShop)

module.exports = router
