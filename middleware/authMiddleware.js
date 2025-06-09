//Middleware Authenticationconst 

const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/products/login?error=2');
  }
};

const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PASS;
  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/products/login?error=1');
  }
};
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP
};