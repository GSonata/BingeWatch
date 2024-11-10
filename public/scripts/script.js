document.getElementById("imagenUsuario").addEventListener("click", ()=>{
    console.log("HOLAAA");
    document.querySelector(".cortina").classList.add("showCortina");
    document.querySelector(".menuDesplegable").classList.add("showMenu");
})

document.querySelector(".cortina").addEventListener("click", ()=>{
    document.querySelector(".cortina").classList.remove("showCortina");
    document.querySelector(".menuDesplegable").classList.remove("showMenu");
})

