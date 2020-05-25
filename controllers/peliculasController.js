const db = require('../database/models');
const op = db.Sequelize.Op;

let detallePeliculaCont = {
   index: function (req, res) {
        db.Resena.findAll({
            include: [{association: 'usuarios'}]
        })
        .then(resultado =>{
            res.render('detallePelicula', {info: req.query.pelicula_id, listaResenas: resultado, error: req.params.error});
        })
        .catch(error => {
            res.send(error);
        })
   },
    
    create: function(req, res){
    //     login.validate(req.body.email, req.body.password){
    //         .then(resultado =>{
    //             if(resultado != undefined){
    //                 const resena = {
    //                     pelicula_id: ,
    //                     usuario_id: ,
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
    }
}
   
   module.exports = detallePeliculaCont; 

