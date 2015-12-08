var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//registra los controladores
var routes = require('./routes/index');
var users = require('./routes/users');
var recepcion = require('./routes/recepcion');
var seguimiento = require('./routes/seguimiento');
var paquetes = require('./routes/paquetes');
var turnos = require('./routes/turnos');
var emision = require('./routes/emision');
var busqueda = require('./routes/busqueda');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//bowercomponents
app.use(express.static(path.join(__dirname, 'bower_components')));


//publica las rutas
app.use('/', routes);
app.use('/users', users);
app.use('/emision', emision);
app.use('/seguimiento', seguimiento);
app.use('/recepcion', recepcion);
app.use('/turnos', turnos);
app.use('/paquetes', paquetes);
app.use('/busqueda', busqueda);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
