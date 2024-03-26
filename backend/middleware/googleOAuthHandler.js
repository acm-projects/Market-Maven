const { OAuth2Client } = require('google-auth-library')
const asyncHandler = require('express-async-handler')
const axios = require('axios');

// based on the following medium.com article tutorial:
// https://medium.com/@toluarejibadey/how-to-use-google-login-in-nodejs-expressjs-125c76c01f54

// middleware to handle OAuth onSuccess response from the front end
// handle either token or auth code, or both? 

// this handles access tokens already recieved by the front end w/ implicit flow
const handleImplicitFlow = asyncHandler(async (req, res) => {

    
})

// this handles auth code from the front end w/ auth-code flow
const handleAuthCodeFlow = asyncHandler(async (req, res) => {
    
    // extract code from client request
    const code = req.headers.authorization;
    console.log('Auth code:', code);

    // exchange auth code for access token
    const response = await axios.post(
        'https://oauth2.google.apis.com/token',
        {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,

            // check to make sure the redirect uri is supposed to be the
            // server redirect uri defined in the google client
            redirect_uri: `http://lcoalhost:${process.env.PORT}`,
            grant_type: 'authorization_code'
        }        
    )
    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken)

    // fetch user details with the access token
    // review what scopes we'll need and adjust this as needed
    const userRes = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    )
    const userDetails = userRes.data
    console.log('User Details:', userDetails)
    
    // return user details and access token
    return userDetails, accessToken
})

module.exports = {
    handleImplicitFlow,
    handleAuthCodeFlow
}
