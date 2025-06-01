//Routes defines

const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController.js');

router.get('/showNewProduct', ProductController.showNewProduct);
router.post('/createProduct', ProductController.createProduct);
router.get('/showProductById', ProductController.showProductById);

module.exports = router;