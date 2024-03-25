const Category = require('../models/category.model')
const mongoose = require('mongoose')

// GET all categories
const getCategories = async (req, res) => {
    const categories = await Category.find({}).sort({createdAt: -1})
    
    res.status(200).json(categories)
}

// GET a single category
const getCategory = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such category'})
    }

    const category = await Category.findById(id)
    
    if(!category) {
        return res.status(404).json({error: 'no such category'})
    }

    res.status(200).json(category)
}

//POST a new category
const createCategory = async (req, res) => {
    const {users, products, categoryName} = req.body

    try { // add doc to db
        const category = await Category.create({users, products, categoryName});
        res.status(200).json(category);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a category
const deleteCategory = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such category'})
    }

    const category = await Category.findOneAndDelete({_id: id})

    if(!category) {
        return res.status(404).json({error: 'no such category'})
    } 

    res.status(200).json(category)
}

// UPDATE a category
const updateCategory = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such category'})
    }

    const category = await Category.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!category) {
        return res.status(404).json({error: 'no such category'})
    } 

    res.status(200).json(category)
}

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
}