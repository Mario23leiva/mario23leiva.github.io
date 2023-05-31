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

    function enviarFormulario() {
    event.preventDefault(); // Evita que se envíe el formulario por defecto

    // Obtiene los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Configura el objeto de correo electrónico
    var templateParams = {
        from_name: nombre,
        from_email: email,
        message: mensaje
    };

    // Envía el correo electrónico
    emailjs.send('service_zutakp1', 'template_53bi9xb', templateParams)
        .then(function(response) {
        console.log('Correo electrónico enviado:', response);
        alert('Correo electrónico enviado correctamente.');
        }, function(error) {
        console.error('Error al enviar el correo electrónico:', error);
        alert('Ocurrió un error al enviar el correo electrónico.');
        });
}
