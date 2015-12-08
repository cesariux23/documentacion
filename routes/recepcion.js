var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('recepcion/index', { title: 'Listado de documentos recibidos' });
});

//Nuevo documento
router.get('/registro', function(req, res, next) {
  res.render('recepcion/new', { title: 'Registro de documento recibido' });
});


module.exports = router;
