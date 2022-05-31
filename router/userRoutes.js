// Import express
const express = require('express')
// Import Product Controller

const { createUser } = require("../controllers/user")
const { authentication } = require('../middleware/auth')

// Init express router
const router = express.Router();

// Route create a new product
router.route('/user/signup').post(createUser);

// export router
module.exports = router

