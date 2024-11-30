// Contact Form Handling
export class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.setupFormHandling();
        this.setupFloatingLabels();
    }

    setupFormHandling() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(this.form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };

            // Validate form data
            if (!this.validateForm(data)) {
                return;
            }

            try {
                // Show loading state
                this.setLoadingState(true);
                
                // Simulate sending data (replace with actual API call)
                await this.simulateApiCall(data);
                
                // Show success message
                this.showNotification('Message envoyé avec succès !', 'success');
                
                // Reset form
                this.form.reset();
            } catch (error) {
                this.showNotification('Erreur lors de l\'envoi du message. Veuillez réessayer.', 'error');
            } finally {
                this.setLoadingState(false);
            }
        });
    }

    setupFloatingLabels() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Set initial state
            if (input.value) {
                input.classList.add('has-value');
            }

            // Handle input changes
            input.addEventListener('input', () => {
                if (input.value) {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            });
        });
    }

    validateForm(data) {
        // Name validation
        if (!data.name.trim()) {
            this.showNotification('Veuillez entrer votre nom', 'error');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showNotification('Veuillez entrer une adresse email valide', 'error');
            return false;
        }

        // Phone validation
        const phoneRegex = /^\+?[0-9]{8,}$/;
        if (!phoneRegex.test(data.phone)) {
            this.showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
            return false;
        }

        // Service validation
        if (!data.service) {
            this.showNotification('Veuillez sélectionner un service', 'error');
            return false;
        }

        // Message validation
        if (!data.message.trim()) {
            this.showNotification('Veuillez entrer votre message', 'error');
            return false;
        }

        return true;
    }

    setLoadingState(isLoading) {
        const submitBtn = this.form.querySelector('.submit-btn');
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
        } else {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Envoyer';
        }
    }

    showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Add notification to page
        document.body.appendChild(notification);

        // Remove notification after delay
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    async simulateApiCall(data) {
        // Simulate API delay
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});
