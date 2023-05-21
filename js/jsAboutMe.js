var fondoActual = "";
function cambiarFondo() {
    const imagen = document.getElementById('square-image');
    const projects = document.getElementById('skills');
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


function descargarCV() {
    var enlace = document.createElement('a');
    enlace.href = '../multimedia/cv/UltimateCV.pdf';  // Reemplaza 'ruta/al/archivo.pdf' con la URL o la ruta relativa de tu archivo PDF
    enlace.download = 'MarioLeivaUtlimateCV.pdf';  // Cambia 'nombre-del-archivo.pdf' con el nombre que deseas para el archivo descargado
    enlace.click();
}



