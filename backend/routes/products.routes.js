const express = require('express')
const {
    getProducts,
    getProduct,
    //createUser,
    deleteProduct,
    updateProduct
} = require('../controllers/product.controller')

const router = express.Router()

// GET all products
router.get('/', getProducts)

// GET a single product
router.get('/:id', getProduct)

// POST a new product
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new product'})
})

// DELETE a product
router.delete('/:id', deleteProduct)

// UPDATE a product
router.patch('/:id', updateProduct)

module.exports = router // export router