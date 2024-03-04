const express = require('express')
const {
    getVendors,
    getVendor,
    //createVendor,
    deleteVendor,
    updateVendor
} = require('../controllers/vendor.controller')

const router = express.Router()

// GET all vendors
router.get('/', getVendors)

// GET a single vendor
router.get('/:id', getVendor)

// POST a new vendor
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new vendor'})
})

// DELETE a vendor
router.delete('/:id', deleteVendor)

// UPDATE a vendor
router.patch('/:id', updateVendor)

module.exports = router // export router