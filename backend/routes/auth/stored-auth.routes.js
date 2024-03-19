const express = require('express')

const {
    login,
    signup,
    refresh,
    logout
} = require('../../controllers/stored-auth.controller')

const router = express.Router()

// login request
router.post('/login', login)

router.post('/signup', signup)

router.get('/refresh', refresh)

router.post('/logout', logout)

module.exports = router