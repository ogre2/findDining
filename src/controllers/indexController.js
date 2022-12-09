exports.getIndex = (req, res) => {
    // TODO GET Root endpoint
    try {
        res.status(200).json({
            status: 200,
            endpoint: '/',
            data: {
                message: 'Hello World'
            }
        })
    }
    catch(err) {
        throw err
    }
}