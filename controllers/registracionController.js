const db = require('../database/models');
// const OP = DB.Sequelize.OP;

let funcion = {
    // Registracion del usuario
        index: (req, res) => {
            db.Usuarios
            .findAll()
            .then(usuarios => {
                res.render("registracion", {
                    //o que para primer parametro? o listaUsuarios? 
                    listaUsuarios: usuarios
                })
            })
            .catch(error => {
                res.send(error);
            })
            
        },
    
        create: (req, res) => {
            return res.render('registracion');
            //esto? se refiere al ejs? 
        },
    
        store: (req, res) => {
            db.Usuarios  
                .create(req.body)
                .then(usuarioGuardado => {
                    return res.redirect("/");
                })
                .catch(error => {
                    res.send(error);
                })
    
        },
        
    };
   
module.exports = funcion; 

