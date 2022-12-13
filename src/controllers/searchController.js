// Importing config
const { parse } = require('dotenv')
const config = require('../config')
// Importing model
const Restaurant = require('../models/Restaurant')
const Review = require('../models/Review')

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
        // Retrieving reviews from database
        const allReviews = await Review.find()

        res.status(200).render('search', {
            status: 200,
            title: 'Search',
            data: {
                message: 'Search endpoint',
                restaurants: JSON.parse(JSON.stringify(allRestaurants)),
                reviews: JSON.parse(JSON.stringify(allReviews))
            }
        })
    }
    // Catch error
    catch(err) {
        console.log(`[nodemon] error: ${err.message}`.red)
    }
})