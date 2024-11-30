// Configuration des services et tarifs
const PRICING_CONFIG = {
    photo: {
        title: 'Services Photo',
        icon: 'fa-camera',
        items: [
            {
                level: 'Niveau Économie',
                price: '20,000',
                unit: 'FCFA',
                subtitle: '3 photos / 8,000 FCFA (unité)',
                features: [
                    { text: 'Délai : 10 jours', icon: 'fa-clock' },
                    { text: 'Qualité basique', icon: 'fa-star-half-alt' },
                    { text: 'Solution économique pour des besoins simples', icon: 'fa-check' }
                ]
            },
            {
                level: 'Niveau Premium',
                price: '58,000',
                unit: 'FCFA',
                subtitle: '5 photos / 12,000 FCFA (unité)',
                features: [
                    { text: 'Délai : 5 jours', icon: 'fa-clock' },
                    { text: 'Bonne qualité', icon: 'fa-star' },
                    { text: 'Service personnalisé', icon: 'fa-user-tie' },
                    { text: 'Qualité professionnelle', icon: 'fa-certificate' }
                ],
                recommended: true
            },
            {
                level: 'Niveau Gold',
                price: '80,000',
                unit: 'FCFA',
                subtitle: '5 photos / 17,000 FCFA (unité)',
                features: [
                    { text: 'Délai : 2 jours', icon: 'fa-clock' },
                    { text: 'Qualité supérieure', icon: 'fa-star' },
                    { text: 'Créativité accrue', icon: 'fa-lightbulb' },
                    { text: 'Retouches avancées', icon: 'fa-magic' }
                ]
            },
            {
                level: 'Niveau Extra Gold',
                price: '100,000',
                unit: 'FCFA',
                subtitle: '4 photos / 25,000 FCFA (unité)',
                features: [
                    { text: 'Délai : Instantané', icon: 'fa-bolt' },
                    { text: 'Très haute qualité', icon: 'fa-crown' },
                    { text: 'Travail immersif', icon: 'fa-photo-video' },
                    { text: 'Service VIP pour artistes', icon: 'fa-star' }
                ]
            }
        ]
    },
    vidéo: {
        title: 'Services Vidéo',
        icon: 'fa-video',
        items: [
            {
                level: 'Niveau Économie',
                price: '60,000',
                unit: 'FCFA',
                subtitle: 'Forfait de base',
                features: [
                    { text: '2 heures de tournage', icon: 'fa-clock' },
                    { text: 'Délai : 20 jours', icon: 'fa-calendar-alt' },
                    { text: 'Qualité basique', icon: 'fa-star-half-alt' }
                ]
            },
            {
                level: 'Niveau Premium',
                price: '120,000',
                unit: 'FCFA',
                subtitle: 'Forfait professionnel',
                features: [
                    { text: '6 heures de tournage', icon: 'fa-clock' },
                    { text: 'Délai : 15 jours', icon: 'fa-calendar-alt' },
                    { text: 'Vidéo HD professionnelle', icon: 'fa-tv' },
                    { text: 'Service soigné', icon: 'fa-user-tie' }
                ],
                recommended: true
            },
            {
                level: 'Niveau Gold',
                price: '250,000',
                unit: 'FCFA',
                features: [
                    { text: 'Une journée de tournage', icon: 'fa-clock' },
                    { text: 'Délai : 1 mois', icon: 'fa-calendar-alt' },
                    { text: 'Vidéo professionnelle en 4K', icon: 'fa-tv' },
                    { text: 'Attention aux détails', icon: 'fa-search' }
                ]
            }
        ]
    },
    événements: {
        title: 'Services Événements',
        icon: 'fa-calendar-alt',
        items: [
            {
                level: 'Forfait Starter',
                price: '290,000',
                unit: 'FCFA',
                features: [
                    { text: 'Couverture photo et vidéo', icon: 'fa-camera' },
                    { text: 'Résumé vidéo', icon: 'fa-video' },
                    { text: 'Album de photos', icon: 'fa-book' }
                ]
            },
            {
                level: 'Forfait Premium',
                price: '400,000',
                unit: 'FCFA',
                features: [
                    { text: 'Couverture avec drone', icon: 'fa-plane' },
                    { text: 'Retouches avancées', icon: 'fa-magic' },
                    { text: 'Résumé vidéo professionnel', icon: 'fa-video' }
                ],
                recommended: true
            },
            {
                level: 'Forfait Gold',
                price: '600,000',
                unit: 'FCFA',
                features: [
                    { text: 'Couverture complète avec drone', icon: 'fa-plane' },
                    { text: 'Retouches avancées', icon: 'fa-magic' },
                    { text: 'Résumé vidéo cinématographique', icon: 'fa-video' },
                    { text: 'Albums imprimés', icon: 'fa-book' }
                ]
            }
        ]
    },
    design: {
        title: 'Services Design',
        icon: 'fa-palette',
        items: [
            {
                level: 'Niveau Économie',
                price: '15,000',
                unit: 'FCFA',
                features: [
                    { text: 'Délai : 10 jours', icon: 'fa-clock' },
                    { text: 'Qualité basique', icon: 'fa-star-half-alt' },
                    { text: 'Design simple et abordable', icon: 'fa-palette' }
                ]
            },
            {
                level: 'Niveau Premium',
                price: '30,000',
                unit: 'FCFA',
                features: [
                    { text: 'Délai : 7 jours', icon: 'fa-clock' },
                    { text: 'Design professionnel', icon: 'fa-palette' },
                    { text: 'Créativité maîtrisée', icon: 'fa-lightbulb' }
                ],
                recommended: true
            }
        ]
    },
    services: {
        title: 'Services Additionnels',
        icon: 'fa-plus-circle',
        items: [
            {
                level: 'Maquillage Artistique',
                features: [
                    { text: 'De base : 10,000 FCFA', icon: 'fa-paint-brush' },
                    { text: 'Avancé : 27,000 FCFA', icon: 'fa-star' }
                ]
            },
            {
                level: 'Animation Vidéo Logo & Flyer',
                features: [
                    { text: 'Forfait "Stars" : 20,000 FCFA', icon: 'fa-star' },
                    { text: 'Forfait "Premium" : 35,000 FCFA', icon: 'fa-award' },
                    { text: 'Forfait "Gold" : 59,000 FCFA', icon: 'fa-crown' },
                    { text: 'Forfait "Extra-Gold" : 65,000 FCFA', icon: 'fa-gem' }
                ]
            }
        ]
    },
    plus: {
        title: 'Autres Services',
        icon: 'fa-ellipsis-h',
        items: [
            {
                level: 'Service de Livraison Express',
                subtitle: 'Livraison 24-48h',
                price: '+25%',
                unit: 'du forfait',
                features: [
                    { text: 'Délai réduit de livraison', icon: 'fa-shipping-fast' },
                    { text: 'Applicable sur tous les forfaits', icon: 'fa-check-circle' }
                ]
            },
            {
                level: 'Retouches Supplémentaires',
                features: [
                    { text: '5,000 FCFA par photo', icon: 'fa-image' },
                    { text: '10,000 FCFA par minute de vidéo', icon: 'fa-film' }
                ]
            },
            {
                level: 'Séance Photo/Vidéo Additionnelle',
                price: '50,000',
                unit: 'FCFA',
                subtitle: '2 heures de shooting',
                features: [
                    { text: 'Séance supplémentaire', icon: 'fa-camera' },
                    { text: 'Occasion spéciale', icon: 'fa-star' }
                ]
            },
            {
                level: 'Albums Personnalisés',
                price: '30,000',
                unit: 'FCFA',
                subtitle: 'Prix de base',
                features: [
                    { text: 'Mise en page unique', icon: 'fa-book' },
                    { text: 'Design personnalisé', icon: 'fa-palette' }
                ]
            },
            {
                level: 'Impression Photos',
                features: [
                    { text: 'Format A4 : 2,500 FCFA', icon: 'fa-print' },
                    { text: 'Format A3 : 5,000 FCFA', icon: 'fa-print' }
                ]
            },
            {
                level: 'Photobooth Événementiel',
                price: '100,000',
                unit: 'FCFA',
                subtitle: 'Par événement',
                features: [
                    { text: 'Photos instantanées', icon: 'fa-camera-retro' },
                    { text: 'Installation complète', icon: 'fa-cogs' }
                ]
            },
            {
                level: 'Vidéo en Direct',
                price: '+50%',
                unit: 'du forfait',
                subtitle: 'Live Streaming',
                features: [
                    { text: 'Diffusion en direct', icon: 'fa-broadcast-tower' },
                    { text: 'Réseaux sociaux', icon: 'fa-share-alt' }
                ]
            },
            {
                level: 'Vidéo Teaser',
                price: '30,000',
                unit: 'FCFA',
                subtitle: 'Prix de base',
                features: [
                    { text: 'Montage moments forts', icon: 'fa-film' },
                    { text: 'Format court', icon: 'fa-cut' }
                ]
            },
            {
                level: 'Consultation Personnalisée',
                price: '10,000',
                unit: 'FCFA',
                subtitle: 'Par heure',
                features: [
                    { text: 'Planification détaillée', icon: 'fa-calendar' },
                    { text: 'Conseils personnalisés', icon: 'fa-comments' }
                ]
            }
        ]
    }
};

