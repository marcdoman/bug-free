let db = require ('../database/models');
let op = db.Sequelize.Op;


let funcion = {
    peliculas: function (req, res) {
        res.render('resultadoPeliculas');
    },
    usuarios: function (req, res) {
        db.Usuarios.findAll({
            where : {
                [op.or]:{
                    email: {[op.like]: "%" + req.query.usuarios + "%"},
                    nombre_usuario: {[op.like]: "%" + req.query.usuarios + "%"}
                }
            }
        })
        .then(function(parametro) {
            res.render('resultadoUsuarios' , {
                resultado : parametro 
            })    
        })    
        
    },
    searchById: function (req,res){
        db.Usuarios.findByPk(req.params.id)

        .then(function(usuario){
            db.Resenas.findAll({
                where: {
                    usuario_id: usuario.id
                }
            })
            .then (function (reviews) {
                res.render('detalleUsuario',{
                    usuario:usuario,
                    Resenas: reviews
                })
            })
        })
        
    }
};

module.exports = funcion; 