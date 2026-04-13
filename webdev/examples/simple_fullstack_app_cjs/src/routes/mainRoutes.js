// Import express module and create main router object (mini app instance)
const express = require('express');
const router = express.Router();

// Import sub routers
const userRoutes = require('./userRoutes');

// Mount sub routers to their respective paths
router.use("/user", userRoutes);

// Export main router with routes
module.exports = router;
