// Importing model
const { db } = require("../models/Restaurant")
const Restaurant = require("../models/Restaurant")

// Get search
exports.getResults = (async (req, res) => {
    // TODO GET all cars
    try {
        const restaurants = req.db.get('restaurants')
        const query = req.query;

        restaurants.find(query, () => {
            res.render('results', {
                data: docs
            })
        })

        // const findRestaurant = await db.restaurants.find(req.params.name)

        if(!findRestaurant) {
            res.status(404).json({
                status: 404,
                message: 'Restaurant not found!',
                data: null
            })
        }
        else {
            res.status(200).render('results', {
                status: 200,
                data: {
                    findRestaurant
                }
            })
        }
    }
    // Catch any errors/exceptions
    catch(error) {
        // Log the error message to the console
        console.log(error.message.red)

        // Set the response status to 500 and show the error as message
        res.status(500).json({
            message: error.message
        })
    }
})