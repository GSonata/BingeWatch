const usuarios = require("./users.json");
const allMovies = require("./movies.json");

function iniciarSesion(mail,password){

    console.log(usuarios);
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

//exportamos todas las funciones
module.exports = {
    iniciarSesion,
    getAllMovies
}