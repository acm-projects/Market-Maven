const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const axios = require('axios');


// google oauth middleware
const googleOauthHandler = require('../middleware/googleOAuthHandler')

/**
 * Will most likely share / call on code from the stored-auth controller
 */

/**
 * 
 * @description log in and provide users access and refresh tokens
 * @route POST /api/auth/google-oauth
 * @access Public
 */

// WEIRD BUG WHEN USING MIDDLEWARE:
// responds with a Cannot POST endpoint error 
// and has a runtime error of Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// pointing to the middleware call, there is no conflicting res sending so idk whats wrong
const login = async (req, res, next) => {


  // Google OAuth axios request are from the middleware
  // extract userDetails from Google
  const userRes = await axios.get(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    {
      headers: {
        Authorization: `Bearer ${req.body.googleToken.access_token}`
      }
    }
  )

  // send acquired userDetails to controller
  // console.log(userRes.data)
  req.userDetails = userRes.data


    // generate access token
    const accessToken = jwt.sign(
      {
        "user": {

          // changed identifier to email instead of username
          "email": req.userDetails.email,

          // TO DO: implement roles, likely just user and vendor
          "role": "user"
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1hr' }
    )

    // generate refresh token
    const refreshToken = jwt.sign(
      { "username": req.userDetails.name },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    )
    res.json({ accessToken, refreshToken, email: req.userDetails.email, username: req.userDetails.name })

}

/**
 * 
 * @description refresh user access token using refresh token
 * @route GET /api/auth/google-oauth/refresh
 * @access Public
 */
const refresh = (req, res) => {


}

/**
 * 
 * @description sign up users and add them into the db 
 * @route POST /api/auth/google-oauth/signup 
 * @access Public
*/

const signup = async (req, res, next) => {

  // extract userDetails from Google
  await googleOauthHandler.handleImplicitFlow(req, res);


}

/**
 * 
 * @description log out users and invalidate their tokens 
 * @route POST /api/auth/google-oauth/logout
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