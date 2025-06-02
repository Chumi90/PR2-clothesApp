//Templates for the interface

//Show a new product created
function NewProductShow(productCreate) {
    return`
        <div class="product-card">
          <h2>${productCreate.category}</h2>
          <img src="${productCreate.image}" alt="${productCreate.product}">
          <h3>${productCreate.product}</h3>
          <p>${productCreate.description}</p>
          <p>${productCreate.price} €</p>
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
  console.log('estas aquí')
  let html = '';
    html += `
      <div class="product-card">
        <h2>${recibedProducts.category}</h2>
          <img src="${recibedProducts.image}" alt="${recibedProducts.product}" width="200">
          <h3>Tipo: ${recibedProducts.product}</h3>
          <p>Desccripción: ${recibedProducts.description}</p>
          <p>Talla: ${recibedProducts.size}</p>
          <p>Precio: ${recibedProducts.price} €</p>
      </div>
    `;
  return html;
}

module.exports={NewProductShow,getProductCards,getProductCard}