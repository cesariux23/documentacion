var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('seguimiento/index', { title: 'Documentos pendientes de respuesta' });
});
router.get('/todos', function(req, res, next) {
  res.render('seguimiento/index', { title: 'Documentos pendientes de respuesta' });
});
router.get('/registro', function(req, res, next) {
  res.render('seguimiento/index', { title: 'Registro de seguimiento' });
});


module.exports = router;
