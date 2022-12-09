// Importing config
const config = require('../config')
// Importing model
const Restaurant = require('../models/Restaurant')

// Enabling colors
config.colors.enable()

/**
 * This method will retrieve the search endpoint of the API
 */
exports.getSearch = (async (req, res) => {
    // TODO GET Search endpoint
    try {
        // Retrieving restaurants from database
        const allRestaurants = await Restaurant.find().limit(100)

        res.status(200).json({
            status: 200,
            endpoint: '/api/search',
            data: {
                message: 'Search endpoint',
                restaurants: allRestaurants
            }
        })
    }
    // Catch error
    catch(err) {
        console.log(`[nodemon] error: ${err.message}`.red)
    }
})