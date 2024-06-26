const express = require('express')
const router = express.Router()

const {
    login,
    signup,
    refresh,
    logout
} = require('../../controllers/google-oauth.controller')


// login request
router.post('/login', login)

router.post('/signup', signup)

router.get('/refresh', refresh)

router.post('/logout', logout)

module.exports = router