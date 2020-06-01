<<<<<<< HEAD
const db = require('../database/models');
const op = db.Sequelize.Op;
// const login = require(...)
//above para create --> cuando marc haya creado el login
=======
//const db = require('../database/models');
//const op = db.Sequelize.Op;
>>>>>>> 8cda1184c31e12ea9414fc1b40f2ecc1d354bd63


let funcion = {
//     Detalle de una pelicula
<<<<<<< HEAD
    detalle: function (req, res) {
        //obtener el id que tengo en el navegador 

    //tambein enviar todas las resenas que encuentre de la pelicula con la query q estoy capturando id
    //find all 

        res.render('detallePelicula', {
            id_pelicula: req.query.id,
            // listado de todos los reiews
        });
    }
=======
    crearResena: function (req, res) {
        res.render('detallePelicula');
    },
    guardarResena: function (req, res) {
        res.render('detallePelicula');
    },
>>>>>>> 8cda1184c31e12ea9414fc1b40f2ecc1d354bd63
}
   
module.exports = funcion; 