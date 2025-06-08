//Routes defines

const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');
const ProductController = require('../controllers/productController.js');

const middlewares = require('../middleware/authMiddleware.js');//Protección de las rutas

//DashBoard
router.get('/dashboard/new', ProductController.newProduct,middlewares.verificarSesionMiddleware);//Formulario
router.post('/dashboard', ProductController.createProduct, middlewares.verificarSesionMiddleware);//Post para crear en Mongo DB
router.get('/dashboard/created', middlewares.verificarSesionMiddleware, ProductController.showProductCreated);//Producto creado
router.get('/dashboard', ProductController.products, middlewares.verificarSesionMiddleware); //Muestra todos los productos
router.get('/dashboard/:_id', ProductController.product, middlewares.verificarSesionMiddleware); //devuelve el detalle del producto

router.get('/dashboard/:_id/edit', ProductController.productModify, middlewares.verificarSesionMiddleware);//Muestra el formulario
router.post('/dashboard/:_id/edit', ProductController.productChanged, middlewares.verificarSesionMiddleware); //Envía el formulario
router.get('/dashboard/:_id/delete', ProductController.deleteProduct, middlewares.verificarSesionMiddleware);//Muestra el formulario
router.get('/dashboard/:category/category', ProductController.productsCategoryDashboard, middlewares.verificarSesionMiddleware);//Muestra por categoria

//Pagina principal de productos para clientes
router.get('/products', ProductController.productsClients); //Muestra todos los productos
router.get('/products/:_id', ProductController.productsDetailClients); //Muestra todos los productos
router.get('/products/:category/category', ProductController.productsCategoryClients);//Muestra por categoria

//Pagina inicial
router.get('/', ProductController.initial); //Muestra todos los productos

/*___________________________________API-JSON___________________________________ */

//DashBoard
router.post('/API', ProductController.createProductAPI);
router.get('/API', ProductController.productsAPI); //Muestra todos los productos
router.get('/API/:_id', ProductController.productAPI); //devuelve el detalle del producto
router.post('/API/:_id/edit', ProductController.productChangedAPI); //Envía el formulario
router.get('/API/:_id/delete', ProductController.deleteProductAPI);//Muestra el formulario

module.exports = router;