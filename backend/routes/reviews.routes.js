const express = require('express')
const {
    getReviews,
    getReview,
    createReview,
    deleteReview,
    updateReview
} = require('../controllers/review.controller')

const router = express.Router()

// GET all product reviews
router.get('/', getReviews)

// GET a single product review
router.get('/:id', getReview)

// POST a new product review
router.post('/', createReview)

// DELETE a product review
router.delete('/:id', deleteReview)

// UPDATE a product review
router.patch('/:id', updateReview)

module.exports = router // export router