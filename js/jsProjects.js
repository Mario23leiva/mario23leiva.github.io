function enviarProyecto(carta) {
  // Obtener el índice de la carta
  const indice = parseInt(carta.getAttribute('data-indice'));

  window.location.href = `../pages/descriptionProject.html?info=${indice}`;
}