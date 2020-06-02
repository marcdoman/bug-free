const db = require('../database/models');
const op = db.Sequelize.Op;



let funcion = {

    resenasExistentes: function (req,res) {
        db.Resenas.findAll({
            where: {
                pelicula_id: req.query.pelicula_id
            }
        })
        .then (function(texto_resena){
            res.render ('detallePelicula',{
                pelicula_id: req.query.pelicula_id,
                resena: texto_resena,
            })
        })
    },


    crearResena: function (req, res) {
        db.Resenas
        .findAll()
        .then(function(resenas){
            return res.render('detallePelicula');
        })
    },


    guardarResena: function (req, res) {
        res.render('detallePelicula',{
            pelicula_id: req.query.id,
            texto_resena: req.body.texto_resena,
            puntaje: req.body.puntaje,
            
        });
    },

}
   
module.exports = funcion; 