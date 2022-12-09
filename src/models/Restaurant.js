// Importing mongoose
const mongoose = require('mongoose')
// Importing mongoose-long
const Long = require('mongoose-long')(mongoose)

/**
 * Creating the restaurant model schema
 */
const RestaurantSchema = mongoose.Schema({
    r_address: {
        building: {
            type: Number,
            required: true,
        },
        coord: {
            type: [Number],
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zipcode: {
            type: Number,
            required: true
        }
    },
    borough: {
        type: String,
        required: true
    },
    cuising: {
        type: String,
        required: true
    },
    grades: {
        type: [
            {
                date: Date,
                grade: String,
                score: {
                    type: Number,
                    default: 0
                }
            }
        ]
    },
    r_name: {
        type: String,
        required: true
    },
    r_id: {
        type: Number,
        required: true
    }
})

// Exporting restaurant schema
module.exports = mongoose.model('Restaurant', RestaurantSchema)