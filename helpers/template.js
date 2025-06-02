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
          <a href="/dashboard/${recibedProduct._id}">
            <button type="submit">Ver producto</button>
          </a>
      </div>
    `;
  }
  return html;
}

//Show a all product created
function getProductCards(recibedProducts) {
  console.log(recibedProducts.id);
  let html = '';
  for (let recibedProduct of recibedProducts) {
    html += `
      <div class="product-card">
        <h2>${recibedProduct.category}</h2>
          <img src="${recibedProduct.image}" alt="${recibedProduct.product}" width="200">
          <h3>${recibedProduct.product}</h3>
          <p>${recibedProduct.description}</p>
          <p>${recibedProduct.price} €</p>
          <a href="/dashboard/${recibedProduct._id}">
            <button type="submit">Ver producto</button>
          </a>
      </div>
    `;
  }
  return html;
}

//Show a all product created
function getProductCards(recibedProducts) {
  let html = '';
  for (let recibedProduct of recibedProducts) {
    html += `
      <div class="product-card">
        <h2>${recibedProduct.category}</h2>
          <img src="${recibedProduct.image}" alt="${recibedProduct.product}" width="200">
          <h3>${recibedProduct.product}</h3>
          <p>${recibedProduct.description}</p>
          <p>${recibedProduct.price} €</p>
          <a href="/dashboard/${recibedProduct._id}">
            <button type="submit">Ver producto</button>
          </a>
      </div>
    `;

  }
    
  return html;
}

module.exports={NewProductShow,getProductCards}