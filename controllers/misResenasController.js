let funcion = {
    // mis resenas del sitio web
    misResenas: function (req, res) {
        res.render('misResenas');
    },
    delete: function (req, res) {
        //db.Resena.destroy()
        //bien?
    },
    editar: function (req, res) {
       //findbyPk en editar
       //resena/editar/id de resena
       //aca recuperar y ver que datos nuevos queres meter
        //put
       // db.Resena.update()
    //    bien?
    }
    // confirmar: 
    //post
}
   
module.exports = funcion; 

//o mas tipo db.Resena.update??? --> editar
// y db.Resena.destroy --> delete

//also add confirm edit? --> ahi, db.Resena.update()
//uno que se encarga de recuperar datos y otro mandar lo nuevo
//en 2) validar que usuario exista, etc. 