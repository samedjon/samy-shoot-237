// Configuration des services
const SERVICES_CONFIG = {
    photo: {
        title: 'Services Photo',
        services: [
            {
                id: 1,
                name: "Photographie par Drone",
                price: "50000",
                description: "Capturez des vues aériennes spectaculaires pour vos événements ou projets immobiliers.",
                category: "photo",
                features: [
                    "Prises de vue aériennes HD",
                    "Couverture d'événements",
                    "Photos immobilières",
                    "Suivi de chantier"
                ],
                cardImage: "images/services/Drone_servis1.jpg",
                detailImage: "images/services/Drone_servis2.jpg",
                details: [
                    "Prises de vue aériennes HD",
                    "Couverture d'événements",
                    "Photos immobilières",
                    "Suivi de chantier"
                ]
            },
            {
                id: 2,
                name: "Mariage Complet",
                price: "250000",
                description: "Un service complet pour immortaliser votre journée spéciale, de la préparation jusqu'à la réception.",
                category: "photo",
                features: [
                    "Préparatifs des mariés",
                    "Cérémonie civile/religieuse",
                    "Séance couple",
                    "Réception et soirée"
                ],
                cardImage: "images/services/MariageComplet1.jpg",
                detailImage: "images/services/MariageComplet2.jpg",
                details: [
                    "Préparatifs des mariés",
                    "Cérémonie civile/religieuse",
                    "Séance couple",
                    "Réception et soirée"
                ]
            },
            {
                id: 3,
                name: "Album Photo Premium",
                price: "150000",
                description: "Création d'albums photo professionnels avec une qualité d'impression exceptionnelle.",
                category: "photo",
                features: [
                    "Design personnalisé",
                    "Papier premium",
                    "Retouches avancées",
                    "Plusieurs formats"
                ],
                cardImage: "images/services/AlbumPhotoPremium1.jpg",
                detailImage: "images/services/AlbumPhotoPremium2.jpg",
                details: [
                    "Design personnalisé",
                    "Papier premium",
                    "Retouches avancées",
                    "Plusieurs formats"
                ]
            },
            {
                id: 4,
                name: "Book Mode Pro",
                price: "100000",
                description: "Séances photo professionnelles pour mannequins, lookbooks et catalogues de mode.",
                category: "photo",
                features: [
                    "Studio professionnel",
                    "Éclairage adapté",
                    "Direction artistique",
                    "Retouches avancées"
                ],
                cardImage: "images/services/BookModePro1.jpg",
                detailImage: "images/services/BookModePro2.jpg",
                details: [
                    "Studio professionnel",
                    "Éclairage adapté",
                    "Direction artistique",
                    "Retouches avancées"
                ]
            },
            {
                id: 5,
                name: "Portrait Minute",
                price: "75000",
                description: "Service rapide de portraits professionnels pour CV, réseaux sociaux ou documents officiels.",
                category: "photo",
                features: [
                    "Photos d'identité",
                    "Portrait professionnel",
                    "Retouches simples",
                    "Fichiers HD"
                ],
                cardImage: "images/services/PortraitMinute1.jpg",
                detailImage: "images/services/PortraitMinute2.jpg",
                details: [
                    "Photos d'identité",
                    "Portrait professionnel",
                    "Retouches simples",
                    "Fichiers HD"
                ]
            },
            {
                id: 6,
                name: "Retouche Express",
                price: "35000",
                description: "Service de retouche photo rapide et professionnel pour sublimer vos images.",
                category: "photo",
                features: [
                    "Correction couleurs",
                    "Retouche beauté",
                    "Recadrage pro",
                    "Format web/print"
                ],
                cardImage: "images/services/RetoucheExpress1.jpg",
                detailImage: "images/services/RetoucheExpress2.jpg",
                details: [
                    "Correction couleurs",
                    "Retouche beauté",
                    "Recadrage pro",
                    "Format web/print"
                ]
            }
        ]
    },
    video: {
        title: 'Services Vidéo',
        services: [
            {
                id: 7,
                name: "Clip Musical",
                price: "200000",
                description: "Production complète de clips musicaux professionnels.",
                category: "video",
                features: [
                    "Scénarisation",
                    "Tournage HD/4K",
                    "Montage pro",
                    "Étalonnage"
                ],
                cardImage: "images/services/ClipMusical1.jpg",
                detailImage: "images/services/ClipMusical2.jpg",
                details: [
                    "Scénarisation",
                    "Tournage HD/4K",
                    "Montage pro",
                    "Étalonnage"
                ]
            }
        ]
    },
    impression: {
        title: 'Services Impression',
        services: [
            {
                id: 8,
                name: "Impression Grand Format",
                price: "75000",
                description: "Service d'impression haute qualité pour vos grands formats.",
                category: "impression",
                features: [
                    "Qualité photo",
                    "Grands formats",
                    "Supports variés",
                    "Finitions pro"
                ],
                cardImage: "images/services/ImpressionGrandFormat1.jpg",
                detailImage: "images/services/ImpressionGrandFormat2.jpg",
                details: [
                    "Qualité photo",
                    "Grands formats",
                    "Supports variés",
                    "Finitions pro"
                ]
            }
        ]
    },
    web: {
        title: 'Services Web',
        services: [
            {
                id: 9,
                name: "Web Pro",
                price: "500000",
                description: "Création de sites web professionnels sur mesure pour votre entreprise ou votre marque personnelle.",
                category: "web",
                features: [
                    "Design moderne et responsive",
                    "Optimisation SEO",
                    "Intégration de contenu multimédia",
                    "Formulaires de contact",
                    "Panel d'administration"
                ],
                cardImage: "images/services/WebPro1.jpg",
                detailImage: "images/services/WebPro2.jpg",
                details: [
                    "Design personnalisé et responsive pour tous les appareils",
                    "Optimisation pour les moteurs de recherche (SEO)",
                    "Intégration de vos contenus photos et vidéos",
                    "Formulaires de contact et système de messagerie",
                    "Panel d'administration pour gérer votre contenu",
                    "Formation à l'utilisation du site",
                    "Support technique pendant 3 mois",
                    "Hébergement et nom de domaine inclus pour la première année"
                ]
            }
        ]
    }
};

