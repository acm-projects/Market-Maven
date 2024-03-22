const Vendor = require('../models/vendor.model')
const mongoose = require('mongoose')

// GET all vendors
const getVendors = async (req, res) => {
    const vendors = await Vendor.find({}).sort({createdAt: -1})
    
    res.status(200).json(vendors)
}

// GET a single vendor
const getVendor = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such vendor'})
    }

    const vendor = await Vendor.findById(id)
    
    if(!vendor) {
        return res.status(404).json({error: 'no such vendor'})
    }

    res.status(200).json(vendor)
}

// POST a new vendor
const createVendor = async (req, res) => {
    const {username, email, password, zip, products} = req.body

    try { // add doc to db
        const vendor = await Vendor.create({username, email, password, zip, products});
        res.status(200).json(vendor);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// DELETE a vendor
const deleteVendor = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such vendor'})
    }

    const vendor = await Vendor.findOneAndDelete({_id: id})

    if(!vendor) {
        return res.status(404).json({error: 'no such vendor'})
    } 

    res.status(200).json(vendor)
}

// UPDATE a vendor
const updateVendor = async (req, res) => {
    const {id} = req.params // grabs id

    if (!mongoose.Types.ObjectId.isValid(id)) { // check for valid id
        return res.status(404).json({error: 'No such vendor'})
    }

    const vendor = await Vendor.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!vendor) {
        return res.status(404).json({error: 'no such vendor'})
    } 

    res.status(200).json(vendor)
}

module.exports = {
    getVendors,
    getVendor,
    createVendor,
    deleteVendor,
    updateVendor
}