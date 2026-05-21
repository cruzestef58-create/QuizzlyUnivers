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
                source: "Institut de Comportement Animal - Le mouvement de la queue indique l'état émotionnel du chien (joie, stress)."
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
            },
            {
                id: 11,
                question: "Quel est le record de vitesse pour un chien en course ?",
                options: ["30 km/h", "40 km/h", "72 km/h", "90 km/h"],
                correct: 2,
                source: "Fédération Cynologique Internationale - Le lévrier peut atteindre 72 km/h en sprint."
            },
            {
                id: 12,
                question: "À quel âge un chien est-il considéré comme sénior ?",
                options: ["À 5 ans", "À 7 ans", "À 10 ans", "À 15 ans"],
                correct: 1,
                source: "American Veterinary Medical Association - Un chien entre généralement dans la phase sénior vers 7 ans."
            },
            {
                id: 13,
                question: "Combien de muscles possède un chien dans ses oreilles ?",
                options: ["2 muscles", "8 muscles", "32 muscles", "50 muscles"],
                correct: 2,
                source: "Institut d'Anatomie Canine - Les chiens ont environ 32 muscles dans chaque oreille."
            },
            {
                id: 14,
                question: "Quelle est la vision des couleurs chez le chien ?",
                options: ["Identique à l'humain", "Daltonisme total", "Pas de distinction rouge-vert", "Meilleure vision nocturne"],
                correct: 2,
                source: "Université de Biologie Canine - Les chiens voient principalement en bleu et jaune."
            },
            {
                id: 15,
                question: "Quel comportement indique que le chien veut jouer ?",
                options: ["Oreilles aplaties", "Position arquée avec antérieurs baissés et postérieurs élevés", "Queue basse", "Regard fixe"],
                correct: 1,
                source: "Association Française de Comportement Animal - C'est l'invitation au jeu typique."
            },
            {
                id: 16,
                question: "À quelle distance un chien peut-il sentir une odeur ?",
                options: ["Jusqu'à 100 mètres", "Jusqu'à 1 kilomètre", "Jusqu'à 10 kilomètres", "Sans limite de distance"],
                correct: 2,
                source: "Institut de Recherche Olfactive - Les chiens peuvent détecter certaines odeurs à 10 km."
            },
            {
                id: 17,
                question: "Quel est le cycle de chaleur d'une chienne ?",
                options: ["Tous les 6 mois", "Tous les ans", "Tous les 2-3 ans", "Continu"],
                correct: 0,
                source: "Fédération Française de Cynologie - Le cycle de chaleur dure environ 6 mois chez la plupart des races."
            },
            {
                id: 18,
                question: "Combien de temps dure la gestation chez une chienne ?",
                options: ["40 jours", "58-65 jours", "90 jours", "120 jours"],
                correct: 1,
                source: "American Veterinary Medical Association - La gestation chez le chien dure environ 63 jours."
            },
            {
                id: 19,
                question: "Quel aliment courant est toxique pour les chiens ?",
                options: ["Le pain", "Le chocolat", "La carotte", "La pomme"],
                correct: 1,
                source: "Animal Poison Control Center - La théobromine du chocolat est toxique pour les chiens."
            },
            {
                id: 20,
                question: "À quel âge les chiots commencent-ils à socialiser entre eux ?",
                options: ["À 2-3 semaines", "À 4-5 semaines", "À 8-10 semaines", "À 3-4 mois"],
                correct: 1,
                source: "Institut d'Éthologie Canine - La socialisation fraternelle commence vers 4-5 semaines."
            },
            {
                id: 21,
                question: "Quel est le coût annuel moyen d'entretien d'un chien ?",
                options: ["500-1000€", "1000-2000€", "2000-5000€", "5000€+"],
                correct: 2,
                source: "Fédération Française de Cynologie - Les frais annuels incluent nourriture, soins et assurance."
            },
            {
                id: 22,
                question: "Combien de fois par an un chien doit-il consulter un vétérinaire ?",
                options: ["Une fois", "Deux fois", "Trois fois", "Quatre fois"],
                correct: 1,
                source: "Association Vétérinaire Française - Un bilan annuel complet minimum est recommandé."
            },
            {
                id: 23,
                question: "Quel est le tempérament typique du Labrador Retriever ?",
                options: ["Agressif", "Amical, loyal et énergique", "Craintif", "Dominateur"],
                correct: 1,
                source: "American Kennel Club - Le Labrador est connu pour son tempérament doux et loyal."
            },
            {
                id: 24,
                question: "Combien de races de chiens sont officiellement reconnues ?",
                options: ["50 races", "150 races", "350+ races", "500+ races"],
                correct: 2,
                source: "Fédération Cynologique Internationale - Plus de 350 races sont reconnues officiellement."
            },
            {
                id: 25,
                question: "Quel est le poids d'un berger allemand adulte typique ?",
                options: ["15-25 kg", "25-35 kg", "35-50 kg", "50-70 kg"],
                correct: 1,
                source: "American Kennel Club - Les bergers allemands pèsent généralement 25-35 kg."
            },
            {
                id: 26,
                question: "À quel âge l'espérance de vie moyenne d'un chien est-elle la plus longue ?",
                options: ["À 2 ans", "À 5 ans", "À 10 ans", "À 15 ans"],
                correct: 2,
                source: "Études Vétérinaires - L'espérance de vie varie de 10-13 ans selon la race."
            },
            {
                id: 27,
                question: "Quel est le rôle des jeux d'enrichissement pour le chien ?",
                options: ["Uniquement divertissement", "Stimulation mentale et prévention de l'ennui", "Épuisement physique", "Socialisation"],
                correct: 1,
                source: "Institut de Comportement Canin - L'enrichissement mental est crucial pour le bien-être."
            },
            {
                id: 28,
                question: "Combien de variations de babouin le chien possède-t-il dans ses vocalisations ?",
                options: ["3-5 babouins", "10 babouins", "15-20 babouins", "25+ babouins"],
                correct: 2,
                source: "Institut d'Étude des Vocalisations - Les chiens produisent environ 15-20 sons différents."
            },
            {
                id: 29,
                question: "Quel est le meilleur moment de la journée pour entraîner un chien ?",
                options: ["Tôt le matin", "En milieu d'après-midi", "Selon le chien et la saison", "En fin d'après-midi"],
                correct: 2,
                source: "American Kennel Club - Les chiens ont des rythmes individuels d'apprentissage."
            },
            {
                id: 30,
                question: "Quel est le prix moyen d'un chiot de race chez un éleveur responsable ?",
                options: ["100-300€", "300-800€", "800-2000€", "2000€+"],
                correct: 2,
                source: "Fédération Cynologique - Les prix varient selon la race et l'éleveur."
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
            },
            {
                id: 31,
                question: "Quel est l'impact du sevrage précoce sur le développement comportemental ?",
                options: ["Aucun impact", "Problèmes de socialisation et d'anxiété possibles", "Amélioration de l'indépendance", "Renforce le lien avec la mère"],
                correct: 1,
                source: "International Association of Animal Behavior Consultants - Le sevrage précoce peut causer du stress."
            },
            {
                id: 32,
                question: "Quel est le mécanisme de la 'morsure inhibée' chez les chiots ?",
                options: ["Morsure sans danger", "Capacité à moduler la pression des morsures apprises du jeu", "Absence de morsure", "Réaction génétique"],
                correct: 1,
                source: "Université de Comportement Canin - Les chiots apprennent à contrôler leur morsure par le jeu."
            },
            {
                id: 33,
                question: "Quel est le seuil de douleur généralement accepté chez les chiens ?",
                options: ["Très bas", "Similaire aux humains", "Plus élevé que les humains", "Inexistant"],
                correct: 2,
                source: "Centre Vétérinaire d'Anesthésiologie - Les chiens ont généralement un seuil de douleur plus élevé."
            },
            {
                id: 34,
                question: "Quel comportement indique l'attachement sécurisé d'un chiot ?",
                options: ["Détachement constant", "Exploration confiante avec retours au maître", "Anxiété séparation totale", "Agressivité défensive"],
                correct: 1,
                source: "Institut d'Étude de l'Attachement - L'attachement sécurisé permet l'exploration équilibrée."
            },
            {
                id: 35,
                question: "Quel est le rôle de la glucosamine pour les articulations du chien ?",
                options: ["Aucun rôle", "Soutien du cartilage et réduction de l'arthrite", "Renforcement des muscles", "Anti-inflammatoire"],
                correct: 1,
                source: "Université Vétérinaire - La glucosamine soutient la santé articulaire."
            },
            {
                id: 36,
                question: "Quel est le processus de 'counter-surfing' et comment le corriger ?",
                options: ["Sauter sur les tables", "Sauter sur les meubles - corrigé par l'ignorance et redirection", "Comportement normal", "Maladie"],
                correct: 1,
                source: "Association Française de Comportement - L'ignorance décourage ce comportement."
            },
            {
                id: 37,
                question: "Combien de neurotransmetteurs contrôlent l'anxiété chez les chiens ?",
                options: ["1 neurotransmetteur", "2-3 neurotransmetteurs", "5-10 neurotransmetteurs", "Plus de 20"],
                correct: 2,
                source: "Université de Neurosciences Canine - La sérotonine, GABA et autres interviennent."
            },
            {
                id: 38,
                question: "Quel est l'effet du clicker training sur le cerveau du chien ?",
                options: ["Pas d'effet", "Libération de dopamine et renforcement du comportement", "Stress accru", "Oubli rapide"],
                correct: 1,
                source: "Institut de Neurosciences du Comportement - Le son du clicker crée une association positive."
            },
            {
                id: 39,
                question: "Quel est le temps moyen de gestation chez une chienne porteuse ?",
                options: ["40 jours", "58-65 jours", "85 jours", "120 jours"],
                correct: 1,
                source: "Centre de Reproduction Canine - La gestation dure environ 63 jours chez le chien."
            },
            {
                id: 40,
                question: "Quel est le processus appelé 'habituation' dans le contexte des bruits ?",
                options: ["Peur accrue", "Réduction progressive de la réaction à un bruit répétitif", "Ignorance du bruit", "Sensibilité augmentée"],
                correct: 1,
                source: "International Association of Animal Behavior Consultants - L'habituation réduit l'anxiété aux bruits."
            },
            {
                id: 41,
                question: "Quel est le meilleur age pour commencer l'entraînement à la propreté ?",
                options: ["À partir de 2 mois", "À partir de 3-4 mois", "À partir de 6 mois", "À partir de 1 an"],
                correct: 1,
                source: "American Kennel Club - La propreté peut être travaillée dès 3-4 mois avec patience."
            },
            {
                id: 42,
                question: "Quel est l'impact de la castration/stérilisation sur le comportement ?",
                options: ["Aucun changement", "Réduction de l'agressivité et du marquage territorial", "Augmentation d'agressivité", "Hyperactivité accrue"],
                correct: 1,
                source: "Université Vétérinaire - La stérilisation réduit certains comportements hormono-dépendants."
            },
            {
                id: 43,
                question: "Quel est le rôle de l'exercice physique dans la gestion de l'anxiété ?",
                options: ["Aucun rôle", "Libération d'endorphines et réduction du stress", "Augmentation du stress", "Pas de relation"],
                correct: 1,
                source: "Institut d'Étude de l'Anxiété - L'exercice régulier améliore la santé mentale du chien."
            },
            {
                id: 44,
                question: "Quel est le processus de 'leurre' en entraînement canin ?",
                options: ["Tromper le chien", "Utiliser un objet pour guider le chien vers le comportement désiré", "Punition positive", "Jeu du leurre"],
                correct: 1,
                source: "Association Française d'Éducation Canine - Le leurre est une technique classique de renforcement positif."
            },
            {
                id: 45,
                question: "Quel est l'intervalle optimal entre deux séances d'entraînement ?",
                options: ["Immédiatement après", "24-48 heures", "7 jours", "2 semaines"],
                correct: 1,
                source: "Institut de Psychologie de l'Apprentissage - L'espacement optimal favorise la rétention."
            },
            {
                id: 46,
                question: "Quel est le rôle des enzymes digestives chez le chien ?",
                options: ["Aucun rôle", "Décomposition des aliments et absorption des nutriments", "Production d'énergie uniquement", "Détoxification"],
                correct: 1,
                source: "Centre de Nutrition Canine - Les enzymes digestives sont essentielles à la santé."
            },
            {
                id: 47,
                question: "Quel est l'impact de la musique sur le stress du chien ?",
                options: ["Aucun impact", "Réduction du stress et de l'anxiété selon le type de musique", "Augmentation du stress", "Hyperactivité"],
                correct: 1,
                source: "Université de Zoopsychologie - La musique apaisante réduit le cortisol chez le chien."
            },
            {
                id: 48,
                question: "Quel est le processus de 'redirection' de comportement ?",
                options: ["Punition", "Guider le chien vers un comportement alternatif acceptable", "Ignorance du comportement", "Récompense immédiate"],
                correct: 1,
                source: "Association Française de Comportement Animal - La redirection canalise l'énergie positivement."
            },
            {
                id: 49,
                question: "Quel est le taux d'apprentissage optimal pour les chiens ?",
                options: ["Un apprentissage par jour", "Plusieurs courtes sessions quotidiennes", "Une session longue par semaine", "Pas de rythme spécifique"],
                correct: 1,
                source: "Institut de Psychologie Canine - L'apprentissage distribué est plus efficace."
            },
            {
                id: 50,
                question: "Quel est l'impact de la socialisation précoce sur l'adaptation future ?",
                options: ["Aucun impact", "Meilleure adaptation à l'environnement et réduction de la peur", "Augmentation des peurs", "Indépendance exacerbée"],
                correct: 1,
                source: "Université de Développement Comportemental - La socialisation précoce est cruciale."
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
            },
            {
                id: 51,
                question: "Quel est le mécanisme de la 'protéine C réactive' en tant que marqueur inflammatoire chez le chien ?",
                options: ["Pas de protéine C réactive", "Marqueur d'inflammation et d'infection", "Protéine structurale", "Enzyme digestive"],
                correct: 1,
                source: "Université Vétérinaire d'Immunologie - La PCR est un marqueur important chez le chien."
            },
            {
                id: 52,
                question: "Quel est le rôle du thalamus dans le traitement sensoriel du chien ?",
                options: ["Pas de rôle", "Relai et filtrage des informations sensorielles", "Production de neurotransmetteurs uniquement", "Contrôle moteur"],
                correct: 1,
                source: "Institut de Neurosciences Comparées - Le thalamus est crucial pour la perception sensorielle."
            },
            {
                id: 53,
                question: "Quel est le processus de 'long-term potentiation' dans l'apprentissage canin ?",
                options: ["Oubli rapide", "Renforcement durable des connexions synaptiques", "Perte de mémoire", "Apprentissage immédiat"],
                correct: 1,
                source: "Université de Neurosciences de l'Apprentissage - La LTP est la base de la mémoire."
            },
            {
                id: 54,
                question: "Quel est le rôle de l'hippocampe dans la mémoire spatiale du chien ?",
                options: ["Aucun rôle", "Formation et récupération de la mémoire spatiale", "Production de hormones", "Régulation thermique"],
                correct: 1,
                source: "Institut d'Étude de la Mémoire - L'hippocampe est essentiel pour la navigation."
            },
            {
                id: 55,
                question: "Quel est le processus d'extinction d'une réaction apprise ?",
                options: ["Renforcement du comportement", "Exposition répétée au stimulus sans renforcement", "Punition accrue", "Oubli automatique"],
                correct: 1,
                source: "Association Française de Modification Comportementale - L'extinction réduit les associations apprises."
            },
            {
                id: 56,
                question: "Quel est le rôle des amygdales dans le traitement de la peur chez le chien ?",
                options: ["Aucun rôle", "Traitement des émotions aversives et création de souvenirs de peur", "Production d'adrénaline uniquement", "Contrôle moteur"],
                correct: 1,
                source: "Université de Neurosciences des Émotions - L'amygdale est le centre émotionnel."
            },
            {
                id: 57,
                question: "Quel est le mécanisme de la 'sensitization' face aux stimuli menaçants ?",
                options: ["Réduction de la réaction", "Augmentation progressive de la réaction au stimulus", "Habituation", "Indifférence"],
                correct: 1,
                source: "Institut de Psychologie Comportementale - La sensibilisation augmente l'anxiété."
            },
            {
                id: 58,
                question: "Quel est le rôle de la préfrontal cortex dans la prise de décision du chien ?",
                options: ["Aucun rôle", "Évaluation des conséquences et contrôle des impulsions", "Mémoire uniquement", "Sensibilité gustative"],
                correct: 1,
                source: "Université de Neurosciences Décisionnelles - La préfrontal cortex régule le comportement."
            },
            {
                id: 59,
                question: "Quel est le processus d'équilibre entre inhibition et excitation neuronale ?",
                options: ["Pas d'équilibre", "Balance entre GABA (inhibition) et glutamate (excitation)", "Surdominance de l'excitation", "Inhibition complète"],
                correct: 1,
                source: "Institut de Neurochimie - L'équilibre excitateur-inhibiteur est crucial."
            },
            {
                id: 60,
                question: "Quel est le rôle du cervelet dans la coordination motrice du chien ?",
                options: ["Aucun rôle", "Coordination et équilibre des mouvements", "Production de neurotransmetteurs", "Stockage de mémoire"],
                correct: 1,
                source: "Université de Neurosciences Motrices - Le cervelet coordonne les mouvements complexes."
            },
            {
                id: 61,
                question: "Quel est le mécanisme de la 'meta-cognition' chez les chiens ?",
                options: ["Pas de conscience", "Conscience de ses propres états mentaux et connaissances", "Simple réflexe", "Imitation"],
                correct: 1,
                source: "Université de Cognition Animale - Certaines études suggèrent une forme de métacognition."
            },
            {
                id: 62,
                question: "Quel est le rôle du noyau accumbens dans la récompense ?",
                options: ["Aucun rôle", "Centre du plaisir et de la récompense", "Production de cortisol", "Contrôle moteur"],
                correct: 1,
                source: "Institut de Neurobiologie de la Récompense - L'accumbens libère de la dopamine."
            },
            {
                id: 63,
                question: "Quel est le processus de 'state-dependent learning' ?",
                options: ["Pas d'effet d'état", "L'apprentissage dépend de l'état émotionnel et physiologique", "Apprentissage indépendant de l'état", "Oubli rapide"],
                correct: 1,
                source: "Université de Psychologie de l'Apprentissage - L'état affecte la rétention."
            },
            {
                id: 64,
                question: "Quel est le rôle de l'insula dans l'intéroception du chien ?",
                options: ["Aucun rôle", "Conscience interne de l'état corporel", "Vision uniquement", "Audition"],
                correct: 1,
                source: "Institut de Neurosciences Intéroceptives - L'insula traite les sensations internes."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'working memory' chez le chien ?",
                options: ["Pas de mémoire de travail", "Maintien temporaire d'informations pour les tâches actuelles", "Mémoire permanente", "Oubli immédiat"],
                correct: 1,
                source: "Université de Cognition Canine - Les chiens ont une mémoire de travail fonctionnelle."
            },
            {
                id: 66,
                question: "Quel est le rôle du système nerveux autonome dans la réaction au stress ?",
                options: ["Aucun rôle", "Activation du sympathique et régulation du parasympathique", "Sensoriel uniquement", "Moteur uniquement"],
                correct: 1,
                source: "Institut de Physiologie du Stress - L'autonome règle les réactions de stress."
            },
            {
                id: 67,
                question: "Quel est le processus de 'neural adaptation' ?",
                options: ["Pas d'adaptation", "Réduction de la réactivité neuronale à un stimulus constant", "Augmentation de la réactivité", "Changement d'emplacement"],
                correct: 1,
                source: "Université de Neuroplasticité - L'adaptation neuronale crée l'habituation."
            },
            {
                id: 68,
                question: "Quel est le rôle du cortex cingulaire antérieur dans la détection d'erreur ?",
                options: ["Aucun rôle", "Détection des erreurs et conflit cognitif", "Production de salive", "Contrôle de l'équilibre"],
                correct: 1,
                source: "Institut de Neurosciences de l'Erreur - Le CCA détecte les divergences attentionnelles."
            },
            {
                id: 69,
                question: "Quel est le mécanisme du 'fear extinction' à niveau neuronal ?",
                options: ["Effacement de la mémoire", "Formation d'une nouvelle mémoire inhibitrice via la préfrontal cortex", "Désactivation de l'amygdale", "Oubli complet"],
                correct: 1,
                source: "Université de Modification de la Peur - L'extinction crée de nouvelles associations."
            },
            {
                id: 70,
                question: "Quel est le rôle de la substance grise dans le traitement cognitif ?",
                options: ["Pas de rôle", "Traitement de l'information (neurones et synapses)", "Transmission longue distance uniquement", "Stockage permanent"],
                correct: 1,
                source: "Institut d'Anatomie Cérébrale - La substance grise effectue les calculs neuronaux."
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
            },
            {
                id: 11,
                question: "Quel est le record de saut vertical pour un chat ?",
                options: ["50 cm", "1 mètre", "1,5 mètre", "2 mètres"],
                correct: 2,
                source: "Institut de Zoologie - Les chats peuvent sauter 1,5 mètre de haut."
            },
            {
                id: 12,
                question: "Combien d'années vivent généralement les chats domestiques ?",
                options: ["5-7 ans", "10-12 ans", "15-18 ans", "20+ ans"],
                correct: 2,
                source: "Association Féline Française - L'espérance de vie moyenne est 15-18 ans."
            },
            {
                id: 13,
                question: "Quel est le temps moyen d'un chat pour faire ses besoins ?",
                options: ["10 secondes", "30 secondes", "1 minute", "5 minutes"],
                correct: 1,
                source: "Institut d'Éthologie Féline - Un chat passe généralement 30-40 secondes."
            },
            {
                id: 14,
                question: "À quel âge les chatons commencent-ils à chasser ?",
                options: ["À 2 mois", "À 3-4 mois", "À 6 mois", "À 1 an"],
                correct: 1,
                source: "Fédération Féline Française - Les instincts de chasse émergent vers 3-4 mois."
            },
            {
                id: 15,
                question: "Quel est le bruit que produit un chat satisfait ?",
                options: ["Miaulement", "Ronronnement", "Craquement", "Feulement"],
                correct: 1,
                source: "Institut de Comportement Animal - Le ronronnement est signe de contentement."
            },
            {
                id: 16,
                question: "À quelle distance un chat peut-il entendre ?",
                options: ["Jusqu'à 1 mètre", "Jusqu'à 10 mètres", "Jusqu'à 100 mètres", "Sans limite définie"],
                correct: 2,
                source: "Institut de Sensorimotricité Féline - L'audition du chat est excellente jusqu'à 100m."
            },
            {
                id: 17,
                question: "Combien de races de chats domestiques existent ?",
                options: ["5-10 races", "20-30 races", "50+ races", "100+ races"],
                correct: 2,
                source: "Fédération Internationale Féline - Plus de 50 races sont officiellement reconnues."
            },
            {
                id: 18,
                question: "Quel est le poids d'un chat adulte moyenne ?",
                options: ["2-3 kg", "4-5 kg", "6-8 kg", "9-10 kg"],
                correct: 1,
                source: "Association Vétérinaire Féline - Le poids moyen est 4-5 kg."
            },
            {
                id: 19,
                question: "Combien de respirations par minute un chat au repos a-t-il ?",
                options: ["10-15 respirations", "20-30 respirations", "40-50 respirations", "60+ respirations"],
                correct: 1,
                source: "Institut de Physiologie Féline - Les chats respirent 20-30 fois par minute au repos."
            },
            {
                id: 20,
                question: "Quel aliment humain est sûr pour les chats ?",
                options: ["Chocolat", "Oignon", "Poulet cuit", "Raisin"],
                correct: 2,
                source: "Animal Poison Control - Le poulet cuit sans assaisonnement est sûr."
            },
            {
                id: 21,
                question: "À quel âge un chat devient-il sexuellement mature ?",
                options: ["À 3 mois", "À 6 mois", "À 9-12 mois", "À 18 mois"],
                correct: 1,
                source: "Fédération Féline Française - La maturité sexuelle arrive vers 6 mois."
            },
            {
                id: 22,
                question: "Quel est l'instinct naturel d'un chaton orphelin ?",
                options: ["Chercher de la nourriture", "Chercher sa mère", "Chercher un territoire", "Dormir"],
                correct: 1,
                source: "Institut de Développement Félin - Les chatons orphelins miaulent pour leur mère."
            },
            {
                id: 23,
                question: "Combien de côtes possède un chat ?",
                options: ["12 côtes", "16 côtes", "20 côtes", "24 côtes"],
                correct: 2,
                source: "Institut d'Anatomie Féline - Les chats ont 13 paires de côtes (26 total)."
            },
            {
                id: 24,
                question: "Quel est le type de pelage le plus courant chez les chats ?",
                options: ["Pelage court", "Pelage long", "Pelage sans poil", "Pelage bouclé"],
                correct: 0,
                source: "Fédération Féline - Le pelage court est le plus courant."
            },
            {
                id: 25,
                question: "À quel âge un chat atteint sa pleine croissance ?",
                options: ["À 6 mois", "À 12 mois", "À 18 mois", "À 2 ans"],
                correct: 1,
                source: "Centre Vétérinaire Félin - La croissance est complète vers 12-18 mois."
            },
            {
                id: 26,
                question: "Quel est le coût annuel moyen d'un chat ?",
                options: ["100-300€", "300-700€", "700-1500€", "1500€+"],
                correct: 2,
                source: "Association Féline Française - Les frais incluent nourriture, soins, litter..."
            },
            {
                id: 27,
                question: "Combien de fois par jour un chat doit-il manger en tant qu'adulte ?",
                options: ["1 fois", "2 fois", "3 fois", "Ad libitum"],
                correct: 1,
                source: "Fédération Féline - Un chat adulte mange généralement 2 fois par jour."
            },
            {
                id: 28,
                question: "Quel est le comportement du chat quand sa queue se gonfle ?",
                options: ["Joie", "Peur ou agression défensive", "Faim", "Sommeil"],
                correct: 1,
                source: "Institut de Comportement Animal - Une queue gonflée indique la peur."
            },
            {
                id: 29,
                question: "À quel âge les chatons ouvrent-ils complètement leurs yeux ?",
                options: ["À 1-2 semaines", "À 3-4 semaines", "À 8-12 semaines", "À 6 mois"],
                correct: 1,
                source: "Fédération Féline - Les yeux s'ouvrent complètement vers 3-4 semaines."
            },
            {
                id: 30,
                question: "Quel est le meilleur âge pour adopter un chaton ?",
                options: ["À 4-6 semaines", "À 8-12 semaines", "À 4-6 mois", "À 1 an"],
                correct: 1,
                source: "Association de Protection Féline - 8-12 semaines est optimal pour l'adoption."
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
            },
            {
                id: 31,
                question: "Quel est le nombre de vertèbres caudale chez un chat ?",
                options: ["13 vertèbres", "20 vertèbres", "27-33 vertèbres", "40 vertèbres"],
                correct: 2,
                source: "Institut d'Anatomie Féline - Le chat a 27-33 vertèbres caudales."
            },
            {
                id: 32,
                question: "Quel est l'impact de la stérilisation sur le comportement d'une chatte ?",
                options: ["Aucun impact", "Réduction de l'agressivité et comportement d'accouplement", "Augmentation d'agressivité", "Changement de personnalité complet"],
                correct: 1,
                source: "Association Vétérinaire Féline - La stérilisation réduit les comportements hormonaux."
            },
            {
                id: 33,
                question: "Quel est le processus appelé 'Flehmen' chez le chat ?",
                options: ["Bâillement", "Réaction olfactive pour détection de phéromones", "Léchage", "Étirement"],
                correct: 1,
                source: "Institut de Comportement Félin - C'est la réponse au sac vomeronasal."
            },
            {
                id: 34,
                question: "Quel est le rôle des pattes postérieures dans l'équilibre du chat ?",
                options: ["Aucun rôle", "Stabilisation et ajustement fin de la posture", "Locomotion uniquement", "Défense"],
                correct: 1,
                source: "Institut de Biomécanique - Les pattes postérieures assurent la stabilité."
            },
            {
                id: 35,
                question: "Combien de sortes de miaulements un chat peut-il produire ?",
                options: ["5-10 miaulements", "25-40 miaulements", "50+ miaulements", "Plus de 100 variations"],
                correct: 1,
                source: "Institut de Vocalisations Félins - Les chats produisent environ 25-40 sons."
            },
            {
                id: 36,
                question: "Quel est le rôle de la troisième paupière (nictitante) chez le chat ?",
                options: ["Aucun rôle", "Protection et lubrification de l'œil", "Vision uniquement", "Audition"],
                correct: 1,
                source: "Institut d'Ophtalmologie Féline - Elle protège l'œil des débris."
            },
            {
                id: 37,
                question: "Quel est le processus de 'kneading' ou 'malaxage' chez l'adulte ?",
                options: ["Préparation du lit", "Comportement hérité d'allaitement, signe de bien-être", "Agressivité", "Ennui"],
                correct: 1,
                source: "Institut de Comportement Animal - C'est un comportement de contentement."
            },
            {
                id: 38,
                question: "Quel est l'âge auquel les chatons sevrent naturellement ?",
                options: ["À 4 semaines", "À 6-8 semaines", "À 3-4 mois", "À 6 mois"],
                correct: 1,
                source: "Fédération Féline - Le sevrage naturel se fait vers 6-8 semaines."
            },
            {
                id: 39,
                question: "Quel est le nombre de vibrisses (moustaches) sensorielles chez un chat ?",
                options: ["8 vibrisses", "12 vibrisses", "24 vibrisses", "40+ vibrisses"],
                correct: 2,
                source: "Institut de Sensorimotricité Féline - Les chats ont environ 24 vibrisses principales."
            },
            {
                id: 40,
                question: "Quel est le rôle du caecum digestif chez le chat ?",
                options: ["Aucun rôle", "Absorption de l'eau et fermentation mineure", "Stockage de nourriture", "Production d'enzymes"],
                correct: 1,
                source: "Centre de Nutrition Féline - Le caecum est rudimentaire chez le chat."
            },
            {
                id: 41,
                question: "Quel est le temps moyen d'une session de toilettage pour un chat ?",
                options: ["5-10 minutes par jour", "30-60 minutes par jour", "2-3 heures par jour", "Varie selon la race"],
                correct: 1,
                source: "Institut d'Hygiène Féline - Les chats passent 30-60 minutes à se toiletter."
            },
            {
                id: 42,
                question: "Quel est le rôle des griffes chez le chat ?",
                options: ["Uniquement attaque", "Chasse, grimpe, marquage territorial et communication", "Équilibre uniquement", "Toilettage"],
                correct: 1,
                source: "Institut d'Éthologie Féline - Les griffes ont de multiples usages."
            },
            {
                id: 43,
                question: "À quel âge les chatons perdent-ils leurs dents de lait ?",
                options: ["À 2-3 mois", "À 3-5 mois", "À 6-7 mois", "À 8-12 mois"],
                correct: 2,
                source: "Fédération Féline - Les dents définitives arrivent vers 6-7 mois."
            },
            {
                id: 44,
                question: "Quel est le processus d'élimination des toxines chez le chat ?",
                options: ["Foie uniquement", "Foie, reins et système lymphatique", "Peau uniquement", "Pas d'élimination"],
                correct: 1,
                source: "Institut de Toxicologie Féline - Plusieurs organes participent."
            },
            {
                id: 45,
                question: "Quel est le taux de consommation d'eau normal pour un chat ?",
                options: ["10-20 ml/kg/jour", "30-50 ml/kg/jour", "70-100 ml/kg/jour", "120+ ml/kg/jour"],
                correct: 1,
                source: "Centre Vétérinaire Félin - Un chat boit environ 40 ml/kg/jour."
            },
            {
                id: 46,
                question: "Quel est le rôle de la prostrate chez le chat mâle ?",
                options: ["Aucun rôle", "Production de fluide séminal", "Digestion", "Respiration"],
                correct: 1,
                source: "Institut d'Anatomie Reproductive - La prostrate soutient la reproduction."
            },
            {
                id: 47,
                question: "Quel est le processus de la 'hiérarchie linéaire' chez les chats de groupe ?",
                options: ["Pas de hiérarchie", "Ordre dominance établi mais flexibilité possible", "Hiérarchie stricte fixe", "Anarchie complète"],
                correct: 1,
                source: "Institut d'Éthologie Féline - Les chats ont des rapports moins hiérarchiques."
            },
            {
                id: 48,
                question: "Quel est le poids typique d'une portée de chatons à la naissance ?",
                options: ["50-100 grammes", "100-150 grammes", "150-200 grammes", "200+ grammes"],
                correct: 1,
                source: "Centre de Reproduction Féline - Les chatons pèsent 100-150g à la naissance."
            },
            {
                id: 49,
                question: "Quel est le rôle du temps de jeu structuré pour un chat ?",
                options: ["Aucun rôle", "Enrichissement mental et dépense énergétique", "Ennui accru", "Agressivité"],
                correct: 1,
                source: "Institut de Comportement Animal - Le jeu est essentiel pour le bien-être."
            },
            {
                id: 50,
                question: "Quel est le mécanisme d'adaptation du chat à l'obscurité ?",
                options: ["Pas d'adaptation", "Pupilles dilatables et tapetum lucidum réflecteur", "Changement de couleur", "Utilisation du sonar"],
                correct: 1,
                source: "Institut d'Ophtalmologie - Les chats ont une vision nocturne supérieure."
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
            },
            {
                id: 51,
                question: "Quel est le mécanisme du 'syndrome héréditaire polycystique rénal' chez les chats ?",
                options: ["Pas de syndrome", "Mutation génétique causant des kystes rénaux progressifs", "Infection virale", "Malnutrition"],
                correct: 1,
                source: "Institut de Génétique Féline - Condition héréditaire dans certaines races."
            },
            {
                id: 52,
                question: "Quel est le rôle de la lipase pancréatique féline dans la digestion ?",
                options: ["Digestion des protéines", "Digestion des lipides", "Digestion des glucides", "Production d'insuline"],
                correct: 1,
                source: "Université de Biochimie Féline - Essentielle pour l'absorption des graisses."
            },
            {
                id: 53,
                question: "Quel est le processus de la 'cardiomyopathie hypertrophique féline' ?",
                options: ["Pas de maladie", "Épaississement du myocarde cardiaque", "Dilatation cardiaque", "Fibrillation"],
                correct: 1,
                source: "Journal de Cardiologie Vétérinaire - Maladie commune chez les chats."
            },
            {
                id: 54,
                question: "Quel est le rôle de la taurine dans la santé cardiaque féline ?",
                options: ["Aucun rôle", "Amino-acide essentiel pour la fonction cardiaque et rétinienne", "Production d'énergie uniquement", "Défense immunitaire"],
                correct: 1,
                source: "Institut de Nutrition Féline - Acide aminé critique non synthétisable par les chats."
            },
            {
                id: 55,
                question: "Quel est le mécanisme de la 'diabète sucré féline' ?",
                options: ["Pas de diabète", "Résistance à l'insuline et dysfonction pancréatique", "Infection virale", "Carence alimentaire"],
                correct: 1,
                source: "Université de Pathologie Féline - Condition fréquente et souvent réversible."
            },
            {
                id: 56,
                question: "Quel est le rôle du complexe B dans le métabolisme félin ?",
                options: ["Aucun rôle", "Essentiels pour l'énergie et la neurologie", "Uniquement pour les os", "Vision uniquement"],
                correct: 1,
                source: "Institut de Nutrition Vétérinaire - Cofacteurs métaboliques critiques."
            },
            {
                id: 57,
                question: "Quel est le processus d'ammoniémie (toxicité ammoniaque) chez le chat ?",
                options: ["Pas de processus", "Accumulation d'ammoniaque due à dysfonction hépatique", "Infection urinaire", "Intoxication alimentaire"],
                correct: 1,
                source: "Université de Toxicologie Féline - Urgence médicale potentielle."
            },
            {
                id: 58,
                question: "Quel est le rôle de la vitamine A dans la santé féline ?",
                options: ["Aucun rôle", "Vision, immunité et santé épithéliale", "Uniquement pour les os", "Coagulation"],
                correct: 1,
                source: "Institut de Nutrition Féline - Nutriment essentiel chez les carnivores."
            },
            {
                id: 59,
                question: "Quel est le processus de la 'iléite lymphoplasmacytaire' chez le chat ?",
                options: ["Pas de maladie", "Inflammation chronique de l'intestin grêle", "Infection bactérienne", "Allergie alimentaire"],
                correct: 1,
                source: "Journal de Gastroentérologie Féline - Inflammatory bowel disease féline."
            },
            {
                id: 60,
                question: "Quel est le rôle de la fibrinogène dans la coagulation féline ?",
                options: ["Aucun rôle", "Formation du caillot sanguin et fibrines", "Transport de l'oxygène", "Défense immunitaire"],
                correct: 1,
                source: "Institut d'Hématologie - Facteur critique de coagulation."
            },
            {
                id: 61,
                question: "Quel est le mécanisme de la 'hyperthyroïdie féline' ?",
                options: ["Pas de maladie", "Hyperproduction de thyroïdine par nodules hyperactifs", "Hypothyroïdie", "Carence iodée"],
                correct: 1,
                source: "Université d'Endocrinologie Féline - Maladie très courante chez les chats âgés."
            },
            {
                id: 62,
                question: "Quel est le rôle des immunoglobulines (anticorps) chez le chat ?",
                options: ["Aucun rôle", "Défense immunitaire spécifique contre pathogènes", "Transport de nutriments", "Régulation thermique"],
                correct: 1,
                source: "Institut d'Immunologie Féline - Protéines défensives essentielles."
            },
            {
                id: 63,
                question: "Quel est le processus d'hypercalcémie chez le chat ?",
                options: ["Pas de processus", "Surélévation du calcium sanguin par diverses causes", "Carence calcique", "Acidose"],
                correct: 1,
                source: "Université de Pathologie - Urgence médicale potentielle."
            },
            {
                id: 64,
                question: "Quel est le rôle de l'interféron dans la réponse immunitaire féline ?",
                options: ["Aucun rôle", "Protéine antivirale et modulation immunitaire", "Digestion", "Neurologique"],
                correct: 1,
                source: "Institut d'Immunologie Vétérinaire - Cytokine défensive importante."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'néphrite tubulointerstitielle' féline ?",
                options: ["Pas de maladie", "Inflammation des tubules et interstitium rénaux", "Lithiase rénale", "Infection urinaire simple"],
                correct: 1,
                source: "Journal de Néphropathologie Féline - Cause courante d'insuffisance rénale."
            },
            {
                id: 66,
                question: "Quel est le rôle des kinins dans l'inflammation féline ?",
                options: ["Aucun rôle", "Vasodilatation et augmentation de la perméabilité vasculaire", "Coagulation", "Digestion"],
                correct: 1,
                source: "Institut d'Inflammologie - Médiateurs critiques de l'inflammation."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'steatite' ou 'maladie du chat jaune' ?",
                options: ["Pas de maladie", "Inflammation du tissu adipeux par acides gras libres", "Hépatite virale", "Pancréatite"],
                correct: 1,
                source: "Université de Pathologie Féline - Condition nutritionnelle évitable."
            },
            {
                id: 68,
                question: "Quel est le rôle des prostaglandines dans la protection gastrique féline ?",
                options: ["Aucun rôle", "Protection muqueuse et régulation acide", "Digestion", "Motilité"],
                correct: 1,
                source: "Institut de Gastroentérologie - Messagers chimiques protecteurs."
            },
            {
                id: 69,
                question: "Quel est le mécanisme de la 'feline primary secretory otitis media' ?",
                options: ["Pas de maladie", "Accumulation de mucus dans l'oreille moyenne", "Infection bactérienne", "Trauma"],
                correct: 1,
                source: "Journal d'Otologie Féline - Condition chronique progressive."
            },
            {
                id: 70,
                question: "Quel est le rôle du système de l'angiotensine dans la pression artérielle féline ?",
                options: ["Aucun rôle", "Régulation critique de la vasoconstriction et pression artérielle", "Digestion", "Thermorégulation"],
                correct: 1,
                source: "Institut de Physiologie Cardiovasculaire - Système homéostatique majeur."
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
            },
            {
                id: 11,
                question: "Combien de battements d'ailes par seconde un colibri peut-il faire ?",
                options: ["10-15 battements", "30-40 battements", "50-80 battements", "100+ battements"],
                correct: 3,
                source: "Institut d'Ornithologie - Le colibri peut battre des ailes jusqu'à 80-100 fois par seconde."
            },
            {
                id: 12,
                question: "Quel est l'âge moyen d'une aigle ?",
                options: ["10-15 ans", "20-30 ans", "40-50 ans", "60+ ans"],
                correct: 2,
                source: "Fédération Française d'Ornithologie - Les aigles vivent très longtemps."
            },
            {
                id: 13,
                question: "À quelle altitude les oiseaux migrateurs peuvent-ils voler ?",
                options: ["500-1000 mètres", "2000-3000 mètres", "5000-8000 mètres", "10000+ mètres"],
                correct: 2,
                source: "Centre de Recherche Migratoire - Les oies volent jusqu'à 8000 mètres."
            },
            {
                id: 14,
                question: "Quel est le plus petit oiseau du monde ?",
                options: ["Le roitelet", "Le colibri abeille", "La mésange", "Le chardonneret"],
                correct: 1,
                source: "Musée d'Histoire Naturelle - Le colibri abeille mesure 5-6 cm."
            },
            {
                id: 15,
                question: "Quel oiseau pond les plus gros œufs ?",
                options: ["L'aigle", "Le cygne", "L'autruche", "La grue"],
                correct: 2,
                source: "Muséum de Zoologie - L'autruche pond des œufs de 1,5-2 kg."
            },
            {
                id: 16,
                question: "À quelle vitesse vole une colombe domestique ?",
                options: ["20 km/h", "40 km/h", "60 km/h", "80+ km/h"],
                correct: 1,
                source: "Fédération des Colombophiles - La colombe vole à environ 40-50 km/h."
            },
            {
                id: 17,
                question: "Combien de plumes un cygne possède-t-il environ ?",
                options: ["5000-10000 plumes", "15000-20000 plumes", "25000-30000 plumes", "50000+ plumes"],
                correct: 2,
                source: "Institut d'Ornithologie - Le cygne a environ 25000 plumes."
            },
            {
                id: 18,
                question: "À quel âge un oiseau peut-il se reproduire généralement ?",
                options: ["À quelques mois", "À 1-2 ans", "À 3-5 ans", "À 10+ ans"],
                correct: 1,
                source: "Centre d'Ornithologie Appliquée - L'âge varie selon les espèces."
            },
            {
                id: 19,
                question: "Quel est le territoire typique d'un rouge-gorge ?",
                options: ["500 m²", "1000-2000 m²", "5000+ m²", "10 hectares"],
                correct: 1,
                source: "Institut d'Éthologie Ornithologique - Le rouge-gorge défend son petit territoire."
            },
            {
                id: 20,
                question: "À quelle distance peut-on entendre le chant d'un rossignol ?",
                options: ["10 mètres", "50 mètres", "100-200 mètres", "500+ mètres"],
                correct: 2,
                source: "Institut d'Acoustique Ornithologique - Le chant porte loin."
            },
            {
                id: 21,
                question: "Quel oiseau a le plus long cou proportionnellement à son corps ?",
                options: ["Le flamant rose", "Le grèbe", "Le cygne", "La grue"],
                correct: 1,
                source: "Institut d'Anatomie Ornithologique - Le flamant a un cou extrêmement long."
            },
            {
                id: 22,
                question: "Combien de temps peut durer le vol sans escale d'une sterne arctique ?",
                options: ["Quelques heures", "12-24 heures", "Plusieurs jours", "Sans limite"],
                correct: 2,
                source: "Centre de Migration - La sterne peut voler plusieurs jours d'affilée."
            },
            {
                id: 23,
                question: "À quel âge un jeune oiseau prend-il son premier vol ?",
                options: ["1-2 semaines", "3-4 semaines", "8-12 semaines selon l'espèce", "6 mois"],
                correct: 2,
                source: "Institut d'Ornithologie Appliquée - L'envol varie énormément selon l'espèce."
            },
            {
                id: 24,
                question: "Quel est le poids d'un œuf de poule ?",
                options: ["30-40 grammes", "50-60 grammes", "80-100 grammes", "120+ grammes"],
                correct: 1,
                source: "Centre d'Aviculture - Un œuf de poule pèse environ 60 grammes."
            },
            {
                id: 25,
                question: "À quelle température les oiseaux maintiennent-ils leur corps ?",
                options: ["35-36°C", "37-38°C", "40-42°C", "43-44°C"],
                correct: 2,
                source: "Institut de Physiologie Aviaire - Les oiseaux ont une température élevée."
            },
            {
                id: 26,
                question: "Quel oiseau construit les nids les plus élaborés ?",
                options: ["Le moineau", "L'oiseau à berceau", "Le hibou", "L'aigle"],
                correct: 1,
                source: "Centre d'Ornithologie - L'oiseau à berceau crée des structures complexes."
            },
            {
                id: 27,
                question: "Combien de tons différents un oiseau chanteur peut-il produire ?",
                options: ["2-5 tons", "10-20 tons", "50-100 tons", "200+ tons"],
                correct: 2,
                source: "Institut d'Étude des Vocalisations - Certains oiseaux ont un répertoire vaste."
            },
            {
                id: 28,
                question: "À quel âge les jeunes oiseaux deviennent-ils indépendants ?",
                options: ["À quelques jours", "À quelques semaines", "À quelques mois selon l'espèce", "À plusieurs mois"],
                correct: 2,
                source: "Centre d'Éducation Ornithologique - Le sevrage varie selon les espèces."
            },
            {
                id: 29,
                question: "Quel est le plus grand oiseau vivant au monde ?",
                options: ["L'aigle de Steller", "L'autruche", "Le condor", "L'albatros"],
                correct: 1,
                source: "Musée d'Histoire Naturelle - L'autruche est le plus grand oiseau."
            },
            {
                id: 30,
                question: "Quel oiseau pond le plus d'œufs en une seule couvée ?",
                options: ["10-12 œufs", "15-20 œufs", "25-30 œufs", "50+ œufs"],
                correct: 2,
                source: "Fédération Française d'Ornithologie - Certains canards pondent jusqu'à 30 œufs."
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
            },
            {
                id: 31,
                question: "Quel est le métabolisme basal d'un petit oiseau par rapport à un grand ?",
                options: ["Identique", "Plus élevé par rapport à la masse corporelle", "Plus bas", "Sans différence"],
                correct: 1,
                source: "Institut de Physiologie Comparée - Les petits oiseaux ont un métabolisme très rapide."
            },
            {
                id: 32,
                question: "Quel est le temps moyen de gestation d'une poule ?",
                options: ["10-15 jours", "20-21 jours", "30 jours", "45 jours"],
                correct: 1,
                source: "Centre d'Aviculture - La poule pond après environ 21 jours d'incubation."
            },
            {
                id: 33,
                question: "À quel âge les jeunes rapaces deviennent-ils indépendants ?",
                options: ["1-2 mois", "3-4 mois", "6-8 mois selon l'espèce", "1 an"],
                correct: 2,
                source: "Institut d'Étude des Rapaces - Les jeunes rapaces nécessitent un long apprentissage."
            },
            {
                id: 34,
                question: "Quel est le mode d'alimentation du pélican ?",
                options: ["Picotage", "Filtrage de l'eau avec le bec", "Chasse en piqué", "Charognard"],
                correct: 1,
                source: "Centre d'Ornithologie - Le pélican a une poche pour filtrer l'eau."
            },
            {
                id: 35,
                question: "Quel est le système de communication principal chez les oiseaux aquatiques ?",
                options: ["Vision uniquement", "Vocalisations et postures corporelles", "Tactile", "Chimique"],
                correct: 1,
                source: "Institut d'Éthologie Aviaire - La communication est multisensorielle."
            },
            {
                id: 36,
                question: "À quel âge une perruche peut-elle commencer à se reproduire ?",
                options: ["À quelques mois", "À 6-12 mois", "À 18-24 mois", "À 3+ ans"],
                correct: 1,
                source: "Centre d'Ornithologie - Les perruches se reproduisent relativement jeunes."
            },
            {
                id: 37,
                question: "Quel est le taux de reproduction du moineau domestique ?",
                options: ["1 portée par an", "2-3 portées par an", "4-5 portées par an", "Plus de 6"],
                correct: 2,
                source: "Université d'Ornithologie - Le moineau se reproduit plusieurs fois par an."
            },
            {
                id: 38,
                question: "Quel est le rôle du plumage secondaire chez les oiseaux ?",
                options: ["Aucun rôle", "Vol et isolation thermique", "Uniquement l'apparence", "Communication"],
                correct: 1,
                source: "Institut de Morphologie Aviaire - Les plumes secondaires sont essentielles au vol."
            },
            {
                id: 39,
                question: "À quel âge un aiglon devient-il adulte sexuellement ?",
                options: ["À 1-2 ans", "À 3-5 ans", "À 5-7 ans selon l'espèce", "À 10+ ans"],
                correct: 2,
                source: "Centre d'Étude des Rapaces - Les aigles mettent longtemps à maturer."
            },
            {
                id: 40,
                question: "Quel est le processus appelé 'imprinting' chez les oiseaux ?",
                options: ["Pas de processus", "Fixation précoce sur la mère ou parent adoptif", "Apprentissage tardif", "Instinct pur"],
                correct: 1,
                source: "Institut d'Éthologie - L'imprinting est crucial pour le développement."
            },
            {
                id: 41,
                question: "Combien de sortes de plumes différentes possède un oiseau ?",
                options: ["1-2 sortes", "3-5 sortes", "7-12 sortes", "15+ sortes"],
                correct: 2,
                source: "Institut d'Ornithologie - Plusieurs types de plumes remplissent des fonctions différentes."
            },
            {
                id: 42,
                question: "À quel âge un caneton peut-il voler ?",
                options: ["À 2-3 semaines", "À 4-6 semaines", "À 8-12 semaines selon l'espèce", "À 4-6 mois"],
                correct: 2,
                source: "Centre d'Aviculture - Les canards volent généralement vers 10-12 semaines."
            },
            {
                id: 43,
                question: "Quel est le coût énergétique du vol pour un oiseau ?",
                options: ["5-10% de l'énergie", "20-30% de l'énergie", "50-70% de l'énergie", "Plus de 80%"],
                correct: 2,
                source: "Université de Physiologie Énergétique - Le vol est très coûteux énergétiquement."
            },
            {
                id: 44,
                question: "Quel est le mécanisme de la thermorégulation chez les oiseaux hibernants ?",
                options: ["Pas de thermorégulation", "Métabolisme élevé et tremblements", "Réduction du métabolisme et torpeur", "Recherche de chaleur"],
                correct: 2,
                source: "Institut de Physiologie - Certains oiseaux entrent en torpeur."
            },
            {
                id: 45,
                question: "À quel âge un jeune corbeau devient-il autonome ?",
                options: ["À 3-4 mois", "À 4-5 mois", "À 6-8 mois", "À 1 an"],
                correct: 2,
                source: "Centre d'Ornithologie - Les corbeaux sont des oiseaux complexes."
            },
            {
                id: 46,
                question: "Quel est le rôle des glandes uropygienne chez les oiseaux aquatiques ?",
                options: ["Aucun rôle", "Production d'huile pour l'imperméabilité", "Reproduction", "Digestion"],
                correct: 1,
                source: "Institut d'Ornithologie - L'huile protège le plumage de l'eau."
            },
            {
                id: 47,
                question: "Quel est le processus de nidification chez les oiseaux cavicoles ?",
                options: ["Construction de nid exposé", "Utilisation ou creusement de cavités", "Nid flottant", "Pas de nid"],
                correct: 1,
                source: "Centre d'Ornithologie - Les cavicoles creusent ou utilisent des cavités."
            },
            {
                id: 48,
                question: "À quel âge un jeune perroquet développe-t-il son plumage adulte ?",
                options: ["À quelques semaines", "À 2-3 mois", "À 6-18 mois selon l'espèce", "À 2+ ans"],
                correct: 2,
                source: "Institut de Zoologie Aviaire - Le plumage adulte arrive progressivement."
            },
            {
                id: 49,
                question: "Quel est le système d'orientation utilisé par les oiseaux migrateurs ?",
                options: ["Soleil uniquement", "Champ magnétique et repères visuels", "Odorat", "Sons"],
                correct: 1,
                source: "Centre de Migration - Navigation multimodale très sophistiquée."
            },
            {
                id: 50,
                question: "Quel est le taux de survie des jeunes oiseaux à l'envol ?",
                options: ["90%+", "60-70%", "30-50%", "Moins de 20%"],
                correct: 2,
                source: "Institut d'Écologie Ornithologique - La survie infantile est généralement faible."
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
            },
            {
                id: 51,
                question: "Quel est le mécanisme de la 'vision binoculaire' chez les rapaces ?",
                options: ["Pas de binocularité", "Chevauchement des champs visuels pour perception en profondeur", "Pas de perception profonde", "Vision périphérique uniquement"],
                correct: 1,
                source: "Institut d'Ophtalmologie Aviaire - Les rapaces ont excellente vision 3D."
            },
            {
                id: 52,
                question: "Quel est le rôle du crop (jabot) dans la digestion aviaire ?",
                options: ["Aucun rôle", "Stockage temporaire et ramollissement de nourriture", "Digestion chimique", "Absorption de nutriments"],
                correct: 1,
                source: "Université de Physiologie Digestive Aviaire - Le crop est essentiel."
            },
            {
                id: 53,
                question: "Quel est le processus de la 'mue stratégique' chez les oiseaux migrateurs ?",
                options: ["Pas de mue", "Renouvellement des plumes planifié avant migration", "Mue aléatoire", "Pas de renouvellement"],
                correct: 1,
                source: "Centre de Recherche Migratoire - La mue doit s'achever avant migration."
            },
            {
                id: 54,
                question: "Quel est le rôle des marques génétiques sur les plumes ?",
                options: ["Aucun rôle", "Identification et communication", "Uniquement décoration", "Protection thermique"],
                correct: 1,
                source: "Institut d'Éthologie Ornithologique - Les marques communiquent le statut."
            },
            {
                id: 55,
                question: "Quel est le processus du 'chant territorial' chez les oiseaux ?",
                options: ["Simple plaisir", "Marquage territorial et attraction des femelles", "Exercice", "Communication de danger"],
                correct: 1,
                source: "Institut d'Étude des Vocalisations - Le chant remplit plusieurs fonctions."
            },
            {
                id: 56,
                question: "Quel est le mécanisme de la 'préférence des partenaires' chez les oiseaux ?",
                options: ["Aléatoire", "Sélection basée sur traits de qualité (couleur, chant, répertoire)", "Familiarité uniquement", "Proximité spatiale"],
                correct: 1,
                source: "Université de Biologie Reproductive Aviaire - Sélection sexuelle opère."
            },
            {
                id: 57,
                question: "Quel est le rôle de la 'crèche' chez les oiseaux coloniaux ?",
                options: ["Aucun rôle", "Groupement des jeunes pour protection et thermorégulation", "Confinement", "Apprentissage"],
                correct: 1,
                source: "Centre d'Ornithologie Sociale - Les crèches sont communes chez colonies."
            },
            {
                id: 58,
                question: "Quel est le processus du 'parasitisme de couvée' chez certains oiseaux ?",
                options: ["Pas de parasitisme", "Ponte des œufs dans nids d'autres espèces", "Partage de nids", "Adoption volontaire"],
                correct: 1,
                source: "Institut d'Éthologie Aviaire - Stratégie reproductive du coucou."
            },
            {
                id: 59,
                question: "Quel est le mécanisme de la 'dominance hiérarchique' dans un groupe d'oiseaux ?",
                options: ["Pas de hiérarchie", "Ordre établi par combats ritualisés et menaces", "Aléatoire", "Basé sur l'âge uniquement"],
                correct: 1,
                source: "Université d'Éthologie Sociale - Les oiseaux établissent peck orders."
            },
            {
                id: 60,
                question: "Quel est le rôle du 'lissage des plumes' chez les oiseaux de groupe ?",
                options: ["Hygiène uniquement", "Hygiène, renforcement social et hiérarchie", "Divertissement", "Thermorégulation"],
                correct: 1,
                source: "Centre d'Ornithologie Comportementale - L'allopreening a fonction sociale."
            },
            {
                id: 61,
                question: "Quel est le processus de la 'synchronisation des pontes' ?",
                options: ["Hasard", "Synchronisation des femelles pour ponte collective", "Pas de synchronisation", "Prédéterminé génétiquement"],
                correct: 1,
                source: "Institut de Biologie Reproductive - Synchronisation comportementale."
            },
            {
                id: 62,
                question: "Quel est le mécanisme de l'apprentissage du chant chez les oiseaux chanteurs ?",
                options: ["Instinctif seulement", "Combinaison d'instinct et d'apprentissage auditif", "Appris entièrement", "Pas d'apprentissage"],
                correct: 1,
                source: "Université de Neurosciences Aviaires - Imprinting auditif crucial."
            },
            {
                id: 63,
                question: "Quel est le rôle des 'couleurs structurales' chez les oiseaux ?",
                options: ["Aucun rôle", "Communication, thermorégulation et camouflage", "Uniquement beauté", "Protection UV"],
                correct: 1,
                source: "Institut de Biophysique Aviaire - Interférence lumineuse crée couleurs."
            },
            {
                id: 64,
                question: "Quel est le processus de l'imprinting territorial chez les oiseaux ?",
                options: ["Pas d'imprinting", "Apprentissage précoce du habitat natal", "Apprentissage tardif", "Instinctif uniquement"],
                correct: 1,
                source: "Institut d'Éthologie Spatiale - Imprinting détermine retour site."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'philopatrie' chez les oiseaux ?",
                options: ["Migration obligatoire", "Tendance à retourner au site natal", "Errance constante", "Sédentarité"],
                correct: 1,
                source: "Centre d'Écologie Aviaire - Philopatrie affecte génétique populations."
            },
            {
                id: 66,
                question: "Quel est le rôle de la 'parole gestuelle' chez les corvidés ?",
                options: ["Aucun rôle", "Communication complexe par gestes et postures", "Jeu uniquement", "Agressivité"],
                correct: 1,
                source: "Institut de Cognition Aviaire - Les corvidés communiquent sophistiquement."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'compétition spermique' chez les oiseaux ?",
                options: ["Pas de compétition", "Compétition des spermes entre mâles", "Sélection passive", "Déterminé génétiquement"],
                correct: 1,
                source: "Université de Biologie Reproductive - Sperm competition est intense."
            },
            {
                id: 68,
                question: "Quel est le mécanisme de la 'mémoire spatiale' chez les gélinottes ?",
                options: ["Pas de mémoire", "Mémorisation précise des caches de nourriture", "Guidage olfactif", "Recherche aléatoire"],
                correct: 1,
                source: "Institut de Cognition Aviaire - Mémoire spatiale exceptionnelle."
            },
            {
                id: 69,
                question: "Quel est le rôle du 'chanteur secondaire' chez certains oiseaux ?",
                options: ["Aucun rôle", "Assistance à la reproduction du couple principal", "Compétition", "Protection du nid"],
                correct: 1,
                source: "Institut d'Éthologie Reproduction - Aides-reproduction favorisent les jeunes."
            },
            {
                id: 70,
                question: "Quel est le processus de la 'divulgation de réseau' chez les corvidés ?",
                options: ["Pas de divulgation", "Partage d'information sur sources de nourriture", "Compétition", "Territorialité"],
                correct: 1,
                source: "Université de Cognition Sociale Aviaire - Corvidés communiquent ressources."
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
            },
            {
                id: 11,
                question: "Quel est le record de vitesse d'un lézard sur terre ?",
                options: ["10 km/h", "25 km/h", "40+ km/h", "60 km/h"],
                correct: 2,
                source: "Institut de Zoologie Comparée - Certains lézards courent très vite."
            },
            {
                id: 12,
                question: "À quel âge une tortue terrestre devient-elle adulte ?",
                options: ["À 5-10 ans", "À 15-20 ans", "À 20-30 ans selon l'espèce", "À 50+ ans"],
                correct: 2,
                source: "Centre de Soins des Tortues - Les tortues maturent lentement."
            },
            {
                id: 13,
                question: "Quel serpent est le plus venimeux du monde par volume de venin ?",
                options: ["Le cobra", "Le taipan intérieur", "La vipère des sables", "Le bungare"],
                correct: 1,
                source: "Institut Toxinologique - Le taipan intérieur a le venin le plus toxique."
            },
            {
                id: 14,
                question: "Combien de temps une tortue peut-elle survivre sans nourriture ?",
                options: ["1-2 mois", "6 mois", "1-2 ans selon l'espèce", "5+ ans"],
                correct: 2,
                source: "Centre de Physiologie Reptilienne - Les tortues peuvent jeûner longtemps."
            },
            {
                id: 15,
                question: "Quel est le plus grand crocodile jamais enregistré ?",
                options: ["Environ 4-5 mètres", "Environ 6-7 mètres", "Plus de 7 mètres", "Plus de 10 mètres"],
                correct: 2,
                source: "Société Herpétologique - Le crocodile marin peut excéder 7 mètres."
            },
            {
                id: 16,
                question: "À quel âge un crocodile devient-il reproducteur ?",
                options: ["À 2-3 ans", "À 5-10 ans", "À 10-15 ans selon l'espèce", "À 20+ ans"],
                correct: 2,
                source: "Centre d'Étude des Crocodiliens - La maturité arrive tardivement."
            },
            {
                id: 17,
                question: "Quel lézard peut courir sur l'eau ?",
                options: ["Le dragon de Komodo", "Le basilic", "L'iguane", "Le moniteur"],
                correct: 1,
                source: "Institut d'Éthologie Reptilienne - Le basilic court sur l'eau sur ses pattes postérieures."
            },
            {
                id: 18,
                question: "À quel âge une tortue peut-elle pondre des œufs ?",
                options: ["À 3-5 ans", "À 10-15 ans selon l'espèce", "À 20-30 ans", "À 50+ ans"],
                correct: 1,
                source: "Centre de Reproduction Reptilienne - L'âge varie énormément selon l'espèce."
            },
            {
                id: 19,
                question: "Quel est le plus petit reptile du monde ?",
                options: ["Le caméléon pygmée", "Le gecko nain", "Le lézard de Burton", "La couleuvre des blés"],
                correct: 2,
                source: "Musée de Zoologie - Le lézard de Burton mesure environ 10 cm."
            },
            {
                id: 20,
                question: "Quel est le temps moyen de l'éclosion des œufs de tortue ?",
                options: ["1-2 mois", "3-4 mois", "5-6 mois selon l'espèce", "8-12 mois"],
                correct: 2,
                source: "Centre de Reproduction des Tortues - L'incubation varie selon conditions."
            },
            {
                id: 21,
                question: "Quel serpent est le plus long du monde ?",
                options: ["L'anaconda", "Le python de Birmanie", "Le python réticulé", "Le boa"],
                correct: 2,
                source: "Institut Herpétologique - Le python réticulé peut dépasser 7 mètres."
            },
            {
                id: 22,
                question: "À quelle température un reptile doit-il être maintenu ?",
                options: ["15-20°C", "20-25°C", "25-35°C selon l'espèce", "40°C+"],
                correct: 2,
                source: "Centre de Soins Reptiliens - Les températures varient selon les espèces."
            },
            {
                id: 23,
                question: "Quel est le processus de la mue chez les serpents ?",
                options: ["Perte de peau en fragments", "Perte complète de la peau en une seule pelure", "Pas de mue", "Très lente"],
                correct: 1,
                source: "Institut d'Éthologie Reptilienne - La mue ectysiale se fait en une fois."
            },
            {
                id: 24,
                question: "Quel caméléon a les capacités de changement de couleur les plus marquées ?",
                options: ["Le caméléon panthère", "Le caméléon d'Afrique du Sud", "Le caméléon casqué", "Le caméléon pygmée"],
                correct: 0,
                source: "Institut de Biophysique Reptilienne - Le panthère est connu pour ses changements."
            },
            {
                id: 25,
                question: "À quel âge un python atteint-il sa pleine taille ?",
                options: ["À 2-3 ans", "À 3-5 ans", "À 5-7 ans selon l'espèce", "À 10+ ans"],
                correct: 2,
                source: "Centre de Zoologie Ophidienne - La croissance est progressive et lente."
            },
            {
                id: 26,
                question: "Quel est le rôle de la fosse thermosensible chez le python ?",
                options: ["Aucun rôle", "Détection infrarouge des proies", "Vision uniquement", "Audition"],
                correct: 1,
                source: "Institut de Sensorimotricité Reptilienne - Les fossettes détectent la chaleur."
            },
            {
                id: 27,
                question: "À quelle profondeur peuvent plonger les tortues marines ?",
                options: ["Jusqu'à 10 mètres", "Jusqu'à 50 mètres", "Jusqu'à 100-200 mètres selon l'espèce", "Plus de 500 mètres"],
                correct: 2,
                source: "Institut de Biologie Marine - Les tortues luth plongent très profond."
            },
            {
                id: 28,
                question: "Quel est le temps moyen de digestion chez un serpent ?",
                options: ["Quelques jours", "1-2 semaines", "2-4 semaines selon la proie", "1-2 mois"],
                correct: 2,
                source: "Centre de Physiologie Reptilienne - La digestion est lente mais complète."
            },
            {
                id: 29,
                question: "Quel lézard peut changer radicalement de forme corporelle ?",
                options: ["Le gecko", "L'iguane", "L'anole", "Le frilled lizard"],
                correct: 3,
                source: "Institut d'Éthologie Défensive - Le frilled lizard déploie un col impressionnant."
            },
            {
                id: 30,
                question: "Quel serpent pond le plus d'œufs en une ponte ?",
                options: ["10-20 œufs", "30-50 œufs", "80-100 œufs selon l'espèce", "150+ œufs"],
                correct: 2,
                source: "Fédération Herpétologique - Certains pythons pondent plus de 100 œufs."
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
            },
            {
                id: 31,
                question: "À quel âge une tortue terrestre peut-elle vivre plus de 100 ans ?",
                options: ["À partir de 50 ans", "À partir de 80 ans", "À partir de 100 ans", "Jusqu'à 200 ans"],
                correct: 3,
                source: "Centre de Longévité Reptilienne - Les tortues géantes peuvent dépasser 200 ans."
            },
            {
                id: 32,
                question: "Quel est le processus de défense du caméléon face au prédateur ?",
                options: ["Fuite", "Changement de couleur, posture menaçante et sifflement", "Attaque directe", "Camouflage"],
                correct: 1,
                source: "Institut d'Éthologie Défensive - Multi-stratégies de défense."
            },
            {
                id: 33,
                question: "Quel est le record de jeûne chez un grand crocodile ?",
                options: ["Quelques jours", "1-2 mois", "6 mois à 1 an", "2+ ans possibles"],
                correct: 3,
                source: "Centre d'Écologie Crocodilienne - Métabolisme extrêmement lent."
            },
            {
                id: 34,
                question: "Quel est le rôle de la membrane nictitante chez les reptiles aquatiques ?",
                options: ["Aucun rôle", "Protection des yeux sous l'eau", "Vision uniquement", "Audition"],
                correct: 1,
                source: "Institut d'Ophtalmologie Reptilienne - Protection adaptée à l'aquatique."
            },
            {
                id: 35,
                question: "À quelle vitesse une tortue terrestre se déplace-t-elle ?",
                options: ["0,5 km/h", "1-2 km/h", "3-5 km/h", "10+ km/h"],
                correct: 1,
                source: "Centre d'Écologie Chelonienne - Locomotion très lente."
            },
            {
                id: 36,
                question: "Quel est le processus de thermorégulation d'un reptile diurne ?",
                options: ["Pas de thermorégulation", "Basking au soleil pour augmenter température", "Métabolisme interne", "Eau froide"],
                correct: 1,
                source: "Institut de Thermorégulation Ectotherme - Comportemental et physique."
            },
            {
                id: 37,
                question: "À quel âge une tortue aquatique peut-elle se reproduire ?",
                options: ["À 2-3 ans", "À 5-8 ans", "À 8-15 ans selon l'espèce", "À 20+ ans"],
                correct: 2,
                source: "Centre de Reproduction Aquatique - Maturation très tardive."
            },
            {
                id: 38,
                question: "Quel est le nombre de dents chez un crocodile adulte ?",
                options: ["20-30 dents", "40-60 dents", "80-100 dents", "Plus de 100"],
                correct: 1,
                source: "Institut d'Anatomie Reptilienne - Les crocodiles ont des dizaines de dents."
            },
            {
                id: 39,
                question: "Quel est le rôle du cloaque chez les reptiles ?",
                options: ["Respiration uniquement", "Cavité commune pour l'excrétion, reproduction et digestion", "Digestion uniquement", "Stockage"],
                correct: 1,
                source: "Institut d'Anatomie Comparée - Multifonctionne structure reptilienne."
            },
            {
                id: 40,
                question: "À quel âge un lézard vert peut-il commencer à se reproduire ?",
                options: ["À 1-2 ans", "À 2-3 ans", "À 3-4 ans selon l'espèce", "À 5+ ans"],
                correct: 2,
                source: "Centre d'Herpétologie - Maturation progressive et variable."
            },
            {
                id: 41,
                question: "Quel est le processus de la 'parthénogenèse' chez certains lézards ?",
                options: ["Reproduction sexuée normale", "Reproduction asexuée par clonage", "Hermaphrodisme", "Pas de reproduction"],
                correct: 1,
                source: "Institut de Génétique Reptilienne - Reproduction sans mâle possible."
            },
            {
                id: 42,
                question: "Quel est le temps moyen de vie d'un serpent venimeux en captivité ?",
                options: ["2-5 ans", "5-10 ans", "10-20 ans selon l'espèce", "30+ ans"],
                correct: 2,
                source: "Centre de Zoologie Ophidienne - Longévité variable selon espèce."
            },
            {
                id: 43,
                question: "À quel âge une tortue marine atteint-elle la maturité sexuelle ?",
                options: ["À 5-10 ans", "À 20-40 ans selon l'espèce", "À 50+ ans", "Jamais vraiment"],
                correct: 1,
                source: "Institut de Biologie Marine - Maturation extrêmement lente."
            },
            {
                id: 44,
                question: "Quel est le record d'apnée enregistré chez une tortue marine ?",
                options: ["30 minutes", "1 heure", "5-7 heures selon l'espèce", "Plus de 10 heures"],
                correct: 2,
                source: "Centre de Physiologie Marine - Adaptation remarquable."
            },
            {
                id: 45,
                question: "Quel serpent a le venin le plus toxique chez le Mamba noir ?",
                options: ["Pas de comparaison", "Plus toxique que le taipan", "Moins toxique que le taipan", "Égal"],
                correct: 2,
                source: "Institut Toxinologique - Le taipan reste plus toxique."
            },
            {
                id: 46,
                question: "À quel âge un lézard perd-il sa queue de façon définitive ?",
                options: ["Jamais", "Une ou deux fois dans sa vie", "Plusieurs fois selon les besoins", "À chaque agression"],
                correct: 2,
                source: "Institut d'Éthologie Défensive - L'autotomie se répète."
            },
            {
                id: 47,
                question: "Quel est le temps d'hibernation typique pour un reptile tempéré ?",
                options: ["1 mois", "2-3 mois", "4-6 mois selon l'espèce", "7-8 mois"],
                correct: 2,
                source: "Centre de Physiologie Saisonnière - Hibernation adaptée au climat."
            },
            {
                id: 48,
                question: "Quel est le rôle de la 'gape' chez le python ?",
                options: ["Respiration", "Préparation à l'ingestion d'une grosse proie", "Communication", "Bâillement"],
                correct: 1,
                source: "Institut d'Éthologie Prédatrice - Adaptation pour proies volumineuses."
            },
            {
                id: 49,
                question: "À quel âge un crocodile peut-il dépasser 4 mètres de long ?",
                options: ["À 10-15 ans", "À 20-30 ans", "À 30-40 ans selon l'espèce", "À 50+ ans"],
                correct: 2,
                source: "Centre d'Écologie Crocodilienne - Croissance très lente."
            },
            {
                id: 50,
                question: "Quel est le processus de la 'autotomie caudale' chez les lézards ?",
                options: ["Perte accidentelle", "Perte volontaire de la queue pour échapper aux prédateurs", "Rejet d'un segment", "Mutilation"],
                correct: 1,
                source: "Institut d'Éthologie - Mécanisme de survie exceptionnel."
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
            },
            {
                id: 51,
                question: "Quel est le mécanisme de la 'glande de venin' chez les serpents ?",
                options: ["Pas de glande", "Glande modifiée des glandes salivaires", "Organe indépendant", "Production dans le foie"],
                correct: 1,
                source: "Institut d'Herpétologie Comparative - Évolution des glandes salivaires."
            },
            {
                id: 52,
                question: "Quel est le processus de la 'thermophile optimalité' chez les reptiles ?",
                options: ["Pas de processus", "Température corporelle optimale pour métabolisme et activité", "Froid est préféré", "Aucune préférence"],
                correct: 1,
                source: "Université de Thermoécologie - Température sélectionnée pour performances."
            },
            {
                id: 53,
                question: "Quel est le mécanisme du 'système cardiopulmonaire' unique chez les crocodiliens ?",
                options: ["Identique aux reptiles", "Shunt sanguin permettant respiration aquatique prolongée", "Respiration cutanée", "Pas d'adaptations"],
                correct: 1,
                source: "Institut de Physiologie Crocodilienne - Adaptations pour plongée."
            },
            {
                id: 54,
                question: "Quel est le rôle de la 'nécrose thermale' chez les vipères à fossettes ?",
                options: ["Aucun rôle", "Destruction sélective de tissus par venin", "Chauffage interne", "Refroidissement défensif"],
                correct: 1,
                source: "Journal de Toxinologie - Le venin crée nécrose localisée."
            },
            {
                id: 55,
                question: "Quel est le processus de l'osmorégulation chez les tortues marines ?",
                options: ["Pas d'osmorégulation", "Glandes à sel pour excrétion d'eau salée", "Reins hyperactifs", "Pas de régulation"],
                correct: 1,
                source: "Institut d'Écologie Marine - Adaptation critique pour survie en mer."
            },
            {
                id: 56,
                question: "Quel est le mécanisme de la 'autolésion' chez les serpents défensifs ?",
                options: ["Pas de mécanisme", "Enroulement et auto-morsure pour épuiser agresseur", "Chimique", "Thermique"],
                correct: 1,
                source: "Institut d'Éthologie Défensive - Stratégie d'épuisement de l'attaquant."
            },
            {
                id: 57,
                question: "Quel est le rôle du \"jacobson organ\" (vomeronasal) chez les lézards ?",
                options: ["Aucun rôle", "Détection chimiosensorielle des phéromones et parfums", "Vision", "Audition"],
                correct: 1,
                source: "Institut de Sensorimotricité - Détection sophistiquée de chimie."
            },
            {
                id: 58,
                question: "Quel est le processus de la 'gonadogenèse dépendante de température' chez certains reptiles ?",
                options: ["Pas de dépendance", "Sexe déterminé par température d'incubation", "Sexe génétique", "Sexe flexible"],
                correct: 1,
                source: "Université de Génétique Reptilienne - TSD = Temperature-dependent sex determination."
            },
            {
                id: 59,
                question: "Quel est le mécanisme de l'absorption de l'eau par la tortue du désert ?",
                options: ["Pas d'absorption", "Par les yeux et cloaque depuis l'humidité du sol", "Métabolisme", "Pas de besoin"],
                correct: 1,
                source: "Institut d'Écologie Désertique - Adaptations extrêmes à l'aridité."
            },
            {
                id: 60,
                question: "Quel est le rôle du \"pituitary gland\" dans la reproduction reptilienne ?",
                options: ["Aucun rôle", "Sécrétion d'hormones reproductives contrôlant cycle d'accouplement", "Digestion", "Respiration"],
                correct: 1,
                source: "Université d'Endocrinologie Reptilienne - Contrôle neuroendocrinien."
            },
            {
                id: 61,
                question: "Quel est le processus de la 'hivernation' chez les reptiles tempérés ?",
                options: ["Sommeil léger", "Ralentissement drastique du métabolisme et inactivité prolongée", "Pas de changement", "Migration"],
                correct: 1,
                source: "Institut de Physiologie Saisonnière - Survie du froid par métabolisme minimal."
            },
            {
                id: 62,
                question: "Quel est le mécanisme de la 'coagulation sanguine' accélérée chez les serpents ?",
                options: ["Pas de différence", "Coagulation plus rapide pour arrêter saignements", "Coagulation lente", "Aucune coagulation"],
                correct: 1,
                source: "Institut d'Hématologie Reptilienne - Adaptation à l'hémostase."
            },
            {
                id: 63,
                question: "Quel est le rôle du 'neocortex' manquant chez les reptiles ?",
                options: ["Essentiel", "Pas d'importance - traitement sensoriel via autres structures", "Cause déficiences", "Non observé"],
                correct: 1,
                source: "Université de Neurobiologie Comparative - Evolution neurologique."
            },
            {
                id: 64,
                question: "Quel est le processus de la 'autotrophie microbienne' chez certains reptiles ?",
                options: ["Pas de processus", "Bactéries dans tube digestif aident digestion cellulose", "Unique production d'énergie", "Symbiose rare"],
                correct: 1,
                source: "Institut de Microbiologie Digestive - Symbiosies gastro-intestinales."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'pupille sténopéique' chez les serpents venimeux ?",
                options: ["Aucun rôle", "Fente pupillaire pour vision en faible lumière", "Vision normale", "Pas de pupille"],
                correct: 1,
                source: "Institut d'Ophtalmologie Ophidienne - Adaptation crépusculaire."
            },
            {
                id: 66,
                question: "Quel est le rôle de la 'lipoprotéine' dans le venin des serpents ?",
                options: ["Aucun rôle", "Composant du venin causant dommages membranaires", "Antivenin", "Neutralisant"],
                correct: 1,
                source: "Journal de Biochimie Toxinologique - Lipides actifs du venin."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'neuroplasticité' chez les reptiles face aux changements ?",
                options: ["Pas de plasticité", "Adaptation comportementale et neurologique aux changements environnementaux", "Comportement fixe", "Pas d'adaptation"],
                correct: 1,
                source: "Université de Neurosciences Reptilienne - Plasticité comportementale."
            },
            {
                id: 68,
                question: "Quel est le mécanisme de l'échange de chaleur chez le python mère pendant incubation ?",
                options: ["Pas d'échange", "Frissons musculaires produisent chaleur pour œufs", "Soleil externe", "Pas d'incubation"],
                correct: 1,
                source: "Institut de Thermorégulation Reproductive - Thermorégulation maternelle."
            },
            {
                id: 69,
                question: "Quel est le rôle du 'spectacle' (écaille oculaire) chez les serpents ?",
                options: ["Aucun rôle", "Protection de l'œil durant la mue", "Vision", "Attraction sexuelle"],
                correct: 1,
                source: "Institut d'Anatomie Ophidienne - Adaptation à la mue."
            },
            {
                id: 70,
                question: "Quel est le processus de la 'mimétrie batésienne' chez certains lézards inoffensifs ?",
                options: ["Pas de mimétrie", "Imitation de lézards venimeux pour défense prédatrice", "Camouflage", "Mélange génétique"],
                correct: 1,
                source: "Institut d'Éthologie Défensive - Stratégie évolutive de bluff."
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
            },
            {
                id: 11,
                question: "À quelle profondeur peut plonger un cachalot ?",
                options: ["500 mètres", "1000-2000 mètres", "3000-4000 mètres", "Plus de 5000 mètres"],
                correct: 2,
                source: "Institut de Biologie Marine - Le cachalot peut plonger très profond."
            },
            {
                id: 12,
                question: "Quel est le poids d'une baleine bleue adulte ?",
                options: ["50-100 tonnes", "100-150 tonnes", "150-200 tonnes", "200+ tonnes"],
                correct: 2,
                source: "Muséum Océanographique - La baleine bleue pèse environ 150-200 tonnes."
            },
            {
                id: 13,
                question: "À quel âge un dauphin devient-il sexuellement mature ?",
                options: ["À 2-3 ans", "À 5-7 ans selon l'espèce", "À 10-15 ans", "À 20+ ans"],
                correct: 1,
                source: "Centre de Recherche Cétologique - La maturité arrive relativement tôt."
            },
            {
                id: 14,
                question: "Quel est le temps moyen de gestation d'une baleine ?",
                options: ["6 mois", "10-12 mois", "12-16 mois selon l'espèce", "18-24 mois"],
                correct: 2,
                source: "Institut de Reproduction Marine - Gestation très longue."
            },
            {
                id: 15,
                question: "Quel phoque peut plonger plus profond que les autres ?",
                options: ["Le phoque moine", "Le phoque du Groenland", "Le phoque de Weddell", "Le léopard des mers"],
                correct: 2,
                source: "Institut de Plongée Marine - Le phoque de Weddell plonge très profond."
            },
            {
                id: 16,
                question: "À quelle température le lait de baleine peut-il être produit ?",
                options: ["Température ambiante", "Température interne chaude 37-40°C", "Temperature froide", "Variable"],
                correct: 1,
                source: "Institut de Biologie Reproductive Marine - Mammalien thermique."
            },
            {
                id: 17,
                question: "Quel est le plus grand animal marin jamais découvert ?",
                options: ["Le cachalot", "La baleine bleue", "Le kraken supposé", "L'éléphant de mer"],
                correct: 1,
                source: "Muséum d'Histoire Naturelle - La baleine bleue est l'animal vivant le plus grand."
            },
            {
                id: 18,
                question: "À quel âge une otarie devient-elle adulte reproductrice ?",
                options: ["À 2-3 ans", "À 4-5 ans selon l'espèce", "À 6-8 ans", "À 10+ ans"],
                correct: 1,
                source: "Centre de Zoologie Marine - Maturité relativement rapide."
            },
            {
                id: 19,
                question: "Quel est le record de migration chez une baleine grise ?",
                options: ["Quelques centaines de km", "5000-10000 km par an", "15000-20000 km par an", "Plus de 30000 km"],
                correct: 2,
                source: "Centre de Recherche Migratoire Marine - Migration très longue."
            },
            {
                id: 20,
                question: "Combien de temps peut survivre un phoque sans nourriture ?",
                options: ["Quelques jours", "2-4 semaines", "1-2 mois selon l'espèce", "3-4 mois"],
                correct: 2,
                source: "Institut de Physiologie Marine - Métabolisme très économe."
            },
            {
                id: 21,
                question: "À quel âge une jeune baleine devient-elle indépendante ?",
                options: ["À quelques semaines", "À quelques mois", "À 6-12 mois selon l'espèce", "À 1-2 ans"],
                correct: 2,
                source: "Centre de Développement Juvénile - Allaitement prolongé."
            },
            {
                id: 22,
                question: "Quel est le diamètre de l'évent (spiracle) d'une baleine ?",
                options: ["Quelques cm", "10-15 cm", "30-50 cm selon l'espèce", "Plus de 50 cm"],
                correct: 2,
                source: "Institut d'Anatomie Cétologique - Ouverture respiratoire large."
            },
            {
                id: 23,
                question: "À quelle profondeur peut plonger un phoque de Weddell ?",
                options: ["200 mètres", "500-600 mètres", "600-700 mètres selon l'espèce", "Plus de 800 mètres"],
                correct: 2,
                source: "Centre de Plongée Marine - Adaptations extrêmes à la profondeur."
            },
            {
                id: 24,
                question: "Quel est le poids moyen d'un nouveau-né baleine bleue ?",
                options: ["1-2 tonnes", "3-4 tonnes", "4-5 tonnes", "Plus de 5 tonnes"],
                correct: 2,
                source: "Institut de Reproduction Marine - Bébé baleine géant."
            },
            {
                id: 25,
                question: "À quel âge les jeunes dauphins se séparent de leur mère ?",
                options: ["À quelques semaines", "À quelques mois", "À 1-2 ans selon l'espèce", "À 3-4 ans"],
                correct: 2,
                source: "Centre d'Études Comportementales Cétacées - Liens mère-jeune prolongés."
            },
            {
                id: 26,
                question: "Quel est le nombre de respirations par minute d'une baleine au repos ?",
                options: ["5-10 respirations", "15-20 respirations", "30-40 respirations", "50+ respirations"],
                correct: 1,
                source: "Institut de Physiologie Respiratoire Marine - Métabolisme très lent."
            },
            {
                id: 27,
                question: "À quel âge les otaries mâles deviennent-ils territoriaux ?",
                options: ["À 2-3 ans", "À 5-7 ans selon l'espèce", "À 8-10 ans", "À 12+ ans"],
                correct: 1,
                source: "Centre d'Écologie Pinipède - Territorialité liée à la taille."
            },
            {
                id: 28,
                question: "Quel est le taux d'allaitement chez une baleine mère ?",
                options: ["Continu", "Plusieurs fois par jour", "Une fois par jour", "Tous les 2-3 jours"],
                correct: 1,
                source: "Institut de Reproduction Marine - Lait très nutritif allaitement fréquent."
            },
            {
                id: 29,
                question: "À quelle distance un cachalot peut-il émettre un clic ?",
                options: ["Quelques km", "5-10 km", "15-20 km selon conditions", "Plus de 30 km"],
                correct: 2,
                source: "Institut d'Acoustique Marine - Sons très porteurs."
            },
            {
                id: 30,
                question: "Quel est le record de durée d'apnée chez un dauphin ?",
                options: ["5-10 minutes", "15-20 minutes", "30+ minutes selon l'espèce", "Plus de 45 minutes"],
                correct: 2,
                source: "Centre de Physiologie Plongée - Adaptations extrêmes."
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
            },
            {
                id: 31,
                question: "À quel âge une baleine peut-elle vivre ?",
                options: ["20-30 ans", "40-50 ans", "50-80 ans selon l'espèce", "100+ ans"],
                correct: 2,
                source: "Institut de Longévité Marine - Les baleines vivent très longtemps."
            },
            {
                id: 32,
                question: "Quel est le processus de communication entre baleines à longue distance ?",
                options: ["Pas de communication longue", "Chants complexes portant sur plusieurs km", "Signaux visuels", "Signaux chimiques"],
                correct: 1,
                source: "Institut d'Acoustique Cétacée - Chants sophistiqués de navigation."
            },
            {
                id: 33,
                question: "À quel âge un phoque peut-il être complètement indépendant ?",
                options: ["À quelques semaines", "À 4-6 semaines selon l'espèce", "À 2-3 mois", "À 6+ mois"],
                correct: 1,
                source: "Centre d'Élevage Pinipède - Sevrage très précoce."
            },
            {
                id: 34,
                question: "Quel est le rôle du 'blubber' (lard) chez les mammifères marins ?",
                options: ["Aucun rôle", "Isolation thermique et réserve énergétique", "Flottabilité uniquement", "Détoxication"],
                correct: 1,
                source: "Institut de Physiologie Thermique Marine - Essentiel pour survie."
            },
            {
                id: 35,
                question: "À quelle vitesse peut nager une orque ?",
                options: ["10-15 km/h", "25-35 km/h", "35-55 km/h selon conditions", "60+ km/h"],
                correct: 2,
                source: "Centre d'Écologie Orque - Prédateurs très rapides."
            },
            {
                id: 36,
                question: "Quel est le temps moyen de digestion chez une baleine après alimentation ?",
                options: ["Quelques heures", "24 heures", "2-3 jours selon taille", "Une semaine"],
                correct: 2,
                source: "Institut de Physiologie Digestive Marine - Digestion très lente."
            },
            {
                id: 37,
                question: "À quel âge un jeune otarie commence-t-il à se nourrir seul ?",
                options: ["À quelques semaines", "À 2-3 mois selon l'espèce", "À 4-6 mois", "À 1 an"],
                correct: 1,
                source: "Centre de Développement Pinipède - Indépendance rapide."
            },
            {
                id: 38,
                question: "Quel est le rôle des 'barbillons' chez le phoque ?",
                options: ["Aucun rôle", "Détection tactile des proies et obstacles", "Respiration", "Communication"],
                correct: 1,
                source: "Institut de Sensorimotricité Marine - Organes tactiles sensoriels."
            },
            {
                id: 39,
                question: "À quel âge une baleine femelle devient-elle ménopausée ?",
                options: ["À 20-30 ans", "À 40-50 ans selon l'espèce", "À 50+ ans", "Jamais"],
                correct: 1,
                source: "Institut de Biologie Reproductive - Ménopause chez les cétacés."
            },
            {
                id: 40,
                question: "Quel est le processus de la 'dive reflex' chez les pinnipèdes ?",
                options: ["Pas de réflexe", "Ralentissement cardiaque drastique lors de plongée", "Accélération cardiaque", "Pas de changement"],
                correct: 1,
                source: "Institut de Physiologie Plongée - Adaptations cardiovasculaires."
            },
            {
                id: 41,
                question: "À quel âge un dauphin peut-il intégrer complètement un groupe social ?",
                options: ["Immédiatement", "À quelques mois", "À 1-2 ans selon l'espèce", "À 3-5 ans"],
                correct: 2,
                source: "Centre d'Études Sociales Cétacées - Intégration progressive."
            },
            {
                id: 42,
                question: "Quel est le diamètre de l'événement d'écholocalisation d'un cachalot ?",
                options: ["Quelques cm", "10-20 cm", "30-50 cm selon l'espèce", "Plus de 50 cm"],
                correct: 1,
                source: "Institut d'Acoustique Cétacée - Organe très spécialisé."
            },
            {
                id: 43,
                question: "À quelle distance un dauphin peut-il entendre un autre dauphin ?",
                options: ["Quelques mètres", "50-100 mètres", "500-1000 mètres selon conditions", "Plus de 2 km"],
                correct: 2,
                source: "Institut de Bioacoustique Marine - Communication longue distance."
            },
            {
                id: 44,
                question: "Quel est le rôle de la 'grâce osseuse' chez les siréniens (lamantins) ?",
                options: ["Aucun rôle", "Adaptation squelettale pour flotabilité et mouvement lent", "Nage rapide", "Pas de fonction"],
                correct: 1,
                source: "Institut d'Anatomie Marine - Adaptations uniques siréniens."
            },
            {
                id: 45,
                question: "À quel âge un phoque femelle devient-elle reproductrice ?",
                options: ["À 1-2 ans", "À 2-4 ans selon l'espèce", "À 5-7 ans", "À 10+ ans"],
                correct: 1,
                source: "Centre de Biologie Reproductive Pinipède - Maturation rapide."
            },
            {
                id: 46,
                question: "Quel est le processus de la 'pontination' chez les cétacés ?",
                options: ["Pas de processus", "Isolation comportementale préparant reproduction", "Migration", "Hivernation"],
                correct: 1,
                source: "Institut d'Éthologie Reproductive Marine - Phase préreproductive."
            },
            {
                id: 47,
                question: "À quel âge une jeune orque devient-elle indépendante maternellement ?",
                options: ["À 1-2 ans", "À 3-5 ans selon l'espèce", "À 5-8 ans", "À 10+ ans"],
                correct: 2,
                source: "Centre d'Études Orques - Liens maternels très prolongés."
            },
            {
                id: 48,
                question: "Quel est le rôle de l'enzyme 'catalase' chez les plongeurs marins ?",
                options: ["Aucun rôle", "Protection contre radicaux libres de l'oxygène", "Digestion", "Respiration"],
                correct: 1,
                source: "Institut de Biochimie Marine - Adaptations antioxydantes."
            },
            {
                id: 49,
                question: "À quel âge une baleine franche peut-elle atteindre sa taille maximale ?",
                options: ["À 20-30 ans", "À 30-40 ans selon l'espèce", "À 40-50 ans", "À 50+ ans"],
                correct: 1,
                source: "Institut de Croissance Cétacée - Croissance très lente."
            },
            {
                id: 50,
                question: "Quel est le taux métabolique des siréniens (lamantins) ?",
                options: ["Très élevé", "Modéré", "Très bas - métabolisme lent adapté à consommation herbe", "Sans métabolisme"],
                correct: 2,
                source: "Institut de Physiologie Comparée Marine - Herbivores lents."
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
            },
            {
                id: 51,
                question: "Quel est le mécanisme d'osmorégulation chez les cétacés marins ?",
                options: ["Excrétion de sel par le nez", "Reins hautement concentrés et métabolisme de l'eau", "Pas de mécanisme particulier", "Urines très concentrées"],
                correct: 1,
                source: "Institut de Physiologie Osmorégulatrice Marine - Les reins concentrent l'urine extrêmement."
            },
            {
                id: 52,
                question: "Quel est le processus d'embolie gazeuse évité par les mammifères marins plongeurs ?",
                options: ["Accumulation de dioxyde de carbone", "Accumulation d'azote aux changements de pression", "Suroxygénation", "Dépressurisation brusque"],
                correct: 1,
                source: "Institut de Médecine Plongée - Les mammifères marins évitent cette condition."
            },
            {
                id: 53,
                question: "Quel est le processus d'adaptation visuelle aux profondeurs chez les cétacés ?",
                options: ["Augmentation du cristallin", "Rétines sensibles au spectre bleu et amélioration de la sensibilité", "Pas d'adaptation visuelle", "Disparition des yeux"],
                correct: 1,
                source: "Université d'Ophtalmologie Marine - Les rétines s'adaptent aux longueurs d'onde profondes."
            },
            {
                id: 54,
                question: "Quel est le rôle des cavités nasales compliquées des cétacés ?",
                options: ["Respiration uniquement", "Écholocalisation et production de clics", "Olfaction exacerbée", "Thermorégulation"],
                correct: 1,
                source: "Institut d'Anatomie Cétologique - Les cavités nasales produisent l'écholocalisation."
            },
            {
                id: 55,
                question: "Quel type d'hémoglobine ont les plongeurs profonds marins ?",
                options: ["Hémoglobine standard", "Hémoglobine avec affinité augmentée pour l'oxygène", "Hémoglobine sans fer", "Chlorophylle"],
                correct: 1,
                source: "Université de Biochimie Marine - L'hémoglobine est optimisée pour l'oxygène."
            },
            {
                id: 56,
                question: "Quel est le mécanisme de réduction du métabolisme lors de la plongée marine ?",
                options: ["Arrêt cardiaque", "Ralentissement sélectif du cœur et redistribution du flux sanguin", "Hibernation brusque", "Apoptose cellulaire"],
                correct: 1,
                source: "Centre de Physiologie Plongée Marine - Le flux sanguin se concentre sur les organes vitaux."
            },
            {
                id: 57,
                question: "Quel est le rôle de la monocouche pulmonaire chez les cétacés plongeurs ?",
                options: ["Captage efficace de l'oxygène", "Extraction d'oxygène maximale avec échange contre-courant", "Stockage du dioxyde de carbone", "Régulation de la pression"],
                correct: 1,
                source: "Institut de Physiologie Respiratoire Marine - L'échange contre-courant maximise l'oxygène."
            },
            {
                id: 58,
                question: "Quel est le processus de communication acoustique entre baleines à distance ?",
                options: ["Simple cris", "Communication structurée avec dialectes régionaux et apprentissage culturel", "Pas de communication", "Télépathie"],
                correct: 1,
                source: "Université de Sociolinguistique Marine - Les baleines ont des dialectes culturels."
            },
            {
                id: 59,
                question: "Quel est le rôle des moustaches (vibrisses) chez les pinnipèdes marins ?",
                options: ["Décoration", "Détection sensorielle du champ électrique et vibrations", "Régulation thermique", "Reproduction"],
                correct: 1,
                source: "Institut de Sensorimotricité Marine - Les vibrisses détectent les vibrations."
            },
            {
                id: 60,
                question: "Quel est le mécanisme du stockage d'oxygène chez les cachalots ?",
                options: ["Poumons uniquement", "Myoglobine musculaire et oxyhémoglobine concentrées", "Pas de stockage", "Respiration cutanée"],
                correct: 1,
                source: "Institut d'Adaptation Plongée - Stockage massif d'oxygène."
            },
            {
                id: 61,
                question: "Quel est le processus de la 'thermorégulation comportementale' chez les pinnipèdes ?",
                options: ["Pas de thermorégulation", "Hauling out (sortie de l'eau) pour se réchauffer", "Immersion complète", "Pas de préférence"],
                correct: 1,
                source: "Institut d'Écologie Comportementale Marine - Thermorégulation adaptée."
            },
            {
                id: 62,
                question: "Quel est le rôle des 'melon' (structure frontale) du dauphin ?",
                options: ["Aucun rôle", "Focalisation et concentration des ondes écholocationnelles", "Audition uniquement", "Évent"],
                correct: 1,
                source: "Institut d'Acoustique Cétacée - Structure très spécialisée."
            },
            {
                id: 63,
                question: "Quel est le mécanisme de la 'bradycardie plongée' chez les pinnipèdes ?",
                options: ["Accélération cardiaque", "Ralentissement drastique du cœur lors de l'immersion", "Pas de changement", "Arrêt cardiaque"],
                correct: 1,
                source: "Institut de Physiologie Cardiovasculaire Marine - Réflexe de plongée primitif."
            },
            {
                id: 64,
                question: "Quel est le processus de l'apprentissage culturel chez les orques ?",
                options: ["Pas d'apprentissage", "Transmission intergénérationnelle de techniques de chasse", "Instinctif seulement", "Apprentissage individuel"],
                correct: 1,
                source: "Université d'Ethnologie Cétacée - Cultures sociales transmises."
            },
            {
                id: 65,
                question: "Quel est le rôle du 'rostrum' (museau) chez les dauphins ?",
                options: ["Aucun rôle", "Traitement des vibrations et équilibrage hydrodynamique", "Respiration", "Alimentation uniquement"],
                correct: 1,
                source: "Institut d'Anatomie Hydrodynamique - Structure adaptée à l'eau."
            },
            {
                id: 66,
                question: "Quel est le mécanisme de la 'convergent evolution' entre cétacés et pinnipèdes ?",
                options: ["Pas de convergence", "Adaptations similaires pour l'environnement aquatique malgré ancêtres terrestres", "Génétique commune", "Pas de ressemblance"],
                correct: 1,
                source: "Institut d'Évolution Comparative - Adaptations indépendantes similaires."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'dive sequestration' chez les baleines ?",
                options: ["Pas de séquestration", "Flux sanguin réduit aux organes non critiques pendant plongée", "Circulation augmentée", "Pas de changement"],
                correct: 1,
                source: "Institut de Physiologie Plongée - Redistribution critique de l'oxygène."
            },
            {
                id: 68,
                question: "Quel est le rôle du 'rostral groove' chez les siréniens ?",
                options: ["Aucun rôle", "Réduction de la traînée hydrodynamique lors de la nage", "Alimentation", "Respiration"],
                correct: 1,
                source: "Institut d'Hydrodynamique Marine - Adaptations aérodynamiques."
            },
            {
                id: 69,
                question: "Quel est le mécanisme de la 'photoperiodism' chez les mammifères marins migrateurs ?",
                options: ["Pas de photoperiodisme", "Changement de durée du jour déclenche migrations saisonnières", "Température uniquement", "Pas de déclencheur"],
                correct: 1,
                source: "Institut d'Écologie Comportementale - Horloges biologiques photosensibles."
            },
            {
                id: 70,
                question: "Quel est le rôle de la 'myelin sheath' épaissie chez les cétacés plongeurs ?",
                options: ["Aucun rôle", "Conduction nerveuse rapide dans conditions haute pression", "Isolation thermique", "Protection mécanique"],
                correct: 1,
                source: "Institut de Neurosciences Marine - Adaptations neurales plongée."
            }
        ]
    },
    letion: {
        title: "Le Lion",
        description: "Testez vos connaissances sur le roi de la savane",
        facile: [
            {
                id: 1,
                question: "Quel est le poids moyen d'un lion mâle ?",
                options: ["100-150 kg", "150-200 kg", "200-250 kg", "250+ kg"],
                correct: 2,
                source: "National Geographic - Le lion mâle pèse environ 200-250 kg."
            },
            {
                id: 2,
                question: "Quel est le rugissement du lion utilisé pour ?",
                options: ["Attirer les femelles", "Marquer le territoire et communiquer", "Chasser uniquement", "Aucune raison"],
                correct: 1,
                source: "Institut d'Éthologie Féline - Le rugissement porte jusqu'à 10 km."
            },
            {
                id: 3,
                question: "Quelle est la principale nourriture du lion ?",
                options: ["Les plantes", "La viande - gnus, zèbres, antilopes", "Le poisson", "Les insectes"],
                correct: 1,
                source: "Centre de Recherche Africaine - Le lion est carnivore strict."
            },
            {
                id: 4,
                question: "À quel âge un lion mâle développe-t-il sa crinière ?",
                options: ["À 1 an", "À 2-3 ans", "À 3-5 ans", "À 5+ ans"],
                correct: 2,
                source: "Société de Zoologie - La crinière se développe progressivement."
            },
            {
                id: 5,
                question: "Combien d'heures par jour un lion dort-il ?",
                options: ["4-6 heures", "8-10 heures", "15-20 heures", "Plus de 20 heures"],
                correct: 2,
                source: "Institut d'Étude du Comportement - Le lion dort très longtemps."
            },
            {
                id: 6,
                question: "Quel est le rôle principal de la lionne dans la chasse ?",
                options: ["Elle ne chasse pas", "Elle chasse activement en groupe", "Elle chasse seule", "Elle garde les petits"],
                correct: 1,
                source: "Centre de Recherche Africain - Les lionnes font 90% des chasses."
            },
            {
                id: 7,
                question: "À quel âge une femelle lion peut-elle se reproduire ?",
                options: ["À 1-2 ans", "À 2-3 ans", "À 3-4 ans", "À 4+ ans"],
                correct: 1,
                source: "Institut de Reproduction Féline - Maturité relative rapide."
            },
            {
                id: 8,
                question: "Combien de temps dure la gestation chez une lionne ?",
                options: ["2 mois", "3-3.5 mois", "4 mois", "5+ mois"],
                correct: 1,
                source: "Centre de Biologie Reproduction - Environ 110 jours."
            },
            {
                id: 9,
                question: "Quel est le nombre moyen de lionceaux par portée ?",
                options: ["1-2 lionceaux", "2-3 lionceaux", "4-5 lionceaux", "6+ lionceaux"],
                correct: 2,
                source: "Institut d'Éthologie - Les portées varient entre 2-4 jeunes."
            },
            {
                id: 10,
                question: "À quel âge les lionceaux deviennent-ils indépendants ?",
                options: ["À 6 mois", "À 12 mois", "À 18-24 mois", "À 3 ans"],
                correct: 2,
                source: "Centre d'Étude du Développement - Indépendance progressive."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle de la crinière chez le lion mâle ?",
                options: ["Uniquement décoration", "Thermorégulation, protection et démonstration de statut", "Camouflage", "Attraction de proies"],
                correct: 1,
                source: "Institut d'Éthologie - La crinière remplit plusieurs fonctions."
            },
            {
                id: 12,
                question: "Quelle est la taille du territoire d'une fierté de lions ?",
                options: ["Quelques km²", "10-20 km²", "50-100 km² selon l'habitat", "150+ km²"],
                correct: 2,
                source: "Centre de Recherche Territoriale - Territoire très vaste."
            },
            {
                id: 13,
                question: "À quelle vitesse un lion peut-il courir ?",
                options: ["30 km/h", "50 km/h", "70-80 km/h", "90+ km/h"],
                correct: 2,
                source: "Institut de Biomécanique - Sprint court très rapide."
            },
            {
                id: 14,
                question: "Quel est le nombre moyen de lions dans une fierté ?",
                options: ["3-5 lions", "5-15 lions selon conditions", "15-20 lions", "20+ lions"],
                correct: 1,
                source: "Centre d'Écologie - Taille variable de la fierté."
            },
            {
                id: 15,
                question: "Quel est le processus de prise de pouvoir chez les mâles lions ?",
                options: ["Succédant automatique", "Combats violents entre mâles pour domination", "Succession générationnelle", "Lotterie"],
                correct: 1,
                source: "Institut d'Éthologie Sociale - Compétition intense."
            },
            {
                id: 16,
                question: "À quel âge un mâle lion est généralement expulsé de sa fierté natale ?",
                options: ["À 18 mois", "À 2-3 ans", "À 3-4 ans", "À 5+ ans"],
                correct: 2,
                source: "Centre d'Étude du Comportement - Exil forcé du groupe."
            },
            {
                id: 17,
                question: "Quel est le taux de réussite de chasse de la fierté ?",
                options: ["Très élevé 80%+", "Modéré 40-50%", "Faible 10-25%", "Très faible moins de 5%"],
                correct: 2,
                source: "Institut de Chasse - Succès encore limité."
            },
            {
                id: 18,
                question: "À quel âge un lionceau commence-t-il à chasser ?",
                options: ["À 3-4 mois", "À 6-8 mois", "À 12-18 mois selon l'apprentissage", "À 2+ ans"],
                correct: 2,
                source: "Centre d'Apprentissage - Éducation progressive."
            },
            {
                id: 19,
                question: "Quel est le record de distance parcourue par un lion en migration ?",
                options: ["Quelques km", "50-100 km", "200-300 km selon saisons", "500+ km"],
                correct: 2,
                source: "Institut d'Écologie Migratoire - Déplacements saisonniers."
            },
            {
                id: 20,
                question: "Quel est l'âge moyen de vie d'un lion en nature ?",
                options: ["8-10 ans", "10-14 ans", "14-20 ans selon conditions", "20+ ans"],
                correct: 1,
                source: "Centre de Longévité - Durée de vie naturelle courte."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme du 'coalitional male' chez les lions ?",
                options: ["Pas de coalition", "Mâles s'unissent pour renverser les dominants", "Dominance solitaire", "Pas de stratégie"],
                correct: 1,
                source: "Institut d'Éthologie Sociale - Stratégie complexe de coalition."
            },
            {
                id: 22,
                question: "Quel est le rôle de l'infanticide chez les lions ?",
                options: ["Aucun rôle", "Élimination des jeunes pour réduire compétition et hastener chaleur femelle", "Régulation population", "Agression"],
                correct: 1,
                source: "Université d'Écologie Comportementale - Stratégie reproductive."
            },
            {
                id: 23,
                question: "Quel est le processus de la 'synchronisation des chaleurs' chez les lionnes ?",
                options: ["Pas de synchronisation", "Femelles en groupe synchronisent cycles reproductifs", "Cycles indépendants", "Pas d'influence sociale"],
                correct: 1,
                source: "Institut de Biologie Reproductive - Phéromones sociales."
            },
            {
                id: 24,
                question: "Quel est le mécanisme du contrôle du territoire par les rugissements ?",
                options: ["Pas de contrôle", "Rugissements délimitent territoire et découragent intrus", "Uniquement pour attirer femelles", "Communication simple"],
                correct: 1,
                source: "Institut d'Acoustique Comportementale - Communication multi-fonction."
            },
            {
                id: 25,
                question: "Quel est le rôle du 'infantile behaviour' prolongé chez les lionceaux ?",
                options: ["Immaturité", "Apprentissage et lien social avec la mère", "Retard développement", "Pas de fonction"],
                correct: 1,
                source: "Université d'Étude du Développement - Apprentissage prolongé."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de la 'mane darkening' avec l'âge ?",
                options: ["Pas de mécanisme", "Accumulation de testostérone affecte pigmentation crinière", "Décoloration simple", "Pas d'explication"],
                correct: 1,
                source: "Institut d'Endocrinologie - Indicateur hormonal de maturité."
            },
            {
                id: 27,
                question: "Quel est le processus de prédation coordonnée chez les lionnes ?",
                options: ["Pas de coordination", "Stratégies élaborées avec rôles définis et embuscades", "Chasse aléatoire", "Chacune pour soi"],
                correct: 1,
                source: "Institut de Chasse Coopérative - Stratégies sophistiquées."
            },
            {
                id: 28,
                question: "Quel est le rôle de la 'kin selection' dans la structure familiale ?",
                options: ["Aucun rôle", "Préférence pour proche parents améliore survie groupe", "Pas d'influence génétique", "Sélection aléatoire"],
                correct: 1,
                source: "Université de Génétique Comportementale - Théorie hamiltonienne."
            },
            {
                id: 29,
                question: "Quel est le mécanisme de la 'leonine density' dans les écosystèmes ?",
                options: ["Pas de densité", "Densité lions affecte structure écosystème proie", "Pas d'impact écologique", "Équilibre fixe"],
                correct: 1,
                source: "Institut d'Écologie Trophique - Keystone predator."
            },
            {
                id: 30,
                question: "Quel est le processus du 'sperm competition' chez les lions ?",
                options: ["Pas de compétition", "Compétition du sperme lors d'accouplements multiples", "Fécondation simple", "Pas de rivalité"],
                correct: 1,
                source: "Université de Biologie Reproductive - Reproduction polyandre."
            }
        ]
    },
    laigleroyal: {
        title: "L'Aigle Royal",
        description: "Testez vos connaissances sur le roi des rapaces",
        facile: [
            {
                id: 1,
                question: "Quel est l'envergure d'un aigle royal ?",
                options: ["1,5-2 mètres", "2-2,5 mètres", "2,3-2,8 mètres", "3+ mètres"],
                correct: 2,
                source: "National Geographic - L'envergure peut atteindre 2,8 mètres."
            },
            {
                id: 2,
                question: "À quelle vitesse un aigle royal peut-il voler en piqué ?",
                options: ["100 km/h", "150 km/h", "200 km/h", "240+ km/h"],
                correct: 3,
                source: "Institut d'Ornithologie - Piqués extrêmement rapides."
            },
            {
                id: 3,
                question: "Quel est l'animal préféré de chasse de l'aigle royal ?",
                options: ["Les lapins", "Les lièvres et lapins", "Les oiseaux", "Les poissons"],
                correct: 1,
                source: "Centre de Recherche Cynégétique - Prédateur de rongeurs."
            },
            {
                id: 4,
                question: "À quelle distance un aigle royal peut-il voir une proie ?",
                options: ["1 km", "3 km", "5 km", "10+ km"],
                correct: 2,
                source: "Institut d'Ophtalmologie Aviaire - Vision exceptionnel."
            },
            {
                id: 5,
                question: "À quel âge les aigles royaux se reproduisent-ils pour la première fois ?",
                options: ["À 2-3 ans", "À 4-5 ans", "À 5-7 ans", "À 7+ ans"],
                correct: 2,
                source: "Centre d'Études Reproductrices - Maturation tardive."
            },
            {
                id: 6,
                question: "Combien de temps dure l'incubation des œufs d'aigle royal ?",
                options: ["15 jours", "25-30 jours", "40-45 jours", "60+ jours"],
                correct: 2,
                source: "Institut d'Ornithologie - Incubation longue."
            },
            {
                id: 7,
                question: "Combien d'œufs pond généralement une aigle royale ?",
                options: ["1-2 œufs", "2-3 œufs", "3-4 œufs", "4+ œufs"],
                correct: 1,
                source: "Centre d'Étude Reproductive - Petit nombre de jeunes."
            },
            {
                id: 8,
                question: "À quel âge un aiglon quitte le nid ?",
                options: ["6-8 semaines", "8-12 semaines", "12-16 semaines", "16+ semaines"],
                correct: 2,
                source: "Institut d'Ornithologie Appliquée - Envol tardif."
            },
            {
                id: 9,
                question: "Quel est le poids moyen d'une aigle royale femelle ?",
                options: ["2-3 kg", "3-4 kg", "4-6 kg", "6+ kg"],
                correct: 2,
                source: "Centre de Zoologie - Les femelles sont plus lourdes."
            },
            {
                id: 10,
                question: "Quel est l'habitat préféré de l'aigle royal ?",
                options: ["Forêts denses", "Montagnes et falaises", "Zones urbaines", "Déserts"],
                correct: 1,
                source: "Institut d'Écologie - Préférence pour montagnes."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le territoire d'un couple d'aigles royaux ?",
                options: ["5-10 km²", "20-40 km²", "50-100 km² selon habitat", "150+ km²"],
                correct: 2,
                source: "Centre de Recherche Territoriale - Vaste domaine."
            },
            {
                id: 12,
                question: "Quel est le mécanisme de la parade aérienne nuptiale ?",
                options: ["Pas de parade", "Piqués et loopings spectaculaires pour séduction", "Appels uniquement", "Contact physique"],
                correct: 1,
                source: "Institut d'Éthologie Reproductrice - Affichages élaborés."
            },
            {
                id: 13,
                question: "À quel âge les aigles royaux deviennent-ils adultes en apparence ?",
                options: ["À 3-4 ans", "À 4-5 ans selon l'espèce", "À 5-6 ans", "À 6+ ans"],
                correct: 1,
                source: "Centre d'Identification - Maturation très progressive."
            },
            {
                id: 14,
                question: "Quel est le temps moyen de vie d'un aigle royal ?",
                options: ["10-15 ans", "20-30 ans", "30-50 ans selon conditions", "50+ ans"],
                correct: 2,
                source: "Institut de Longévité - Longévité remarquable."
            },
            {
                id: 15,
                question: "Quel est le rôle du 'kleptoparasitism' chez l'aigle royal ?",
                options: ["Aucun rôle", "Vol de proies à d'autres rapaces", "Communication", "Territorialité"],
                correct: 1,
                source: "Institut d'Éthologie Alimentaire - Stratégie prédatrice."
            },
            {
                id: 16,
                question: "À quelle altitudine l'aigle royal peut-il chasser ?",
                options: ["Jusqu'à 1000m", "Jusqu'à 2000m", "Jusqu'à 5000m ou plus selon proie", "Jusqu'à 10000m"],
                correct: 2,
                source: "Centre de Recherche Altitudinale - Chasseur montagnard."
            },
            {
                id: 17,
                question: "Quel est le processus de transmission des techniques de chasse ?",
                options: ["Instinctif uniquement", "Instinct + apprentissage parental précoce", "Apprentissage tardif", "Pas d'apprentissage"],
                correct: 1,
                source: "Institut d'Éthologie - Éducation parentale.",
                source: "Institut d'Étude du Comportement - Apprentissage progressif."
            },
            {
                id: 18,
                question: "À quel âge un aiglon peut-il voler correctement ?",
                options: ["À 8-10 semaines", "À 12-14 semaines", "À 14-16 semaines selon l'individu", "À 18+ semaines"],
                correct: 2,
                source: "Centre d'Ornithologie - Envol progressif et délicat."
            },
            {
                id: 19,
                question: "Quel est le nombre moyen de jeunes élevés par couple annuellement ?",
                options: ["0,5-1 jeune", "1-1,5 jeunes", "1,5-2 jeunes selon succès", "2+ jeunes"],
                correct: 2,
                source: "Institut de Fécondité - Reproduction lente."
            },
            {
                id: 20,
                question: "Quel est l'impact de la force d'un aigle royal ?",
                options: ["Faible", "Peut soulever 4-5 kg de poids", "Peut soulever plus de 8kg", "Force sans limites"],
                correct: 1,
                source: "Centre de Biomécanique - Force relative."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme de la 'thermal soaring' utilisé par l'aigle royal ?",
                options: ["Pas de thermals", "Utilisation de courants d'air chaud pour économiser énergie", "Vol actif seulement", "Pas de stratégie"],
                correct: 1,
                source: "Institut d'Aérodynamique Aviaire - Efficacité énergétique."
            },
            {
                id: 22,
                question: "Quel est le processus de la 'monogamie à vie' chez les aigles royaux ?",
                options: ["Pas de monogamie", "Couples restent ensemble plusieurs années reproductives", "Changement annuel", "Polygamie"],
                correct: 1,
                source: "Université de Biologie Reproductive - Liens durables."
            },
            {
                id: 23,
                question: "Quel est le rôle du 'Cainism' (fratricide) chez les aigles royaux ?",
                options: ["Pas de fratricide", "Aîné tue cadet pour monopoliser nourriture", "Pas de compétition", "Partage équitable"],
                correct: 1,
                source: "Institut d'Éthologie Familiale - Compétition sibling."
            },
            {
                id: 24,
                question: "Quel est le mécanisme de détection des proies chez l'aigle royal ?",
                options: ["Vision uniquement", "Vision et capteurs thermiques limitées", "Odorat exacerbé", "Audition seulement"],
                correct: 0,
                source: "Institut d'Ophtalmologie - Principalement visuelle."
            },
            {
                id: 25,
                question: "Quel est le processus de territorialité chez les aigles royaux ?",
                options: ["Pas de territorialité", "Défense active du territoire par actes aériens", "Passive", "Pas de défense"],
                correct: 1,
                source: "Institut d'Éthologie Territoriale - Démonstration élaborée."
            },
            {
                id: 26,
                question: "Quel est le rôle du 'nesting site fidelity' ?",
                options: ["Pas de fidelité", "Réutilisation du même nid pendant plusieurs années", "Nouveau nid chaque année", "Pas de préférence"],
                correct: 1,
                source: "Institut d'Écologie Reproductive - Nids traditionnels."
            },
            {
                id: 27,
                question: "Quel est le mécanisme du 'inverse sexual size dimorphism' ?",
                options: ["Pas de dimorphisme", "Femelles plus grandes pour rôle reproducteur", "Mâles plus grands", "Identiques"],
                correct: 1,
                source: "Université de Zoologie Comparative - Évolution adaptative."
            },
            {
                id: 28,
                question: "Quel est le processus de la 'philopatry' chez les jeunes aigles ?",
                options: ["Pas de philopatry", "Tendance à retourner au site natal pour reproduction", "Errance constante", "Absence de retour"],
                correct: 1,
                source: "Institut d'Écologie Comportementale - Retour au bercail."
            },
            {
                id: 29,
                question: "Quel est le rôle des 'cliff ledges' dans la nidification ?",
                options: ["Aucun rôle", "Protection des nids contre prédateurs et intempéries", "Isolation thermique", "Signal visuel"],
                correct: 1,
                source: "Institut d'Écologie Nidification - Choix de site critique."
            },
            {
                id: 30,
                question: "Quel est le mécanisme de la 'adaptive foraging' face aux changements ?",
                options: ["Pas d'adaptation", "Modification techniques chasse selon disponibilité proies", "Régime fixe", "Migration forcée"],
                correct: 1,
                source: "Université d'Écologie Comportementale - Flexibilité adaptative."
            }
        ]
    },
    letigre: {
        title: "Le Tigre",
        description: "Testez vos connaissances sur le félin le plus majestueux",
        facile: [
            {
                id: 1,
                question: "Quel est le poids moyen d'un tigre mâle ?",
                options: ["100-150 kg", "150-200 kg", "200-260 kg selon la sous-espèce", "260+ kg"],
                correct: 2,
                source: "National Geographic - Le tigre est le plus gros félin."
            },
            {
                id: 2,
                question: "Quel est le rôle des rayures du tigre ?",
                options: ["Uniquement décoration", "Camouflage dans la forêt et l'herbe haute", "Signal d'agressivité", "Thermorégulation"],
                correct: 1,
                source: "Institut d'Écologie Camouflage - Pattern très efficace."
            },
            {
                id: 3,
                question: "Quel est le régime alimentaire principal du tigre ?",
                options: ["Fruits et plantes", "Viande - cerfs, sangliers, buffles", "Poisson uniquement", "Omnivore"],
                correct: 1,
                source: "Centre de Recherche Africaine - Carnivore strict."
            },
            {
                id: 4,
                question: "À quel âge les jeunes tigres deviennent-ils indépendants ?",
                options: ["À 6 mois", "À 1-2 ans", "À 2-3 ans selon l'apprentissage", "À 3-4 ans"],
                correct: 2,
                source: "Institut d'Éthologie - Indépendance progressive."
            },
            {
                id: 5,
                question: "Quel est le nombre moyen de tigres dans une portée ?",
                options: ["1-2 jeunes", "2-3 jeunes", "3-4 jeunes", "4+ jeunes"],
                correct: 2,
                source: "Centre de Reproduction - Portées modérées."
            },
            {
                id: 6,
                question: "Quelle est la durée moyenne de gestation chez une tigresse ?",
                options: ["2 mois", "3 mois", "3,5-3,8 mois", "4+ mois"],
                correct: 2,
                source: "Institut de Biologie Reproductive - Gestation environ 110 jours."
            },
            {
                id: 7,
                question: "À quelle vitesse un tigre peut-il courir ?",
                options: ["30 km/h", "50 km/h", "60 km/h", "80+ km/h"],
                correct: 2,
                source: "Institut de Biomécanique - Sprint très rapide."
            },
            {
                id: 8,
                question: "Quel est le habitat préféré du tigre ?",
                options: ["Savane sèche", "Forêts denses et humides", "Montagne alpine", "Désert"],
                correct: 1,
                source: "Centre d'Écologie - Préférence pour jungles."
            },
            {
                id: 9,
                question: "À quel âge un tigre devient-il sexuellement mature ?",
                options: ["À 18 mois", "À 2-3 ans selon le sexe", "À 3-4 ans", "À 4+ ans"],
                correct: 1,
                source: "Institut de Reproduction Féline - Maturité rapide."
            },
            {
                id: 10,
                question: "Quel est le nombre de rayures sur un tigre en moyenne ?",
                options: ["20-30 rayures", "40-60 rayures", "80-100 rayures selon individu", "Plus de 100"],
                correct: 2,
                source: "Institut d'Éthologie - Pattern unique par individu."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le territoire moyen d'un tigre ?",
                options: ["10-20 km²", "30-50 km²", "50-100 km² selon densité proies", "150+ km²"],
                correct: 2,
                source: "Centre de Recherche Territoriale - Vaste domaine."
            },
            {
                id: 12,
                question: "Quel est le taux de réussite de chasse du tigre ?",
                options: ["Très élevé 80%+", "Modéré 40-60%", "Faible 5-10%", "Très faible moins de 5%"],
                correct: 2,
                source: "Institut de Chasse - Succès limité malgré prédateur."
            },
            {
                id: 13,
                question: "À quelle distance un tigre peut-il entendre sa proie ?",
                options: ["Quelques mètres", "100 mètres", "500 mètres selon conditions", "1+ km"],
                correct: 2,
                source: "Institut d'Éthologie Sensorielle - Audition exacerbée."
            },
            {
                id: 14,
                question: "Quel est le rôle de la marque blanche sur la nuque du tigre ?",
                options: ["Aucun rôle", "Signal de soumission et non-agression", "Camouflage", "Attraction sexuelle"],
                correct: 1,
                source: "Institut d'Éthologie - Marqueur communaux."
            },
            {
                id: 15,
                question: "À quel âge une jeune femelle tigre quitte son territoire ?",
                options: ["À 1-2 ans", "À 2-3 ans selon l'espace", "À 3-4 ans", "À 4+ ans"],
                correct: 1,
                source: "Centre d'Étude Territoriale - Dispersion précoce."
            },
            {
                id: 16,
                question: "Quel est le rôle du mugissement chez le tigre ?",
                options: ["Attaque uniquement", "Marquage territorial et communication à longue distance", "Chasse", "Jeu"],
                correct: 1,
                source: "Institut d'Acoustique Comportementale - Communication complexe."
            },
            {
                id: 17,
                question: "À quel âge les jeunes tigres commencent-ils à chasser ?",
                options: ["À 3-4 mois", "À 6-8 mois", "À 10-12 mois selon apprentissage", "À 18+ mois"],
                correct: 2,
                source: "Centre d'Apprentissage - Éducation progressive."
            },
            {
                id: 18,
                question: "Quel est le nombre de sous-espèces de tigres ?",
                options: ["2-3 sous-espèces", "4-5 sous-espèces", "6 sous-espèces actuelles", "10+ sous-espèces"],
                correct: 2,
                source: "Institut de Zoologie - Diversité géographique."
            },
            {
                id: 19,
                question: "À quel âge un tigre atteint sa taille adulte maximale ?",
                options: ["À 2-3 ans", "À 4-5 ans", "À 5-6 ans selon l'individu", "À 6+ ans"],
                correct: 2,
                source: "Centre de Croissance - Développement progressif."
            },
            {
                id: 20,
                question: "Quel est l'âge moyen de vie d'un tigre en nature ?",
                options: ["10-12 ans", "12-15 ans", "15-20 ans selon conditions", "20+ ans"],
                correct: 1,
                source: "Centre de Longévité - Durée de vie limitée."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme de la 'flanking strategy' chez le tigre ?",
                options: ["Pas de stratégie", "Approche latérale progressive en camouflage avant attaque", "Attaque directe", "Pas de plan"],
                correct: 1,
                source: "Institut de Chasse Stratégique - Prédation élaborée."
            },
            {
                id: 22,
                question: "Quel est le rôle de la 'mane-like marking' chez le tigre mâle ?",
                options: ["Décoration", "Démonstration de fitness et dominance sociale", "Thermorégulation", "Signal d'alerte"],
                correct: 1,
                source: "Université de Sélection Sexuelle - Traits de qualité."
            },
            {
                id: 23,
                question: "Quel est le processus de la 'territorial scent marking' ?",
                options: ["Pas de marquage", "Urine et sécrétion glandulaires marquent limites territoire", "Communication vocale uniquement", "Pas de délimitation"],
                correct: 1,
                source: "Institut d'Éthologie Chimique - Communication olfactive."
            },
            {
                id: 24,
                question: "Quel est le mécanisme de la 'nocturnal hunting preference' ?",
                options: ["Chasse diurne uniquement", "Chasse préférentiellement la nuit pour avantage sensoriel", "Pas de préférence", "Strictement diurne"],
                correct: 1,
                source: "Institut d'Éthologie Temporelle - Adaptation lumineuse."
            },
            {
                id: 25,
                question: "Quel est le rôle du 'allomothering' chez les femelles tigres ?",
                options: ["Pas de comportement", "Femelles non-mères aident à l'élevage des jeunes", "Infanticide", "Pas d'interaction"],
                correct: 1,
                source: "Université d'Éthologie Familiale - Comportement social."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de la 'mustelid-like climbing' chez le tigre ?",
                options: ["Pas de grimpe", "Capacité à grimper aux arbres contrairement aux autres félidés", "Lent", "Dangereux"],
                correct: 1,
                source: "Institut de Biomécanique - Adaptation arboricole."
            },
            {
                id: 27,
                question: "Quel est le processus de la 'inbreeding avoidance' chez les tigres ?",
                options: ["Pas d'évitement", "Jeunes tigres dispersent loin du territoire parental", "Pas de stratégie", "Reproduction aléatoire"],
                correct: 1,
                source: "Université de Génétique Comportementale - Stratégie génétique."
            },
            {
                id: 28,
                question: "Quel est le rôle du 'surplus killing' chez le tigre ?",
                options: ["Pas de surplus", "Chasse excessivement au-delà des besoins nutritionnels", "Gaspillage", "Régulation"],
                correct: 1,
                source: "Institut d'Éthologie Prédatrice - Comportement complexe."
            },
            {
                id: 29,
                question: "Quel est le mécanisme de la 'cryptic coloration' additionnelle ?",
                options: ["Pas de mécanisme", "Rayures + teinte permettent fusion avec environnement", "Couleur unique", "Pas d'efficacité"],
                correct: 1,
                source: "Institut d'Écologie Camouflage - Multimécanisme."
            },
            {
                id: 30,
                question: "Quel est le processus de l'impact de la 'island populations' sur la génétique ?",
                options: ["Pas d'impact", "Petites populations isolées créent dépression génétique", "Amélioration génétique", "Pas de changement"],
                correct: 1,
                source: "Université de Biologie Évolutive - Conservation critique."
            }
        ]
    }
};
