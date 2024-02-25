
//require mongoose and schema modelling
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema for products
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    description: { type: String },
    vendor: { type: Schema.Types.ObjectId, ref: 'Vendor', required: true },
    price: { type: Number, required: true },
    zip: { type: Number },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
})

//export Product
module.exports = mongoose.model('Product', productSchema);