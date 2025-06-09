#TIENDA DE ROPA#
## Introducción
El proyecto contará con 

## Descripción de la extructura de carpetas (arbol de trabajo)
├── config
│   ├── db.js
├── controllers
│   ├── productController.js
│   └── authController.js (BONUS)
├── models
│   └── Product.js
├── routes
│   └── productRoutes.js
│   └── authRoutes.js (BONUS)
├── middlewares (BONUS)
│   └── authMiddleware.js
├── helpers
│   └── template.js
│   └── getNavBar.js
│   └── baseHtml.js
└── index.js
|
├── test (BONUS)
│   └── productController.test.js
├── .env
└── package.json

## Implementación de tecnologías a utilizar
En este proyecto se utilizarán las siguientes tecnologías:
- Para el Backend:
    - Node.js
    - Express
    - Mogoose
    - dotenv

- Para el Frontend:
    - HMTL
    - CSS

- Base de datos
    - Mongo bd Atlass
    - Cloudinary, para almacenamiento de imágenes

# Configuración del servicio
Para poder comenzar con el proyecto sedeberán instalar las siguientes dependencias:
- npm init -y
- npm i express mongoose dotenv -E
- npm install cors
- npm install method-override
- npm install express-session
- npm install body-parser

# Ignorar archivos de carga
Crear un archivo .env para ignorar los siguientes archivos:
- node_modules
- .env
- package-lock.json
- package.json

# Creamos la página del DashBoard donde introduciremos los datos de la ropa
Para ello se ha de configurar el cuerpo del HTML dividiendo este entre el inicio y el final, dentro del archivo baseHtml.js
Se debe crear un template para cada tipo de ropa.

# Configuración de la base de datos
├── config
│   └── db.js

Se debe utilizar mongoose y la requerir dotenv para obtener las contraseñas correspondientes
const mongoose = require('mongoose');
require('dotenv').config();

# Estructura de la BBDD
- Nombre
- Descripción
- Imagen
- Categoría
- Talla
- Precio

# Crear los controlers de para las estructuras de los datos para la base de datos
├── models
│   └── Product.js
│   └── User.js

Se debe crear una estructura para poder manejar las solicitudes CRUD de los productos. A continuación se muestra la estructura de los datos que se almacenarán para los productos.
- name:{type: String, required: true}
- description: {type: String, required: true}
- image:{type: String, required: true}
- category:{type: String, required: true}
- size:{type: String, required: true}
- price:{type: Number, required: true}

En la siguiente función se crea la estructura de los usuarios
- name:{type: String, required: true}
- email: {type: String, required: true}
- password:{type: String, required: true}
- category:{type: String, required: true}

# Creación de rutas DashBoard
En este punto tendremos que realizar la creación de rutas para poder realizar modificaciones dentro de la base de datos.
- Primero (Formulario para crear productos) has de crear la ruta /dashboard/new , dentro de esta ruta tendrás que utilizar el método GET tendrás el formulario para crear un producto.
    - Crea 2 botones
        - Primer botón, te devolverá a la ruta /dashboard con metodo POST para que crees un nuevo producto.
        - Segundo botón, te devolverá a la ruta /showProducts para que puedas ver todos los productos.

- Segundo (Ver todos los productos) has de crear la ruta /dashboard , dentro de esta ruta se enviará por el método POST para enviar los datos a la BBDD.
    - Tendrás que crear un botón para mostrar un producto ejemplo con la característica de este, es un ejemplo del producto.

- Tercero (Ver producto creado) has de crear la ruta /dashboard/created , donde devolverás el producto creado.
    - Crea 2 botones
        - Primer botón, te devolverá a la ruta /dashboard/new con metodo GET  para que crees un nuevo producto.
        - Segundo botón, te devolverá a la ruta /dashboard con metodo GET para que puedas ver todos los productos.
        - Nota: aprovecha los datos obtenidos para no hacer solicitudes a la bd de Mongo Atlass (las solicitudes cuestan dinero).

