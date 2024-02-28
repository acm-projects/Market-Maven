const express = require('express')
const router = express.Router()

// GET all products
router.get('/', (req, res) => {
    res.json({mssg: 'GET all products'})
})

// GET a single product
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single product'})
})

// POST a new product
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new product'})
})

// DELETE a product
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a product'})
})

// UPDATE a product
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a product'})
})

module.exports = router // export router