const db = require('../database/models');

// Registracion del usuario

let registracion = {
    
        crear: function(req,res) {
            db.Usuarios
            .findAll()
            .then(function(usuarios){
                return res.render("registracion", {
                    usuarios: usuarios
                })
            })      
        },  
        guardado: function (req, res) {
            db.Usuarios.create({
                nombre_usuario: req.body.username,
                email: req.body.email,
                password: req.body.psw,
                fecha_nacimiento: req.body.birthday,
            });

            res.redirect("/");
        }
        
};


   
module.exports = registracion; 