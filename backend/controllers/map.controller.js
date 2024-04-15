const distance = require('google-distance-matrix')

// Matrix API is just a simple GET req to the API endpoint w/ a key
// I don't think we'll need a backend service for it or anything like that

const getDistance = async (req, res) => {
    const origins = req.boyd.origins
    const destinations = req.body.destinations
    const mode = req.body.travelMode

    distance.matrix(origins, destinations, mode, function(err, distances){
        if (!err)
        res.json(distances.rows)
    })
}

module.exports = { getDistance }