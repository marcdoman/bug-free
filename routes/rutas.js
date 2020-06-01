const express = require('express');
const router = express.Router();

// Controladores
const indexController = require('../controllers/indexController');
const generosController = require('../controllers/generosController');
const buscadorController = require('../controllers/buscadorController');
const peliculasController = require('../controllers/peliculasController');
const misResenasController = require('../controllers/misResenasController');
const registracionController = require('../controllers/registracionController');
const logInController = require('../controllers/logInController');



//HOME
router.get('/', indexController.home);

//Resultado generos
router.get('/generos', generosController.listado);

// Resultados de la búsqueda
router.get('/buscar/resultados', buscadorController.resultados);

// Detalle de una película
router.get('/peliculas/detalle', peliculasController.detalle);

//Log In
router.get('/logIn', logInController.logIn);

//Formulario registracion
router.get('/registracion', registracionController.crear);
router.post('/registracion', registracionController.guardado);
//fin 

//MisResena de un usuario
router.get('/misResenas', misResenasController.listaMisResenas);
router.get('/misResenas/:id', misResenasController.misResenas);
router.get('/misResenas/editar/:id', misResenasController.editar);
router.post('/misResenas/editar/:id', misResenasController.confirmarEdit);
router.get('/misResenas/delete/:id', misResenasController.delete);
router.post('/misResenas/delete/:id', misResenasController.confirmarDelete);
//fin de MisResenas de un usuario



//router.get('/:error?', peliculasController.findByPk);

//router.post('/resena/index/:id', peliculasController.index);
//above? o era get?

//router.post('/resena/create/:id', peliculasController.create);



module.exports = router;
