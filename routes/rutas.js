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
router.get('/misResenas', misResenasController.misResenas);

//Formulario registracion
router.get('/registracion', registracionController.registracion);




// router.get('/:error?', peliculasController.findByPk);
//router.post('/resena/:id', peliculasController.create);

//router.post('/resena/:id', misResenasController.delete);
//router.post('/resena/:id', misResenasController.editar);
//2 above estan bien??


module.exports = router;
