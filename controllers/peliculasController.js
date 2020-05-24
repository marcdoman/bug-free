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
    // create: function(req, res){
    //     //codigo?
    //     //donde uso create?, en ejs?
    //     //validar aca? como?
    //     function validate (){
    //         if(){
    //             //codigo
    //         } else {
    //             alert("validation failed")
    //             res.redirect('/registro')
                //este redirect esta bien?
    //         }
    //     }
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


   //o mas tipo?:
//    db.Resena.create()