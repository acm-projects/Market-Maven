const user = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// sync handling middleware
const asyncHandler = require('express-async-handler')

/**
 * As of 3/10, most if not all of this logic will be based on the
 * Dave Gray tutorial 'MERN Stack Authentication with JWT Access,
 * Refresh Tokens, Cookies'. Will look into how to refactor this
 * into using the Passort.js strategies in tandem w/ Google OAuth
 */

/**
 * 
 * @description This method will be used to log in users and provide 
 * them with a JWT upon authentication for access to authorized routes
 * @route POST /api/auth/stored-auth
 * @access Public - user is to be logged in
 */
const login = asyncHandler(async (req, res) => {

    const { username, password } = req.body

    const foundUser = await user.findOne({ username }).exec()
    if (!foundUser) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    // remember to look into bcrypt more, and make sure password
    // hash/handling aligns between this and the client
    const match = await bcrypt.compare(password, foudnUser.password)
    if (!match) return res.status(401).json({message: 'Invalid credentials' })

    // generate access token
    const accessToken = jwt.sign(
        {
            "user": {
                "username" : foundUser.username,
                "role" : "user" // implement roles, likely just user and vendor
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expriesIn: '1hr' }
    )

    // generate refresh token
    const refreshToken = jwt.sign(
        { "username": foundUser.username},
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d'}
    )

    // generate secure cookie
    res.cookie('jwt', refreshToken, 
        {
            httpOnly: true,     // only accessible by web-server
            secure: true,       // use HTTPS protocol
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7     // lifetime measured in ms
        }
    )

    // send access token 
    res.json({ accessToken })

})

/**
 * 
 * @description {*} req 
 * @route {*} res 
 */
const refreshUser = (req, res) => {

    // extract JWT from cookie
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized'})
    const refreshToken = cookies.jwt;

    // verify JWT
    // work on filling out these parameters properly
    jwt.verify()
}

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