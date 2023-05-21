var fondoActual = "";
function cambiarFondo() {
    const imagen = document.getElementById('square-image');
    const projects = document.getElementById('projects');
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

function enviarProyecto(carta) {
  // Obtener el índice de la carta
  const indice = parseInt(carta.getAttribute('data-indice'));

  window.location.href = `../pages/descriptionProject.html?info=${indice}`;
}