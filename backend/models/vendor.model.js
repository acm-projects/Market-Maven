
//require mongoose and schema modelling
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema for vendors
const vendorSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    zip: { type: Number },
    productList: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

})

//export Vendor
module.exports = mongoose.model('Vendor', vendorSchema);