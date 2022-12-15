// Importing express router
const router = require('express').Router()
// Importing controller
const controller = require('../controllers/featuresController')

/**
 * @method GET
 */
router.get('/features', controller.getFeatures)

// Exporting router
module.exports = router