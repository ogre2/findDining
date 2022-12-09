// Importing express router
const router = require('express').Router()
// Importing router controller
const controller = require('../controllers/indexController')

/**
 * @method GET
 * This HTTP request will GET the root API endpoint with logic contained in the dedicated
 * index controller file
 */
router.get('/', controller.getIndex)

// Exporting router
module.exports = router