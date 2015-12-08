var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('paquetes', { title: 'Paquetes de correspondencia' });
});


module.exports = router;
