const db = require('../database/models');
const op = db.Sequelize.Op;



let funcion = {

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