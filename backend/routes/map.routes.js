const express = require("express");

// controller functions
const { getDistance } = require('../controllers/map.controller')

const router = express.Router()

// GET distance between two locations
router.get('/distance', getDistance)