//Authentication Controller

const BaseHtml=require('../helpers/baseHtml.js');

const authCotroller = {
    form (req, res) {
        const mensajeError = req.query.error
        ? (req.query.error === '1' ? 'Contraseña incorrecta.' : 'No estás logado.'): '';
        if (req.session.palabraSecreta) {
          return res.redirect('/products/login/user');   
        }
        res.send(BaseHtml.baseHTMLLogin+`<p>${mensajeError}</p>`+BaseHtml.formLoginAdministrator+BaseHtml.finalHTML);
    },

    verifyUser (req, res) {
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