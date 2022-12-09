// Importing express
const express = require('express')
// Importing http
const http = require('http')
// Importing config
const config = require('./config/')
// Creating app
const app = express()
// Creating server
const server = http.createServer(app)

// Enabling colors
config.colors.enable()

// Enabling json spaces for better JSON data rendering
app.set('json spaces', 2)

// Hello world on ROOT endpoint
app.get('/', (req, res) => {
    // TODO GET root endpoint
    try {
        res.status(200).json({
            status: 200,
            message: 'Hello World'
        })
    }
    // Catch error
    catch(err) {
        throw err
    }
})

/**
 * Starting the backend server
 */
server.listen(config.PORT, () => {
    console.log(`[nodemon] server is running on port: ${config.PORT}`.green)
})

