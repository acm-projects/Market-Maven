const { OAuth2Client } = require('google-auth-library')

// middleware to handle OAuth onSuccess response from the front end
// handle either token or auth code, or both? 