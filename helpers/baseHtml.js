//HTML principal base

const baseHTML =`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DashBoard</title>
        </head>
        <body style="font-family: Arial; padding: 15px">`
            
const finalHTML=`
        </body>
        </html>
        `;
    
const formNewProduct=`
        <h1>Introduzca producto</h1>

        <form action="/dashboard?_method=PUT" method="post">
            <ul>
                <li>
                    <label for="name">Producto: </label>
                    <input type="text" id="nameProduct" name="product" required/>
                </li>
                <li>
                    <label for="description">Descripción del producto: </label>
                    <input type="text" id="descriptionProduct" name="description" required/>
                </li>
                <li>
                    <label for="image">Introduce la URL de la imagen</label>
                    <input type="text" id="imageURL" name="image" required>
                </li>
                <li>
                    <label for="category">Introduce la categoría del producto: </label>
                    <input type="text" id="productoList" name="category" required>
                </li>
                <li>
                    <label for="sizeClothes">Introduce talla: </label>
                    <select name="size" id="sizeClothes">
                        <option value="">--Please choose a size--</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                </li>
                <li>
                    <label for="price">Introduce el precio del producto: </label>
                    <input type="text" id="productoList" name="price" required>
                </li>
            </ul>
            <button type="submit">Agregar prenda</button>
            </form>
            <a href="/dashboard">
                <button>Ver todos los productos</button>
            </a>
    `;

const viewCreatedProduct=` 
    <h1>Introduzca producto</h1>
    `
const buttonBackCreate=`
    <a href="/dashboard/new">
        <button type="submit">Crear nuevo producto</button>
    </a>
    <a href="/dashboard">
        <button>Ver todos los productos</button>
    </a> 
`;

const buttonBack=`
    <div>
    <div style=" display: flex; justify-content: center;">
    <a href="/dashboard/new" >
        <button type="submit" style="border: none; text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">Crear nuevo producto</button>
    </a>
    <a href="/dashboard">
        <button type="submit" style="border: none; text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">Actualizar productos</button>
    </a>
    </div>
    </div>
`;
const buttonBackhome=`
    <div>
    <div style=" display: flex; justify-content: center;">
        <a href="/dashboard/new">
            <button type="submit" style="border: none; text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">Crear nuevo producto</button>
        </a>
        <a href="/dashboard">
            <button type="submit" style="border: none; text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">Volver al dashboard</button>
        </a>
    </div>
    </div>
`;

const baseHTMLProducts =`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Products</title>
        </head>
         <body style="font-family: Arial; padding: 15px">
         `;

/*____________________Blockeo de accesos____________________*/
const baseHTMLLogin=`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login User</title>
        </head>
         <body style="font-family: Arial; padding: 15px">
         <body style="font-family: Arial; padding: 15px">
                <h1>Login Usuario</h1>
    `;

const formLoginAdministrator=`
    <form method="post" action="/products/login/user">
        <label for="palabra">Introduce contraseña:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Entrar</button>
    </form>
    <form method="post" action="/">
        <button type="submit">Salir</button>
    </form>
    `;

const loginVerify=`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/">
        <button type="submit">Log Out</button>
    </form>
    `

module.exports={baseHTML,finalHTML,
    formNewProduct,viewCreatedProduct,buttonBackCreate,
    buttonBack,buttonBackhome,
    baseHTMLProducts,
    baseHTMLLogin,formLoginAdministrator,loginVerify};