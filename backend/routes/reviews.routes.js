const express = require('express')
const {
    getReviews,
    getReview,
    //createUser,
    deleteReview,
    updateReview
} = require('../controllers/review.controller')

const router = express.Router()

// GET all products
router.get('/', getReviews)

// GET a single product
router.get('/:id', getReview)

// POST a new product
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new product'})
})

// DELETE a product
router.delete('/:id', deleteReview)

// UPDATE a product
router.patch('/:id', updateReview)

module.exports = router // export router