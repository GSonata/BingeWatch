var express = require('express');
var router = express.Router();

var funciones = require("../data/data_provider.js");

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render("home", {head_title: "BingeWatch"})
});


router.get('/contacto', function(req, res, next) {
  res.render("contacto", {head_title: "BW - Contacta con nosotros"})
});

//RUTAS DE LOGIN

router.get('/login', function(req, res, next) {
  res.render("login", {head_title: "BW - Iniciar Sesión"})
});

router.post("/login", function(req,res,next){

    const user = req.body.username;
    const pass = req.body.password;

    userActivo = funciones.iniciarSesion(user,pass);

    console.log(userActivo);
    
    if(userActivo){
      req.session.login=true;
      req.session.user= userActivo;
      res.redirect("/mainPage");
    }else res.redirect("/login");
});

router.get('/mainPage', function(req, res, next) {
  const allMovies = funciones.getAllMovies();
  if(req.session.login) {
    res.render("mainPage", {head_title: "BW - Pagina Principal", userActivo: req.session.user, movieArray: allMovies})
  }
  else res.redirect("/login");
});

module.exports = router;
