const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require('../modulo-login');
let bcrypt = require('bcryptjs');

let funcion = {

    logIn: function (req, res) {
        res.render('logIn');
    },

    confirmarUsuario: function (req, res) {

        moduloLogin.validar(req.body.email, req.body.password)
            .then(result =>{
                if(result == undefined){
                    res.redirect('/');

            } else {
                res.redirect("/misResenas/" + result.id);
             
            }
        })
    }
};
   
module.exports = funcion; 

