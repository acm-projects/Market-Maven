const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')

// google oauth middleware
const googleOauthHandler = require('../middleware/googleOAuthHandler')

/**
 * Will most likely share / call on code from the stored-auth controller
 */

/**
 * 
 * @description log in and provide users access and refresh tokens
 * @route POST /api/auth/stored-auth
 * @access Public
 */
const login = async (req, res) => {

    
}

/**
 * 
 * @description refresh user access token using refresh token
 * @route GET /api/auth/stored-auth/refresh
 * @access Public
 */
const refresh = (req, res) => {


}

/**
 * 
 * @description sign up users and add them into the db 
 * @route POST /api/auth/stored-auth/signup 
 * @access Public
*/

const signup = async (req, res) => {

    
}

/**
 * 
 * @description log out users and invalidate their tokens 
 * @route POST /api/auth/stored-auth/logout
 * @access Public
 */

const logout = (req, res) => {


}

module.exports = {
    login,
    signup,
    refresh,
    logout

}