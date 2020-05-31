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
router.get('/registracion', registracionController.registracion);




//router.get('/:error?', peliculasController.findByPk);

//router.post('/resena/index/:id', peliculasController.index);
//above? o era get?

//router.post('/resena/create/:id', peliculasController.create);

//router.post('/misResenas/delete/:id', misResenasController.delete);
//router.post('/misResenas/edit/:id', misResenasController.editar);
//router.post('/misResenas/confirmarEdit/:id', misResenasController.confirmarEdit);

//2 above estan bien??


module.exports = router;
