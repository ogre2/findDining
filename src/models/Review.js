// Importing mongoose
const mongoose = require('mongoose')

/**
 * Creating the review model schema
 */
const ReviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

// Exporting restaurant schema
module.exports = mongoose.model('Review', ReviewSchema)