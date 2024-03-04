const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendorSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    products: { type: Schema.Types.ObjectId, ref: 'Product' },
    zip: { type: Number },
}, {timestamps: true})

module.exports = mongoose.model('vendor', vendorSchema)