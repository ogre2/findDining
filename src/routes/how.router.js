// Importing express router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/howController')

/**
 * @method GET
 */
router.get('/howitworks', controller.getHOW)

// Exporting router
module.exports = router