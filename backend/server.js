//declare modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routeer = require('express').Router();

//environment variables for implementing MongoDB, APIs, private variables/keys, etc.
require('dotenv').config();

//define port from environment variables
const port = process.env.PORT;

//create express app
var app = express();

//declare middleware
app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})