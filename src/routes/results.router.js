// Importing router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/resultsController')

/**
 * @method GET
 */
router.get('/results', controller.getResults)

// Exporting router
module.exports = router