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

    // extract userDetails from Google
    await googleOauthHandler.handleImplicitFlow(req, res);
    
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

    // extract userDetails from Google
    await googleOauthHandler.handleImplicitFlow(req, res);

    
}

/**
 * 
 * @description log out users and invalidate their tokens 
 * @route POST /api/auth/stored-auth/logout
 * @access Public
 */

// === mostly used Google's own OAuth documentation ===
const logout = async (req, res) => {

    try {

        const postData = "token=" + req.body.googleToken;
    
        // Options for POST request to Google's OAuth 2.0 server to revoke a token
        const postOptions = {
          method: 'POST',
          url: 'https://oauth2.googleapis.com/revoke',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
          },
          data: postData
        };
    
        // Make the POST request using Axios
        const response = await axios(postOptions);
    
        // Handle response
        console.log('Response:', response.data);
        res.status(response.status).json(response.data);

      } catch (error) {

        // Handle errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

      // need to handle Market Maven tokens as well

}

module.exports = {
    login,
    signup,
    refresh,
    logout

}