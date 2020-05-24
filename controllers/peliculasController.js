const db = require('../database/models');
const op = db.Sequelize.Op;

let funcion = {
    // Detalle de una película
    detalle: function (req, res) {
        res.render('detallePelicula');
    }

}
   
   module.exports = funcion; 

//aca nm --> 

// const detalleController = {
//     findByPk: function (req, res){
//         db.Resena.findAll({
//             where: {pelicula_id: req.query.idPelicula},
//             include: {association: 'usuario'}
//         })
//         .then(resultados => {
//             res.render('detalle', {dato: req.query.idPelicula, resenas: resultados, error: req.params.error});
//         })
//     },

//     agregarResena: function (req, res){
//         moduloLogin.validar(req.body.email, req.body.password)
//         .then (resultado =>{
//             if(resultado != undefined){
//                 let review = {
//                     pelicula_id: req.params.id,
//                     usario_id: resultado.id,
//                     resena: req.body.resena,
//                     puntaje: req.body.puntaje
//                 }
//                 //un poco mas
//             }else{
//                 //codigo
//             }
//         })
//     }
// }