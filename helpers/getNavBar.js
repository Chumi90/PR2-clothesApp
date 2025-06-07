//Navigation Bars

function navigationBarhtmlDashboard(product){
    let varNavigate = '';
    const initVar=`
        <nav id="navVar" class="navVar">
        <ul>
        <a href="/dashboard">
            <li class="navVar">Home</li>
        </a>
            `
    const finalNavigate=`
        <a href="/">
            <li class="navVar">Salir</li>
        </a>
        </ul>
        </nav>
    `
    for (let category of product) {
        varNavigate +=`
            <a href="/dashboard/${category}/category">
            <li class="navVar" value="${category}">${category}</li>
            </a>
        `
    }
    return initVar+varNavigate+finalNavigate;
}

function navigationBarhtmlUser(product){
    let varNavigate = '';
    const initVar=`
        <nav id="navVar" class="navVar">
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
        let ruta=`/products/${category}/category`;
        varNavigate +=`
            <a href="${ruta}">
            <li class="navVar" value="${category}">${category}</li>
            </a>
        `
    }
    return initVar+varNavigate+finalNavigate;
}
module.exports={navigationBarhtmlUser,navigationBarhtmlDashboard};