- Cuarto (mostrar todos los productos) has de crear la ruta /products , dentro de esta ruta se devolverán todos los productos creados.
    - Crea 2 botones
        - Primer botón, te devolverá a la ruta /dashboard/new con metodo GET para que crees un nuevo producto.
        - Segundo botón, te devolverá a la ruta /dashboard con metodo GET para actualizar los productos.

- Quinto (seleccinar un producto para editar) has de crear la ruta /dashboard/:_id/edit con el metodo GET para que te devuelva el formulario y editar el producto
    Nota: tienes que crear el metodo  [Method Override](https://www.npmjs.com/package/method-override)
    - Primero instala las dependecias de Override npm install method-override
    - Segundo debes requerir en index.js
    - Tercero usa dentro del index.js app.use(methodOverride('X-HTTP-Method-Override')) para actualizar y borrar la información.
        - Utiliza "?_method=UPDATE" para enviar los formularios este método ayudará al navegador a identificar el tipo de acción que quieres realizar <form action="/dashboard/${recibedProduct._id}/edit?_method=UPDATE">
    - Quinto crea las rutas get y post para obtener los datos y enviar las actualizaciones realizadas a la Base de datos de Mongo DB.

- Sexto (borrar un producto) has de crear la ruta /dashboard/:_id/delete con el metodo GET para poder realizar el borrado de un dato.
    - Usa la const product = await Product.findByIdAndDelete(req.params._id); para elimiar el dato.

- Octavo (mostrar los productos por categoría) has de crear un navegador donde deberás los productos por la categoría seleccionada puedes utilizar las funciones creadas para el Dashboard
    - Utiliza la función router.get('/dashboard/:category/category') donde la categoria sea el producto.

- Noveno (login usuario) has de crear un login para acceder a las rutas del DashBoard, estas rutas se encuentran protegias por express-session.

# Creación de rutas User
En este punto se crean las rutas que podrán visualizar los usuarios.
- Ruta principal ('/') muestra un producto de la categoría. Puedes usar la configuración de la ruta /dashboard
    - Crear un boton para mostrar un producto como ejemplo.
- Ruta productos ('/products') muestra todos los productos ordenados por categoría.
- Ruta productos por categoria ('/products/:category/category') muestra los productos por cada una de las categorías.
- Ruta producto ('/products/:_id') muestra el producto seleccionado.

# Creación de middleware para la autenticación de los usuarios
- Debes crear una contraseña dentro del .env y requerirla para poder acceder a las rutas del Dashboard
    Ejemplo:
        app.get('/products/login', authController.form);
        app.get('/products/login/user',middlewares.verificarSesionMiddleware,authController.verifyUser);
        app.post('/products/login/user', middlewares.validarPalabraMiddleware,authController.redirectDashBoard);
        app.post('/', authController.destroySesion);

- En el middleware Crea:
    - El modelo donde se chequeará el password, nota se puede ampliar el modelo incluyendo un usuario que se concatene con dicho acceso para mejorar las seguridad.
        const setupAPP = (app) => {
            app.use(bodyParser.urlencoded({ extended: true }));
            app.use(session({
                secret: 'secretoSuperSecreto',
                resave: false,
                saveUninitialized: true,
            }));
        };
    
    - Crea tambien la verificación de la sesion
    const verificarSesionMiddleware = (req, res, next) => {
        if (req.session.PASS) {
            next();
        } else {
            res.redirect('/products/login?error=2');
        }
    };

    - Por último crea la validación de la palabra clave.
        const validarPalabraMiddleware = (req, res, next) => {
            const palabraCorrecta = process.env.PASS || '';
                if (req.body.palabra === palabraCorrecta) {
                    req.session.palabraSecreta = req.body.palabra;
                    next();
                } else {
                    res.redirect('/products/login?error=1');
            }
        };
    
    - Finalmente utiliza los templates para poder mejorar la visualización de los datos.

# Protección de las rutas Dashboard
- Para proteger las rutas has de requerir el middleware.
    NOTA IMPORTANTE: el middleware, siempre debe quedar por detrás de los datos adquiridos por el Controlador de producto si quieres que tu aplicación acceda a la información.

    Ejemplo: router.post('/dashboard', middlewares.verificarSesionMiddleware, ProductController.createProduct);//Post para crear en Mongo DB

