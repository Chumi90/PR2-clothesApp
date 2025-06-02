//Routes defines

const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/productController.js');

router.get('/dashboard/new', ProductController.newProduct);
router.post('/dashboard', ProductController.createProduct);
router.get('/dashboard/created', ProductController.showProductCreated);
router.get('/dashboard', ProductController.products);
router.get('/dashboard/:_id', ProductController.product);//error en esta ruta

module.exports = router;