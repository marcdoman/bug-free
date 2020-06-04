const express = require('express');
const router = express.Router();

// Controladores
const indexController = require('../controllers/indexController');
const generosController = require('../controllers/generosController');
const buscadorController = require('../controllers/buscadorController');
const peliculasController = require('../controllers/peliculasController');
const misResenasController = require('../controllers/misResenasController');
const registracionController = require('../controllers/registracionController');
const usersController = require('../controllers/usersController');
const detalleUsuarioController = require('../controllers/buscadorController');



//HOME
router.get('/', indexController.home);

//Resultado generos
router.get('/generos', generosController.listado);

// Resultados de las búsquedas
router.get('/buscar/peliculas', buscadorController.peliculas);
router.get('/buscar/usuarios', buscadorController.usuarios);
router.get('/buscar/usuarios/detalle/:id', detalleUsuarioController.searchById);


// Detalle de una película
router.get('/peliculas/detalle', peliculasController.resenasExistentes);
router.post('/peliculas/detalle', peliculasController.guardarResena);


//Formulario registracion
router.get('/registracion', registracionController.crearUsuario);
router.post('/registracion', registracionController.guardarUsuario);

//userController
// router.get('/', usersController.logIn);
// router.post('/', usersController.confirmarUsuario);

//fin de userController

//Log In
// router.get('/logIn', logInController.logIn);

//MisResena de un usuario
router.get('/logIn', usersController.logIn);
router.post('/misResenas', usersController.confirmarUsuario);
//above esta bien?

// router.get('/misResenas', misResenasController.listaMisResenas);
router.get('/misResenas/:id', misResenasController.misResenas);
//o : router.get('/misResenas/:id', misResenasController.misResenas);

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
