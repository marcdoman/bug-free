const express = require('express');
const router = express.Router();


const listadoGenero = require('../controllers/listadoGeneroController');
router.get('/listadoGenero', listadoGenero.generos);

const resultadoBusqueda = require('../controllers/resultadoBusquedaController');
router.get('/resultadoBusqueda', resultadoBusqueda.busqueda);

const detallePelicula = require('../controllers/detallePeliculaController');
router.get('/detallePelicula', detallePelicula.detalle);

module.exports = router;
