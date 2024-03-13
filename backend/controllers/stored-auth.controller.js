const user = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// sync handling middleware
const asyncHandler = require('express-async-handler')

/*  As of 3/10, most if not all of this logic will be based on the
    Dave Gray tutorial 'MERN Stack Authentication with JWT Access,
    Refresh Tokens, Cookies'. Will look into how to refactor this
    into using the Passort.js strategies in tandem w/ Google OAuth
*/

const login = asyncHandler(async (req, res) => {

    const { username, password } = req.body

    const foundUser = await user.findOne({ username }).exec()
    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized credentials' })
    }

    // remember to look into bcrypt more, and make sure password
    // hash/handling aligns between this and the client
    const match = await bcrypt.compare(compare, foudnUser.password)
    if (!match) return res.status(401).json({message: 'Unauthorized credentials' })

    const accessToken = jwt.sign()

})

const signup = asyncHandler(async (req, res) => {

    const { username, password } = req.body

    const foundUser = await user.findOne({ username }).exec()
    if (foundUser) {
        return res.status(401).json({ message: 'User already exists' })
    }

})

const refresh = (req, res) => {

}

const logout = (req, res) => {

}

module.exports = {
    login,
    signup, 
    refresh,
    logout

}