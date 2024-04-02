// to handle verification of JWTs per request to protected routes

const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    // check auth header for access token
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authheader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized'})
    }

    const token = authHeader.split(' ')[1]

    // verify JWT access token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {

        // return 403 forbidden response if access token is invalid
        if (err) return res.status(403).json({ message: 'Forbidden' })

        // validate user
        req.user = decoded.UserInfo.username;
        req.roles = decoded.UserInfo.roles;

        // handle authorization needs from here on

        next();
    })
}

module.exports = verifyJWT;