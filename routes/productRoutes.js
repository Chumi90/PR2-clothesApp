//Routes defines

const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');
const ProductController = require('../controllers/productController.js');


const middlewares = require('../middleware/authMiddleware.js');//Protección de las rutas

//Rutas DashBoard
router.get('/dashboard/new', middlewares.verificarSesionMiddleware, ProductController.newProduct);//Formulario
router.post('/dashboard', middlewares.verificarSesionMiddleware, ProductController.createProduct);//Post para crear en Mongo DB
router.get('/dashboard/created', middlewares.verificarSesionMiddleware, ProductController.showProductCreated);//Producto creado
router.get('/dashboard', middlewares.verificarSesionMiddleware, ProductController.products); //Muestra todos los productos
router.get('/dashboard/:_id', middlewares.verificarSesionMiddleware, ProductController.product); //devuelve el detalle del producto
router.get('/dashboard/:_id/edit', middlewares.verificarSesionMiddleware,ProductController.productModify);//Muestra el formulario
router.post('/dashboard/:_id/edit', ProductController.productChanged); //Envía el formulario
router.get('/dashboard/:_id/delete', middlewares.verificarSesionMiddleware, ProductController.deleteProduct);//Muestra el formulario
router.get('/dashboard/:category/category', middlewares.verificarSesionMiddleware, ProductController.productsCategoryDashboard);//Muestra por categoria

//Rutas Pagina principal de productos para clientes
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