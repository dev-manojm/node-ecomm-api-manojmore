const express = require('express')
const productController = require('../contollers/product')

const router = new express.Router()

//The products routers starts from here
router.post('/api/products', productController.createProd)

router.get('/api/products', productController.readProds)

router.get('/api/products/:id', productController.findProd)

router.patch('/api/products/:id',productController.updateProd)

router.delete('/api/products/:id',productController.deleteProd)


module.exports = router