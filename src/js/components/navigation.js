/**
 * Gestion de la navigation
 */

import { handleScroll } from '../utils/helpers.js';

class Navigation {
    constructor() {
        this.header = document.querySelector('.header');
        this.nav = document.querySelector('.nav');
        this.toggle = document.querySelector('.nav__toggle');
        this.menu = document.querySelector('.nav__menu');
        this.links = document.querySelectorAll('.nav__link');
        
        this.isOpen = false;
        
        this.init();
    }

    init() {
        // Gestionnaire du menu mobile
        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        // Fermer le menu au clic sur un lien
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Fermer le menu au clic en dehors
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.nav.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Gestion du défilement
        window.addEventListener('scroll', () => handleScroll(this.header));

        // Gestion des touches du clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });

        // Mise à jour de la navigation active
        this.updateActiveLink();
    }

    toggleMenu() {
        this.isOpen = !this.isOpen;
        this.nav.classList.toggle('nav--open', this.isOpen);
        this.toggle.setAttribute('aria-expanded', this.isOpen);
        
        if (this.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    closeMenu() {
        if (this.isOpen) {
            this.isOpen = false;
            this.nav.classList.remove('nav--open');
            this.toggle.setAttribute('aria-expanded', false);
            document.body.style.overflow = '';
        }
    }

    updateActiveLink() {
        const currentPath = window.location.pathname;
        
        this.links.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('nav__link--active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('nav__link--active');
                link.removeAttribute('aria-current');
            }
        });
    }
}

// Initialisation de la navigation
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
