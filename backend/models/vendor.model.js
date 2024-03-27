
//require mongoose and schema modelling
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema for vendors
const vendorSchema = new Schema({
    username: { type: String, unique: true, required: true, },
    email: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    password: { type: String, required: true, trim: true, minlength: 3 },
    zip: { type: Number },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    image: { type: String },

})

//export Vendor
module.exports = mongoose.model('Vendor', vendorSchema);