const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require('../modulo-login');
let bcrypt = require('bcryptjs');

let funcion = {
    // Resultados de la búsqueda
  //si es usuarios --> registro (guardar el usuario nuevo)
//lo demas que vaya necesitando //ex: metodo de traer imagen del usuario  


    registro: function (req, res) {
        
    },
    logIn: function (req, res) {
        res.render('logIn');
    },

    confirmarUsuario: function (req, res) {
        //validacion de usuario:
        Usuario.validate(req.body.email, req.body.password)
            .then(resultado =>{
                if(resultado == undefined){
                    backURL=req.header('Referer') || '/';
                    res.redirect(backURL);

            } else {
                res.redirect("/misResenas");
             
            }
        })
    }
};
   
module.exports = funcion; 

// solo para tener:
        //validar que usuario exista: (en que cambia al formulario below?)
        // Usuario.validate(req.body.email, req.body.password){
    //         .then(resultado =>{
    //             if(resultado != undefined){
    //                 const resena = {
    //                     pelicula_id: req.query.pelicula_id,
    //                     usuario_id: resultado.usuario_id,
    //                     //en esos que va?
    //                     resena: req.body.resena,
    //                     puntaje: req.body.puntaje
    //                 }
    //                 db.Resena.create(resena)
    //         // en el objeto, que tambien tenga fecha_act --> aca pones a mano la fecha actual (en seuelize hay forma de poner el now)
    //         } else {
    //             res.redirect('/registro')
    //             //si?
    //         }
    //     })
    // }
    //todo esto en loginController