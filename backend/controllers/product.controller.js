const Product = require('../models/product.model')
const mongoose = require('mongoose')

//GET all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    
    res.status(200).json(products)
}

// const getProducts = async (req, res) => {

//     try {
//         // Query object to filter products
//         let query = {};

//         // filtering criteria
//         if(req.query.category){
//             query.category = req.query.category;
//         }

//         if (req.query.priceMin && req.query.priceMax){
//             query.price = { $gte: parseInt(req.query.priceMin), $lte: parseInt(req.query.priceMax) };
//         }

//         // Execute MongoDB query to find matching products
//         const products = await Product.find(query).sort({createdAt: -1})
    
//         res.status(200).json(products)
//     } catch (error) {
//         console.error('Error fetching products', error);
//         res.status(500).json({error: 'Internal server error'});
//     } 
// }

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
    const {productTitle, vendor, productReviews, category, description, price, stock, zip} = req.body

    try { // add doc to db
        const product = await Product.create({productTitle, vendor, productReviews, category, description, price, stock, zip});
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
