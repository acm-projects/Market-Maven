const Order = require('../models/order.model')
const mongoose = require('mongoose')

// GET all orders
const getOrders = async (req, res) => {
    const orders = await Order.find({}).sort({createdAt: -1})
    
    res.status(200).json(orders)
}

// GET a single order
const getOrder = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findById(id)
    
    if(!order) {
        return res.status(404).json({error: 'no such order'})
    }

    res.status(200).json(order)
}

// POST a new order
const createOrder = async (req, res) => {
    const {user, items, totalPrice, shippingAddress, paymentMethod, isPaid, paidAt, isDelivered, deliveredAt} = req.body

    try { // add doc to db
        const order = await Order.create({user, items, totalPrice, shippingAddress, paymentMethod, isPaid, paidAt, isDelivered, deliveredAt});
        res.status(200).json(order);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a order
const deleteOrder = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findOneAndDelete({_id: id})

    if(!order) {
        return res.status(404).json({error: 'no such order'})
    } 

    res.status(200).json(order)
}

// UPDATE a order
const updateOrder = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such order'})
    }

    const order = await Order.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!order) {
        return res.status(404).json({error: 'no such order'})
    } 

    res.status(200).json(order)
}

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    deleteOrder,
    updateOrder
}