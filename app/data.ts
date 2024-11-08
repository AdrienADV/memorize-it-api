export const categories = [
    {
        id: 1,
        name: "Histoire",
        iconName: "history",
        iconLibrary: "MaterialIcons"
    },
    {
        id: 2,
        name: "Technologie",
        iconName: "laptop",
        iconLibrary: "Feather"
    },
    {
        id: 3,
        name: "Science",
        iconName: "atom",
        iconLibrary: "FontAwesome5"
    },
    {
        id: 4,
        name: "Langues",
        iconName: "language",
        iconLibrary: "MaterialIcons"
    },
    {
        id: 5,
        name: "Géographie",
        iconName: "globe",
        iconLibrary: "FontAwesome"
    },
    {
        id: 6,
        name: "Sport",
        iconName: "soccer",
        iconLibrary: "MaterialCommunityIcons"
    },
    {
        id: 7,
        name: "Musique",
        iconName: "music-note",
        iconLibrary: "MaterialIcons"
    },
    {
        id: 8,
        name: "Cinéma",
        iconName: "film",
        iconLibrary: "Feather"
    },
    {
        id: 9,
        name: "Cuisine",
        iconName: "food",
        iconLibrary: "MaterialCommunityIcons"
    },
    {
        id: 10,
        name: "Littérature",
        iconName: "book-open",
        iconLibrary: "Feather"
    },
    {
        id: 11,
        name: "Art",
        iconName: "palette",
        iconLibrary: "MaterialCommunityIcons"
    },
    {
        id: 12,
        name: "Voyage",
        iconName: "airplane",
        iconLibrary: "FontAwesome"
    },
    {
        id: 13,
        name: "Bitcoin",
        iconName: "bitcoin",
        iconLibrary: "FontAwesome5"
    }
];


