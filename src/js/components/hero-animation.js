/**
 * Gestion des animations du héros
 */

class HeroAnimation {
    constructor() {
        this.video = document.querySelector('.hero__video');
        this.content = document.querySelector('.hero__content');
        this.title = document.querySelector('.hero__title');
        this.subtitle = document.querySelector('.hero__subtitle');
        this.cta = document.querySelector('.hero__cta');
        
        this.hasAnimated = false;
        this.init();
    }

    init() {
        // Attendre la fin de la première lecture de la vidéo
        this.video.addEventListener('ended', () => {
            if (!this.hasAnimated) {
                this.startAnimation();
            }
        });

        // Fallback si la vidéo ne se charge pas
        this.video.addEventListener('error', () => {
            this.startAnimation();
        });

        // Démarrer l'animation après un délai si la vidéo ne se termine pas
        setTimeout(() => {
            if (!this.hasAnimated) {
                this.startAnimation();
            }
        }, 5000); // 5 secondes de délai
    }

    startAnimation() {
        this.hasAnimated = true;
        
        // Rendre le contenu visible
        this.content.classList.add('hero__content--visible');
        
        // Ajouter les classes d'animation
        requestAnimationFrame(() => {
            this.title.classList.add('hero__title--animated');
            this.subtitle.classList.add('hero__subtitle--animated');
            this.cta.classList.add('hero__cta--animated');
        });

        // Émettre un événement pour la gestion de l'audio
        document.dispatchEvent(new Event('videoended'));
    }
}

// Initialisation des animations du héros
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimation();
});
