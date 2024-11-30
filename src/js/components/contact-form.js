// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }

    // Animation des étiquettes flottantes
    const floatingInputs = document.querySelectorAll('.floating-label input, .floating-label textarea');
    floatingInputs.forEach(input => {
        // Gestion de l'état initial
        if (input.value) {
            input.classList.add('has-value');
        }

        // Gestion des événements
        input.addEventListener('focus', () => {
            input.classList.add('is-focused');
        });

        input.addEventListener('blur', () => {
            input.classList.remove('is-focused');
            if (input.value) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });
});

async function handleSubmit(event) {
    event.preventDefault();

    // Récupération des données du formulaire
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Validation des données
    if (!validateForm(data)) {
        return;
    }

    // Animation du bouton
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    try {
        // Simulation d'envoi (à remplacer par votre API)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Succès
        showNotification('Message envoyé avec succès !', 'success');
        event.target.reset();

    } catch (error) {
        // Erreur
        showNotification('Erreur lors de l\'envoi du message. Veuillez réessayer.', 'error');
        console.error('Erreur:', error);

    } finally {
        // Restauration du bouton
        submitButton.disabled = false;
        submitButton.innerHTML = '<span class="btn-text">Envoyer le message</span><i class="fas fa-paper-plane"></i>';
    }
}

function validateForm(data) {
    const errors = [];

    // Validation du nom
    if (!data.name || data.name.length < 2) {
        errors.push('Le nom doit contenir au moins 2 caractères');
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        errors.push('Veuillez entrer une adresse email valide');
    }

    // Validation du service
    if (!data.service) {
        errors.push('Veuillez sélectionner un service');
    }

    // Validation du message
    if (!data.message || data.message.length < 10) {
        errors.push('Le message doit contenir au moins 10 caractères');
    }

    // Affichage des erreurs
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }

    return true;
}

function showNotification(message, type = 'info') {
    // Création de la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <p>${message}</p>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Ajout au DOM
    document.body.appendChild(notification);

    // Animation d'entrée
    setTimeout(() => notification.classList.add('show'), 10);

    // Fermeture automatique
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Gestion du bouton de fermeture
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
}

// Export des fonctions pour les tests
export { validateForm, showNotification };
