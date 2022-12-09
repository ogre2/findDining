// Importing express
const express = require('express')
// Importing path
const path = require('path')
// Importing http
const http = require('http')
// Importing config
const config = require('./config/')
// Importing cors
const cors = require('cors')
// Importing helmet
const helmet = require('helmet')
// Creating app
const app = express()
// Creating server
const server = http.createServer(app)
// Importing layouts
const layouts = require('express-ejs-layouts')

// Importing index router
const indexRouter = require('./routes/index.router')
// Importing search router
const searchRouter = require('./routes/search.router')

// Enabling colors
config.colors.enable()

// Enabling json spaces for better JSON data rendering
app.set('json spaces', 2)
// Enabling case sensitive routing
app.set('case sensitive routing', true)
// Setting frontend view engine to EJS
app.set('view engine', 'ejs')
// Setting location of views directory
app.set('views', path.resolve(__dirname, '../client/views'))
// Setting location of main frontend layout file
app.set('layout', 'layouts/layout')

// Enabling layouts
app.use(layouts)
// Enabling cors
app.use(cors())
// Enabling helmet
app.use(helmet())
// Enabled express.json middleware
app.use(express.json({ extended: true }))
// Linking jQuery
app.use('/jquery', express.static(path.resolve(__dirname, '../node_modules/jquery/dist/')))
// Linking Popper
app.use('/popper', express.static(path.resolve(__dirname, '../node_modules/@popperjs/core/dist/umd/')))
// Linking Bootstrap
app.use(express.static(path.resolve(__dirname, '../node_modules/bootstrap/dist/')))
// Linking public files
app.use(express.static(path.resolve(__dirname, '../client/public')))

// Enabling index router
app.use('/', indexRouter)
// Enabling search router
app.use('/api', searchRouter)

/**
 * Starting the backend server
 */
server.listen(config.PORT, () => {
    console.log(`[nodemon] server is running on port: ${config.PORT}`.green)
    // Connecting to database
    config.dbConnect.connect()
})

