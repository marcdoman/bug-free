const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require('../modulo-login');



let funcion = {

    resenasExistentes: function (req,res) {
        db.Resenas.findAll({
            where: {
                pelicula_id: req.query.id
            }
        })
        .then (function(texto_resena){
            res.render ('detallePelicula',{
                pelicula_id: req.query.id,
                resena: texto_resena,
            })
        })
    },


   // crearResena: function (req, res) {
   //     db.Resenas
   //     .findAll()
   //     .then(function(resenas){
   //         return res.render('detallePelicula');
   //     })
   // },



    guardarResena: function (req, res) {
        moduloLogin.validar(req.body.email,req.body.password)
        .then (function (usuario){
          if(usuario != undefined) {
            db.Resenas.create({
                pelicula_id: req.body.idPeli,
                usuario_id: usuario.id,
                texto_resena: req.body.texto_resena,
                puntaje: req.body.puntaje,
          })
          .then(function(parametro){
            res.redirect("/");
        })
        } else {
            res.redirect("/registracion");
        }
        
        
        
    })
}
}


   
module.exports = funcion; 