// Objeto con las traducciones
var translations = {
    es: {
        welcome: "Bienvenido a mi portafolio",
        aboutMe: "Sobre mí",
        projects: "Proyectos",
        contactMe: "Contáctame",
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar",
        copyright: "&copy; 2023 Mario Leiva"
    },
    en: {
        welcome: "Welcome to my portfolio",
        aboutMe: "About me",
        projects: "Projects",
        contactMe: "Contact me",
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
        copyright: "&copy; 2023 Mario Leiva"
    },
    fr: {
        welcome: "Bienvenue sur mon portfolio",
        aboutMe: "À propos de moi",
        projects: "Projets",
        contactMe: "Contactez-moi",
        name: "Nom",
        email: "Email",
        message: "Message",
        submit: "Envoyer",
        copyright: "&copy; 2023 Mario Leiva"
    }
};
  
// Función para cambiar el idioma
function changeLanguage(lang, defaultLang) {
    // Si no se proporciona el idioma, utilizar el idioma por defecto (en este caso, inglés)
    lang = lang || defaultLang || "en";
  
    // Obtener todos los elementos con la etiqueta 'h1', 'a', 'label' y 'button'
    var elements = document.getElementsByTagName("h1");
    elements = Array.prototype.slice.call(elements);
    elements = elements.concat(Array.prototype.slice.call(document.getElementsByTagName("a")));
    elements = elements.concat(Array.prototype.slice.call(document.getElementsByTagName("label")));
    elements = elements.concat(Array.prototype.slice.call(document.getElementsByTagName("button")));
  
    // Filtrar los elementos que tienen el atributo 'data-translate'
    var translatableElements = elements.filter(function(element) {
        return element.hasAttribute("data-translate");
    });
  
    // Recorrer todos los elementos y cambiar el texto según el idioma
    translatableElements.forEach(function(element) {
        var key = element.getAttribute("data-translate");
        element.textContent = translations[lang][key];
    });
}

window.onload = function() {
    // Cargar el texto en inglés por defecto
    changeLanguage("en");
};
  
  


  