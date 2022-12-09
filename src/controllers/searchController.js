// Importing config
const { parse } = require('dotenv')
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
        const allRestaurants = await Restaurant.find().limit(102)
        let data = JSON.stringify(allRestaurants)
        let restaurants = JSON.parse(data)

        res.status(200).render('search', {
            status: 200,
            title: 'Search',
            data: {
                message: 'Search endpoint',
                restaurants
            }
        })
    }
    // Catch error
    catch(err) {
        console.log(`[nodemon] error: ${err.message}`.red)
    }
})