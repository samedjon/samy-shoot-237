/**
 * Gestion de la musique de fond
 */

class AudioPlayer {
    constructor() {
        this.audio = new Audio('Music/Site Web sound.mp3');
        this.audio.loop = true;
        this.isMuted = true;
        
        this.createControl();
        this.initEventListeners();
    }

    createControl() {
        // Création du bouton de contrôle
        this.control = document.createElement('button');
        this.control.className = 'audio-control audio-control--muted';
        this.control.setAttribute('aria-label', 'Contrôle de la musique');
        
        // Création de l'icône
        this.control.innerHTML = `
            <svg class="audio-control__icon" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
        `;
        
        document.body.appendChild(this.control);
    }

    initEventListeners() {
        // Gestion du clic sur le contrôle
        this.control.addEventListener('click', () => this.toggleAudio());

        // Gestion de la fin de la vidéo d'intro
        document.addEventListener('videoended', () => {
            if (!this.isMuted) {
                this.audio.play();
            }
        });

        // Gestion de la visibilité de la page
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.audio.pause();
            } else if (!this.isMuted) {
                this.audio.play();
            }
        });

        // Gestion du volume au chargement de l'audio
        this.audio.addEventListener('canplaythrough', () => {
            this.audio.volume = 0.3; // Volume initial à 30%
        });
    }

    toggleAudio() {
        this.isMuted = !this.isMuted;
        this.control.classList.toggle('audio-control--muted', this.isMuted);

        if (this.isMuted) {
            this.audio.pause();
        } else {
            this.audio.play().catch(error => {
                console.log('Lecture audio impossible:', error);
                this.isMuted = true;
                this.control.classList.add('audio-control--muted');
            });
        }
    }
}

// Initialisation du lecteur audio
document.addEventListener('DOMContentLoaded', () => {
    new AudioPlayer();
});
