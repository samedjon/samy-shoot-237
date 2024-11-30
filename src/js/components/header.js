// Variables pour le scroll
let lastScrollTop = 0;
const header = document.querySelector('.header');
const SCROLL_THRESHOLD = 50;

// Fonction pour gérer l'apparition/disparition du header
function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Détermine si on scroll vers le haut ou le bas
    if (currentScroll > lastScrollTop && currentScroll > SCROLL_THRESHOLD) {
        // Scroll vers le bas - cache le header
        header.classList.add('header--hidden');
    } else {
        // Scroll vers le haut - montre le header
        header.classList.remove('header--hidden');
    }
    
    // Ajoute la classe scrolled si on n'est pas en haut de la page
    if (currentScroll > 0) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
    
    lastScrollTop = currentScroll;
}

// Ajoute un debounce pour optimiser les performances
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Écoute l'événement scroll avec debounce
window.addEventListener('scroll', debounce(handleScroll, 10));
