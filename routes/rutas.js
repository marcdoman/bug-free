const express = require('express');
const router = express.Router();

const home = require('../controllers/homeController');
router.get('/', home.index);

const listadoGenero = require('../controllers/listadoGeneroController');
router.get('/listadoGenero', listadoGenero.index);

const resultadoBusqueda = require('../controllers/resultadoBusquedaController');
router.get('/resultadoBusqueda', resultadoBusqueda.index);

const detallePelicula = require('../controllers/detallePeliculaController');
router.get('/detallePelicula', detallePelicula.index);

module.exports = router;
