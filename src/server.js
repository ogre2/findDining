// Importing express
const express = require('express')
// Importing HTTP
const http = require('http')
// Creating app
const app = express()
// Creating server
const server = http.createServer(app)

// Hello world on ROOT endpoint
app.get('/', (req, res) => {
    // TODO GET root endpoint
    try {
        res.send('Hello World')
    }
    // Catch error
    catch(err) {
        throw err
    }
})

/**
 * Starting the backend server
 */
server.listen(5000, () => {
    console.log(`server is running on port: ${5000}`)
})