class ServicesManager {
    constructor() {
        this.currentDetails = null;
        this.services = [];
        this.init();
        this.initSmoothScroll();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize());
        } else {
            this.initialize();
        }
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initialize() {
        try {
            console.log('Initializing ServicesManager...');
            this.servicesGrid = document.querySelector('.services__grid');
            this.categoryButtons = document.querySelectorAll('.services__category-btn');
            
            if (!this.servicesGrid || !this.categoryButtons) {
                throw new Error('Required DOM elements not found');
            }

            // Initialiser les écouteurs d'événements
            this.setupEventListeners();
            
            // Charger tous les services par défaut
            this.loadServices('all');
            
        } catch (error) {
            console.error('Error initializing ServicesManager:', error);
            this.showErrorMessage('Une erreur est survenue lors de l\'initialisation');
        }
    }

    setupEventListeners() {
        // Gestionnaire pour les boutons de catégorie
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                this.loadServices(category);
                
                // Mettre à jour l'état actif des boutons
                this.categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });

        // Gestionnaire global pour la touche Échap
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentDetails) {
                this.hideServiceDetails();
            }
        });
    }

    loadServices(category = 'all') {
        try {
            let services = [];
            
            if (category === 'all') {
                // Combiner tous les services de toutes les catégories
                Object.values(SERVICES_CONFIG).forEach(categoryData => {
                    if (categoryData.services) {
                        services = services.concat(categoryData.services);
                    }
                });
            } else {
                // Charger les services de la catégorie spécifique
                const categoryData = Object.values(SERVICES_CONFIG).find(cat => 
                    cat.services && cat.services.some(service => service.category === category)
                );
                if (categoryData) {
                    services = categoryData.services.filter(service => service.category === category);
                }
            }

            this.displayServices(services);
        } catch (error) {
            console.error('Error loading services:', error);
            this.showErrorMessage('Erreur lors du chargement des services');
        }
    }

    displayServices(services) {
        if (!this.servicesGrid) return;
        
        // Vider la grille
        this.servicesGrid.innerHTML = '';
        
        // Créer un fragment pour optimiser les performances
        const fragment = document.createDocumentFragment();
        const template = document.getElementById('serviceCardTemplate');
        
        services.forEach(service => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector('.service-card');
            
            // Configurer l'arrière-plan
            const background = card.querySelector('.service-card__background');
            if (background && service.cardImage) {
                background.style.backgroundImage = `url(${service.cardImage})`;
            }
            
            // Configurer le titre
            const titleElement = card.querySelector('.service-card__title');
            if (titleElement) {
                titleElement.textContent = service.name;
            }
            
            // Ajouter l'événement de clic
            card.addEventListener('click', () => this.showServiceDetails(service));
            
            fragment.appendChild(card);
        });
        
        this.servicesGrid.appendChild(fragment);
    }

    showServiceDetails(service) {
        const detailsTemplate = document.querySelector('#serviceDetailsTemplate');
        const detailsElement = detailsTemplate.content.cloneNode(true).querySelector('.service-details');
        
        // Set background image
        const backgroundElement = detailsElement.querySelector('.service-details__background');
        console.log('Service detail image URL:', service.detailImage); // Debug log
        
        if (backgroundElement) {
            backgroundElement.style.backgroundImage = `url(${service.detailImage})`;
            console.log('Background image style set to:', backgroundElement.style.backgroundImage); // Debug log
        } else {
            console.error('Background element not found!'); // Debug log
        }
        
        // Set content
        detailsElement.querySelector('.service-details__title').textContent = service.name;
        detailsElement.querySelector('.service-details__price').textContent = `${service.price} FCFA`;
        detailsElement.querySelector('.service-details__description').textContent = service.description;
        
        // Set features
        const featuresList = detailsElement.querySelector('.service-details__features');
        service.details.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Add close button event
        const closeButton = detailsElement.querySelector('.service-details__close');
        closeButton.addEventListener('click', () => {
            detailsElement.classList.remove('active');
            setTimeout(() => detailsElement.remove(), 300);
        });
        
        // Add CTA button event
        const ctaButton = detailsElement.querySelector('.service-details__cta');
        ctaButton.addEventListener('click', () => {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            detailsElement.classList.remove('active');
            setTimeout(() => detailsElement.remove(), 300);
        });
        
        // Add to DOM and animate
        document.body.appendChild(detailsElement);
        
        // Force a reflow to ensure the background image is applied
        backgroundElement.offsetHeight;
        
        requestAnimationFrame(() => {
            detailsElement.classList.add('active');
            // Double-check background image after animation
            console.log('Final background image style:', backgroundElement.style.backgroundImage); // Debug log
        });
    }

    hideServiceDetails() {
        if (this.currentDetails) {
            this.currentDetails.classList.remove('active');
            setTimeout(() => {
                this.currentDetails.remove();
                this.currentDetails = null;
            }, 500);
        }
    }

    showErrorMessage(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'services__error';
        errorDiv.textContent = message;
        
        if (this.servicesGrid) {
            this.servicesGrid.appendChild(errorDiv);
            setTimeout(() => errorDiv.remove(), 5000);
        }
    }
}

// Initialisation
new ServicesManager();
