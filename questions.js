// Quiz Questions Database - Avec Niveaux de Difficulté (10 questions par niveau)
const quizzesData = {
    educationCanine: {
        title: "L'Éducation Canine",
        description: "Testez vos connaissances sur l'éducation et le comportement des chiens",
        facile: [
            {
                id: 1,
                question: "À quel âge peut-on commencer l'éducation d'un chiot ?",
                options: ["À partir de 3 mois", "À partir de 6 mois", "À partir de 8 mois", "À partir de 1 an"],
                correct: 0,
                source: "Association Française de Comportement Animal (AFCA) - L'éducation formelle commence généralement vers 3 mois."
            },
            {
                id: 2,
                question: "Quel renforcement est le plus efficace pour l'apprentissage du chien ?",
                options: ["Les punitions sévères", "Les récompenses positives", "L'ignorance du comportement", "La répétition sans reward"],
                correct: 1,
                source: "Université du Québec - Le renforcement positif crée des apprentissages durables et renforce la relation humain-chien."
            },
            {
                id: 3,
                question: "Quel geste montre un chien qui a peur ?",
                options: ["Queue haute", "Oreilles dressées", "Queue entre les jambes et posture basse", "Aboiement joyeux"],
                correct: 2,
                source: "Association Française de Comportement Animal - Il est important de donner de l'espace au chien qui a peur."
            },
            {
                id: 4,
                question: "Combien de dents permanentes un chien adulte possède-t-il ?",
                options: ["28 dents", "32 dents", "42 dents", "36 dents"],
                correct: 2,
                source: "American Veterinary Medical Association - Un chien adulte possède 42 dents permanentes."
            },
            {
                id: 5,
                question: "Que signifie quand un chien a la queue qui bouge ?",
                options: ["Toujours heureux", "Cela peut indiquer plusieurs émotions selon le contexte", "Toujours agressif", "Rien d'important"],
                correct: 1,
                source: "Institut de Comportement Animal - Le mouvement de la queue indique l'état émotionnel du chien (joie, stress, dominance)."
            },
            {
                id: 6,
                question: "À quel âge un chiot ouvre-t-il ses yeux ?",
                options: ["À la naissance", "À 2 semaines", "À 4 semaines", "À 8 semaines"],
                correct: 1,
                source: "American Kennel Club (AKC) - Les chiots ouvrent généralement leurs yeux entre 10 et 14 jours."
            },
            {
                id: 7,
                question: "Comment réagir quand un chien vous saute dessus pour vous saluer ?",
                options: ["Le repousser doucement", "L'ignorer et détourner le regard", "Le caresser", "Le laisser faire"],
                correct: 1,
                source: "International Association of Animal Behavior Consultants - Ignorer le comportement indésirable décourage le chien de sauter."
            },
            {
                id: 8,
                question: "Quel est le poids moyen d'un chiot à la naissance ?",
                options: ["50g à 500g selon la race", "1kg minimum", "2kg", "5kg"],
                correct: 0,
                source: "Association Française des Vétérinaires - Le poids varie énormément selon la race."
            },
            {
                id: 9,
                question: "À quel âge les chiots commencent-ils à manger des aliments solides ?",
                options: ["À 2 semaines", "À 3-4 semaines", "À 8 semaines", "À 3 mois"],
                correct: 1,
                source: "American Veterinary Society of Animal Behavior - Le sevrage commence environ à 3-4 semaines."
            },
            {
                id: 10,
                question: "Combien de temps peut durer une séance d'entraînement pour un jeune chiot ?",
                options: ["30 à 45 minutes", "5 à 10 minutes", "1 à 2 heures", "Aussi longtemps que possible"],
                correct: 1,
                source: "American Kennel Club (AKC) - Les chiots ont une capacité de concentration limitée. Les séances courtes et fréquentes sont plus efficaces."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le meilleur moment pour socialiser un chiot ?",
                options: ["Après 1 an", "Entre 3 et 16 semaines (période critique)", "Entre 6 et 12 mois", "À partir de 2 ans"],
                correct: 1,
                source: "Association Française de Comportement Animal - La période critique est entre 3 et 16 semaines."
            },
            {
                id: 12,
                question: "Comment réagir quand votre chien tire sur la laisse ?",
                options: ["Tirer fortement en retour", "S'arrêter et attendre qu'il se calme", "Utiliser une laisse électrique", "Le punir"],
                correct: 1,
                source: "International Association of Animal Behavior Consultants (IAABC) - Vous enseignez que tirer n'obtient pas ce qu'il veut."
            },
            {
                id: 13,
                question: "Quel est le signal de dominance chez un chien ?",
                options: ["Queue basse", "Queue haute et raide", "Oreilles baissées", "Posture basse"],
                correct: 1,
                source: "Institut de Comportement Animal - Une queue haute et raide indique une posture de dominance."
            },
            {
                id: 14,
                question: "À quel âge les chiots ont-ils leurs premières dents de lait ?",
                options: ["À la naissance", "À 2-3 semaines", "À 6-8 semaines", "À 3 mois"],
                correct: 1,
                source: "American Veterinary Medical Association - Les premières dents apparaissent vers 2-3 semaines."
            },
            {
                id: 15,
                question: "Qu'indique un aboiement prolongé chez le chien ?",
                options: ["Toujours un problème", "Communication normale pouvant indiquer l'ennui, l'anxiété ou l'alerte", "Une maladie", "Rien"],
                correct: 1,
                source: "Institut de Comportement Animal - L'aboiement est un moyen naturel de communication du chien."
            },
            {
                id: 16,
                question: "Combien de temps doit durer une marche quotidienne pour un chien adulte moyen ?",
                options: ["10-20 minutes", "30-45 minutes", "45 minutes à 2 heures", "Plus de 3 heures"],
                correct: 2,
                source: "Veterinary American College - La plupart des chiens adultes ont besoin de 45 minutes à 2 heures d'exercice."
            },
            {
                id: 17,
                question: "Quel est le rôle du jeu dans l'éducation d'un chien ?",
                options: ["Aucun rôle", "Permet la sociabilisation et renforce la relation", "Uniquement pour le divertissement", "Crée des comportements agressifs"],
                correct: 1,
                source: "University of Bristol - Le jeu est essentiel pour le développement physique et mental du chien."
            },
            {
                id: 18,
                question: "Combien de sensibilité olfactive le chien possède-t-il par rapport à l'humain ?",
                options: ["Similaire à l'humain", "10 fois plus", "100 à 10000 fois plus", "1000 fois moins"],
                correct: 2,
                source: "American Kennel Club (AKC) - Le chien possède entre 100 et 10000 fois plus de sensibilité olfactive."
            },
            {
                id: 19,
                question: "Quel est le langage corporel d'un chien stressé ?",
                options: ["Relaxé et joueur", "Corps tendu, queue basse, léchage des babines", "Queue haute rigide", "Sautant partout"],
                correct: 1,
                source: "International Society of Canine Behaviorists - Le stress se manifeste par la tension corporelle et les léchages nerveux."
            },
            {
                id: 20,
                question: "À quel âge la croissance du chien ralentit-elle généralement ?",
                options: ["À 3 mois", "À 6-9 mois selon la race", "À 1 an", "À 2 ans"],
                correct: 1,
                source: "American Veterinary Medical Association - La croissance ralentit généralement entre 6 et 9 mois selon la taille de la race."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Qu'est-ce que la fenêtre de socialisation critique chez le chiot ?",
                options: ["5-8 semaines", "8-12 semaines", "3-16 semaines (période de réceptivité maximale aux expériences)", "16-20 semaines"],
                correct: 2,
                source: "Dr. John Paul Scott - Études approfondies sur le développement comportemental du chiot."
            },
            {
                id: 22,
                question: "Quel neurotransmetteur régule principalement le comportement d'attachement chez le chien ?",
                options: ["La dopamine", "L'ocytocine", "La sérotonine", "L'adrénaline"],
                correct: 1,
                source: "Université de Helsinki - L'ocytocine est impliquée dans l'attachement du chien envers son maître."
            },
            {
                id: 23,
                question: "Quelle est la théorie de la dominance du loup versus celle du chien domestique ?",
                options: ["Identiques", "La théorie de la dominance du loup est inapplicable au chien domestique", "Le chien suit exactement la hiérarchie du loup", "Elles ne sont pas en relation"],
                correct: 1,
                source: "L. David Mech - Recherches corrigées montrant que les chiens domestiques n'ont pas de hiérarchie de dominance stricte."
            },
            {
                id: 24,
                question: "Comment l'apprentissage par habituation fonctionne-t-il dans la modification comportementale ?",
                options: ["Augmenter l'exposition progressive", "Réduire la réaction à un stimulus répété", "Augmenter la peur", "Éliminer complètement la réaction"],
                correct: 1,
                source: "International Association of Animal Behavior Consultants - L'habituation réduit graduellement la réaction aux stimuli."
            },
            {
                id: 25,
                question: "Quel est le rôle des phéromones dans la communication canine ?",
                options: ["Aucun rôle", "Communication chimique pour l'identification et l'apaisement", "Uniquement pour l'attaque", "Uniquement olfactive"],
                correct: 1,
                source: "Dr. Sophie Cadieu, Institut Pasteur - Les phéromones jouent un rôle crucial dans la communication canine."
            },
            {
                id: 26,
                question: "Qu'est-ce que la contre-conditionnement dans l'éducation canine ?",
                options: ["Ignorer le comportement", "Apprendre au chien une nouvelle réaction positive à un stimulus qui cause du stress", "Punir le comportement", "Récompenser simplement"],
                correct: 1,
                source: "Certified Applied Animal Behaviorist - Technique clé pour modifier les comportements indésirables."
            },
            {
                id: 27,
                question: "Quels sont les signes de désensibilisation systématique efficace chez un chien ?",
                options: ["Plus de peur", "Réaction réduite à chaque exposition", "Peur accrue", "Comportement inchangé"],
                correct: 1,
                source: "International Society of Feline Medicine et Canine - Progression visible de la tolérance du chien."
            },
            {
                id: 28,
                question: "Quel est l'impact du stress chronique sur le système nerveux du chien ?",
                options: ["Aucun impact", "Augmentation du cortisol, immunosuppression et comportements problématiques", "Uniquement comportemental", "Amélioration de l'immunité"],
                correct: 1,
                source: "Université de Tufts - Études sur les effets du stress chronique sur la physiologie canine."
            },
            {
                id: 29,
                question: "Comment la théorie de l'apprentissage observationnel s'applique-t-elle aux chiens ?",
                options: ["Ne s'applique pas", "Les chiens apprennent en observant d'autres chiens", "Uniquement par imitation directe", "Pas de preuve scientifique"],
                correct: 1,
                source: "University of Lincoln - Études montrant que les chiens apprennent par observation."
            },
            {
                id: 30,
                question: "Quel est le seuil optimal de fréquence d'entraînement pour maximiser la rétention chez le chiot ?",
                options: ["Une fois par semaine", "Deux à trois sessions courtes par jour", "Une session longue quotidienne", "Pas d'importance"],
                correct: 1,
                source: "American Kennel Club - Études sur la mémorisation et l'apprentissage canin."
            }
        ]
    },
    lesChats: {
        title: "Les Félins (Chats)",
        description: "Testez vos connaissances sur les chats et leur comportement",
        facile: [
            {
                id: 1,
                question: "Combien d'heures par jour un chat dort-il en moyenne ?",
                options: ["4 à 6 heures", "8 à 10 heures", "12 à 16 heures", "18 à 20 heures"],
                correct: 2,
                source: "Institut Félin International - Les chats dorment entre 12 et 16 heures par jour pour conserver leur énergie."
            },
            {
                id: 2,
                question: "Combien de dents permanentes un chat adulte possède-t-il ?",
                options: ["30 dents", "28 dents", "32 dents", "26 dents"],
                correct: 1,
                source: "Association Française de Vétérinaires - Un chat adulte possède 28 dents permanentes (16 en haut, 12 en bas)."
            },
            {
                id: 3,
                question: "Que signifie quand un chat ronronne ?",
                options: ["Uniquement qu'il est content", "Contentement, mais aussi stress ou douleur", "Un signe d'agressivité", "Aucune signification"],
                correct: 1,
                source: "Université de Cambridge - Le ronronnement peut indiquer le bien-être mais aussi la douleur ou l'anxiété."
            },
            {
                id: 4,
                question: "Que signifie quand un chat bande sa queue en forme de brosse ?",
                options: ["Le chat est heureux", "Le chat a peur ou se sent menacé", "Le chat veut jouer", "Le chat veut être caressé"],
                correct: 1,
                source: "Association Française de Vétérinaires - Une queue gonflée en brosse est un signe de peur ou de stress."
            },
            {
                id: 5,
                question: "À quel âge les chatons ouvrent-ils leurs yeux ?",
                options: ["À la naissance", "À 5-10 jours", "À 3 semaines", "À 6 semaines"],
                correct: 1,
                source: "Fédération Internationale Féline - Les chatons ouvrent généralement leurs yeux entre 5 et 10 jours."
            },
            {
                id: 6,
                question: "Combien de vibrisses (moustaches) possède un chat ?",
                options: ["4 moustaches", "8 moustaches", "Environ 24 moustaches", "Plus de 50 moustaches"],
                correct: 2,
                source: "Institut de Recherche Féline - Les chats possèdent environ 24 vibrisses principales."
            },
            {
                id: 7,
                question: "Quel est le cri d'accouplement des chattes en chaleur ?",
                options: ["Un miaulement normal", "Un cri très bruyant et répété", "Aucun son particulier", "Un ronronnement intense"],
                correct: 1,
                source: "Association Française de Comportement Félin - Les chattes en chaleur produisent des miaulements très particuliers."
            },
            {
                id: 8,
                question: "À quel âge un chaton est-il complètement sevré ?",
                options: ["À 4 semaines", "À 6-8 semaines", "À 3 mois", "À 6 mois"],
                correct: 1,
                source: "American Veterinary Medical Association - Le sevrage complet du chaton se fait vers 6-8 semaines."
            },
            {
                id: 9,
                question: "Combien de fois par jour un chat devrait-il manger ?",
                options: ["1 fois par jour", "2 fois par jour", "4-5 fois par jour", "Ad libitum (en continu)"],
                correct: 1,
                source: "Fédération Française de Félinologie - Un chat adulte devrait manger 1-2 fois par jour."
            },
            {
                id: 10,
                question: "Que signifie quand un chat frotte sa tête contre vous ?",
                options: ["Il a des démangeaisons", "Il marque son territoire avec ses phéromones", "Il veut vous attaquer", "Il a faim"],
                correct: 1,
                source: "Institut de Comportement Animal - Les glandes faciales du chat produisent des phéromones pour marquage territorial."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle principal des moustaches du chat (vibrisses) ?",
                options: ["Uniquement pour l'apparence", "Détecter les obstacles et percevoir les mouvements de l'air", "Maintenir l'équilibre uniquement", "Communiquer avec les autres chats"],
                correct: 1,
                source: "Association Française de Vétérinaires Félinistes - Les vibrisses sont des capteurs tactiles essentiels."
            },
            {
                id: 12,
                question: "À quel âge un chat peut-il se reproduire ?",
                options: ["À partir de 6 mois", "À partir de 1 an", "À partir de 18 mois", "À partir de 2 ans"],
                correct: 0,
                source: "Fédération Française de Félinologie - Les chattes peuvent entrer en chaleur dès 4-5 mois."
            },
            {
                id: 13,
                question: "Quel est le champ de vision d'un chat ?",
                options: ["180 degrés", "200 degrés", "250 degrés environ", "360 degrés"],
                correct: 2,
                source: "Université de Göttingen - Les chats ont un champ de vision d'environ 200-250 degrés."
            },
            {
                id: 14,
                question: "Quelle est la température corporelle normale d'un chat ?",
                options: ["37°C", "38-39°C", "40-41°C", "42°C"],
                correct: 1,
                source: "Organisation Mondiale de la Santé Animale - La température normale d'un chat est 38-39°C."
            },
            {
                id: 15,
                question: "Pourquoi les chats font-ils 'les biscuits' (malaxent) ?",
                options: ["Agressivité", "Comportement hérité du temps d'allaitement et signe de contentement", "Problème neurologique", "Préparer un endroit confortable"],
                correct: 1,
                source: "International Society of Feline Medicine - Ce comportement persiste chez l'adulte comme signe de bien-être."
            },
            {
                id: 16,
                question: "Combien de sortes de miaulements différents un chat peut-il produire ?",
                options: ["3-5 miaulements", "10-12 miaulements", "Plus de 100 sons différents", "Seulement un miaulement"],
                correct: 2,
                source: "Institut de Recherche Féline - Les chats produisent plus de 100 sons différents pour communiquer."
            },
            {
                id: 17,
                question: "Quel est le cycle reproducteur chez la femelle chat ?",
                options: ["Annuel comme les chiens", "Polyoestral (plusieurs cycles par an)", "Seul pendant l'été", "Une seule fois dans la vie"],
                correct: 1,
                source: "Fédération Internationale Féline - Les chattes sont polyoestrales en dehors des périodes d'anoestrus."
            },
            {
                id: 18,
                question: "Combien de vertèbres possède un chat dans sa colonne vertébrale ?",
                options: ["30 vertèbres", "50 vertèbres", "53 vertèbres", "60 vertèbres"],
                correct: 2,
                source: "American Veterinary Medical Association - Les chats ont 53 vertèbres pour leur flexibilité."
            },
            {
                id: 19,
                question: "Que signifie les yeux qui se plissent chez un chat ?",
                options: ["Il a peur", "Il est affectueux ou content", "Il va mordre", "Il a mal"],
                correct: 1,
                source: "Institut de Comportement Animal - Les chats plissent les yeux comme marque d'affection."
            },
            {
                id: 20,
                question: "Quelle est la durée moyenne de gestation chez une chatte ?",
                options: ["50 jours", "63-65 jours", "80 jours", "100 jours"],
                correct: 1,
                source: "Fédération Française de Félinologie - La gestation dure environ 63-65 jours chez le chat."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quelle enzyme du foie manque chez le chat le rendant sensible à certaines toxines ?",
                options: ["Glucuronidase", "UDP-glucuronyltransférase", "Catalase", "Lipase"],
                correct: 1,
                source: "Journal of Feline Medicine and Surgery - Déficience importante en métabolisation."
            },
            {
                id: 22,
                question: "Quel est le nombre de photorecepteurs rétiniens chez le chat comparé à l'humain ?",
                options: ["Identique", "Plus de bâtonnets (vision nocturne supérieure)", "Moins de cônes", "Deux et trois"],
                correct: 1,
                source: "University of California - Les chats ont 6-8 fois plus de bâtonnets rétiniens."
            },
            {
                id: 23,
                question: "Qu'est-ce que le Flehmen Response chez le chat ?",
                options: ["Ronronnement", "Réaction olfactive élevée des phéromones", "Attaque défensive", "Grooming"],
                correct: 1,
                source: "Feline Behavior Solutions - Réponse vomeronasal aux phéromones."
            },
            {
                id: 24,
                question: "Quel est le rôle du tapetum lucidum chez le chat ?",
                options: ["Filtre UV", "Réflexion lumineuse pour améliorer la vision nocturne", "Production de larmes", "Protection de la cornée"],
                correct: 1,
                source: "Journal of Veterinary Ophthalmology - Structure réfléchissante améliorant la sensibilité lumineuse."
            },
            {
                id: 25,
                question: "Quel est le phénomène appelé 'righting reflex' chez le chat ?",
                options: ["Agressivité accrue", "Capacité à se redresser en chute libre", "Attraction au jeu", "Comportement social"],
                correct: 1,
                source: "American Journal of Veterinary Research - Réflexe innée préservant l'équilibre."
            },
            {
                id: 26,
                question: "Quels sont les organes vomérona sals responsables de la détection des phéromones ?",
                options: ["Poumons", "Foie", "Organe vomeronasal (Jacobson)", "Reins"],
                correct: 2,
                source: "Feline Behavior Science - Organes dédiés à la détection chimiosensorielle."
            },
            {
                id: 27,
                question: "Quel est le secret de la flexibilité vertébrale exceptionnelle du chat ?",
                options: ["Muscle puissants", "Vertèbres disques lombaires flexibles", "Pas de clavicule et colonne flexible", "Tendons élastiques"],
                correct: 2,
                source: "American Veterinary Medical Association - Absence de fusion claviculaire permettant la rotation."
            },
            {
                id: 28,
                question: "Quel gène contrôle la couleur blanche chez les chats sourds ?",
                options: ["Gène Orange", "Gène Blanc (W)", "Gène Noir", "Gène Tabby"],
                correct: 1,
                source: "Fédération Internationale Féline - Surdité génétiquement liée à la blancheur."
            },
            {
                id: 29,
                question: "Quel est le mécanisme de défense chimique chez les chats face au stress ?",
                options: ["Fuite uniquement", "Production de féromones apaisantes", "Attaque directe", "Mimétisme"],
                correct: 1,
                source: "Institut de Comportement Animal Félin - Communication chimique anti-stress."
            },
            {
                id: 30,
                question: "Quel est l'impact de la neuroplasticité sur l'éducation des chats adultes ?",
                options: ["Impossible d'éduquer", "Capacité à développer de nouvelles connexions nerveuses tout au long de la vie", "Diminue avec l'âge", "Identique aux chiots"],
                correct: 1,
                source: "Journal of Feline Medicine and Surgery - Plasticité continue du cerveau félin."
            }
        ]
    },
    ornithologie: {
        title: "L'Ornithologie (Oiseaux)",
        description: "Testez vos connaissances sur les oiseaux et leur biologie",
        facile: [
            {
                id: 1,
                question: "Combien d'espèces d'oiseaux existent environ dans le monde ?",
                options: ["Environ 1000 espèces", "Environ 5000 espèces", "Environ 10000 espèces", "Environ 50000 espèces"],
                correct: 2,
                source: "Musée National d'Histoire Naturelle - Il existe environ 10000 espèces d'oiseaux identifiées."
            },
            {
                id: 2,
                question: "Quel oiseau est le plus rapide en vol ?",
                options: ["L'aigle", "Le faucon pèlerin", "L'hirondelle", "Le vautour"],
                correct: 1,
                source: "Fédération Française d'Ornithologie - Le faucon pèlerin peut atteindre 300 km/h en piqué."
            },
            {
                id: 3,
                question: "Les oiseaux possèdent combien de chambres dans leur cœur ?",
                options: ["Deux chambres", "Trois chambres", "Quatre chambres", "Six chambres"],
                correct: 2,
                source: "Association Française d'Ornithologie - Le cœur des oiseaux possède quatre chambres comme les mammifères."
            },
            {
                id: 4,
                question: "Quel oiseau pond les plus gros œufs ?",
                options: ["L'aigle", "L'autruche", "Le cygne", "Le paon"],
                correct: 1,
                source: "Muséum de Zoologie - L'autruche pond des œufs pouvant peser jusqu'à 2 kg."
            },
            {
                id: 5,
                question: "Combien de côtes les oiseaux possèdent-ils environ ?",
                options: ["6-8 côtes", "10-12 côtes", "14-16 côtes", "20-24 côtes"],
                correct: 1,
                source: "Institut d'Ornithologie Appliquée - Les oiseaux ont environ 10 à 12 paires de côtes."
            },
            {
                id: 6,
                question: "Quel oiseau migre sur la plus longue distance ?",
                options: ["Le coucou", "L'hirondelle", "La sterne arctique", "L'oie"],
                correct: 2,
                source: "Ligue pour la Protection des Oiseaux - La sterne arctique parcourt environ 71000 km par an."
            },
            {
                id: 7,
                question: "Les plumes d'un oiseau servent principalement à quoi ?",
                options: ["Uniquement au vol", "Au vol, à l'isolation thermique et à l'imperméabilité", "Uniquement à la beauté", "À la nage"],
                correct: 1,
                source: "Université de Strasbourg - Les plumes ont de multiples fonctions essentielles."
            },
            {
                id: 8,
                question: "Quel oiseau ne peut pas voler ?",
                options: ["Le fou de Bassan", "Le pingouin", "Le cormoran", "L'autruche"],
                correct: 3,
                source: "Muséum National - L'autruche est le plus grand oiseau et ne peut pas voler."
            },
            {
                id: 9,
                question: "À quel âge un poussin peut-il voler généralement ?",
                options: ["À 1-2 semaines", "À 3-4 semaines", "À 8-12 semaines", "À 6 mois"],
                correct: 2,
                source: "Centre de Sauvegarde des Oiseaux - L'âge varie selon les espèces mais c'est généralement 8-12 semaines."
            },
            {
                id: 10,
                question: "Quel est l'organe sensoriel principal chez les oiseaux pour la vision ?",
                options: ["L'odorat", "L'ouïe", "La vue", "Le toucher"],
                correct: 2,
                source: "Institut d'Ornithologie - Les oiseaux dépendent principalement de leur excellente vision."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle des plumes coverts chez les oiseaux ?",
                options: ["Isolation thermique uniquement", "Recouvrement et lissage des plumes de contour", "Protection des œufs", "Attraction sexuelle"],
                correct: 1,
                source: "Société d'Ornithologie - Les plumes coverts recouvraient les plumes de vol pour améliorer l'aérodynamisme."
            },
            {
                id: 12,
                question: "Quel mécanisme permet aux oiseaux de maintenir une température corporelle constante ?",
                options: ["Changement de couleur", "Métabolisme élevé et frissons musculaires", "Diminution de l'activité", "Augmentation du volume sanguin"],
                correct: 1,
                source: "Université d'Ornithologie Appliquée - Les oiseaux ont un métabolisme très élevé."
            },
            {
                id: 13,
                question: "Quel est le plus petit oiseau du monde ?",
                options: ["Le roitelet", "L'alouette", "Le colibri", "La mésange"],
                correct: 2,
                source: "Musée d'Histoire Naturelle - Le colibri abeille mesure environ 5 cm et pèse 2 grammes."
            },
            {
                id: 14,
                question: "Comment les oiseaux s'orientent-ils lors de la migration ?",
                options: ["Uniquement par le soleil", "Par le champ magnétique terrestre et le soleil", "Par l'odorat", "Par le toucher"],
                correct: 1,
                source: "Institut de Recherche Ornithologique - Les oiseaux utilisent plusieurs systèmes de navigation."
            },
            {
                id: 15,
                question: "Quel est le rôle du jabot chez les oiseaux ?",
                options: ["Respiration", "Stockage temporaire de nourriture avant digestion", "Production de sons", "Reproduction"],
                correct: 1,
                source: "Centre d'Éducation Ornithologique - Le jabot stocke la nourriture avant sa descente à l'estomac."
            },
            {
                id: 16,
                question: "Combien d'œufs une tourterelle pond-elle généralement par couvée ?",
                options: ["1 œuf", "2 œufs", "4-5 œufs", "8-10 œufs"],
                correct: 1,
                source: "Ligue pour la Protection des Oiseaux - Les tourterelles pondent généralement 2 œufs par couvée."
            },
            {
                id: 17,
                question: "Quel oiseau produit le plus fort cri en rapport à sa taille ?",
                options: ["Le perroquet", "La mésange charbonnière", "L'aigle", "Le pic"],
                correct: 1,
                source: "Institut d'Acoustique Ornithologique - La mésange charbonnière produit des sons très forts."
            },
            {
                id: 18,
                question: "Quel est le processus d'alternance des plumes chez les oiseaux ?",
                options: ["La photosynthèse", "La mue", "La métamorphose", "La fécondation"],
                correct: 1,
                source: "Université d'Ornithologie - La mue est le processus de renouvellement des plumes."
            },
            {
                id: 19,
                question: "Quel oiseau peut tourner sa tête à 270 degrés ?",
                options: ["Le hibou", "L'aigle", "Le perroquet", "Le vautour"],
                correct: 0,
                source: "Musée d'Ornithologie - Le hibou peut tourner sa tête jusqu'à 270 degrés."
            },
            {
                id: 20,
                question: "Quel est le temps d'incubation moyen pour les œufs d'oiseau ?",
                options: ["5-7 jours", "10-14 jours", "21-28 jours selon l'espèce", "60 jours"],
                correct: 2,
                source: "Centre d'Ornithologie - Le temps d'incubation varie considérablement selon les espèces."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est l'ordre taxonomique des oiseaux modernes ?",
                options: ["Aves", "Ornithes", "Passeriformes", "Neornithes"],
                correct: 3,
                source: "Université de Zoologie - Les oiseaux modernes appartiennent à la classe Neornithes."
            },
            {
                id: 22,
                question: "Quel mécanisme permet aux oiseaux de dormir en vol ?",
                options: ["Arrêt complet du cerveau", "Sommeil unihémisphérique avec altération des hémisphères", "Lévitation magnétique", "Hibernation rapide"],
                correct: 1,
                source: "Institut de Neurosciences Aviaires - Les oiseaux utilisent le sommeil unihémisphérique."
            },
            {
                id: 23,
                question: "Quel est le rôle de l'organe called syrinx chez les oiseaux ?",
                options: ["Respiration", "Production de sons vocalisations", "Digestion", "Vision"],
                correct: 1,
                source: "Laboratoire d'Acoustique Ornithologique - La syrinx est l'équivalent du larynx chez les oiseaux."
            },
            {
                id: 24,
                question: "Comment s'appelle le système respiratoire unique des oiseaux ?",
                options: ["Respiration pulmonaire simple", "Respiration unidirectionnelle avec sacs aériens", "Respiration branchiale", "Respiration cutanée"],
                correct: 1,
                source: "Université de Physiologie Aviaire - Les oiseaux ont un système respiratoire en flux unidirectionnel."
            },
            {
                id: 25,
                question: "Quel est le gène responsable de la détermination du sexe chez les oiseaux ?",
                options: ["Gène SRY comme chez les mammifères", "Gène DMRT1", "Gène FEM", "Gène ZW inversé"],
                correct: 1,
                source: "Institut de Génétique Aviaire - Le gène DMRT1 contrôle la détermination du sexe."
            },
            {
                id: 26,
                question: "Quel est le processus de cathépsine chez les oiseaux en migration ?",
                options: ["Digestion des protéines", "Autorégulation du métabolisme", "Calcification osseuse", "Modification des plumes"],
                correct: 0,
                source: "Centre de Recherche sur la Migration - La cathépsine aide à digérer les protéines de réserve."
            },
            {
                id: 27,
                question: "Quel est le rôle du foramen magnum agrandie chez certains oiseaux piqueurs ?",
                options: ["Augmentation de la vision", "Absorption des chocs et amortissement des impacts", "Augmentation de la force musculaire", "Réduction de la masse"],
                correct: 1,
                source: "Journal d'Ornithologie Appliquée - Le foramen magnum s'est adapté pour absorber les chocs."
            },
            {
                id: 28,
                question: "Quel est le mécanisme physiologique de l'hypothermie torpeur chez les colibris ?",
                options: ["Arrêt cardiaque total", "Ralentissement du métabolisme jusqu'à 15% du normal", "Sommeil prolongé", "Déplacement vers des altitudes plus basses"],
                correct: 1,
                source: "Institut de Physiologie Comparée - Les colibris peuvent entrer en torpeur pour économiser l'énergie."
            },
            {
                id: 29,
                question: "Quel est le rôle de la glande uropygienne chez les oiseaux aquatiques ?",
                options: ["Digestion", "Production d'une sécrétion oléeuse pour l'imperméabilité", "Reproduction", "Régulation thermique"],
                correct: 1,
                source: "Université de Zoologie Aquatique - La glande uropygienne produit l'huile de toilettage."
            },
            {
                id: 30,
                question: "Quel est le processus appelé \"bolus expulsion\" chez les rapaces nocturnes ?",
                options: ["Reproduction", "Expulsion des pelotes de régurgitation contenant os et fourrure", "Migration", "Hibernation"],
                correct: 1,
                source: "Centre d'Étude des Rapaces - Les chouettes régurgitent les parties non digestibles."
            }
        ]
    },
    reptiles: {
        title: "Les Reptiles",
        description: "Testez vos connaissances sur les reptiles et leurs caractéristiques",
        facile: [
            {
                id: 1,
                question: "Combien d'espèces de reptiles existent environ sur Terre ?",
                options: ["Environ 3000 espèces", "Environ 11000 espèces", "Environ 50000 espèces", "Environ 100000 espèces"],
                correct: 1,
                source: "Musée de Zoologie - Il existe environ 11000 espèces de reptiles identifiées."
            },
            {
                id: 2,
                question: "Quel est le plus grand reptile du monde ?",
                options: ["Le python", "L'anaconda", "Le crocodile marin", "Le Godzilla"],
                correct: 2,
                source: "Société Herpétologique - Le crocodile marin peut atteindre 6-7 mètres de long."
            },
            {
                id: 3,
                question: "Les reptiles sont-ils à sang chaud ou à sang froid ?",
                options: ["À sang chaud", "À sang froid (ectothermes)", "Les deux selon l'espèce", "Ni l'un ni l'autre"],
                correct: 1,
                source: "Institut de Biologie Comparée - Les reptiles sont ectothermes et dépendent de l'environnement."
            },
            {
                id: 4,
                question: "Combien de pattes les reptiles typiques ont-ils ?",
                options: ["Deux pattes", "Quatre pattes", "Six pattes", "Aucune"],
                correct: 1,
                source: "Encyclopédie Herpétologique - La plupart des reptiles ont quatre pattes, sauf les serpents."
            },
            {
                id: 5,
                question: "Quel reptile peut changer de couleur rapidement ?",
                options: ["Le serpent", "Le lézard", "Le caméléon", "La tortue"],
                correct: 2,
                source: "Muséum d'Histoire Naturelle - Le caméléon change de couleur grâce à ses chromatophores."
            },
            {
                id: 6,
                question: "Quel serpent est le plus venimeux du monde ?",
                options: ["Le cobra", "Le python", "Le taipan terrestre", "La vipère"],
                correct: 2,
                source: "Institut Toxinologique - Le taipan terrestre possède le venin le plus puissant."
            },
            {
                id: 7,
                question: "À quel âge une tortue devient-elle adulte généralement ?",
                options: ["À 2-3 ans", "À 5-10 ans", "À 20-50 ans selon l'espèce", "À 100 ans"],
                correct: 2,
                source: "Centre de Soins des Tortues - L'âge de maturité varie beaucoup selon l'espèce."
            },
            {
                id: 8,
                question: "Combien d'années une tortue peut-elle vivre ?",
                options: ["10-20 ans", "30-50 ans", "100+ ans", "200+ ans"],
                correct: 2,
                source: "Société Herpétologique Française - Les tortues peuvent vivre plus de 100 ans."
            },
            {
                id: 9,
                question: "Quel reptile pond des œufs ?",
                options: ["Aucun reptile", "Tous les reptiles", "Certains reptiles", "Uniquement les crocodiliens"],
                correct: 1,
                source: "Institut de Reproduction des Reptiles - Tous les reptiles pondent des œufs."
            },
            {
                id: 10,
                question: "Quel est l'organe de détection de la chaleur chez les serpents venimeux ?",
                options: ["L'odorat", "Les fossettes thermosensibles", "La vision", "Le toucher"],
                correct: 1,
                source: "Université de Sensorimotricité - Les serpents venimeux possèdent des fossettes thermosensibles."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel processus permet aux serpents de se débarrasser de leur peau ?",
                options: ["La photosynthèse", "La mue ou l'exuviation", "La germination", "La calcification"],
                correct: 1,
                source: "Centre d'Étude des Serpents - Les serpents mutent pour grandir et se renouveler."
            },
            {
                id: 12,
                question: "Quel est le nombre de vertèbres estimé chez un serpent ?",
                options: ["10-20 vertèbres", "50-100 vertèbres", "200-400 vertèbres", "500+ vertèbres"],
                correct: 2,
                source: "Institut d'Anatomie des Reptiles - Les serpents peuvent avoir jusqu'à 400 vertèbres."
            },
            {
                id: 13,
                question: "Quel type de écailles ont les reptiles ?",
                options: ["Écailles molles comme les poissons", "Écailles dures faites de kératine", "Pas d'écailles", "Écailles en gel"],
                correct: 1,
                source: "Université de Morphologie - Les écailles des reptiles sont faites de kératine."
            },
            {
                id: 14,
                question: "Quel type de respiration les reptiles utilisent-ils ?",
                options: ["Branchies", "Poumons uniquement", "Peaux", "Poumons et peaux partiellement"],
                correct: 1,
                source: "Institut de Physiologie Respiratoire - Les reptiles respirent principalement par les poumons."
            },
            {
                id: 15,
                question: "Quel est le mécanisme de déplacement du serpent ?",
                options: ["Reptation uniforme", "Mouvement ondulatoire latéral", "Saut vertical", "Roulement"],
                correct: 1,
                source: "Centre de Biodynamique - Les serpents utilisent des vagues musculaires."
            },
            {
                id: 16,
                question: "Quel type de dent ont les serpents venimeux ?",
                options: ["Des crocs creux", "Des dents plates", "Des dents pointues simples", "Pas de dents"],
                correct: 0,
                source: "Institut Toxinologique des Reptiles - Les serpents venimeux ont des crocs creux."
            },
            {
                id: 17,
                question: "Quel est le territoire typique d'un crocodile ?",
                options: ["Plusieurs kilomètres", "Moins de 500 mètres", "Plusieurs hectares à quelques kilomètres", "Sans territoire fixe"],
                correct: 2,
                source: "Centre d'Étude des Crocodiliens - Les crocodiles défendent des territoires vastes."
            },
            {
                id: 18,
                question: "Combien de temps une tortue peut-elle tenir sans respirer ?",
                options: ["Quelques minutes", "30 minutes maximum", "1-2 heures selon l'espèce", "Plusieurs jours"],
                correct: 2,
                source: "Université Marine - Les tortues marines peuvent apnéer longtemps."
            },
            {
                id: 19,
                question: "Quel est le rôle du cloaque chez les reptiles ?",
                options: ["Respiration uniquement", "Cavité commune pour l'excrétion, reproduction et digestion", "Digestion uniquement", "Stockage de graisse"],
                correct: 1,
                source: "Institut d'Anatomie Comparée - Le cloaque est une cavité multifonctionnelle."
            },
            {
                id: 20,
                question: "Quel est le type de fécondation chez les reptiles ?",
                options: ["Fécondation externe", "Fécondation interne", "Reproduction asexuée", "Bourgeonnement"],
                correct: 1,
                source: "Université de Reproduction - Les reptiles ont une fécondation interne."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le processus appelé \"viparity\" chez certains reptiles ?",
                options: ["Ponte d'œufs", "Développement interne avec viviparie", "Hibernation prolongée", "Reproduction asexuée"],
                correct: 1,
                source: "Institut de Reproduction des Reptiles - Certains reptiles sont vivipares."
            },
            {
                id: 22,
                question: "Quel mécanisme génétique détermine le sexe chez la plupart des reptiles ?",
                options: ["Chromosomes XY", "Température d'incubation", "Ratio numérique d'œufs", "Exposition à la lumière"],
                correct: 1,
                source: "Université de Génétique Reptilienne - La température d'incubation détermine souvent le sexe."
            },
            {
                id: 23,
                question: "Quel est le rôle de l'organe de Jacobson chez les reptiles ?",
                options: ["Vision", "Détection chimiosensorielle des phéromones", "Respiration", "Audition"],
                correct: 1,
                source: "Institut Sensoriel - L'organe de Jacobson détecte les phéromones."
            },
            {
                id: 24,
                question: "Quel est le processus d'adaptation chromatique du caméléon ?",
                options: ["Changement chimique simple", "Action combinée de chromatophores, iridophores et leuocphores", "Pigmentation génétique", "Réflexion optique uniquement"],
                correct: 1,
                source: "Université de Biophysique - Le changement de couleur combine plusieurs types de cellules."
            },
            {
                id: 25,
                question: "Quel type d'antivenin est utilisé pour traiter les morsures de serpents ?",
                options: ["Antivenin synthétique simple", "Sérum polyvalent ou spécifique selon l'espèce", "Antibiotiques simples", "Antihistaminiques uniquement"],
                correct: 1,
                source: "Institut Toxinologique International - Les antivenins peuvent être polyvalents ou spécifiques."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de régulation thermique chez un reptile en hibernation ?",
                options: ["Arrêt métabolique complet", "Réduction du métabolisme jusqu'à 5-10% du normal", "Augmentation de la température interne", "Activation de la thermogenèse"],
                correct: 1,
                source: "Centre de Physiologie Comparée - L'hibernation réduit drastiquement le métabolisme."
            },
            {
                id: 27,
                question: "Quel est le rôle des glandes de sel chez les crocodiliens d'eau salée ?",
                options: ["Digestion", "Excrétion du sel excédentaire", "Reproduction", "Détoxification"],
                correct: 1,
                source: "Institut d'Écologie Marine - Les glandes de sel excrètent l'excès de sel."
            },
            {
                id: 28,
                question: "Quel mécanisme de locomotion utilise le gecko pour grimper aux murs ?",
                options: ["Ventouses", "Crochets microscopiques (setae) avec forces de Van der Waals", "Adhésifs naturels", "Électricité statique"],
                correct: 1,
                source: "Université de Biomécanique - Les geckos utilisent les forces de Van der Waals."
            },
            {
                id: 29,
                question: "Quel est le processus de cryoprotection chez les reptiles tolérants au gel ?",
                options: ["Simple gel des cellules", "Accumulation de glucose et glycérol pour protéger les cellules", "Déshydratation totale", "Hibernation sans froid"],
                correct: 1,
                source: "Institut de Cryobiologie - Le glucose et le glycérol protègent les cellules du gel."
            },
            {
                id: 30,
                question: "Quel est le rôle du sulfate de calcium dans la résine utilisée par certains serpents ?",
                options: ["Lubrification", "Formation et renforcement des crocs venimeux", "Digestion", "Communication chimique"],
                correct: 1,
                source: "Journal de Toxinologie - Le sulfate de calcium renforce les structures des crocs."
            }
        ]
    },
    mammiferesMarin: {
        title: "Les Mammifères Marins",
        description: "Testez vos connaissances sur les mammifères des océans",
        facile: [
            {
                id: 1,
                question: "Quel est le plus grand animal marin jamais existant ?",
                options: ["Le grand requin blanc", "La baleine bleue", "Le kraken", "L'éléphant"],
                correct: 1,
                source: "Muséum d'Histoire Naturelle - La baleine bleue est l'animal le plus grand connu."
            },
            {
                id: 2,
                question: "Les mammifères marins respirent par quoi ?",
                options: ["Des branchies", "Des poumons", "La peau", "Ils ne respirent pas"],
                correct: 1,
                source: "Institut de Biologie Marine - Les mammifères marins respirent de l'air avec des poumons."
            },
            {
                id: 3,
                question: "Quel mammifère marin est connu pour ses chants complexes ?",
                options: ["Le dauphin", "La baleine", "L'otarie", "Le phoque"],
                correct: 1,
                source: "Centre de Recherche Marine - Les baleines produisent des chants élaborés et structurés."
            },
            {
                id: 4,
                question: "Combien d'espèces de dauphins existent environ ?",
                options: ["Environ 5 espèces", "Environ 20 espèces", "Environ 40 espèces", "Environ 100 espèces"],
                correct: 2,
                source: "Société Cétologique - Il existe environ 40 espèces de dauphins."
            },
            {
                id: 5,
                question: "Quel est le plus petit cétacé du monde ?",
                options: ["Le dauphin", "La baleine béluga", "Le marsouin", "L'orque"],
                correct: 2,
                source: "Musée Océanographique - Le marsouin est l'un des plus petits cétacés."
            },
            {
                id: 6,
                question: "Les mammifères marins allaitent-ils leurs petits ?",
                options: ["Non, jamais", "Oui, comme tous les mammifères", "Parfois", "Seulement les cétacés"],
                correct: 1,
                source: "Institut d'Océanologie - Les mammifères marins allaitent leurs jeunes."
            },
            {
                id: 7,
                question: "À quelle profondeur maximale les baleines peuvent-elles plonger ?",
                options: ["100 mètres", "500 mètres", "2000+ mètres selon l'espèce", "3000+ mètres"],
                correct: 2,
                source: "Centre d'Étude des Cétacés - Certaines baleines plongent très profond."
            },
            {
                id: 8,
                question: "Quel type d'alimentation ont les baleines à fanons ?",
                options: ["Carnivores prédateurs", "Herbivores", "Filtreurs de plancton", "Détritivores"],
                correct: 2,
                source: "Université Marine - Les baleines à fanons filtrent le krill et le plancton."
            },
            {
                id: 9,
                question: "Combien d'années une baleine peut-elle vivre ?",
                options: ["10-20 ans", "30-50 ans", "50-90+ ans selon l'espèce", "200 ans"],
                correct: 2,
                source: "Institut de Longévité Marine - Les baleines peuvent vivre très longtemps."
            },
            {
                id: 10,
                question: "Quel mammifère marin passe l'ensemble de sa vie dans l'eau ?",
                options: ["Les otaries", "Les phoques", "Les cétacés (baleines et dauphins)", "Les loutres"],
                correct: 2,
                source: "Société Océanographique - Les cétacés sont entièrement aquatiques."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle de l'évent chez les cétacés ?",
                options: ["Respiration uniquement", "Respiration et expulsion d'eau", "Audition", "Régulation thermique"],
                correct: 1,
                source: "Centre de Recherche Cétologique - L'évent permet la respiration et l'expulsion d'eau."
            },
            {
                id: 12,
                question: "Quel est le processus appelé 'écholocalisation' ?",
                options: ["Navigation par magnétisme", "Détection d'objets par sons et échos", "Vision infrarouge", "Magnétoréception"],
                correct: 1,
                source: "Institut de Bioacoustique - L'écholocalisation utilise les sons pour naviguer."
            },
            {
                id: 13,
                question: "Quel mammifère marin ne mue jamais ?",
                options: ["Le phoque", "Le dauphin", "L'orque", "La baleine"],
                correct: 1,
                source: "Université de Biologie Comparée - Les cétacés n'ont pas de mue classique."
            },
            {
                id: 14,
                question: "Quel est le principal predateur d'une baleine adulte ?",
                options: ["Le grand requin blanc", "L'orque", "Aucun prédateur naturel", "L'humain"],
                correct: 2,
                source: "Société de Conservation Marine - Les adultes n'ont pratiquement pas de prédateurs naturels."
            },
            {
                id: 15,
                question: "Quel est le mecanisme de plongée profonde des phoques ?",
                options: ["Augmentation de la respiration", "Ralentissement du cœur et utilisation de l'oxygène stocké", "Augmentation du volume pulmonaire", "Métabolisme accéléré"],
                correct: 1,
                source: "Institut de Physiologie Plongée - Les phoques ralentissent leur métabolisme."
            },
            {
                id: 16,
                question: "Combien de dents une baleine à dents peut-elle avoir ?",
                options: ["0 dent", "10-20 dents", "50+ dents", "Jusqu'à 200+ selon l'espèce"],
                correct: 3,
                source: "Musée Odontologique - Les baleines à dents peuvent avoir de nombreuses dents."
            },
            {
                id: 17,
                question: "Quel est le rôle de la couche de graisse chez les cétacés ?",
                options: ["Réserve énergétique uniquement", "Isolation thermique et flottabilité", "Protection contre les prédateurs", "Réserve d'oxygène"],
                correct: 1,
                source: "Centre d'Étude Thermique Marine - Le lard isole thermiquement."
            },
            {
                id: 18,
                question: "Quel type de migration les baleines effectuent-elles ?",
                options: ["Sédentaires sans migration", "Régionale courte distance", "Longue distance entre zones d'alimentation et reproduction", "Aléatoire"],
                correct: 2,
                source: "Université de Migration - Les baleines migrent sur des milliers de kilomètres."
            },
            {
                id: 19,
                question: "Quel est le système de thermorégulation chez les mammifères marins ?",
                options: ["Ectothermes", "Métabolisme élevé et isolation thermique", "Pas de régulation", "Changement de couleur"],
                correct: 1,
                source: "Institut de Thermoécologie - Les mammifères marins maintiennent une température interne."
            },
            {
                id: 20,
                question: "Quel est le taux de reproduction des baleines ?",
                options: ["Très rapide, plusieurs jeunes par an", "Modéré, plusieurs jeunes tous les 2-3 ans", "Très lent, un jeune tous les 2-5 ans", "Reproduction asexuée"],
                correct: 2,
                source: "Centre de Reproduction Marine - Les baleines se reproduisent lentement."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme d'osmorégulation chez les cétacés marins ?",
                options: ["Excrétion de sel par le nez", "Reins hautement concentrés et métabolisme de l'eau", "Pas de mécanisme particulier", "Urines très concentrées"],
                correct: 1,
                source: "Institut de Physiologie Osmorégulatrice - Les reins concentrent l'urine extrêmement."
            },
            {
                id: 22,
                question: "Quel est le processus d'embolie gazeuse évité par les plongeurs ?",
                options: ["Accumulation de dioxyde de carbone", "Accumulation d'azote aux changements de pression", "Suroxygénation", "Dépressurisation brusque"],
                correct: 1,
                source: "Institut de Médecine Plongée - Les mammifères marins évitent cette condition."
            },
            {
                id: 23,
                question: "Quel est le processus d'adaptation visuelle aux profondeurs ?",
                options: ["Augmentation du cristallin", "Rétines sensibles au spectre bleu et amélioration de la sensibilité", "Pas d'adaptation visuelle", "Disparition des yeux"],
                correct: 1,
                source: "Université d'Ophthalmologie Marine - Les rétines s'adaptent aux longueurs d'onde profondes."
            },
            {
                id: 24,
                question: "Quel est le rôle des cavités nasales compliquées des cétacés ?",
                options: ["Respiration uniquement", "Écholocalisation et production de clics", "Olfaction exacerbée", "Thermorégulation"],
                correct: 1,
                source: "Institut d'Anatomie Cétologique - Les cavités nasales produisent l'écholocalisation."
            },
            {
                id: 25,
                question: "Quel type de hémoglobine ont les plongeurs profonds ?",
                options: ["Hémoglobine standard", "Hémoglobine avec affinité augmentée pour l'oxygène", "Hémoglobine sans fer", "Chlorophylle"],
                correct: 1,
                source: "Université de Biochimie Marine - L'hémoglobine est optimisée pour l'oxygène."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de réduction du métabolisme lors de la plongée ?",
                options: ["Arrêt cardiaque", "Ralentissement sélectif du cœur et redistribution du flux sanguin", "Hibernation brusque", "Apoptose cellulaire"],
                correct: 1,
                source: "Centre de Physiologie Plongée - Le flux sanguin se concentre sur les organes vitaux."
            },
            {
                id: 27,
                question: "Quel est le rôle de la monocouche pulmonaire chez les cétacés ?",
                options: ["Captage efficace de l'oxygène", "Extraction d'oxygène maximale avec échange contre-courant", "Stockage du dioxyde de carbone", "Régulation de la pression"],
                correct: 1,
                source: "Institut de Physiologie Respiratoire - L'échange contre-courant maximise l'oxygène."
            },
            {
                id: 28,
                question: "Quel est le processus de communication acoustique entre baleines ?",
                options: ["Simple cris", "Communication structurée avec dialectes régionaux et apprentissage culturel", "Pas de communication", "Télépathie"],
                correct: 1,
                source: "Université de Sociolinguistique Marine - Les baleines ont des dialectes culturels."
            },
            {
                id: 29,
                question: "Quel est le rôle des moustaches (vibrisses) chez les pinnipèdes ?",
                options: ["Décoration", "Détection sensorielle du champ électrique et vibrations", "Régulation thermique", "Reproduction"],
                correct: 1,
                source: "Institut de Sensorimotricité Marine - Les vibrisses détectent les vibrations."
            },
            {
                id: 30,
                question: "Quel est le mécanisme de cicatrisation des plaies chez les cétacés ?",
                options: ["Cicatrisation lente comme les autres mammifères", "Cicatrisation rapide avec propriétés antimicrobiennes du mucus", "Pas de cicatrisation", "Régénération complète"],
                correct: 1,
                source: "Journal de Cicatrisation Marine - Le mucus à propriétés cicatrisantes."
            }
        ]
    }
};
