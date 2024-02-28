const express = require('express')
const router = express.Router()

// GET all vendors
router.get('/', (req, res) => {
    res.json({mssg: 'GET all vendors'})
})

// GET a single vendor
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single vendor'})
})

// POST a new vendor
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new vendor'})
})

// DELETE a vendor
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a vendor'})
})

// UPDATE a vendor
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a vendor'})
})

module.exports = router // export router