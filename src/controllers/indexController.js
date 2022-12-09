// Importing config
const config = require('../config')

// Enabling colors
config.colors.enable()

/**
 * This method will retrieve the index/root endpoint of the API
 */
exports.getIndex = (req, res) => {
    // TODO GET Root endpoint
    try {
        res.status(200).render('index', {
            title: 'Welcome',
            data: {
                message: 'Hello World'
            }
        })
    }
    catch(err) {
        console.log(`[nodemon] error: ${err.message}`.red)
    }
}