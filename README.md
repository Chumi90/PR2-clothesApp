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
- npm install axios

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

# Creación de rutas
En este punto tendremos que realizar la creación de rutas para poder realizar modificaciones dentro de la base de datos.
- Primero has de crear la ruta /dashboard/new , dentro de esta ruta tendrás que utilizar el método GET tendrás el formulario para crear un producto.
    - Crea 2 botones
        - Primer botón, te devolverá a la ruta /dashboard con metodo POST para que crees un nuevo producto.
        - Segundo botón, te devolverá a la ruta /showProducts para que puedas ver todos los productos.

- Segundo has de crear la ruta /dashboard , dentro de esta ruta se enviará por el método POST para enviar los datos a la BBDD.

- Tercero has de crear la ruta /dashboard/created , donde devolverás el producto creado.
    - Crea 2 botones
        - Primer botón, te devolverá a la ruta /dashboard/new con metodo GET  para que crees un nuevo producto.
        - Segundo botón, te devolverá a la ruta /dashboard con metodo GET para que puedas ver todos los productos.
        - Nota: aprovecha los datos obtenidos para no hacer solicitudes a la bd de Mongo Atlass (las solicitudes cuestan dinero).

- Cuarto has de crear la ruta /products , dentro de esta ruta se devolverán todos los productos creados.
    - Crea 2 botones
        - Primer botón, te devolverá a la ruta /dashboard/new con metodo GET para que crees un nuevo producto.
        - Segundo botón, te devolverá a la ruta /dashboard con metodo GET para actualizar los productos.

- Quinto has de crear la ruta /dashboard/:_id/edit: con el metodo GET para que te devuelva el formulario y editar el producto
    Nota: tienes que crear el metodo  [Method Override](https://www.npmjs.com/package/method-override)
    - Primero instala las dependecias de Override npm install method-override
    - Segundo debes requerir en index.js
    - Tercero usa dentro del index.js app.use(methodOverride('X-HTTP-Method-Override')) para actualizar y borrar la información.
    - Quinto crea las rutas get y post para obtener los datos y enviar las actualizaciones realizadas a la Base de datos de Mongo DB.

- Sexto has de crear la ruta /dashboard/:_id/delete con el metodo GET para poder realizar el borrado de un dato.
    - Usa la const product = await Product.findByIdAndDelete(req.params._id); para elimiar el dato.

- Septimo has de crear la página principal donde deberás obtener todos los productos puedes utilizar las funciones creadas para el Dashboard
- Octavo has de crear la página principal donde deberás obtener el producto seleccionado puedes utilizar las funciones creadas para el Dashboard
