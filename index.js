//Index aplication
const express=require('express');

const app=express();

const axios=require('axios');//requerimos axios para el control de las solicitudes hhtp
const cors=require('cors');//requerimos cors permitir que una página web cargada en un dominio pueda acceder a recursos de otro dominio, cuando la política de "mismo origen" del navegador web por defecto no lo permitiría.

//Require routes
const productsRouter = require('./routes/productRoutes.js');

//Variables de configuración
require('dotenv').config();
const PORT=process.env.PORT || 8080;

//Require dbConection
const { dbConnection } = require('./config/bd.js');




app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', productsRouter);

dbConnection();

app.listen(PORT,()=> console.log(`Active server in http://localhost:${PORT}`));