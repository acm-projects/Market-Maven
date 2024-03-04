const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, },
    email: { type: String, unique: true, required: true, },
    password: { type: String, required: true, },
    //createdAt: { type: Date, default: Date.now, },
    orderHistory: { type: Schema.Types.ObjectId, ref: 'Order', },
}, {timestamps: true})

module.exports = mongoose.model('user', userSchema)