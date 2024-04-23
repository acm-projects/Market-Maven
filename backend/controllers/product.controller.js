const Product = require('../models/product.model')
const mongoose = require('mongoose')

/**
 * 
 * @description query a series of products
 * @route GET /api/products/
 * @access Public
 */
const getProducts = async (req, res) => {
    try {
        console.log("Query: " + req.query);
        let queryStr = JSON.stringify(req.query);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        console.log("Query string: " + queryStr);
        const queryObj = JSON.parse(queryStr);
        console.log(queryObj);
        
        // Execute MongoDB query to find matching products
        const products = await Product.find(queryObj).sort({createdAt: -1})
    
        res.status(200).json(products)
    } catch (error) {
        console.error('Error fetching products', error);
        res.status(500).json({error: 'Internal server error'});
    } 
}

// GET a single product
const getProduct = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such product'})
    }

    const product = await Product.findById(id)
    
    if(!product) {
        return res.status(404).json({error: 'no such product'})
    }

    res.status(200).json(product)
}

//POST a new product
const createProduct = async (req, res) => {
    const {productTitle, vendor, productReviews, category, description, price, stock, zip, image} = req.body

    try { // add doc to db
        const product = await Product.create({productTitle, vendor, productReviews, category, description, price, stock, zip, image});
        res.status(200).json(product);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a product
const deleteProduct = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such product'})
    }

    const product = await Product.findOneAndDelete({_id: id})

    if(!product) {
        return res.status(404).json({error: 'no such product'})
    } 

    res.status(200).json(product)
}

// UPDATE a product
const updateProduct = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such product'})
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!product) {
        return res.status(404).json({error: 'no such product'})
    } 

    res.status(200).json(product)
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
}
