//Routes defines

const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/productController.js');

//DashBoard
router.get('/dashboard/new', ProductController.newProduct);
router.post('/dashboard', ProductController.createProduct);
router.get('/dashboard/created', ProductController.showProductCreated);
router.get('/dashboard', ProductController.products); //Muestra todos los productos
router.get('/dashboard/:_id', ProductController.product); //devuelve el detalle del producto

router.get('/dashboard/:_id/edit', ProductController.productModify);//Muestra el formulario
router.post('/dashboard/:_id/edit', ProductController.productChanged); //Envía el formulario
router.get('/dashboard/:_id/delete', ProductController.deleteProduct);//Muestra el formulario

//Pagina principal de productos
router.get('/products', ProductController.productsClients); //Muestra todos los productos
router.get('/products/:_id', ProductController.productsDetailClients); //Muestra todos los productos


module.exports = router;