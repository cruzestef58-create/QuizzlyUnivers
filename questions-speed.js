// 100 questions de Culture Générale — QuizzlySpeed
const speedQuestions = [
    // ═══════════════ HISTOIRE ═══════════════
    {
        id: 1,
        question: "En quelle année a eu lieu la Révolution Française ?",
        options: ["1776", "1789", "1804", "1815"],
        correct: 1
    },
    {
        id: 2,
        question: "Quel dirigeant a ordonné la construction du mur de Berlin ?",
        options: ["Brejnev", "Staline", "Khrouchtchev", "Hitler"],
        correct: 2
    },
    {
        id: 3,
        question: "En quelle année a été signée la Déclaration d'Indépendance américaine ?",
        options: ["1765", "1776", "1783", "1791"],
        correct: 1
    },
    {
        id: 4,
        question: "Qui était le premier président des États-Unis ?",
        options: ["Benjamin Franklin", "John Adams", "Thomas Jefferson", "George Washington"],
        correct: 3
    },
    {
        id: 5,
        question: "Quel empire était dirigé par Jules César ?",
        options: ["L'Empire Grec", "L'Empire Romain", "L'Empire Ottoman", "L'Empire Perse"],
        correct: 1
    },
    {
        id: 6,
        question: "En quelle année s'est terminée la Seconde Guerre Mondiale ?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2
    },
    {
        id: 7,
        question: "Quelle reine d'Égypte est célèbre pour sa relation avec Jules César et Marc Antoine ?",
        options: ["Néfertiti", "Cléopâtre", "Hatshepsout", "Tiyi"],
        correct: 1
    },
    {
        id: 8,
        question: "Quel événement a déclenché la Première Guerre Mondiale en 1914 ?",
        options: ["L'invasion de la Belgique", "L'assassinat de l'Archiduc François-Ferdinand", "La déclaration de guerre de la France", "La chute du Tsar Nicolas II"],
        correct: 1
    },
    {
        id: 9,
        question: "Napoléon Bonaparte a été exilé sur quelle île après Waterloo ?",
        options: ["La Corse", "L'île d'Elbe", "Sainte-Hélène", "La Réunion"],
        correct: 2
    },
    {
        id: 10,
        question: "Qui a découvert l'Amérique en 1492 ?",
        options: ["Amerigo Vespucci", "Vasco de Gama", "Fernand Magellan", "Christophe Colomb"],
        correct: 3
    },
    {
        id: 11,
        question: "Quel mur antique était censé protéger la Chine des invasions ?",
        options: ["La Muraille des Han", "La Grande Muraille de Chine", "Le Mur de Qin", "Le Rempart de Jade"],
        correct: 1
    },
    {
        id: 12,
        question: "Quel pays a été le premier à accorder le droit de vote aux femmes en 1893 ?",
        options: ["La France", "La Suède", "La Nouvelle-Zélande", "Les États-Unis"],
        correct: 2
    },
    {
        id: 13,
        question: "Louis XIV est surnommé...",
        options: ["Le Roi Fainéant", "Le Roi-Soleil", "Le Grand Roi", "Le Roi de Fer"],
        correct: 1
    },
    {
        id: 14,
        question: "En quelle année est tombé le mur de Berlin ?",
        options: ["1987", "1988", "1989", "1991"],
        correct: 2
    },
    {
        id: 15,
        question: "Quelle civilisation a construit les pyramides de Gizeh ?",
        options: ["La civilisation Maya", "La civilisation Sumérienne", "La civilisation Égyptienne", "La civilisation Mésopotamienne"],
        correct: 2
    },

    // ═══════════════ GÉOGRAPHIE ═══════════════
    {
        id: 16,
        question: "Quel est le plus grand océan du monde ?",
        options: ["L'Atlantique", "L'Arctique", "L'Indien", "Le Pacifique"],
        correct: 3
    },
    {
        id: 17,
        question: "Quelle est la capitale de l'Australie ?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        id: 18,
        question: "Quel est le pays le plus grand du monde en superficie ?",
        options: ["Le Canada", "La Russie", "Les États-Unis", "La Chine"],
        correct: 1
    },
    {
        id: 19,
        question: "Sur quel continent se trouve le Sahara ?",
        options: ["L'Asie", "L'Australie", "L'Afrique", "L'Amérique du Sud"],
        correct: 2
    },
    {
        id: 20,
        question: "Quelle est la plus longue rivière du monde ?",
        options: ["L'Amazone", "Le Yangtsé", "Le Mississippi", "Le Nil"],
        correct: 3
    },
    {
        id: 21,
        question: "Combien de pays composent l'Union Européenne en 2024 ?",
        options: ["24", "25", "27", "30"],
        correct: 2
    },
    {
        id: 22,
        question: "Quel est le plus petit pays du monde ?",
        options: ["Monaco", "San Marin", "Le Vatican", "Le Liechtenstein"],
        correct: 2
    },
    {
        id: 23,
        question: "Quelle montagne est la plus haute du monde ?",
        options: ["Le K2", "Le Kangchenjunga", "L'Everest", "Le Mont Blanc"],
        correct: 2
    },
    {
        id: 24,
        question: "Dans quel pays se trouve Machu Picchu ?",
        options: ["La Bolivie", "Le Mexique", "Le Brésil", "Le Pérou"],
        correct: 3
    },
    {
        id: 25,
        question: "Quelle est la capitale du Japon ?",
        options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        correct: 2
    },
    {
        id: 26,
        question: "Quel fleuve traverse Paris ?",
        options: ["La Loire", "La Seine", "La Garonne", "Le Rhône"],
        correct: 1
    },
    {
        id: 27,
        question: "Quel pays a la plus grande population du monde en 2024 ?",
        options: ["La Chine", "L'Inde", "Les États-Unis", "L'Indonésie"],
        correct: 1
    },
    {
        id: 28,
        question: "Quelle mer sépare l'Europe de l'Afrique à l'ouest ?",
        options: ["La Mer Rouge", "La Méditerranée", "La Mer Noire", "La Mer Morte"],
        correct: 1
    },
    {
        id: 29,
        question: "Quel est le plus grand désert du monde ?",
        options: ["Le Sahara", "Le Gobi", "L'Antarctique", "L'Arabie"],
        correct: 2
    },
    {
        id: 30,
        question: "Dans quel pays se trouve la Tour de Pise ?",
        options: ["L'Espagne", "La France", "L'Italie", "Le Portugal"],
        correct: 2
    },

    // ═══════════════ SCIENCES ═══════════════
    {
        id: 31,
        question: "Quelle planète est la plus proche du Soleil ?",
        options: ["Vénus", "Mars", "Mercure", "Terre"],
        correct: 2
    },
    {
        id: 32,
        question: "Quelle est la formule chimique de l'eau ?",
        options: ["HO", "H2O", "H2O2", "OH"],
        correct: 1
    },
    {
        id: 33,
        question: "Quel scientifique a proposé la théorie de la relativité ?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
        correct: 2
    },
    {
        id: 34,
        question: "Combien d'os y a-t-il dans le corps humain adulte ?",
        options: ["186", "196", "206", "216"],
        correct: 2
    },
    {
        id: 35,
        question: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
        options: ["L'oxygène", "Le dioxyde de carbone", "L'azote", "L'hydrogène"],
        correct: 2
    },
    {
        id: 36,
        question: "À quelle vitesse la lumière voyage-t-elle (environ) ?",
        options: ["100 000 km/s", "200 000 km/s", "300 000 km/s", "400 000 km/s"],
        correct: 2
    },
    {
        id: 37,
        question: "Quel est l'organe principal du système nerveux central ?",
        options: ["Le cœur", "Le cerveau", "Le foie", "Les poumons"],
        correct: 1
    },
    {
        id: 38,
        question: "De quoi est composé le noyau d'un atome ?",
        options: ["D'électrons et de neutrons", "De protons et d'électrons", "De protons et de neutrons", "De quarks uniquement"],
        correct: 2
    },
    {
        id: 39,
        question: "Qui a découvert la pénicilline ?",
        options: ["Louis Pasteur", "Marie Curie", "Alexander Fleming", "Joseph Lister"],
        correct: 2
    },
    {
        id: 40,
        question: "Quelle planète est surnommée la planète rouge ?",
        options: ["Vénus", "Jupiter", "Saturne", "Mars"],
        correct: 3
    },
    {
        id: 41,
        question: "Quel est le symbole chimique de l'or ?",
        options: ["Or", "Ag", "Au", "Fe"],
        correct: 2
    },
    {
        id: 42,
        question: "En quelle année a été lancé le premier satellite artificiel Spoutnik 1 ?",
        options: ["1955", "1957", "1961", "1969"],
        correct: 1
    },
    {
        id: 43,
        question: "Quel scientifique a formulé les lois de la gravitation universelle ?",
        options: ["Galilée", "Kepler", "Isaac Newton", "Copernic"],
        correct: 2
    },
    {
        id: 44,
        question: "Combien de chromosomes possède un être humain normal ?",
        options: ["23", "44", "46", "48"],
        correct: 2
    },
    {
        id: 45,
        question: "Quelle est la température de fusion du fer (environ) ?",
        options: ["900°C", "1100°C", "1300°C", "1500°C"],
        correct: 3
    },

    // ═══════════════ SPORT ═══════════════
    {
        id: 46,
        question: "Dans quel sport remporte-t-on la Coupe Stanley ?",
        options: ["Le Football américain", "Le Basket-ball", "Le Hockey sur glace", "Le Baseball"],
        correct: 2
    },
    {
        id: 47,
        question: "Combien de joueurs y a-t-il dans une équipe de football (soccer) sur le terrain ?",
        options: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        id: 48,
        question: "Dans quel pays ont eu lieu les JO d'été de 2024 ?",
        options: ["Le Japon", "Le Brésil", "La France", "Les États-Unis"],
        correct: 2
    },
    {
        id: 49,
        question: "Quel pays a remporté le plus de Coupes du Monde de football ?",
        options: ["L'Allemagne", "Le Brésil", "L'Italie", "L'Argentine"],
        correct: 1
    },
    {
        id: 50,
        question: "Quel sport se joue avec un volant (shuttlecock) ?",
        options: ["Le Squash", "Le Badminton", "Le Ping-pong", "Le Racquetball"],
        correct: 1
    },
    {
        id: 51,
        question: "Combien de sets faut-il gagner pour remporter un match de tennis en Grand Chelem masculin ?",
        options: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        id: 52,
        question: "Quel athlète détient le record du monde du 100m avec 9,58s ?",
        options: ["Carl Lewis", "Maurice Greene", "Usain Bolt", "Yohan Blake"],
        correct: 2
    },
    {
        id: 53,
        question: "Sur quel type de surface se joue Roland-Garros ?",
        options: ["Gazon", "Dur", "Terre battue", "Synthétique"],
        correct: 2
    },
    {
        id: 54,
        question: "Combien de points vaut un essai au rugby à XV ?",
        options: ["3", "4", "5", "7"],
        correct: 2
    },
    {
        id: 55,
        question: "Dans quel sport utilise-t-on un palet ?",
        options: ["Le Curling", "Le Hockey sur glace", "Le Bandy", "Le Rink hockey"],
        correct: 1
    },

    // ═══════════════ CINÉMA & SÉRIES ═══════════════
    {
        id: 56,
        question: "Quel film remporte l'Oscar du Meilleur film en 1998 ?",
        options: ["Titanic", "Good Will Hunting", "L.A. Confidential", "Boogie Nights"],
        correct: 0
    },
    {
        id: 57,
        question: "Qui joue Tony Stark / Iron Man dans le MCU ?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correct: 2
    },
    {
        id: 58,
        question: "Dans quelle série télévisée retrouve-t-on la famille Soprano ?",
        options: ["Breaking Bad", "The Wire", "Les Sopranos", "Oz"],
        correct: 2
    },
    {
        id: 59,
        question: "Quel réalisateur a créé la trilogie Le Seigneur des Anneaux ?",
        options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "George Lucas"],
        correct: 2
    },
    {
        id: 60,
        question: "Dans quel film entend-on la réplique 'Je vais lui faire une offre qu'il ne pourra pas refuser' ?",
        options: ["Scarface", "Le Parrain", "Casino", "Goodfellas"],
        correct: 1
    },
    {
        id: 61,
        question: "Quel acteur joue le personnage de Jack dans Titanic (1997) ?",
        options: ["Brad Pitt", "Johnny Depp", "Matt Damon", "Leonardo DiCaprio"],
        correct: 3
    },
    {
        id: 62,
        question: "De quelle série vient la phrase 'Winter is coming' ?",
        options: ["Vikings", "Game of Thrones", "The Last Kingdom", "Outlander"],
        correct: 1
    },
    {
        id: 63,
        question: "Quel film d'animation Pixar met en scène un robot solitaire sur Terre ?",
        options: ["Ratatouille", "WALL-E", "Là-haut", "Coco"],
        correct: 1
    },
    {
        id: 64,
        question: "Qui a réalisé Pulp Fiction (1994) ?",
        options: ["Coen Brothers", "Martin Scorsese", "Quentin Tarantino", "Oliver Stone"],
        correct: 2
    },
    {
        id: 65,
        question: "Dans quelle ville est tourné le film 'Midnight in Paris' de Woody Allen ?",
        options: ["Rome", "Londres", "New York", "Paris"],
        correct: 3
    },

    // ═══════════════ MUSIQUE ═══════════════
    {
        id: 66,
        question: "Quel groupe de rock est connu pour la chanson 'Bohemian Rhapsody' ?",
        options: ["Led Zeppelin", "The Beatles", "Queen", "The Rolling Stones"],
        correct: 2
    },
    {
        id: 67,
        question: "Combien de cordes possède une guitare classique ?",
        options: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        id: 68,
        question: "Quelle chanteuse est surnommée 'La Reine de la Pop' ?",
        options: ["Beyoncé", "Lady Gaga", "Madonna", "Mariah Carey"],
        correct: 2
    },
    {
        id: 69,
        question: "Quel compositeur était sourd à la fin de sa vie mais continua à composer ?",
        options: ["Mozart", "Bach", "Beethoven", "Chopin"],
        correct: 2
    },
    {
        id: 70,
        question: "De quel pays vient le groupe ABBA ?",
        options: ["Norvège", "Danemark", "Finlande", "Suède"],
        correct: 3
    },
    {
        id: 71,
        question: "Quelle note de musique vient après le 'Sol' ?",
        options: ["Fa", "La", "Si", "Ré"],
        correct: 1
    },
    {
        id: 72,
        question: "Quel artiste a sorti l'album 'Thriller' en 1982 ?",
        options: ["Prince", "Michael Jackson", "David Bowie", "Stevie Wonder"],
        correct: 1
    },
    {
        id: 73,
        question: "Dans quel pays est né Elvis Presley ?",
        options: ["Le Royaume-Uni", "Le Canada", "Les États-Unis", "L'Australie"],
        correct: 2
    },
    {
        id: 74,
        question: "Quel instrument joue Sherlock Holmes dans les livres ?",
        options: ["Le piano", "La flûte", "La trompette", "Le violon"],
        correct: 3
    },
    {
        id: 75,
        question: "Quelle chanson des Beatles commence par 'Yesterday, all my troubles seemed so far away' ?",
        options: ["Let It Be", "Hey Jude", "Yesterday", "Help!"],
        correct: 2
    },

    // ═══════════════ LITTÉRATURE ═══════════════
    {
        id: 76,
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Émile Zola", "Victor Hugo", "Gustave Flaubert", "Alexandre Dumas"],
        correct: 1
    },
    {
        id: 77,
        question: "Quel personnage littéraire vit au 221B Baker Street ?",
        options: ["Hercule Poirot", "Arsène Lupin", "Sherlock Holmes", "Maigret"],
        correct: 2
    },
    {
        id: 78,
        question: "Qui a écrit 'Don Quichotte' ?",
        options: ["Lope de Vega", "Miguel de Cervantes", "Federico García Lorca", "Calderón de la Barca"],
        correct: 1
    },
    {
        id: 79,
        question: "Dans quel roman trouve-t-on le personnage de Gatsby ?",
        options: ["L'Attrape-cœurs", "Gatsby le Magnifique", "De l'autre côté du Paradis", "Tender is the Night"],
        correct: 1
    },
    {
        id: 80,
        question: "Quel auteur français a écrit 'À la recherche du temps perdu' ?",
        options: ["André Gide", "Marcel Proust", "André Malraux", "Paul Claudel"],
        correct: 1
    },

    // ═══════════════ JEUX VIDÉO ═══════════════
    {
        id: 81,
        question: "Quel est le vrai nom de Solid Snake dans Metal Gear Solid ?",
        options: ["John Snake", "David", "Jack", "Eli"],
        correct: 1
    },
    {
        id: 82,
        question: "Dans quel jeu incarne-t-on Link pour sauver la Princesse Zelda ?",
        options: ["Metroid", "Kirby", "The Legend of Zelda", "Fire Emblem"],
        correct: 2
    },
    {
        id: 83,
        question: "Quelle franchise de jeux vidéo se déroule dans les villes de Los Santos et Liberty City ?",
        options: ["Red Dead Redemption", "Saints Row", "Watch Dogs", "GTA"],
        correct: 3
    },
    {
        id: 84,
        question: "Quel jeu mettait en scène un plombier sautant sur des champignons ?",
        options: ["Sonic the Hedgehog", "Donkey Kong", "Super Mario Bros.", "Pac-Man"],
        correct: 2
    },
    {
        id: 85,
        question: "Dans quel jeu de Valve doit-on sortir d'une installation de recherche scientifique ?",
        options: ["Left 4 Dead", "Portal", "Half-Life", "Team Fortress"],
        correct: 1
    },

    // ═══════════════ CUISINE ═══════════════
    {
        id: 86,
        question: "De quel pays vient la paella ?",
        options: ["L'Italie", "La Grèce", "Le Portugal", "L'Espagne"],
        correct: 3
    },
    {
        id: 87,
        question: "Quelle épice donne sa couleur jaune au curry ?",
        options: ["Le safran", "Le paprika", "Le curcuma", "Le cumin"],
        correct: 2
    },
    {
        id: 88,
        question: "Quelle est l'ingrédient principal du guacamole ?",
        options: ["La tomate", "L'avocat", "Le maïs", "Le poivron"],
        correct: 1
    },
    {
        id: 89,
        question: "De quelle région française vient le camembert ?",
        options: ["La Bretagne", "La Normandie", "L'Alsace", "La Bourgogne"],
        correct: 1
    },
    {
        id: 90,
        question: "Quel fruit est utilisé pour faire du vin ?",
        options: ["La pomme", "La poire", "Le raisin", "La prune"],
        correct: 2
    },

    // ═══════════════ CULTURE POP & DIVERS ═══════════════
    {
        id: 91,
        question: "Quel réseau social est symbolisé par un oiseau bleu ?",
        options: ["Instagram", "Facebook", "Twitter / X", "Snapchat"],
        correct: 2
    },
    {
        id: 92,
        question: "Combien de couleurs y a-t-il dans un arc-en-ciel ?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        id: 93,
        question: "Quel pays a remporté la première Coupe du Monde FIFA (1930) ?",
        options: ["Le Brésil", "L'Uruguay", "L'Argentine", "L'Italie"],
        correct: 1
    },
    {
        id: 94,
        question: "Quelle entreprise fabrique l'iPhone ?",
        options: ["Samsung", "Google", "Microsoft", "Apple"],
        correct: 3
    },
    {
        id: 95,
        question: "Quel personnage de BD belge est le compagnon du Capitaine Haddock ?",
        options: ["Gaston Lagaffe", "Lucky Luke", "Tintin", "Spirou"],
        correct: 2
    },
    {
        id: 96,
        question: "Quel métal précieux est symbolisé par les anneaux olympiques dorés ?",
        options: ["Le platine", "L'argent", "Le bronze", "L'or"],
        correct: 3
    },
    {
        id: 97,
        question: "Combien de faces possède un cube ?",
        options: ["4", "5", "6", "8"],
        correct: 2
    },
    {
        id: 98,
        question: "Quelle est la monnaie officielle du Japon ?",
        options: ["Le Yuan", "Le Won", "Le Yen", "Le Baht"],
        correct: 2
    },
    {
        id: 99,
        question: "Quel animal est le symbole de l'Australie ?",
        options: ["Le koala", "L'émeu", "Le kangourou", "Le wombat"],
        correct: 2
    },
    {
        id: 100,
        question: "Quel peintre espagnol est connu pour les œuvres 'Guernica' et 'Les Demoiselles d'Avignon' ?",
        options: ["Salvador Dalí", "Joan Miró", "Francisco Goya", "Pablo Picasso"],
        correct: 3
    }
];
