// Configuration du portfolio
const PORTFOLIO_CONFIG = {
    wedding: {
        title: 'Mariage',
        items: [
            {
                id: 'wedding1',
                title: 'Mariage Traditionnel',
                category: 'wedding',
                image: '/images/portfolio/Mariage.jpg',
                description: 'Capture des moments précieux de votre cérémonie traditionnelle.'
            },
            {
                id: 'wedding2',
                title: 'Célébration de Mariage',
                category: 'wedding',
                image: '/images/portfolio/Mariage1.jpg',
                description: 'Photos élégantes de votre célébration de mariage.'
            },
            {
                id: 'wedding3',
                title: 'Mariage Civil',
                category: 'wedding',
                image: '/images/portfolio/Mariage3.jpg',
                description: 'Immortalisation de votre cérémonie civile.'
            },
            {
                id: 'wedding4',
                title: 'Portraits de Mariage',
                category: 'wedding',
                image: '/images/portfolio/Mariage4.jpg',
                description: 'Portraits élégants des mariés.'
            },
            {
                id: 'wedding5',
                title: 'Moments de Joie',
                category: 'wedding',
                image: '/images/portfolio/Mariage5.jpg',
                description: 'Capture des moments de joie et d\'émotion.'
            },
            {
                id: 'wedding6',
                title: 'Cérémonie Élégante',
                category: 'wedding',
                image: '/images/portfolio/Mariage6.jpg',
                description: 'Photos de votre cérémonie élégante.'
            },
            {
                id: 'wedding7',
                title: 'Union Sacrée',
                category: 'wedding',
                image: '/images/portfolio/Mariage7.jpg',
                description: 'Célébration de votre union sacrée.'
            },
            {
                id: 'wedding8',
                title: 'Moments Magiques',
                category: 'wedding',
                image: '/images/portfolio/Mariage8.jpg',
                description: 'Capture des moments magiques de votre mariage.'
            },
            {
                id: 'wedding9',
                title: 'Amour Éternel',
                category: 'wedding',
                image: '/images/portfolio/Mariage9.jpg',
                description: 'Témoignage de votre amour éternel.'
            }
        ]
    },
    cosmetic: {
        title: 'Cosmétique',
        items: [
            {
                id: 'cosm1',
                title: 'Beauté Naturelle',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique.jpg',
                description: 'Mise en valeur de la beauté naturelle avec un maquillage professionnel.'
            },
            {
                id: 'cosm2',
                title: 'Art du Maquillage',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique1.jpg',
                description: 'Expression artistique à travers le maquillage professionnel.'
            },
            {
                id: 'cosm3',
                title: 'Maquillage Élégant',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique2.jpg',
                description: 'Maquillage sophistiqué pour occasions spéciales.'
            },
            {
                id: 'cosm4',
                title: 'Look Naturel',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique3.jpg',
                description: 'Mise en valeur de la beauté naturelle.'
            },
            {
                id: 'cosm5',
                title: 'Glamour',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique4.jpg',
                description: 'Look glamour et sophistiqué.'
            },
            {
                id: 'cosm6',
                title: 'Style Unique',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique5.jpg',
                description: 'Création de looks uniques.'
            },
            {
                id: 'cosm7',
                title: 'Maquillage de Soirée',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique6.jpg',
                description: 'Maquillage élégant pour vos soirées.'
            },
            {
                id: 'cosm8',
                title: 'Beauty Shot',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique7.jpg',
                description: 'Photos beauté professionnelles.'
            },
            {
                id: 'cosm9',
                title: 'Maquillage Artistique',
                category: 'cosmetic',
                image: '/images/portfolio/Cosmétique8.jpg',
                description: 'Création artistique en maquillage.'
            }
        ]
    },
    creative: {
        title: 'Créatif',
        items: [
            {
                id: 'crea1',
                title: 'Mode Créative',
                category: 'creative',
                image: '/images/portfolio/CreatifDress1.jpg',
                description: 'Expression artistique à travers la mode.'
            },
            {
                id: 'crea2',
                title: 'Style Unique',
                category: 'creative',
                image: '/images/portfolio/CreatifDress2.jpg',
                description: 'Création de looks uniques et innovants.'
            },
            {
                id: 'crea3',
                title: 'Art Mode',
                category: 'creative',
                image: '/images/portfolio/CreatifDress3.jpg',
                description: 'Fusion entre art et mode.'
            },
            {
                id: 'crea4',
                title: 'Expression Libre',
                category: 'creative',
                image: '/images/portfolio/CreatifDress4.jpg',
                description: 'Liberté d\'expression artistique.'
            },
            {
                id: 'crea5',
                title: 'Mode Avant-garde',
                category: 'creative',
                image: '/images/portfolio/CreatifDress5.jpg',
                description: 'Style avant-gardiste et créatif.'
            },
            {
                id: 'crea6',
                title: 'Vision Artistique',
                category: 'creative',
                image: '/images/portfolio/CreatifDress6.jpg',
                description: 'Expression d\'une vision unique.'
            },
            {
                id: 'crea7',
                title: 'Mode Conceptuelle',
                category: 'creative',
                image: '/images/portfolio/CreatifDress7.jpg',
                description: 'Photos de mode conceptuelle.'
            },
            {
                id: 'crea8',
                title: 'Innovation Mode',
                category: 'creative',
                image: '/images/portfolio/CreatifDress8.jpg',
                description: 'Innovation dans la photographie de mode.'
            },
            {
                id: 'crea9',
                title: 'Art Fashion',
                category: 'creative',
                image: '/images/portfolio/CreatifDress9.jpg',
                description: 'L\'art dans la mode.'
            }
        ]
    },
    birthday: {
        title: 'Anniversaire',
        items: [
            {
                id: 'hbd1',
                title: 'Moments Précieux',
                category: 'birthday',
                image: '/images/portfolio/HBD1.jpg',
                description: 'Capture des moments inoubliables.'
            },
            {
                id: 'hbd2',
                title: 'Célébration Spéciale',
                category: 'birthday',
                image: '/images/portfolio/HBD2.jpg',
                description: 'Photos mémorables de célébration.'
            },
            {
                id: 'hbd3',
                title: 'Fête d\'Anniversaire',
                category: 'birthday',
                image: '/images/portfolio/HBD3.jpg',
                description: 'Ambiance festive d\'anniversaire.'
            },
            {
                id: 'hbd4',
                title: 'Joie et Bonheur',
                category: 'birthday',
                image: '/images/portfolio/HBD4.jpg',
                description: 'Moments de joie partagée.'
            },
            {
                id: 'hbd5',
                title: 'Souvenirs Précieux',
                category: 'birthday',
                image: '/images/portfolio/HBD5.jpg',
                description: 'Création de souvenirs durables.'
            },
            {
                id: 'hbd6',
                title: 'Moments Magiques',
                category: 'birthday',
                image: '/images/portfolio/HBD6.jpg',
                description: 'La magie des anniversaires.'
            },
            {
                id: 'hbd7',
                title: 'Célébration Joyeuse',
                category: 'birthday',
                image: '/images/portfolio/HBD7.jpg',
                description: 'Joie des célébrations.'
            },
            {
                id: 'hbd8',
                title: 'Fête Mémorable',
                category: 'birthday',
                image: '/images/portfolio/HBD8.jpg',
                description: 'Souvenirs de fête inoubliables.'
            },
            {
                id: 'hbd9',
                title: 'Moments de Partage',
                category: 'birthday',
                image: '/images/portfolio/HBD9.jpg',
                description: 'Partage de moments spéciaux.'
            }
        ]
    },
    lingerie: {
        title: 'Lingerie',
        items: [
            {
                id: 'ling1',
                title: 'Élégance Intime',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie1.jpg',
                description: 'Photos de lingerie élégantes et professionnelles.'
            },
            {
                id: 'ling2',
                title: 'Style Raffiné',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie2.jpg',
                description: 'Mise en valeur de la beauté et du raffinement.'
            },
            {
                id: 'ling3',
                title: 'Sensualité',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie3.jpg',
                description: 'Photos sensuelles et élégantes.'
            },
            {
                id: 'ling4',
                title: 'Érotisme Chic',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie4.jpg',
                description: 'Érotisme raffiné et élégant.'
            },
            {
                id: 'ling5',
                title: 'Féminité',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie5.jpg',
                description: 'Mise en valeur de la féminité.'
            },
            {
                id: 'ling6',
                title: 'Séduction',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie6.jpg',
                description: 'Photos de séduction élégantes.'
            },
            {
                id: 'ling7',
                title: 'Intimité',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie7.jpg',
                description: 'Moments d\'intimité capturés.'
            },
            {
                id: 'ling8',
                title: 'Élégance Féminine',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie8.jpg',
                description: 'Élégance et féminité.'
            },
            {
                id: 'ling9',
                title: 'Sensualité Élégante',
                category: 'lingerie',
                image: '/images/portfolio/Lingerie9.jpg',
                description: 'Sensualité élégante et raffinée.'
            }
        ]
    },
    evening: {
        title: 'Robe de Soirée',
        items: [
            {
                id: 'soire1',
                title: 'Glamour du Soir',
                category: 'evening',
                image: '/images/portfolio/SoireDress1.jpg',
                description: 'Élégance et sophistication en robe de soirée.'
            },
            {
                id: 'soire2',
                title: 'Soirée de Gala',
                category: 'evening',
                image: '/images/portfolio/SoireDress2.jpg',
                description: 'Photos de prestige pour vos événements de gala.'
            },
            {
                id: 'soire3',
                title: 'Robe de Cérémonie',
                category: 'evening',
                image: '/images/portfolio/SoireDress3.jpg',
                description: 'Robes de cérémonie élégantes.'
            },
            {
                id: 'soire4',
                title: 'Élégance de Soirée',
                category: 'evening',
                image: '/images/portfolio/SoireDress4.jpg',
                description: 'Élégance et sophistication pour vos soirées.'
            },
            {
                id: 'soire5',
                title: 'Glamour Élégant',
                category: 'evening',
                image: '/images/portfolio/SoireDress5.jpg',
                description: 'Glamour élégant pour vos événements.'
            },
            {
                id: 'soire6',
                title: 'Robe de Mariée',
                category: 'evening',
                image: '/images/portfolio/SoireDress6.jpg',
                description: 'Robes de mariée élégantes et uniques.'
            },
            {
                id: 'soire7',
                title: 'Soirée Chic',
                category: 'evening',
                image: '/images/portfolio/SoireDress7.jpg',
                description: 'Photos de soirée chic et élégantes.'
            },
            {
                id: 'soire8',
                title: 'Événement de Gala',
                category: 'evening',
                image: '/images/portfolio/SoireDress8.jpg',
                description: 'Photos de prestige pour vos événements de gala.'
            },
            {
                id: 'soire9',
                title: 'Robe de Soirée Élégante',
                category: 'evening',
                image: '/images/portfolio/SoireDress9.jpg',
                description: 'Robes de soirée élégantes et uniques.'
            }
        ]
    },
    sport: {
        title: 'Sport',
        items: [
            {
                id: 'sport1',
                title: 'Dynamisme Sportif',
                category: 'sport',
                image: '/images/portfolio/Sport1.jpg',
                description: 'Capture de l\'énergie et du dynamisme sportif.'
            },
            {
                id: 'sport2',
                title: 'Performance Athlétique',
                category: 'sport',
                image: '/images/portfolio/Sport2.jpg',
                description: 'Photos mettant en valeur vos performances sportives.'
            },
            {
                id: 'sport3',
                title: 'Action Sportive',
                category: 'sport',
                image: '/images/portfolio/Sport3.jpg',
                description: 'Capture de l\'action sportive.'
            },
            {
                id: 'sport4',
                title: 'Énergie Sportive',
                category: 'sport',
                image: '/images/portfolio/Sport4.jpg',
                description: 'Énergie et dynamisme sportif.'
            },
            {
                id: 'sport5',
                title: 'Athlétisme',
                category: 'sport',
                image: '/images/portfolio/Sport5.jpg',
                description: 'Photos d\'athlétisme et de performance.'
            },
            {
                id: 'sport6',
                title: 'Sport Extrême',
                category: 'sport',
                image: '/images/portfolio/Sport6.jpg',
                description: 'Photos de sports extrêmes et d\'action.'
            },
            {
                id: 'sport7',
                title: 'Dynamisme et Énergie',
                category: 'sport',
                image: '/images/portfolio/Sport7.jpg',
                description: 'Capture du dynamisme et de l\'énergie sportive.'
            },
            {
                id: 'sport8',
                title: 'Performance et Action',
                category: 'sport',
                image: '/images/portfolio/Sport8.jpg',
                description: 'Photos de performance et d\'action sportive.'
            },
            {
                id: 'sport9',
                title: 'Énergie et Mouvement',
                category: 'sport',
                image: '/images/portfolio/Sport9.jpg',
                description: 'Capture de l\'énergie et du mouvement sportif.'
            }
        ]
    },
    corporate: {
        title: 'Corporate',
        items: [
            {
                id: 'corp1',
                title: 'Portrait Professionnel',
                category: 'corporate',
                image: '/images/portfolio/corporate1.jpg',
                description: 'Photos professionnelles pour votre image corporate.'
            },
            {
                id: 'corp2',
                title: 'Image d\'Entreprise',
                category: 'corporate',
                image: '/images/portfolio/corporate2.jpg',
                description: 'Mise en valeur de votre identité professionnelle.'
            },
            {
                id: 'corp3',
                title: 'Équipe et Collaboration',
                category: 'corporate',
                image: '/images/portfolio/corporate3.jpg',
                description: 'Photos de votre équipe et de la collaboration.'
            },
            {
                id: 'corp4',
                title: 'Leadership et Direction',
                category: 'corporate',
                image: '/images/portfolio/corporate4.jpg',
                description: 'Photos de leadership et de direction.'
            },
            {
                id: 'corp5',
                title: 'Innovation et Créativité',
                category: 'corporate',
                image: '/images/portfolio/corporate5.jpg',
                description: 'Photos d\'innovation et de créativité.'
            },
            {
                id: 'corp6',
                title: 'Événements et Conférences',
                category: 'corporate',
                image: '/images/portfolio/corporate6.jpg',
                description: 'Photos d\'événements et de conférences.'
            },
            {
                id: 'corp7',
                title: 'Réunions et Séminaires',
                category: 'corporate',
                image: '/images/portfolio/corporate7.jpg',
                description: 'Photos de réunions et de séminaires.'
            },
            {
                id: 'corp8',
                title: 'Communication et Présentation',
                category: 'corporate',
                image: '/images/portfolio/corporate8.jpg',
                description: 'Photos de communication et de présentation.'
            },
            {
                id: 'corp9',
                title: 'Identité Visuelle',
                category: 'corporate',
                image: '/images/portfolio/corporate9.jpg',
                description: 'Mise en valeur de votre identité visuelle.'
            }
        ]
    },
    pregnancy: {
        title: 'Grossesse',
        items: [
            {
                id: 'preg1',
                title: 'Maternité',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse1.jpg',
                description: 'Photos artistiques de maternité.'
            },
            {
                id: 'preg2',
                title: 'Attente Heureuse',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse2.jpg',
                description: 'Immortaliser les moments précieux de votre grossesse.'
            },
            {
                id: 'preg3',
                title: 'Grossesse et Maternité',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse3.jpg',
                description: 'Photos de grossesse et de maternité.'
            },
            {
                id: 'preg4',
                title: 'Moments de Joie',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse4.jpg',
                description: 'Capture des moments de joie et d\'émotion.'
            },
            {
                id: 'preg5',
                title: 'Bébé à Venir',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse5.jpg',
                description: 'Photos de bébé à venir.'
            },
            {
                id: 'preg6',
                title: 'Grossesse et Féminité',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse6.jpg',
                description: 'Mise en valeur de la féminité pendant la grossesse.'
            },
            {
                id: 'preg7',
                title: 'Attente et Espoir',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse7.jpg',
                description: 'Photos d\'attente et d\'espoir.'
            },
            {
                id: 'preg8',
                title: 'Maternité et Amour',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse8.jpg',
                description: 'Photos de maternité et d\'amour.'
            },
            {
                id: 'preg9',
                title: 'Grossesse et Bonheur',
                category: 'pregnancy',
                image: '/images/portfolio/grossesse9.jpg',
                description: 'Photos de grossesse et de bonheur.'
            }
        ]
    }
};

