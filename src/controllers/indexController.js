// Importing config
const config = require('../config')
// Importing model
const Review = require('../models/Review')

// Enabling colors
config.colors.enable()

/**
 * This method will retrieve the index/root endpoint of the API
 */
exports.getIndex = (async (req, res) => {
    // TODO GET Root endpoint
    try {
        // Retrieving reviews from database
        const allReviews = await Review.find()

        res.status(200).render('index', {
            title: 'Welcome',
            data: {
                message: 'Hello World',
                reviews: JSON.parse(JSON.stringify(allReviews))
            }
        })
    }
    catch(err) {
        console.log(`[nodemon] error: ${err.message}`.red)
    }
})