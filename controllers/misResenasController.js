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
        //put
       // db.Resena.update()
    //    bien?
    }
}
   
module.exports = funcion; 

//o mas tipo db.Resena.update??? --> editar
// y db.Resena.destroy --> delete