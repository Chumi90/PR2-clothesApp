//Templates for the interface

const formNewProduct=`
        <h1>Introduzca producto</h1>
        <form action="/createProduct" method="post">
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
    `

module.exports={formNewProduct};