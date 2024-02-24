//declare modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Router } from "express";

//environment variables for implementing MongoDB, APIs, private variables/keys, etc.
require('dotenv').config();

//define port from environment variables
const port = process.env.PORT;

//create express server
var app = express();

//declare middleware
app.use(cors());

//connect to MongoDB db

//start express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})  