const express = require('express')
const {
    getCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
} = require('../controllers/category.controller')

const router = express.Router()

// GET all categories
router.get('/', getCategories)

// GET a single category
router.get('/:id', getCategory)

// POST a new category
router.post('/', createCategory)

// DELETE a category
router.delete('/:id', deleteCategory)

// UPDATE a category
router.patch('/:id', updateCategory)

module.exports = router // export router