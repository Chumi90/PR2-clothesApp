//Navigation Bars

function navigationBarhtmlUser(product){
    let varNavigate = '';
    const initVar=`
        <nav class="navVar">
        <ul>
        <a href="/">
            <li class="navVar">Home</li>
        </a>
            `
    const finalNavigate=`
        <a href="/products">
            <li class="navVar">Todos los productos</li>
        </a>
        <a href="/products/login">
            <li class="navVar">Login</li>
        </a>
        </ul>
        </nav>
    `
    for (let category of product) {
        varNavigate +=`
            <a href="/products/${category}">
            <li class="navVar">${category}</li>
            </a>
        `
    }
    return initVar+varNavigate+finalNavigate;
}

module.exports={navigationBarhtmlUser};