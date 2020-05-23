const db = require('../database/models');


let funcion = {
    // Detalle de una película
    detalle: function (req, res) {
        res.render('detallePelicula');
    }

}
   
   module.exports = funcion; 

   //o algo estilo asi:

// const db = require('../database/models');

// module.exports = {
//     index: (req, res) => {
//         db.Movies
//         .findAll()
//         .then(movies => {
//             res.render("moviesList", {
//                 listaPeliculas: movies
//             })
//         })
//         .catch(error => {
//             res.send(error);
//         })
        
//     },

//     create: (req, res) => {
//         return res.render('moviesCreateForm');
//     },

//     store: (req, res) => {
//         db.Movies  
//             .create(req.body)
//             .then(movieGuardada => {
//                 return res.redirect("/movies");
//             })
//             .catch(error => {
//                 res.send(error);
//             })

//     },
    
// };
