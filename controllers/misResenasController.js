const db = require('../database/models');
const op = db.Sequelize.Op;

let funcion = {
    // mis resenas del sitio web
    misResenas: function (req, res) {
        res.render('misResenas');
    },
    delete: function (req, res) {
        db.Resena.destroy()
        //bien?
    },
    editar: function (req, res) {
        db.Resena.findByPk() 
        .then(resultado =>{
            // no --> res.render('detallePelicula', {pelicula_id: req.query.pelicula_id, error: req.params.error});
        })
        //aca tiene que recuperar los datos 
        //resena/editar/id de resena
       //aca recuperar y ver que datos nuevos queres meter
        //put
       // db.Resena.update()
    //    bien?
    },
    confirmarEdit: function (req, res) {
        db.Resena.update
        //aca se mandan los datos editados
        //validar que usuario exista

    //post
    }
}
   
module.exports = funcion; 

//en 2) validar que usuario exista, etc. 