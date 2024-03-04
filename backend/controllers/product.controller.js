const Product = require('../models/product.model')
const mongoose = require('mongoose')

// GET all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    
    res.status(200).json(products)
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

// POST a new product
// const createProduct = async (req, res) => {
//     const {} = req.body

//     try { // add doc to db
//         const product = await Product.create({});
//         res.status(200).json(product);
//     } catch (error){
//         res.status(400).json({error: error.message})
//     }
// }

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
    //createproduct,
    deleteProduct,
    updateProduct
}
