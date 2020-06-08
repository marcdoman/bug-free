const db = require('../database/models');
const op = db.Sequelize.Op;
const moduloLogin = require('../modulo-login');
let bcrypt = require('bcryptjs');

let funcion = {
    
    listaMisResenas: function (req, res) {
    },
    misResenas: function (req, res) {
      db.Resenas.findAll({
        where: {usuario_id: req.params.id},
        include: ["usuarios"]
      })
      .then(result =>{
        res.render('misResenas', {resultado: result})
      })

   },
   editar: function (req, res) {
       db.Resenas.findOne({
            where: [{id: req.params.id}]
     }) 
       .then(resultado =>{
            res.render('editResena', {resultado: resultado, error: req.params.error})
       })

   },
   confirmarEdit: function (req, res) {
      moduloLogin.validar(req.body.email,req.body.password)
      .then(resultado => {
        if (resultado != undefined){
          db.Resenas.update({
            texto_resena: req.body.texto_resena,
             puntaje: req.body.puntaje
           }, {
             where: {id: req.params.id}
           })
           .then(() => {
            res.redirect('/misResenas/'+ resultado.id);

           })
        } 
        else{
          res.redirect('/registracion')
        }

      });
   },

   delete: function (req, res) {
    db.Resenas.findOne({
      where: [{id: req.params.id }]
    }) 
    .then(resultado =>{
      res.render('deleteResena', {deleteId: req.params.id, resultado: resultado, error: req.params.error})
    })
  },

  confirmarDelete: function (req, res) {
  moduloLogin.validar(req.body.email,req.body.password)
    .then(resultado => {
      if (resultado != undefined){
        db.Resenas.destroy({
          where: {id: req.params.id}
      })
      .then(() => {
        res.redirect('/misResenas/'+ req.body.usuario_id)

    
       })
      } 
    else{
        res.redirect('/registracion')
      }
    })

  }
};


module.exports = funcion;

