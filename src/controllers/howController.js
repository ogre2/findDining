/**
 * This method will retrieve the how it works endpoint of the API
 */
exports.getHOW = (req, res) => {
    // TODO GET How it works page
    try {
        res.status(200).render('howitworks', {
            status: 200,
            title: 'How it Works',
            data: {
                message: 'How it works'
            }
        })
    }
    // Catch error
    catch(err) {
        throw err
    }
}