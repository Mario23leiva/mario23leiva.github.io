window.onload = function() {
  cargarProyecto();
}

function cargarProyecto(carta) {
    // Obtener el valor del parámetro "info" desde la URL
  const parametros = new URLSearchParams(window.location.search);
  const indice = parseInt(parametros.get('info'));


  // Cargar el archivo JSON y mostrar el elemento correspondiente
  fetch('../json/proyectos/proyectos.json')
    .then(response => response.json())
    .then(data => {
      const elemento = data[indice];
      // Aquí puedes mostrar el elemento en la página
      const tituloProyecto = document.getElementById('tituloProyecto');
      tituloProyecto.innerHTML = elemento.titulo;
      const tipoProyecto = document.getElementById('tipoProyecto');
      tipoProyecto.innerHTML = elemento.tipo;
      const imagenProyecto = document.getElementById('imagenProyecto');
      imagenProyecto.src = elemento.ruta_imagen;
      const descripcionProyecto = document.getElementById('descripcionProyecto');
      descripcionProyecto.innerHTML = elemento.descripcion;
      const tecnologiasProyecto = document.getElementById('tecnologiasProyecto');
      tecnologiasProyecto.innerHTML = elemento.tecnologias;
      const moreInfoProyecto = document.getElementById('btn-moreInfo');
      moreInfoProyecto.addEventListener('click', () => {
        window.location.href = elemento.url_repo;
      });
    });
}