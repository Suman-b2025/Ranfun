const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

const productController = new ProductController();

router.get('/', productController.renderProduct);

module.exports = router;