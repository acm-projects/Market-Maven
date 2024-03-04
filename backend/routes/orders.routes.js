const express = require('express')
const {
    getOrders,
    getOrder,
    //createUser,
    deleteOrder,
    updateOrder
} = require('../controllers/order.controller')

const router = express.Router()

// GET all orders
router.get('/', getOrders)

// GET a single order
router.get('/:id', getOrder)

// POST a new order
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new order'})
})

// DELETE an order
router.delete('/:id', deleteOrder)

// UPDATE an order
router.patch('/:id', updateOrder)

module.exports = router // export router