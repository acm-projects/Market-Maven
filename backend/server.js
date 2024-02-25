// import modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Router } from "express";

// import routes
import userRoutes from "./routes/users";
import vendorRoutes from "./routes/vendors";
import productRoutes from "./routes/product";

// environment variables for implementing MongoDB, APIs, private variables/keys, etc.
require('dotenv').config();

// define port from environment variables
const port = process.env.PORT;

// create express server
var app = express();

// use middleware
app.use(cors());

// connect to MongoDB db
const uri = process.env.ATLAS_URI
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Atlas database connection establish essucessfully!");
})

// use routes
app.use("/api/users", userRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/products", productRoutes);

// start express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})  