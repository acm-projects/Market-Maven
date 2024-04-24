const distance = require('google-distance-matrix')

distance.key(process.env.GOOGLE_MATRIX_API_KEY)

const getDistance = async (req, res) => {
    const origins = req.body.origin
    const destinations = req.body.destinations
    const mode = req.body.travelMode

    distance.matrix(origins, destinations, mode, function(err, distances){
        if (!err)
        res.json(distances.rows)
    })
}

module.exports = { getDistance }