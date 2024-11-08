const usuarios = require("./users.json");
const allMovies = require("./movies.json");

function iniciarSesion(mail,password){

    //filtramos todos los usuarios para encontrar el que coincida con los datos que le pasamos
    let u = usuarios.filter(
        (u)=>{
            return( (u.mail==mail) && (u.contraseña==password) )
        }
    )

    //si encontramos al menos 1 lo devolvemos
    if(u.length>0)
        return u[0]
    //al contrario devolvemos nulos
    else
        return null
}

function getAllMovies(){
    return allMovies;
}

function getMovieByID(idMovie){
    let target = allMovies.filter((u)=>{
        return((u.id==idMovie))
    })

        //si encontramos al menos 1 lo devolvemos
    if(target.length>0)
        return target[0]
    else
        return null
}

function getCollection(collection){
    const uniqueMovies = new Map();
    
    collection.forEach(movie => {
        if (!uniqueMovies.has(movie.idPelicula)) {
            uniqueMovies.set(movie.idPelicula, getMovieByID(movie.idPelicula));
        }
    });
    
    return Array.from(uniqueMovies.values());
}

function getCopies(collection, idMovie) {
    const arrayMovies = [];

    collection.forEach((movie) => {
        if (movie.idPelicula === idMovie) {
            arrayMovies.push(movie);
        }
    });

    return arrayMovies;
}

//exportamos todas las funciones
module.exports = {
    iniciarSesion,
    getAllMovies,
    getCollection,
    getCopies,
    getMovieByID
}