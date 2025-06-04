//Templates for the interface

//Show a new product created
function NewProductShow(productCreate) {
    return`
        <div class="product-card">
          <h2>${productCreate.category}</h2>
          <img src="${productCreate.image}" alt="${productCreate.product}" width="200">
          <h2>Producto: ${productCreate.product}<h2>
          <h3>Descripción: </h3>
          <p>${productCreate.description}</p>
          <p>Talla: ${recibedProducts.size}</p>
          <p>Precio: ${productCreate.price} €</p>
        </div>
      `
}

//Show a all product created
function getProductCards(recibedProducts) {
  let html = '';
  for (let recibedProduct of recibedProducts) {
    html += `
      <div class="product-card">
        <h2>${recibedProduct.category}</h2>
          <img src="${recibedProduct.image}" alt="${recibedProduct.product}" width="200">
          <br>
          <a href="/dashboard/${recibedProduct._id}">
            <button type="submit">Ver producto</button>
          </a>
      </div>
    `;
  }
  return html;
}

function getProductCard(recibedProducts) {
  let html = '';
    html += `
      <div class="product-card">
        <h2>${recibedProducts.category}</h2>
          <img src="${recibedProducts.image}" alt="${recibedProducts.product}" width="200">
          <h2>Producto: ${recibedProducts.product}</h2>
          <h3>Descripción: </h3>
          <p>${recibedProducts.description}</p>
          <p>Talla: ${recibedProducts.size}</p>
          <p>Precio: ${recibedProducts.price} €</p>
      </div>
      <a href="/dashboard/${recibedProducts._id}/edit">
        <button type="submit">Editar producto</button>
      </a>
    `;
  return html;
}

function formEditProduct(recibedProduct){
    return `
        <h1>Editar producto</h1>

        <form action="/dashboard/${recibedProduct._id}/edit" method="post">
            <ul>
                <li>
                    <label for="name">Producto: </label>
                    <input type="text" value="${String(recibedProduct.product)}" id="nameProduct" name="product" required/>
                </li>
                <li>
                    <label for="description">Descripción del producto: </label>
                    <input type="text" value="${String(recibedProduct.description)}" id="descriptionProduct" name="description" required/>
                </li>
                <li>
                    <label for="image">Introduce la URL de la imagen</label>
                    <input type="text" value="${String(recibedProduct.image)}" id="imageURL" name="image" required>
                </li>
                <li>
                    <label for="category">Introduce la categoría del producto: </label>
                    <input type="text" value="${String(recibedProduct.category)}" id="productoList" name="category" required>
                </li>
                <li>
                    <label for="sizeClothes">Introduce talla: </label>
                    <select name="size" id="sizeClothes">
                        <option value="">${String(recibedProduct.size)}</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </li>
                <li>
                    <label for="price">Introduce el precio del producto: </label>
                    <input type="text" value="${parseFloat(recibedProduct.price)}" id="productoList" name="price" required>
                </li>
            </ul>
            <button type="submit">Modificar prenda</button>
            </form>
            <a href="/dashboard">
                <button>Ver todos los productos</button>
            </a>
            <a href="/dashboard/${recibedProduct._id}/delete">
                <button>Eliminar Producto</button>
            </a>
    `}


function getProductCardsClient(recibedProducts) {
  let html = '';
  for (let recibedProduct of recibedProducts) {
    html += `
      <div class="product-card">
        <h2>${recibedProduct.category}</h2>
          <img src="${recibedProduct.image}" alt="${recibedProduct.product}" width="200">
          <br>
          <a href="/products/${recibedProduct._id}">
            <button type="submit">Ver producto</button>
          </a>
      </div>
    `;
  }
  return html;
}

function getProductCardClient(recibedProducts) {
  let html = '';
    html += `
      <div class="product-card">
        <h2>${recibedProducts.category}</h2>
          <img src="${recibedProducts.image}" alt="${recibedProducts.product}" width="200">
          <h2>Producto: ${recibedProducts.product}</h2>
          <h3>Descripción: </h3>
          <p>${recibedProducts.description}</p>
          <p>Talla: ${recibedProducts.size}</p>
          <p>Precio: ${recibedProducts.price} €</p>
      </div>
      <a href="/products">
        <button type="submit">Volver a los productos</button>
      </a>
    `;
  return html;
}
module.exports={NewProductShow,getProductCards,getProductCard,formEditProduct,getProductCardsClient,getProductCardClient}