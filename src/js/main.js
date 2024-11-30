/**
 * Point d'entrée principal de l'application
 */

import { animateOnScroll, initDarkMode } from './utils/helpers.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        // Initialisation des animations au défilement
        animateOnScroll();

        // Initialisation du mode sombre
        initDarkMode();

        // Gestion des liens d'ancrage
        this.initAnchorLinks();

        // Initialisation des images lazy loading
        this.initLazyLoading();
    }

    initAnchorLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
