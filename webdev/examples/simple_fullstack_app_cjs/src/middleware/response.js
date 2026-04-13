// Store message and status in res.locals
module.exports.withMessage = (message, status) => (req, res, next) => {
    res.locals.message = message;
    if (status) res.locals.status = status;
    next();
};

// Format and send standardised JSON response
module.exports.sendResponse = () => (req, res) => {
    delete res.locals.sqlMetadata;

    const {
        status = 200,
        message = "Success",
        ...data
    } = res.locals;

    res.status(status).json({ message, ...(data || {}) });
};
