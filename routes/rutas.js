const express = require('express');
const router = express.Router();

// Controladores
const indexController = require('../controllers/indexController');
const generosController = require('../controllers/generosController');
const buscadorController = require('../controllers/buscadorController');
const peliculasController = require('../controllers/peliculasController');

// http://localhost:3000/ ➜ Index
router.get('/', indexController.home);

// http://localhost:3000/generos ➜ Géneros
router.get('/generos', generosController.listado);

// http://localhost:3000/buscar/resultados ➜ Resultados de la búsqueda
router.get('/buscar/resultados', buscadorController.resultados);

// http://localhost:3000/peliculas/detalle ➜ Detalle de una película
router.get('/peliculas/detalle', peliculasController.detalle);

module.exports = router;
