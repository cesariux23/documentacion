var express = require('express');
var router = express.Router();

/* GET listado de documentos emitidos. */
router.get('/', function(req, res, next) {
  res.render('emision/index', { title: 'Listado de documentos emitidos' });
});
router.get('/registro', function(req, res, next) {
  res.render('emision/new', { title: 'Nuevo documento emitido' });
});

module.exports = router;
