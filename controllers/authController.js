//Authentication Controller

const BaseHtml=require('../helpers/baseHtml.js');

const authCotroller = {
    form (req, res) {
        const mensajeError = req.query.error
        ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.'): '';
        if (req.session.palabraSecreta) {
            return res.redirect('/dashboard');
        }
        res.send(`
            <html>
                <body>
                <h1>Página de Inicio</h1>
                <p>${mensajeError}</p>
                <form method="post" action="/products/login/user">
                    <label for="palabra">Introduce la palabra:</label>
                    <input type="text" name="palabra" required>
                    <button type="submit">Entrar</button>
                </form>
                <form method="post" action="/">
                    <button type="submit">Salir</button>
                </form>
                </body>
            </html>
            `);
    },

    verifyUser (req, res) {
        res.send(`
            <h1>Ruta del Perfil (Sesión activa)</h1>
            <form method="post" action="/logout">
                <button type="submit">Log Out</button>
            </form>
        `);
    },

    redirectDashBoard (req, res) {
        res.redirect('/dashboard');
    },

    destroySesion (req, res) {
        req.session.destroy((err) => {
          if (err) {
            console.error('Error al cerrar sesión:', err);
          }
          res.redirect('/');
        });
      }

}

module.exports = authCotroller;