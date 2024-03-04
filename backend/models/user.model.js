
//require mongoose and schema modelling
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema for users
const userSchema = new Schema({
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
    cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    lists: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    orderHistory: [{ type: Schema.Types.ObjectId, ref: 'Order' }]

})

//export User
module.exports = mongoose.model('User', userSchema);