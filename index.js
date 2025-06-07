//Index aplication
const express=require('express');
const methodOverride = require('method-override');

//Para contraseñas
const bodyParser = require('body-parser');
const session = require('express-session');

//Inicion servidor
const app=express();

const middlewares = require('./middleware/authMiddleware.js');
const routes = require('./routes/authRoutes.js');


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

app.use(methodOverride('X-HTTP-Method-Override'));

//Rutas Palabra clave
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.PASS,
  resave: false,
  saveUninitialized: true,
}));

middlewares.setupAPP(app); //error dado que setupApp las Ps son el Mayúsculas
app.use('/', routes.app);



//Rutas
app.use('/', productsRouter);

dbConnection();

app.listen(PORT,()=> console.log(`Active server in http://localhost:${PORT}`));