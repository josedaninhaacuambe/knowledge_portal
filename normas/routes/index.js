var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController");
const Ordem = require("../models/orden");
const Legislacao = require("../../models/legislation");
const { isAuth } = require('../server/middlewares/authentication');

router.get('/home', [isAuth], indexController.index);

router.use(function (req, res, next) {
  res.locals.sessionID = req.session.sessionID;
  next();
});

/* GET home page. */
router.get('/Index', function(req, res, next) {
  return res.json();
  //res.render('index', { title: 'EDM Portal de Conhecimento' });
});

/* GET page Contacto. */
router.get('/Contacto', function(req, res, next) {
  return res.json();
});

/* GET page Evemtos. */
router.get('/Evento', function(req, res, next) {
  return res.json();
});

/* GET page Documents. */
router.get('/documents', function(req, res, next){
  return res.json();
});

/* GET page Normas. */
router.get('/Normas', function(req, res, next){
  return res.json();
});

/* GET page Documents. */
// router.get('/legislation', function(req, res, next){
//   return res.json();
// });

// All documents
router.get("/legislation", 
// [isNotAuth], 
indexController.findAll);


/* GET page Documents. */
// router.get('/Ordens', function(req, res, next){
//   return res.json();
// });
router.get("/OrdensS", 
// [isNotAuth], 
indexController.findAllOrndem);

/* GET page Documents. */
router.get('/Projecto', function(req, res, next){
  return res.json();
});


module.exports = router;

