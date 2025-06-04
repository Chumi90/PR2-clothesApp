//HTML principal base

const baseHTML =`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DashBoard</title>
        </head>
        <body>`
            
const finalHTML=`

        </body>
        </html>`
    
const formNewProduct=`
        <h1>Introduzca producto</h1>

        <form action="/dashboard" method="post">
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
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                        <option value="xxl">XXL</option>
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
    `
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
    
`
const buttonBack=`
    <a href="/dashboard/new">
        <button type="submit">Crear nuevo producto</button>
    </a>
    <a href="/dashboard">
        <button>Actualizar productos</button>
    </a>
    
`
const buttonBackhome=`
    <a href="/dashboard/new">
        <button type="submit">Crear nuevo producto</button>
    </a>
    <a href="/dashboard">
        <button>Volver al dashboard</button>
    </a>
`

module.exports={baseHTML,finalHTML,formNewProduct,viewCreatedProduct,buttonBackCreate,buttonBack,buttonBackhome};