require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const categoryRoutes = require('./routes/categories.route')
const orderRoutes = require('./routes/orders.routes')
const productRoutes = require('./routes/products.routes')
const reviewRoutes = require('./routes/reviews.routes')
const userRoutes = require('./routes/users.routes')
const vendorRoutes = require('./routes/vendors.routes')

// express app
const app = express()

// middleware  
app.use(express.json())

// routes
app.use('/api/categories', categoryRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/users', userRoutes)
app.use('/api/vendors', vendorRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => { // catches any error
        console.log(error)
    })


process.env
