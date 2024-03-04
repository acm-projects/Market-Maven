const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true, },
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', },
    productReviews: {type: mongoose.Schema.Types.ObjectId, ref: 'Review', },
    productTitle: { type: String, required: true, },
    description: {type: String, required: true, },
    price: { type: Number, required: true, min: 0,},
    stock: {type: Number, requiered: true, min: 0, },
    //createdAt: {type: Date, default: Date.now, },
    // images

}, {timestamps: true})

module.exports = mongoose.model('product', productSchema)