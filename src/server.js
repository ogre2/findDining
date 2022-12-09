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

// Importing index router
const indexRouter = require('./routes/index.router')

// Enabling colors
config.colors.enable()

// Enabling json spaces for better JSON data rendering
app.set('json spaces', 2)
// Enabling case sensitive routing
app.set('case sensitive routing', true)

// Enabling index router
app.use('/', indexRouter)

/**
 * Starting the backend server
 */
server.listen(config.PORT, () => {
    console.log(`[nodemon] server is running on port: ${config.PORT}`.green)
})

