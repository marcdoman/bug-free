var express = require('express');
var router = express.Router();

/* GET home page. */
const controlador = require ('../controllers/indexController');
router.get('/', controlador.index );



module.exports = router;
