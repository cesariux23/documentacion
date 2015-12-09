var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('turnos/index', { title: 'Listado de Turnos' });
});
router.get('/registro', function(req, res, next) {
  res.render('turnos/new', { title: 'Nuevo Turno' });
});

module.exports = router;