export const publicDecks = [
    {
        title: 'La Révolution Française',
        categoryId: 1,
        description: "Explorez les événements clés et les figures marquantes de la Révolution Française.",
        isPublic: true,
        cards: [
            {
                question: 'En quelle année a commencé la Révolution Française ?',
                answer: '1789'
            },
            {
                question: 'Quel roi a été exécuté pendant la Révolution ?',
                answer: 'Louis XVI'
            },
            {
                question: 'Quel événement marque le début de la Révolution ?',
                answer: 'La prise de la Bastille'
            },
            {
                question: 'Quel document a été adopté en 1789 ?',
                answer: 'La Déclaration des droits de l\'homme et du citoyen'
            },
            {
                question: 'Qui était Napoléon Bonaparte ?',
                answer: 'Un général et empereur français'
            },
            {
                question: 'Quelle est la date de la prise de la Bastille ?',
                answer: '14 juillet 1789'
            },
            {
                question: 'Qu\'est-ce que la Terreur ?',
                answer: 'Une période de violences politiques'
            },
            {
                question: 'Qui était Robespierre ?',
                answer: 'Un leader révolutionnaire'
            },
            {
                question: 'Quand la Révolution Française s\'est-elle terminée ?',
                answer: '1799'
            },
            {
                question: 'Quel roi a régné après la Révolution ?',
                answer: 'Louis XVIII'
            }
        ]
    },
    {
        title: 'L\'Histoire de l\'Informatique',
        categoryId: 2,
        description: "Découvrez l'évolution des technologies informatiques, des premiers ordinateurs aux smartphones.",
        isPublic: true,
        cards: [
            {
                question: 'Qui est considéré comme le père de l\'informatique ?',
                answer: 'Alan Turing'
            },
            {
                question: 'Quel est le premier ordinateur électronique ?',
                answer: 'ENIAC'
            },
            {
                question: 'Quand a été créé le premier microprocesseur ?',
                answer: '1971'
            },
            {
                question: 'Qui a fondé Microsoft ?',
                answer: 'Bill Gates et Paul Allen'
            },
            {
                question: 'En quelle année l\'iPhone a-t-il été lancé ?',
                answer: '2007'
            },
            {
                question: 'Qu\'est-ce que la machine de Turing ?',
                answer: 'Un modèle théorique de calcul'
            },
            {
                question: 'Quel langage de programmation est souvent enseigné en premier ?',
                answer: 'Python'
            },
            {
                question: 'Qu\'est-ce que le binaire ?',
                answer: 'Un système de numération en base 2'
            },
            {
                question: 'Qui a inventé le World Wide Web ?',
                answer: 'Tim Berners-Lee'
            },
            {
                question: 'Qu\'est-ce qu\'un algorithme ?',
                answer: 'Une suite d\'instructions pour résoudre un problème'
            }
        ]
    },
    {
        title: 'Les Grandes Découvertes Scientifiques',
        categoryId: 3,
        description: "Un voyage à travers les découvertes qui ont changé notre compréhension du monde.",
        isPublic: true,
        cards: [
            {
                question: 'Qui a formulé la théorie de la relativité ?',
                answer: 'Albert Einstein'
            },
            {
                question: 'Qui a découvert la gravité ?',
                answer: 'Isaac Newton'
            },
            {
                question: 'Quelle est la structure de l\'ADN ?',
                answer: 'Une double hélice'
            },
            {
                question: 'Qui a découvert la pénicilline ?',
                answer: 'Alexander Fleming'
            },
            {
                question: 'Qu\'est-ce que la table périodique des éléments ?',
                answer: 'Un tableau classant les éléments chimiques'
            },
            {
                question: 'Qui a développé la théorie de l\'évolution ?',
                answer: 'Charles Darwin'
            },
            {
                question: 'Qu\'est-ce que le boson de Higgs ?',
                answer: 'Une particule élémentaire'
            },
            {
                question: 'Quelle est la première loi de Newton ?',
                answer: 'Principe d\'inertie'
            },
            {
                question: 'Qui a inventé le vaccin contre la rage ?',
                answer: 'Louis Pasteur'
            },
            {
                question: 'Quelle planète est la plus grande du système solaire ?',
                answer: 'Jupiter'
            }
        ]
    },
    {
        title: 'Apprentissage des Langues',
        categoryId: 4,
        description: "Améliorez vos compétences linguistiques avec des faits et astuces sur les langues.",
        isPublic: true,
        cards: [
            {
                question: 'Quel est le mot le plus utilisé en anglais ?',
                answer: 'The'
            },
            {
                question: 'Comment dit-on \'bonjour\' en espagnol ?',
                answer: 'Hola'
            },
            {
                question: 'Quel est l\'alphabet utilisé en russe ?',
                answer: 'Cyrillique'
            },
            {
                question: 'Combien de temps faut-il pour maîtriser une langue ?',
                answer: 'Cela dépend de la pratique'
            },
            {
                question: 'Quel est le mot le plus long en allemand ?',
                answer: 'Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft'
            },
            {
                question: 'Quelle langue a le plus de locuteurs natifs ?',
                answer: 'Le mandarin'
            },
            {
                question: 'Quel est l\'alphabet utilisé en grec ?',
                answer: 'L\'alphabet grec'
            },
            {
                question: 'Comment dit-on \'merci\' en japonais ?',
                answer: 'Arigatou'
            },
            {
                question: 'Quel est l\'ordre des mots en anglais ?',
                answer: 'Sujet, Verbe, Objet'
            },
            {
                question: 'Comment dit-on \'amour\' en italien ?',
                answer: 'Amore'
            }
        ]
    },
    {
        title: 'Les Capitales du Monde',
        categoryId: 5,
        description: "Testez vos connaissances sur les capitales des pays à travers le monde.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        isPublic: true,
        cards: [
            {
                question: 'Quelle est la capitale de la France ?',
                answer: 'Paris'
            },
            {
                question: 'Quelle est la capitale de l\'Allemagne ?',
                answer: 'Berlin'
            },
            {
                question: 'Quelle est la capitale de l\'Espagne ?',
                answer: 'Madrid'
            },
            {
                question: 'Quelle est la capitale du Japon ?',
                answer: 'Tokyo'
            },
            {
                question: 'Quelle est la capitale du Canada ?',
                answer: 'Ottawa'
            },
            {
                question: 'Quelle est la capitale de l\'Australie ?',
                answer: 'Canberra'
            },
            {
                question: 'Quelle est la capitale du Brésil ?',
                answer: 'Brasília'
            },
            {
                question: 'Quelle est la capitale de l\'Inde ?',
                answer: 'New Delhi'
            },
            {
                question: 'Quelle est la capitale de la Russie ?',
                answer: 'Moscou'
            },
            {
                question: 'Quelle est la capitale de la Chine ?',
                answer: 'Pékin'
            }
        ]
    },
    {
        title: 'Les Règles du Football',
        categoryId: 6,
        description: "Maîtrisez les règles fondamentales et les termes utilisés dans le sport le plus populaire au monde.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        isPublic: true,
        cards: [
            {
                question: 'Combien de joueurs sur le terrain par équipe ?',
                answer: '11'
            },
            {
                question: 'Quelle est la durée d\'un match ?',
                answer: '90 minutes'
            },
            {
                question: 'Quelle est la taille d\'un terrain standard ?',
                answer: '100-110m de long'
            },
            {
                question: 'Combien de points pour une victoire ?',
                answer: '3 points'
            },
            {
                question: 'Quelle est la durée de la mi-temps ?',
                answer: '15 minutes'
            },
            {
                question: 'Que signifie un carton rouge ?',
                answer: 'Expulsion'
            },
            {
                question: 'Combien de remplacements sont autorisés ?',
                answer: '5'
            },
            {
                question: 'Que se passe-t-il en cas de faute dans la surface ?',
                answer: 'Penalty'
            },
            {
                question: 'Quand est utilisé le VAR ?',
                answer: 'Pour revoir des décisions importantes'
            },
            {
                question: 'Quel est le rôle du gardien de but ?',
                answer: 'Protéger les buts'
            }
        ]
    },
    {
        title: 'Les Genres Musicaux',
        categoryId: 7,
        description: "Explorez différents genres musicaux et leurs artistes emblématiques.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        isPublic: true,
        cards: [
            {
                question: 'Quel genre musical est originaire de la Jamaïque ?',
                answer: 'Reggae'
            },
            {
                question: 'Quel genre est associé à Beethoven ?',
                answer: 'Classique'
            },
            {
                question: 'Quel genre est né à New York dans les années 70 ?',
                answer: 'Hip-Hop'
            },
            {
                question: 'Quel genre est caractérisé par des guitares électriques ?',
                answer: 'Rock'
            },
            {
                question: 'Quel genre a ses racines en Louisiane ?',
                answer: 'Jazz'
            },
            {
                question: 'Quel genre est connu pour ses paroles rimées et rapides ?',
                answer: 'Rap'
            },
            {
                question: 'Quel genre est associé à Bob Marley ?',
                answer: 'Reggae'
            },
            {
                question: 'Quel genre a été popularisé par Elvis Presley ?',
                answer: 'Rock \'n\' Roll'
            },
            {
                question: 'Quel genre est dominé par des sons électroniques ?',
                answer: 'EDM'
            },
            {
                question: 'Quel genre est souvent accompagné de danse flamenco ?',
                answer: 'Flamenco'
            }
        ]
    },
    {
        title: 'Les Grands Films Classiques',
        categoryId: 8,
        description: "Découvrez les films qui ont marqué l'histoire du cinéma.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        isPublic: true,
        cards: [
            {
                question: 'Qui a réalisé \'Citizen Kane\' ?',
                answer: 'Orson Welles'
            },
            {
                question: 'Quel film de 1939 est célèbre pour sa ligne \'Frankly, my dear, I don\'t give a damn\' ?',
                answer: 'Gone with the Wind'
            },
            {
                question: 'Quel film de 1994 raconte l\'histoire de Forrest Gump ?',
                answer: 'Forrest Gump'
            },
            {
                question: 'Quel réalisateur est connu pour \'Psycho\' ?',
                answer: 'Alfred Hitchcock'
            },
            {
                question: 'Quel film de 1972 est une adaptation du livre de Mario Puzo ?',
                answer: 'The Godfather'
            },
            {
                question: 'Quel film est célèbre pour la chanson \'My Heart Will Go On\' ?',
                answer: 'Titanic'
            },
            {
                question: 'Quel film se déroule sur une planète lointaine nommée Pandora ?',
                answer: 'Avatar'
            },
            {
                question: 'Quel film de 1999 explore la question de la réalité et des machines ?',
                answer: 'The Matrix'
            },
            {
                question: 'Quel film raconte l\'histoire de Luke Skywalker ?',
                answer: 'Star Wars'
            },
            {
                question: 'Quel film de Steven Spielberg parle d\'un requin ?',
                answer: 'Jaws'
            }
        ]
    },
    {
        title: 'Les Plats Célèbres du Monde',
        categoryId: 9,
        description: "Un tour du monde culinaire avec les plats les plus emblématiques de chaque région.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        isPublic: true,
        cards: [
            {
                question: 'Quel plat italien est composé de pâte, de sauce tomate et de fromage ?',
                answer: 'Pizza'
            },
            {
                question: 'Quel plat japonais est à base de poisson cru ?',
                answer: 'Sushi'
            },
            {
                question: 'Quel plat mexicain est une tortilla garnie de viande ou de légumes ?',
                answer: 'Taco'
            },
            {
                question: 'Quel dessert français est un mélange de crème et de caramel ?',
                answer: 'Crème brûlée'
            },
            {
                question: 'Quel plat indien est souvent accompagné de riz ?',
                answer: 'Curry'
            },
            {
                question: 'Quel plat américain est composé de pain, de viande hachée et de fromage ?',
                answer: 'Hamburger'
            },
            {
                question: 'Quel plat chinois est composé de nouilles sautées ?',
                answer: 'Chow Mein'
            },
            {
                question: 'Quel plat espagnol est un mélange de riz, de fruits de mer et de légumes ?',
                answer: 'Paella'
            },
            {
                question: 'Quel plat grec est composé de viande, de yaourt et de pita ?',
                answer: 'Gyros'
            },
            {
                question: 'Quel plat thaïlandais est un mélange de riz sauté avec des légumes et de la viande ?',
                answer: 'Pad Thai'
            }
        ]
    },
    {
        title: 'Les Œuvres Littéraires Classiques',
        categoryId: 10,
        description: "Plongez dans les chefs-d'œuvre littéraires qui ont marqué des générations.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        isPublic: true,
        cards: [
            {
                question: 'Qui a écrit \'Les Misérables\' ?',
                answer: 'Victor Hugo'
            },
            {
                question: 'Quel roman de Tolstoï raconte l\'histoire de Pierre, André et Natacha ?',
                answer: 'Guerre et Paix'
            },
            {
                question: 'Qui est l\'auteur de \'1984\' ?',
                answer: 'George Orwell'
            },
            {
                question: 'Quel livre raconte l\'histoire de Jay Gatsby ?',
                answer: 'The Great Gatsby'
            },
            {
                question: 'Quel est le livre le plus vendu au monde ?',
                answer: 'La Bible'
            },
            {
                question: 'Qui a écrit \'Pride and Prejudice\' ?',
                answer: 'Jane Austen'
            },
            {
                question: 'Quel roman se déroule pendant la Révolution française ?',
                answer: 'A Tale of Two Cities'
            },
            {
                question: 'Qui a écrit \'Moby Dick\' ?',
                answer: 'Herman Melville'
            },
            {
                question: 'Quel roman de Kafka parle d\'un homme transformé en insecte ?',
                answer: 'La Métamorphose'
            },
            {
                question: 'Quel auteur russe a écrit \'Crime et Châtiment\' ?',
                answer: 'Fiodor Dostoïevski'
            }
        ]
    },
    {
        title: 'Les Courants Artistiques',
        categoryId: 11,
        isPublic: true,
        description: "Explorez les différents mouvements artistiques et leurs œuvres célèbres.",
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        cards: [
            {
                question: 'Quel courant artistique est associé à Monet ?',
                answer: 'Impressionnisme'
            },
            {
                question: 'Quel artiste est célèbre pour ses œuvres cubistes ?',
                answer: 'Pablo Picasso'
            },
            {
                question: 'Quel courant utilise des formes géométriques simplifiées ?',
                answer: 'Art Déco'
            },
            {
                question: 'Quel mouvement est caractérisé par des œuvres aux couleurs vives et abstraites ?',
                answer: 'Expressionnisme'
            },
            {
                question: 'Quel mouvement artistique est centré sur les rêves et l\'inconscient ?',
                answer: 'Surréalisme'
            },
            {
                question: 'Quel courant artistique est lié à Andy Warhol ?',
                answer: 'Pop Art'
            },
            {
                question: 'Quel artiste est célèbre pour ses peintures de tournesols ?',
                answer: 'Vincent Van Gogh'
            },
            {
                question: 'Quel courant est caractérisé par des sculptures en marbre très détaillées ?',
                answer: 'Renaissance'
            },
            {
                question: 'Quel style architectural est connu pour ses vitraux et arcs en ogive ?',
                answer: 'Gothique'
            },
            {
                question: 'Quel mouvement est associé à Jackson Pollock ?',
                answer: 'Expressionnisme abstrait'
            }
        ]
    },
    {
        title: 'Les Destinations de Voyage',
        categoryId: 12,
        description: "Découvrez les lieux emblématiques et les merveilles du monde à visiter.",
        isPublic: true,
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        cards: [
            {
                question: 'Quel monument célèbre se trouve à Paris ?',
                answer: 'Tour Eiffel'
            },
            {
                question: 'Quel site archéologique est situé au Pérou ?',
                answer: 'Machu Picchu'
            },
            {
                question: 'Quelle ville est connue pour ses gondoles et canaux ?',
                answer: 'Venise'
            },
            {
                question: 'Quel parc national est célèbre pour Old Faithful ?',
                answer: 'Yellowstone'
            },
            {
                question: 'Quelle île est connue pour ses statues géantes en pierre ?',
                answer: 'Île de Pâques'
            },
            {
                question: 'Quel désert est le plus grand du monde ?',
                answer: 'Sahara'
            },
            {
                question: 'Quel pays est célèbre pour ses fjords ?',
                answer: 'Norvège'
            },
            {
                question: 'Quelle ville est surnommée \'La grosse pomme\' ?',
                answer: 'New York'
            },
            {
                question: 'Quelle région est célèbre pour ses châteaux de la Loire ?',
                answer: 'France'
            },
            {
                question: 'Quelle est la capitale de l\'Australie ?',
                answer: 'Canberra'
            }
        ]
    },
    {
        title: 'Introduction à Bitcoin',
        categoryId: 13,
        description: "Comprenez les bases de Bitcoin et de la technologie blockchain.",
        isPublic: true,
        priceId: 'price_1JZ9ZwGK5Q7Zz9Q9Q9ZwGK5Q',
        cards: [
            {
                question: 'Qu\'est-ce que Bitcoin ?',
                answer: 'Une monnaie numérique décentralisée'
            },
            {
                question: 'Qui a créé Bitcoin ?',
                answer: 'Satoshi Nakamoto'
            },
            {
                question: 'En quelle année Bitcoin a-t-il été lancé ?',
                answer: '2009'
            },
            {
                question: 'Qu\'est-ce que la blockchain ?',
                answer: 'Un registre distribué'
            },
            {
                question: 'Combien de bitcoins peuvent être minés au total ?',
                answer: '21 millions'
            },
            {
                question: 'Qu\'est-ce que le halving de Bitcoin ?',
                answer: 'Réduction de moitié des récompenses des mineurs'
            },
            {
                question: 'Quelle était la première transaction de Bitcoin ?',
                answer: 'L\'achat de deux pizzas'
            },
            {
                question: 'Qu\'est-ce qu\'une clé privée ?',
                answer: 'Un code secret pour accéder aux fonds'
            },
            {
                question: 'Qu\'est-ce qu\'une adresse Bitcoin ?',
                answer: 'Une chaîne de caractères pour recevoir des fonds'
            },
            {
                question: 'Qu\'est-ce qu\'un portefeuille Bitcoin ?',
                answer: 'Un logiciel pour stocker des bitcoins'
            }
        ]
    }
]