const express = require('express')
//
const adminController = require('../controllers/admin')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct)

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct)

// /admin/products => GET
router.get('/products', adminController.getListProducts)

module.exports = router
