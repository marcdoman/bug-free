let db = require ('../database/models');
let op = db.Sequelize.Op;


let funcion = {
    // Resultados de la búsqueda de peliculas
    peliculas: function (req, res) {
        res.render('resultadoPeliculas');
    },
    // Resultados de la búsqueda de usuarios
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
        
    }
}

module.exports = funcion; 