var express = require('express');
var router = express.Router();
//prueba con datos ficticios para el mixin del listado
var documentos=[
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      },
      {
        nombre:"César Encarnación Mendoza",
        atn:true
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      },
      {
        nombre:"César Encarnación Mendoza",
        atn:true
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      },
      {
        nombre:"César Encarnación Mendoza",
        atn:true
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      },
      {
        nombre:"César Encarnación Mendoza",
        atn:true
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  },
  {
    documento:"Circular",
    tipo:"emitido",
    emision:"Interno",
    numero:"SA/57/2015",
    fecha:"17/11/2015",
    nivel:"Subdirección",
    area:"SA",
    departamento:"SA01",
    firma:{
      nombre:"M.P.P Aldo Zavala García",
      cargo:"Subdirector Administrativo"
    },
    asunto:"INSTALACION DEL SERVICIOS DE DIRECTORIO ACTIVO",
    destinatarios:
    [
      {
        nombre:"SUBDIRECTORES DE AREA, JEFES DE UNIDAD Y JEFES DE DEPARTAMENTO",
        cargo:"IVEA"
      }
    ],
    descripcion:"Instalación del active directoy en Dirección general",
    elaboro:"AZG/htg",
  }
];

/* GET listado de documentos emitidos. */
router.get('/', function(req, res, next) {
  res.render('emision/index', { title: 'Documentos emitidos',documentos});
});
router.get('/registro', function(req, res, next) {
  res.render('emision/new', { title: 'Nuevo documento emitido' });
});

module.exports = router;
