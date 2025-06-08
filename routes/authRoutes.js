//Routes Authentications
const express = require('express');
const session = require('express-session');
const app = express.Router();
const middlewares = require('../middleware/authMiddleware.js');

const authController = require('../controllers/authController.js');

app.get('/products/login', authController.form);
app.get('/products/login/user',middlewares.verificarSesionMiddleware,authController.verifyUser);
app.post('/products/login/user', middlewares.validarPalabraMiddleware,authController.redirectDashBoard);
app.post('/', authController.destroySesion);

module.exports = {app};