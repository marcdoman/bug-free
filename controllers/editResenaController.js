const db = require('../database/models');
const op = db.Sequelize.Op;

let funcion = {
    // esto va o solo en misResenasController:?
        // misResenas: function (req, res) {
        //    res.render('misResenas');
//    },
   editar: function (req, res) {
       db.Resena.findByPk() 
       .then(resultado =>{
            // no --> res.render('detallePelicula', {pelicula_id: req.query.pelicula_id, error: req.params.error});
       })
        // aca tiene que recuperar los datos 
        // resena/editar/id de resena
    //    aca recuperar y ver que datos nuevos queres meter
        // put

   },
   confirmarEdit: function (req, res) {
//        db.Resena.update
               //aca no? solo esto?
               //asi ya esta updated?

//@para despues --> 
//         validar que usuario exista: (en que cambia al formulario below?)
//         Usuario.validate(req.body.email, req.body.password){
//             .then(resultado =>{
//                 if(resultado != undefined){
//                     const resena = {
//                         pelicula_id: req.query.pelicula_id,
//                         usuario_id: resultado.usuario_id,
//                         //en esos que va?
//                         resena: req.body.resena,
//                         puntaje: req.body.puntaje
//                     }
//                     db.Resena.create(resena)
//             // en el objeto, que tambien tenga fecha_act --> aca pones a mano la fecha actual (en seuelize hay forma de poner el now)
//             } else {
//                 res.redirect('/registro')
                    //aca el db.Resena.update?
//                 //si?
//             }
//         })
//     }

//@fin de para despues

   }
}

module.exports = funcion; 
   


