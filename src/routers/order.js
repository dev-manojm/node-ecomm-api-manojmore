const express = require('express')
const orderController = require('../contollers/order')
const auth = require('../middleware/auth')

const router = new express.Router()

//The order  routers starts from here
router.post('/api/orders', auth, orderController.createOrder)

router.get('/api/orders', auth, orderController.listOrders)


module.exports = router