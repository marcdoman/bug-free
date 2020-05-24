const db = require('../database/models');
const op = db.Sequelize.Op;

let detallePeliculaCont = {
   index: (req, res) => {
        db.Resena
        .findAll()  
        //o findByPk?
        .catch(error => {
            res.send(error);
        })
   },
    detalle: function (req, res) {
        res.render('detallePelicula');
        //que mas agregar al res.render?
    },
    // addResena: function(req, res){
    //     //codigo?
    //     //validar aca?
    //     .then(resultado =>{
    //         if(resultado != undefined){
    //             //codigo
    //         } else{
    //             //codigo
    //         }
    //     })
    // }

}
   
   module.exports = detallePeliculaCont; 
