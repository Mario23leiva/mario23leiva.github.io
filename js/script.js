document.addEventListener('DOMContentLoaded', () => {
    // Menú hamburguesa
    const menuBtn = document.querySelector('.menu-hamburguesa');
    const navMenu = document.querySelector('#navbar ul');
    
    menuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Cerrar menú al hacer clic en enlace (mobile)
    document.querySelectorAll('#navbar ul li a').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navMenu.style.display = 'none';
            }
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Controlador de idioma
    const savedLang = localStorage.getItem('portfolio_lang') || 'es';
    setLanguage(savedLang);

    document.querySelectorAll('.language-switcher button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('portfolio_lang', lang);
        });
    });

    // Función de traducción
    function setLanguage(lang) {
        // Actualizar botones activos
        document.querySelectorAll('.language-switcher button').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Traducir elementos
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key] || element.placeholder;
            } else if (element.innerHTML.includes('<span>') || element.innerHTML.includes('<strong>')) {
                // Conservar HTML interno en elementos complejos
                const tempElement = document.createElement('div');
                tempElement.innerHTML = translations[lang][key];
                element.childNodes.forEach((child, index) => {
                    if (child.nodeType === 3) { // Text node
                        element.replaceChild(
                            document.createTextNode(tempElement.childNodes[index]?.textContent || ''),
                            child
                        );
                    }
                });
            } else {
                element.textContent = translations[lang][key] || element.textContent;
            }
        });
        
        // Actualizar atributo lang del documento
        document.documentElement.lang = lang;
    }
});