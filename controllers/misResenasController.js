const db = require('../database/models');
const op = db.Sequelize.Op;

let funcion = {
    // mis resenas del sitio web
    
    listaMisResenas: function (req, res) {
//crear metodo que busque las resenas, y en el res.render a la vista que tengo, le =pase como segundo parametro la resenas (la lista)
//no funcion
    },
    misResenas: function (req, res) {
      db.Resenas.findAll({
        where: {usuario_id: req.params.id},
        //creo -- se entiende que es id de usuario
        include: ["usuarios"]
        //la tabla de usuarios?
      })
      .then(result =>{
        // res.send(result)
        res.render('misResenas', {resultado: result})
      })

   },
   editar: function (req, res) {
       db.Resenas.findOne({
            where: [{id: req.params.id}]
     }) 
       .then(result =>{
            res.render('editResena', {result: result, error: req.params.error})
            //el error?
       })
        //aca tiene que recuperar los datos 

   },
   confirmarEdit: function (req, res) {
             //aca se mandan los datos editados
      const updateResena = {
        //hay que aclararlo devuelta? ya lo hize en editar
        resena: req.body.resena,
        puntaje: req.body.puntaje
      } 
      db.Resena.update({
         resena: updateResena.resena,
         puntaje: updateResena.puntaje,
          //aca o un --> si where
       })
       .then(()=>{
        
           res.redirect('/misResenas')
       })

   },

   delete: function (req, res) {
    // res.render('deleteResena', {deleteId: req.params.id})
    db.Resenas.findOne({
      where: [{id: req.params.id}]
    }) 
    .then(result =>{
      res.render('deleteResena', {deleteId: req.params.id, result: result, error: req.params.error})
      //el error?
    })
      //aca va el login como primer parametro?
  },
  confirmarDelete: function (req, res) {
  
    db.Resenas.destroy({
      where: {id: req.params.id}
    //hace falta devuelta aclarar esto?
  })
  res.redirect('/misResenas')
  }
}

module.exports = funcion;