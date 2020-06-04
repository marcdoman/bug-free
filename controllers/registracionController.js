const db = require('../database/models');
let bcrypt = require('bcryptjs');
// Registracion del usuario

let registracion = {
    
        crearUsuario: function(req,res) {
            db.Usuarios
            .findAll()
            .then(function(usuarios){
                return res.render("registracion", {
                    
                })
            })      
        },  
        guardarUsuario: function (req, res) {
            db.Usuarios.create({
                nombre_usuario: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.psw, 10),
                fecha_nacimiento: req.body.birthday,
            })
            .then(function(parametro){
                res.redirect("/");
            })
            
        }
        
};


   
module.exports = registracion; 