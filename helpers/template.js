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
          <img src="${recibedProduct.image}" alt="${recibedProduct.product}">
          <h3>${recibedProduct.product}</h3>
          <p>${recibedProduct.description}</p>
          <p>${recibedProduct.price} €</p>
      </div>
    `;
  }
  return html;
}

module.exports={NewProductShow,getProductCards}