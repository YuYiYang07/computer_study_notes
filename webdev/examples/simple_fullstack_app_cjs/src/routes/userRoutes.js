// Import express module and create sub router object
const express = require('express');
const router = express.Router();

// Import controller and middleware
const controller = require('../controllers/userController');
const response = require('../middleware/response');

// Map routes to controller and middleware functions
router.get('/',
    controller.readAllUser,
    response.sendResponse()
);
router.post('/',
    validation.validateBody('name', 'email'),
    controller.createUser,
    controller.readUserById,
    response.withMessage("User created successfully", 201),
    response.sendResponse()
);

// Accept dynamic value in request path (request parameter)
router.get('/:id',
    controller.readUserById,
    response.sendResponse()
);
router.put('/:id',
    validation.validateBody('name', 'email'),
    controller.updateUserById,
    response.withMessage("User updated successfully", 200),
    response.sendResponse()
);
router.delete('/:id',
    controller.deleteUserById,
    response.withMessage("User deleted successfully", 200),
    response.sendResponse()
);

// Export sub router with routes
module.exports = router;
