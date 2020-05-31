const db = require('../database/models');
const op = db.Sequelize.Op;

let funcion = {
        //va esto?: 
    // misResenas: function (req, res) {
    //    res.render('misResenas');
//    },
   delete: function (req, res) {
       db.Resena.destroy()
        // esto aca o en borrarResena??
    //   esto?
   }


//update cambios? 
}

module.exports = funcion; 
   


