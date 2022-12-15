/**
 * This method will retrieve the how it works endpoint of the API
 */
exports.getFeatures = (req, res) => {
    // TODO GET How it works page
    try {
        res.status(200).render('features', {
            status: 200,
            title: 'Features',
            data: {
                message: 'Features page'
            }
        })
    }
    // Catch error
    catch(err) {
        throw err
    }
}