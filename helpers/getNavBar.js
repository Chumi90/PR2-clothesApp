//Navigation Bars

/*___________________________DashBoard___________________________________________ */
function navigationBarhtmlDashboard(product){
    let varNavigate = '';
    const initVar=`
        <nav id="navVar" class="navVar" style="list-style: none">
        <ul style="list-style-type: none; display: flex; justify-content: center; flex-wrap: wrap; width: 100%;">
        <a href="/dashboard" style="text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <li class="navVar">Home</li>
        </a>
            `
    const finalNavigate=`
        <form action="/" method="post" style="text-decoration: none; margin: 5px; width: 100%; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <button type="submit" style="width: 100%; background-color: rgba(0, 0, 255, 0.973); border: none; border-radius: 5px; postition: relative; cursor: pointer;">Salir</button>
        </form>
        
        </ul>
        </nav>
    `

    for (let category of product) {
        varNavigate +=`
            <a href="/dashboard/${category}/category" style="text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <li class="navVar" value="${category}">${category}</li>
            </a>
        `
    }
    return initVar+varNavigate+finalNavigate;
}


/*___________________________Users___________________________________________ */
function navigationBarhtmlUser(product){
    let varNavigate = '';
    const initVar=`
        <nav id="navVar" class="navVar">
        <ul style="list-style-type: none; display: flex; justify-content: center;flex-wrap: wrap; width: 100%;">
        <a href="/" style="text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <li class="navVar" style="width: 100%; text-align: center;">Home</li>
        </a>
            `
    const finalNavigate=`
        <a href="/products" style="text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <li class="navVar" style="width: 100%; text-align: center;">Todos los productos</li>
        </a>
        <a href="/products/login" style="text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <li class="navVar" style="width: 100%; text-align: center;">Login</li>
        </a>
        </ul>
        </nav>
    `
    for (let category of product) {
        let ruta=`/products/${category}/category`;
        varNavigate +=`
            <a href="${ruta}" style="text-decoration: none; margin: 5px; background-color: rgba(0, 0, 255, 0.973); width: 120px; border-radius: 5px;">
            <li class="navVar" value="${category}" style="width: 100%; text-align: center;">${category}</li>
            </a>
        `
    }
    return initVar+varNavigate+finalNavigate;
}
module.exports={navigationBarhtmlUser,navigationBarhtmlDashboard};