// État global
let currentCategory = 'all';
let currentItems = [];
let currentIndex = 0;
let displayLimit = 9; // 3 lignes de 3 images
let allItems = [];

// Éléments DOM
const portfolioGrid = document.getElementById('portfolio-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const modal = document.getElementById('portfolio-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const loadMoreBtn = document.getElementById('load-more-btn');

// Fonctions utilitaires
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getAllItems() {
    return shuffleArray(Object.values(PORTFOLIO_CONFIG).reduce((acc, category) => {
        return [...acc, ...category.items];
    }, []));
}

function getItemsByCategory(category) {
    return category === 'all' 
        ? getAllItems()
        : shuffleArray([...PORTFOLIO_CONFIG[category]?.items || []]);
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.dataset.category = item.category;
    div.dataset.id = item.id;

    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-item-overlay">
            <h3 class="portfolio-item-title">${item.title}</h3>
            <p class="portfolio-item-category">${PORTFOLIO_CONFIG[item.category].title}</p>
        </div>
    `;

    div.addEventListener('click', () => openModal(item));
    return div;
}

function updateGrid(category, resetLimit = true) {
    if (resetLimit) {
        displayLimit = 9;
    }
    
    currentCategory = category;
    allItems = getItemsByCategory(category);
    currentItems = allItems.slice(0, displayLimit);
    
    portfolioGrid.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    currentItems.forEach(item => {
        fragment.appendChild(createPortfolioItem(item));
    });
    
    portfolioGrid.appendChild(fragment);
    
    // Afficher ou masquer le bouton "Voir plus"
    loadMoreBtn.classList.toggle('hidden', allItems.length <= displayLimit);
}

function loadMore() {
    displayLimit += 9;
    updateGrid(currentCategory, false);
}

// Gestion du modal
function openModal(item) {
    currentIndex = currentItems.findIndex(i => i.id === item.id);
    updateModal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalHandler() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModal() {
    const item = currentItems[currentIndex];
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    
    // Mise à jour des boutons de navigation
    prevBtn.style.display = currentIndex > 0 ? '' : 'none';
    nextBtn.style.display = currentIndex < currentItems.length - 1 ? '' : 'none';
}

function navigateModal(direction) {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < currentItems.length) {
        currentIndex = newIndex;
        updateModal();
    }
}

// Event Listeners
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        updateGrid(button.dataset.category);
    });
});

loadMoreBtn.addEventListener('click', loadMore);

closeModal.addEventListener('click', closeModalHandler);
prevBtn.addEventListener('click', () => navigateModal(-1));
nextBtn.addEventListener('click', () => navigateModal(1));

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

// Navigation au clavier
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    switch(e.key) {
        case 'Escape':
            closeModalHandler();
            break;
        case 'ArrowLeft':
            navigateModal(-1);
            break;
        case 'ArrowRight':
            navigateModal(1);
            break;
    }
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    updateGrid('all');
});
