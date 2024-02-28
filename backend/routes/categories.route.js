const express = require('express')
const {
    createCategory //,
    // other functions to import
} = require('../controllers/category.controller')

const router = express.Router()

// GET all categories
router.get('/', (req, res) => {
    res.json({mssg: 'GET all categories'})
})

// GET a single category
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single category'})
})

// POST a new category
//router.post('/', createCategory)
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new category'})
})

// DELETE a category
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a category'})
})

// UPDATE a category
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a category'})
})

module.exports = router // export router