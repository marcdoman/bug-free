const express = require('express');
const router = express.Router();

// Controladores
const indexController = require('../controllers/indexController');
const generosController = require('../controllers/generosController');
const buscadorController = require('../controllers/buscadorController');
const peliculasController = require('../controllers/peliculasController');
const misResenasController = require('../controllers/misResenasController');
const registracionController = require('../controllers/registracionController');



//HOME
router.get('/', indexController.home);

//Resultado generos
router.get('/generos', generosController.listado);

// Resultados de la búsqueda
router.get('/buscar/resultados', buscadorController.resultados);

// Detalle de una película
router.get('/peliculas/detalle', peliculasController.detalle);

//Resena de un usuario
//router.get('/misResenas', misResenasController.misResenas);

//Formulario registracion
// router.get('/registracion', registracionController.registracion);
router.get('/registracion', registracionController.index);
router.get('/registracion', registracionController.create);
router.get('/registracion', registracionController.store);




//router.get('/:error?', peliculasController.findByPk);

//router.post('/resena/index/:id', peliculasController.index);
//above? o era get?

//router.post('/resena/create/:id', peliculasController.create);

//router.post('/deleteResena/:id', deleteResenaController.delete);
    //o tipo : //router.post('/deleteResena/delete/:id', deleteResenaController.delete); -- idem below
//router.post('/editResena/:id', editResenaController.editar);
//router.post('/editResena/:id', editResenaController.confirmarEdit);

//2 above estan bien??


module.exports = router;
