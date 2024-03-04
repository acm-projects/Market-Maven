const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, },
    items: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true, },
            quantity: { type: Number, required: true, min: 1, },
        },
    ],
    totalPrice: { type: Number, required: true, min: 0,},
    shippingAddress: { type: String, required: true, },
    paymentMethod: {type: String, required: true,},
    isPaid: { type: Boolean, default: false, },
    paidAt: { type: Date, },
    isDelivered: { type: Boolean, default: false, },
    deliveredAt: { type: Date, },
    //createdAt: { type: Date, default: Date.now, },
    
}, {timestamps: true})

module.exports = mongoose.model('order', orderSchema)