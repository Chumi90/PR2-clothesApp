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

//Pagina inicial
router.get('/', ProductController.initial); //Muestra todos los productos
//Navigation products
router.get('/products/:category', ProductController.productsCategory); //Muestra todos los productos

/*___________________________________API-JSON___________________________________ */

//DashBoard
router.post('/API', ProductController.createProductAPI);
router.get('/API', ProductController.productsAPI); //Muestra todos los productos
router.get('/API/:_id', ProductController.productAPI); //devuelve el detalle del producto
router.post('/API/:_id/edit', ProductController.productChangedAPI); //Envía el formulario
router.get('/API/:_id/delete', ProductController.deleteProductAPI);//Muestra el formulario

module.exports = router;