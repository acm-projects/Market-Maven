const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validator = require('validator')


/**
 * As of 3/10, most of this logic will be based on the Dave Gray 
 * tutorial 'MERN Stack Authentication with JWT Access, Refresh Tokens,
 * Cookies'. Will also be incorporating other references going forward
 */

/**
 * 
 * @description log in and provide users access and refresh tokens
 * @route POST /api/auth/stored-auth/login
 * @access Public
 */
const login = async (req, res) => {

    const { email, password } = req.body

    // validate form data
    if (validator.isEmpty(email) || validator.isEmpty(password)){
        return res.status(401).json({ message: 'Please fill out both fields' })
    }

    // user not found
    const foundUser = await User.findOne({ email }).exec()
    if (!foundUser) return res.status(401).json({ message: 'Invalid credentials' })
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) return res.status(401).json({ message: 'Invalid credentials' })

    // generate access token
    const accessToken = jwt.sign(
        {
            "user": {

                // changed identifier to email instead of username
                "email": foundUser.email,

                // TO DO: implement roles, likely just user and vendor
                "role": "user"
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1hr' }
    )

    // generate refresh token
    const refreshToken = jwt.sign(
        { "username": foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    // CURRENT SOLUTION: store both tokens locally from response instead

    // === set secure to true if an when deployed so it only uses https ===
    // res.cookie('jwt', refreshToken, {
    //     httpOnly: true,     // only accessible by web-server
    //     secure: false,      // use HTTPS protocol, *** set false for dev ***
    //     sameSite: 'None', 
    //     maxAge: 1000 * 60 * 60 * 24     // lifetime measured in ms
    // })

    res.json({ accessToken, refreshToken, email, id: foundUser._id, username: foundUser.username })

}

/** === STILL NEEDS TO BE TESTED ===
 * 
 * @description refresh user access token using refresh token
 * @route GET /api/auth/stored-auth/refresh
 * @access Public
 */
const refresh = (req, res) => {

    // extract JWT from cookie
    const cookies = req.cookies;

    try {
        if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })
        const refreshToken = cookies.jwt;

        // verify JWT
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
            asyncHandler(async (err, decoded) => {

                // if error caught, return forbidden error message
                if (err) return res.status(403).json({ message: 'Forbidden' })

                // find user, catch if user does not exists
                const foundUser = await User.findOne({ username: decoded.username })
                if (!foundUser) return rse.status(401).json({ message: 'Unauthorized' })

                // generate access token
                const accessToken = jwt.sign(
                    {
                        "user": {
                            "username": foundUser.username,

                            // TO DO: implement roles, likely just user and vendor
                            "role": "user"
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expriesIn: '1hr' }
                )

                res.json({ accessToken, email: foundUser.email, username: foundUser.username })
            })
        )

    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err });
    }
}

/**
 * 
 * @description sign up users and add them into the db 
 * @route POST /api/auth/stored-auth/signup 
 * @access Public
*/

const signup = async (req, res) => {

    const { username, email, password } = req.body

    //validate form data, not empty
    if (validator.isEmpty(email) || validator.isEmpty(password) || validator.isEmpty(username)){
        return res.status(401).json({ message: 'Please fill out all fields' })
    }

    // validate form data, correct format
    switch (true) {
        case !validator.isEmail(email):
            return res.status(401).json({ message: 'Invalid email address' })
            break;
        case !validator.isStrongPassword(password):
            return res.status(401).json({ message: 'Password not strong enough' })
            break;
        case !validator.isAlphanumeric(username):
            return res.status(401).json({ message: 'Username must be alphanumeric' })
            break;
        default:
            console.log("Both email and password are present");
    }

    // user already exists in the database
    const foundUser = await User.findOne({ username }).exec()
    const foundEmail = await User.findOne({ email }).exec()
    if (foundUser || foundEmail) {
        return res.status(401).json({ message: 'User already exists' })
    }

    // salt and hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log(hash);

    // create new user in the db
    const newUser = new User({ username, email, password: hash });
    const savedUser = await newUser.save();
    // res.status(200).json({ message: 'Succesful sign up' })

    // generate access token
    const accessToken = jwt.sign(
        {
            "user": {

                // changed identifier to email instead of username
                "email": email,

                // TO DO: implement roles, likely just user and vendor
                "role": "user"
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1hr' }
    )

    // generate refresh token
    const refreshToken = jwt.sign(
        { "username": username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    // CURRENT SOLUTION: store both tokens locally from response instead

    // === set secure to true if an when deployed so it only uses https ===
    // res.cookie('jwt', refreshToken, {
    //     httpOnly: true,     // only accessible by web-server
    //     secure: false,      // use HTTPS protocol, *** set false for dev ***
    //     sameSite: 'None', 
    //     maxAge: 1000 * 60 * 60 * 24     // lifetime measured in ms
    // })

    // send access token 
    res.status(200).json({ accessToken, refreshToken, email, id: newUser._id, username })

}

/**
 * 
 * @description log out users and invalidate their tokens 
 * @route POST /api/auth/stored-auth/logout
 * @access Public
 */

const logout = (req, res) => {

    // extract JWT from cookies
    // const cookies = req.cookies

    try {


        // code below not to be used unless cookies are figured out

        // log out request has no JWT
        // if (!cookies?.jwt) return res.sendStatus(204)

        // // succesfully log out
        // res.clearCookie('jwt', {
        //     httpOnly: true,     // only accessible by web-server
        //     secure: true,       // use HTTPS protocol
        //     sameSite: 'strict'  // only communicable to the server that generated the token
        // })
        // res.json({ message: 'User has been succesfully logged out'})

    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error', error: err });
    }
}

module.exports = {
    login,
    signup,
    refresh,
    logout

}