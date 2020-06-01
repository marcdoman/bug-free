const db = require('../database/models');
const op = db.Sequelize.Op;

let funcion = {
    // mis resenas del sitio web
    loginUsuario: function (req, res) {


    },
    confirmarUsuario: function (req, res) {


    },
    misResenas: function (req, res) {
      db.Resena.findAll({
        where: {usuario_id: req.params.id},
        //creo -- se entiende que es id de usuario
        include: ["usuarios"]
        //la tabla de usuarios?
      })
      .then(result =>{
        res.render('resenas', {resultado: result})
      })

   },
   editar: function (req, res) {
       db.Resena.findOne({
            where: [{id: req.params.id}]
     }) 
       .then(result =>{
            res.render('editResena', {result: result, error: req.params.error})
            //el error?
       })
        //aca tiene que recuperar los datos 
        //?resena/editar/id de resena

   },
   confirmarEdit: function (req, res) {
             //aca se mandan los datos editados
      const updateResena = {
        id: req.params.id,
        //hay que aclararlo devuelta? ya lo hize en editar
        resena: req.body.resena,
        puntaje: req.body.puntaje
      } 
      db.Resena.update({
         resena: updateResena.resena,
         puntaje: updateResena.puntaje,
        id: updateResena.id
          //aca o un where?
       })
       .then(()=>{
         db.Resena.findByPk(req.params.id)
         .then(result =>{
          //  res.redirect('/')
         })
       })

        //validar que usuario exista: (en que cambia al formulario below?)
        // Usuario.validate(req.body.email, req.body.password){
    //         .then(resultado =>{
    //             if(resultado != undefined){
    //                 const resena = {
    //                     pelicula_id: req.query.pelicula_id,
    //                     usuario_id: resultado.usuario_id,
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

   },

   delete: function (req, res) {
    res.render('', {tipo: "delete", deleteId: req.params.id})
      //aca va el login como primer parametro?
},
confirmarDelete: function (req, res) {
  db.Resena.destroy({
    where: {id: req.params.id}
    //hace falta devuelta aclarar esto?
})
res.redirect('/misResenas')
//esto esta bien?
}
}

module.exports = funcion;