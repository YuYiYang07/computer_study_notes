// Import connection pool
const pool = require("../services/db");

// Define SQL statement to initialise database
// VARCHAR(n) defines max string length, efficient for indexing
// DEFAULT CURRENT_TIMESTAMP auto-fills timestamp on creation
// ON UPDATE CURRENT_TIMESTAMP auto-refreshes timestamp on update
const INIT_DB_SQL = `
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    INSERT INTO users (name, email) VALUES
    ('John Doe', 'john@example.com'),
    ('Jane Doe', 'jane@example.com');
    `;

// Initialise database
pool.query(INIT_DB_SQL, (error, results) => {
    if (error) {
        console.error("Error initialising database:", error);
        process.exit(1);
    }

    console.log("Database initialised successfully:", results);
    process.exit(0);
});
