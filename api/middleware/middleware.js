const handleError = (err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message, //DEV only
        stack: err.stack, //DEV only
        custom: 'there was an error retrieving data from the server'
    });
};

module.exports = {
    handleError
};