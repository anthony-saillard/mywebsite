export const projects = {
    professional: [
        {
            id: 1,
            image: 'src/projects/professional/healabs/img.png',
            title: "Alternance - Développeur Front-End - Healabs",
            category: "Expérience professionnelle / 2024-2025",
            description: "Cette alternance chez Healabs, éditeur de logiciels de télésurveillance médicale, m’a permis de participer au développement et à l’amélioration de l’interface de leur application ApTeleCare. J’ai notamment corrigé les défauts du mode sombre, retravaillé l’interface des notifications interactives ainsi que celle de la page de validation de contenu. J’ai également développé un module de gestion des prescriptions médicales et conçu un système de notes de mise à jour destiné aux professionnels de santé.",
            technologies: [
                'Vue.js', 'Quasar', 'JavaScript', 'SCSS', 'UI / UX', 'PHP', 'UNIX', 'SQL', 'Expérience utilisateur'
            ],
            links: []
        },
        {
            id: 2,
            image: 'src/projects/professional/gravure/img.png',
            title: "Stage (11 semaines) puis CDD (2 semaines) - Développeur Web - Gravure et tampon",
            category: "Expérience professionnelle / 2024",
            description: "J’ai assuré la maintenance et l’évolution de deux sites web développés en PHP, HTML et CSS. J’ai conçu puis intégré un système de sélection de points relais, en réalisant d’abord la maquette sur Figma, avant de l’implémenter techniquement. J’ai également apporté diverses modifications sur des fonctionnalités existantes et mené ces missions en autonomie.",
            technologies: [
                'PHP', 'HTML', 'CSS', 'Figma', 'Intégration', 'Maintenance'
            ],
            links: [
                {
                    type: 'mockup',
                    url: 'src/projects/professional/gravure/maquette.pdf',
                    label: 'Maquettes et résultats',
                    icon: 'src/svg/logo/Figma.svg',
                    visible: true
                }
            ]
        }
    ],
    study: [
        {
            id: 1,
            image: 'src/projects/study/qfqq/img.png',
            title: "Application de gestion d’horaires enseignants",
            category: "Projet universitaire / 2024-2025",
            description: "Lors de ce projet en groupe, j’ai mis en place un environnement Docker intégrant le back-end, le front-end et la base de données. J’ai également conçu les maquettes UI sur Figma, puis développé le front-end de l’application en Vue.js avec le framework Quasar.",
            technologies: [
                'Docker', 'Figma', 'Vue.js', 'Quasar', 'PostgreSQL'
            ],
            links: [
                {
                    type: 'mockup',
                    url: 'src/projects/study/qfqq/maquette.pdf',
                    label: 'Maquette',
                    icon: 'src/svg/logo/Figma.svg',
                    visible: true
                }
            ]
        },
        {
            id: 2,
            image: 'src/projects/study/valbio/img.png',
            title: "Création d'une application web (Valbio)",
            category: "Projet d'étude / 2023-2024",
            description: "Nous avons développé une application web pour un laboratoire, destinée à permettre au personnel administratif et médical de gérer les patients, créer des ordonnances et suivre différentes tâches. J’ai réalisé la maquette, puis développé le front-end en HTML/CSS et JavaScript. Ainsi que le back-end en PHP avec l'aide de mes camarades.",
            technologies: [
                'HTML', 'CSS', 'PHP (POO)', 'SQL', 'JS (AJAX)', 'Git',
                'Méthodes SCRUM', 'Maquettage', 'Cahiers des charges', 'Note de cadrage'
            ],
            links: [
                {
                    type: 'mockup',
                    url: 'src/projects/study/valbio/maquette.pdf',
                    label: 'Maquette',
                    icon: 'src/svg/logo/Figma.svg',
                    visible: true
                }
            ]
        },
        {
            id: 3,
            image: 'src/projects/study/movEco/img.png',
            title: "Développement d'un site web (Mov'eco)",
            category: "Projet d'étude / 2022-2023",
            description: "Mov’eco est un site web de réservation de train, dont les données sont récupérées en JavaScript conformément aux contraintes du projet. J’ai réalisé la maquette, ainsi que le header et le footer, et j’ai également apporté mon soutien à mes camarades sur d’autres parties du site.",
            technologies: [
                'HTML', 'CSS', 'JS (AJAX)', 'Git', 'Maquettage'
            ],
            links: [
                {
                    type: 'source',
                    url: 'https://github.com/anthony-saillard/mov-eco',
                    label: 'Code Source',
                    icon: 'src/svg/logo/GitHub.svg',
                    visible: true
                },
                {
                    type: 'mockup',
                    url: 'src/projects/study/movEco/maquette.pdf',
                    label: 'Maquette',
                    icon: 'src/svg/logo/Figma.svg',
                    visible: true
                }
            ]
        }
    ],
    personal: [
        {
            id: 1,
            image: "src/projects/personal/portfolio/img.png",
            title: "Portfolio",
            category: "Projet personnel",
            description: "J’ai développé mon site portfolio en utilisant Vue.js et Tailwind CSS. J’ai conçu et intégré les différentes sections du site, optimisé l’ergonomie et travaillé sur la cohérence visuelle pour présenter mes projects de manière claire et attractive.",
            technologies: [
                'Vue.js', 'Tailwind CSS', 'Figma', 'Maquette'
            ],
            links: [
                {
                    type: 'source',
                    url: 'https://github.com/anthony-saillard/mywebsite',
                    label: 'Code Source',
                    icon: 'src/svg/logo/GitHub.svg',
                    visible: true
                },
                {
                    type: 'mockup',
                    url: 'src/projects/personal/portfolio/maquette.pdf',
                    label: 'Maquette',
                    icon: 'src/svg/logo/Figma.svg',
                    visible: true
                }
            ]
        },
        {
            id: 1,
            title: "Application de gestion domestique",
            category: "Projet personnel",
            description: "J’ai développé une application web en Vue.js avec Tailwind CSS. J’y ai implémenter un système de to-do list, ainsi qu’une fonctionnalité de gestion des salles permettant l’attribution de tâches ménagères spécifiques à chacune d’elles.",
            technologies: [
                'Vue.js', 'Tailwind CSS', 'Figma', 'Maquette'
            ],
            links: [
                {
                    type: 'mockup',
                    url: 'src/projects/personal/personalApp/maquette.pdf',
                    label: 'Maquette',
                    icon: 'src/svg/logo/Figma.svg',
                    visible: true
                },
            ]
        }
    ]
}

export const projectSections = [
    {key: 'professional', title: 'Expériences professionnelles', items: projects.professional},
    {key: 'personal', title: 'Projets personnels', items: projects.personal},
    {key: 'study', title: "Projets d'étude", items: projects.study},
];
