
//require mongoose and schema modelling
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define schema for users
const userSchema = new Schema({
    username: { type: String, unique: true, required: true, },
    email: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    password: { type: String, required: true, trim: true, minlength: 3 },
    zip: { type: Number },
    orderHistory: [{ type: Schema.Types.ObjectId, ref: 'Order' }]

}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);