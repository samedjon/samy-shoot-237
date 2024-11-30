/**
 * Utilitaires généraux pour l'application
 */

// Détection du défilement pour l'en-tête
export function handleScroll(header) {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('header--scrolled', scrolled);
}

// Animation au défilement pour les éléments
export function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
}

// Défilement doux vers une ancre
export function smoothScroll(target) {
    const element = document.querySelector(target);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Gestion des formulaires
export function handleForm(form, callback) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            await callback(data);
            form.reset();
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error);
        }
    });
}

// Utilitaire de validation d'email
export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Gestion du mode sombre
export function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const stored = localStorage.getItem('darkMode');

    if (stored) {
        document.documentElement.classList.toggle('dark-mode', stored === 'true');
    } else {
        document.documentElement.classList.toggle('dark-mode', prefersDark.matches);
    }

    prefersDark.addEventListener('change', (e) => {
        if (!stored) {
            document.documentElement.classList.toggle('dark-mode', e.matches);
        }
    });
}

// Debounce pour les événements fréquents
export function debounce(func, wait) {
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
