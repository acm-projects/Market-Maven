const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    products: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true, },
    categoryName: {type: String, required: true, },

}, {timestamps: true})

module.exports = mongoose.model('category', categorySchema)

