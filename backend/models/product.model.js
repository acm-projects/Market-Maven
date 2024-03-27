const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productTitle: { type: String, required: true, minlength: 3},
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true },
    productReviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review', }],
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', },
    description: { type: String },
    price: { type: Number, required: true },
    stock: {type: Number, requiered: true, min: 0, },
    zip: { type: Number },
    image: { type: String } 
}, {timestamps: true})

//export Product
module.exports = mongoose.model('Product', productSchema);
