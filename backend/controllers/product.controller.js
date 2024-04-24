const Product = require('../models/product.model')
const mongoose = require('mongoose')

/**
 * 
 * @description query a series of products
 * @route GET /api/products/
 * @access Public
 */

// query parameters: search, zip
const getProducts = async (req, res) => {
    try {

        // pull search from request query parameters
        const { search, zip } = req.query

        let searchQuery = '';
        if (search) {
            searchQuery += `{productTitle: '${search}'}`;
        }

        const query = { $text: searchQuery };
        const sort = { score: { $meta: "textScore" } };
        const projection = {
            _id: 0,
            title: 1,
            // score: { $meta: "textScore" }
        };

        const searchRegex = new RegExp(search, "i")
        console.log(searchRegex)

        // in the future: query for products by .find()ing vendor names instead
        const products = await Product.find({ productTitle: searchRegex })
            // .sort(sort)
            // .select(projection)
            .exec();

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
    const newProduct = req.body

    try { // add doc to db
        const product = await Product.create(newProduct);
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
