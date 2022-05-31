// Import express
const express = require('express')
// Import Product Controller

const { buyProduct } = require("../controllers/product")

// Init express router
const router = express.Router();

// Route create a new product
router.route('/buyProduct').post(buyProduct);

// export router
module.exports = router

