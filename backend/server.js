
// environment variables for implementing MongoDB, APIs, private variables/keys, etc.
require('dotenv').config()

// require modules
const express = require('express') // nodejs framework
const mongoose = require('mongoose') // for mongodb
const cors = require('cors'); // for accessing API in frontend
const OAuthMiddleware = require('./middleware/googleOAuthHandler')
// const multer = require('multer'); // multer and path will be for file uploading
// const path = require('path');
// nodemon is for refreshing our page automatically


// require routes
const categoryRoutes = require('./routes/categories.route')
const orderRoutes = require('./routes/orders.routes')
const productRoutes = require('./routes/products.routes')
const reviewRoutes = require('./routes/reviews.routes')
const userRoutes = require('./routes/users.routes')
const vendorRoutes = require('./routes/vendors.routes')
const storedAuthRoutes = require('./routes/auth/stored-auth.routes')
const googleOauthRoutes = require('./routes/auth/google-oauth.routes')

// express app
const app = express()

// middleware  
app.use(express.json())
app.use(cors());
// app.use(OAuthMiddleware.handleImplicitFlow)

// routes
app.use('/api/auth/stored-auth', storedAuthRoutes)
app.use('/api/auth/google-oauth', googleOauthRoutes)
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