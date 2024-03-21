
// environment variables for implementing MongoDB, APIs, private variables/keys, etc.
require('dotenv').config()

// require modules
const express = require('express')
const mongoose = require('mongoose')

// require routes
const categoryRoutes = require('./routes/categories.route')
const orderRoutes = require('./routes/orders.routes')
const productRoutes = require('./routes/products.routes')
const reviewRoutes = require('./routes/reviews.routes')
const userRoutes = require('./routes/users.routes')
const vendorRoutes = require('./routes/vendors.routes')
const storedAuthRoutes = require('./routes/auth/stored-auth.routes')

// express app
const app = express()

// middleware  
app.use(express.json())

// routes
app.use('/api/auth/stored-auth', storedAuthRoutes)
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