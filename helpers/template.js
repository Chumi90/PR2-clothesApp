//Templates for the interface
//
const {navigationBarhtmlUser,navigationBarhtmlDashboard}=require('../helpers/getNavBar.js');

//Show the product created
function showProductCreated(recibedProducts) {
  let html = '';
    html += `

      <div class="product-card" style="background-color: rgba(212, 205, 205, 0.637);  width: 160px; margin-left: 5px;border-radius: 5px;display: flex; flex-direction: row;">
        <div class="product-card" style="margin-left: 5px">
          <h2>${recibedProducts.category}</h2>
            <img src="${recibedProducts.image}" alt="${recibedProducts.product}" width="150">
            <h2>Producto: ${recibedProducts.product}</h2>
            <h3>Descripción: </h3>
            <p>${recibedProducts.description}</p>
            <p>Talla: ${recibedProducts.size}</p>
            <p>Precio: ${recibedProducts.price} €</p>
        </div>
      </div>
    `;
  return html;
}
//Show a all product created
function getProductCards(recibedProducts) {
  const html1 = '<div class="product-card" style="display: flex; justify-content: center;flex-wrap: wrap; width: 100%;" >';
  const html2='</div>'
  let html='';
  for (let recibedProduct of recibedProducts) {
    html += `
      <div class="product-card" style="background-color: rgba(212, 205, 205, 0.637);  width: 160px; margin-left: 5px;border-radius: 5px; display: flex; flex-direction: row;">
        <div class="product-card" style="margin-left: 5px">
          <h2>${recibedProduct.category}</h2>
            <img src="${recibedProduct.image}" alt="${recibedProduct.product}" width="150">
            <br>
            <a href="/dashboard/${recibedProduct._id}">
              <button type="submit">Ver producto</button>
            </a>
        </div>
      </div>
    `;
  }
  return html1+html+html2;
}

function getProductCard(recibedProducts) {
  const html1 = '<div class="product-card" style="display: flex; justify-content: center;flex-wrap: wrap; width: 100%;" >';
  const html2='</div>'
  let html = '';
    html += `
      <div class="product-card" style="background-color: rgba(212, 205, 205, 0.637);  width: 160px; margin-left: 5px;border-radius: 5px; display: flex; flex-direction: row;">
        <div class="product-card" style="margin-left: 5px">
          <h2>${recibedProducts.category}</h2>
            <img src="${recibedProducts.image}" alt="${recibedProducts.product}" width="150">
            <h2>Producto: ${recibedProducts.product}</h2>
            <h3>Descripción: </h3>
            <p>${recibedProducts.description}</p>
            <p>Talla: ${recibedProducts.size}</p>
            <p>Precio: ${recibedProducts.price} €</p>
        </div>
      </div>
      <a href="/dashboard/${recibedProducts._id}/edit">
        <button type="submit">Editar producto</button>
      </a>
    `;
  return html1+html+html2;
}

function formEditProduct(recibedProduct){
    return `
        <h1>Editar producto</h1>

        <form action="/dashboard/${recibedProduct._id}/edit?_method=UPDATE" method="post">
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
                        <option value="${String(recibedProduct.size)}">${String(recibedProduct.size)}</option>
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
                    <input type="text" value="${parseFloat(recibedProduct.price)}" id="productoList" name="price" required>
                </li>
            </ul>
            <button type="submit">Modificar prenda</button>
            </form>
            <a href="/dashboard">
                <button>Ver todos los productos</button>
            </a>
            <a href="/dashboard/${recibedProduct._id}/delete?_method=DELETE">
                <button>Eliminar Producto</button>
            </a>
    `}

/*_______________________________________Client________________________________________________ */
function getProductCardsClient(recibedProducts) {
  let html = '';
  const html1 = '<div class="product-card" style="display: flex; justify-content: center;flex-wrap: wrap; width: 100%;" >';
  const html2='</div>'
  for (let recibedProduct of recibedProducts) {
    html += `
      <div class="product-card" style="background-color: rgba(212, 205, 205, 0.637);  width: 160px; margin-left: 5px;border-radius: 5px; display: flex; flex-direction: row;">
        <div class="product-card" style="margin-left: 5px">
          <h2>${recibedProduct.category}</h2>
            <img src="${recibedProduct.image}" alt="${recibedProduct.product}" width="150">
            <br>
            <a href="/products/${recibedProduct._id}">
              <button type="submit">Ver producto</button>
            </a>
        </div>
      </div>
    `;
  }
  return html1+html+html2;
}

function getProductCardClient(recibedProducts) {
  let html = '';
  const html1 = '<div class="product-card" style="display: flex; justify-content: center;flex-wrap: wrap; width: 100%;" >';
  const html2='</div>'
    html += `
      <div class="product-card"  style="background-color: rgba(212, 205, 205, 0.637);  width: 160px; margin-left: 5px; border-radius: 5px; display: flex; jflex-direction: row;">
        <div class="product-card" style="margin-left: 5px">
          <h2>${recibedProducts.category}</h2>
            <img src="${recibedProducts.image}" alt="${recibedProducts.product}" width="150">
            <h2>Producto: ${recibedProducts.product}</h2>
            <h3>Descripción: </h3>
            <p>${recibedProducts.description}</p>
            <p>Talla: ${recibedProducts.size}</p>
            <p>Precio: ${recibedProducts.price} €</p>
        </div>
      </div>
    `;
  return html1+html+html2;
}

//Navigation Bar for Category User
function navigationBarUser (recibedProducts){
  if(!recibedProducts){
  }else{
  unicProducts= [...new Set(recibedProducts.map(objeto => objeto.category))];
  }
  return navigationBarhtmlUser(unicProducts);
}

//Navigation Bar for Category Dasboard
function navigationBarDashboard (recibedProducts){
  if(!recibedProducts){
  }else{
  unicProducts= [...new Set(recibedProducts.map(objeto => objeto.category))];
  }
  return navigationBarhtmlDashboard(unicProducts);
}

//Trae un solo producto de cada Categoría
function oneProductObject(category,data){
  let oneCategory=[];
  let limitCategory=0;
  for (let i=0;i<category.length;i++){
    for (let x=0;x<data.length;x++){
      if(category[i]==data[x].category){
        if (limitCategory==0){
          oneCategory.push(data[x]);
          limitCategory=1;
        }
      }
    }
    limitCategory=0;
  }
  return oneCategory;
}

module.exports={showProductCreated,getProductCards,getProductCard,formEditProduct,getProductCardsClient,getProductCardClient,navigationBarUser,oneProductObject,navigationBarDashboard}