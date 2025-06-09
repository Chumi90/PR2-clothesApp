//Routes Authentications
const express = require('express');
const app = express.Router();
const middlewares = require('../middleware/authMiddleware.js');

const authController = require('../controllers/authController.js');

app.get('/products/login', authController.form);
app.post('/products/login/user', middlewares.validarPalabraMiddleware,authController.verifyUser);


app.post('/', authController.destroySesion);

module.exports = {app};