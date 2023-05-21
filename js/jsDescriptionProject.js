function cargarProyecto(carta) {
    // Obtener el índice de la carta
    const indice = parseInt(carta.getAttribute('data-indice'));
  
    // Cargar el archivo JSON
    fetch('../json/proyectos/proyectos.json')
      .then(response => response.json())
      .then(data => {
        // Obtener la información de la carta utilizando el índice
        const cartaSeleccionada = data[indice];
  
        // Redirigir a la página de la carta con la información de la carta en la URL
        window.location.href = `../pages/projects.html?info=${JSON.stringify(cartaSeleccionada)}`;
    });
}