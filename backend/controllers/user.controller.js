const User = require('../models/user.model')
const mongoose = require('mongoose')

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})
    
    res.status(200).json(users)
}

// GET a single user
const getUser = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such User'})
    }

    const user = await User.findById(id)
    
    if(!user) {
        return res.status(404).json({error: 'no such User'})
    }

    res.status(200).json(user)
}

// POST a new user
const createUser = async (req, res) => {
    const {username, email, password} = req.body

    try { // add doc to db
        const user = await User.create({username, email, password});
        res.status(200).json(user);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a user
const deleteUser = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such User'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user) {
        return res.status(404).json({error: 'no such User'})
    } 

    res.status(200).json(user)
}

// UPDATE a user
const updateUser = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such User'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user) {
        return res.status(404).json({error: 'no such User'})
    } 

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}
