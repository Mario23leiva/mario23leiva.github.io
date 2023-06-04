var fondoActual = "";

window.onload = function() {
    const check = document.getElementById('check');
    const body = document.getElementsByTagName('body')[0];
  
    check.addEventListener('click', () => {
      if (check.checked) {
        body.style.overflow = 'hidden'; // desactivar el scroll
      } else {
        check.checked = false; // desmarcar el checkbox
        body.style.overflow = 'auto'; // activar el scroll
      }
    });
  
    document.addEventListener('click', (event) => {
      if (!check.contains(event.target)) {
        check.checked = false; // desmarcar el checkbox
        body.style.overflow = 'auto'; // activar el scroll
      }
    });
  }
  

function enviarProyecto(carta) {
    // Obtener el índice de la carta
    const indice = parseInt(carta.getAttribute('data-indice'));
  
    window.location.href = `../pages/descriptionProject.html?info=${indice}`;
}

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


