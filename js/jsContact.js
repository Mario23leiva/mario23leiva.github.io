var fondoActual = "";
function cambiarFondo() {
    const imagen = document.getElementById('square-image');
    const projects = document.getElementById('imagenes');
    if (fondoActual != "url('../multimedia/img/fondoNether.png')") {
        projects.style.backgroundImage = "url('../multimedia/img/fondoNether.png')";
        imagen.src = "../multimedia/img/bloqueNTH.png"
        fondoActual = "url('../multimedia/img/fondoNether.png')";
    }
    else {
        projects.style.backgroundImage = "url('../multimedia/img/fondoMinecraft.jpg')";
        imagen.src = "../multimedia/img/bloqueMC.png"
        fondoActual = "url('../multimedia/img/fondoMinecraft.jpg')";
    }
}