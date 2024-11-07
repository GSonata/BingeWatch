var express = require('express');
var router = express.Router();

var funciones = require("../data/data_provider.js");

/* RUTAS PARA LA PAGINA GENERAL. */

router.get('/', function(req, res, next) {
  res.render("home", {head_title: "BingeWatch"})
});


router.get('/contacto', function(req, res, next) {
  res.render("contacto", {head_title: "BW - Contacta con nosotros"})
});

//RUTAS PARA LAS PELICULAS DE LA PAGINA PRINCIPAL

router.get('/pelicula/:id',function(req,res){
  const targetMovie = funciones.getMovieByID(req.params.id)
  res.send(targetMovie);
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

router.get('/terminateSession', function(req, res, next) {
  req.session.login = false;
  req.session.user = null;
  res.redirect("/");
});

module.exports = router;