// Sélecteurs DOM
const pricingGrid = document.querySelector('.pricing-grid');
const categoryButtons = document.querySelectorAll('.pricing-category-btn');
const pricingHeader = document.querySelector('.pricing-header h2');

// État global avec gestion des animations
let currentCategory = 'photo';
let isAnimating = false;

// Fonction pour créer une carte de prix avec animations
function createPricingCard(item, index) {
    const delay = (index + 1) * 100;
    const card = document.createElement('div');
    card.className = `pricing-card${item.recommended ? ' recommended' : ''}`;
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', delay);

    card.innerHTML = `
        <h3>${item.level}</h3>
        <div class="price">
            ${item.price} <span class="unit">${item.unit}</span>
        </div>
        ${item.subtitle ? `<div class="price-details">${item.subtitle}</div>` : ''}
        <ul class="features">
            ${item.features.map(feature => `
                <li>
                    <i class="fas ${feature.icon}"></i>
                    <span>${feature.text}</span>
                </li>
            `).join('')}
        </ul>
        <a href="#contact" class="btn">
            <span>Réserver</span>
            <i class="fas fa-arrow-right"></i>
        </a>
    `;

    return card;
}

// Fonction pour mettre à jour la grille des prix avec animations
async function updatePricingGrid(category) {
    if (isAnimating) return;
    isAnimating = true;

    const config = PRICING_CONFIG[category];
    if (!config) {
        console.error(`Category ${category} not found in config`);
        isAnimating = false;
        return;
    }

    // Mise à jour du titre
    pricingHeader.innerHTML = `<i class="fas ${config.icon}"></i> ${config.title}`;

    // Animation de sortie
    const currentCards = pricingGrid.querySelectorAll('.pricing-card');
    const fadeOutPromises = Array.from(currentCards).map((card, index) => {
        return new Promise(resolve => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                resolve();
            }, index * 50);
        });
    });

    await Promise.all(fadeOutPromises);
    pricingGrid.innerHTML = '';

    // Création et animation des nouvelles cartes
    config.items.forEach((item, index) => {
        const card = createPricingCard(item, index);
        pricingGrid.appendChild(card);
    });

    // Animation d'entrée
    const newCards = pricingGrid.querySelectorAll('.pricing-card');
    newCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

    isAnimating = false;
}

// Gestionnaires d'événements
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (isAnimating) return;
        
        const category = button.textContent.trim().toLowerCase().split(' ')[0];
        if (category === currentCategory) return;

        // Animation des boutons
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.transform = 'scale(1)';
        });
        
        button.classList.add('active');
        button.style.transform = 'scale(1.05)';
        
        currentCategory = category;
        updatePricingGrid(category);
    });

    // Effets de survol des boutons
    button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('active')) {
            button.style.transform = 'scale(1.05)';
        }
    });

    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active')) {
            button.style.transform = 'scale(1)';
        }
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updatePricingGrid(currentCategory);
});
