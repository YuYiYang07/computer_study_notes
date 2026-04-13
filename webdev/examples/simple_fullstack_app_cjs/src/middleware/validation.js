// Validate required fields in request body
module.exports.validateBody = (...fields) => (req, res, next) => {
    if (req.body === undefined) {
        return res.status(400).json({ message: `Missing required fields: ${fields.join(", ")}` });
    }

    const missing = fields.filter(field => req.body[field] === undefined);

    if (missing.length > 0) {
        return res.status(400).json({ message: `Missing required fields: ${missing.join(", ")}` });
    }

    next();
};
