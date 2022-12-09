// Importing mongoose
const mongoose = require('mongoose')
// Enabling strict query
mongoose.set('strictQuery', true)

/**
 * This method will enable the server to connect to the Mongo database
 */
const connect = async () => {
    // TODO Connect to database
    try {
        await mongoose.connect(process.env.MONGO_DBURI)
        console.log(`[nodemon] server connected to Mongo database`.blue)
    }
    // Catch error
    catch(err) {
        console.log(`[nodemon] error: ${err.message}`.red)
    }
}

// In case the server loses connection to the database
mongoose.connection.on('disconnected', () => {
    console.log(`[server] disconnected from MongoDB`.yellow)
})

// Exporting connection method
module.exports = {
    connect
}