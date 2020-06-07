const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require('../modulo-login');
let bcrypt = require('bcryptjs');

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
       .then(resultado =>{
            res.render('editResena', {resultado: resultado, error: req.params.error})
            //editId: req.params.id, 
            //el error?
       })
        //aca tiene que recuperar los datos 

   },
   confirmarEdit: function (req, res) {
             //aca se mandan los datos editados
    //  const updateResena = {
    //     resena: req.body.texto_reseno,
    //     puntaje: req.body.puntaje
    //  } 
      moduloLogin.validar(req.body.email,req.body.password)
      .then(resultado => {
        if (resultado != undefined){
          db.Resenas.update({
            // where: {id: req.params.id},
             resena: req.body.texto_resena,
             puntaje: req.body.puntaje,
              //aca o un --> si where
           }, {
             where: {id: req.params.id}
           })
           .then(() => {
            // res.redirect('/misResenas/'+ req.body.usuario_id)
            res.redirect('/misResenas/'+ resultado.id);

           })
        } 

      });


   },

   delete: function (req, res) {
    // res.render('deleteResena', {deleteId: req.params.id})
    db.Resenas.findOne({
      where: [{id: req.params.id, 
        // usuario_id: req.params.usuario_id
      }]
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

  res.redirect('/misResenas/'+ req.body.usuario_id)
  }
}

module.exports = funcion;