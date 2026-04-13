// Import model and utils
const model = require('../models/userModel');

// Read all users
module.exports.readAllUser = (req, res, next) => {
    const callback = (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Database error", error });
        }

        next();
    };

    model.selectAll(callback);
};

// Read user by ID
module.exports.readUserById = (req, res, next) => {
    const data = {
        id: res.locals.insertId || req.params.id
    };

    const callback = (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Database error", error });
        }

        if (results.length <= 0) {
            return res.status(404).json({ message: "User not found" });
        }

        next();
    };

    model.selectById(data, callback);
};

// Create a new user
module.exports.createUser = (req, res, next) => {
    const data = {
        name: req.body.name,
        email: req.body.email
    };

    const callback = (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Database error", error });
        }

        res.locals.insertId = results.insertId;
        next();
    };

    model.insertSingle(data, callback);
};

// Update user by ID
module.exports.updateUserById = (req, res, next) => {
    const data = {
        id: req.params.id,
        name: req.body.name,
        email: req.body.email
    };

    const callback = (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Database error", error });
        }

        if (results.affectedRows <= 0) {
            return res.status(404).json({ message: "User not found" });
        }

        next();
    };

    model.updateById(data, callback);
};

// Delete user by ID
module.exports.deleteUserById = (req, res, next) => {
    const data = {
        id: req.params.id
    };

    const callback = (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Database error", error });
        }

        if (results.affectedRows <= 0) {
            return res.status(404).json({ message: "User not found" });
        }

        next();
    };

    model.deleteById(data, callback);
};
