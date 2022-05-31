// Import express
const express = require('express')

const { createCatalog ,getCatalog } = require("../controllers/catalog")
// const { authentication } = require('../middleware/auth')

// Init express router
const router = express.Router();

// Route create a new product
router.route('/catalog').get(getCatalog).post(createCatalog);


// export router
module.exports = router
