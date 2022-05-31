// Import express
const express = require('express')

const { createAsset ,getAsset } = require("../controllers/asset")

// Init express router
const router = express.Router();

// Route create a new product
router.route('/asset').get(getAsset).post(createAsset);


// export router
module.exports = router