const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true, },
    thereview: { type: String, required: true},
    starRating: {type: Number, min: 1, max: 5, required: true, },
}, {timestamps: true})

module.exports = mongoose.model('review', reviewSchema)