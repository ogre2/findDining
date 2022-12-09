// Importing express router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/searchController')

/**
 * This HTTP request will GET the API search endpoint with logic contained in 
 * this routers dedicated controller file.
 * @method GET
 */
router.get('/search', controller.getSearch)

// Exporting router
module.exports = router