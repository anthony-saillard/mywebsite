export const projects = {
    professional: [
        {
            id: 1,
            image: 'src/projects/professional/healabs/img.png',
            title: "Alternance - Développeur Front-End - Healabs",
            category: "Expérience professionnelle / 2024-2025",
            description: "Cette alternance chez Healabs, éditeur de logiciels de <span class='font-semibold'>télésurveillance médicale</span>, m’a permis de participer au <span class='font-semibold'>développement et à l’amélioration de l’interface</span> de leur application ApTeleCare.<br>" +
                "J’ai notamment corrigé les défauts du mode sombre, <span class='font-semibold'>retravaillé l’interface des notifications interactives</span> ainsi que diverses autres pages.<br>" +
                "J’ai également développé un <span class='font-semibold'>module de gestion des prescriptions médicales</span> et conçu un <span class='font-semibold'>système de notes de mise à jour</span> destiné aux professionnels de santé.",
            technologies: [
                'Vue.js', 'Quasar', 'SCSS', 'UI / UX', 'PHP', 'UNIX', 'SQL', 'Expérience utilisateur', 'Git', 'Youtrack', 'Slack'
            ],
            links: []
        },
        {
            id: 2,
            image: 'src/projects/professional/gravure/img.png',
            title: "Stage (11 semaines) puis CDD (2 semaines) - Développeur Web - Gravure et tampon",
            category: "Expérience professionnelle / 2024",
            description: "J’ai assuré la <span class='font-semibold'>maintenance et l’évolution de deux sites web</span> développés en PHP, HTML et CSS.<br>" +
                "J’ai conçu puis intégré un <span class='font-semibold'>système de sélection de points relais</span>, en réalisant d’abord la <span class='font-semibold'>maquette sur Figma</span>, avant de l’implémenté techniquement.<br>" +
                "J’ai également apporté diverses <span class='font-semibold'>modifications sur des fonctionnalités existantes</span> et mené ces missions en <span class='font-semibold'>autonomie</span>.",
            technologies: [
                'PHP', 'HTML', 'CSS', 'Figma', 'Intégration', 'Maintenance'
            ],
            links: [
                {
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
            description: "Lors de ce projet en groupe, j’ai mis en place un <span class='font-semibold'>environnement Docker</span> intégrant le back-end, le front-end et la base de données.</br>" +
                "J’ai également conçu les <span class='font-semibold'>maquettes UI sur Figma</span> puis développé le front-end en Vue.js avec Quasar. <br>" +
                "Ce projet m’a permis de renforcer mes compétences en conception de <span class='font-semibold'>maquette</span>, <span class='font-semibold'>front-end (Vue.js/Quasar)</span> et en <span class='font-semibold'>déploiement d’environnement Docker</span>.",
            technologies: [
                'Docker', 'Figma', 'Vue.js', 'Quasar', 'PostgreSQL', 'Symfony', 'Git'
            ],
            links: [
                {
                    url: 'https://github.com/anthony-saillard/SAE-S5-QFQQ',
                    label: 'Code Source',
                    icon: 'src/svg/logo/GitHub.svg',
                    visible: true
                },
                {
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
            description: "Développement d’une <span class='font-semibold'>application web pour un laboratoire</span>, permettant au personnel administratif et médical de gérer les patients et créer des ordonnances, réalisé en groupe.<br>" +
                "J’ai conçu la <span class='font-semibold'>maquette</span>, développé le <span class='font-semibold'>front-end en HTML/CSS et JavaScript</span>, et contribué au back-end (PHP et Symfony).<br>" +
                "Ce projet m’a permis de renforcer mes compétences en <span class='font-semibold'>développement full-stack</span>, en <span class='font-semibold'>travail collaboratif</span> et en méthodologie SCRUM.",
            technologies: [
                'HTML', 'CSS', 'PHP (POO)', 'SQL', 'JavaScript', 'Git', 'Symfony',
                'Méthodes SCRUM', 'Maquette', 'Cahiers des charges', 'Note de cadrage'
            ],
            links: [
                {
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
            description: "Développement d’un <span class='font-semibold'>site web de réservation de train</span>, avec récupération des données en JavaScript selon les contraintes du projet.<br>" +
                "J’ai réalisé la <span class='font-semibold'>maquette</span>, intégré le header et le footer, et apporté mon aide sur d’autres parties du site.<br>" +
                "Ce projet m’a permis de progresser en <span class='font-semibold'>intégration web</span>, en utilisation de <span class='font-semibold'>JavaScript pour la manipulation des données</span>, et en collaboration d’équipe.<br>",
            technologies: [
                'HTML', 'CSS', 'JavaScript', 'Git', 'Maquette'
            ],
            links: [
                {
                    url: 'https://github.com/anthony-saillard/mov-eco',
                    label: 'Code Source',
                    icon: 'src/svg/logo/GitHub.svg',
                    visible: true
                },
                {
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
                'Vue.js', 'Tailwind CSS', 'Figma', 'Maquette', 'Git'
            ],
            links: [
                {
                    url: 'https://github.com/anthony-saillard/mywebsite',
                    label: 'Code Source',
                    icon: 'src/svg/logo/GitHub.svg',
                    visible: true
                },
                {
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
            category: "Projet personnel / Aout 2025",
            description: "J’ai développé une application web en Vue.js avec Tailwind CSS. J’y ai implémenter un système de to-do list, ainsi qu’une fonctionnalité de gestion des salles permettant l’attribution de tâches ménagères spécifiques à chacune d’elles.",
            technologies: [
                'Vue.js', 'Tailwind CSS', 'Figma', 'Maquette', 'Git'
            ],
            links: [
                {
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
