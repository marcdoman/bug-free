const express = require('express');
const router = express.Router();

// Controladores
const indexController = require('../controllers/indexController');
const generosController = require('../controllers/generosController');
const buscadorController = require('../controllers/buscadorController');
const peliculasController = require('../controllers/peliculasController');
const misResenasController = require('../controllers/misResenasController');


router.get('/', indexController.home);

router.get('/generos', generosController.listado);

// http://localhost:3000/buscar/resultados ➜ Resultados de la búsqueda
router.get('/buscar/resultados', buscadorController.resultados);

// http://localhost:3000/peliculas/detalle ➜ Detalle de una película
router.get('/peliculas/detalle', peliculasController.detalle);

router.get('/misResenas', misResenasController.misResenas);


// router.get('/:error?', peliculasController.findByPk);
router.post('/resena/:id', peliculasController.create);

router.post('/resena/:id', misResenasController.delete);
router.post('/resena/:id', misResenasController.editar);
//2 above estan bien??


module.exports = router;
