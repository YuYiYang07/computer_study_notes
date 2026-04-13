// Import connection pool
const pool = require('../services/db');

// Select all rows in table
module.exports.selectAll = (callback) => {
    const SQLSTATEMENT = `
        SELECT * FROM users;
        `;

    pool.query(SQLSTATEMENT, callback);
};

// Select a row by ID in table
module.exports.selectById = (data, callback) => {
    const SQLSTATEMENT = `
        SELECT * FROM users
        WHERE id = ?;
        `;
    const VALUES = [data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
};

// Insert a row to table
module.exports.insertSingle = (data, callback) => {
    const SQLSTATEMENT = `
        INSERT INTO users (name, email)
        VALUES (?, ?);
        `;
    const VALUES = [data.name, data.email];

    pool.query(SQLSTATEMENT, VALUES, callback);
};

// Update a row by ID in table
module.exports.updateById = (data, callback) => {
    const SQLSTATEMENT = `
        UPDATE users
        SET name = ?, email = ?
        WHERE id = ?;
        `;
    const VALUES = [data.name, data.email, data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
};

// Delete a row by ID from table
module.exports.deleteById = (data, callback) => {
    const SQLSTATEMENT = `
        DELETE FROM users
        WHERE id = ?;
        `;
    const VALUES = [data.id];

    pool.query(SQLSTATEMENT, VALUES, callback);
};
