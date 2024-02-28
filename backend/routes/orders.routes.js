const express = require('express')
const router = express.Router()

// GET all orders
router.get('/', (req, res) => {
    res.json({mssg: 'GET all categories'})
})

// GET a single order
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single order'})
})

// POST a new order
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new order'})
})

// DELETE an order
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an order'})
})

// UPDATE an order
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an order'})
})

module.exports = router // export router