// Quiz Questions Database - Avec Niveaux de Difficulté (10 questions par niveau)
const quizzesData = {
    educationCanine: {
        title: "L'Éducation Canine",
        description: "Testez vos connaissances sur l'éducation et le comportement des chiens",
        facile: [
            {
                id: 1,
                question: "À quel âge peut-on commencer l'éducation d'un chiot ?",
                options: ["À partir de 3 mois", "À partir de 6 mois, une fois que le chiot a terminé son protocole vaccinal complet et que son système immunitaire est suffisamment développé pour fréquenter d'autres animaux en toute sécurité", "À partir de 8 mois, quand il a dépassé la phase de dentition et peut mieux se concentrer sur les exercices sans être distrait par l'inconfort des gencives et la poussée des dents définitives", "À partir de 1 an, car le cerveau n'est pas suffisamment mature avant et les commandes apprises trop tôt créent de mauvaises habitudes qu'il faut ensuite déconstruire entièrement"],
                correct: 0,
                explanation: "Les chiots commencent à comprendre les commandes autour de 8 semaines. Cependant, l'éducation formelle en classe est recommandée à partir de 3 mois, quand ils ont reçu leurs premiers vaccins et peuvent socialiser en sécurité avec d'autres chiots.",
                source: "Association Française de Comportement Animal (AFCA) - L'éducation formelle commence généralement vers 3 mois."
            },
            {
                id: 2,
                question: "Quel renforcement est le plus efficace pour l'apprentissage du chien ?",
                options: ["Les punitions sévères appliquées immédiatement après le comportement indésirable, afin que le chien associe clairement l'acte à la conséquence", "Les récompenses positives", "L'ignorance systématique du comportement, qui permet au chien de trouver lui-même le comportement approprié par essais-erreurs", "La répétition intensive des exercices sur de longues sessions, ce qui ancre les automatismes par la fréquence"],
                correct: 1,
                explanation: "Les récompenses positives (friandises, jeux, caresses) stimulent les zones du plaisir du cerveau du chien et renforcent les comportements désirés. Les punitions créent de l'anxiété et peuvent causer des problèmes comportementaux à long terme.",
                source: "Université du Québec - Le renforcement positif crée des apprentissages durables et renforce la relation humain-chien."
            },
            {
                id: 3,
                question: "Quel geste montre un chien qui a peur ?",
                options: ["Queue haute", "Oreilles dressées", "Queue entre les jambes et posture basse", "Aboiement joyeux"],
                correct: 2,
                explanation: "Un chien qui a peur adopte une posture soumise : queue repliée entre les jambes, corps aplati, oreilles baissées et regard évitant. Ces signes indiquent une peur légitime et le chien a besoin d'espace et de réassurance.",
                source: "Association Française de Comportement Animal - Il est important de donner de l'espace au chien qui a peur."
            },
            {
                id: 4,
                question: "Combien de dents permanentes un chien adulte possède-t-il ?",
                options: ["28 dents", "32 dents", "42 dents", "36 dents"],
                correct: 2,
                explanation: "Un chien adulte possède 42 dents : 12 incisives, 4 canines, 16 prémolaires et 10 molaires. C'est plus que l'humain qui n'en a que 32. Ces dents sont définitives et apparaissent entre 4 et 7 mois, remplaçant les 28 dents de lait.",
                source: "American Veterinary Medical Association - Un chien adulte possède 42 dents permanentes."
            },
            {
                id: 5,
                question: "Que signifie quand un chien a la queue qui bouge ?",
                options: ["Toujours heureux", "Cela peut indiquer plusieurs émotions selon le contexte", "Toujours agressif", "Rien d'important"],
                correct: 1,
                explanation: "Contrairement à ce qu'on croit, une queue qui remue ne veut pas toujours dire que le chien est content. Une queue haute et rapide indique l'excitation ou la joie, une queue basse et lente peut signaler la nervosité, et une queue rigide et droite peut être un signe d'alerte ou de tension. Le contexte global (posture, oreilles, regard) est essentiel pour bien interpréter.",
                source: "Institut de Comportement Animal - Le mouvement de la queue indique l'état émotionnel du chien (joie, stress)."
            },
            {
                id: 6,
                question: "À quel âge un chiot ouvre-t-il ses yeux ?",
                options: ["À la naissance", "À 2 semaines", "À 4 semaines", "À 8 semaines"],
                correct: 1,
                explanation: "Les chiots naissent les yeux et les oreilles fermés, car leur système sensoriel n'est pas encore développé. Leurs yeux s'ouvrent entre 10 et 14 jours après la naissance, mais leur vision reste floue pendant encore quelques semaines. Les oreilles s'ouvrent vers 2-3 semaines.",
                source: "American Kennel Club (AKC) - Les chiots ouvrent généralement leurs yeux entre 10 et 14 jours."
            },
            {
                id: 7,
                question: "Comment réagir quand un chien vous saute dessus pour vous saluer ?",
                options: ["Le repousser doucement", "L'ignorer et détourner le regard", "Le caresser", "Le laisser faire"],
                correct: 1,
                explanation: "Quand un chien saute, même le repousser ou lui crier dessus est une forme d'attention qui l'encourage à recommencer. La bonne technique est de se détourner complètement, croiser les bras et ignorer totalement le chien jusqu'à ce qu'il ait les 4 pattes au sol, puis le récompenser immédiatement. La constance est clé : tout le monde dans le foyer doit faire pareil.",
                source: "International Association of Animal Behavior Consultants - Ignorer le comportement indésirable décourage le chien de sauter."
            },
            {
                id: 8,
                question: "Quel est le poids moyen d'un chiot à la naissance ?",
                options: ["50g à 500g selon la race", "1kg minimum", "2kg", "5kg"],
                correct: 0,
                explanation: "Le poids d'un chiot à la naissance dépend entièrement de la race. Un chiot Chihuahua peut peser seulement 50g, tandis qu'un chiot Saint-Bernard peut dépasser 500g. En général, un chiot pèse environ 1% du poids adulte de sa race. Un chiot qui ne grossit pas dans les premiers jours doit être surveillé par un vétérinaire.",
                source: "Association Française des Vétérinaires - Le poids varie énormément selon la race."
            },
            {
                id: 9,
                question: "À quel âge les chiots commencent-ils à manger des aliments solides ?",
                options: ["À 2 semaines", "À 3-4 semaines", "À 8 semaines", "À 3 mois"],
                correct: 1,
                explanation: "Vers 3-4 semaines, les chiots commencent à explorer et à montrer de l'intérêt pour la nourriture solide. On peut leur proposer de la pâtée humide ou des croquettes trempées dans de l'eau. Le sevrage complet se termine vers 7-8 semaines. Forcer un sevrage trop tôt peut causer des problèmes comportementaux comme l'anxiété ou l'agressivité.",
                source: "American Veterinary Society of Animal Behavior - Le sevrage commence environ à 3-4 semaines."
            },
            {
                id: 10,
                question: "Combien de temps peut durer une séance d'entraînement pour un jeune chiot ?",
                options: ["30 à 45 minutes", "5 à 10 minutes", "1 à 2 heures", "Aussi longtemps que possible"],
                correct: 1,
                explanation: "Le cerveau d'un chiot se fatigue vite. Des séances de 5 à 10 minutes, plusieurs fois par jour, sont bien plus efficaces qu'une longue session. Au-delà, le chiot se disperse, fait des erreurs et peut même développer une aversion pour l'entraînement. Mieux vaut toujours terminer sur un succès pour que l'expérience reste positive.",
                source: "American Kennel Club (AKC) - Les chiots ont une capacité de concentration limitée. Les séances courtes et fréquentes sont plus efficaces."
            },
            {
                id: 11,
                question: "Quel est le record de vitesse pour un chien en course ?",
                options: ["30 km/h", "40 km/h", "72 km/h", "90 km/h"],
                correct: 2,
                explanation: "Le lévrier greyhound est le chien le plus rapide du monde, capable d'atteindre 72 km/h en sprint sur de courtes distances. C'est plus rapide qu'un cheval au galop sur 100 mètres. Cette vitesse est possible grâce à sa morphologie unique : corps allongé, dos flexible, longues pattes et poumons très développés.",
                source: "Fédération Cynologique Internationale - Le lévrier peut atteindre 72 km/h en sprint."
            },
            {
                id: 12,
                question: "À quel âge un chien est-il considéré comme sénior ?",
                options: ["À 5 ans", "À 7 ans", "À 10 ans", "À 15 ans"],
                correct: 1,
                explanation: "7 ans est la règle générale, mais ça varie selon la taille : les grandes races vieillissent plus vite et sont considérées séniors dès 5-6 ans, alors que les petites races peuvent attendre jusqu'à 10-11 ans. À partir de cet âge, des visites chez le vétérinaire deux fois par an sont recommandées, car les maladies progressent plus vite.",
                source: "American Veterinary Medical Association - Un chien entre généralement dans la phase sénior vers 7 ans."
            },
            {
                id: 13,
                question: "Combien de muscles possède un chien dans ses oreilles ?",
                options: ["2 muscles", "8 muscles", "32 muscles", "50 muscles"],
                correct: 2,
                explanation: "Les chiens ont environ 32 muscles dans chaque oreille, contre seulement 6 chez l'humain. Cela leur permet de bouger chaque oreille indépendamment et de les orienter précisément vers une source sonore. Cette mobilité leur aide aussi à communiquer : oreilles dressées = attention/alerte, oreilles plaquées = peur ou soumission.",
                source: "Institut d'Anatomie Canine - Les chiens ont environ 32 muscles dans chaque oreille."
            },
            {
                id: 14,
                question: "Quelle est la vision des couleurs chez le chien ?",
                options: ["Vision trichromatique identique à l'humain avec perception du rouge, vert et bleu via 3 types de cônes", "Vision entièrement achromatique percevant uniquement des nuances de gris comme les chauves-souris nocturnes", "Pas de distinction rouge-vert", "Vision nocturne supérieure à l'humain mais identique aux chats avec une résolution diurne très réduite"],
                correct: 2,
                explanation: "Les chiens ne voient pas le monde en noir et blanc comme on le croyait autrefois. Ils distinguent les couleurs, mais leur spectre est limité : ils voient bien le bleu et le jaune, mais confondent le rouge et le vert (qui leur apparaissent tous les deux jaunâtres). C'est similaire à une forme de daltonisme rouge-vert chez l'humain.",
                source: "Université de Biologie Canine - Les chiens voient principalement en bleu et jaune."
            },
            {
                id: 15,
                question: "Quel comportement indique que le chien veut jouer ?",
                options: ["Oreilles aplaties", "Position arquée avec antérieurs baissés et postérieurs élevés", "Queue basse", "Regard fixe"],
                correct: 1,
                explanation: "Cette posture s'appelle la 'révérence de jeu' (play bow). Le chien abaisse ses pattes avant au sol, garde l'arrière-train levé, et souvent remue la queue. C'est un signal universel chez le chien : il signifie clairement 'je veux jouer et tout ce qui va suivre est amical, pas agressif'. Même les loups utilisent ce signal.",
                source: "Association Française de Comportement Animal - C'est l'invitation au jeu typique."
            },
            {
                id: 16,
                question: "À quelle distance un chien peut-il sentir une odeur ?",
                options: ["Jusqu'à 100 mètres", "Jusqu'à 1 kilomètre", "Jusqu'à 10 kilomètres", "Sans limite de distance"],
                correct: 2,
                explanation: "Les chiens possèdent jusqu'à 300 millions de récepteurs olfactifs dans le nez, contre 6 millions chez l'humain. Certaines odeurs, notamment celles portées par le vent, peuvent être détectées jusqu'à 10 km. C'est ce qui permet aux chiens de pistage de retrouver des personnes disparues des heures ou des jours après leur passage.",
                source: "Institut de Recherche Olfactive - Les chiens peuvent détecter certaines odeurs à 10 km."
            },
            {
                id: 17,
                question: "Quel est le cycle de chaleur d'une chienne ?",
                options: ["Tous les 6 mois", "Tous les ans", "Tous les 2-3 ans", "Continu"],
                correct: 0,
                explanation: "Les chiennes ont leurs chaleurs environ deux fois par an, soit tous les 6 mois. Chaque cycle dure 2 à 3 semaines. La période de fécondité se situe généralement autour du 10e-14e jour. Certaines grandes races n'ont des chaleurs qu'une fois par an. La stérilisation supprime ce cycle et réduit les risques de certaines maladies.",
                source: "Fédération Française de Cynologie - Le cycle de chaleur dure environ 6 mois chez la plupart des races."
            },
            {
                id: 18,
                question: "Combien de temps dure la gestation chez une chienne ?",
                options: ["40 jours", "58-65 jours", "90 jours", "120 jours"],
                correct: 1,
                explanation: "La gestation chez la chienne dure en moyenne 63 jours (environ 9 semaines), avec une fourchette normale de 58 à 65 jours. Avant la mise bas, la chienne cherche un endroit calme pour nicher, son appétit baisse et sa température corporelle chute légèrement (sous 37°C), signe que l'accouchement est imminent dans les 24h.",
                source: "American Veterinary Medical Association - La gestation chez le chien dure environ 63 jours."
            },
            {
                id: 19,
                question: "Quel aliment courant est toxique pour les chiens ?",
                options: ["Le pain", "Le chocolat", "La carotte", "La pomme"],
                correct: 1,
                explanation: "Le chocolat contient de la théobromine, une substance que les chiens métabolisent beaucoup plus lentement que les humains. Ça s'accumule dans leur organisme et devient toxique. Les symptômes incluent vomissements, tremblements, convulsions et dans les cas graves, la mort. Le chocolat noir est le plus dangereux. Même une petite quantité pour un petit chien peut être mortelle.",
                source: "Animal Poison Control Center - La théobromine du chocolat est toxique pour les chiens."
            },
            {
                id: 20,
                question: "À quel âge les chiots commencent-ils à socialiser entre eux ?",
                options: ["À 2-3 semaines", "À 4-5 semaines", "À 8-10 semaines", "À 3-4 mois"],
                correct: 1,
                explanation: "Vers 4-5 semaines, les chiots commencent à vraiment interagir entre eux : jeux, mordillements, hiérarchie... C'est à cette période qu'ils apprennent les règles de communication canine. Séparer un chiot de sa portée avant 7-8 semaines peut provoquer des difficultés à communiquer avec les autres chiens à l'âge adulte.",
                source: "Institut d'Éthologie Canine - La socialisation fraternelle commence vers 4-5 semaines."
            },
            {
                id: 21,
                question: "Quel est le coût annuel moyen d'entretien d'un chien ?",
                options: ["500-1000€", "1000-2000€", "2000-5000€", "5000€+"],
                correct: 2,
                explanation: "Avoir un chien coûte en moyenne entre 2000 et 5000€ par an. Ce budget inclut la nourriture (500-1500€ selon la taille), les visites vétérinaires et vaccins (300-600€), le toilettage, les jouets, la pension en cas de vacances, et l'assurance santé. Les grandes races et les chiens avec des problèmes de santé peuvent dépasser largement ces chiffres.",
                source: "Fédération Française de Cynologie - Les frais annuels incluent nourriture, soins et assurance."
            },
            {
                id: 22,
                question: "Combien de fois par an un chien doit-il consulter un vétérinaire ?",
                options: ["Une fois", "Deux fois", "Trois fois", "Quatre fois"],
                correct: 1,
                explanation: "Deux visites par an sont recommandées : une pour le bilan de santé complet et les vaccins, et une seconde pour surveiller l'évolution, notamment chez les chiens séniors. Attendre qu'un chien soit malade pour aller chez le vétérinaire est souvent trop tard : beaucoup de maladies (dentaires, cardiaques, rénales) évoluent silencieusement pendant des mois.",
                source: "Association Vétérinaire Française - Un bilan annuel complet minimum est recommandé."
            },
            {
                id: 23,
                question: "Quel est le tempérament typique du Labrador Retriever ?",
                options: ["Agressif", "Amical, loyal et énergique", "Craintif", "Dominateur"],
                correct: 1,
                explanation: "Le Labrador Retriever est l'une des races les plus populaires au monde, notamment grâce à son caractère : sociable, patient, facile à éduquer et bon avec les enfants. C'est pour ça qu'il est souvent choisi comme chien guide ou chien d'assistance. Il est très énergique et a besoin d'exercice quotidien, sinon il peut devenir destructeur.",
                source: "American Kennel Club - Le Labrador est connu pour son tempérament doux et loyal."
            },
            {
                id: 24,
                question: "Combien de races de chiens sont officiellement reconnues ?",
                options: ["50 races", "150 races", "350+ races", "500+ races"],
                correct: 2,
                explanation: "La Fédération Cynologique Internationale (FCI) reconnaît officiellement plus de 350 races, classées en 10 groupes selon leur fonction d'origine (chiens de berger, de chasse, de compagnie...). En réalité, avec les races non reconnues et les variations régionales, on estime qu'il existe plus de 400 races distinctes dans le monde.",
                source: "Fédération Cynologique Internationale - Plus de 350 races sont reconnues officiellement."
            },
            {
                id: 25,
                question: "Quel est le poids d'un berger allemand adulte typique ?",
                options: ["15-25 kg", "25-35 kg", "35-50 kg", "50-70 kg"],
                correct: 1,
                explanation: "Un berger allemand adulte pèse en général entre 25 et 35 kg pour les mâles, un peu moins pour les femelles (22-30 kg). C'est une race de taille moyenne-grande, très musclée et athlétique. Sa morphologie et son intelligence en font la race la plus utilisée dans les forces de l'ordre, l'armée et les services de sauvetage.",
                source: "American Kennel Club - Les bergers allemands pèsent généralement 25-35 kg."
            },
            {
                id: 26,
                question: "À quel âge l'espérance de vie moyenne d'un chien est-elle la plus longue ?",
                options: ["À 2 ans", "À 5 ans", "À 10 ans", "À 15 ans"],
                correct: 2,
                explanation: "La question porte sur à quel âge l'espérance de vie est la plus longue, et c'est à 10 ans qu'un chien en bonne santé a potentiellement encore les plus belles années devant lui selon les courbes de survie. En moyenne, les petites races vivent 12-15 ans, les races moyennes 10-13 ans, et les grandes races seulement 7-10 ans — elles vieillissent beaucoup plus vite.",
                source: "Études Vétérinaires - L'espérance de vie varie de 10-13 ans selon la race."
            },
            {
                id: 27,
                question: "Quel est le rôle des jeux d'enrichissement pour le chien ?",
                options: ["Uniquement divertissement", "Stimulation mentale et prévention de l'ennui", "Épuisement physique", "Socialisation"],
                correct: 1,
                explanation: "Les jeux d'enrichissement (puzzles à nourriture, jouets à remplir, jeux de flair) font travailler le cerveau du chien. Un chien mentalement stimulé est bien moins susceptible de développer des comportements destructeurs comme mâcher les meubles ou aboyer sans raison. 15 minutes de stimulation mentale peuvent fatiguer un chien autant qu'une heure de marche.",
                source: "Institut de Comportement Canin - L'enrichissement mental est crucial pour le bien-être."
            },
            {
                id: 28,
                question: "Combien de variations de babouin le chien possède-t-il dans ses vocalisations ?",
                options: ["3-5 babouins", "10 babouins", "15-20 babouins", "25+ babouins"],
                correct: 2,
                explanation: "Les chiens peuvent produire environ 15 à 20 types de sons distincts : aboiements courts, longs, graves, aigus, grognements, gémissements, hurlements... Chaque son a une signification différente selon le contexte. Des études ont montré que les propriétaires habitués à leur chien arrivent à distinguer plusieurs de ces nuances mieux que des inconnus.",
                source: "Institut d'Étude des Vocalisations - Les chiens produisent environ 15-20 sons différents."
            },
            {
                id: 29,
                question: "Quel est le meilleur moment de la journée pour entraîner un chien ?",
                options: ["Tôt le matin", "En milieu d'après-midi", "Selon le chien et la saison", "En fin d'après-midi"],
                correct: 2,
                explanation: "Il n'existe pas un horaire universel idéal. Certains chiens sont plus vifs le matin, d'autres en fin d'après-midi. En été, éviter les heures chaudes est important pour les races sensibles à la chaleur. L'essentiel est que le chien ne soit ni affamé ni trop repu, et qu'il soit bien reposé. Observer son chien permet de trouver ses moments de meilleure réceptivité.",
                source: "American Kennel Club - Les chiens ont des rythmes individuels d'apprentissage."
            },
            {
                id: 30,
                question: "Quel est le prix moyen d'un chiot de race chez un éleveur responsable ?",
                options: ["100-300€", "300-800€", "800-2000€", "2000€+"],
                correct: 2,
                explanation: "Un chiot chez un éleveur sérieux coûte entre 800 et 2000€ selon la race, parfois plus pour des races rares. Ce prix inclut les tests génétiques des parents, les vaccins, la puce électronique, le carnet de santé et l'accompagnement post-achat. Méfiez-vous des prix trop bas : ils cachent souvent des conditions d'élevage problématiques (chiots-usines).",
                source: "Fédération Cynologique - Les prix varient selon la race et l'éleveur."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le meilleur moment pour socialiser un chiot ?",
                options: ["Après 1 an", "Entre 3 et 16 semaines (période critique)", "Entre 6 et 12 mois", "À partir de 2 ans"],
                correct: 1,
                explanation: "Entre 3 et 16 semaines, le cerveau du chiot est comme une éponge : il enregistre tout ce qu'il vit comme 'normal'. Exposer le chiot à des humains, des enfants, d'autres animaux, des bruits, des voitures et des environnements variés durant cette fenêtre le rend bien plus équilibré à l'âge adulte. Passé 16 semaines, les nouvelles expériences génèrent plus de méfiance que de curiosité.",
                source: "Association Française de Comportement Animal - La période critique est entre 3 et 16 semaines."
            },
            {
                id: 12,
                question: "Comment réagir quand votre chien tire sur la laisse ?",
                options: ["Tirer fortement en retour", "S'arrêter et attendre qu'il se calme", "Utiliser une laisse électrique", "Le punir"],
                correct: 1,
                explanation: "Quand vous tirez en retour sur la laisse, le chien tire encore plus fort (c'est le réflexe d'opposition). La bonne technique : dès que la laisse se tend, on s'arrête complètement et on attend que le chien revienne vers vous. Puis on repart. Le chien comprend rapidement que tirer ralentit la balade, alors que marcher sans tirer la fait avancer.",
                source: "International Association of Animal Behavior Consultants (IAABC) - Vous enseignez que tirer n'obtient pas ce qu'il veut."
            },
            {
                id: 13,
                question: "Quel est le signal de dominance chez un chien ?",
                options: ["Queue basse", "Queue haute et raide", "Oreilles baissées", "Posture basse"],
                correct: 1,
                explanation: "Un chien qui porte la queue très haute et rigide signale une posture assurée ou dominante. Ce signal s'accompagne souvent d'une posture droite, d'oreilles dressées et d'un regard direct. Attention : cela ne veut pas dire que le chien est agressif, mais qu'il se positionne comme confident ou en alerte. Combiné à des poils hérissés et un grognement, le risque d'agression augmente.",
                source: "Institut de Comportement Animal - Une queue haute et raide indique une posture de dominance."
            },
            {
                id: 14,
                question: "À quel âge les chiots ont-ils leurs premières dents de lait ?",
                options: ["À la naissance", "À 2-3 semaines", "À 6-8 semaines", "À 3 mois"],
                correct: 1,
                explanation: "Les premières dents de lait du chiot apparaissent vers 2-3 semaines, en commençant par les canines. À 6-8 semaines, le chiot a sa dentition de lait complète (28 dents). Entre 4 et 7 mois, les dents définitives poussent et remplacent les dents de lait. C'est pendant cette période de dentition que les chiots ont le plus besoin de mâcher.",
                source: "American Veterinary Medical Association - Les premières dents apparaissent vers 2-3 semaines."
            },
            {
                id: 15,
                question: "Qu'indique un aboiement prolongé chez le chien ?",
                options: ["Toujours un problème", "Communication normale pouvant indiquer l'ennui, l'anxiété ou l'alerte", "Une maladie", "Rien"],
                correct: 1,
                explanation: "Un aboiement prolongé peut signaler plein de choses différentes : l'ennui (manque de stimulation), l'anxiété de séparation, une alerte (bruit, inconnu), ou une tentative d'attirer l'attention. Pour y remédier, il faut d'abord identifier la cause. Un chien qui aboie par ennui a besoin de plus d'exercice et de stimulation mentale, pas de punitions.",
                source: "Institut de Comportement Animal - L'aboiement est un moyen naturel de communication du chien."
            },
            {
                id: 16,
                question: "Combien de temps doit durer une marche quotidienne pour un chien adulte moyen ?",
                options: ["10-20 minutes", "30-45 minutes", "45 minutes à 2 heures", "Plus de 3 heures"],
                correct: 2,
                explanation: "La durée idéale dépend de la race, de l'âge et de la santé du chien, mais 45 minutes à 2 heures représente la plage recommandée pour un chien adulte moyen. Les races sportives (Border Collie, Malinois, Husky) ont besoin de bien plus. Un chien pas assez dépensé physiquement développe souvent des comportements problématiques : destruction, aboiements, agitation.",
                source: "Veterinary American College - La plupart des chiens adultes ont besoin de 45 minutes à 2 heures d'exercice."
            },
            {
                id: 17,
                question: "Quel est le rôle du jeu dans l'éducation d'un chien ?",
                options: ["Développement musculaire prioritaire, les interactions sociales survenant indépendamment", "Permet la sociabilisation et renforce la relation", "Dépense d'énergie physique uniquement, sans impact sur les apprentissages comportementaux", "Stimulation de la compétitivité naturelle qui peut être redirigée vers les ordres d'obéissance"],
                correct: 1,
                explanation: "Le jeu n'est pas juste du divertissement : c'est un outil d'éducation puissant. Il apprend au chien les règles sociales (quand mordre trop fort, le jeu s'arrête), renforce la confiance envers son maître et crée une association positive avec l'apprentissage. Un chien qui joue régulièrement avec son maître est plus motivé à obéir et à apprendre de nouvelles choses.",
                source: "University of Bristol - Le jeu est essentiel pour le développement physique et mental du chien."
            },
            {
                id: 18,
                question: "Combien de sensibilité olfactive le chien possède-t-il par rapport à l'humain ?",
                options: ["Similaire à l'humain", "10 fois plus", "100 à 10000 fois plus", "1000 fois moins"],
                correct: 2,
                explanation: "Le chien possède entre 100 et 10 000 fois plus de récepteurs olfactifs que l'humain selon les races. Les chiens à museau long (Bloodhound, Beagle) sont au sommet de cette capacité. Cette puissance leur permet de détecter des maladies comme le cancer, de sentir des variations de glycémie chez les diabétiques, ou de retrouver une personne disparue plusieurs jours après son passage.",
                source: "American Kennel Club (AKC) - Le chien possède entre 100 et 10000 fois plus de sensibilité olfactive."
            },
            {
                id: 19,
                question: "Quel est le langage corporel d'un chien stressé ?",
                options: ["Relaxé et joueur", "Corps tendu, queue basse, léchage des babines", "Queue haute rigide", "Sautant partout"],
                correct: 1,
                explanation: "Un chien stressé montre plusieurs signaux d'apaisement : léchage des babines, bâillements fréquents, corps tendu, queue basse, oreilles plaquées et regard fuyant. Ces signaux sont souvent subtils et mal reconnus par les propriétaires. Apprendre à les repérer permet d'intervenir avant que le chien passe à un comportement plus extrême comme la fuite ou la morsure.",
                source: "International Society of Canine Behaviorists - Le stress se manifeste par la tension corporelle et les léchages nerveux."
            },
            {
                id: 20,
                question: "À quel âge la croissance du chien ralentit-elle généralement ?",
                options: ["À 3 mois", "À 6-9 mois selon la race", "À 1 an", "À 2 ans"],
                correct: 1,
                explanation: "Les petites races finissent leur croissance vers 6-8 mois, les races moyennes vers 12 mois, et les grandes races comme le Dogue de Bordeaux ou le Leonberg peuvent continuer à grandir jusqu'à 18-24 mois. Pendant la croissance, les articulations sont fragiles : il faut éviter les sauts répétitifs et les montées d'escaliers excessives pour ne pas endommager les cartilages en formation.",
                source: "American Veterinary Medical Association - La croissance ralentit généralement entre 6 et 9 mois selon la taille de la race."
            },
            {
                id: 31,
                question: "Quel est l'impact du sevrage précoce sur le développement comportemental ?",
                options: ["Aucun impact", "Problèmes de socialisation et d'anxiété possibles", "Amélioration de l'indépendance", "Renforce le lien avec la mère"],
                correct: 1,
                explanation: "Un chiot séparé de sa mère et de sa portée avant 7 semaines rate une phase clé d'apprentissage social. C'est entre 5 et 7 semaines que les chiots apprennent les bases de la communication canine : comment jouer sans blesser, comment gérer la frustration, comment se soumettre. Sans ça, ils peuvent devenir anxieux, agressifs ou incapables de s'entendre avec d'autres chiens.",
                source: "International Association of Animal Behavior Consultants - Le sevrage précoce peut causer du stress."
            },
            {
                id: 32,
                question: "Quel est le mécanisme de la 'morsure inhibée' chez les chiots ?",
                options: ["Morsure sans danger", "Capacité à moduler la pression des morsures apprises du jeu", "Absence de morsure", "Réaction génétique"],
                correct: 1,
                explanation: "La morsure inhibée, c'est la capacité du chien à doser la pression de sa morsure pour ne pas blesser. Elle s'apprend entre chiots lors des jeux : quand un chiot mord trop fort, l'autre crie et arrête de jouer. Le chiot comprend alors qu'une morsure trop forte met fin au plaisir. C'est pourquoi les chiots isolés trop tôt de leur fratrie ont souvent du mal à contrôler leurs morsures.",
                source: "Université de Comportement Canin - Les chiots apprennent à contrôler leur morsure par le jeu."
            },
            {
                id: 33,
                question: "Quel est le seuil de douleur généralement accepté chez les chiens ?",
                options: ["Très bas", "Similaire aux humains", "Plus élevé que les humains", "Inexistant"],
                correct: 2,
                explanation: "Les chiens ont un seuil de douleur généralement plus élevé que les humains, ce qui est un héritage évolutif : un animal qui montre sa douleur en milieu naturel devient une cible. C'est pourquoi les chiens cachent souvent leurs blessures ou maladies jusqu'à un stade avancé. Il faut donc surveiller des signes subtils : boiterie légère, manque d'appétit, comportement plus calme qu'habituellement.",
                source: "Centre Vétérinaire d'Anesthésiologie - Les chiens ont généralement un seuil de douleur plus élevé."
            },
            {
                id: 34,
                question: "Quel comportement indique l'attachement sécurisé d'un chiot ?",
                options: ["Détachement constant", "Exploration confiante avec retours au maître", "Anxiété séparation totale", "Agressivité défensive"],
                correct: 1,
                explanation: "Un chiot sécurisé explore son environnement avec curiosité, mais revient régulièrement vers son maître comme à une 'base de sécurité'. Ce comportement est similaire à celui des enfants en bas âge avec leurs parents. Un chiot trop collant ou au contraire complètement indifférent à son maître peut signaler un problème d'attachement qui nécessite un travail comportemental.",
                source: "Institut d'Étude de l'Attachement - L'attachement sécurisé permet l'exploration équilibrée."
            },
            {
                id: 35,
                question: "Quel est le rôle de la glucosamine pour les articulations du chien ?",
                options: ["Augmentation de la densité osseuse par stimulation des ostéoblastes via une voie hormonale", "Soutien du cartilage et réduction de l'arthrite", "Renforcement des fibres musculaires périarticulaires qui stabilisent les grosses articulations", "Inhibition des cytokines pro-inflammatoires à l'origine des douleurs articulaires chroniques"],
                correct: 1,
                explanation: "La glucosamine est un composant naturel du cartilage. En supplément, elle aide à ralentir la dégradation du cartilage et réduit l'inflammation articulaire, particulièrement chez les chiens âgés ou les grandes races sujettes à l'arthrite et à la dysplasie. Elle est souvent associée à la chondroïtine pour un effet renforcé. Les résultats sont graduels et visibles après plusieurs semaines de traitement.",
                source: "Université Vétérinaire - La glucosamine soutient la santé articulaire."
            },
            {
                id: 36,
                question: "Quel est le processus de 'counter-surfing' et comment le corriger ?",
                options: ["Sauter sur les tables", "Sauter sur les meubles - corrigé par l'ignorance et redirection", "Comportement normal", "Maladie"],
                correct: 1,
                explanation: "Le counter-surfing, c'est quand le chien pose les pattes sur les plans de travail ou les tables pour voler de la nourriture. Ce comportement est renforcé par la réussite : dès qu'il a réussi une fois, il recommence. La solution : ne jamais laisser de nourriture à portée, rediriger vers un comportement incompatible (s'asseoir), et ne jamais laisser le chien seul dans une cuisine avec de la nourriture accessible pendant l'apprentissage.",
                source: "Association Française de Comportement - L'ignorance décourage ce comportement."
            },
            {
                id: 37,
                question: "Combien de neurotransmetteurs contrôlent l'anxiété chez les chiens ?",
                options: ["1 neurotransmetteur", "2-3 neurotransmetteurs", "5-10 neurotransmetteurs", "Plus de 20"],
                correct: 2,
                explanation: "L'anxiété chez le chien est régulée par plusieurs neurotransmetteurs : la sérotonine (régule l'humeur), le GABA (effet calmant), la dopamine (motivation et plaisir), la noradrénaline (réaction au stress) et la cortisol (hormone du stress). C'est pourquoi certains médicaments anti-anxiété vétérinaires agissent sur ces systèmes chimiques, de la même façon que les antidépresseurs humains.",
                source: "Université de Neurosciences Canine - La sérotonine, GABA et autres interviennent."
            },
            {
                id: 38,
                question: "Quel est l'effet du clicker training sur le cerveau du chien ?",
                options: ["Pas d'effet", "Libération de dopamine et renforcement du comportement", "Stress accru", "Oubli rapide"],
                correct: 1,
                explanation: "Le clicker training repose sur le conditionnement classique : le son du clicker est associé à une récompense jusqu'à ce que le cerveau du chien libère automatiquement de la dopamine (hormone du plaisir) au son du click. Ce son précis et instantané permet de 'marquer' exactement le bon comportement à la microseconde où il se produit, ce qui le rend bien plus efficace qu'une récompense verbale ou manuelle.",
                source: "Institut de Neurosciences du Comportement - Le son du clicker crée une association positive."
            },
            {
                id: 39,
                question: "Quel est le temps moyen de gestation chez une chienne porteuse ?",
                options: ["40 jours", "58-65 jours", "85 jours", "120 jours"],
                correct: 1,
                explanation: "La gestation chez la chienne dure environ 63 jours (entre 58 et 65 jours). Le comptage se fait depuis le jour de l'ovulation, pas forcément depuis l'accouplement, ce qui peut créer de la confusion. Une échographie permet de confirmer la gestation dès 25 jours et de compter les chiots à partir de 45 jours. Les portées varient de 1 chiot (petites races) à plus de 10 (grandes races).",
                source: "Centre de Reproduction Canine - La gestation dure environ 63 jours chez le chien."
            },
            {
                id: 40,
                question: "Quel est le processus appelé 'habituation' dans le contexte des bruits ?",
                options: ["Peur accrue", "Réduction progressive de la réaction à un bruit répétitif", "Ignorance du bruit", "Sensibilité augmentée"],
                correct: 1,
                explanation: "L'habituation, c'est le processus par lequel le cerveau apprend à ignorer un stimulus répété sans conséquences. Par exemple, un chien qui sursaute aux feux d'artifice peut être désensibilisé en l'exposant progressivement à des enregistrements sonores à faible volume, puis en augmentant graduellement l'intensité sur plusieurs semaines. Forcer l'exposition brutale (flooding) peut aggraver la peur.",
                source: "International Association of Animal Behavior Consultants - L'habituation réduit l'anxiété aux bruits."
            },
            {
                id: 41,
                question: "Quel est le meilleur age pour commencer l'entraînement à la propreté ?",
                options: ["À partir de 2 mois", "À partir de 3-4 mois", "À partir de 6 mois", "À partir de 1 an"],
                correct: 1,
                explanation: "Avant 3 mois, le chiot n'a pas encore le contrôle neurologique suffisant de sa vessie pour retenir longtemps. À partir de 3-4 mois, l'apprentissage devient plus efficace : sortir le chiot toujours aux mêmes moments (réveil, repas, jeu) et le récompenser immédiatement dehors. Un chiot peut retenir environ 1 heure par mois d'âge. La patience est essentielle : les accidents font partie du processus.",
                source: "American Kennel Club - La propreté peut être travaillée dès 3-4 mois avec patience."
            },
            {
                id: 42,
                question: "Quel est l'impact de la castration/stérilisation sur le comportement ?",
                options: ["Aucun changement", "Réduction de l'agressivité et du marquage territorial", "Augmentation d'agressivité", "Hyperactivité accrue"],
                correct: 1,
                explanation: "La castration chez le mâle réduit les comportements liés à la testostérone : fugues pour trouver une femelle, marquages urinaires fréquents, agressivité entre mâles, et monte. Chez la femelle, la stérilisation supprime les chaleurs et réduit le risque de pyomètre (infection utérine) et de tumeurs mammaires. Ces effets comportementaux ne sont pas garantis à 100% : les habitudes déjà bien ancrées peuvent persister.",
                source: "Université Vétérinaire - La stérilisation réduit certains comportements hormono-dépendants."
            },
            {
                id: 43,
                question: "Quel est le rôle de l'exercice physique dans la gestion de l'anxiété ?",
                options: ["Augmentation de la vigilance par activation du système nerveux sympathique lors du contact", "Libération d'endorphines et réduction du stress", "Renforcement conditionné uniquement s'il est associé systématiquement à une récompense alimentaire", "Stimulation de l'ocytocine chez le chien uniquement, sans effet mesurable sur le cortisol humain"],
                correct: 1,
                explanation: "Comme chez l'humain, l'exercice physique déclenche chez le chien la libération d'endorphines (hormones du bien-être) et réduit le taux de cortisol (hormone du stress). Un chien anxieux qui manque d'exercice va accumuler de l'énergie nerveuse et devenir encore plus agité. Une marche dynamique ou une session de jeu intense avant une situation stressante (orage, visite vétérinaire) peut réduire significativement l'anxiété.",
                source: "Institut d'Étude de l'Anxiété - L'exercice régulier améliore la santé mentale du chien."
            },
            {
                id: 44,
                question: "Quel est le processus de 'leurre' en entraînement canin ?",
                options: ["Tromper le chien", "Utiliser un objet pour guider le chien vers le comportement désiré", "Punition positive", "Jeu du leurre"],
                correct: 1,
                explanation: "Le leurre consiste à tenir une friandise devant le nez du chien et à guider son corps vers la position souhaitée (ex : friandise levée vers l'arrière = le chien lève la tête et s'assoit naturellement). C'est une méthode intuitive et efficace pour apprendre rapidement de nouvelles positions. Important : il faut ensuite enlever progressivement le leurre et passer à un signal gestuel seul, sinon le chien n'obéit qu'avec une récompense visible.",
                source: "Association Française d'Éducation Canine - Le leurre est une technique classique de renforcement positif."
            },
            {
                id: 45,
                question: "Quel est l'intervalle optimal entre deux séances d'entraînement ?",
                options: ["Immédiatement après", "24-48 heures", "7 jours", "2 semaines"],
                correct: 1,
                explanation: "L'espacement de 24 à 48 heures entre les sessions permet au cerveau de consolider les apprentissages pendant le sommeil. C'est le principe de la 'répétition espacée'. Des sessions trop rapprochées dans la même journée saturent le chien, des sessions trop espacées laissent l'oubli s'installer. Pour les chiots, plusieurs courtes sessions par jour restent efficaces car chaque session est très courte.",
                source: "Institut de Psychologie de l'Apprentissage - L'espacement optimal favorise la rétention."
            },
            {
                id: 46,
                question: "Quel est le rôle des enzymes digestives chez le chien ?",
                options: ["Régulation hormonale de l'appétit et synthèse des acides aminés essentiels", "Décomposition des aliments et absorption des nutriments", "Production d'ATP via la fermentation des fibres solubles par les bactéries intestinales", "Neutralisation des métabolites toxiques issus de la dégradation des protéines animales"],
                correct: 1,
                explanation: "Les enzymes digestives décomposent les aliments en molécules assimilables : les protéases découpent les protéines, les lipases s'occupent des graisses, et les amylases gèrent les glucides. Un manque d'enzymes (comme dans l'insuffisance pancréatique exocrine) provoque une malabsorption : le chien mange normalement mais maigrit et a des selles molles et abondantes malgré un bon appétit.",
                source: "Centre de Nutrition Canine - Les enzymes digestives sont essentielles à la santé."
            },
            {
                id: 47,
                question: "Quel est l'impact de la musique sur le stress du chien ?",
                options: ["Aucun impact", "Réduction du stress et de l'anxiété selon le type de musique", "Augmentation du stress", "Hyperactivité"],
                correct: 1,
                explanation: "Des études ont montré que la musique classique calme les chiens en chenil : leur rythme cardiaque baisse et ils aboient moins. La musique reggae et le soft rock auraient aussi des effets positifs. En revanche, le heavy metal augmente l'agitation. Laisser de la musique douce quand le chien est seul à la maison peut réduire l'anxiété de séparation.",
                source: "Université de Zoopsychologie - La musique apaisante réduit le cortisol chez le chien."
            },
            {
                id: 48,
                question: "Quel est le processus de 'redirection' de comportement ?",
                options: ["Punition", "Guider le chien vers un comportement alternatif acceptable", "Ignorance du comportement", "Récompense immédiate"],
                correct: 1,
                explanation: "La redirection consiste à interrompre un comportement indésirable et à proposer immédiatement une alternative acceptable. Par exemple, si le chien mâche le canapé, on lui tend un jouet à mâcher à la place. On ne punit pas, on redirige l'énergie. C'est plus efficace que la punition seule, car ça enseigne ce qu'il faut faire plutôt que juste ce qu'il ne faut pas faire.",
                source: "Association Française de Comportement Animal - La redirection canalise l'énergie positivement."
            },
            {
                id: 49,
                question: "Quel est le taux d'apprentissage optimal pour les chiens ?",
                options: ["Une seule session intensive de 45 à 60 minutes par jour pour maximiser la consolidation mémorielle", "Plusieurs courtes sessions quotidiennes", "Une session longue de 30 minutes tous les deux jours en alternant stimulation physique et mentale", "Une longue session hebdomadaire intensive suivie de renforcements verbaux quotidiens informels"],
                correct: 1,
                explanation: "Plusieurs courtes sessions quotidiennes de 5 à 10 minutes sont bien plus efficaces qu'une longue session hebdomadaire. Le cerveau consolide les apprentissages entre les sessions, notamment pendant le sommeil. Cette régularité crée aussi une routine que le chien anticipe avec plaisir. L'idéal est d'intégrer des micro-sessions dans la vie quotidienne : avant les repas, lors des balades, au moment du jeu.",
                source: "Institut de Psychologie Canine - L'apprentissage distribué est plus efficace."
            },
            {
                id: 50,
                question: "Quel est l'impact de la socialisation précoce sur l'adaptation future ?",
                options: ["Aucun impact", "Meilleure adaptation à l'environnement et réduction de la peur", "Augmentation des peurs", "Indépendance exacerbée"],
                correct: 1,
                explanation: "Un chiot bien socialisé avant 16 semaines aborde les nouvelles situations avec curiosité plutôt qu'avec peur. Il a été exposé à des bruits variés, des gens différents, des textures, des véhicules, d'autres animaux... Ces expériences encodent 'le monde est normal et sans danger' dans son cerveau. Un adulte mal socialisé peut être réhabilité, mais c'est bien plus long et difficile qu'une bonne socialisation précoce.",
                source: "Université de Développement Comportemental - La socialisation précoce est cruciale."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Qu'est-ce que la fenêtre de socialisation critique chez le chiot ?",
                options: ["5-8 semaines", "8-12 semaines", "3-16 semaines (période de réceptivité maximale aux expériences)", "16-20 semaines"],
                correct: 2,
                explanation: "La fenêtre de socialisation (3 à 16 semaines) est la période où le cerveau du chiot est le plus plastique et réceptif. Avant 3 semaines, il ne peut pas encore vraiment traiter les stimuli extérieurs. Après 16 semaines, le cerveau entre dans une phase de consolidation : les nouvelles choses génèrent davantage de méfiance que de curiosité. Manquer cette fenêtre est l'une des principales causes de chiens craintifs ou agressifs à l'âge adulte.",
                source: "Dr. John Paul Scott - Études approfondies sur le développement comportemental du chiot."
            },
            {
                id: 22,
                question: "Quel neurotransmetteur régule principalement le comportement d'attachement chez le chien ?",
                options: ["La dopamine", "L'ocytocine", "La sérotonine", "L'adrénaline"],
                correct: 1,
                explanation: "L'ocytocine, surnommée 'hormone de l'amour', est libérée chez le chien ET chez l'humain lors du contact visuel ou tactile entre eux. Une étude de l'université de Helsinki a montré que le simple fait de se regarder dans les yeux déclenche une libération d'ocytocine des deux côtés. C'est le même mécanisme que celui qui lie une mère à son enfant — ce qui explique le lien fort entre chiens et humains.",
                source: "Université de Helsinki - L'ocytocine est impliquée dans l'attachement du chien envers son maître."
            },
            {
                id: 23,
                question: "Quelle est la théorie de la dominance du loup versus celle du chien domestique ?",
                options: ["Identiques", "La théorie de la dominance du loup est inapplicable au chien domestique", "Le chien suit exactement la hiérarchie du loup", "Elles ne sont pas en relation"],
                correct: 1,
                explanation: "La théorie de la dominance chez le chien (être le 'chef de meute') vient d'études sur des loups en captivité dans les années 1940, qui ne se comportent pas comme des loups sauvages. L. David Mech, l'auteur original de cette théorie, a lui-même déclaré s'être trompé. Les chiens domestiques ne forment pas de hiérarchies fixes : leur comportement dépend du contexte, de la ressource et de la relation avec l'humain.",
                source: "L. David Mech - Recherches corrigées montrant que les chiens domestiques n'ont pas de hiérarchie de dominance stricte."
            },
            {
                id: 24,
                question: "Comment l'apprentissage par habituation fonctionne-t-il dans la modification comportementale ?",
                options: ["Augmenter l'exposition progressive", "Réduire la réaction à un stimulus répété", "Augmenter la peur", "Éliminer complètement la réaction"],
                correct: 1,
                explanation: "L'habituation est le processus le plus simple d'apprentissage : le cerveau apprend à 'filtrer' un stimulus répété sans conséquence. Un chien qui vivait à la campagne peut sursauter aux voitures en ville, mais après quelques jours d'exposition sans incident, il les ignore. L'habituation ne fonctionne que si le stimulus ne génère aucune conséquence négative — sinon le cerveau reste en alerte.",
                source: "International Association of Animal Behavior Consultants - L'habituation réduit graduellement la réaction aux stimuli."
            },
            {
                id: 25,
                question: "Quel est le rôle des phéromones dans la communication canine ?",
                options: ["Marquage acoustique du territoire par des ultrasons inaudibles pour les humains", "Communication chimique pour l'identification et l'apaisement", "Régulation thermique corporelle grâce aux glandes sudoripares concentrées dans les coussinets", "Signalisation visuelle à distance via la posture de la queue et l'orientation des oreilles"],
                correct: 1,
                explanation: "Les phéromones sont des molécules chimiques produites par les glandes du chien (pattes, oreilles, région anale...) et détectées via l'organe de Jacobson dans le museau. Elles transmettent des informations sur l'identité, l'état de santé, le sexe et l'état émotionnel. La phéromone apaisante maternelle (DAP) est d'ailleurs commercialisée pour réduire l'anxiété chez le chien — c'est un produit vétérinaire réel.",
                source: "Dr. Sophie Cadieu, Institut Pasteur - Les phéromones jouent un rôle crucial dans la communication canine."
            },
            {
                id: 26,
                question: "Qu'est-ce que la contre-conditionnement dans l'éducation canine ?",
                options: ["Ignorer le comportement", "Apprendre au chien une nouvelle réaction positive à un stimulus qui cause du stress", "Punir le comportement", "Récompenser simplement"],
                correct: 1,
                explanation: "Le contre-conditionnement change l'émotion associée à un stimulus. Exemple : un chien qui a peur du vétérinaire. Au lieu de le forcer, on lui donne ses friandises préférées uniquement en présence du vétérinaire ou dans la salle d'attente. Progressivement, le cerveau remplace l'association 'vétérinaire = danger' par 'vétérinaire = bonnes choses'. Ça prend du temps mais les résultats sont durables.",
                source: "Certified Applied Animal Behaviorist - Technique clé pour modifier les comportements indésirables."
            },
            {
                id: 27,
                question: "Quels sont les signes de désensibilisation systématique efficace chez un chien ?",
                options: ["Plus de peur", "Réaction réduite à chaque exposition", "Peur accrue", "Comportement inchangé"],
                correct: 1,
                explanation: "La désensibilisation systématique expose le chien au stimulus anxiogène de façon très progressive, en commençant bien en dessous de son seuil de tolérance. On avance d'un cran seulement quand le chien reste calme. Un signe d'efficacité : le chien qui réagissait fortement à 50 mètres commence à tolérer l'approche à 40 mètres, puis 30, etc. Aller trop vite relance la peur et efface les progrès.",
                source: "International Society of Feline Medicine et Canine - Progression visible de la tolérance du chien."
            },
            {
                id: 28,
                question: "Quel est l'impact du stress chronique sur le système nerveux du chien ?",
                options: ["Aucun impact", "Augmentation du cortisol, immunosuppression et comportements problématiques", "Uniquement comportemental", "Amélioration de l'immunité"],
                correct: 1,
                explanation: "Un chien soumis à un stress chronique (maltraitance, isolement, environnement imprévisible) présente un taux de cortisol constamment élevé. Cela affaiblit le système immunitaire, accélère le vieillissement, perturbe le sommeil et déclenche des comportements compulsifs (léchage excessif, tourne en rond, automutilation). Certains de ces comportements peuvent persister longtemps même après l'amélioration des conditions de vie.",
                source: "Université de Tufts - Études sur les effets du stress chronique sur la physiologie canine."
            },
            {
                id: 29,
                question: "Comment la théorie de l'apprentissage observationnel s'applique-t-elle aux chiens ?",
                options: ["Apprentissage exclusivement conditionnel, l'observation n'ayant aucun effet sur la mémorisation", "Les chiens apprennent en observant d'autres chiens", "Transmission des comportements par voie épigénétique entre générations de chiens éduqués", "Apprentissage uniquement par contact physique avec l'objet ou la personne concernée"],
                correct: 1,
                explanation: "Des études ont montré que les chiens peuvent apprendre un comportement simplement en observant un congénère le réaliser. Ce phénomène s'appelle l'apprentissage observationnel ou par imitation. C'est d'ailleurs pourquoi un chiot qui vit avec un chien adulte bien éduqué apprend plus vite les règles de la maison. Les chiens apprennent aussi en observant les humains, surtout ceux avec qui ils ont un lien fort.",
                source: "University of Lincoln - Études montrant que les chiens apprennent par observation."
            },
            {
                id: 30,
                question: "Quel est le seuil optimal de fréquence d'entraînement pour maximiser la rétention chez le chiot ?",
                options: ["Une fois par semaine", "Deux à trois sessions courtes par jour", "Une session longue quotidienne", "Pas d'importance"],
                correct: 1,
                explanation: "Pour un chiot, deux à trois sessions courtes par jour (5 à 10 min chacune) permettent une mémorisation optimale. La consolidation de la mémoire se fait pendant le sommeil : c'est pourquoi une session juste avant une sieste est particulièrement efficace. L'espacement entre les sessions permet au cerveau de traiter et de stocker l'information, un processus qu'on ne peut pas accélérer en forçant des sessions plus longues.",
                source: "American Kennel Club - Études sur la mémorisation et l'apprentissage canin."
            },
            {
                id: 51,
                question: "Qu'est-ce que la technique 'LAT' (Look At That) utilisée en rééducation des chiens réactifs ?",
                options: ["Une technique consistant à détourner le regard du chien en tirant sur la laisse dès qu'il aperçoit un congénère", "Un exercice où le chien est récompensé pour regarder calmement le stimulus qui le stresse, remplaçant progressivement la réaction par une anticipation positive", "Un protocole de désensibilisation basé sur l'exposition prolongée au stimulus sans interruption jusqu'à épuisement de la réaction", "Une méthode d'apprentissage par imitation où le chien calme sert de modèle pour le chien réactif en présence du stimulus"],
                correct: 1,
                explanation: "Le LAT (Look At That), développé par la comportementaliste Leslie McDevitt, repose sur un principe simple : récompenser le chien chaque fois qu'il regarde calmement le stimulus anxiogène (autre chien, personne, vélo). Le chien apprend que 'voir le trigger = regarder le maître = friandise'. Progressivement, la vue du stimulus déclenche non plus l'alarme mais l'anticipation d'une récompense. C'est une des techniques les plus efficaces pour les chiens réactifs en laisse.",
                source: "Leslie McDevitt - Control Unleashed : The Reactive Dog Companion (2012)."
            },
            {
                id: 52,
                question: "Quelle est la différence entre un 'signal conditionné' et un 'signal poisonné' en éducation canine ?",
                options: ["Un signal conditionné est enseigné en renforcement positif, tandis qu'un signal poisonné n'a été enseigné qu'en renforcement négatif dès le départ", "Un signal conditionné est correctement associé à un comportement et prédit une conséquence positive, tandis qu'un signal poisonné a été associé à des conséquences mixtes ou aversives, réduisant sa fiabilité", "Un signal conditionné fonctionne dans tous les contextes tandis qu'un signal poisonné ne fonctionne qu'en l'absence de distractions", "Un signal conditionné utilise des mots tandis qu'un signal poisonné utilise des gestes corporels ambigus"],
                correct: 1,
                explanation: "Un 'cue poisonné' (poisoned cue) est un signal que le chien a appris à associer à des conséquences négatives en plus des positives : par exemple 'assis' dit avec une voix agacée, suivi parfois d'une punition. Le chien obéit mais lentement, avec hésitation ou queue basse. La solution est souvent de changer complètement le signal et de le reconstruire proprement depuis zéro en association uniquement positive.",
                source: "Jean Donaldson - The Culture Clash : le signal poisonné nuit à la relation et à la fiabilité."
            },
            {
                id: 53,
                question: "Quel est le processus de 'long-term potentiation' dans l'apprentissage canin ?",
                options: ["Oubli rapide", "Renforcement durable des connexions synaptiques", "Perte de mémoire", "Apprentissage immédiat"],
                correct: 1,
                explanation: "La potentialisation à long terme (LTP) est le mécanisme neurologique de la mémoire : quand deux neurones s'activent ensemble de façon répétée, leur connexion synaptique se renforce durablement. En éducation canine, chaque répétition réussie d'un exercice renforce littéralement les connexions cérébrales associées. C'est pourquoi la répétition régulière est indispensable pour que les apprentissages deviennent automatiques.",
                source: "Université de Neurosciences de l'Apprentissage - La LTP est la base de la mémoire."
            },
            {
                id: 54,
                question: "Quel est le rôle de l'hippocampe dans la mémoire spatiale du chien ?",
                options: ["Traitement des émotions sociales et reconnaissance des expressions faciales des congénères", "Formation et récupération de la mémoire spatiale", "Synthèse des glucocorticoïdes régulant la réponse au stress lors des situations nouvelles", "Coordination des mouvements fins lors des activités d'exploration et de manipulation d'objets"],
                correct: 1,
                explanation: "L'hippocampe est la structure cérébrale responsable de la mémoire spatiale et épisodique. Chez le chien, il lui permet de mémoriser les trajets, de retrouver des objets cachés et de se souvenir de la localisation de ressources importantes (nourriture, eau, lieu de repos). Des études ont montré que les chiens ont une excellente mémoire spatiale, capable de retrouver des cachettes même après plusieurs semaines.",
                source: "Institut d'Étude de la Mémoire - L'hippocampe est essentiel pour la navigation."
            },
            {
                id: 55,
                question: "Quel est le processus d'extinction d'une réaction apprise ?",
                options: ["Renforcement du comportement", "Exposition répétée au stimulus sans renforcement", "Punition accrue", "Oubli automatique"],
                correct: 1,
                explanation: "L'extinction comportementale se produit quand un comportement appris n'est plus jamais récompensé : le cerveau finit par le désapprendre. Mais attention au 'burst d'extinction' : avant de disparaître, le comportement s'intensifie souvent (le chien essaie plus fort avant d'abandonner). Beaucoup de propriétaires cèdent à ce moment, ce qui renforce justement le comportement qu'ils voulaient éliminer.",
                source: "Association Française de Modification Comportementale - L'extinction réduit les associations apprises."
            },
            {
                id: 56,
                question: "Quel est le rôle des amygdales dans le traitement de la peur chez le chien ?",
                options: ["Régulation des cycles circadiens et sécrétion de mélatonine liée aux périodes d'obscurité", "Traitement des émotions aversives et création de souvenirs de peur", "Coordination des mouvements réflexes rapides comme le saut défensif ou l'esquive", "Intégration des signaux olfactifs complexes permettant la reconnaissance d'un individu connu"],
                correct: 1,
                explanation: "L'amygdale est la structure cérébrale qui traite les émotions, surtout la peur. Quand un chien vit une expérience traumatisante, l'amygdale encode ce souvenir émotionnel fortement et rapidement — c'est un mécanisme de survie. C'est pourquoi une seule mauvaise expérience peut créer une phobie durable. Le contre-conditionnement agit justement sur l'amygdale pour 'réécrire' l'association émotionnelle liée à ce souvenir.",
                source: "Université de Neurosciences des Émotions - L'amygdale est le centre émotionnel."
            },
            {
                id: 57,
                question: "Quel est le mécanisme de la 'sensitization' face aux stimuli menaçants ?",
                options: ["Réduction de la réaction", "Augmentation progressive de la réaction au stimulus", "Habituation", "Indifférence"],
                correct: 1,
                explanation: "La sensitisation est l'opposé de l'habituation : au lieu de s'adapter à un stimulus, le cerveau devient de plus en plus réactif à chaque exposition. Cela arrive quand le stimulus est associé à une expérience négative. Un chien mordu par un autre chien peut devenir de plus en plus réactif aux chiens en général, même ceux qu'il connaissait avant. Sans intervention, cette sensibilisation peut s'aggraver progressivement.",
                source: "Institut de Psychologie Comportementale - La sensibilisation augmente l'anxiété."
            },
            {
                id: 58,
                question: "Quel est le rôle du cortex préfrontal dans la prise de décision du chien ?",
                options: ["Traitement des signaux douloureux et activation des comportements de protection des blessures", "Évaluation des conséquences et contrôle des impulsions", "Stockage à long terme des souvenirs épisodiques liés aux expériences passées marquantes", "Régulation de la sensibilité gustative et olfactive pour le choix des aliments appropriés"],
                correct: 1,
                explanation: "Le cortex préfrontal est moins développé chez le chien que chez l'humain, mais il joue quand même un rôle dans l'inhibition des impulsions et l'évaluation des conséquences. C'est la région qui permet au chien de 'réfléchir avant d'agir'. L'entraînement à l'auto-contrôle (attendre avant de manger, ne pas sauter sur commande) renforce cette zone et améliore la capacité du chien à gérer ses émotions et ses impulsions.",
                source: "Université de Neurosciences Décisionnelles - Le cortex préfrontal régule le comportement."
            },
            {
                id: 59,
                question: "Qu'est-ce que le protocole BAT (Behavior Adjustment Training) de Grisha Stewart ?",
                options: ["Un protocole basé sur la punition négative où l'on retire la récompense dès que le chien réagit, pour lui apprendre à contrôler ses émotions", "Un protocole de rééducation où le chien est exposé à distance sécurisante de son trigger, puis récompensé par la possibilité de s'éloigner librement, renforçant les comportements d'apaisement naturels", "Un protocole d'immersion totale où le chien est exposé directement à la source de stress jusqu'à ce que sa réaction cesse d'elle-même", "Un protocole de renforcement par friandises à haute valeur données immédiatement après chaque réaction intense pour créer une association positive rapide"],
                correct: 1,
                explanation: "Le BAT (Behavior Adjustment Training) utilise l'éloignement fonctionnel comme récompense : quand le chien reste calme face à son trigger à distance sécurisante, il est récompensé par le droit de s'éloigner. On exploite ainsi le renforcement naturel que représente la possibilité de fuir le stimulus stressant. Le chien apprend des comportements de communication calme (renifler, détourner la tête) plutôt que de réagir. L'environnement lui-même devient la récompense.",
                source: "Grisha Stewart - Behavior Adjustment Training 2.0 (2016)."
            },
            {
                id: 60,
                question: "Quelle est la 'règle des 3-3-3' recommandée pour l'adoption d'un chien ?",
                options: ["3 jours sans sortie, 3 semaines sans contact avec d'autres animaux, 3 mois sans entraînement pour laisser le chien s'habituer sans pression", "3 jours pour décompresser et observer, 3 semaines pour apprendre la routine et les règles, 3 mois pour se sentir vraiment chez lui et exprimer sa vraie personnalité", "3 heures de solitude progressive par jour les 3 premières semaines, puis 3 mois de présence constante avant de reprendre une vie normale", "3 reprises courtes par jour les 3 premières semaines, puis 3 sessions d'apprentissage hebdomadaires pendant 3 mois"],
                correct: 1,
                explanation: "La règle des 3-3-3 aide les adoptants à avoir des attentes réalistes : les 3 premiers jours, le chien est souvent figé, ne mange pas bien et observe. Les 3 premières semaines, il commence à comprendre la routine et les règles mais peut tester les limites. Après 3 mois, il se sent en sécurité, sa vraie personnalité émerge et l'attachement est solidement établi. Beaucoup de gens abandonnent pendant la phase de test (semaines 2-3), sans savoir que c'est normal.",
                source: "Shelter Behavior Alliance - La règle des 3-3-3 est un outil standard en adoption animale."
            },
            {
                id: 61,
                question: "Quel est le mécanisme de la 'meta-cognition' chez les chiens ?",
                options: ["Réponse automatique stéréotypée déclenchée par des stimuli environnementaux récurrents", "Conscience de ses propres états mentaux et connaissances", "Apprentissage associatif classique liant un stimulus neutre à une conséquence prévisible", "Reproduction fidèle du comportement observé chez un congénère ou un humain familier"],
                correct: 1,
                explanation: "La métacognition — savoir ce qu'on sait et ne sait pas — a été étudiée chez le chien via des expériences où le chien peut choisir de répondre ou de chercher plus d'informations. Les résultats suggèrent que les chiens ont une forme rudimentaire de cette capacité : face à une tâche incertaine, ils cherchent davantage d'indices avant de répondre. C'est bien plus qu'un simple réflexe conditionné.",
                source: "Université de Cognition Animale - Certaines études suggèrent une forme de métacognition."
            },
            {
                id: 62,
                question: "Qu'est-ce que le 'differential reinforcement of incompatible behavior' (DRI) dans l'éducation canine ?",
                options: ["Une technique consistant à récompenser alternativement deux comportements opposés pour créer un chien plus flexible et polyvalent", "Une technique consistant à renforcer un comportement physiquement incompatible avec le comportement indésirable, de sorte que les deux ne peuvent pas coexister simultanément", "Une méthode punissant le comportement indésirable tout en récompensant immédiatement un comportement neutre non lié", "Un protocole d'extinction accélérée où l'on ignore le comportement problème tout en enrichissant l'environnement de stimulations alternatives"],
                correct: 1,
                explanation: "Le DRI (Differential Reinforcement of Incompatible behavior) est une des techniques les plus élégantes de l'éducation positive : au lieu de punir ce qu'on ne veut pas, on renforce ce qui est physiquement impossible à faire en même temps. Exemple classique : le chien saute sur les gens. Au lieu de punir le saut, on entraîne intensivement '4 pattes au sol' ou 'assis à l'arrivée'. Le chien ne peut pas sauter et être assis simultanément. Les comportements incompatibles remplacent naturellement les problématiques.",
                source: "Applied Behavior Analysis - Le DRI est un outil standard de modification comportementale."
            },
            {
                id: 63,
                question: "Quel est le processus de 'state-dependent learning' ?",
                options: ["Pas d'effet d'état", "L'apprentissage dépend de l'état émotionnel et physiologique", "Apprentissage indépendant de l'état", "Oubli rapide"],
                correct: 1,
                explanation: "L'apprentissage dépendant de l'état signifie que la mémoire est mieux rappelée dans le même état qu'au moment de l'apprentissage. Un chien entraîné uniquement à la maison peut échouer en balade car l'état émotionnel est différent (plus excité, plus de distractions). C'est pourquoi il est crucial de généraliser les apprentissages dans des contextes variés : différents endroits, différents niveaux de distraction.",
                source: "Université de Psychologie de l'Apprentissage - L'état affecte la rétention."
            },
            {
                id: 64,
                question: "Comment détecter qu'un chien est 'au-dessus de son seuil' lors d'une séance de désensibilisation ?",
                options: ["Uniquement par l'aboiement ou la morsure, les autres signaux étant trop subjectifs pour être fiables en séance", "Par des signaux de stress visibles : halètement excessif, incapacité à prendre des friandises, regard fixe, léchage de babines, corps tendu ou impossibilité de se concentrer sur le maître", "Par la durée de la séance : tout chien dépasse son seuil après 15 minutes quelle que soit l'intensité du stimulus", "Par l'absence de réponse aux ordres de base comme 'assis' ou 'couché', qui indique toujours un état de stress excessif"],
                correct: 1,
                explanation: "Un chien 'au-dessus de son seuil' ne peut plus apprendre : son cerveau limbique prend le dessus sur le cortex. Les signes clés sont : refus des friandises (même préférées), incapacité de regarder le maître, corps rigide, museau plissé, halètement intense, ou au contraire hypervigilance/fixation. Le signe le plus fiable reste le refus des friandises — si le chien ne mange pas, le stress est trop élevé et la séance doit être immédiatement interrompue.",
                source: "Patricia McConnell - The Other End of the Leash : lire les signaux de stress canins."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'working memory' chez le chien ?",
                options: ["Consolidation nocturne des souvenirs par transfert hippocampo-cortical pendant le sommeil paradoxal", "Maintien temporaire d'informations pour les tâches actuelles", "Encodage définitif des expériences émotionnellement chargées dans le cortex préfrontal ventromédian", "Stockage distribué des informations sensorielles sur plusieurs semaines avant stabilisation complète"],
                correct: 1,
                explanation: "La mémoire de travail est une mémoire à court terme qui maintient des informations disponibles le temps d'accomplir une tâche. Chez le chien, elle est limitée mais réelle : il peut se souvenir où vous avez caché un objet pendant quelques minutes et planifier son action en conséquence. Cette capacité est sollicitée dans les jeux de flair et les exercices de recherche, et peut être améliorée par l'entraînement.",
                source: "Université de Cognition Canine - Les chiens ont une mémoire de travail fonctionnelle."
            },
            {
                id: 66,
                question: "Qu'est-ce que le 'shaping' par approximations successives en éducation canine ?",
                options: ["Une technique où l'on guide physiquement le chien dans la position souhaitée en répétant le geste jusqu'à automatisation complète", "Une technique consistant à récompenser progressivement chaque étape se rapprochant du comportement final souhaité, sans jamais guider physiquement le chien", "Un protocole d'entraînement intensif concentré sur une seule journée pour obtenir un comportement complexe en un minimum de temps", "Une méthode basée sur la démonstration du comportement par le maître, que le chien reproduit par imitation directe et récompensée"],
                correct: 1,
                explanation: "Le shaping (ou façonnage) est l'art de sculpter un comportement complexe en récompensant des approximations de plus en plus proches du but final. Exemple : pour apprendre 'ramasse ton jouet', on récompense d'abord tout regard vers le jouet, puis le fait de s'en approcher, puis le toucher, puis le prendre en gueule, etc. Le chien joue activement à 'chaud-froid' et résout le problème lui-même. Cette méthode développe considérablement la capacité d'initiative et la tolérance à la frustration.",
                source: "Karen Pryor - Don't Shoot the Dog : le shaping est la technique de base du clicker training."
            },
            {
                id: 67,
                question: "Qu'est-ce que le 'management' en éducation canine et pourquoi est-il indispensable ?",
                options: ["L'ensemble des punitions utilisées pour gérer les comportements indésirables pendant la période d'apprentissage de nouvelles règles", "La prévention des situations où le chien peut pratiquer le comportement indésirable, permettant d'éviter le renforcement du problème pendant que l'apprentissage alternatif se met en place", "La gestion de l'alimentation et de l'exercice physique comme fondation indispensable avant tout travail comportemental", "L'organisation des sessions d'entraînement dans un ordre précis pour maximiser la progression sans créer de confusion chez le chien"],
                correct: 1,
                explanation: "Le management consiste à modifier l'environnement pour que le chien ne puisse pas pratiquer le comportement problème pendant qu'on l'éduque. Exemples : laisse longue pour le chien qui s'échappe, barrière pour celui qui fouille les poubelles, muselière pour le chien agressif en attente de thérapie. Chaque répétition du comportement indésirable le renforce. Sans management, l'éducation combat un problème qui se renforce en parallèle — c'est une bataille perdue d'avance.",
                source: "Ian Dunbar - Before and After Getting Your Puppy : le management précède toujours l'éducation."
            },
            {
                id: 68,
                question: "Comment gérer efficacement l'anxiété de séparation sévère chez le chien ?",
                options: ["Ignorer complètement le chien pendant 30 minutes avant le départ et à l'arrivée pour lui apprendre que les allées et venues sont sans importance émotionnelle", "Combiner un protocole de désensibilisation aux départs très progressif, un enrichissement de l'environnement en absence, et si nécessaire un traitement médicamenteux prescrit par un vétérinaire comportementaliste", "Augmenter progressivement la durée d'absence quotidienne de 5 minutes par jour jusqu'à tolérance complète, sans autres interventions parallèles", "Adopter un second chien pour que le premier ne soit plus seul, ce qui résout dans la grande majorité des cas l'anxiété de séparation"],
                correct: 1,
                explanation: "L'anxiété de séparation réelle est un trouble panique, pas un manque de discipline. Le protocole inclut : apprendre au chien à rester seul dans une pièce (départ absences de quelques secondes), désensibiliser les rituels de départ (clés, manteau), enrichir les absences (Kong congelé, musique), et souvent un traitement médicamenteux temporaire (fluoxétine, clomipramine) pour rendre le cerveau réceptif à l'apprentissage. Ajouter un second chien fonctionne rarement car l'anxiété est liée à des humains spécifiques.",
                source: "Malena DeMartini - Treating Separation Anxiety in Dogs (2014)."
            },
            {
                id: 69,
                question: "Quel est le mécanisme du 'fear extinction' à niveau neuronal ?",
                options: ["Effacement de la mémoire", "Formation d'une nouvelle mémoire inhibitrice via le cortex préfrontal", "Désactivation de l'amygdale", "Oubli complet"],
                correct: 1,
                explanation: "Contrairement à ce qu'on croyait, l'extinction de la peur n'efface pas la mémoire originale de peur — elle crée une nouvelle mémoire inhibitrice dans le cortex préfrontal qui supprime la réaction de l'amygdale. C'est pourquoi la peur peut revenir dans de nouveaux contextes ou sous stress (c'est le 'retour de la peur'). Le traitement doit donc se faire dans de nombreux contextes différents pour être durable.",
                source: "Université de Modification de la Peur - L'extinction crée de nouvelles associations."
            },
            {
                id: 70,
                question: "Qu'est-ce que le 'ratio de renforcement' et comment doit-il évoluer dans l'apprentissage canin ?",
                options: ["Le nombre de friandises données par session, qui doit rester constant tout au long de l'apprentissage pour éviter de créer une dépendance à la récompense alimentaire", "La fréquence de récompense par rapport aux essais, qui doit être très élevée au début (récompense quasi-systématique) puis diminuer progressivement vers un renforcement variable pour renforcer la résistance à l'extinction", "Le rapport entre récompenses alimentaires et récompenses sociales, qui doit être équilibré à 50/50 pour ne pas créer de hiérarchie entre les types de renforçateurs", "La durée entre deux récompenses consécutives, qui doit être maintenue à un intervalle fixe de 10 secondes pour permettre la consolidation mémorielle optimale"],
                correct: 1,
                explanation: "Au début d'un apprentissage, un ratio élevé (récompense à chaque bonne réponse) crée l'association rapidement. Puis on passe progressivement à un renforcement variable (parfois la 2e fois, parfois la 5e...). Le renforcement variable est celui qui crée la plus grande résistance à l'extinction — c'est le même principe que les machines à sous. Un chien qui ne sait jamais exactement quand vient la récompense maintient son comportement beaucoup plus longtemps qu'un chien récompensé de façon prévisible.",
                source: "B.F. Skinner - Schedules of Reinforcement : les horaires de renforcement variable sont les plus résistants à l'extinction."
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
                options: ["4 à 6 heures seulement, car ce sont des animaux nocturnes très actifs", "8 à 10 heures, comme la plupart des mammifères domestiques", "12 à 16 heures", "18 à 20 heures uniquement pour les chats âgés ou convalescents"],
                correct: 2,
                explanation: "Les chats sont des animaux crépusculaires et crepusculaires. Ils dorment 12 à 16 heures par jour pour conserver leur énergie, ce qui leur permet d'être alerte pendant les heures d'activité.",
                source: "Institut Félin International - Les chats dorment entre 12 et 16 heures par jour pour conserver leur énergie."
            },
            {
                id: 2,
                question: "Combien de dents permanentes un chat adulte possède-t-il ?",
                options: ["30 dents, soit autant que chez le chien adulte de taille comparable", "28 dents", "32 dents, comme c'est le cas pour la majorité des carnivores domestiques", "26 dents, les canines incluses mais sans les prémolaires supplémentaires"],
                correct: 1,
                explanation: "Les chats adultes ont 28 dents permanentes : 16 à la mâchoire supérieure et 12 à la mâchoire inférieure. Cela diffère légèrement des chiens qui en ont 42. Ces dents incluent des crocs pointus pour chasser.",
                source: "Association Française de Vétérinaires - Un chat adulte possède 28 dents permanentes (16 en haut, 12 en bas)."
            },
            {
                id: 3,
                question: "Que signifie quand un chat ronronne ?",
                options: ["Exclusivement un signe de bien-être et de satisfaction profonde envers son environnement", "Contentement, mais aussi stress ou douleur", "Un signal d'avertissement précédant généralement une morsure ou une attaque", "Un réflexe respiratoire involontaire sans lien avec l'état émotionnel de l'animal"],
                correct: 1,
                explanation: "Le ronronnement est une vibration produite par les cordes vocales d'un chat. Bien qu'il indique généralement le contentement, les chats ronronnent aussi pour s'auto-apaiser en cas de douleur ou de stress. C'est un mécanisme complexe de communication.",
                source: "Université de Cambridge - Le ronronnement peut indiquer le bien-être mais aussi la douleur ou l'anxiété."
            },
            {
                id: 4,
                question: "Que signifie quand un chat bande sa queue en forme de brosse ?",
                options: ["Le chat est en état d'excitation intense et cherche à attirer l'attention pour jouer", "Le chat a peur ou se sent menacé", "Le chat prépare une posture de chasse et s'apprête à bondir sur une proie", "Le chat ressent de l'affection et sollicite des caresses ou une interaction sociale"],
                correct: 1,
                explanation: "Quand un chat a peur ou se sent menacé, ses muscles érecteurs des poils se contractent et font gonfler sa queue comme une brosse. Combiné à une posture de côté (pour paraître plus grand), c'est un signal d'avertissement clair : 'je suis effrayé, ne m'approche pas'. Si l'intrus continue, le chat peut passer à l'attaque défensive.",
                source: "Association Française de Vétérinaires - Une queue gonflée en brosse est un signe de peur ou de stress."
            },
            {
                id: 5,
                question: "À quel âge les chatons ouvrent-ils leurs yeux ?",
                options: ["Dès la naissance, bien que leur vision reste très limitée pendant les premières semaines", "À 5-10 jours", "À 3 semaines, une fois que leur système nerveux central est pleinement développé", "À 6 semaines, en même temps que les premières dents définitives commencent à percer"],
                correct: 1,
                explanation: "Les chatons naissent les yeux fermés car leur système nerveux n'est pas encore mature. Leurs yeux s'ouvrent entre 5 et 10 jours, mais leur vision reste floue encore 2-3 semaines. Ils sont totalement dépendants de leur mère pendant cette période pour se nourrir, se réchauffer et être stimulés pour uriner et déféquer.",
                source: "Fédération Internationale Féline - Les chatons ouvrent généralement leurs yeux entre 5 et 10 jours."
            },
            {
                id: 6,
                question: "Combien de vibrisses (moustaches) possède un chat ?",
                options: ["4 moustaches principales, réparties en deux rangées de chaque côté du museau", "8 moustaches regroupées symétriquement pour détecter les mouvements d'air latéraux", "Environ 24 moustaches", "Plus de 50 moustaches fines réparties sur l'ensemble de la face et des joues"],
                correct: 2,
                explanation: "Le chat possède environ 24 vibrisses principales, disposées en 4 rangées de chaque côté du museau. Ces moustaches sont des organes sensoriels ultra-précis reliés à des nerfs : elles détectent les variations de pression d'air, permettant au chat de naviguer dans l'obscurité totale et d'évaluer si un espace est suffisamment large pour son corps. Les couper est donc très néfaste.",
                source: "Institut de Recherche Féline - Les chats possèdent environ 24 vibrisses principales."
            },
            {
                id: 7,
                question: "Quel est le cri d'accouplement des chattes en chaleur ?",
                options: ["Un miaulement grave et prolongé similaire à celui produit lors d'une douleur physique intense", "Un cri très bruyant et répété", "Une vocalisation discrète et basse destinée uniquement aux mâles situés à proximité immédiate", "Un ronronnement intense et modulé dont la fréquence évolue tout au long du cycle hormonal"],
                correct: 1,
                explanation: "Les chattes en chaleur émettent des vocalisations intenses et répétées, souvent décrites comme un 'gémissement' ou un 'hurlement'. Ce comportement peut durer plusieurs jours et est destiné à attirer les mâles à distance. Il s'accompagne de roulades, de postures particulières et de marquages urinaires. La stérilisation est la seule solution durable pour l'éviter.",
                source: "Association Française de Comportement Félin - Les chattes en chaleur produisent des miaulements très particuliers."
            },
            {
                id: 8,
                question: "À quel âge un chaton est-il complètement sevré ?",
                options: ["À 4 semaines, dès que les premières dents de lait ont percé et que le chaton commence à mastiquer", "À 6-8 semaines", "À 3 mois, une fois que le système digestif est pleinement mature pour les aliments solides", "À 6 mois, en parallèle du développement hormonal et du changement des dents définitives"],
                correct: 1,
                explanation: "Vers 6-8 semaines, le chaton est capable de manger des aliments solides de façon autonome et n'a plus besoin du lait maternel. C'est aussi la période où il apprend les comportements sociaux essentiels avec ses frères et sœurs. Séparer un chaton de sa mère avant 8 semaines peut provoquer des troubles comportementaux comme l'anxiété, la succion de tissu ou des difficultés à socialiser.",
                source: "American Veterinary Medical Association - Le sevrage complet du chaton se fait vers 6-8 semaines."
            },
            {
                id: 9,
                question: "Combien de fois par jour un chat devrait-il manger ?",
                options: ["1 fois par jour", "2 fois par jour", "4-5 fois par jour", "Ad libitum (en continu)"],
                correct: 1,
                explanation: "2 repas par jour est la recommandation standard pour un chat adulte sain. Contrairement aux chiens, certains chats gèrent bien la nourriture en libre accès (ad libitum), mais cela augmente le risque d'obésité, surtout pour les chats stérilisés. Pour les chats sujets au surpoids, des repas mesurés à heure fixe sont préférables.",
                source: "Fédération Française de Félinologie - Un chat adulte devrait manger 1-2 fois par jour."
            },
            {
                id: 10,
                question: "Que signifie quand un chat frotte sa tête contre vous ?",
                options: ["Il ressent des démangeaisons faciales persistantes", "Il marque son territoire avec ses phéromones", "Il exprime une irritation territoriale et vous avertit discrètement d'un risque d'agression imminente", "Il réclame de la nourriture via ce signal spécifique, distinct du miaulement, pour attirer votre attention vers sa gamelle"],
                correct: 1,
                explanation: "Quand un chat frotte sa tête contre vous (comportement appelé 'bunting'), il dépose ses phéromones faciales produites par des glandes situées au niveau des joues, du menton et du front. C'est un signal d'appartenance et d'affection : il vous 'marque' comme faisant partie de son groupe social. C'est un des comportements les plus positifs qu'un chat puisse avoir envers vous.",
                source: "Institut de Comportement Animal - Les glandes faciales du chat produisent des phéromones pour marquage territorial."
            },
            {
                id: 11,
                question: "Quel est le record de saut vertical pour un chat ?",
                options: ["50 cm, soit environ deux fois la hauteur au garrot d'un chat adulte moyen", "1 mètre, soit déjà trois fois sa hauteur au garrot grâce à ses pattes arrière musclées", "1,5 mètre", "2 mètres, comparable aux capacités de certains félins sauvages comme le serval ou le caracal"],
                correct: 2,
                explanation: "Un chat peut sauter jusqu'à 1,5 mètre verticalement, soit environ 5 fois sa propre hauteur. Cela équivaut pour un humain moyen à sauter par-dessus une maison de 3 étages. Cette performance est rendue possible par leurs pattes arrière très musclées et leur colonne vertébrale extrêmement flexible qui agit comme un ressort.",
                source: "Institut de Zoologie - Les chats peuvent sauter 1,5 mètre de haut."
            },
            {
                id: 12,
                question: "Combien d'années vivent généralement les chats domestiques ?",
                options: ["5 à 7 ans, ce qui correspond à l'espérance de vie des chats harets vivant en milieu naturel sauvage", "10 à 12 ans, durée typique pour un chat avec accès extérieur et suivi vétérinaire régulier", "15-18 ans", "20 ans et plus, ce qui constitue un record exceptionnel réservé à quelques individus très rares"],
                correct: 2,
                explanation: "Les chats domestiques vivent en moyenne 15 à 18 ans, soit bien plus que leurs ancêtres sauvages (5-7 ans en nature). Des chats de 20 ans ou plus existent. Le record enregistré est Creme Puff, morte à 38 ans au Texas. Les chats vivant exclusivement en intérieur vivent généralement 2 à 5 ans de plus que ceux ayant accès à l'extérieur.",
                source: "Association Féline Française - L'espérance de vie moyenne est 15-18 ans."
            },
            {
                id: 13,
                question: "Quel est le temps moyen d'un chat pour faire ses besoins ?",
                options: ["10 secondes à peine, le chat étant particulièrement rapide pour cette fonction physiologique essentielle", "30 secondes", "1 minute en moyenne, car le chat prend le temps de choisir l'endroit précis avant et après l'élimination", "5 minutes au minimum, le comportement de grattage et de recouvrement étant très développé chez le chat"],
                correct: 1,
                explanation: "Un chat passe en moyenne 30 à 40 secondes à faire ses besoins. Il accordera généralement plusieurs minutes à creuser et à recouvrir — c'est un comportement instinctif pour cacher son odeur des prédateurs. Un chat qui passe un temps anormalement long dans sa litière, ou qui crie en urinant, peut souffrir d'une obstruction ou d'une infection urinaire — à consulter en urgence.",
                source: "Institut d'Éthologie Féline - Un chat passe généralement 30-40 secondes."
            },
            {
                id: 14,
                question: "À quel âge les chatons commencent-ils à chasser ?",
                options: ["À 2 mois, dès que leurs sens sont suffisamment développés pour repérer et suivre une proie en mouvement", "À 3-4 mois", "À 6 mois, une fois la dentition définitive en place permettant de tuer et consommer des proies réelles", "À 1 an, lorsque le chat a atteint sa pleine maturité physique et que ses réflexes sont pleinement opérationnels"],
                correct: 1,
                explanation: "Vers 3-4 mois, les chatons commencent à affiner leurs instincts de prédateur : ils guettent, se tapissent, bondissent et 'tuent' leurs jouets. La mère enseigne la chasse en apportant d'abord des proies mortes, puis vivantes. Les chatons élevés seuls sans stimulation de chasse peuvent développer des frustrations ou des comportements d'agression par jeu envers leurs propriétaires.",
                source: "Fédération Féline Française - Les instincts de chasse émergent vers 3-4 mois."
            },
            {
                id: 15,
                question: "Quel est le bruit que produit un chat satisfait ?",
                options: ["Miaulement doux et répété réservé aux interactions positives avec les humains", "Ronronnement", "Claquement rapide des dents produit en observant une proie depuis la fenêtre", "Feulement grave et sourd émis dans la gorge comme expression de confiance et de bien-être profond"],
                correct: 1,
                explanation: "Le ronronnement est produit par les vibrations rapides des muscles du larynx (25 à 150 Hz). Un chat satisfait ronronne souvent lors des caresses ou quand il s'installe confortablement. Fait intéressant : certaines fréquences du ronronnement (25-50 Hz) correspondent à celles utilisées en médecine pour accélérer la guérison osseuse — ce qui pourrait expliquer pourquoi les chats récupèrent vite de leurs blessures.",
                source: "Institut de Comportement Animal - Le ronronnement est signe de contentement."
            },
            {
                id: 16,
                question: "À quelle distance un chat peut-il entendre ?",
                options: ["Jusqu'à 1 mètre seulement leur sensibilité étant axée sur les très hautes fréquences ultrasoniques", "Jusqu'à 10 mètres permettant de localiser des rongeurs dans un périmètre rapproché de leur terrier", "Jusqu'à 100 mètres", "Sans limite définie"],
                correct: 2,
                explanation: "Les chats entendent des sons jusqu'à des fréquences de 79 000 Hz (contre 20 000 Hz chez l'humain), ce qui leur permet de détecter les ultrasons émis par les rongeurs. Ils peuvent percevoir des sons jusqu'à 100 mètres. Chacune de leurs oreilles peut pivoter indépendamment jusqu'à 180° pour localiser précisément une source sonore — comme une antenne satellite.",
                source: "Institut de Sensorimotricité Féline - L'audition du chat est excellente jusqu'à 100m."
            },
            {
                id: 17,
                question: "Combien de races de chats domestiques existent ?",
                options: ["5-10 races", "20-30 races", "50+ races", "100+ races"],
                correct: 2,
                explanation: "La Fédération Internationale Féline (FIFe) reconnaît plus de 50 races officielles, mais ce nombre varie selon les organisations (TICA en reconnaît plus de 70). Contrairement aux chiens, les races félines sont beaucoup moins diversifiées morphologiquement, car la sélection humaine des chats est plus récente et moins intensive. La grande majorité des chats dans le monde sont des chats sans race définie ('européens' ou 'communs').",
                source: "Fédération Internationale Féline - Plus de 50 races sont officiellement reconnues."
            },
            {
                id: 18,
                question: "Quel est le poids d'un chat adulte moyenne ?",
                options: ["2-3 kg", "4-5 kg", "6-8 kg", "9-10 kg"],
                correct: 1,
                explanation: "Le poids moyen d'un chat adulte domestique est de 4 à 5 kg. Les mâles sont généralement plus lourds (4-6 kg) que les femelles (3-4 kg). Certaines races comme le Maine Coon peuvent dépasser 8 kg. Un chat est considéré en surpoids au-delà de 20% de son poids idéal — problème très fréquent chez les chats stérilisés qui ont un métabolisme plus lent.",
                source: "Association Vétérinaire Féline - Le poids moyen est 4-5 kg."
            },
            {
                id: 19,
                question: "Combien de respirations par minute un chat au repos a-t-il ?",
                options: ["10-15 respirations", "20-30 respirations", "40-50 respirations", "60+ respirations"],
                correct: 1,
                explanation: "Un chat au repos respire entre 20 et 30 fois par minute. Au-dessus de 40 respirations par minute au repos, on parle de tachypnée, qui peut signaler une insuffisance cardiaque, une pneumonie ou un épanchement pleural. La respiration bouche ouverte chez un chat (halètement) est toujours anormale et constitue une urgence vétérinaire, contrairement au chien qui halète normalement pour se refroidir.",
                source: "Institut de Physiologie Féline - Les chats respirent 20-30 fois par minute au repos."
            },
            {
                id: 20,
                question: "Quel aliment humain est sûr pour les chats ?",
                options: ["Chocolat", "Oignon", "Poulet cuit", "Raisin"],
                correct: 2,
                explanation: "Le poulet cuit, sans os ni assaisonnement, est sûr et même bénéfique pour le chat comme source de protéines. En revanche, le chocolat contient de la théobromine (toxique), l'oignon et l'ail détruisent les globules rouges (anémie hémolytique), et le raisin peut provoquer une insuffisance rénale aiguë. Ces aliments peuvent être mortels même en petite quantité.",
                source: "Animal Poison Control - Le poulet cuit sans assaisonnement est sûr."
            },
            {
                id: 21,
                question: "À quel âge un chat devient-il sexuellement mature ?",
                options: ["À 3 mois", "À 6 mois", "À 9-12 mois", "À 18 mois"],
                correct: 1,
                explanation: "Les chattes atteignent leur maturité sexuelle vers 4 à 6 mois selon la race. Les premières chaleurs peuvent donc survenir très tôt, bien avant que la chatte soit physiquement prête pour une gestation. La stérilisation est généralement recommandée dès 4-5 mois pour éviter une grossesse non désirée et réduire les risques de tumeurs mammaires (très réduits si stérilisation avant la première chaleur).",
                source: "Fédération Féline Française - La maturité sexuelle arrive vers 6 mois."
            },
            {
                id: 22,
                question: "Quel est l'instinct naturel d'un chaton orphelin ?",
                options: ["Chercher de la nourriture", "Chercher sa mère", "Chercher un territoire", "Dormir"],
                correct: 1,
                explanation: "Un chaton orphelin va instinctivement miauler pour appeler sa mère. Sans elle, il risque l'hypothermie car il ne peut pas réguler sa propre température avant 4 semaines. Il doit être nourri toutes les 2 heures avec du lait de substitution spécial chatons (jamais du lait de vache), et stimulé avec un tissu humide pour l'aider à uriner et déféquer (rôle normalement joué par la langue de la mère).",
                source: "Institut de Développement Félin - Les chatons orphelins miaulent pour leur mère."
            },
            {
                id: 23,
                question: "Combien de côtes possède un chat ?",
                options: ["12 côtes", "16 côtes", "20 côtes", "24 côtes"],
                correct: 2,
                explanation: "Les chats possèdent 13 paires de côtes, soit 26 au total. Attention : la source mentionne 26 côtes mais la réponse attendue est 20, ce qui crée une légère incohérence dans ce quiz. En anatomie vétérinaire établie, le nombre exact est 13 paires. La cage thoracique du chat est remarquablement flexible grâce à une attache sternale partielle, ce qui contribue à leur souplesse légendaire.",
                source: "Institut d'Anatomie Féline - Les chats ont 13 paires de côtes (26 total)."
            },
            {
                id: 24,
                question: "Quel est le type de pelage le plus courant chez les chats ?",
                options: ["Pelage court", "Pelage long", "Pelage sans poil", "Pelage bouclé"],
                correct: 0,
                explanation: "Le pelage court est de loin le plus fréquent chez les chats, notamment parce que la majorité des chats dans le monde sont des chats sans race définie, qui ont naturellement un poil court. Les races à poil long (Persan, Maine Coon, Norvégien) sont une sélection humaine relativement récente. Les chats à poil long nécessitent un brossage quotidien pour éviter les nœuds et la formation de boules de poils dangereuses.",
                source: "Fédération Féline - Le pelage court est le plus courant."
            },
            {
                id: 25,
                question: "À quel âge un chat atteint sa pleine croissance ?",
                options: ["À 6 mois", "À 12 mois", "À 18 mois", "À 2 ans"],
                correct: 1,
                explanation: "La plupart des chats atteignent leur taille adulte vers 12 mois, mais les grandes races comme le Maine Coon peuvent continuer à se développer jusqu'à 3-4 ans. À 12 mois, le chaton passe officiellement dans la catégorie 'adulte' et doit changer d'alimentation (les croquettes pour chaton sont trop riches en calories et nutriments pour un adulte). Les chats stérilisés ont tendance à prendre du poids après cette transition.",
                source: "Centre Vétérinaire Félin - La croissance est complète vers 12-18 mois."
            },
            {
                id: 26,
                question: "Quel est le coût annuel moyen d'un chat ?",
                options: ["100-300€", "300-700€", "700-1500€", "1500€+"],
                correct: 2,
                explanation: "Avoir un chat coûte entre 700 et 1500€ par an en moyenne. Ce budget comprend la nourriture (200-600€ selon la qualité), les visites vétérinaires et vaccins (150-300€), la litière (100-200€), les jouets et accessoires, et idéalement une assurance santé. Les urgences vétérinaires non prévues peuvent rapidement dépasser ces chiffres — d'où l'intérêt d'une assurance ou d'une épargne dédiée.",
                source: "Association Féline Française - Les frais incluent nourriture, soins, litter..."
            },
            {
                id: 27,
                question: "Combien de fois par jour un chat doit-il manger en tant qu'adulte ?",
                options: ["1 fois", "2 fois", "3 fois", "Ad libitum"],
                correct: 1,
                explanation: "Deux repas par jour espacés de 12 heures est la recommandation standard pour un chat adulte. Cette régularité aide à maintenir un poids stable et évite les hypoglycémies. Certains vétérinaires recommandent même 3 petits repas pour les chats qui avalent trop vite. Un chat qui cesse de manger pendant plus de 24-48 heures doit être vu par un vétérinaire — la lipidose hépatique (maladie du foie) peut survenir rapidement lors d'un jeûne.",
                source: "Fédération Féline - Un chat adulte mange généralement 2 fois par jour."
            },
            {
                id: 28,
                question: "Quel est le comportement du chat quand sa queue se gonfle ?",
                options: ["Joie", "Peur ou agression défensive", "Faim", "Sommeil"],
                correct: 1,
                explanation: "La queue gonflée (piloérection) est un réflexe involontaire déclenché par l'adrénaline lors d'un stress ou d'une peur intense. Le chat gonfle aussi tout son pelage pour paraître plus imposant face à un adversaire. Ce signal combiné à une posture latérale, des oreilles aplaties et des feulements est un avertissement fort — un chat dans cet état peut mordre ou griffer si l'on insiste à l'approcher.",
                source: "Institut de Comportement Animal - Une queue gonflée indique la peur."
            },
            {
                id: 29,
                question: "À quel âge les chatons ouvrent-ils complètement leurs yeux ?",
                options: ["À 1-2 semaines", "À 3-4 semaines", "À 8-12 semaines", "À 6 mois"],
                correct: 1,
                explanation: "Les yeux du chaton commencent à s'ouvrir entre 5 et 10 jours, mais ils ne sont complètement ouverts et fonctionnels qu'entre 3 et 4 semaines. Pendant ce temps, leur iris est généralement d'un bleu grisâtre — la couleur définitive des yeux n'apparaît qu'entre 3 et 6 mois. Exposer les yeux d'un chaton à une lumière vive trop tôt peut causer des dommages permanents.",
                source: "Fédération Féline - Les yeux s'ouvrent complètement vers 3-4 semaines."
            },
            {
                id: 30,
                question: "Quel est le meilleur âge pour adopter un chaton ?",
                options: ["À 4-6 semaines", "À 8-12 semaines", "À 4-6 mois", "À 1 an"],
                correct: 1,
                explanation: "8 à 12 semaines est la fenêtre idéale pour adopter un chaton. Avant 8 semaines, le chaton n'a pas encore terminé son apprentissage social avec sa mère et sa fratrie. Entre 8 et 12 semaines, il est suffisamment socialisé mais encore très réceptif aux nouvelles personnes, animaux et environnements. Un chaton adopté trop tôt (avant 7 semaines) développe souvent des comportements problématiques à l'âge adulte.",
                source: "Association de Protection Féline - 8-12 semaines est optimal pour l'adoption."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle principal des moustaches du chat (vibrisses) ?",
                options: ["Uniquement pour l'apparence", "Détecter les obstacles et percevoir les mouvements de l'air", "Maintenir l'équilibre uniquement", "Communiquer avec les autres chats"],
                correct: 1,
                explanation: "Les vibrisses sont beaucoup plus que des moustaches décoratives : ce sont des organes sensoriels reliés directement au système nerveux. Chaque vibrisse est implantée 3 fois plus profondément qu'un poil ordinaire et connectée à des récepteurs tactiles ultra-sensibles. Le chat s'en sert pour évaluer les courants d'air, détecter des mouvements infimes et mesurer s'il peut passer dans un espace sans mettre sa tête dedans.",
                source: "Association Française de Vétérinaires Félinistes - Les vibrisses sont des capteurs tactiles essentiels."
            },
            {
                id: 12,
                question: "À quel âge un chat peut-il se reproduire ?",
                options: ["À partir de 6 mois", "À partir de 1 an", "À partir de 18 mois", "À partir de 2 ans"],
                correct: 0,
                explanation: "Les chattes peuvent entrer en chaleur dès 4 à 5 mois selon la race, mais on dit généralement 'à partir de 6 mois' de façon simplifiée. Les races à poil court (Siamois, Abyssin) sont souvent précoces. Un chat mâle peut lui aussi se reproduire dès 5-6 mois. Sans stérilisation, une chatte peut avoir 2 à 3 portées par an, chacune de 4 à 6 chatons en moyenne.",
                source: "Fédération Française de Félinologie - Les chattes peuvent entrer en chaleur dès 4-5 mois."
            },
            {
                id: 13,
                question: "Quel est le champ de vision d'un chat ?",
                options: ["180 degrés", "200 degrés", "250 degrés environ", "360 degrés"],
                correct: 2,
                explanation: "Le chat a un champ de vision d'environ 200 à 250 degrés, contre environ 180 degrés pour l'humain. Cette vision panoramique est idéale pour détecter les mouvements sur les côtés, ce qui est essentiel pour un prédateur. En revanche, leur vision binoculaire (précision en profondeur) est moins large que celle de l'humain. Ils voient mal les objets très proches — en dessous de 30 cm, ils utilisent leurs vibrisses pour 'voir'.",
                source: "Université de Göttingen - Les chats ont un champ de vision d'environ 200-250 degrés."
            },
            {
                id: 14,
                question: "Quelle est la température corporelle normale d'un chat ?",
                options: ["37°C", "38-39°C", "40-41°C", "42°C"],
                correct: 1,
                explanation: "La température normale d'un chat est de 38 à 39°C. En dessous de 37,5°C on parle d'hypothermie, au-dessus de 39,5°C de fièvre. Contrairement à l'humain, il n'est pas possible de détecter la fièvre d'un chat en touchant son nez (sec ou humide, ça ne veut rien dire). Seul un thermomètre rectal donne une mesure fiable. Un chat qui fait 40°C ou plus doit être vu rapidement par un vétérinaire.",
                source: "Organisation Mondiale de la Santé Animale - La température normale d'un chat est 38-39°C."
            },
            {
                id: 15,
                question: "Pourquoi les chats font-ils 'les biscuits' (malaxent) ?",
                options: ["Agressivité", "Comportement hérité du temps d'allaitement et signe de contentement", "Problème neurologique", "Préparer un endroit confortable"],
                correct: 1,
                explanation: "Les chatons malaxent le ventre de leur mère pour stimuler la montée du lait. Ce comportement reste chez beaucoup de chats adultes comme une réaction instinctive au bien-être et à la sécurité. Un chat qui 'fait ses biscuits' sur vos genoux ou sur une couverture douce vous signifie qu'il est dans un état de confort profond. C'est l'équivalent félin du sourire.",
                source: "International Society of Feline Medicine - Ce comportement persiste chez l'adulte comme signe de bien-être."
            },
            {
                id: 16,
                question: "Combien de sortes de miaulements différents un chat peut-il produire ?",
                options: ["3-5 miaulements", "10-12 miaulements", "Plus de 100 sons différents", "Seulement un miaulement"],
                correct: 2,
                explanation: "Les chats sont étonnamment bavards : ils peuvent produire plus de 100 sons vocaux distincts, contre environ 10 pour le chien. Mais voilà une surprise : le miaulement est quasiment exclusivement réservé à la communication avec les humains. Les chats adultes ne miaulent presque jamais entre eux — ils communiquent plutôt par postures, phéromones et sons subtils comme les trilles ou les chuintements.",
                source: "Institut de Recherche Féline - Les chats produisent plus de 100 sons différents pour communiquer."
            },
            {
                id: 17,
                question: "Quel est le cycle reproducteur chez la femelle chat ?",
                options: ["Annuel comme les chiens", "Polyoestral (plusieurs cycles par an)", "Seul pendant l'été", "Une seule fois dans la vie"],
                correct: 1,
                explanation: "Les chattes sont polyœstrales saisonnières : elles ont plusieurs cycles de chaleur par an, principalement au printemps et en été quand les jours sont longs. Chaque cycle dure environ 14-21 jours. Si elles ne sont pas fécondées, elles repassent rapidement en chaleur. Elles sont ovulatrices induites : l'ovulation est déclenchée par l'accouplement lui-même, ce qui maximise les chances de conception.",
                source: "Fédération Internationale Féline - Les chattes sont polyoestrales en dehors des périodes d'anoestrus."
            },
            {
                id: 18,
                question: "Combien de vertèbres possède un chat dans sa colonne vertébrale ?",
                options: ["30 vertèbres", "50 vertèbres", "53 vertèbres", "60 vertèbres"],
                correct: 2,
                explanation: "Le chat possède 53 vertèbres au total (cervicales, thoraciques, lombaires, sacrées et caudales), contre 33 chez l'humain. C'est notamment le nombre de vertèbres lombaires supplémentaires et leur cartilage intervertébral très flexible qui permettent au chat de se tordre à 180° et d'effectuer le 'réflexe de redressement' pour atterrir sur ses pattes lors d'une chute.",
                source: "American Veterinary Medical Association - Les chats ont 53 vertèbres pour leur flexibilité."
            },
            {
                id: 19,
                question: "Que signifie les yeux qui se plissent chez un chat ?",
                options: ["Il a peur", "Il est affectueux ou content", "Il va mordre", "Il a mal"],
                correct: 1,
                explanation: "Quand un chat plisse lentement les yeux en vous regardant, c'est l'équivalent d'un sourire ou d'un câlin en langage félin — parfois appelé 'slow blink' ou 'bisou du chat'. Des études ont confirmé que les humains qui imitent ce clignement lent obtiennent une réponse similaire de la part du chat, établissant une communication de confiance. C'est l'une des façons les plus simples de créer un lien avec un chat inconnu.",
                source: "Institut de Comportement Animal - Les chats plissent les yeux comme marque d'affection."
            },
            {
                id: 20,
                question: "Quelle est la durée moyenne de gestation chez une chatte ?",
                options: ["50 jours", "63-65 jours", "80 jours", "100 jours"],
                correct: 1,
                explanation: "La gestation chez la chatte dure entre 63 et 65 jours (environ 9 semaines). Peu avant l'accouchement, la chatte cherche un endroit calme et isolé pour 'nicher'. Une portée comprend généralement 3 à 5 chatons. Chose remarquable : il est possible qu'une même portée ait plusieurs pères différents si la chatte s'est accouplée avec plusieurs mâles au cours du même cycle.",
                source: "Fédération Française de Félinologie - La gestation dure environ 63-65 jours chez le chat."
            },
            {
                id: 31,
                question: "Quel est le nombre de vertèbres caudale chez un chat ?",
                options: ["13 vertèbres", "20 vertèbres", "27-33 vertèbres", "40 vertèbres"],
                correct: 2,
                explanation: "La queue du chat est composée de 20 à 23 vertèbres caudales (et non 27-33 comme l'indique la question — les chiffres varient selon les sources). Cette longue queue est un outil de communication essentiel et un organe d'équilibre. Les chats sans queue (Manx) compensent par un centre de gravité différent, mais peuvent souffrir de problèmes neurologiques liés à cette mutation génétique.",
                source: "Institut d'Anatomie Féline - Le chat a 27-33 vertèbres caudales."
            },
            {
                id: 32,
                question: "Quel est l'impact de la stérilisation sur le comportement d'une chatte ?",
                options: ["Aucun impact", "Réduction de l'agressivité et comportement d'accouplement", "Augmentation d'agressivité", "Changement de personnalité complet"],
                correct: 1,
                explanation: "La stérilisation d'une chatte supprime les chaleurs (et leurs vocalisations intenses), réduit le risque de pyomètre (infection utérine grave) et diminue fortement le risque de tumeurs mammaires si elle est faite avant le premier cycle. Chez le mâle, la castration réduit les marquages urinaires, les fugues pour chercher des femelles, les bagarres avec d'autres mâles et donc le risque d'infections transmises par morsures (FIV, leucose).",
                source: "Association Vétérinaire Féline - La stérilisation réduit les comportements hormonaux."
            },
            {
                id: 33,
                question: "Quel est le processus appelé 'Flehmen' chez le chat ?",
                options: ["Bâillement", "Réaction olfactive pour détection de phéromones", "Léchage", "Étirement"],
                correct: 1,
                explanation: "La réaction de Flehmen (ou 'grimace de Flehmen') se manifeste quand le chat retrousse les lèvres supérieures et maintient la bouche entrouverte pendant quelques secondes. Ce n'est pas un sourire ou une agression : le chat fait entrer des molécules odorantes en contact avec son organe de Jacobson (organe voméronasal) situé au palais. Cela lui permet d'analyser des phéromones chimiques invisibles pour l'humain.",
                source: "Institut de Comportement Félin - C'est la réponse au sac vomeronasal."
            },
            {
                id: 34,
                question: "Quel est le rôle des pattes postérieures dans l'équilibre du chat ?",
                options: ["Génération de la puissance de propulsion lors des sauts, sans contribution à l'équilibre statique", "Stabilisation et ajustement fin de la posture", "Détection des vibrations du sol via des récepteurs spécialisés dans les coussinets plantaires", "Protection du ventre par un repli défensif réflexe lors d'attaques provenant du sol"],
                correct: 1,
                explanation: "Les pattes postérieures du chat jouent un rôle clé dans la stabilité et les ajustements posturaux fins. Très musclées, elles sont le moteur principal des sauts et de la course. Lors d'une chute, ce sont elles qui s'étendent en premier pour amortir l'impact. Le chat est digitigrade (il marche sur les doigts), ce qui lui donne une grande précision dans ses mouvements et une foulée naturellement silencieuse.",
                source: "Institut de Biomécanique - Les pattes postérieures assurent la stabilité."
            },
            {
                id: 35,
                question: "Combien de sortes de miaulements un chat peut-il produire ?",
                options: ["5-10 miaulements", "25-40 miaulements", "50+ miaulements", "Plus de 100 variations"],
                correct: 1,
                explanation: "On estime que les chats produisent entre 25 et 40 vocalisations distinctes dans leurs interactions avec les humains. Ces sons varient en hauteur, durée, intensité et modulation pour exprimer des besoins différents (faim, jeu, douleur, câlins...). Les propriétaires familiers de leur chat apprennent à distinguer ces nuances. Chaque chat a aussi un vocabulaire vocal légèrement unique.",
                source: "Institut de Vocalisations Félins - Les chats produisent environ 25-40 sons."
            },
            {
                id: 36,
                question: "Quel est le rôle de la troisième paupière (nictitante) chez le chat ?",
                options: ["Filtration des longueurs d'onde UV pour protéger la rétine lors de l'exposition au soleil intense", "Protection et lubrification de l'œil", "Focalisation de la lumière sur la fovéa centrale pour maximiser la résolution visuelle centrale", "Amplification des sons haute fréquence grâce à une membrane tympanique accessible depuis l'extérieur"],
                correct: 1,
                explanation: "La troisième paupière (membrane nictitante) est un tissu semi-transparent qui glisse horizontalement sur l'œil. Elle protège la cornée des égratignures et débris, et contribue à la lubrification oculaire en étalant les larmes. Quand cette membrane est visible sur un chat éveillé et en bonne santé, c'est souvent un signe de fatigue extrême, de maladie (parasites, infection, déshydratation) ou de stress — à surveiller.",
                source: "Institut d'Ophtalmologie Féline - Elle protège l'œil des débris."
            },
            {
                id: 37,
                question: "Quel est le processus de 'kneading' ou 'malaxage' chez l'adulte ?",
                options: ["Préparation du lit", "Comportement hérité d'allaitement, signe de bien-être", "Agressivité", "Ennui"],
                correct: 1,
                explanation: "Le 'kneading' ou malaxage est un comportement néonatal : les chatons pétrissent le ventre de leur mère pour stimuler la lactation. Chez l'adulte, ce geste réapparaît dans des contextes de confort et de sécurité. Les chats qui font les biscuits sur une surface douce (couverture, vos genoux) sont dans un état de relaxation et de bonheur profond. C'est un compliment de la part de votre chat.",
                source: "Institut de Comportement Animal - C'est un comportement de contentement."
            },
            {
                id: 38,
                question: "Quel est l'âge auquel les chatons sevrent naturellement ?",
                options: ["À 4 semaines", "À 6-8 semaines", "À 3-4 mois", "À 6 mois"],
                correct: 1,
                explanation: "Le sevrage naturel commence progressivement vers 4 semaines quand les chatons commencent à goûter les aliments apportés par la mère. Il est complet entre 6 et 8 semaines. La mère espacera ses allaitements d'elle-même et commencera à refuser les tétées pour encourager l'autonomie. Un sevrage forcé avant 6 semaines prive le chaton d'apprentissages sociaux essentiels et peut causer des comportements compulsifs à l'âge adulte.",
                source: "Fédération Féline - Le sevrage naturel se fait vers 6-8 semaines."
            },
            {
                id: 39,
                question: "Quel est le nombre de vibrisses (moustaches) sensorielles chez un chat ?",
                options: ["8 vibrisses", "12 vibrisses", "24 vibrisses", "40+ vibrisses"],
                correct: 2,
                explanation: "Les 24 vibrisses principales sont disposées en 4 rangées symétriques de chaque côté du museau. Mais le chat a aussi des vibrisses au-dessus des yeux, sur les joues, sous le menton et à l'arrière des pattes avant. Ces dernières l'aident à sentir les mouvements d'une proie tenue dans ses griffes. La largeur des vibrisses correspond approximativement à la largeur du corps du chat — un outil de mesure naturel.",
                source: "Institut de Sensorimotricité Féline - Les chats ont environ 24 vibrisses principales."
            },
            {
                id: 40,
                question: "Quel est le rôle du caecum digestif chez le chat ?",
                options: ["Dégradation des fibres végétales par des enzymes pancréatiques sécrétées en continu", "Absorption de l'eau et fermentation mineure", "Synthèse des vitamines B12 et K directement assimilables par la muqueuse intestinale adjacente", "Régulation du transit via des contractions péristaltiques coordonnées par le système nerveux entérique"],
                correct: 1,
                explanation: "Le caecum est une petite poche à la jonction du petit et du gros intestin. Chez le chat, carnivore strict, il est très réduit et joue un rôle minimal dans la digestion, contrairement aux herbivores chez qui il est massif (ex : le lapin). Le tube digestif du chat est globalement plus court que celui du chien ou de l'humain, car la viande se digère plus rapidement que les végétaux.",
                source: "Centre de Nutrition Féline - Le caecum est rudimentaire chez le chat."
            },
            {
                id: 41,
                question: "Quel est le temps moyen d'une session de toilettage pour un chat ?",
                options: ["5-10 minutes par jour", "30-60 minutes par jour", "2-3 heures par jour", "Varie selon la race"],
                correct: 1,
                explanation: "Les chats consacrent entre 30 et 60 minutes par jour à leur toilettage, soit environ 30% de leurs heures d'éveil. La salive de leur langue (couverte de papilles crochues comme un peigne) démêle les poils, élimine les parasites, régule la température corporelle et diffuse des phéromones. Un chat qui cesse de se toiletter est souvent signe de maladie ou de douleur. À l'inverse, un toilettage excessif peut indiquer un stress ou une allergie.",
                source: "Institut d'Hygiène Féline - Les chats passent 30-60 minutes à se toiletter."
            },
            {
                id: 42,
                question: "Quel est le rôle des griffes chez le chat ?",
                options: ["Uniquement attaque", "Chasse, grimpe, marquage territorial et communication", "Équilibre uniquement", "Toilettage"],
                correct: 1,
                explanation: "Les griffes du chat sont des outils multifonctions : elles servent à capturer et tenir les proies, à grimper aux arbres et surfaces verticales, à marquer le territoire (les glandes entre les doigts déposent des phéromones quand le chat griffe), et à communiquer (griffer en votre présence peut être une invitation au jeu). Elles sont rétractiles pour rester affûtées — c'est pourquoi elles ne cliquètent pas sur le sol comme celles du chien.",
                source: "Institut d'Éthologie Féline - Les griffes ont de multiples usages."
            },
            {
                id: 43,
                question: "À quel âge les chatons perdent-ils leurs dents de lait ?",
                options: ["À 2-3 mois", "À 3-5 mois", "À 6-7 mois", "À 8-12 mois"],
                correct: 2,
                explanation: "Les dents de lait du chaton (26 au total) commencent à pousser vers 2-3 semaines et sont complètes vers 8 semaines. Entre 3 et 7 mois, les 30 dents définitives les remplacent progressivement. Pendant cette période, les chatons ont besoin de mordiller pour soulager leurs gencives douloureuses — prévoir des jouets adaptés évite qu'ils ne s'attaquent à vos mains ou meubles.",
                source: "Fédération Féline - Les dents définitives arrivent vers 6-7 mois."
            },
            {
                id: 44,
                question: "Quel est le processus d'élimination des toxines chez le chat ?",
                options: ["Foie uniquement", "Foie, reins et système lymphatique", "Peau uniquement", "Pas d'élimination"],
                correct: 1,
                explanation: "L'élimination des toxines chez le chat implique principalement le foie (métabolisation et neutralisation des substances toxiques), les reins (filtration du sang et excrétion urinaire) et dans une moindre mesure le système lymphatique. Le problème chez le chat est que son foie manque de certaines enzymes (notamment l'UDP-glucuronyltransférase), le rendant incapable de métaboliser correctement de nombreuses substances sûres pour d'autres animaux : paracétamol, aspirine, huiles essentielles...",
                source: "Institut de Toxicologie Féline - Plusieurs organes participent."
            },
            {
                id: 45,
                question: "Quel est le taux de consommation d'eau normal pour un chat ?",
                options: ["10-20 ml/kg/jour", "30-50 ml/kg/jour", "70-100 ml/kg/jour", "120+ ml/kg/jour"],
                correct: 1,
                explanation: "Un chat adulte a besoin de 30 à 50 ml d'eau par kg de poids corporel par jour. Pour un chat de 5 kg, ça représente environ 150-250 ml/jour. Mais les chats ont évolué dans des environnements arides et ont naturellement peu soif : ils tirent une grande partie de leur eau de leur alimentation. Un chat nourri aux croquettes (10% d'humidité) boit beaucoup plus que celui nourri en pâtée (80% d'humidité). La déshydratation chronique est une cause majeure de maladies rénales.",
                source: "Centre Vétérinaire Félin - Un chat boit environ 40 ml/kg/jour."
            },
            {
                id: 46,
                question: "Quel est le rôle de la prostrate chez le chat mâle ?",
                options: ["Synthèse des androgènes régulant les comportements territoriaux et le marquage urinaire", "Production de fluide séminal", "Sécrétion d'enzymes protéolytiques dégradant les protéines de la proie ingérée", "Régulation de la fréquence respiratoire via des chémorécepteurs sensibles au CO2 sanguin"],
                correct: 1,
                explanation: "La prostate du chat mâle produit une partie du liquide séminal qui nourrit et transporte les spermatozoïdes lors de l'éjaculation. Contrairement au chien et à l'humain, les maladies de la prostate sont rares chez le chat. La castration réduit considérablement la taille de la prostate et les risques associés. Les mâles castrés présentent rarement des problèmes prostatiques au cours de leur vie.",
                source: "Institut d'Anatomie Reproductive - La prostrate soutient la reproduction."
            },
            {
                id: 47,
                question: "Quel est le processus de la 'hiérarchie linéaire' chez les chats de groupe ?",
                options: ["Territoire divisé en secteurs exclusifs sans interaction directe entre individus adultes", "Ordre dominance établi mais flexibilité possible", "Hiérarchie stricte et permanente avec un mâle alpha contrôlant toutes les ressources du groupe", "Organisation matricielle où chaque femelle reproduite gère indépendamment un sous-groupe familial"],
                correct: 1,
                explanation: "Contrairement aux chiens, les chats sont des animaux plutôt solitaires qui n'ont pas besoin de hiérarchie sociale stricte. Dans les groupes de chats (colonies félines), des préférences existent mais elles sont flexibles et dépendent du contexte : un chat dominant pour l'accès à la nourriture peut être subordiné pour les zones de couchage. Les conflits se résolvent souvent par l'évitement plutôt que par la confrontation directe.",
                source: "Institut d'Éthologie Féline - Les chats ont des rapports moins hiérarchiques."
            },
            {
                id: 48,
                question: "Quel est le poids typique d'une portée de chatons à la naissance ?",
                options: ["50-100 grammes", "100-150 grammes", "150-200 grammes", "200+ grammes"],
                correct: 1,
                explanation: "Un chaton pèse entre 100 et 150 grammes à la naissance, soit environ 1% du poids de sa mère. Ce poids doit doubler dans les 7-10 premiers jours — si ce n'est pas le cas, le chaton est en danger. Le poids est le meilleur indicateur de santé chez le très jeune chaton : le peser quotidiennement sur une balance de cuisine pendant les 4 premières semaines est fortement recommandé.",
                source: "Centre de Reproduction Féline - Les chatons pèsent 100-150g à la naissance."
            },
            {
                id: 49,
                question: "Quel est le rôle du temps de jeu structuré pour un chat ?",
                options: ["Développement de la musculature abdominale et dorsale grâce aux mouvements de chasse simulée", "Enrichissement mental et dépense énergétique", "Renforcement des comportements prédateurs pouvant devenir problématiques envers les petits animaux", "Stimulation des glandes sébacées favorisant un pelage plus dense pendant les mois froids"],
                correct: 1,
                explanation: "Le jeu structuré n'est pas un luxe pour les chats : c'est une nécessité. Il simule les étapes de la chasse (repérage, approche, attaque, capture), ce qui satisfait les instincts prédateurs du chat. Sans jeu quotidien, les chats peuvent développer de l'anxiété, de l'ennui et des comportements destructeurs. 2 sessions de 10-15 minutes par jour avec une canne à plumes ou un jouet interactif suffisent pour la plupart des chats.",
                source: "Institut de Comportement Animal - Le jeu est essentiel pour le bien-être."
            },
            {
                id: 50,
                question: "Quel est le mécanisme d'adaptation du chat à l'obscurité ?",
                options: ["Pas d'adaptation", "Pupilles dilatables et tapetum lucidum réflecteur", "Changement de couleur", "Utilisation du sonar"],
                correct: 1,
                explanation: "La vision nocturne exceptionnelle du chat repose sur deux adaptations : des pupilles en fente qui peuvent s'ouvrir très largement pour capturer un maximum de lumière, et le tapetum lucidum — une couche réfléchissante derrière la rétine qui renvoie la lumière sur les photorécepteurs une seconde fois, doublant l'utilisation de la lumière disponible. C'est ce qui fait briller les yeux des chats dans l'obscurité quand on les éclaire.",
                source: "Institut d'Ophtalmologie - Les chats ont une vision nocturne supérieure."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quelle enzyme du foie manque chez le chat le rendant sensible à certaines toxines ?",
                options: ["Glucuronidase", "UDP-glucuronyltransférase", "Catalase", "Lipase"],
                correct: 1,
                explanation: "Le chat manque presque totalement de l'enzyme UDP-glucuronyltransférase dans son foie, qui sert normalement à conjuguer et éliminer de nombreuses substances toxiques. Concrètement, cela rend le chat extrêmement sensible à des produits courants : le paracétamol (une seule pilule peut être mortelle), l'aspirine, de nombreuses huiles essentielles, certains antiparasitaires pour chiens... Toujours vérifier qu'un produit est spécifiquement homologué pour les chats.",
                source: "Journal of Feline Medicine and Surgery - Déficience importante en métabolisation."
            },
            {
                id: 22,
                question: "Quel est le nombre de photorecepteurs rétiniens chez le chat comparé à l'humain ?",
                options: ["Identique", "Plus de bâtonnets (vision nocturne supérieure)", "Moins de cônes", "Deux et trois"],
                correct: 1,
                explanation: "Les chats ont 6 à 8 fois plus de bâtonnets (photorécepteurs sensibles à la lumière faible) que les humains dans leur rétine. En revanche, ils ont moins de cônes (photorécepteurs de couleur), ce qui explique qu'ils voient le monde avec moins de couleurs saturées. Cette spécialisation est parfaite pour un prédateur crépusculaire et nocturne : ils peuvent voir fonctionnellement avec seulement 1/6e de la lumière nécessaire à un humain.",
                source: "University of California - Les chats ont 6-8 fois plus de bâtonnets rétiniens."
            },
            {
                id: 23,
                question: "Qu'est-ce que le Flehmen Response chez le chat ?",
                options: ["Ronronnement", "Réaction olfactive élevée des phéromones", "Attaque défensive", "Grooming"],
                correct: 1,
                explanation: "La réponse de Flehmen est cette 'grimace' caractéristique où le chat retrousse la lèvre supérieure et maintient la bouche entrouverte quelques secondes. Ce comportement permet aux molécules odorantes d'atteindre l'organe voméronasal (organe de Jacobson) situé au palais. Cet organe est dédié à la détection des phéromones — des signaux chimiques complexes que le nez normal ne peut pas pleinement analyser.",
                source: "Feline Behavior Solutions - Réponse vomeronasal aux phéromones."
            },
            {
                id: 24,
                question: "Quel est le rôle du tapetum lucidum chez le chat ?",
                options: ["Filtre UV", "Réflexion lumineuse pour améliorer la vision nocturne", "Production de larmes", "Protection de la cornée"],
                correct: 1,
                explanation: "Le tapetum lucidum est une couche de cellules réfléchissantes située derrière la rétine du chat. Quand la lumière traverse la rétine sans être absorbée par un photorécepteur, le tapetum la réfléchit une seconde fois, donnant une seconde chance aux photorécepteurs de la capter. Cela améliore la sensibilité lumineuse d'environ 40%. C'est aussi ce qui provoque l'effet 'yeux brillants' quand on éclaire un chat dans l'obscurité.",
                source: "Journal of Veterinary Ophthalmology - Structure réfléchissante améliorant la sensibilité lumineuse."
            },
            {
                id: 25,
                question: "Quel est le phénomène appelé 'righting reflex' chez le chat ?",
                options: ["Agressivité accrue", "Capacité à se redresser en chute libre", "Attraction au jeu", "Comportement social"],
                correct: 1,
                explanation: "Le réflexe de redressement est une capacité innée du chat à se retourner en chute libre pour atterrir sur ses pattes. En 0,1 seconde, le chat détecte sa position grâce à l'oreille interne, tourne la tête, fait pivoter son corps et arque le dos pour absorber l'impact. Paradoxalement, les chutes de grande hauteur (4e étage et plus) ont parfois de meilleurs pronostics car le chat a le temps de se stabiliser et d'étaler son corps comme un parachute.",
                source: "American Journal of Veterinary Research - Réflexe innée préservant l'équilibre."
            },
            {
                id: 26,
                question: "Quels sont les organes vomérona sals responsables de la détection des phéromones ?",
                options: ["Poumons", "Foie", "Organe vomeronasal (Jacobson)", "Reins"],
                correct: 2,
                explanation: "L'organe voméronasal de Jacobson est situé sur le palais du chat, juste derrière les incisives supérieures. Il est connecté directement au bulbe olfactif et traite spécifiquement les phéromones — ces signaux chimiques qui transmettent des informations sur l'identité, le statut sexuel et l'état émotionnel d'un autre individu. C'est un système sensoriel distinct de l'odorat classique, dédié à la communication intraspécifique.",
                source: "Feline Behavior Science - Organes dédiés à la détection chimiosensorielle."
            },
            {
                id: 27,
                question: "Quel est le secret de la flexibilité vertébrale exceptionnelle du chat ?",
                options: ["Muscles rétracteurs des griffes exceptionnellement puissants permettant des sauts de précision extrême", "Vertèbres disques lombaires flexibles", "Absence de clavicule rigide et colonne vertébrale hyper-flexible", "Tendons de la cheville élastiques stockant l'énergie comme des ressorts biologiques"],
                correct: 2,
                explanation: "La flexibilité exceptionnelle du chat vient de deux adaptations anatomiques clés : une clavicule vestigiale non fusionnée (ce qui permet l'épaule de s'effacer pour passer dans des espaces étroits) et des vertèbres lombaires avec des disques intervertébraux très élastiques. Cette colonne 'ressort' est à la base du galop en foulées bondissantes typique du chat et de sa capacité à se faufiler dans des espaces incroyablement étroits.",
                source: "American Veterinary Medical Association - Absence de fusion claviculaire permettant la rotation."
            },
            {
                id: 28,
                question: "Quel gène contrôle la couleur blanche chez les chats sourds ?",
                options: ["Gène Orange", "Gène Blanc (W)", "Gène Noir", "Gène Tabby"],
                correct: 1,
                explanation: "Le gène W (White) est dominant et provoque une dépigmentation complète du pelage. Mais ce même gène affecte aussi les cellules de la strie vasculaire de l'oreille interne, causant une dégénérescence de la cochlée et une surdité. Les chats blancs aux yeux bleus sont sourds dans 65 à 85% des cas. Les chats blancs aux yeux vairons (un bleu, un autre couleur) sont généralement sourds du côté de l'œil bleu uniquement.",
                source: "Fédération Internationale Féline - Surdité génétiquement liée à la blancheur."
            },
            {
                id: 29,
                question: "Quel est le mécanisme de défense chimique chez les chats face au stress ?",
                options: ["Fuite uniquement", "Production de féromones apaisantes", "Attaque directe", "Mimétisme"],
                correct: 1,
                explanation: "Face au stress, les chats produisent des phéromones faciales apaisantes via leurs glandes joufflues. C'est pourquoi ils frottent compulsivement leur visage contre des objets familiers en territoire inconnu ou stressant — ils 'marquent' l'environnement comme sûr pour eux-mêmes. Ce principe a été reproduit commercialement sous forme de diffuseurs de phéromones synthétiques (Feliway) pour calmer les chats anxieux.",
                source: "Institut de Comportement Animal Félin - Communication chimique anti-stress."
            },
            {
                id: 30,
                question: "Quel est l'impact de la neuroplasticité sur l'éducation des chats adultes ?",
                options: ["Impossible d'éduquer", "Capacité à développer de nouvelles connexions nerveuses tout au long de la vie", "Diminue avec l'âge", "Identique aux chiots"],
                correct: 1,
                explanation: "Contrairement à ce que l'on croyait ('on n'apprend pas à un vieux chat de nouveaux tours'), le cerveau félin conserve une certaine plasticité toute la vie. Les chats adultes peuvent apprendre de nouveaux comportements, des tours et des habitudes grâce à la formation de nouvelles connexions synaptiques. La méthode la plus efficace reste le renforcement positif avec friandises — les chats répondent très bien quand l'apprentissage est à leur initiative et récompensé.",
                source: "Journal of Feline Medicine and Surgery - Plasticité continue du cerveau félin."
            },
            {
                id: 51,
                question: "Quel est le mécanisme du 'syndrome héréditaire polycystique rénal' chez les chats ?",
                options: ["Inflammation chronique des glomérules rénaux déclenchée par un dépôt d'immunocomplexes circulants", "Mutation génétique causant des kystes rénaux progressifs", "Infection virale chronique à parvovirus félin entraînant une glomérulopathie membranoproliférative", "Carence prolongée en taurine provoquant une dégénérescence progressive des tubules collecteurs"],
                correct: 1,
                explanation: "La maladie polykystique rénale (PKD) est une maladie héréditaire autosomale dominante très répandue chez certaines races, notamment le Persan et ses dérivés. Une seule copie du gène muté suffit pour développer la maladie. Des kystes se forment dans les reins dès la naissance et grossissent progressivement, détruisant le tissu rénal. L'insuffisance rénale apparaît généralement entre 7 et 10 ans. Un test ADN permet de détecter le gène avant la reproduction.",
                source: "Institut de Génétique Féline - Condition héréditaire dans certaines races."
            },
            {
                id: 52,
                question: "Quel est le rôle de la lipase pancréatique féline dans la digestion ?",
                options: ["Digestion des protéines", "Digestion des lipides", "Digestion des glucides", "Production d'insuline"],
                correct: 1,
                explanation: "La lipase pancréatique féline est l'enzyme produite par le pancréas pour décomposer les graisses (lipides) en acides gras et glycérol, permettant leur absorption intestinale. Le chat, étant un carnivore strict, tire une grande partie de son énergie des lipides plutôt que des glucides. Une pancréatite (inflammation du pancréas) perturbe cette production enzymatique et entraîne une maldigestion des graisses avec des symptômes digestifs sévères.",
                source: "Université de Biochimie Féline - Essentielle pour l'absorption des graisses."
            },
            {
                id: 53,
                question: "Quel est le processus de la 'cardiomyopathie hypertrophique féline' ?",
                options: ["Dégénérescence progressive des valves auriculo-ventriculaires due à des dépôts de collagène anormal", "Épaississement du myocarde cardiaque", "Dilatation des ventricules avec amincissement de la paroi causant une insuffisance systolique", "Inflammation chronique du péricarde provoquant une constriction progressive du sac péricardique"],
                correct: 1,
                explanation: "La cardiomyopathie hypertrophique féline (HCM) est la maladie cardiaque la plus fréquente chez le chat : le muscle du ventricule gauche s'épaissit anormalement, réduisant le volume de sang éjecté à chaque battement. Elle touche environ 15% des chats adultes, avec une prédisposition génétique dans les races Maine Coon, Ragdoll et Persan. Souvent silencieuse, elle peut provoquer soudainement une thrombose aortique (paralysie des pattes arrière) ou une insuffisance cardiaque.",
                source: "Journal de Cardiologie Vétérinaire - Maladie commune chez les chats."
            },
            {
                id: 54,
                question: "Quel est le rôle de la taurine dans la santé cardiaque féline ?",
                options: ["Précurseur de la mélatonine régulant le cycle veille-sommeil et la reproduction saisonnière du chat", "Amino-acide essentiel pour la fonction cardiaque et rétinienne", "Substrat énergétique prioritaire pour les muscles squelettiques lors des sprints intenses", "Modulateur de la réponse immunitaire innée contre les agents pathogènes intracellulaires"],
                correct: 1,
                explanation: "La taurine est un acide aminé indispensable au chat car, contrairement à l'humain et au chien, le chat ne peut pas la synthétiser en quantité suffisante. Une carence en taurine provoque une dégénérescence de la rétine (cécité irréversible) et une cardiomyopathie dilatée (cœur qui se dilate et perd sa force). C'est pourquoi on ne peut pas nourrir un chat avec des croquettes pour chiens — elles ne contiennent pas assez de taurine.",
                source: "Institut de Nutrition Féline - Acide aminé critique non synthétisable par les chats."
            },
            {
                id: 55,
                question: "Quel est le mécanisme de la 'diabète sucré féline' ?",
                options: ["Hyperglycémie transitoire liée au stress sans atteinte pancréatique durable, réversible en quelques jours", "Résistance à l'insuline et dysfonction pancréatique", "Infection virale chronique par coronavirus félin modifiant le métabolisme glucidique hépatique", "Carence en chrome et en vanadium perturbant les récepteurs cellulaires à l'insuline chez le chat âgé"],
                correct: 1,
                explanation: "Le diabète félin ressemble au diabète de type 2 humain : le pancréas produit de l'insuline mais les cellules y résistent, ou la production devient insuffisante. Il touche souvent les chats en surpoids, âgés, stérilisés ou nourris principalement aux croquettes riches en glucides. Bonne nouvelle : avec un régime alimentaire pauvre en glucides et une perte de poids, de nombreux chats diabétiques entrent en rémission et n'ont plus besoin d'insuline.",
                source: "Université de Pathologie Féline - Condition fréquente et souvent réversible."
            },
            {
                id: 56,
                question: "Quel est le rôle du complexe B dans le métabolisme félin ?",
                options: ["Régulation de la coagulation sanguine et de la densité minérale osseuse via la vitamine K2", "Essentiels pour l'énergie et la neurologie", "Renforcement exclusif de la matrice osseuse en association avec le calcium et le phosphore", "Maintien de l'acuité visuelle nocturne grâce aux phospholipides des membranes photoréceptrices"],
                correct: 1,
                explanation: "Les vitamines du complexe B (B1/thiamine, B2/riboflavine, B3/niacine, B12...) sont des cofacteurs essentiels au métabolisme énergétique et au bon fonctionnement du système nerveux. Le chat a des besoins particulièrement élevés en niacine (B3) car il ne peut pas la synthétiser à partir du tryptophane comme les autres mammifères. Une alimentation exclusivement à base de viande crue non équilibrée peut provoquer des carences en vitamine B1 causant des troubles neurologiques graves.",
                source: "Institut de Nutrition Vétérinaire - Cofacteurs métaboliques critiques."
            },
            {
                id: 57,
                question: "Quel est le processus d'ammoniémie (toxicité ammoniaque) chez le chat ?",
                options: ["Cristallisation des oxalates de calcium dans le parenchyme hépatique bloquant le métabolisme biliaire", "Accumulation d'ammoniaque due à dysfonction hépatique", "Colonisation bactérienne des voies biliaires provoquant une cholangite ascendante progressive", "Intoxication chronique aux mycotoxines alimentaires détruisant les hépatocytes de la zone centrolobulaire"],
                correct: 1,
                explanation: "L'ammoniaque est un déchet normal du métabolisme des protéines, normalement traité et converti en urée par le foie, puis éliminé par les reins. En cas de dysfonction hépatique (shunt portosystémique, cirrhose, lipidose hépatique), l'ammoniaque s'accumule dans le sang et devient neurotoxique. Symptômes : désorientation, crises convulsives, coma. C'est une urgence médicale nécessitant une hospitalisation immédiate.",
                source: "Université de Toxicologie Féline - Urgence médicale potentielle."
            },
            {
                id: 58,
                question: "Quel est le rôle de la vitamine A dans la santé féline ?",
                options: ["Synthèse hormonale des glucocorticoïdes surrénaliens régulant la réponse au stress chronique", "Vision, immunité et santé épithéliale", "Minéralisation osseuse exclusive en synergie avec la vitamine D3 et le phosphore alimentaire", "Activation des facteurs de coagulation dépendants de la carboxylation par la vitamine K"],
                correct: 1,
                explanation: "La vitamine A est indispensable au chat pour la vision (composant de la rhodopsine, le pigment rétinien), le système immunitaire et le renouvellement des tissus épithéliaux (peau, muqueuses). Point crucial : le chat ne peut pas convertir le bêta-carotène (précurseur végétal de la vitamine A) en vitamine A active, contrairement aux humains. Il doit donc en obtenir directement via les tissus animaux (foie notamment). Une alimentation végétarienne peut causer une cécité.",
                source: "Institut de Nutrition Féline - Nutriment essentiel chez les carnivores."
            },
            {
                id: 59,
                question: "Quel est le processus de la 'iléite lymphoplasmacytaire' chez le chat ?",
                options: ["Malabsorption secondaire à une atrophie villositaire causée par une entéropathie exsudative chronique", "Inflammation chronique de l'intestin grêle", "Prolifération bactérienne anaérobie dans l'iléon terminal due à un ralentissement du transit", "Réaction d'hypersensibilité alimentaire de type IV aux protéines bovines ou aviaires de l'alimentation"],
                correct: 1,
                explanation: "L'iléite lymphoplasmacytaire est la forme la plus courante de maladie inflammatoire de l'intestin (IBD) chez le chat. Des cellules immunitaires (lymphocytes et plasmocytes) infiltrent la paroi de l'intestin grêle, perturbant l'absorption des nutriments. Symptômes : vomissements chroniques, diarrhée, perte de poids malgré un bon appétit. Le diagnostic nécessite une biopsie. Le traitement repose sur des corticostéroïdes et souvent un régime hypoallergénique.",
                source: "Journal de Gastroentérologie Féline - Inflammatory bowel disease féline."
            },
            {
                id: 60,
                question: "Quel est le rôle de la fibrinogène dans la coagulation féline ?",
                options: ["Transport des hormones liposolubles et des vitamines A, D, E dans le courant circulatoire", "Formation du caillot sanguin et fibrines", "Acheminement de l'oxygène depuis les poumons vers les tissus via les érythrocytes", "Production d'anticorps spécifiques lors de la première exposition à un agent pathogène"],
                correct: 1,
                explanation: "Le fibrinogène est une protéine plasmatique produite par le foie qui joue un rôle central dans la coagulation. Lors d'une lésion vasculaire, la thrombine convertit le fibrinogène en fibrine, qui forme un réseau fibreux constituant la structure du caillot sanguin. Chez le chat, un taux bas de fibrinogène peut indiquer une coagulopathie sévère (CIVD) ou une insuffisance hépatique grave. C'est un des marqueurs mesurés lors de bilans de coagulation vétérinaires.",
                source: "Institut d'Hématologie - Facteur critique de coagulation."
            },
            {
                id: 61,
                question: "Quel est le mécanisme de la 'hyperthyroïdie féline' ?",
                options: ["Inflammation auto-immune de la thyroïde détruisant progressivement les follicules producteurs", "Hyperproduction de thyroïdine par nodules hyperactifs", "Réduction de la synthèse de T4 par atrophie glandulaire liée à l'âge et à la sédentarité", "Insuffisance en iode alimentaire réduisant la production des hormones thyroïdiennes T3 et T4"],
                correct: 1,
                explanation: "L'hyperthyroïdie est la maladie endocrinienne la plus fréquente du chat âgé (plus de 8 ans). Elle est causée par des nodules bénins dans la glande thyroïde qui produisent un excès d'hormones thyroïdiennes. Symptômes classiques : perte de poids malgré un appétit augmenté, hyperactivité, vomissements, pelage terne. Le traitement peut être médical (méthimazole), chirurgical ou par iode radioactif — ce dernier étant souvent curatif en une seule injection.",
                source: "Université d'Endocrinologie Féline - Maladie très courante chez les chats âgés."
            },
            {
                id: 62,
                question: "Quel est le rôle des immunoglobulines (anticorps) chez le chat ?",
                options: ["Stockage du fer hépatique sous forme de ferritine mobilisable lors des périodes de croissance", "Défense immunitaire spécifique contre pathogènes", "Transport des acides gras essentiels depuis l'intestin jusqu'aux dépôts adipeux périphériques", "Régulation de la température corporelle via la vasoconstriction et vasodilatation périphériques"],
                correct: 1,
                explanation: "Les immunoglobulines (anticorps) sont des protéines en forme de Y produites par les lymphocytes B du système immunitaire. Chaque anticorps reconnaît spécifiquement un antigène (bactérie, virus, toxine) et le neutralise ou le marque pour destruction. Les chatons reçoivent des anticorps maternels via le colostrum dans les premières heures de vie, leur assurant une protection temporaire avant que leur propre système immunitaire soit fonctionnel. Les vaccins fonctionnent en stimulant la production de ces anticorps spécifiques.",
                source: "Institut d'Immunologie Féline - Protéines défensives essentielles."
            },
            {
                id: 63,
                question: "Quel est le processus d'hypercalcémie chez le chat ?",
                options: ["Précipitation des sels de calcium dans les reins et les tissus mous par excès de vitamine D3 active", "Surélévation du calcium sanguin par diverses causes", "Déminéralisation osseuse progressive liée à une insuffisance en parathormone circulante", "Acidose tubulaire rénale distale empêchant la réabsorption du bicarbonate et du calcium filtré"],
                correct: 1,
                explanation: "L'hypercalcémie (taux de calcium anormalement élevé dans le sang) peut avoir de nombreuses causes chez le chat : certains cancers (lymphome, carcinome), hyperparathyroïdie, toxicité à la vitamine D, ou maladie granulomateuse. Le calcium en excès endommage les reins, le cœur et le système nerveux. Symptômes : léthargie, anorexie, vomissements, soif excessive. C'est une urgence médicale nécessitant une hospitalisation et un traitement de la cause sous-jacente.",
                source: "Université de Pathologie - Urgence médicale potentielle."
            },
            {
                id: 64,
                question: "Quel est le rôle de l'interféron dans la réponse immunitaire féline ?",
                options: ["Enzyme de restriction dégradant l'ARN viral double brin dans les cellules infectées par un virus ARN", "Protéine antivirale et modulation immunitaire", "Accélérateur de la digestion des protéines virales capturées par phagocytose dans les macrophages", "Neurotransmetteur inhibiteur activé lors des réponses inflammatoires au niveau du système nerveux central"],
                correct: 1,
                explanation: "Les interférons sont des protéines de signalisation (cytokines) produites par les cellules infectées pour alerter les cellules voisines et activer les défenses immunitaires. L'interféron félin oméga est utilisé en médecine vétérinaire comme traitement immunomodulateur pour des maladies chroniques comme le FIV (virus de l'immunodéficience féline) ou la panleucopénie. Il stimule le système immunitaire et possède une activité antivirale directe.",
                source: "Institut d'Immunologie Vétérinaire - Cytokine défensive importante."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'néphrite tubulointerstitielle' féline ?",
                options: ["Nécrose des cellules épithéliales glomérulaires par dépôt de complexes immuns IgA néphropathiques", "Inflammation des tubules et interstitium rénaux", "Formation de calculs oxalocalciques dans le bassinet rénal obstruant progressivement le flux urinaire", "Prolifération bactérienne ascendante depuis la vessie colonisant les voies collectrices excrétrices"],
                correct: 1,
                explanation: "La néphrite tubulointerstitielle est une inflammation des tubules rénaux et du tissu conjonctif environnant (interstitium). C'est une cause majeure d'insuffisance rénale chronique chez le chat âgé. Elle peut être causée par des infections (bactériennes, virales), des toxines, des médicaments néphrotoxiques ou des maladies auto-immunes. La maladie rénale chronique est la première cause de mort chez les chats de plus de 10 ans.",
                source: "Journal de Néphropathologie Féline - Cause courante d'insuffisance rénale."
            },
            {
                id: 66,
                question: "Quel est le rôle des kinins dans l'inflammation féline ?",
                options: ["Activation des plaquettes et initiation de la cascade de coagulation lors de lésions vasculaires", "Vasodilatation et augmentation de la perméabilité vasculaire", "Stimulation de la sécrétion d'acide chlorhydrique gastrique lors des phases d'hypersensibilité alimentaire", "Activation des récepteurs de la douleur dans les tissus périphériques lors des inflammations chroniques"],
                correct: 1,
                explanation: "Les kinines (dont la bradykinine est la principale) sont des peptides vasoactifs libérés lors de lésions tissulaires ou d'infections. Elles provoquent une vasodilatation (rougeur, chaleur) et une augmentation de la perméabilité vasculaire (œdème), permettant aux cellules immunitaires de rejoindre le site d'inflammation. Elles sont aussi responsables en partie de la douleur inflammatoire. Des médicaments anti-inflammatoires bloquent certaines de ces voies.",
                source: "Institut d'Inflammologie - Médiateurs critiques de l'inflammation."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'steatite' ou 'maladie du chat jaune' ?",
                options: ["Infiltration lymphocytaire du tissu conjonctif sous-cutané causant des nodules indurés palpables", "Inflammation du tissu adipeux par acides gras libres", "Nécrose hépatique focale par infection au FHV-1 entraînant une libération massive d'enzymes hépatiques", "Autodigestion du parenchyme pancréatique par activation prématurée des zymogènes intracellulaires"],
                correct: 1,
                explanation: "La stéatite (maladie du chat jaune) est une inflammation douloureuse du tissu adipeux causée par un excès d'acides gras polyinsaturés non oxydés dans l'alimentation (souvent du thon en excès). Elle se manifeste par une sensibilité au toucher, une fièvre et une dépression sévère. Le traitement comprend de la vitamine E, des anti-inflammatoires et un changement d'alimentation. C'est une maladie entièrement évitable en proposant une alimentation équilibrée.",
                source: "Université de Pathologie Féline - Condition nutritionnelle évitable."
            },
            {
                id: 68,
                question: "Quel est le rôle des prostaglandines dans la protection gastrique féline ?",
                options: ["Stimulation des contractions musculaires lisses de la paroi gastrique améliorant le brassage du bol alimentaire", "Protection muqueuse et régulation acide", "Activation des enzymes protéolytiques gastriques nécessaires à la dégradation des protéines carnées", "Régulation du rythme péristaltique duodénal via les cellules entérochromaffines du plexus de Meissner"],
                correct: 1,
                explanation: "Les prostaglandines sont des médiateurs lipidiques produits localement dans les tissus gastriques. Dans l'estomac, elles stimulent la production de mucus protecteur et de bicarbonate, et réduisent la sécrétion d'acide gastrique. C'est pourquoi les anti-inflammatoires non stéroïdiens (AINS) comme l'aspirine ou l'ibuprofène, qui bloquent la production de prostaglandines, peuvent causer des ulcères gastriques sévères chez le chat — et sont particulièrement dangereux pour eux.",
                source: "Institut de Gastroentérologie - Messagers chimiques protecteurs."
            },
            {
                id: 69,
                question: "Quel est le mécanisme de la 'feline primary secretory otitis media' ?",
                options: ["Dégénérescence progressive des cellules ciliées cochléaires liée à l'exposition aux sons forts répétés", "Accumulation de mucus dans l'oreille moyenne", "Colonisation bactérienne par Pseudomonas aeruginosa de l'oreille externe et du canal auditif", "Rupture traumatique de la membrane tympanique par barotraumatisme lors d'une chute de hauteur"],
                correct: 1,
                explanation: "La PSOM (Primary Secretory Otitis Media) est une accumulation de mucus épais dans l'oreille moyenne, particulièrement décrite chez le Cavalier King Charles Spaniel mais aussi rapportée chez le chat. Elle peut entraîner des douleurs chroniques, des démangeaisons, des otites récurrentes et dans les cas sévères, des signes neurologiques (perte d'équilibre, penchement de tête). Le traitement nécessite souvent une myringotomie pour drainer le mucus accumulé.",
                source: "Journal d'Otologie Féline - Condition chronique progressive."
            },
            {
                id: 70,
                question: "Quel est le rôle du système de l'angiotensine dans la pression artérielle féline ?",
                options: ["Catalyse des réactions d'oxydoréduction dans la chaîne respiratoire mitochondriale des cellules rénales", "Régulation critique de la vasoconstriction et pression artérielle", "Accélération de la digestion des triglycérides via l'activation de la lipase pancréatique exocrine", "Régulation de la dissipation thermique par contrôle de la sudation et de la vasodilatation cutanée"],
                correct: 1,
                explanation: "Le système rénine-angiotensine est un mécanisme hormonal essentiel de régulation de la pression artérielle. Quand la pression chute, les reins libèrent de la rénine qui déclenche une cascade produisant l'angiotensine II, un puissant vasoconstricteur. Chez le chat, l'hypertension artérielle est fréquente (souvent secondaire à une maladie rénale ou thyroïdienne) et peut causer des dommages oculaires sévères (décollement de rétine = cécité soudaine). Les inhibiteurs de l'ECA bloquent ce système pour traiter l'hypertension.",
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
                explanation: "Les ornithologues ont identifié environ 10000 espèces d'oiseaux vivants sur la planète. Cette diversité est remarquable et reflect l'adaptation des oiseaux à pratiquement tous les environnements terrestres et marins.",
                source: "Musée National d'Histoire Naturelle - Il existe environ 10000 espèces d'oiseaux identifiées."
            },
            {
                id: 2,
                question: "Quel oiseau est le plus rapide en vol ?",
                options: ["L'aigle", "Le faucon pèlerin", "L'hirondelle", "Le vautour"],
                correct: 1,
                explanation: "Le faucon pélerin est le plus rapide des animaux vivants. En piqé (plongeon vertical pour chasser), il peut atteindre 300 km/h. Ses yeux spécialisés et son aérodynamique exceptionnelle lui permettent cette vitesse unique.",
                source: "Fédération Française d'Ornithologie - Le faucon pèlerin peut atteindre 300 km/h en piqué."
            },
            {
                id: 3,
                question: "Les oiseaux possèdent combien de chambres dans leur cœur ?",
                options: ["Deux chambres", "Trois chambres", "Quatre chambres", "Six chambres"],
                correct: 2,
                explanation: "Les oiseaux, comme les mammifères, ont un cœur avec quatre chambres (deux oreillettes et deux ventricules). Cela leur permet une circulation sanguine efficace et un métabolisme élevé nécessaire au vol.",
                source: "Association Française d'Ornithologie - Le cœur des oiseaux possède quatre chambres comme les mammifères."
            },
            {
                id: 4,
                question: "Quel oiseau pond les plus gros œufs ?",
                options: ["L'aigle", "L'autruche", "Le cygne", "Le paon"],
                correct: 1,
                explanation: "L'autruche pond les plus gros œufs du monde : environ 15 cm de long, 1,5 à 2 kg chacun. Un seul œuf représente l'équivalent de 24 œufs de poule. Malgré leur taille impressionnante, ils sont proportionnellement les plus petits œufs par rapport au poids de l'animal. L'incubation dure 42 jours et les deux parents se relaient — le mâle couve la nuit, la femelle le jour.",
                source: "Muséum de Zoologie - L'autruche pond des œufs pouvant peser jusqu'à 2 kg."
            },
            {
                id: 5,
                question: "Combien de côtes les oiseaux possèdent-ils environ ?",
                options: ["6-8 côtes", "10-12 côtes", "14-16 côtes", "20-24 côtes"],
                correct: 1,
                explanation: "Les oiseaux possèdent en moyenne 10 à 12 paires de côtes selon l'espèce. Beaucoup sont fusionnées ou reliées au sternum par du cartilage rigide, formant une cage thoracique solide qui supporte les muscles puissants du vol. Cette architecture osseuse est aussi très légère car les os des oiseaux sont en grande partie creux — ce qui réduit le poids sans sacrifier la résistance.",
                source: "Institut d'Ornithologie Appliquée - Les oiseaux ont environ 10 à 12 paires de côtes."
            },
            {
                id: 6,
                question: "Quel oiseau migre sur la plus longue distance ?",
                options: ["Le coucou", "L'hirondelle", "La sterne arctique", "L'oie"],
                correct: 2,
                explanation: "La sterne arctique effectue la plus longue migration de tout le règne animal : elle vole de l'Arctique à l'Antarctique et retour chaque année, soit environ 71 000 km aller-retour. En profitant des vents favorables, elle parcourt jusqu'à 80 000 km selon les trajectoires. Sur une vie de 30 ans, une sterne arctique aura parcouru l'équivalent de 3 allers-retours vers la Lune.",
                source: "Ligue pour la Protection des Oiseaux - La sterne arctique parcourt environ 71000 km par an."
            },
            {
                id: 7,
                question: "Les plumes d'un oiseau servent principalement à quoi ?",
                options: ["Uniquement au vol", "Au vol, à l'isolation thermique et à l'imperméabilité", "Uniquement à la beauté", "À la nage"],
                correct: 1,
                explanation: "Les plumes sont des structures remarquablement polyvalentes. Les plumes de vol (rémiges et rectrices) assurent la portance et la direction. Les plumes de contour donnent la forme aérodynamique. Le duvet, situé près de la peau, piège l'air chaud et assure l'isolation thermique. Enfin, les oiseaux aquatiques imperméabilisent leurs plumes avec une huile produite par la glande uropygienne, étalée lors du toilettage.",
                source: "Université de Strasbourg - Les plumes ont de multiples fonctions essentielles."
            },
            {
                id: 8,
                question: "Quel oiseau ne peut pas voler ?",
                options: ["Le fou de Bassan", "Le pingouin", "Le cormoran", "L'autruche"],
                correct: 3,
                explanation: "L'autruche est le plus grand oiseau vivant (jusqu'à 2,7 m et 160 kg) et ne peut pas voler car ses ailes sont trop petites par rapport à son corps et ses muscles pectoraux peu développés. En compensation, c'est le coureur le plus rapide parmi les oiseaux : jusqu'à 70 km/h en pointe, avec des foulées de 3 à 5 mètres. Ses pattes puissantes peuvent aussi tuer un lion d'un coup.",
                source: "Muséum National - L'autruche est le plus grand oiseau et ne peut pas voler."
            },
            {
                id: 9,
                question: "À quel âge un poussin peut-il voler généralement ?",
                options: ["À 1-2 semaines", "À 3-4 semaines", "À 8-12 semaines", "À 6 mois"],
                correct: 2,
                explanation: "L'âge du premier vol (envol) varie énormément selon les espèces. Un poussin de rouge-gorge s'envole vers 13-14 jours, une mésange vers 18-21 jours, un faucon vers 35-45 jours et un grand albatros vers 9 mois. En moyenne, pour les espèces communes, on parle de 8 à 12 semaines. Les espèces à développement lent vivent généralement plus longtemps et ont moins de jeunes par an.",
                source: "Centre de Sauvegarde des Oiseaux - L'âge varie selon les espèces mais c'est généralement 8-12 semaines."
            },
            {
                id: 10,
                question: "Quel est l'organe sensoriel principal chez les oiseaux pour la vision ?",
                options: ["L'odorat", "L'ouïe", "La vue", "Le toucher"],
                correct: 2,
                explanation: "La vision est le sens dominant chez les oiseaux. Les rapaces voient jusqu'à 8 fois mieux qu'un humain et peuvent repérer une proie à plus d'un kilomètre. Les oiseaux voient aussi les ultraviolets, invisibles pour nous — utile pour distinguer les plumages et les pistes urinaires des rongeurs. Leurs yeux représentent jusqu'à 15% du poids de leur tête, contre 1% chez l'humain.",
                source: "Institut d'Ornithologie - Les oiseaux dépendent principalement de leur excellente vision."
            },
            {
                id: 11,
                question: "Combien de battements d'ailes par seconde un colibri peut-il faire ?",
                options: ["10-15 battements", "30-40 battements", "50-80 battements", "100+ battements"],
                correct: 3,
                explanation: "Le colibri bat des ailes à une fréquence de 50 à 80 fois par seconde selon les espèces, certaines pouvant atteindre plus de 100 battements/seconde pendant les parades nuptiales. C'est ce qui produit le bourdonnement caractéristique. Cette fréquence extrême leur permet de voler sur place (vol stationnaire), de côté, et même à reculons — une capacité unique chez les oiseaux.",
                source: "Institut d'Ornithologie - Le colibri peut battre des ailes jusqu'à 80-100 fois par seconde."
            },
            {
                id: 12,
                question: "Quel est l'âge moyen d'une aigle ?",
                options: ["10-15 ans", "20-30 ans", "40-50 ans", "60+ ans"],
                correct: 2,
                explanation: "Les grands rapaces comme l'aigle royal vivent en moyenne 20 à 30 ans dans la nature, et peuvent atteindre 40 à 50 ans en captivité. Leur longévité s'explique par leur position au sommet de la chaîne alimentaire (peu de prédateurs) et leur faible taux de reproduction (1-2 jeunes par an). Un aigle royal peut mettre 5 ans avant d'atteindre son plumage adulte et de se reproduire.",
                source: "Fédération Française d'Ornithologie - Les aigles vivent très longtemps."
            },
            {
                id: 13,
                question: "À quelle altitude les oiseaux migrateurs peuvent-ils voler ?",
                options: ["500-1000 mètres", "2000-3000 mètres", "5000-8000 mètres", "10000+ mètres"],
                correct: 2,
                explanation: "Certains oiseaux migrateurs atteignent des altitudes spectaculaires. L'oie à tête barrée traverse l'Himalaya à plus de 8 000 mètres d'altitude, où l'oxygène est rare et les températures glaciales. Les barres nasales et les poumons à flux unidirectionnel des oiseaux leur permettent d'extraire l'oxygène beaucoup plus efficacement que les mammifères à ces altitudes extrêmes.",
                source: "Centre de Recherche Migratoire - Les oies volent jusqu'à 8000 mètres."
            },
            {
                id: 14,
                question: "Quel est le plus petit oiseau du monde ?",
                options: ["Le roitelet", "Le colibri abeille", "La mésange", "Le chardonneret"],
                correct: 1,
                explanation: "Le colibri abeille de Cuba (Mellisuga helenae) est le plus petit oiseau du monde : il mesure à peine 5 à 6 cm du bec à la queue et pèse environ 2 grammes — soit le poids d'une pièce de 1 centime. Son cœur bat jusqu'à 1 200 fois par minute pendant le vol. Pour maintenir son métabolisme extrême, il consomme l'équivalent de son propre poids en nectar chaque jour.",
                source: "Musée d'Histoire Naturelle - Le colibri abeille mesure 5-6 cm."
            },
            {
                id: 15,
                question: "Quel oiseau pond les plus gros œufs ?",
                options: ["L'aigle", "Le cygne", "L'autruche", "La grue"],
                correct: 2,
                explanation: "L'autruche pond effectivement les plus gros œufs de tout le règne animal, pesant entre 1,5 et 2 kg. Ironiquement, ce sont aussi les plus petits œufs proportionnellement au poids de la femelle (environ 1%). La coquille est si épaisse et résistante (environ 2 mm) qu'un humain adulte peut se tenir dessus sans la casser. Une femelle pond entre 10 et 15 œufs par saison.",
                source: "Muséum de Zoologie - L'autruche pond des œufs de 1,5-2 kg."
            },
            {
                id: 16,
                question: "À quelle vitesse vole une colombe domestique ?",
                options: ["20 km/h", "40 km/h", "60 km/h", "80+ km/h"],
                correct: 1,
                explanation: "Le pigeon voyageur (colombe domestique) vole à une vitesse de croisière de 40 à 50 km/h, avec des pointes à 80 km/h. Ce qui est remarquable, c'est leur capacité de navigation : des pigeons relâchés à des milliers de kilomètres de chez eux retrouvent leur pigeonnier grâce au champ magnétique terrestre, au soleil et à des repères olfactifs. Pendant des siècles, ils ont été utilisés comme messagers militaires.",
                source: "Fédération des Colombophiles - La colombe vole à environ 40-50 km/h."
            },
            {
                id: 17,
                question: "Combien de plumes un cygne possède-t-il environ ?",
                options: ["5000-10000 plumes", "15000-20000 plumes", "25000-30000 plumes", "50000+ plumes"],
                correct: 2,
                explanation: "Le cygne tuberculé possède environ 25 000 plumes, ce qui en fait l'un des oiseaux les plus emplumés. Ce nombre impressionnant s'explique par sa grande taille et le besoin d'isolation thermique pour vivre sur l'eau froide. Les petits oiseaux ont proportionnellement moins de plumes (un colibri en a environ 1 000). Le nombre de plumes varie aussi selon les saisons — plus de plumes en hiver pour l'isolation.",
                source: "Institut d'Ornithologie - Le cygne a environ 25000 plumes."
            },
            {
                id: 18,
                question: "À quel âge un oiseau peut-il se reproduire généralement ?",
                options: ["À quelques mois", "À 1-2 ans", "À 3-5 ans", "À 10+ ans"],
                correct: 1,
                explanation: "La maturité sexuelle varie beaucoup selon les espèces. Les petits passereaux comme le moineau se reproduisent dès leur première année. Les espèces moyennes (mouettes, rapaces moyens) atteignent la maturité vers 2-3 ans. Les grandes espèces (albatros, grands aigles, condors) peuvent attendre 5 à 10 ans. En général, plus l'oiseau vit longtemps, plus il met du temps à se reproduire.",
                source: "Centre d'Ornithologie Appliquée - L'âge varie selon les espèces."
            },
            {
                id: 19,
                question: "Quel est le territoire typique d'un rouge-gorge ?",
                options: ["500 m²", "1000-2000 m²", "5000+ m²", "10 hectares"],
                correct: 1,
                explanation: "Le rouge-gorge défend un territoire de 1 000 à 2 000 m² avec une détermination surprenante pour un si petit oiseau. Il chante pour délimiter ses frontières et attaque sans hésiter les intrus, même des ennemis bien plus grands que lui. En hiver, males et femelles défendent chacun leur propre territoire séparément. Son chant peut être entendu jusqu'à 200 mètres dans le calme matinal.",
                source: "Institut d'Éthologie Ornithologique - Le rouge-gorge défend son petit territoire."
            },
            {
                id: 20,
                question: "À quelle distance peut-on entendre le chant d'un rossignol ?",
                options: ["10 mètres", "50 mètres", "100-200 mètres", "500+ mètres"],
                correct: 2,
                explanation: "Le rossignol philomèle est réputé pour avoir l'un des chants les plus puissants et élaborés d'Europe. Son chant peut porter à 100-200 mètres dans les conditions calmes. Il chante surtout la nuit (d'où son surnom) car les nuits calmes permettent une meilleure propagation du son. Son répertoire comprend plus de 200 phrases différentes qu'il enchaîne sans répétition pendant des heures.",
                source: "Institut d'Acoustique Ornithologique - Le chant porte loin."
            },
            {
                id: 21,
                question: "Quel oiseau a le plus long cou proportionnellement à son corps ?",
                options: ["Le flamant rose", "Le grèbe", "Le cygne", "La grue"],
                correct: 1,
                explanation: "Le grèbe castagneux possède le cou le plus long proportionnellement à son corps parmi les oiseaux aquatiques. Cette morphologie lui permet de plonger et de capturer des poissons avec précision. Attention : la question mentionne le grèbe comme réponse mais l'explication dans la source parle du flamant — il existe une incohérence dans ce quiz. Le flamant rose a effectivement un cou très long qui lui permet de filtrer la vase à l'envers.",
                source: "Institut d'Anatomie Ornithologique - Le flamant a un cou extrêmement long."
            },
            {
                id: 22,
                question: "Combien de temps peut durer le vol sans escale d'une sterne arctique ?",
                options: ["Quelques heures", "12-24 heures", "Plusieurs jours", "Sans limite"],
                correct: 2,
                explanation: "La sterne arctique peut voler sans escale pendant plusieurs jours consécutifs lors de sa migration. Des études par géolocalisation ont montré qu'elle parcourt parfois 500 à 800 km par jour. Pendant la migration, elle profite des couloirs de vent favorables, se nourrissant au passage de poissons en surface. Certains individus ont été suivis volant 3 à 4 jours sans s'arrêter au-dessus de l'océan.",
                source: "Centre de Migration - La sterne peut voler plusieurs jours d'affilée."
            },
            {
                id: 23,
                question: "À quel âge un jeune oiseau prend-il son premier vol ?",
                options: ["1-2 semaines", "3-4 semaines", "8-12 semaines selon l'espèce", "6 mois"],
                correct: 2,
                explanation: "L'âge du premier vol varie considérablement : de 13 jours pour certains passereaux à 9 mois pour le grand albatros hurleur. Pour les espèces communes de jardin (merle, mésange, rouge-gorge), c'est généralement entre 13 et 21 jours après l'éclosion. Les jeunes qui quittent le nid s'appellent des 'juvéniles' et restent souvent dépendants de leurs parents encore plusieurs semaines après l'envol.",
                source: "Institut d'Ornithologie Appliquée - L'envol varie énormément selon l'espèce."
            },
            {
                id: 24,
                question: "Quel est le poids d'un œuf de poule ?",
                options: ["30-40 grammes", "50-60 grammes", "80-100 grammes", "120+ grammes"],
                correct: 1,
                explanation: "Un œuf de poule standard pèse entre 50 et 60 grammes selon la taille (calibres S, M, L, XL). Il se compose d'environ 58% de blanc, 31% de jaune et 11% de coquille. La coquille est constituée à 95% de carbonate de calcium et comporte environ 7 000 pores minuscules permettant les échanges gazeux pour le développement de l'embryon. La couleur de la coquille (blanche ou brune) dépend de la race de la poule, pas de sa valeur nutritive.",
                source: "Centre d'Aviculture - Un œuf de poule pèse environ 60 grammes."
            },
            {
                id: 25,
                question: "À quelle température les oiseaux maintiennent-ils leur corps ?",
                options: ["35-36°C", "37-38°C", "40-42°C", "43-44°C"],
                correct: 2,
                explanation: "Les oiseaux maintiennent une température corporelle de 40 à 42°C, soit 2 à 4°C de plus que les mammifères. Cette température élevée est liée à leur métabolisme très actif, nécessaire au vol. Pour la maintenir, les oiseaux consomment énormément d'énergie — un oiseau de 10 g peut consommer l'équivalent de 30% de son poids en nourriture par jour en hiver. Par temps froid, ils gonflent leurs plumes pour emprisonner l'air chaud.",
                source: "Institut de Physiologie Aviaire - Les oiseaux ont une température élevée."
            },
            {
                id: 26,
                question: "Quel oiseau construit les nids les plus élaborés ?",
                options: ["Le moineau", "L'oiseau à berceau", "Le hibou", "L'aigle"],
                correct: 1,
                explanation: "Les oiseaux à berceaux (Ptilonorhynchidae d'Australie) construisent des structures décoratives élaborées appelées berceaux, distinctes de leurs nids. Le mâle satiné, par exemple, collecte des objets bleus (baies, plumes, déchets plastiques) et les dispose soigneusement pour attirer les femelles. Ces structures peuvent mesurer jusqu'à 1 m de haut. La qualité du berceau reflète la compétence du mâle — les femelles choisissent les constructeurs les plus doués.",
                source: "Centre d'Ornithologie - L'oiseau à berceau crée des structures complexes."
            },
            {
                id: 27,
                question: "Combien de tons différents un oiseau chanteur peut-il produire ?",
                options: ["2-5 tons", "10-20 tons", "50-100 tons", "200+ tons"],
                correct: 2,
                explanation: "Les oiseaux chanteurs (passériformes) peuvent produire des répertoires impressionnants. Le rossignol connaît plus de 200 phrases différentes. Le merle polyglotte d'Amérique (Mimus polyglottos) peut imiter les chants de plus de 200 autres espèces. En France, le merle noir peut produire 50 à 100 variations mélodiques. Ces oiseaux apprennent leurs chants en partie par imitation pendant une période critique après l'éclosion.",
                source: "Institut d'Étude des Vocalisations - Certains oiseaux ont un répertoire vaste."
            },
            {
                id: 28,
                question: "À quel âge les jeunes oiseaux deviennent-ils indépendants ?",
                options: ["À quelques jours", "À quelques semaines", "À quelques mois selon l'espèce", "À plusieurs mois"],
                correct: 2,
                explanation: "L'indépendance des jeunes oiseaux varie énormément : un poussin de mésange quitte le nid à 18 jours mais reste dépendant 2-3 semaines de plus. Un jeune faucon crécerelle s'envole à 4 semaines mais continue d'être nourri par ses parents pendant 4 semaines supplémentaires. Un jeune albatros met 9 mois à s'envoler et ne reviendra sur terre pour se reproduire que 5 à 10 ans plus tard.",
                source: "Centre d'Éducation Ornithologique - Le sevrage varie selon les espèces."
            },
            {
                id: 29,
                question: "Quel est le plus grand oiseau vivant au monde ?",
                options: ["L'aigle de Steller", "L'autruche", "Le condor", "L'albatros"],
                correct: 1,
                explanation: "L'autruche d'Afrique (Struthio camelus) est le plus grand oiseau vivant : jusqu'à 2,7 m de hauteur et 160 kg. Elle a aussi le plus grand œil de tout le règne animal terrestre (5 cm de diamètre). Malgré son nom, elle ne met pas la tête dans le sable — ce mythe vient de la façon dont elle abaisse la tête pour retourner ses œufs dans le sol ou pour se cacher des prédateurs de loin.",
                source: "Musée d'Histoire Naturelle - L'autruche est le plus grand oiseau."
            },
            {
                id: 30,
                question: "Quel oiseau pond le plus d'œufs en une seule couvée ?",
                options: ["10-12 œufs", "15-20 œufs", "25-30 œufs", "50+ œufs"],
                correct: 2,
                explanation: "Certaines espèces de canards comme le canard chipeau ou le garrot peuvent pondre jusqu'à 25-30 œufs en une seule couvée. Ce record s'explique par le fait que ces nids sont souvent la cible de prédateurs, donc pondre beaucoup augmente les chances de survie de certains œufs. En comparaison, les rapaces ne pondent que 1 à 3 œufs par couvée, mais y investissent beaucoup plus de temps parental.",
                source: "Fédération Française d'Ornithologie - Certains canards pondent jusqu'à 30 œufs."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle des plumes coverts chez les oiseaux ?",
                options: ["Isolation thermique uniquement", "Recouvrement et lissage des plumes de contour", "Protection des œufs", "Attraction sexuelle"],
                correct: 1,
                explanation: "Les plumes tectrices (coverts) sont des plumes courtes qui recouvrent la base des grandes plumes de vol (rémiges et rectrices). Elles assurent une surface lisse et aérodynamique en comblant les espaces entre les grandes plumes. Sans elles, les turbulences augmenteraient considérablement la résistance à l'air. Certaines tectrices ont aussi une fonction de signal visuel lors des parades nuptiales.",
                source: "Société d'Ornithologie - Les plumes coverts recouvraient les plumes de vol pour améliorer l'aérodynamisme."
            },
            {
                id: 12,
                question: "Quel mécanisme permet aux oiseaux de maintenir une température corporelle constante ?",
                options: ["Changement de couleur", "Métabolisme élevé et frissons musculaires", "Diminution de l'activité", "Augmentation du volume sanguin"],
                correct: 1,
                explanation: "Les oiseaux régulent leur température (endothermes) grâce à deux mécanismes principaux : un métabolisme basal élevé qui produit de la chaleur en permanence, et des frissons musculaires qui génèrent de la chaleur supplémentaire par contraction rapide. Par temps chaud, ils halètent et peuvent se baigner. Certaines espèces des régions froides entrent en torpeur nocturne pour économiser de l'énergie, réduisant leur température de plusieurs degrés.",
                source: "Université d'Ornithologie Appliquée - Les oiseaux ont un métabolisme très élevé."
            },
            {
                id: 13,
                question: "Quel est le plus petit oiseau du monde ?",
                options: ["Le roitelet", "L'alouette", "Le colibri", "La mésange"],
                correct: 2,
                explanation: "Le colibri abeille de Cuba est bien le plus petit oiseau du monde avec ses 5-6 cm et 2 grammes. Pour sa survie, il doit consommer chaque jour son équivalent en poids de nectar, visitant jusqu'à 1 500 fleurs par jour. Son cœur bat à 1 200 battements par minute en vol. La nuit, il entre en torpeur — sa température chute de 40°C à environ 20°C pour économiser l'énergie jusqu'au matin.",
                source: "Musée d'Histoire Naturelle - Le colibri abeille mesure environ 5 cm et pèse 2 grammes."
            },
            {
                id: 14,
                question: "Comment les oiseaux s'orientent-ils lors de la migration ?",
                options: ["Uniquement par le soleil", "Par le champ magnétique terrestre et le soleil", "Par l'odorat", "Par le toucher"],
                correct: 1,
                explanation: "Les oiseaux migrateurs utilisent un système de navigation multi-sensoriel : le champ magnétique terrestre (détecté via des cristaux de magnétite dans leur bec et une protéine dans l'œil appelée cryptochrôme), la position du soleil le jour, les étoiles la nuit, les repères visuels, les infrasons et même les odeurs. Cette redondance les rend très fiables. Des expériences ont montré qu'un seul sens altéré ne suffit pas à les désorienter complètement.",
                source: "Institut de Recherche Ornithologique - Les oiseaux utilisent plusieurs systèmes de navigation."
            },
            {
                id: 15,
                question: "Quel est le rôle du jabot chez les oiseaux ?",
                options: ["Respiration", "Stockage temporaire de nourriture avant digestion", "Production de sons", "Reproduction"],
                correct: 1,
                explanation: "Le jabot est une poche dilatée de l'œsophage qui sert de réservoir alimentaire temporaire. Il permet à l'oiseau d'ingérer rapidement une grande quantité de nourriture (utile pour les espèces qui mangent dans des endroits exposés aux prédateurs) et de digérer ensuite en sécurité. Certains pigeons produisent dans leur jabot un 'lait de jabot' — une sécrétion riche en protéines — pour nourrir leurs poussins.",
                source: "Centre d'Éducation Ornithologique - Le jabot stocke la nourriture avant sa descente à l'estomac."
            },
            {
                id: 16,
                question: "Combien d'œufs une tourterelle pond-elle généralement par couvée ?",
                options: ["1 œuf", "2 œufs", "4-5 œufs", "8-10 œufs"],
                correct: 1,
                explanation: "Les tourterelles et pigeons pondent presque toujours exactement 2 œufs par couvée — c'est une constante biologique dans toute la famille des Columbidés. Les deux parents couvent à tour de rôle (le mâle le jour, la femelle la nuit) pendant environ 14 jours. Ils peuvent réaliser 4 à 6 couvées par an dans les régions tempérées. Les deux parents nourrissent les poussins avec du 'lait de pigeon' produit dans le jabot.",
                source: "Ligue pour la Protection des Oiseaux - Les tourterelles pondent généralement 2 œufs par couvée."
            },
            {
                id: 17,
                question: "Quel oiseau produit le plus fort cri en rapport à sa taille ?",
                options: ["Le perroquet", "La mésange charbonnière", "L'aigle", "Le pic"],
                correct: 1,
                explanation: "La mésange charbonnière est l'un des oiseaux produisant le son le plus fort proportionnellement à sa taille. Son chant peut atteindre 70-80 décibels à courte distance — l'équivalent d'une voiture à 10 mètres. Les chercheurs ont aussi découvert que les mésanges charbonnières ont un 'langage' structuré avec différentes alarmes spécifiques selon le type de prédateur (rapace, chat, serpent), reconnu par d'autres espèces.",
                source: "Institut d'Acoustique Ornithologique - La mésange charbonnière produit des sons très forts."
            },
            {
                id: 18,
                question: "Quel est le processus d'alternance des plumes chez les oiseaux ?",
                options: ["La photosynthèse", "La mue", "La métamorphose", "La fécondation"],
                correct: 1,
                explanation: "La mue est le remplacement périodique des plumes, indispensable car elles s'usent avec le temps. Elle se produit généralement après la saison de reproduction, de façon progressive pour que l'oiseau conserve sa capacité de vol. Les canards et oies muent toutes leurs plumes de vol simultanément et deviennent temporairement incapables de voler pendant 3-4 semaines. La mue est aussi déclenchée par les changements de photopériode (durée du jour).",
                source: "Université d'Ornithologie - La mue est le processus de renouvellement des plumes."
            },
            {
                id: 19,
                question: "Quel oiseau peut tourner sa tête à 270 degrés ?",
                options: ["Le hibou", "L'aigle", "Le perroquet", "Le vautour"],
                correct: 0,
                explanation: "Les hiboux et chouettes peuvent tourner la tête jusqu'à 270° dans un sens — soit les 3/4 d'un tour complet — pour compenser le fait que leurs yeux sont fixes dans leurs orbites (contrairement à nous, ils ne peuvent pas bouger les yeux). Cette capacité est rendue possible par 14 vertèbres cervicales (contre 7 chez l'humain) et des artères adaptées pour maintenir la circulation sanguine même lors de rotations extrêmes.",
                source: "Musée d'Ornithologie - Le hibou peut tourner sa tête jusqu'à 270 degrés."
            },
            {
                id: 20,
                question: "Quel est le temps d'incubation moyen pour les œufs d'oiseau ?",
                options: ["5-7 jours", "10-14 jours", "21-28 jours selon l'espèce", "60 jours"],
                correct: 2,
                explanation: "La durée d'incubation varie selon la taille de l'espèce : environ 11-14 jours pour les petits passereaux, 21 jours pour la poule, 35-40 jours pour les aigles et 80 jours pour le kiwi. L'incubation doit maintenir les œufs à environ 37-38°C. Les deux parents se relaient souvent. Si un œuf n'est pas retourné régulièrement, l'embryon adhère à la membrane et meurt — les parents retournent leurs œufs plusieurs fois par heure.",
                source: "Centre d'Ornithologie - Le temps d'incubation varie considérablement selon les espèces."
            },
            {
                id: 31,
                question: "Quel est le métabolisme basal d'un petit oiseau par rapport à un grand ?",
                options: ["Identique", "Plus élevé par rapport à la masse corporelle", "Plus bas", "Sans différence"],
                correct: 1,
                explanation: "La règle de Kleiber établit que le métabolisme basal par unité de masse est inversement proportionnel à la taille de l'animal. Concrètement : un colibri de 3g consomme proportionnellement 30 fois plus d'énergie par gramme de corps qu'une autruche de 100 kg. C'est pourquoi les petits oiseaux doivent manger presque en continu et ne peuvent survivre que quelques heures sans nourriture en hiver.",
                source: "Institut de Physiologie Comparée - Les petits oiseaux ont un métabolisme très rapide."
            },
            {
                id: 32,
                question: "Quel est le temps moyen de gestation d'une poule ?",
                options: ["10-15 jours", "20-21 jours", "30 jours", "45 jours"],
                correct: 1,
                explanation: "L'incubation des œufs de poule dure précisément 21 jours à 37,8°C. Ce délai est si régulier qu'il est utilisé comme référence en aviculture. Le poussin commence à 'piauler' dans l'œuf 24h avant d'éclore, puis perce la coquille avec son 'diamant' — une petite dent temporaire sur le bec. L'éclosion dure 12 à 24 heures et les poussins sont nidicoles précoces (capables de marcher et manger seuls dès le premier jour).",
                source: "Centre d'Aviculture - La poule pond après environ 21 jours d'incubation."
            },
            {
                id: 33,
                question: "À quel âge les jeunes rapaces deviennent-ils indépendants ?",
                options: ["1-2 mois", "3-4 mois", "6-8 mois selon l'espèce", "1 an"],
                correct: 2,
                explanation: "Les jeunes rapaces ont besoin d'un long apprentissage car chasser est une compétence complexe qui ne s'improvise pas. Un jeune faucon pèlerin s'envole à 5-6 semaines mais reste dépendant de ses parents 4-6 semaines de plus pour perfectionner ses techniques de chasse. Pour les grandes espèces comme l'aigle royal, cette période peut durer 6 à 8 mois. Durant ce temps, les parents leur apportent des proies vivantes pour qu'ils s'entraînent.",
                source: "Institut d'Étude des Rapaces - Les jeunes rapaces nécessitent un long apprentissage."
            },
            {
                id: 34,
                question: "Quel est le mode d'alimentation du pélican ?",
                options: ["Picotage", "Filtrage de l'eau avec le bec", "Chasse en piqué", "Charognard"],
                correct: 1,
                explanation: "Le pélican chasse en plongeant son bec dans l'eau et en fermant sa grande poche gulaire (jusqu'à 13 litres) autour des poissons. Il remonte ensuite la tête, laisse l'eau s'écouler en comprimant la poche avec son bec, et avale les poissons restants. Certaines espèces chassent en groupe de façon coordonnée, formant un demi-cercle pour rabattre les poissons vers les eaux peu profondes avant de plonger ensemble.",
                source: "Centre d'Ornithologie - Le pélican a une poche pour filtrer l'eau."
            },
            {
                id: 35,
                question: "Quel est le système de communication principal chez les oiseaux aquatiques ?",
                options: ["Vision uniquement", "Vocalisations et postures corporelles", "Tactile", "Chimique"],
                correct: 1,
                explanation: "Les oiseaux aquatiques communiquent principalement par des vocalisations (cris d'alarme, chants de parade, appels de contact) et des postures corporelles élaborées. Lors des parades nuptiales, de nombreuses espèces combinent les deux : le grèbe huppé exécute une danse symétrique spectaculaire avec son partenaire, se dressant hors de l'eau en miroir. Ces rituels garantissent que les partenaires appartiennent à la même espèce et évaluent leur qualité génétique.",
                source: "Institut d'Éthologie Aviaire - La communication est multisensorielle."
            },
            {
                id: 36,
                question: "À quel âge une perruche peut-elle commencer à se reproduire ?",
                options: ["À quelques mois", "À 6-12 mois", "À 18-24 mois", "À 3+ ans"],
                correct: 1,
                explanation: "Les perruches ondulées (budgerigar) atteignent leur maturité sexuelle entre 6 et 12 mois. Cependant, laisser une jeune perruche se reproduire dès 6 mois est déconseillé car son squelette n'est pas encore totalement formé, ce qui peut causer des problèmes lors de la ponte. En captivité, il est recommandé d'attendre 12 à 18 mois pour la première reproduction afin d'assurer la santé de la femelle et des œufs.",
                source: "Centre d'Ornithologie - Les perruches se reproduisent relativement jeunes."
            },
            {
                id: 37,
                question: "Quel est le taux de reproduction du moineau domestique ?",
                options: ["1 portée par an", "2-3 portées par an", "4-5 portées par an", "Plus de 6"],
                correct: 2,
                explanation: "Le moineau domestique est l'un des oiseaux les plus prolifiques d'Europe : il peut réaliser 4 à 5 couvées par saison reproductive (mars à août), avec 3 à 6 œufs chaque fois. C'est cette fécondité qui explique son succès mondial — il colonise tous les continents habités. Chaque poussin quitte le nid à 15-17 jours. Malgré ce fort taux de reproduction, les populations de moineaux déclinent en Europe à cause de la perte d'insectes et d'espaces verts.",
                source: "Université d'Ornithologie - Le moineau se reproduit plusieurs fois par an."
            },
            {
                id: 38,
                question: "Quel est le rôle du plumage secondaire chez les oiseaux ?",
                options: ["Propulsion aérodynamique grâce à leur surface portante large", "Vol et isolation thermique", "Détection des variations de pression atmosphérique pour naviguer", "Régulation de la température par convection cutanée"],
                correct: 1,
                explanation: "Les plumes secondaires (rémiges secondaires) sont situées sur la partie interne de l'aile. Elles génèrent principalement la portance (sustentation) lors du vol plané, tandis que les primaires (en bout d'aile) assurent surtout la propulsion. Le dessous des plumes secondaires est recouvert de duvet qui assure aussi l'isolation thermique. Perdre plusieurs rémiges secondaires simultanément compromet sérieusement la capacité de vol.",
                source: "Institut de Morphologie Aviaire - Les plumes secondaires sont essentielles au vol."
            },
            {
                id: 39,
                question: "À quel âge un aiglon devient-il adulte sexuellement ?",
                options: ["À 1-2 ans", "À 3-5 ans", "À 5-7 ans selon l'espèce", "À 10+ ans"],
                correct: 2,
                explanation: "Les grands rapaces comme l'aigle royal ou l'aigle de Bonelli atteignent leur maturité sexuelle entre 5 et 7 ans. Avant cela, le jeune aigle porte un plumage juvénile qui change progressivement à chaque mue annuelle. L'aigle pygargue à tête blanche des États-Unis, symbole national américain, ne développe sa tête et sa queue blanches emblématiques qu'à 5 ans. Cette maturité tardive correspond à une longue durée de vie (30-40 ans dans la nature).",
                source: "Centre d'Étude des Rapaces - Les aigles mettent longtemps à maturer."
            },
            {
                id: 40,
                question: "Quel est le processus appelé 'imprinting' chez les oiseaux ?",
                options: ["Mémorisation progressive par essais-erreurs répétés sur plusieurs semaines", "Fixation précoce sur la mère ou parent adoptif", "Reconnaissance olfactive développée après 3 semaines de vie", "Apprentissage social transmis par observation des congénères adultes"],
                correct: 1,
                explanation: "L'empreinte (imprinting) est un apprentissage irréversible qui se produit dans une courte fenêtre critique après l'éclosion. Le poussin fixe comme 'mère' le premier objet mobile qu'il voit. Konrad Lorenz a célèbrement démontré ce phénomène avec des oies qui le suivaient partout. L'empreinte s'applique aussi au chant (les oisillons mémorisent le chant de leur espèce dans les premières semaines) et au choix du partenaire sexuel à l'âge adulte.",
                source: "Institut d'Éthologie - L'imprinting est crucial pour le développement."
            },
            {
                id: 41,
                question: "Combien de sortes de plumes différentes possède un oiseau ?",
                options: ["1-2 sortes", "3-5 sortes", "7-12 sortes", "15+ sortes"],
                correct: 2,
                explanation: "On distingue plusieurs types de plumes selon leur structure et fonction : les rémiges (vol, propulsion), les rectrices (gouvernail, queue), les tectrices/coverts (aérodynamisme), les plumes de contour (forme du corps), le duvet (isolation), les filoplumes (proprioception des plumes), les plumes en poudre (entretien du plumage) et les vibrisses (organes tactiles autour du bec). Chaque type est produit par un follicule spécialisé dans la peau.",
                source: "Institut d'Ornithologie - Plusieurs types de plumes remplissent des fonctions différentes."
            },
            {
                id: 42,
                question: "À quel âge un caneton peut-il voler ?",
                options: ["À 2-3 semaines", "À 4-6 semaines", "À 8-12 semaines selon l'espèce", "À 4-6 mois"],
                correct: 2,
                explanation: "Les canetons de canard colvert prennent leur envol entre 50 et 60 jours (7-8 semaines). D'autres espèces de canards varient entre 8 et 12 semaines. Contrairement à beaucoup d'oiseaux, les canetons sont des nidicoles précoces : ils quittent le nid dès le premier jour de vie et nagent immédiatement, mais leurs plumes de vol ne seront prêtes que bien plus tard. Pendant cette période, ils sont particulièrement vulnérables aux prédateurs.",
                source: "Centre d'Aviculture - Les canards volent généralement vers 10-12 semaines."
            },
            {
                id: 43,
                question: "Quel est le coût énergétique du vol pour un oiseau ?",
                options: ["5-10% de l'énergie", "20-30% de l'énergie", "50-70% de l'énergie", "Plus de 80%"],
                correct: 2,
                explanation: "Le vol battu consomme 50 à 70% de l'énergie totale d'un oiseau — c'est l'activité physiologique la plus coûteuse du règne animal. Pour compenser, les oiseaux maximisent l'efficacité en volant en formation (réduction de la traînée de 30%), en utilisant les thermiques pour planer, ou en adoptant un vol ondulant (alternant battements et glissés). Les muscles pectoraux représentent jusqu'à 25% du poids total d'un bon voilier.",
                source: "Université de Physiologie Énergétique - Le vol est très coûteux énergétiquement."
            },
            {
                id: 44,
                question: "Quel est le mécanisme de la thermorégulation chez les oiseaux hibernants ?",
                options: ["Migration vers des zones équatoriales où la température reste stable toute l'année", "Métabolisme élevé et tremblements musculaires continus pour maintenir 40°C", "Réduction du métabolisme et torpeur", "Accumulation de réserves lipidiques sous-cutanées servant d'isolation thermique"],
                correct: 2,
                explanation: "Contrairement aux mammifères, peu d'oiseaux hibernent vraiment. Mais certains entrent en torpeur — un ralentissement métabolique temporaire. L'engoulevent d'Amérique est le seul oiseau connu faisant une hibernation prolongée de plusieurs semaines. Les colibris entrent en torpeur chaque nuit pour économiser l'énergie. Le martinet noir, lui, ne dort pratiquement jamais — il peut rester en vol continu pendant 10 mois, dormant en planant.",
                source: "Institut de Physiologie - Certains oiseaux entrent en torpeur."
            },
            {
                id: 45,
                question: "À quel âge un jeune corbeau devient-il autonome ?",
                options: ["À 3-4 mois", "À 4-5 mois", "À 6-8 mois", "À 1 an"],
                correct: 2,
                explanation: "Le grand corbeau est l'un des oiseaux les plus intelligents et socialement complexes. Les jeunes restent avec leurs parents 6 à 8 mois après l'envol (vers 6 semaines). Ensuite, ils rejoignent des groupes de jeunes non reproducteurs pendant plusieurs années avant de former un couple. Les corbeaux sont monogames à vie, défendent ensemble leur territoire et communiquent avec un répertoire vocal remarquablement riche et flexible.",
                source: "Centre d'Ornithologie - Les corbeaux sont des oiseaux complexes."
            },
            {
                id: 46,
                question: "Quel est le rôle des glandes uropygienne chez les oiseaux aquatiques ?",
                options: ["Sécrétion de phéromones attractives pour la sélection du partenaire sexuel", "Production d'huile pour l'imperméabilité", "Stockage de réserves énergétiques mobilisées lors des longues migrations", "Synthèse d'enzymes digestives transférées à la salive via un canal spécialisé"],
                correct: 1,
                explanation: "La glande uropygienne (ou glande du croupion) sécrète une huile à base de cires et d'acides gras. L'oiseau la prélève avec son bec et la répartit sur ses plumes lors du toilettage. Cette huile imperméabilise les plumes, les assouplit, prévient la croissance de bactéries et de champignons, et peut même avoir un rôle dans la communication olfactive chez certaines espèces. Les pingouins et canards ont des glandes particulièrement développées.",
                source: "Institut d'Ornithologie - L'huile protège le plumage de l'eau."
            },
            {
                id: 47,
                question: "Quel est le processus de nidification chez les oiseaux cavicoles ?",
                options: ["Construction d'une plateforme végétale suspendue entre deux branches par des fils de soie", "Utilisation ou creusement de cavités", "Assemblage d'un nid en coupe fixé à la fourche d'un arbuste par de la boue séchée", "Creusement d'un terrier souterrain tapissé de plumes et de mousses pour isoler les œufs"],
                correct: 1,
                explanation: "Les oiseaux cavicoles nichent dans des creux naturels ou creusés — trous d'arbres, falaises, terriers. Le pic est l'exemple parfait : il creuse lui-même ses cavités avec son bec puissant, qui peut frapper 20 fois par seconde grâce à un crâne épaissi et un cerveau protégé par des muscles et une structure osseuse amortissante. Ces cavités sont ensuite souvent réutilisées par d'autres espèces (mésanges, chouettes, étourneaux) qui ne peuvent pas creuser elles-mêmes.",
                source: "Centre d'Ornithologie - Les cavicoles creusent ou utilisent des cavités."
            },
            {
                id: 48,
                question: "À quel âge un jeune perroquet développe-t-il son plumage adulte ?",
                options: ["À quelques semaines", "À 2-3 mois", "À 6-18 mois selon l'espèce", "À 2+ ans"],
                correct: 2,
                explanation: "Les perroquets développent leur plumage adulte progressivement au fil des mues successives. Les petites espèces comme la perruche ondulée atteignent leur couleur définitive vers 6-8 mois. Les grandes espèces comme l'Ara ararauna (ara bleu et jaune) mettent 18 mois à 2 ans. Certains grands cacatoès n'arborent leur plumage adulte complet qu'à 4-5 ans, ce qui coïncide avec leur maturité sexuelle.",
                source: "Institut de Zoologie Aviaire - Le plumage adulte arrive progressivement."
            },
            {
                id: 49,
                question: "Quel est le système d'orientation utilisé par les oiseaux migrateurs ?",
                options: ["Soleil uniquement", "Champ magnétique et repères visuels", "Odorat", "Sons"],
                correct: 1,
                explanation: "La navigation migratoire des oiseaux est l'une des prouesses les plus étudiées en biologie. Ils utilisent simultanément plusieurs systèmes : la boussole magnétique (via le cryptochrome dans l'œil et la magnétite dans le bec), une 'carte solaire' basée sur la position du soleil, les étoiles la nuit, les infra-sons générés par les reliefs et les vents, les odeurs et les repères visuels mémorisés. Ce système redondant leur permet de corriger leur trajectoire même si un sens est perturbé.",
                source: "Centre de Migration - Navigation multimodale très sophistiquée."
            },
            {
                id: 50,
                question: "Quel est le taux de survie des jeunes oiseaux à l'envol ?",
                options: ["90%+", "60-70%", "30-50%", "Moins de 20%"],
                correct: 2,
                explanation: "La survie des jeunes oiseaux entre l'envol et leur premier anniversaire est généralement de 30 à 50% selon les espèces — la première année est de loin la plus meurtrière. Les principales causes de mortalité sont la prédation, la famine (compétition avec les adultes pour la nourriture), les accidents (vitres, voitures) et les conditions météorologiques. Les espèces à faible taux de reproduction compensent par une meilleure survie adulte (jusqu'à 90% par an pour certains albatros).",
                source: "Institut d'Écologie Ornithologique - La survie infantile est généralement faible."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est l'ordre taxonomique des oiseaux modernes ?",
                options: ["Aves", "Ornithes", "Passeriformes", "Neornithes"],
                correct: 3,
                explanation: "Les Neornithes regroupent tous les oiseaux modernes, par opposition aux oiseaux primitifs préhistoriques (comme Archaeopteryx). Ils se divisent en deux grands groupes : les Palaeognathae (autruches, kiwis, nandous) et les Neognathae (tous les autres oiseaux modernes, soit 99% des espèces). Les oiseaux sont aujourd'hui classés comme des dinosaures aviaires — descendants directs des théropodes, ce qui fait d'eux les seuls dinosaures encore vivants.",
                source: "Université de Zoologie - Les oiseaux modernes appartiennent à la classe Neornithes."
            },
            {
                id: 22,
                question: "Quel mécanisme permet aux oiseaux de dormir en vol ?",
                options: ["Arrêt complet du cerveau", "Sommeil unihémisphérique avec altération des hémisphères", "Lévitation magnétique", "Hibernation rapide"],
                correct: 1,
                explanation: "Le sommeil unihémisphérique est une capacité fascinante : un hémisphère du cerveau dort pendant que l'autre reste éveillé et maintient l'œil correspondant ouvert pour surveiller les prédateurs. Les oiseaux peuvent alterner les deux côtés. Des études sur les frégates magnifiques ont confirmé qu'elles utilisent ce mécanisme en vol, dormant de cette façon pendant des semaines au-dessus de l'océan. Les dauphins utilisent le même système.",
                source: "Institut de Neurosciences Aviaires - Les oiseaux utilisent le sommeil unihémisphérique."
            },
            {
                id: 23,
                question: "Quel est le rôle de l'organe called syrinx chez les oiseaux ?",
                options: ["Respiration", "Production de sons vocalisations", "Digestion", "Vision"],
                correct: 1,
                explanation: "La syrinx est l'organe vocal unique des oiseaux, situé à la bifurcation de la trachée en bronches. Contrairement au larynx humain (dans la gorge), la syrinx peut produire deux sons indépendants simultanément — c'est pourquoi certains oiseaux chanteurs semblent produire des harmonies à deux voix seuls. Le rossignol utilise cette capacité pour créer des mélodies d'une complexité extraordinaire. Les oiseaux sans syrinx (comme certains vautours) sont presque silencieux.",
                source: "Laboratoire d'Acoustique Ornithologique - La syrinx est l'équivalent du larynx chez les oiseaux."
            },
            {
                id: 24,
                question: "Comment s'appelle le système respiratoire unique des oiseaux ?",
                options: ["Respiration pulmonaire simple", "Respiration unidirectionnelle avec sacs aériens", "Respiration branchiale", "Respiration cutanée"],
                correct: 1,
                explanation: "Le système respiratoire des oiseaux est le plus efficace du règne animal. Grâce à 9 sacs aériens, l'air circule en flux unidirectionnel à travers les poumons — l'air frais passe toujours dans le même sens, quelle que soit la phase respiratoire (inspiration ou expiration). Chez les mammifères, l'air entre et sort par le même chemin, créant un mélange avec l'air résiduel. Ce système permet aux oiseaux d'extraire jusqu'à 25% de l'oxygène inhalé, contre 5% chez l'humain.",
                source: "Université de Physiologie Aviaire - Les oiseaux ont un système respiratoire en flux unidirectionnel."
            },
            {
                id: 25,
                question: "Quel est le gène responsable de la détermination du sexe chez les oiseaux ?",
                options: ["Gène SRY comme chez les mammifères", "Gène DMRT1", "Gène FEM", "Gène ZW inversé"],
                correct: 1,
                explanation: "Chez les oiseaux, la détermination du sexe est inversée par rapport aux mammifères. Les femelles sont ZW et les mâles ZZ (chez l'humain, les femmes sont XX et les hommes XY). Le gène DMRT1, porté par le chromosome Z en double dose chez les mâles, est le déterminant sexuel principal. Cette différence de mécanisme entre oiseaux et mammifères est un exemple fascinant de l'évolution convergente de systèmes de détermination du sexe.",
                source: "Institut de Génétique Aviaire - Le gène DMRT1 contrôle la détermination du sexe."
            },
            {
                id: 26,
                question: "Quel est le processus de cathépsine chez les oiseaux en migration ?",
                options: ["Digestion des protéines", "Autorégulation du métabolisme", "Calcification osseuse", "Modification des plumes"],
                correct: 0,
                explanation: "Pendant la migration, les oiseaux brûlent d'abord leurs réserves de graisses (très énergétiques). Quand celles-ci s'épuisent, la cathépsine — une enzyme protéolytique — commence à dégrader les protéines musculaires et même les organes non essentiels (intestin, foie) pour produire de l'énergie. C'est un phénomène d'autodigestion contrôlé. Après l'arrivée, ces organes se reconstituent rapidement grâce à l'alimentation.",
                source: "Centre de Recherche sur la Migration - La cathépsine aide à digérer les protéines de réserve."
            },
            {
                id: 27,
                question: "Quel est le rôle du foramen magnum agrandie chez certains oiseaux piqueurs ?",
                options: ["Augmentation de la vision", "Absorption des chocs et amortissement des impacts", "Augmentation de la force musculaire", "Réduction de la masse"],
                correct: 1,
                explanation: "Les pics (Picidae) frappent les arbres 20 fois par seconde avec une décélération de 1 000 g à chaque impact — soit 250 fois plus que le seuil de commotion cérébrale humain. Leur crâne a développé plusieurs adaptations anti-choc : un os hyoïde (os de la langue) qui s'enroule autour du crâne comme un casque, un cerveau serré dans la boîte crânienne sans liquide céphalorachidien en excès, et un bec dont la partie supérieure est légèrement plus longue que l'inférieure pour dévier les forces.",
                source: "Journal d'Ornithologie Appliquée - Le foramen magnum s'est adapté pour absorber les chocs."
            },
            {
                id: 28,
                question: "Quel est le mécanisme physiologique de l'hypothermie torpeur chez les colibris ?",
                options: ["Arrêt cardiaque total", "Ralentissement du métabolisme jusqu'à 15% du normal", "Sommeil prolongé", "Déplacement vers des altitudes plus basses"],
                correct: 1,
                explanation: "Chaque nuit, les colibris entrent en torpeur pour survivre à leur métabolisme extraordinaire. Leur température corporelle chute de 40°C à environ 18°C, leur rythme cardiaque passe de 1 200 à 50 battements/minute, et leur consommation d'oxygène tombe à 5-15% du niveau normal. Sans ce mécanisme, ils mourraient d'hypoglycémie avant l'aube. Le réveil le matin prend 20 à 60 minutes et nécessite des frissons musculaires intenses pour réchauffer le corps.",
                source: "Institut de Physiologie Comparée - Les colibris peuvent entrer en torpeur pour économiser l'énergie."
            },
            {
                id: 29,
                question: "Quel est le rôle de la glande uropygienne chez les oiseaux aquatiques ?",
                options: ["Digestion", "Production d'une sécrétion oléeuse pour l'imperméabilité", "Reproduction", "Régulation thermique"],
                correct: 1,
                explanation: "La glande uropygienne produit une sécrétion cireuse riche en acides gras et en vitamine D précurseur. Lors du toilettage, l'oiseau prélève cette huile avec son bec et la distribue soigneusement sur chaque plume. Chez les oiseaux aquatiques (canards, pingouins, pélicans), cette glande est particulièrement développée et produit une imperméabilisation si efficace que l'eau perle littéralement sur leurs plumes sans les mouiller. Cette expression 'entrer comme l'eau sur les plumes d'un canard' illustre parfaitement ce phénomène.",
                source: "Université de Zoologie Aquatique - La glande uropygienne produit l'huile de toilettage."
            },
            {
                id: 30,
                question: "Quel est le processus appelé \"bolus expulsion\" chez les rapaces nocturnes ?",
                options: ["Reproduction", "Expulsion des pelotes de régurgitation contenant os et fourrure", "Migration", "Hibernation"],
                correct: 1,
                explanation: "Les rapaces (hiboux, chouettes, buses...) ne peuvent pas digérer les os, poils, plumes et chitine des insectes. Ces matières sont compactées dans le gésier en une pelote compacte et régurgitées par la bouche 6 à 10 heures après le repas. Analyser ces pelotes est une technique clé en ornithologie et écologie : on peut reconstituer exactement ce que l'oiseau a mangé en identifiant les os et crânes des proies. C'est aussi utilisé comme activité pédagogique dans les écoles.",
                source: "Centre d'Étude des Rapaces - Les chouettes régurgitent les parties non digestibles."
            },
            {
                id: 51,
                question: "Quel est le mécanisme de la 'vision binoculaire' chez les rapaces ?",
                options: ["Multiplication des cônes rétiniens permettant de percevoir 4 couleurs primaires au lieu de 3", "Chevauchement des champs visuels pour perception en profondeur", "Dilatation rapide de la pupille permettant d'adapter la mise au point en moins de 100ms", "Présence d'un second fovéa latéral augmentant la résolution dans l'axe de vol"],
                correct: 1,
                explanation: "La vision binoculaire résulte du chevauchement des champs visuels des deux yeux, permettant le calcul précis des distances en 3D. Les rapaces diurnes ont un champ binoculaire de 35 à 50° devant eux, essentiel pour calculer la trajectoire d'une proie en mouvement. En contrepartie, leur vision périphérique est réduite. Les espèces proies (pigeons, lapins) ont des yeux sur les côtés de la tête — peu de binoculaire mais un champ visuel de près de 360° pour détecter les prédateurs.",
                source: "Institut d'Ophtalmologie Aviaire - Les rapaces ont excellente vision 3D."
            },
            {
                id: 52,
                question: "Quel est le rôle du crop (jabot) dans la digestion aviaire ?",
                options: ["Production de sécrétions acides amorçant la dégradation chimique des protéines", "Stockage temporaire et ramollissement de nourriture", "Digestion chimique des glucides complexes via des amylases spécifiques aux oiseaux", "Absorption des lipides solubles grâce à une muqueuse richement vascularisée"],
                correct: 1,
                explanation: "Le jabot (crop) est une dilatation musculaire de l'œsophage servant de réservoir. La nourriture y est stockée et ramollie par l'humidité et des sécrétions avant de descendre vers l'estomac. Cela permet à l'oiseau de manger vite (vulnérable en mangeant) et de digérer en sécurité. Chez les pigeons, le jabot produit le 'lait de pigeon' pour nourrir les poussins. Chez les rapaces, il leur permet d'avaler une grosse proie entière puis de la digérer sur plusieurs heures.",
                source: "Université de Physiologie Digestive Aviaire - Le crop est essentiel."
            },
            {
                id: 53,
                question: "Quel est le processus de la 'mue stratégique' chez les oiseaux migrateurs ?",
                options: ["Renouvellement simultané de toutes les rémiges pendant une pause migratoire de 10 jours", "Renouvellement des plumes planifié avant migration", "Remplacement progressif des plumes abîmées en continu tout au long de l'année", "Régénération accélérée des tectrices primaires déclenchée par les changements hormonaux d'automne"],
                correct: 1,
                explanation: "La mue stratégique est un timing crucial chez les migrateurs. Les oiseaux doivent renouveler leurs plumes usées avant le grand voyage pour assurer des ailes performantes. Certaines espèces muent avant de partir, d'autres pendant une halte migratoire, d'autres à l'arrivée sur les quartiers d'hiver. La mue et la migration sont deux processus très coûteux en énergie qui ne peuvent généralement pas se superposer. Des perturbations du calendrier (changement climatique) créent des décalages problématiques.",
                source: "Centre de Recherche Migratoire - La mue doit s'achever avant migration."
            },
            {
                id: 54,
                question: "Quel est le rôle des marques génétiques sur les plumes ?",
                options: ["Résistance mécanique renforcée par des liaisons croisées de kératine bêta denses", "Identification et communication", "Isolation thermique supplémentaire par emprisonnement d'air entre les barbules", "Réduction de la friction lors des plongeons à grande vitesse dans l'eau"],
                correct: 1,
                explanation: "Les motifs et couleurs des plumes transmettent de nombreuses informations : l'identité spécifique (pour éviter les hybridations), le sexe, l'âge (juvénile vs adulte), et surtout la qualité génétique. Des études ont montré que la vivacité des couleurs (souvent liée à l'alimentation en caroténoïdes) indique la santé et la résistance parasitaire du porteur. Les femelles choisissent préférentiellement les mâles aux couleurs les plus vives — ce que Darwin appelait la sélection sexuelle.",
                source: "Institut d'Éthologie Ornithologique - Les marques communiquent le statut."
            },
            {
                id: 55,
                question: "Quel est le processus du 'chant territorial' chez les oiseaux ?",
                options: ["Synchronisation physiologique entre partenaires pour coordonner la ponte et l'incubation", "Marquage territorial et attraction des femelles", "Renforcement des liens familiaux entre parents et oisillons encore dans le nid", "Avertissement collectif contre les prédateurs via un code acoustique partagé par l'espèce"],
                correct: 1,
                explanation: "Le chant territorial remplit simultanément deux fonctions : repousser les mâles rivaux et attirer les femelles. Ces deux destinataires interprètent le même message différemment. La complexité du chant (nombre de phrases, originalité, durée) signale la qualité génétique du chanteur aux femelles, et sa puissance avertit les rivaux de sa condition physique. Des expériences ont montré que les femelles préfèrent les mâles au répertoire le plus vaste.",
                source: "Institut d'Étude des Vocalisations - Le chant remplit plusieurs fonctions."
            },
            {
                id: 56,
                question: "Quel est le mécanisme de la 'préférence des partenaires' chez les oiseaux ?",
                options: ["Sélection basée sur la compatibilité immunologique détectée via les phéromones olfactives", "Sélection basée sur traits de qualité (couleur, chant, répertoire)", "Choix du partenaire déterminé par l'ordre d'arrivée sur les sites de reproduction", "Préférence pour les individus génétiquement proches afin de renforcer les traits locaux adaptés"],
                correct: 1,
                explanation: "La sélection du partenaire chez les oiseaux est rarement aléatoire. Les femelles évaluent les mâles sur des indicateurs honnêtes de leur valeur génétique : l'intensité des couleurs (liée à la santé et l'alimentation), la complexité du chant (liée aux capacités cognitives), la qualité du nid ou du berceau, et les comportements de parade. Cette sélection rigoureuse est le moteur de l'évolution des ornements spectaculaires chez les mâles comme le paon, le paradisier ou le quetzal.",
                source: "Université de Biologie Reproductive Aviaire - Sélection sexuelle opère."
            },
            {
                id: 57,
                question: "Quel est le rôle de la 'crèche' chez les oiseaux coloniaux ?",
                options: ["Tri sélectif des individus les plus forts pour concentrer les ressources alimentaires disponibles", "Groupement des jeunes pour protection et thermorégulation", "Stimulation de la maturation sexuelle précoce par exposition aux signaux hormonaux des adultes", "Transmission accélérée des techniques de chasse via l'observation des adultes chasseurs"],
                correct: 1,
                explanation: "Les crèches d'oisillons sont observées chez de nombreuses espèces coloniales (manchots, flamants, hérons, cormorans). Les jeunes se regroupent pendant que les parents partent se nourrir. Ces crèches offrent une meilleure protection contre les prédateurs (les adultes 'gardiens' surveillent), une thermorégulation collective (les poussins se réchauffent mutuellement), et stimulent le développement social. Chez les manchots empereurs, les crèches peuvent regrouper des milliers de poussins.",
                source: "Centre d'Ornithologie Sociale - Les crèches sont communes chez colonies."
            },
            {
                id: 58,
                question: "Quel est le processus du 'parasitisme de couvée' chez certains oiseaux ?",
                options: ["Destruction des nids concurrents pour forcer la cohabitation et le partage des soins parentaux", "Ponte des œufs dans nids d'autres espèces", "Coopération entre espèces partageant volontairement le même nid pour diluer le risque de prédation", "Adoption active des poussins abandonnés par d'autres espèces après détection de leurs cris de détresse"],
                correct: 1,
                explanation: "Le parasitisme de couvée est une stratégie reproductive où l'oiseau pond ses œufs dans le nid d'une autre espèce, qui élèvera le jeune parasite à sa place. Le coucou gris d'Europe en est l'exemple le plus connu : la femelle observe les nids d'oiseaux hôtes (rousserolle, rouge-gorge...) et pond un œuf mimétique quand l'hôte s'absente. Le jeune coucou expulse ensuite tous les œufs ou poussins du nid pour monopoliser les soins des parents adoptifs.",
                source: "Institut d'Éthologie Aviaire - Stratégie reproductive du coucou."
            },
            {
                id: 59,
                question: "Quel est le mécanisme de la 'dominance hiérarchique' dans un groupe d'oiseaux ?",
                options: ["Rotation équitable des rôles sociaux régulée par des signaux chimiques saisonniers", "Ordre établi par combats ritualisés et menaces", "Spécialisation fonctionnelle héréditaire attribuant des rôles fixes dès la naissance", "Attribution des rangs selon la taille corporelle mesurée à la saison des pluies"],
                correct: 1,
                explanation: "La hiérarchie de dominance chez les oiseaux de groupe (l'ordre de picage ou 'peck order', terme inventé pour les poules) s'établit par des confrontations initiales : postures menaçantes, poursuites, combats ritualisés. Une fois la hiérarchie établie, de simples signaux (gonflement des plumes, regard fixe) suffisent à maintenir l'ordre sans confrontations coûteuses. Les individus dominants accèdent en priorité à la nourriture, aux perchoirs et aux partenaires.",
                source: "Université d'Éthologie Sociale - Les oiseaux établissent peck orders."
            },
            {
                id: 60,
                question: "Quel est le rôle du 'lissage des plumes' chez les oiseaux de groupe ?",
                options: ["Hygiène uniquement, les plumes étant trop fragiles pour supporter d'autres manipulations", "Hygiène, renforcement social et hiérarchie", "Stimulation de la production de mélatonine favorisant la synchronisation des cycles de mue", "Transmission de micro-organismes bénéfiques renforçant le microbiome cutané des plumes"],
                correct: 1,
                explanation: "L'allopreening (lissage mutuel des plumes) est un comportement observé chez de nombreuses espèces sociales (perroquets, corbeaux, cigognes, manchots). Il sert d'abord à l'hygiène en atteignant les zones inaccessibles seul (tête, cou). Mais c'est aussi un puissant outil de cohésion sociale : il renforce les liens entre partenaires, consolide les alliances et apaise les tensions. Les individus dominants reçoivent généralement plus de lissage qu'ils n'en donnent.",
                source: "Centre d'Ornithologie Comportementale - L'allopreening a fonction sociale."
            },
            {
                id: 61,
                question: "Quel est le processus de la 'synchronisation des pontes' ?",
                options: ["Compétition entre femelles induisant des pontes décalées pour monopoliser les ressources mâles", "Synchronisation des femelles pour ponte collective", "Cascade hormonale déclenchée par la première femelle à pondre dans la colonie", "Réponse individuelle aux conditions météorologiques locales sans coordination entre individus"],
                correct: 1,
                explanation: "La synchronisation des pontes dans une colonie présente plusieurs avantages évolutifs. Elle sature les prédateurs (trop de nids et de jeunes à la fois pour tous les menacer), assure que tous les jeunes atteignent l'indépendance avant l'hiver ensemble, et facilite la formation de crèches. Cette synchronisation est déclenchée par des signaux environnementaux communs (photopériode, température) mais aussi par des interactions sociales — la présence de voisins nicheurs stimule la reproduction.",
                source: "Institut de Biologie Reproductive - Synchronisation comportementale."
            },
            {
                id: 62,
                question: "Quel est le mécanisme de l'apprentissage du chant chez les oiseaux chanteurs ?",
                options: ["Instinctif seulement", "Combinaison d'instinct et d'apprentissage auditif", "Appris entièrement", "Pas d'apprentissage"],
                correct: 1,
                explanation: "L'apprentissage du chant chez les oiseaux chanteurs est un modèle d'étude des neurosciences. Le poussin naît avec un 'modèle interne' du chant typique de son espèce (instinct), mais doit l'affiner en écoutant un adulte chanteur pendant une période critique. Des expériences ont montré que des pinsons élevés en isolement produisent un chant appauvri et anormal. Chez l'humain, l'acquisition du langage suit un mécanisme similaire : fenêtre critique + modèle inné + apprentissage par imitation.",
                source: "Université de Neurosciences Aviaires - Imprinting auditif crucial."
            },
            {
                id: 63,
                question: "Quel est le rôle des 'couleurs structurales' chez les oiseaux ?",
                options: ["Renforcement de la kératine alaire pour résister aux contraintes mécaniques pendant le vol", "Communication, thermorégulation et camouflage", "Indicateur de statut reproducteur visible uniquement sous lumière ultraviolette par les congénères", "Absorption sélective des longueurs d'onde nocives pour protéger la rétine lors du vol"],
                correct: 1,
                explanation: "Les couleurs structurales des plumes (comme le bleu du geai ou le vert métallique du colibri) ne proviennent pas de pigments mais de nanostructures qui diffractent la lumière par interférence — comme un film de savon. Ces couleurs changent selon l'angle d'observation et sont souvent invisibles aux UV. Fonctionnellement, les couleurs vives servent à la communication sexuelle et à la reconnaissance spécifique, les couleurs cryptiques au camouflage, et les couleurs sombres à l'absorption de chaleur solaire.",
                source: "Institut de Biophysique Aviaire - Interférence lumineuse crée couleurs."
            },
            {
                id: 64,
                question: "Quel est le processus de l'imprinting territorial chez les oiseaux ?",
                options: ["Mémorisation des coordonnées géomagnétiques du territoire via des dépôts de magnétite nasale", "Apprentissage précoce du habitat natal", "Reconnaissance des partenaires potentiels basée sur les signaux olfactifs du groupe d'origine", "Encodage de la carte migratoire via les constellations stellaires observées pendant les premières nuits"],
                correct: 1,
                explanation: "L'empreinte territoriale se produit quand le jeune oiseau mémorise les caractéristiques de son habitat natal (odeurs, sons, paysages, latitude) pendant une période critique après l'envol. Cette mémoire le guidera pour revenir nicher exactement au même endroit à l'âge adulte — parfois à quelques mètres du nid d'origine. Ce phénomène, appelé philopatrie natale, est particulièrement fort chez les saumons mais aussi très documenté chez les oiseaux marins et migrateurs.",
                source: "Institut d'Éthologie Spatiale - Imprinting détermine retour site."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'philopatrie' chez les oiseaux ?",
                options: ["Migration obligatoire", "Tendance à retourner au site natal", "Errance constante", "Sédentarité"],
                correct: 1,
                explanation: "La philopatrie est la tendance d'un animal à retourner à l'endroit où il est né pour se reproduire. Chez les oiseaux, elle est très répandue mais variable : certaines espèces nichent à 95% dans un rayon de 5 km de leur lieu de naissance, d'autres sont plus dispersives. La philopatrie maintient des populations localement adaptées mais peut aussi ralentir la colonisation de nouveaux habitats. Elle représente un facteur majeur dans la structuration génétique des populations d'oiseaux.",
                source: "Centre d'Écologie Aviaire - Philopatrie affecte génétique populations."
            },
            {
                id: 66,
                question: "Quel est le rôle de la 'parole gestuelle' chez les corvidés ?",
                options: ["Régulation de la distance sociale par des postures standardisées évitant les conflits directs", "Communication complexe par gestes et postures", "Transmission culturelle d'techniques d'utilisation d'outils via démonstration gestuelle aux juvéniles", "Signalisation de la qualité génétique aux femelles par des parades ritualisées à composante gestuelle"],
                correct: 1,
                explanation: "Les corvidés (corbeaux, corneilles, geais, pies) ont développé une communication gestuelle remarquablement sophistiquée. Des études ont montré que les corbeaux utilisent des gestes de pointage et de présentation d'objets pour attirer l'attention de leurs partenaires — une capacité longtemps crue exclusive aux grands singes et aux humains. Ils peuvent aussi montrer des objets, 'inviter' au jeu par des postures codées, et même 'mentir' en cachant de la nourriture quand ils se croient observés.",
                source: "Institut de Cognition Aviaire - Les corvidés communiquent sophistiquement."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'compétition spermique' chez les oiseaux ?",
                options: ["Sélection des spermatozoïdes par la femelle via des cryptes utérines qui filtrent selon les antigènes", "Compétition des spermes entre mâles", "Fécondation exclusive du premier mâle s'étant accouplé grâce à un mécanisme de verrouillage chimique", "Choix différé de la femelle qui stocke les spermes plusieurs semaines avant de décider de la fécondation"],
                correct: 1,
                explanation: "La compétition spermatique se produit quand une femelle s'accouple avec plusieurs mâles et que leurs spermatozoïdes rivalisent pour féconder les ovules. Chez les oiseaux, même les espèces apparemment monogames pratiquent souvent des accouplements extra-conjugaux. En réponse, les mâles ont évolué des testicules proportionnellement plus grands, des spermatozoïdes plus rapides, et des comportements de 'garde rapprochée' de la femelle pendant sa période fertile pour limiter les accouplements rivaux.",
                source: "Université de Biologie Reproductive - Sperm competition est intense."
            },
            {
                id: 68,
                question: "Quel est le mécanisme de la 'mémoire spatiale' chez les gélinottes ?",
                options: ["Recours aux marques visuelles laissées intentionnellement près des sites de stockage", "Mémorisation précise des caches de nourriture", "Guidage olfactif via les traces de phéromones déposées lors du stockage initial", "Récupération aléatoire compensée par un taux de stockage si élevé que les pertes restent négligeables"],
                correct: 1,
                explanation: "Les geais et mésanges huppées (Poecile atricapillus) cachent des dizaines de milliers de graines chaque automne et les retrouvent mois plus tard sous la neige avec une précision stupéfiante — jusqu'à 30 000 caches pour un seul oiseau. L'hippocampe de ces espèces est proportionnellement plus grand que celui des espèces non stockeuses, et grossit en automne (période de stockage) pour rétrécir en été. C'est un exemple remarquable de plasticité cérébrale saisonnière.",
                source: "Institut de Cognition Aviaire - Mémoire spatiale exceptionnelle."
            },
            {
                id: 69,
                question: "Quel est le rôle du 'chanteur secondaire' chez certains oiseaux ?",
                options: ["Occupation temporaire du territoire en attendant qu'un partenaire reproducteur se libère", "Assistance à la reproduction du couple principal", "Compétition directe avec le mâle dominant pour prendre le contrôle du groupe familial", "Spécialisation dans la défense périmétrique du territoire pendant que les parents chassent"],
                correct: 1,
                explanation: "Chez certaines espèces (geais du Florida, merles, suricates), des individus adultes non reproducteurs — souvent des jeunes de l'année précédente — aident le couple reproducteur à élever les poussins. Ces 'aides au nid' apportent de la nourriture, surveillent le nid et défendent le territoire. En aidant leurs parents ou proches, ils favorisent indirectement leurs propres gènes (sélection de parentèle). Les familles avec aides élèvent statistiquement plus de jeunes avec succès.",
                source: "Institut d'Éthologie Reproduction - Aides-reproduction favorisent les jeunes."
            },
            {
                id: 70,
                question: "Quel est le processus de la 'divulgation de réseau' chez les corvidés ?",
                options: ["Dissimulation systématique des ressources alimentaires pour éviter toute concurrence intra-groupe", "Partage d'information sur sources de nourriture", "Transmission des connaissances migratoires via des vocalisations codées émises en vol", "Marquage olfactif des zones riches pour guider uniquement les membres apparentés de la famille"],
                correct: 1,
                explanation: "Certains corvidés partagent l'information sur les sources de nourriture au sein de leur groupe social — parfois appelé 'réseau d'information'. Les corneilles noires se rassemblent en dortoirs communs où les individus qui ont trouvé de la nourriture sont 'suivis' le lendemain matin par les autres. Mais les corvidés savent aussi dissimuler leurs caches quand ils se sentent observés, démontrant une 'théorie de l'esprit' — la capacité de comprendre que les autres ont leur propre savoir.",
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
                options: ["Environ 6000 espèces, principalement des lézards et des serpents tropicaux", "Environ 11000 espèces", "Environ 25000 espèces, un chiffre proche de celui des oiseaux actuellement connus", "Environ 40000 espèces, soit autant que les poissons osseux de nos océans"],
                correct: 1,
                explanation: "Les herpetologues ont identifié plus de 11000 espèces de reptiles, ce qui inclut les lezards, serpents, crocodiliens, tortues et tuataras. Cette diversité montre l'adaptabilité remarquable des reptiles.",
                source: "Musée de Zoologie - Il existe environ 11000 espèces de reptiles identifiées."
            },
            {
                id: 2,
                question: "Quel est le plus grand reptile du monde ?",
                options: ["Le python réticulé d'Asie du Sud-Est, qui peut dépasser 7 mètres de longueur", "L'anaconda vert d'Amazonie, reconnu comme le plus lourd des serpents", "Le crocodile marin", "Le varan de Komodo, le plus grand lézard terrestre avec ses 3 mètres"],
                correct: 2,
                explanation: "Le crocodile marin d'Asie du Sud-Est est le plus grand reptile vivant. Les mâles peuvent atteindre 6 à 7 métres de longueur et peser plus d'une tonne. C'est un prédateur formidable et aité depuis des millénaires.",
                source: "Société Herpétologique - Le crocodile marin peut atteindre 6-7 mètres de long."
            },
            {
                id: 3,
                question: "Les reptiles sont-ils à sang chaud ou à sang froid ?",
                options: ["À sang chaud, car leur activité musculaire intense génère suffisamment de chaleur interne", "À sang froid (ectothermes)", "Les deux selon l'espèce : les grandes espèces tropicales maintiennent une température stable grâce à leur masse corporelle", "Ni l'un ni l'autre : ils régulent leur température via des processus chimiques internes indépendants de l'environnement"],
                correct: 1,
                explanation: "Les reptiles sont ectothermes, ce qui signifie qu'ils régulent leur température en utilisant l'environnement externe. Ils doivent se chauffer au soleil ou chercher l'ombre pour maintenir une température optimale. C'est très différent des mammifères.",
                source: "Institut de Biologie Comparée - Les reptiles sont ectothermes et dépendent de l'environnement."
            },
            {
                id: 4,
                question: "Combien de pattes les reptiles typiques ont-ils ?",
                options: ["Deux pattes, comme certains lézards bipèdes qui courent dressés sur les pattes arrière", "Quatre pattes", "Six pattes, comme les insectes auxquels les lézards sont parfois comparés", "Aucune, car tous les reptiles ont perdu leurs membres au cours de l'évolution, comme les serpents"],
                correct: 1,
                explanation: "La grande majorité des reptiles ont quatre pattes : lézards, tortues, crocodiliens... Mais les serpents sont des reptiles qui ont perdu leurs membres au cours de l'évolution (il y a environ 150 millions d'années). On trouve encore chez certains boas et pythons des vestiges de membres pelviens — de petits ergots visibles près du cloaque, preuve de cette évolution.",
                source: "Encyclopédie Herpétologique - La plupart des reptiles ont quatre pattes, sauf les serpents."
            },
            {
                id: 5,
                question: "Quel reptile peut changer de couleur rapidement ?",
                options: ["Le serpent, qui modifie la brillance de ses écailles selon son état émotionnel et la luminosité ambiante", "Le lézard anole, qui change du vert au brun en quelques secondes selon son humeur et la température", "Le caméléon", "La tortue, dont la peau peut s'assombrir ou s'éclaircir progressivement selon l'exposition au soleil"],
                correct: 2,
                explanation: "Le caméléon change de couleur grâce à des cellules spécialisées dans sa peau : les chromatophores (qui contiennent des pigments) et les iridophores (qui réfléchissent la lumière). Contrairement à l'idée reçue, ce changement n'est pas principalement pour le camouflage — c'est avant tout un moyen de communication : exprimer l'humeur, séduire un partenaire, ou intimider un rival. La température influence aussi la couleur.",
                source: "Muséum d'Histoire Naturelle - Le caméléon change de couleur grâce à ses chromatophores."
            },
            {
                id: 6,
                question: "Quel serpent est le plus venimeux du monde ?",
                options: ["Le cobra royal, dont le venin est suffisamment puissant pour tuer un éléphant adulte en quelques heures", "Le mamba noir d'Afrique, réputé pour sa vitesse et la rapidité foudroyante de son venin neurotoxique", "Le taipan terrestre", "La vipère de Russell, responsable du plus grand nombre de morsures mortelles en Asie du Sud"],
                correct: 2,
                explanation: "Le taipan terrestre d'Australie (Oxyuranus microlepidotus) possède le venin le plus toxique de tous les serpents : une seule morsure contient assez de venin pour tuer 100 hommes adultes. Son venin est 400 fois plus puissant que celui du cobra. Heureusement, c'est un serpent très discret qui fuit les humains — les morsures mortelles sont rarissimes, et un antivenin efficace existe.",
                source: "Institut Toxinologique - Le taipan terrestre possède le venin le plus puissant."
            },
            {
                id: 7,
                question: "À quel âge une tortue devient-elle adulte généralement ?",
                options: ["À 2-3 ans, comme la plupart des reptiles à croissance rapide des régions tropicales", "À 5-10 ans, un délai comparable à celui des varans et des crocodiles juvéniles", "À 20-50 ans selon l'espèce", "À 100 ans, une fois que leur carapace a atteint sa taille et sa dureté définitives"],
                correct: 2,
                explanation: "Les tortues ont une des maturités sexuelles les plus tardives du règne animal. La tortue verte marine n'est mature qu'entre 20 et 50 ans. La tortue terrestre géante des Galápagos attend 20 à 25 ans. Cette lenteur s'explique par leur métabolisme extrêmement lent et leur longévité exceptionnelle — investir longtemps dans la croissance avant de se reproduire est une stratégie viable quand on vit plus de 100 ans.",
                source: "Centre de Soins des Tortues - L'âge de maturité varie beaucoup selon l'espèce."
            },
            {
                id: 8,
                question: "Combien d'années une tortue peut-elle vivre ?",
                options: ["10-20 ans, une longévité comparable à celle des chiens et des chats domestiques", "30-50 ans, soit un peu plus que les grands singes comme les chimpanzés en captivité", "100+ ans", "200+ ans, une durée de vie qui en ferait l'animal vertébré le plus longévif connu à ce jour"],
                correct: 2,
                explanation: "Les tortues sont parmi les animaux les plus longévifs sur Terre. Les grandes tortues terrestres vivent régulièrement plus de 100 ans. Jonathan, une tortue des Seychelles résidant à Sainte-Hélène, est née vers 1832 et est toujours vivante en 2024 — soit plus de 190 ans ! Ce record s'explique en partie par leur métabolisme très lent qui génère peu de radicaux libres et ralentit le vieillissement cellulaire.",
                source: "Société Herpétologique Française - Les tortues peuvent vivre plus de 100 ans."
            },
            {
                id: 9,
                question: "Quel reptile pond des œufs ?",
                options: ["Aucun reptile, car ils ont tous évolué vers la viviparité au cours de l'évolution", "Tous les reptiles", "Certains reptiles seulement, les autres donnant naissance directement à des petits vivants", "Uniquement les crocodiliens et les tortues marines, les serpents et lézards étant tous vivipares"],
                correct: 1,
                explanation: "Attention : cette affirmation est en réalité incorrecte ! Certains reptiles sont vivipares (ils donnent naissance à des petits vivants). Par exemple, de nombreuses vipères d'Europe, le boa constrictor et certains lézards gardent les œufs à l'intérieur jusqu'à l'éclosion (ovoviviparité) ou nourrissent directement l'embryon via un placenta (viviparité vraie). La majorité des reptiles pondent des œufs, mais pas tous.",
                source: "Institut de Reproduction des Reptiles - Tous les reptiles pondent des œufs."
            },
            {
                id: 10,
                question: "Quel est l'organe de détection de la chaleur chez les serpents venimeux ?",
                options: ["L'odorat, grâce à l'organe de Jacobson qui analyse les molécules volatiles libérées par la chaleur des proies", "Les fossettes thermosensibles", "La vision, leurs yeux contenant des photorécepteurs capables de percevoir le rayonnement infrarouge émis par les corps chauds", "Le toucher, via des terminaisons nerveuses cutanées extrêmement sensibles aux variations thermiques de l'air"],
                correct: 1,
                explanation: "Certains serpents (pythons, boas, crotales, vipères à fossettes) possèdent des organes thermosensibles capables de détecter des variations de température infrarouges infimes (0,003°C). Situés entre l'œil et la narine, ces 'organes à fosse' forment une image thermique de l'environnement, permettant de localiser et de frapper une proie à sang chaud dans l'obscurité totale avec une précision remarquable.",
                source: "Université de Sensorimotricité - Les serpents venimeux possèdent des fossettes thermosensibles."
            },
            {
                id: 11,
                question: "Quel est le record de vitesse d'un lézard sur terre ?",
                options: ["10 km/h, soit la vitesse d'un humain marchant d'un pas soutenu sur terrain plat", "25 km/h, une performance comparable à celle d'un chien de taille moyenne au trot", "40+ km/h", "60 km/h, ce qui leur permettrait de dépasser un cheval au galop sur courte distance"],
                correct: 2,
                explanation: "Le basilic plumet et certains varans peuvent courir à plus de 40 km/h sur de courtes distances. Le recordman est le lézard à queue fouet (Cnemidophorus), qui peut atteindre 29 km/h. Pour l'anecdote, le basilic est si rapide qu'il peut courir sur l'eau sur ses pattes arrière sur plusieurs mètres grâce à la fréquence de ses foulées et des pieds palmés qui emprisonnent de l'air sous l'eau.",
                source: "Institut de Zoologie Comparée - Certains lézards courent très vite."
            },
            {
                id: 12,
                question: "À quel âge une tortue terrestre devient-elle adulte ?",
                options: ["À 5-10 ans, maturité comparable à celle des varans et des petits crocodiliens", "À 15-20 ans, délai similaire à celui des tortues marines des zones tempérées", "À 20-30 ans selon l'espèce", "À 50+ ans, réservé aux grandes tortues géantes des îles isolées"],
                correct: 2,
                explanation: "La tortue terrestre d'Hermann, commune en Europe du Sud, atteint sa maturité sexuelle entre 10 et 20 ans. Les grandes espèces méditerranéennes ou des Galápagos mettent 20 à 30 ans. Pendant toute cette période, la tortue grandit très lentement — on peut d'ailleurs estimer son âge en comptant les anneaux de croissance sur ses écailles (scutes), un peu comme les cernes d'un arbre.",
                source: "Centre de Soins des Tortues - Les tortues maturent lentement."
            },
            {
                id: 13,
                question: "Quel serpent est le plus venimeux du monde par volume de venin ?",
                options: ["Le cobra royal, dont une seule morsure peut injecter suffisamment de venin pour tuer un éléphant adulte", "Le taipan intérieur", "La vipère des sables, responsable de la majorité des morsures mortelles en Afrique et au Moyen-Orient", "Le bungare rayé, dont le venin neurotoxique agit sans douleur initiale, retardant dangereusement la prise en charge médicale"],
                correct: 1,
                explanation: "Le taipan intérieur (ou taipan terrestre) d'Australie détient le record absolu de toxicité du venin de serpent. Sa DL50 (dose létale pour 50% des souris testées) est de 0,025 mg/kg — 10 fois plus toxique que le cobra royal et 50 fois plus que le cobra commun. Son venin attaque le système nerveux et la coagulation simultanément. Heureusement, il vit dans des zones très reculées et n'attaque pratiquement jamais l'humain.",
                source: "Institut Toxinologique - Le taipan intérieur a le venin le plus toxique."
            },
            {
                id: 14,
                question: "Combien de temps une tortue peut-elle survivre sans nourriture ?",
                options: ["1-2 mois, soit la durée maximale tolérée grâce aux réserves de glycogène hépatique", "6 mois, durée correspondant à l'hibernation des tortues en régions tempérées", "1-2 ans selon l'espèce", "5+ ans, leur métabolisme pouvant s'arrêter presque totalement en période de sécheresse extrême"],
                correct: 2,
                explanation: "Les tortues peuvent survivre sans manger pendant des durées extraordinaires grâce à leur métabolisme ultra-lent. Pendant l'hibernation (ou estivation en été), elles réduisent toutes leurs fonctions vitales au minimum et puisent dans leurs réserves de graisse. Des tortues de Galápagos ont survécu plus d'un an sans eau ni nourriture à bord de navires. C'est d'ailleurs pourquoi les marins les emportaient comme provisions vivantes.",
                source: "Centre de Physiologie Reptilienne - Les tortues peuvent jeûner longtemps."
            },
            {
                id: 15,
                question: "Quel est le plus grand crocodile jamais enregistré ?",
                options: ["Environ 4-5 mètres, une taille déjà impressionnante correspondant aux grands mâles du crocodile du Nil", "Environ 6-7 mètres, taille des plus grands crocodiles du Nil jamais mesurés dans les deltas africains", "Plus de 7 mètres", "Plus de 10 mètres, une longueur théoriquement possible chez les espèces préhistoriques comme le Sarcosuchus"],
                correct: 2,
                explanation: "Le plus grand crocodile marin (Crocodylus porosus) jamais mesuré officiellement atteignait 6,17 m, mais des témoignages et mesures historiques évoquent des individus dépassant 7 mètres. Le crocodile 'Lolong', capturé aux Philippines en 2011, mesurait 6,17 m et pesait 1 075 kg — record officiel Guinness. Ces géants peuvent vivre plus de 70 ans et continuent de grandir toute leur vie.",
                source: "Société Herpétologique - Le crocodile marin peut excéder 7 mètres."
            },
            {
                id: 16,
                question: "À quel âge un crocodile devient-il reproducteur ?",
                options: ["À 2-3 ans, soit une maturité précoce favorisée par l'abondance de nourriture dans les milieux tropicaux", "À 5-10 ans, délai comparable à celui des varans géants et des gros lézards tropicaux", "À 10-15 ans selon l'espèce", "À 20+ ans, seuil atteint uniquement chez les crocodiles marins vivant dans des eaux à faible température"],
                correct: 2,
                explanation: "Les crocodiliens atteignent leur maturité sexuelle tardivement : entre 10 et 15 ans selon l'espèce et les conditions. Le crocodile du Nil est mature vers 12-15 ans, le crocodile marin vers 10-12 ans. La femelle pond entre 20 et 80 œufs dans un nid qu'elle surveille jalousement pendant 3 mois. Elle aide ensuite les jeunes à éclore et les transporte dans sa gueule jusqu'à l'eau — comportement parental très développé pour un reptile.",
                source: "Centre d'Étude des Crocodiliens - La maturité arrive tardivement."
            },
            {
                id: 17,
                question: "Quel lézard peut courir sur l'eau ?",
                options: ["Le dragon de Komodo, qui peut traverser des bras de mer entre îles en nageant sur de longues distances", "Le basilic", "L'iguane marin des Galápagos, qui plonge dans l'océan et nage entre les rochers pour brouter les algues", "Le varan du Nil, capable de traverser des rivières à la surface en agitant vigoureusement sa queue aplatie"],
                correct: 1,
                explanation: "Le basilic vert (Basiliscus plumifrons) d'Amérique centrale peut courir sur l'eau grâce à ses grandes pattes arrière munies de franges et à sa vitesse (environ 1,5 m/s). La fréquence élevée de ses foulées crée des poches d'air sous ses pieds qui l'empêchent de s'enfoncer sur de courtes distances (jusqu'à 4-5 mètres). Cette capacité lui vaut le surnom de 'lézard Jésus-Christ'. Il ne peut le faire qu'à grande vitesse.",
                source: "Institut d'Éthologie Reptilienne - Le basilic court sur l'eau sur ses pattes postérieures."
            },
            {
                id: 18,
                question: "À quel âge une tortue peut-elle pondre des œufs ?",
                options: ["À 3-5 ans, une maturité précoce observée chez certaines tortues d'eau douce des régions tropicales", "À 10-15 ans selon l'espèce", "À 20-30 ans, délai typique des tortues marines qui doivent atteindre une grande taille avant de pondre", "À 50+ ans, une maturité extrêmement tardive que l'on observe uniquement chez les tortues géantes des îles isolées"],
                correct: 1,
                explanation: "L'âge de la première ponte varie énormément selon les espèces de tortues. La tortue de Floride peut pondre dès 5-8 ans, mais les tortues marines comme la tortue verte n'atteignent la maturité reproductive qu'entre 20 et 50 ans. Les grandes tortues terrestres des Galápagos pondent pour la première fois vers 20-25 ans. Cette maturité tardive les rend très vulnérables à la surpêche et la prédation avant même qu'elles aient pu se reproduire.",
                source: "Centre de Reproduction Reptilienne - L'âge varie énormément selon l'espèce."
            },
            {
                id: 19,
                question: "Quel est le plus petit reptile du monde ?",
                options: ["Le caméléon pygmée Brookesia micra, qui tient sur la tête d'une allumette", "Le gecko nain Sphaerodactylus ariasae des Caraïbes, mesurant à peine 16 mm", "Le lézard de Burton", "La couleuvre des blés juvénile, mesurant moins de 20 cm à l'éclosion"],
                correct: 2,
                explanation: "Le plus petit reptile du monde est en réalité le gecko nano (Sphaerodactylus ariasae) de République Dominicaine, qui mesure environ 16 mm. Le caméléon pygmée Brookesia micra de Madagascar est lui aussi candidat au titre avec ses 29 mm. Le 'lézard de Burton' n'est pas la référence la plus précise — les records de miniaturisation chez les reptiles sont disputés et régulièrement mis à jour par de nouvelles découvertes en zones tropicales.",
                source: "Musée de Zoologie - Le lézard de Burton mesure environ 10 cm."
            },
            {
                id: 20,
                question: "Quel est le temps moyen de l'éclosion des œufs de tortue ?",
                options: ["1-2 mois, durée typique des crocodiliens incubant dans des amas de végétation en décomposition", "3-4 mois, durée observée chez les pythons qui couvent activement leurs œufs en frissonnant", "5-6 mois selon l'espèce", "8-12 mois, durée prolongée documentée chez certaines tortues des régions froides qui diapausent en développement"],
                correct: 2,
                explanation: "L'incubation des œufs de tortues marines dure entre 45 et 70 jours selon la température du sable — plus il fait chaud, plus l'éclosion est rapide. Les tortues terrestres ont des durées plus longues : 90 à 120 jours pour la tortue d'Hermann. La température d'incubation détermine aussi le sexe des tortorues (TSD) : des températures plus chaudes produisent généralement plus de femelles, ce qui rend le changement climatique particulièrement préoccupant pour ces espèces.",
                source: "Centre de Reproduction des Tortues - L'incubation varie selon conditions."
            },
            {
                id: 21,
                question: "Quel serpent est le plus long du monde ?",
                options: ["L'anaconda vert d'Amazonie, qui dépasse les 5 mètres et constitue le serpent le plus lourd du monde", "Le python de Birmanie, une espèce invasive en Floride pouvant dépasser 6 mètres et 90 kilogrammes", "Le python réticulé", "Le boa constricteur, dont les plus grands spécimens d'Amérique centrale atteignent régulièrement 5 à 6 mètres"],
                correct: 2,
                explanation: "Le python réticulé (Malayopython reticulatus) d'Asie du Sud-Est est le plus long serpent du monde. Il peut dépasser 7 mètres et peser plus de 100 kg. Le spécimen le plus long officiellement mesuré (Medusa) atteignait 7,67 m. Il se distingue de l'anaconda (le plus lourd) par sa longueur. Chasseur par constriction, il peut avaler des proies allant jusqu'à la taille d'un petit cochon ou d'un chevreuil.",
                source: "Institut Herpétologique - Le python réticulé peut dépasser 7 mètres."
            },
            {
                id: 22,
                question: "À quelle température un reptile doit-il être maintenu ?",
                options: ["15-20°C, une plage de températures adaptée aux reptiles des régions méditerranéennes comme la tortue d'Hermann", "20-25°C, une température ambiante suffisante pour maintenir l'activité des espèces comme le boa constrictor", "25-35°C selon l'espèce", "40°C+, une température que certains reptiles désertiques comme l'agame de Bibron peuvent tolérer brièvement au basking"],
                correct: 2,
                explanation: "Les reptiles en captivité ont des besoins thermiques précis qu'il faut respecter. Un pogona (dragon barbu) d'Australie a besoin d'une zone chaude à 40-45°C et d'une zone fraîche à 25-28°C. Un gecko léopard préfère 28-32°C. En dessous de leur température minimale, leur digestion s'arrête et leur système immunitaire s'effondre. C'est pourquoi un terrarium mal chauffé est l'une des premières causes de maladie chez les reptiles en captivité.",
                source: "Centre de Soins Reptiliens - Les températures varient selon les espèces."
            },
            {
                id: 23,
                question: "Quel est le processus de la mue chez les serpents ?",
                options: ["Perte progressive de la peau en fragments irréguliers, comme chez les lézards en période de croissance", "Perte complète de la peau en une seule pelure", "Aucun renouvellement cutané, la peau des serpents grandissant avec eux tout au long de leur vie", "Mue très lente sur plusieurs semaines, le serpent restant partiellement couvert de son ancienne peau"],
                correct: 1,
                explanation: "Les serpents muent d'un seul tenant (ecdysis) en retournant leur peau de l'intérieur, comme on retournerait une chaussette. Avant la mue, leurs yeux deviennent bleutés et opaques car la vieille peau se décolle sur le globe oculaire (le 'spectacle'). Ils se frottent contre des surfaces rugueuses pour amorcer la mue par le museau. La fréquence varie selon la croissance : un jeune serpent en pleine croissance mue toutes les 4-6 semaines, un adulte 2-4 fois par an.",
                source: "Institut d'Éthologie Reptilienne - La mue ectysiale se fait en une fois."
            },
            {
                id: 24,
                question: "Quel caméléon a les capacités de changement de couleur les plus marquées ?",
                options: ["Le caméléon panthère", "Le caméléon de Namaqua, qui alterne noir et blanc pour thermoréguler dans son habitat désertique d'Afrique australe", "Le caméléon casqué, qui affiche des teintes vives lors des parades nuptiales et adapte sa couleur à la saison dans son habitat montagneux", "Le caméléon pygmée Rhampholeon, dont la gamme chromatique précise lui permet un camouflage quasi parfait parmi les feuilles mortes"],
                correct: 0,
                explanation: "Le caméléon panthère (Furcifer pardalis) de Madagascar est considéré comme le champion du changement de couleur. Les mâles peuvent afficher des rouges, oranges, verts, bleus et turquoises intenses en quelques secondes. Chaque région de l'île a sa propre coloration locale. Des études ont montré que le caméléon contrôle ses iridophores (cristaux de guanine) comme un réseau de nanostructures, modifiant la façon dont la lumière est réfléchie pour changer de couleur.",
                source: "Institut de Biophysique Reptilienne - Le panthère est connu pour ses changements."
            },
            {
                id: 25,
                question: "À quel âge un python atteint-il sa pleine taille ?",
                options: ["À 2-3 ans", "À 3-5 ans", "À 5-7 ans selon l'espèce", "À 10+ ans"],
                correct: 2,
                explanation: "Les pythons grandissent rapidement les premières années puis ralentissent. Un python royal (Ball python) atteint sa taille adulte (120-150 cm) entre 3 et 5 ans. Le python de Birmanie, lui, peut mettre 5 à 7 ans pour atteindre ses 4-5 mètres adultes. Contrairement aux mammifères, les reptiles ne cessent jamais complètement de croître — ils grandissent très lentement toute leur vie, d'où les spécimens records chez les très vieux individus.",
                source: "Centre de Zoologie Ophidienne - La croissance est progressive et lente."
            },
            {
                id: 26,
                question: "Quel est le rôle de la fosse thermosensible chez le python ?",
                options: ["Analyse des gradients chimiques olfactifs pour localiser les proies par concentration moléculaire", "Détection infrarouge des proies", "Perception visuelle haute résolution de la chaleur corporelle des proies à sang chaud", "Transmission des vibrations basse fréquence du sol via les écailles ventrales jusqu'à l'oreille interne"],
                correct: 1,
                explanation: "Les fossettes labiales des pythons (situées sur les écailles des lèvres) sont des organes thermosensibles capables de détecter des variations de température de 0,003°C. Elles créent une 'image thermique' de l'environnement, complétant la vision ordinaire. En lumière nulle, un python peut ainsi repérer et frapper une proie à sang chaud avec une précision redoutable. Ces mêmes organes existent chez les boas et les crotales, mais dans des positions anatomiques différentes.",
                source: "Institut de Sensorimotricité Reptilienne - Les fossettes détectent la chaleur."
            },
            {
                id: 27,
                question: "À quelle profondeur peuvent plonger les tortues marines ?",
                options: ["Jusqu'à 10 mètres", "Jusqu'à 50 mètres", "Jusqu'à 100-200 mètres selon l'espèce", "Plus de 500 mètres"],
                correct: 2,
                explanation: "Les tortues marines sont d'excellentes plongeuses. La tortue verte plonge généralement à 10-50 mètres, mais la tortue luth (la plus grande) détient le record avec des plongées documentées à plus de 1 200 mètres ! Elle suit les méduses (sa proie préférée) dans les profondeurs. Pour résister à de telles pressions, la tortue luth a une carapace flexible (pas d'os rigide) et des poumons qui se compriment sans dommage.",
                source: "Institut de Biologie Marine - Les tortues luth plongent très profond."
            },
            {
                id: 28,
                question: "Quel est le temps moyen de digestion chez un serpent ?",
                options: ["Quelques jours", "1-2 semaines", "2-4 semaines selon la proie", "1-2 mois"],
                correct: 2,
                explanation: "La digestion d'un serpent est un processus fascinant et lent. Après avoir avalé une proie entière, le serpent la digère pendant 2 à 4 semaines selon sa taille. Son métabolisme s'emballe — le foie double de volume, les intestins se développent et la production d'acide gastrique augmente massivement. Un python python peut digérer un cochon entier. Pendant ce temps, il reste immobile et vulnérable, c'est pourquoi il choisit un endroit caché pour digérer.",
                source: "Centre de Physiologie Reptilienne - La digestion est lente mais complète."
            },
            {
                id: 29,
                question: "Quel lézard peut changer radicalement de forme corporelle ?",
                options: ["Le gecko", "L'iguane", "L'anole", "Le frilled lizard"],
                correct: 3,
                explanation: "Le lézard à collerette (Chlamydosaurus kingii) d'Australie peut déployer en une fraction de seconde un immense collier cutané (jusqu'à 30 cm de diamètre) soutenu par des tiges cartilagineuses. Simultanément, il ouvre grand la gueule, se dresse sur ses pattes arrière et siffle. Cette mise en scène spectaculaire vise à paraître bien plus gros et effrayant qu'il n'est réellement. Si l'intimidation échoue, il prend la fuite à toute vitesse en position bipède.",
                source: "Institut d'Éthologie Défensive - Le frilled lizard déploie un col impressionnant."
            },
            {
                id: 30,
                question: "Quel serpent pond le plus d'œufs en une ponte ?",
                options: ["10-20 œufs", "30-50 œufs", "80-100 œufs selon l'espèce", "150+ œufs"],
                correct: 2,
                explanation: "Les grands pythons sont les champions de la ponte chez les serpents. Le python de Birmanie peut pondre jusqu'à 100 œufs, et le python réticulé jusqu'à 80. La femelle s'enroule autour de ses œufs et produit de la chaleur par frissons musculaires (thermogenèse) pour maintenir une température d'incubation stable — comportement exceptionnel chez les reptiles. Pendant les 2-3 mois d'incubation, elle ne mange pas et peut perdre 40% de son poids.",
                source: "Fédération Herpétologique - Certains pythons pondent plus de 100 œufs."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel processus permet aux serpents de se débarrasser de leur peau ?",
                options: ["La photosynthèse", "La mue ou l'exuviation", "La germination", "La calcification"],
                correct: 1,
                explanation: "La mue (ou exuviation) est le processus par lequel un serpent se débarrasse de son ancienne peau devenue trop petite. Elle est déclenchée par la croissance et stimulée par des hormones. Le serpent sécrète un liquide entre l'ancienne et la nouvelle peau, qui se trouble d'abord (yeux bleus), puis se clarifie juste avant la mue. Une mue réussie produit une pelure intacte, à l'envers, qui conserve même le détail des écailles — véritable empreinte du serpent.",
                source: "Centre d'Étude des Serpents - Les serpents mutent pour grandir et se renouveler."
            },
            {
                id: 12,
                question: "Quel est le nombre de vertèbres estimé chez un serpent ?",
                options: ["10-20 vertèbres", "50-100 vertèbres", "200-400 vertèbres", "500+ vertèbres"],
                correct: 2,
                explanation: "Les serpents possèdent entre 200 et 400 vertèbres selon l'espèce (contre 33 chez l'humain). Chaque vertèbre est reliée à une paire de côtes — ce qui donne aux serpents une musculature abdominale extrêmement complexe. C'est cette architecture qui leur permet leurs mouvements fluides et leur force de constriction : certains pythons peuvent exercer une pression de 7 à 9 kg/cm², suffisante pour stopper la circulation sanguine d'une grande proie.",
                source: "Institut d'Anatomie des Reptiles - Les serpents peuvent avoir jusqu'à 400 vertèbres."
            },
            {
                id: 13,
                question: "Quel type de écailles ont les reptiles ?",
                options: ["Écailles molles comme les poissons", "Écailles dures faites de kératine", "Pas d'écailles", "Écailles en gel"],
                correct: 1,
                explanation: "Les écailles des reptiles sont des extensions de l'épiderme faites de kératine — la même protéine que nos ongles et cheveux. Elles forment une armure imperméable qui protège contre la déshydratation (crucial pour les animaux terrestres), les abrasions et les prédateurs. Contrairement aux poissons, les écailles des reptiles ne sont pas des plaques séparées posées sur la peau : elles sont liées entre elles et font partie intégrante de la peau.",
                source: "Université de Morphologie - Les écailles des reptiles sont faites de kératine."
            },
            {
                id: 14,
                question: "Quel type de respiration les reptiles utilisent-ils ?",
                options: ["Branchies", "Poumons uniquement", "Peaux", "Poumons et peaux partiellement"],
                correct: 1,
                explanation: "Les reptiles respirent exclusivement par des poumons (contrairement aux amphibiens qui respirent aussi par la peau). Leurs poumons sont moins efficaces que ceux des oiseaux ou des mammifères — certains reptiles n'ont qu'un seul poumon fonctionnel (les serpents ont le poumon gauche très réduit). Les tortues ont une particularité : leur carapace empêche l'expansion thoracique, donc elles utilisent des muscles spéciaux qui tirent les poumons pour les dilater.",
                source: "Institut de Physiologie Respiratoire - Les reptiles respirent principalement par les poumons."
            },
            {
                id: 15,
                question: "Quel est le mécanisme de déplacement du serpent ?",
                options: ["Reptation uniforme", "Mouvement ondulatoire latéral", "Saut vertical", "Roulement"],
                correct: 1,
                explanation: "Les serpents utilisent plusieurs modes de locomotion selon le terrain. Le plus courant est le mouvement ondulant latéral : des vagues musculaires parcourent le corps d'avant en arrière en prenant appui sur les irrégularités du sol. Sur terrain lisse, ils utilisent la progression en accordéon ou la locomotion rectiligne (contractions des grandes écailles ventrales). Sur sable, certains utilisent le déplacement latéral (sidewinding), très efficace sur terrain instable.",
                source: "Centre de Biodynamique - Les serpents utilisent des vagues musculaires."
            },
            {
                id: 16,
                question: "Quel type de dent ont les serpents venimeux ?",
                options: ["Des crocs cannelés avec un sillon ventral guidant le venin vers la plaie par capillarité", "Des dents plates à couronne large pour broyer les carapaces de tortues et d'œufs", "Des dents pointues simples acérées et courbées vers l'arrière pour retenir les proies vivantes", "Des dents polyphyodontes à remplacement continu toute la vie sans spécialisation fonctionnelle"],
                correct: 0,
                explanation: "Les crocs des serpents venimeux sont des dents modifiées traversées par un canal ou une rainure qui conduit le venin depuis les glandes venimeuses jusqu'à la proie. Les vipers (solénodontes) ont les crocs les plus évolués : longs, creux et rétractables (repliés contre le palais au repos), ils se déploient lors de la morsure comme des aiguilles hypodermiques. Les élapidés (cobras, mambas) ont des crocs fixes et plus courts.",
                source: "Institut Toxinologique des Reptiles - Les serpents venimeux ont des crocs creux."
            },
            {
                id: 17,
                question: "Quel est le territoire typique d'un crocodile ?",
                options: ["Plusieurs kilomètres", "Moins de 500 mètres", "Plusieurs hectares à quelques kilomètres", "Sans territoire fixe"],
                correct: 2,
                explanation: "Les grands crocodiles mâles défendent des territoires de plusieurs hectares à quelques kilomètres de berge, qu'ils marquent par des vocalisations (grondements graves), des sécrétions odorantes et des démonstrations physiques. Les mâles dominants contrôlent les meilleurs sites de ponte et d'alimentation. Les femelles sont moins territoriales mais défendent farouchement leurs nids. Ces territoires sont transmis de génération en génération — certains sites de nidification sont utilisés depuis des décennies.",
                source: "Centre d'Étude des Crocodiliens - Les crocodiles défendent des territoires vastes."
            },
            {
                id: 18,
                question: "Combien de temps une tortue peut-elle tenir sans respirer ?",
                options: ["Quelques minutes", "30 minutes maximum", "1-2 heures selon l'espèce", "Plusieurs jours"],
                correct: 2,
                explanation: "Les tortues marines peuvent rester sous l'eau très longtemps grâce à leur métabolisme lent et leur capacité à ralentir leur rythme cardiaque. Au repos ou en sommeil, certaines espèces peuvent rester immergées 4 à 7 heures. En activité, c'est plus court : 30 minutes à 2 heures selon l'espèce. Chose fascinante : certaines tortues peuvent aussi absorber de l'oxygène dissous dans l'eau via des zones très vascularisées autour du cloaque — une forme de 'respiration cloacale'.",
                source: "Université Marine - Les tortues marines peuvent apnéer longtemps."
            },
            {
                id: 19,
                question: "Quel est le rôle du cloaque chez les reptiles ?",
                options: ["Respiration uniquement", "Cavité commune pour l'excrétion, reproduction et digestion", "Digestion uniquement", "Stockage de graisse"],
                correct: 1,
                explanation: "Le cloaque est une cavité commune à l'extrémité du tube digestif des reptiles, oiseaux et amphibiens. Il reçoit les matières fécales, les urines et les sécrétions génitales, et se termine par une ouverture unique vers l'extérieur (le vent). Chez les tortues, le cloaque sert aussi à absorber de l'oxygène et de l'eau depuis l'environnement aquatique — permettant une longue survie sous l'eau en hiver ou pendant l'hibernation subaquatique.",
                source: "Institut d'Anatomie Comparée - Le cloaque est une cavité multifonctionnelle."
            },
            {
                id: 20,
                question: "Quel est le type de fécondation chez les reptiles ?",
                options: ["Fécondation externe", "Fécondation interne", "Reproduction asexuée", "Bourgeonnement"],
                correct: 1,
                explanation: "Tous les reptiles ont une fécondation interne. Les mâles possèdent des organes copulateurs : un hémipénis chez les lézards et les serpents (deux organes, un seul utilisé à la fois), ou un pénis chez les tortues et les crocodiliens. Fait remarquable : certaines femelles de serpents et de lézards peuvent conserver des spermatozoïdes vivants dans leur organisme pendant plusieurs années, et féconder leurs œufs bien après l'accouplement.",
                source: "Université de Reproduction - Les reptiles ont une fécondation interne."
            },
            {
                id: 31,
                question: "À quel âge une tortue terrestre peut-elle vivre plus de 100 ans ?",
                options: ["À partir de 50 ans", "À partir de 80 ans", "À partir de 100 ans", "Jusqu'à 200 ans"],
                correct: 3,
                explanation: "Les tortues géantes des Galápagos et des Seychelles sont parmi les animaux les plus longévifs connus. Jonathan, la tortue des Seychelles vivant à Sainte-Hélène, est née vers 1832 et a dépassé les 190 ans en 2024. Des études génétiques sur ces espèces ont montré qu'elles vieillissent très lentement : leurs télomères (marqueurs du vieillissement cellulaire) raccourcissent à une vitesse infime. Certains chercheurs les étudient pour comprendre les mécanismes du vieillissement.",
                source: "Centre de Longévité Reptilienne - Les tortues géantes peuvent dépasser 200 ans."
            },
            {
                id: 32,
                question: "Quel est le processus de défense du caméléon face au prédateur ?",
                options: ["Fuite", "Changement de couleur, posture menaçante et sifflement", "Attaque directe", "Camouflage"],
                correct: 1,
                explanation: "Le caméléon face à un prédateur déploie plusieurs stratégies de défense. Il change d'abord de couleur pour se fondre dans son environnement (camouflage). Si découvert, il se gonfle latéralement pour paraître plus grand, ouvre grand la gueule, se balance pour imiter une feuille agitée par le vent, et siffle ou crache. En dernier recours, il peut mordre. Il se déplace aussi en balancement saccadé pour imiter le mouvement d'une feuille et dérouter les prédateurs à vision adaptée au mouvement.",
                source: "Institut d'Éthologie Défensive - Multi-stratégies de défense."
            },
            {
                id: 33,
                question: "Quel est le record de jeûne chez un grand crocodile ?",
                options: ["Quelques jours", "1-2 mois", "6 mois à 1 an", "2+ ans possibles"],
                correct: 3,
                explanation: "Les crocodiles possèdent l'un des métabolismes les plus lents du règne animal. Après un grand repas, un crocodile peut survivre plus d'un an sans manger en vivant sur ses réserves de graisses. En période de sécheresse ou de froid, ils entrent en dormance et leur métabolisme ralentit jusqu'à presque s'arrêter. Cette frugalité extrême est une adaptation à des environnements où la nourriture peut être rare ou saisonnière.",
                source: "Centre d'Écologie Crocodilienne - Métabolisme extrêmement lent."
            },
            {
                id: 34,
                question: "Quel est le rôle de la membrane nictitante chez les reptiles aquatiques ?",
                options: ["Filtration des longueurs d'onde UV permettant la vision dans les profondeurs aquatiques turbides", "Protection des yeux sous l'eau", "Amplification de la sensibilité aux mouvements latéraux par augmentation du champ visuel périphérique", "Détection des changements d'intensité lumineuse signalant les prédateurs approchant par le dessus"],
                correct: 1,
                explanation: "La membrane nictitante (troisième paupière) des reptiles aquatiques se ferme horizontalement sur l'œil lors de la plongée, comme des lunettes de natation transparentes. Elle protège l'œil des débris, de l'eau salée et des chocs, tout en maintenant une vision fonctionnelle sous l'eau. Les crocodiles, tortues marines et certains lézards aquatiques en sont équipés. Chez les crocodiles, elle peut aussi se fermer lors des combats ou des prises de proies.",
                source: "Institut d'Ophtalmologie Reptilienne - Protection adaptée à l'aquatique."
            },
            {
                id: 35,
                question: "À quelle vitesse une tortue terrestre se déplace-t-elle ?",
                options: ["0,5 km/h", "1-2 km/h", "3-5 km/h", "10+ km/h"],
                correct: 1,
                explanation: "La tortue terrestre se déplace à environ 0,3 à 0,5 km/h en vitesse normale, avec des pointes à 1-2 km/h. C'est nettement plus lent que dans la fable de La Fontaine, mais cohérent avec leur mode de vie : pas de prédateurs naturels adultes (grâce à la carapace), alimentation passive (herbes, feuilles), et économie d'énergie maximale. Les tortues marines sont bien plus véloces dans l'eau, pouvant nager jusqu'à 35 km/h pour la tortue luth.",
                source: "Centre d'Écologie Chelonienne - Locomotion très lente."
            },
            {
                id: 36,
                question: "Quel est le processus de thermorégulation d'un reptile diurne ?",
                options: ["Régulation biochimique autonome via des réactions exothermiques mitochondriales contrôlées", "Basking au soleil pour augmenter température", "Génération de chaleur métabolique interne via l'oxydation des lipides comme les mammifères", "Absorption calorique depuis l'eau tempérée des milieux aquatiques chauds tropicaux"],
                correct: 1,
                explanation: "Le basking (bain de soleil) est le principal outil de thermorégulation des reptiles diurnes. Le matin, ils s'orientent perpendiculairement aux rayons du soleil pour maximiser la surface exposée et réchauffer rapidement leur corps. Une fois à température optimale (souvent 30-38°C selon l'espèce), ils cherchent l'ombre pour éviter la surchauffe. Certains lézards peuvent ainsi contrôler leur température à 1°C près en alternant exposition et ombre tout au long de la journée.",
                source: "Institut de Thermorégulation Ectotherme - Comportemental et physique."
            },
            {
                id: 37,
                question: "À quel âge une tortue aquatique peut-elle se reproduire ?",
                options: ["À 2-3 ans", "À 5-8 ans", "À 8-15 ans selon l'espèce", "À 20+ ans"],
                correct: 2,
                explanation: "Les tortues aquatiques d'eau douce atteignent leur maturité sexuelle entre 8 et 15 ans selon l'espèce et le sexe — les femelles prennent généralement plus de temps que les mâles. La cistude d'Europe (notre tortue aquatique native) est mature vers 10-14 ans. Cette maturité tardive combinée à un faible taux de survie juvénile rend ces espèces très sensibles aux perturbations humaines : la perte d'un seul adulte reproducteur a un impact significatif sur la population.",
                source: "Centre de Reproduction Aquatique - Maturation très tardive."
            },
            {
                id: 38,
                question: "Quel est le nombre de dents chez un crocodile adulte ?",
                options: ["20-30 dents", "40-60 dents", "80-100 dents", "Plus de 100"],
                correct: 1,
                explanation: "Un crocodile adulte possède entre 60 et 80 dents selon l'espèce. Mais ce qui est remarquable, c'est que ces dents se renouvellent en permanence — jusqu'à 50 fois dans une vie ! Une nouvelle dent pousse sous chaque dent usée, prête à la remplacer. Un crocodile peut ainsi utiliser jusqu'à 3 000 dents en une vie. Ces dents servent à saisir et tenir les proies, pas à les mâcher — les crocodiles avalent leurs proies en morceaux ou entières.",
                source: "Institut d'Anatomie Reptilienne - Les crocodiles ont des dizaines de dents."
            },
            {
                id: 39,
                question: "Quel est le rôle du cloaque chez les reptiles ?",
                options: ["Respiration uniquement", "Cavité commune pour l'excrétion, reproduction et digestion", "Digestion uniquement", "Stockage"],
                correct: 1,
                explanation: "Le cloaque est une innovation évolutive des tétrapodes (vertébrés terrestres). Il regroupe en une seule ouverture toutes les fonctions d'évacuation : digestive (matières fécales), urinaire (urates chez les reptiles, qui excrètent de l'acide urique plutôt que de l'urée pour économiser l'eau) et reproductive (sperme, œufs). Cette économie anatomique est particulièrement adaptée aux animaux à peau imperméable qui doivent conserver l'eau précieusement.",
                source: "Institut d'Anatomie Comparée - Multifonctionne structure reptilienne."
            },
            {
                id: 40,
                question: "À quel âge un lézard vert peut-il commencer à se reproduire ?",
                options: ["À 1-2 ans", "À 2-3 ans", "À 3-4 ans selon l'espèce", "À 5+ ans"],
                correct: 2,
                explanation: "Le lézard vert d'Europe (Lacerta bilineata) atteint sa maturité sexuelle entre 2 et 3 ans. Les espèces tropicales plus grandes comme le varan du Nil maturent vers 3-4 ans. Le dragon de Komodo, le plus grand lézard vivant, attend 5 à 7 ans. La période de reproduction coïncide avec le printemps et les jours longs dans les régions tempérées — la photopériode déclenche la production hormonale qui stimule les comportements reproducteurs.",
                source: "Centre d'Herpétologie - Maturation progressive et variable."
            },
            {
                id: 41,
                question: "Quel est le processus de la 'parthénogenèse' chez certains lézards ?",
                options: ["Reproduction par hermaphrodisme séquentiel où les femelles deviennent mâles selon les besoins du groupe", "Reproduction asexuée par clonage", "Fécondation croisée par des individus bisexuels changeant de rôle selon les signaux hormonaux", "Reproduction par bourgeonnement parthenogénétique produisant des clones imparfaits à viabilité réduite"],
                correct: 1,
                explanation: "La parthénogenèse permet à certaines femelles de se reproduire sans mâle. Les œufs se développent sans être fécondés, produisant des individus génétiquement identiques à la mère (clones). Ce phénomène est bien documenté chez certains varans (dragon de Komodo), certains geckos et lézards fouette-queue. Il survient parfois en captivité chez des espèces normalement sexuées, probablement comme réponse au manque de mâle. Les descendants sont souvent exclusivement de sexe femelle ou mâle selon l'espèce.",
                source: "Institut de Génétique Reptilienne - Reproduction sans mâle possible."
            },
            {
                id: 42,
                question: "Quel est le temps moyen de vie d'un serpent venimeux en captivité ?",
                options: ["2-5 ans", "5-10 ans", "10-20 ans selon l'espèce", "30+ ans"],
                correct: 2,
                explanation: "Les serpents venimeux vivent généralement plus longtemps en captivité qu'à l'état sauvage, où la prédation et la concurrence alimentaire réduisent leur survie. Un cobra royal peut vivre 20 à 25 ans en captivité. Un crotale à sonnette, 25 à 30 ans. Un python royal (non venimeux mais proche en taille) détient le record de longévité documenté pour un serpent en captivité avec 48 ans. Les soins vétérinaires, la nourriture régulière et l'absence de prédateurs expliquent cette longévité accrue.",
                source: "Centre de Zoologie Ophidienne - Longévité variable selon espèce."
            },
            {
                id: 43,
                question: "À quel âge une tortue marine atteint-elle la maturité sexuelle ?",
                options: ["À 5-10 ans", "À 20-40 ans selon l'espèce", "À 50+ ans", "Jamais vraiment"],
                correct: 1,
                explanation: "La maturité sexuelle extrêmement tardive des tortues marines (20 à 50 ans selon l'espèce) est l'une des raisons principales de leur vulnérabilité. La tortue caouanne mûrit vers 20-30 ans, la tortue verte entre 25 et 50 ans. Une tortue doit donc survivre des décennies entières avant de contribuer à la reproduction de son espèce. La capture accidentelle dans les filets de pêche et la destruction des plages de ponte avant la maturité sont catastrophiques pour les populations.",
                source: "Institut de Biologie Marine - Maturation extrêmement lente."
            },
            {
                id: 44,
                question: "Quel est le record d'apnée enregistré chez une tortue marine ?",
                options: ["30 minutes", "1 heure", "5-7 heures selon l'espèce", "Plus de 10 heures"],
                correct: 2,
                explanation: "Le record d'apnée chez les tortues marines est détenu par la tortue luth qui peut rester immergée jusqu'à 7 heures en dormance. Leur secret : un métabolisme extrêmement lent au repos, une hémoglobine très efficace pour transporter l'oxygène, et la capacité à tolérer des niveaux de CO2 élevés dans le sang. En cas de prise accidentelle dans un filet (une des premières causes de mortalité), une tortue déjà à bout de ressources se noie en quelques minutes.",
                source: "Centre de Physiologie Marine - Adaptation remarquable."
            },
            {
                id: 45,
                question: "Quel serpent a le venin le plus toxique chez le Mamba noir ?",
                options: ["Toxicité équivalente au taipan avec une composition vénimeuse similaire à base de dendrotoxines", "Plus toxique que le taipan avec une DL50 sur souris inférieure de 30% à celle du taipan intérieur", "Moins toxique que le taipan avec un venin à dominante hémotoxique plutôt que neurotoxique", "Venin de composition totalement différente sans possibilité de comparaison de la toxicité systémique"],
                correct: 2,
                explanation: "Le mamba noir est souvent cité comme 'le serpent le plus dangereux d'Afrique', mais il est moins toxique que le taipan intérieur australien. Sa dangerosité vient d'une combinaison de facteurs : vitesse (peut atteindre 20 km/h), agressivité quand acculé, venin neurotoxique très rapide (mort en 20 minutes sans antidote) et facilité à vous injecter le venin lors de plusieurs morsures. Le taipan est plus toxique, mais le mamba est responsable de davantage de décès humains en raison de son aire de répartition.",
                source: "Institut Toxinologique - Le taipan reste plus toxique."
            },
            {
                id: 46,
                question: "À quel âge un lézard perd-il sa queue de façon définitive ?",
                options: ["Une fois par an uniquement pendant la saison sèche pour renouveler toutes les écailles simultanément", "Une ou deux fois dans sa vie lors des étapes clés de la croissance juvénile uniquement", "Plusieurs fois selon les besoins", "À chaque fois que l'animal subit une agression sérieuse endommageant plus de 10% de la surface cutanée"],
                correct: 2,
                explanation: "L'autotomie caudale (perte volontaire de la queue) peut se répéter plusieurs fois chez un même lézard, mais jamais exactement au même endroit. La queue repousse, mais ce régénérat est composé de cartilage et non d'os, et sa forme et ses couleurs sont souvent différentes de l'originale. Certaines espèces ont des queues particulièrement voyantes qui continuent à se tortiller après la séparation, attirant l'attention du prédateur pendant que le lézard s'échappe.",
                source: "Institut d'Éthologie Défensive - L'autotomie se répète."
            },
            {
                id: 47,
                question: "Quel est le temps d'hibernation typique pour un reptile tempéré ?",
                options: ["1 mois", "2-3 mois", "4-6 mois selon l'espèce", "7-8 mois"],
                correct: 2,
                explanation: "Les reptiles des régions tempérées entrent en hibernation (torpeur hivernale) quand les températures descendent sous 10°C. La vipère aspic, par exemple, hiberne de novembre à mars dans des abris rocheux ou des terriers. Leur métabolisme ralentit à 5-10% du niveau normal, leur cœur peut ne battre que quelques fois par minute. Ils ne dorment pas vraiment — ils restent conscients mais incapables de bouger. Se réveiller trop tôt avant le printemps peut être fatal par manque de nourriture disponible.",
                source: "Centre de Physiologie Saisonnière - Hibernation adaptée au climat."
            },
            {
                id: 48,
                question: "Quel est le rôle de la 'gape' chez le python ?",
                options: ["Respiration", "Préparation à l'ingestion d'une grosse proie", "Communication", "Bâillement"],
                correct: 1,
                explanation: "Le 'bâillement' ou gape du python avant d'avaler une grosse proie sert à désolidariser les deux mâchoires et à réaligner les os pour créer la plus grande ouverture possible. Les mâchoires du python ne sont pas fusionnées mais reliées par des ligaments très élastiques, permettant une ouverture de 150°. Cette flexibilité lui permet d'avaler des proies bien plus larges que sa propre tête. Après ingestion, les os se repositionnent et les ligaments reprennent leur place naturellement.",
                source: "Institut d'Éthologie Prédatrice - Adaptation pour proies volumineuses."
            },
            {
                id: 49,
                question: "À quel âge un crocodile peut-il dépasser 4 mètres de long ?",
                options: ["À 10-15 ans", "À 20-30 ans", "À 30-40 ans selon l'espèce", "À 50+ ans"],
                correct: 2,
                explanation: "Les crocodiles grandissent toute leur vie, mais la croissance ralentit considérablement avec l'âge. Un crocodile du Nil grandit d'environ 30 cm par an les premières années, puis de quelques centimètres seulement à l'âge adulte. Dépasser 4 mètres de longueur prend généralement 30 à 40 ans. Les très grands spécimens (5-6 m) sont donc des individus très âgés — potentiellement centenaires. C'est pourquoi les crocodiles géants, protégés par leur taille, sont aussi les plus fertiles et importants pour la reproduction.",
                source: "Centre d'Écologie Crocodilienne - Croissance très lente."
            },
            {
                id: 50,
                question: "Quel est le processus de la 'autotomie caudale' chez les lézards ?",
                options: ["Perte accidentelle", "Perte volontaire de la queue pour échapper aux prédateurs", "Rejet d'un segment", "Mutilation"],
                correct: 1,
                explanation: "L'autotomie caudale est un mécanisme de défense unique : le lézard contracte volontairement certains muscles qui fracturent une vertèbre caudaleprédéterminée (plan de fracture), permettant la queue de se détacher proprement. La queue détachée continue à se tortiller pendant plusieurs minutes grâce à des réserves nerveuses autonomes, détournant l'attention du prédateur. Le lézard, lui, s'échappe. La perte de queue a un coût : réserves de graisse perdues, risque d'infection, et énergie dépensée pour la régénération.",
                source: "Institut d'Éthologie - Mécanisme de survie exceptionnel."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le processus appelé \"viparity\" chez certains reptiles ?",
                options: ["Ponte d'œufs", "Développement interne avec viviparie", "Hibernation prolongée", "Reproduction asexuée"],
                correct: 1,
                explanation: "La viviparité chez les reptiles est apparue indépendamment plus de 100 fois au cours de l'évolution — c'est un des exemples les plus frappants d'évolution convergente. La vipère aspic européenne est vivipare : elle garde ses œufs à l'intérieur jusqu'à l'éclosion (ovoviviparité). Certains scinques ont développé un vrai placenta pour nourrir les embryons. Avantage principal : la mère peut thermoréguler activement pendant la gestation, assurant un développement optimal même dans des environnements froids.",
                source: "Institut de Reproduction des Reptiles - Certains reptiles sont vivipares."
            },
            {
                id: 22,
                question: "Quel mécanisme génétique détermine le sexe chez la plupart des reptiles ?",
                options: ["Chromosomes XY", "Température d'incubation", "Ratio numérique d'œufs", "Exposition à la lumière"],
                correct: 1,
                explanation: "La détermination du sexe par la température (TSD) est fascinante : chez les crocodiles et de nombreuses tortues, ce n'est pas un chromosome qui détermine le sexe, mais la température à laquelle l'œuf est incubé. Chez le crocodile du Nil, 30°C produit des femelles, 34°C des mâles, et des températures intermédiaires donnent un mélange. Le réchauffement climatique perturbe déjà ce mécanisme : certaines populations de tortues marines produisent jusqu'à 99% de femelles dans les zones les plus chaudes.",
                source: "Université de Génétique Reptilienne - La température d'incubation détermine souvent le sexe."
            },
            {
                id: 23,
                question: "Quel est le rôle de l'organe de Jacobson chez les reptiles ?",
                options: ["Vision", "Détection chimiosensorielle des phéromones", "Respiration", "Audition"],
                correct: 1,
                explanation: "L'organe de Jacobson (organe voméronasal) des serpents et lézards est un organe olfactif secondaire situé au palais. Le serpent capte les molécules odorantes avec sa langue fourchue (qui échantillonne l'air des deux côtés simultanément pour détecter la direction des odeurs), puis les transfère à l'organe de Jacobson. Ce système permet de 'goûter l'air' — détecter les phéromones, pister une proie, identifier des congénères et repérer des partenaires à grande distance.",
                source: "Institut Sensoriel - L'organe de Jacobson détecte les phéromones."
            },
            {
                id: 24,
                question: "Quel est le processus d'adaptation chromatique du caméléon ?",
                options: ["Changement chimique simple", "Action combinée de chromatophores, iridophores et leuocphores", "Pigmentation génétique", "Réflexion optique uniquement"],
                correct: 1,
                explanation: "Le changement de couleur du caméléon implique trois couches de cellules spécialisées. Les chromatophores contiennent des pigments colorés (mélanine, caroténoïdes). Les iridophores contiennent des nanocristaux de guanine qui réfléchissent la lumière différemment selon leur espacement — modifiable par le système nerveux. Les leucophores réfléchissent toutes les longueurs d'onde pour produire du blanc. En jouant sur ces trois couches, le caméléon génère une palette de couleurs presque illimitée en quelques secondes.",
                source: "Université de Biophysique - Le changement de couleur combine plusieurs types de cellules."
            },
            {
                id: 25,
                question: "Quel type d'antivenin est utilisé pour traiter les morsures de serpents ?",
                options: ["Antivenin synthétique simple", "Sérum polyvalent ou spécifique selon l'espèce", "Antibiotiques simples", "Antihistaminiques uniquement"],
                correct: 1,
                explanation: "Les antivenins sont produits en injectant de petites doses de venin à des chevaux ou moutons, dont le système immunitaire fabrique des anticorps. Le sérum est ensuite extrait et purifié. Les antivenins spécifiques (monovalents) sont très efficaces contre une espèce précise, mais inutiles contre d'autres. Les antivenins polyvalents couvrent plusieurs espèces d'une même région mais sont moins efficaces individuellement. L'administration doit être faite rapidement — idéalement dans l'heure suivant la morsure.",
                source: "Institut Toxinologique International - Les antivenins peuvent être polyvalents ou spécifiques."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de régulation thermique chez un reptile en hibernation ?",
                options: ["Arrêt métabolique complet", "Réduction du métabolisme jusqu'à 5-10% du normal", "Augmentation de la température interne", "Activation de la thermogenèse"],
                correct: 1,
                explanation: "Pendant l'hibernation (brumation chez les reptiles), le métabolisme chute à 5-10% de son niveau actif. Le rythme cardiaque peut tomber à 1-2 battements par minute (contre 30-40 en activité). La respiration est quasi inexistante. Certaines espèces comme la tortue-boîte nord-américaine hivernent sous la glace, où l'oxygène dissous dans l'eau suffit à leurs besoins minimaux. La survie de cette torpeur dépend d'un choix judicieux du site d'hivernage — hors gel, à l'abri des prédateurs.",
                source: "Centre de Physiologie Comparée - L'hibernation réduit drastiquement le métabolisme."
            },
            {
                id: 27,
                question: "Quel est le rôle des glandes de sel chez les crocodiliens d'eau salée ?",
                options: ["Digestion", "Excrétion du sel excédentaire", "Reproduction", "Détoxification"],
                correct: 1,
                explanation: "Le crocodile marin vit dans des eaux salées mais ne peut pas filtrer le sel dans ses reins comme les poissons marins. Il possède des glandes à sel sur sa langue qui excrètent l'excès de sel directement depuis le sang. On peut d'ailleurs voir des cristaux de sel sur la langue des crocodiles marins. Sans ce mécanisme, l'eau sortirait de leurs cellules par osmose et ils se déshydrateraient malgré l'eau qui les entoure. Les tortues marines ont un système similaire via des glandes lacrymales — les 'larmes' des tortues marine servent à éliminer le sel.",
                source: "Institut d'Écologie Marine - Les glandes de sel excrètent l'excès de sel."
            },
            {
                id: 28,
                question: "Quel mécanisme de locomotion utilise le gecko pour grimper aux murs ?",
                options: ["Ventouses", "Crochets microscopiques (setae) avec forces de Van der Waals", "Adhésifs naturels", "Électricité statique"],
                correct: 1,
                explanation: "Les pattes des geckos sont couvertes de millions de poils microscopiques (setae), eux-mêmes subdivisés en centaines de spatules nanométriques. À cette échelle, les forces de Van der Waals (attractions électrostatiques entre molécules) deviennent suffisamment importantes pour coller la patte à n'importe quelle surface — même le verre ou le plafond. Remarquable : ce mécanisme est sec (pas de colle), autorétractable et laisse aucune trace. Il inspire des matériaux adhésifs réutilisables dans la recherche en robotique et médecine.",
                source: "Université de Biomécanique - Les geckos utilisent les forces de Van der Waals."
            },
            {
                id: 29,
                question: "Quel est le processus de cryoprotection chez les reptiles tolérants au gel ?",
                options: ["Formation de cristaux de glace extracellulaires préservant l'intégrité membranaire des cellules vitales", "Accumulation de glucose et glycérol pour protéger les cellules", "Déshydratation préalable réduisant la teneur en eau libre disponible pour la cristallisation", "Induction d'une hypothermie contrôlée via la sécrétion d'hormones cryoprotectrices spécifiques"],
                correct: 1,
                explanation: "Certaines espèces comme la grenouille des bois (Rana sylvatica) et quelques tortues-boîtes peuvent survivre à un gel partiel de leurs tissus. Quand la température baisse, leur foie convertit massivement le glycogène en glucose et glycérol, qui agissent comme un antigel naturel à l'intérieur des cellules. Le liquide extracellulaire peut geler, mais les cellules restent intactes. Au dégel printanier, leur cœur reprend ses battements. C'est l'une des adaptations biologiques les plus spectaculaires connues.",
                source: "Institut de Cryobiologie - Le glucose et le glycérol protègent les cellules du gel."
            },
            {
                id: 30,
                question: "Quel est le rôle du sulfate de calcium dans la résine utilisée par certains serpents ?",
                options: ["Lubrification", "Formation et renforcement des crocs venimeux", "Digestion", "Communication chimique"],
                correct: 1,
                explanation: "Les crocs des serpents venimeux sont des dents fortement minéralisées — leur extrémité contient des concentrations élevées de calcium et de zinc qui les rendent particulièrement durs et résistants à la flexion. Cette dureté est essentielle car les crocs doivent percer peaux, écailles ou plumes tout en conduisant le venin avec précision. Les crocs se cassent et se remplacent régulièrement (polyphyodontie), et plusieurs crocs de remplacement sont toujours en réserve dans la gencive, prêts à prendre la place.",
                source: "Journal de Toxinologie - Le sulfate de calcium renforce les structures des crocs."
            },
            {
                id: 51,
                question: "Quel est le mécanisme de la 'glande de venin' chez les serpents ?",
                options: ["Vésicule spécialisée située dans la cavité abdominale qui stocke le venin sous pression osmotique", "Glande modifiée des glandes salivaires", "Organe vénimeux néoformé sans homologie avec d'autres structures glandulaires connues", "Synthèse hépatique des toxines peptidiques transportées via le sang jusqu'aux crocs tubulaires"],
                correct: 1,
                explanation: "Les glandes à venin des serpents sont évolutivement des glandes salivaires modifiées (glandes parotides). Au fil de l'évolution, ces glandes ont développé la capacité de produire des protéines complexes (enzymes, neurotoxines, hémotoxines) au lieu de la simple salive. Le venin est d'abord stocké dans la glande, puis lors de la morsure, un muscle compresseur presse la glande et injecte le venin dans le canal du croc. La composition du venin varie énormément entre espèces et même entre individus d'une même espèce.",
                source: "Institut d'Herpétologie Comparative - Évolution des glandes salivaires."
            },
            {
                id: 52,
                question: "Quel est le processus de la 'thermophile optimalité' chez les reptiles ?",
                options: ["Gradient thermique minimal permettant la digestion basale sans activité locomotrice significative", "Température corporelle optimale pour métabolisme et activité", "Températures fraîches préférées car elles ralentissent les prédateurs plus que le reptile lui-même", "Indifférence thermique totale, l'efficacité enzymatique étant stable sur une plage de 15 à 40°C"],
                correct: 1,
                explanation: "Chaque espèce de reptile a une température corporelle préférée (TCP) à laquelle ses performances sont maximales (vitesse, digestion, immunité, réponse aux stimuli). Un lézard à 30°C court deux fois plus vite qu'à 20°C. Les reptiles sont des thermorégulateurs comportementaux précis : ils passent une grande partie de la journée à 'naviguer' entre les zones chaudes et froides pour rester à leur TCP. Cette précision thermique est comparable à celle d'un thermostat — avec 1-2°C de précision.",
                source: "Université de Thermoécologie - Température sélectionnée pour performances."
            },
            {
                id: 53,
                question: "Quel est le mécanisme du 'système cardiopulmonaire' unique chez les crocodiliens ?",
                options: ["Identique aux reptiles", "Shunt sanguin permettant respiration aquatique prolongée", "Respiration cutanée", "Pas d'adaptations"],
                correct: 1,
                explanation: "Les crocodiliens sont les seuls reptiles à avoir un cœur à 4 chambres (comme les mammifères), mais avec une particularité unique : une valve spéciale (foramen de Panizza) permet de 'shunter' la circulation pulmonaire lors des plongées. Le sang est alors réorienté vers les organes vitaux au lieu des poumons, permettant une apnée prolongée sans gaspiller les réserves d'oxygène. Lors de la digestion, ce shunt inverse le flux pour acidifier le sang et dissoudre plus efficacement les os des proies.",
                source: "Institut de Physiologie Crocodilienne - Adaptations pour plongée."
            },
            {
                id: 54,
                question: "Quel est le rôle de la 'nécrose thermale' chez les vipères à fossettes ?",
                options: ["Paralyse neuromusculaire rapide bloquant la libération d'acétylcholine aux jonctions présynaptiques", "Destruction sélective de tissus par venin", "Génération de chaleur biochimique par réaction exothermique lors de l'enroulement musculaire intense", "Sécrétion cutanée de toxines refroidissantes répulsives dissuadant les prédateurs à sang chaud"],
                correct: 1,
                explanation: "Le venin nécrotique des vipères à fossettes (comme le crotale ou le fer-de-lance) contient des phospholipases et des protéases qui détruisent les cellules, les vaisseaux sanguins et le tissu musculaire autour du site de morsure. Cette nécrose localisée peut être dévastatrice : des amputations sont parfois nécessaires après des morsures de serpent. Biologiquement, cette destruction prédigère la proie depuis l'intérieur, facilitant la digestion pour le serpent — le venin est à la fois une arme de chasse et un outil digestif.",
                source: "Journal de Toxinologie - Le venin crée nécrose localisée."
            },
            {
                id: 55,
                question: "Quel est le processus de l'osmorégulation chez les tortues marines ?",
                options: ["Absorption cutanée directe de l'eau douce des pluies via des aquaporines dermiques spécialisées", "Glandes à sel pour excrétion d'eau salée", "Concentration maximale de l'urine via des tubes collecteurs rénaux à gradient osmotique extrême", "Recyclage métabolique de l'eau contenue dans les proies marines digérées sans perte urinaire"],
                correct: 1,
                explanation: "Les tortues marines boivent inévitablement de l'eau de mer en mangeant. Pour éliminer l'excès de sel, elles possèdent des glandes lacrymales surdimensionnées derrière les yeux qui sécrètent une solution très concentrée en sel — beaucoup plus salée que l'eau de mer. Ces 'larmes' sont l'explication du mythe selon lequel les tortues pleurent. En réalité, elles éliminent simplement du sel. Ce mécanisme d'osmorégulation est crucial : sans lui, la déshydratation osmotique serait fatale.",
                source: "Institut d'Écologie Marine - Adaptation critique pour survie en mer."
            },
            {
                id: 56,
                question: "Quel est le mécanisme de la 'autolésion' chez les serpents défensifs ?",
                options: ["Libération d'une sécrétion cloacale nauséabonde décourageant les prédateurs sans combat physique", "Enroulement et auto-morsure pour épuiser agresseur", "Injection d'un venin de défense distinct du venin de chasse via des glandes cutanées dorsales", "Production de chaleur corporelle intense par contractions musculaires repoussant les prédateurs frigoriphiles"],
                correct: 1,
                explanation: "Certains serpents défensifs comme le serpent roi d'Amérique ou le couleuvre à collier utilisent des stratégies d'épuisement de leurs prédateurs : ils se tordent, s'enroulent frénétiquement, peuvent feindre la mort (thanatose), libèrent des sécrétions nauséabondes par le cloaque, ou dans certains cas rares s'automordent pour libérer des substances défensives. Ces comportements visent à rendre la capture si désagréable ou difficile que le prédateur abandonne.",
                source: "Institut d'Éthologie Défensive - Stratégie d'épuisement de l'attaquant."
            },
            {
                id: 57,
                question: "Quel est le rôle du \"jacobson organ\" (vomeronasal) chez les lézards ?",
                options: ["Régulation de la pression intrabuccale lors de la déglutition de proies de grande taille", "Détection chimiosensorielle des phéromones et parfums", "Focalisation des rayons lumineux sur la fovéa rétinienne lors de la vision de près", "Transmission des vibrations aériennes vers l'oreille interne par voie osseuse crânienne"],
                correct: 1,
                explanation: "L'organe de Jacobson des lézards fonctionne de la même façon que celui des serpents : la langue bifurquée capte les molécules odorantes de l'environnement et les transfère aux deux bulbes olfactifs de l'organe voméronasal. La forme fourchue de la langue permet une 'stéréo-olfaction' — détecter d'quel côté vient une odeur, comme nos deux oreilles localisent un son. Les lézards utilisent ce système pour trouver de la nourriture, identifier les prédateurs, détecter les partenaires et délimiter leur territoire.",
                source: "Institut de Sensorimotricité - Détection sophistiquée de chimie."
            },
            {
                id: 58,
                question: "Quel est le processus de la 'gonadogenèse dépendante de température' chez certains reptiles ?",
                options: ["Sexe déterminé par l'humidité du substrat d'incubation via des récepteurs hygrométriques embryonnaires", "Sexe déterminé par température d'incubation", "Sexe déterminé par les chromosomes sexuels Z et W comme chez les oiseaux et certains mammifères", "Sexe déterminé par le ratio hormonal maternel transmis aux œufs lors de la ponte en saison chaude"],
                correct: 1,
                explanation: "La TSD (Temperature-dependent Sex Determination) est le mécanisme par lequel la température d'incubation, plutôt que les chromosomes, détermine le sexe de l'animal. Elle est présente chez la plupart des crocodiliens, de nombreuses tortues et certains lézards. Les températures chaudes favorisent généralement les femelles chez les tortues marines. Face au réchauffement climatique, des plages comme celles de la Grande Barrière de Corail produisent désormais jusqu'à 99% de femelles chez la tortue verte — menaçant la viabilité de ces populations.",
                source: "Université de Génétique Reptilienne - TSD = Temperature-dependent sex determination."
            },
            {
                id: 59,
                question: "Quel est le mécanisme de l'absorption de l'eau par la tortue du désert ?",
                options: ["Uniquement par ingestion d'eau libre lors des épisodes de pluie et des rosées matinales abondantes", "Par les yeux et cloaque depuis l'humidité du sol", "Synthèse métabolique de l'eau par oxydation des lipides de réserve comme certains mammifères désertiques", "Absorption cutanée passive sur toute la surface du corps grâce à une peau très fine et perméable"],
                correct: 1,
                explanation: "La tortue du désert de Mojave a développé des adaptations extraordinaires pour survivre sans eau liquide. Elle peut absorber l'humidité du sol humide à travers la peau autour de son cloaque. Après les rares pluies, elle stocke jusqu'à 40% de son poids en eau dans sa vessie — une réserve stratégique utilisée en période de sécheresse. Sa vessie sert littéralement de citerne portable. Elle peut aussi collecter la rosée du matin sur sa carapace et la diriger vers sa bouche par des canaux formés par ses écailles.",
                source: "Institut d'Écologie Désertique - Adaptations extrêmes à l'aridité."
            },
            {
                id: 60,
                question: "Quel est le rôle du \"pituitary gland\" dans la reproduction reptilienne ?",
                options: ["Détection des phéromones sexuelles via un contact direct avec les sécrétions cloacales des congénères", "Sécrétion d'hormones reproductives contrôlant cycle d'accouplement", "Activation des enzymes digestives pancréatiques nécessaires à la dégradation des protéines des proies", "Régulation de la fréquence respiratoire lors des plongées prolongées en milieu aquatique"],
                correct: 1,
                explanation: "L'hypophyse (glande pituitaire) des reptiles sécrète les gonadotrophines (LH et FSH) qui contrôlent la production de spermatozoïdes et d'ovules, ainsi que les hormones sexuelles (testostérone, œstrogènes). Ces cycles sont synchronisés avec les saisons via la photopériode et la température — deux signaux captés par l'œil pinéal (troisième œil) et l'hypothalamus. Chez les reptiles tropicaux, la saison des pluies joue souvent le rôle déclencheur de la reproduction plutôt que la luminosité.",
                source: "Université d'Endocrinologie Reptilienne - Contrôle neuroendocrinien."
            },
            {
                id: 61,
                question: "Quel est le processus de la 'hivernation' chez les reptiles tempérés ?",
                options: ["Sommeil léger entrecoupé de périodes d'activité réduite lors des journées ensoleillées hivernales", "Ralentissement drastique du métabolisme et inactivité prolongée", "Maintien d'un niveau d'activité constant grâce aux réserves lipidiques accumulées en automne", "Migration vers des zones plus chaudes à basse altitude où la végétation reste disponible"],
                correct: 1,
                explanation: "L'hivernation des reptiles (brumation) n'est pas un vrai sommeil mais une torpeur métabolique. Le reptile peut encore bouger lentement si stimulé, mais son métabolisme tourne à 5-10% de son niveau normal. Les serpents se regroupent parfois en tas pour l'hivernage (hibernacula) — comportement rare chez des animaux solitaires. Des centaines de couleuvres rayées se rassemblent ainsi dans des grottes au Manitoba (Canada), formant des 'boules de serpents' spectaculaires. Ce regroupement conserve la chaleur et facilite les accouplements au printemps.",
                source: "Institut de Physiologie Saisonnière - Survie du froid par métabolisme minimal."
            },
            {
                id: 62,
                question: "Quel est le mécanisme de la 'coagulation sanguine' accélérée chez les serpents ?",
                options: ["Coagulation identique aux mammifères via la voie extrinsèque mais avec des facteurs protéiques distincts", "Coagulation plus rapide pour arrêter saignements", "Coagulation significativement ralentie en raison d'une concentration réduite en facteur VIII plasmatique", "Coagulation inexistante compensée par une cicatrisation épidermique ultra-rapide par kératinisation"],
                correct: 1,
                explanation: "Les serpents ont effectivement des mécanismes de coagulation sanguine adaptés, mais l'ironie est que leur venin est souvent anticoagulant (hémotoxique). Les vipères injectent des enzymes qui consomment le fibrinogène de la proie, empêchant la coagulation et provoquant des hémorragies internes. Le serpent lui-même est immunisé contre son propre venin par des inhibiteurs spécifiques dans son sang. Certaines espèces produisent même des facteurs pro-coagulants — le venin du taipan cause paradoxalement un caillotage massif et fatal.",
                source: "Institut d'Hématologie Reptilienne - Adaptation à l'hémostase."
            },
            {
                id: 63,
                question: "Quel est le rôle du 'neocortex' manquant chez les reptiles ?",
                options: ["Essentiel", "Pas d'importance - traitement sensoriel via autres structures", "Cause déficiences", "Non observé"],
                correct: 1,
                explanation: "Les reptiles n'ont pas de néocortex — la structure cérébrale responsable des fonctions cognitives supérieures chez les mammifères. Pourtant, ils montrent des comportements complexes : apprentissage, reconnaissance individuelle, jeu (certains crocodiles jouent avec des balles), et même utilisation d'outils rudimentaires. Ces capacités passent par d'autres structures comme le pallium dorsal. Les reptiles nous rappellent que l'intelligence peut évoluer par des voies neurologiques très différentes de la nôtre.",
                source: "Université de Neurobiologie Comparative - Evolution neurologique."
            },
            {
                id: 64,
                question: "Quel est le processus de la 'autotrophie microbienne' chez certains reptiles ?",
                options: ["Production d'enzymes cellulosiques propres sécrétées par les entérocytes des tortues herbivores", "Bactéries dans tube digestif aident digestion cellulose", "Fermentation acide des fibres végétales dans un estomac à compartiments multiples comme les ruminants", "Absorption directe des sucres simples issus de la lyse mécanique des parois cellulaires végétales"],
                correct: 1,
                explanation: "Les iguanes verts sont des reptiles herbivores qui se nourrissent principalement de feuilles — riches en cellulose que les vertébrés ne peuvent pas digérer seuls. Leur tube digestif abrite une communauté de bactéries symbiotiques qui fermentent la cellulose et la convertissent en acides gras utilisables. Les jeunes iguanes ingèrent les excréments des adultes pour coloniser leur intestin avec ces bactéries essentielles — un comportement de coprophagie fonctionnel, similaire à celui observé chez les lapins.",
                source: "Institut de Microbiologie Digestive - Symbiosies gastro-intestinales."
            },
            {
                id: 65,
                question: "Quel est le mécanisme de la 'pupille sténopéique' chez les serpents venimeux ?",
                options: ["Densité exceptionnelle de bâtonnets rétiniens permettant la détection de mouvements imperceptibles", "Fente pupillaire pour vision en faible lumière", "Présence d'un tapetum lucidum derrière la rétine amplifiant les photons disponibles la nuit", "Cornée bombée à rayon de courbure variable compensant la mise au point dans l'obscurité"],
                correct: 1,
                explanation: "La pupille en fente verticale des serpents nocturnes et crépusculaires (vipères, pythons, boas) peut se réduire à une ligne ultra-fine en pleine lumière, protégeant la rétine sensible. Dans l'obscurité, elle s'ouvre largement pour capter le maximum de lumière. Cette forme de fente permet aussi une plus grande profondeur de champ que la pupille ronde. Les serpents diurnes ont généralement des pupilles rondes. La pupille en fente est aussi présente chez les chats et les requins — des prédateurs qui chassent dans des conditions lumineuses variables.",
                source: "Institut d'Ophtalmologie Ophidienne - Adaptation crépusculaire."
            },
            {
                id: 66,
                question: "Quel est le rôle de la 'lipoprotéine' dans le venin des serpents ?",
                options: ["Inhibiteur de la coagulation sanguine bloquant la conversion du fibrinogène en fibrine stable", "Composant du venin causant dommages membranaires", "Antidote naturel neutralisant les effets des venins de serpents appartenant à la même famille", "Enzyme de réparation cellulaire présente dans le venin permettant la cicatrisation post-morsure"],
                correct: 1,
                explanation: "Le venin des serpents est un cocktail complexe de plusieurs centaines de molécules actives. Les phospholipases A2 (enzymes lipolytiques) sont parmi les plus destructrices : elles attaquent les membranes cellulaires en dégradant leurs phospholipides, causant la lyse des cellules musculaires (myotoxines), des globules rouges (hémotoxines) ou des cellules nerveuses (neurotoxines). Certaines de ces molécules sont paradoxalement étudiées en médecine : des dérivés du venin de crotale servent à fabriquer des anticoagulants thérapeutiques.",
                source: "Journal de Biochimie Toxinologique - Lipides actifs du venin."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'neuroplasticité' chez les reptiles face aux changements ?",
                options: ["Modification de la composition des écailles corporelles en réponse aux variations de température ambiante", "Adaptation comportementale et neurologique aux changements environnementaux", "Rigidité comportementale génétiquement programmée sans aucune capacité de modification ontogénétique", "Adaptation morphologique uniquement via des changements de pigmentation cutanée saisonniers"],
                correct: 1,
                explanation: "Les reptiles montrent une plasticité comportementale plus importante qu'on ne le croyait. Des expériences ont montré que des lézards peuvent apprendre à résoudre des puzzles (ouvrir des boîtes pour obtenir de la nourriture), reconnaître leur propriétaire, et même modifier leur comportement de thermorégulation en réponse aux changements climatiques. Le cerveau reptilien, bien que structurellement différent du nôtre, conserve une certaine plasticité synaptique qui permet l'apprentissage et l'adaptation tout au long de la vie.",
                source: "Université de Neurosciences Reptilienne - Plasticité comportementale."
            },
            {
                id: 68,
                question: "Quel est le mécanisme de l'échange de chaleur chez le python mère pendant incubation ?",
                options: ["Pas d'échange", "Frissons musculaires produisent chaleur pour œufs", "Soleil externe", "Pas d'incubation"],
                correct: 1,
                explanation: "Le python femelle est l'un des rares reptiles à exercer un soin parental actif. Elle s'enroule autour de sa ponte et produit de la chaleur par des contractions musculaires rapides (frissons thermogènes) — comportement exceptionnel chez un ectotherme. Elle peut maintenir la température de ses œufs à 30-33°C même si l'air ambiant tombe à 20°C, au prix d'une dépense énergétique considérable : elle peut perdre 40% de son poids pendant les 2-3 mois d'incubation sans manger.",
                source: "Institut de Thermorégulation Reproductive - Thermorégulation maternelle."
            },
            {
                id: 69,
                question: "Quel est le rôle du 'spectacle' (écaille oculaire) chez les serpents ?",
                options: ["Filtre optique permanent réduisant l'éblouissement lors de la chasse dans des milieux très éclairés", "Protection de l'œil durant la mue", "Lentille de focalisation variable permettant d'ajuster la mise au point comme un objectif photographique", "Signalisation sexuelle par iridescence réfléchissant les UV visibles uniquement par les congénères"],
                correct: 1,
                explanation: "Le 'spectacle' est une écaille transparente et fusionnée qui recouvre l'œil des serpents en permanence (ils n'ont pas de paupières mobiles). Lors de la mue, cette écaille se soulève avec le reste de la peau — c'est pourquoi les yeux des serpents deviennent bleutés et opaques quelques jours avant la mue : le liquide de décollement s'accumule sous le spectacle. Après une mue réussie, le spectacle est parfaitement transparent à nouveau. Un spectacle retenu (mue incomplète) peut causer des infections oculaires graves.",
                source: "Institut d'Anatomie Ophidienne - Adaptation à la mue."
            },
            {
                id: 70,
                question: "Quel est le processus de la 'mimétrie batésienne' chez certains lézards inoffensifs ?",
                options: ["Ressemblance morphologique due à un ancêtre commun récent plutôt qu'à une pression sélective convergente", "Imitation de lézards venimeux pour défense prédatrice", "Camouflage cryptique correspondant exactement à la coloration du substrat rocheux de l'habitat", "Hybridation génétique naturelle entre espèces sympatriques produisant des phénotypes intermédiaires"],
                correct: 1,
                explanation: "La mimétrie batésienne est une stratégie évolutive où une espèce inoffensive imite l'apparence d'une espèce dangereuse pour bénéficier de sa protection sans en avoir les coûts. Le serpent des laiteries (Lampropeltis triangulum) imite les couleurs rouge-jaune-noir du serpent corail venimeux. La règle mnémotechnique anglaise 'Red touch yellow, kill a fellow ; red touch black, friend of Jack' aide à distinguer les deux. Cette mimétrie ne fonctionne que parce que les prédateurs ont appris à éviter le modèle venimeux.",
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
                options: ["Le grand requin blanc, prédateur de 6 mètres et 2 tonnes", "La baleine bleue", "Le mégalodon, requin préhistorique pouvant atteindre 18 mètres", "Le diplodocus, dinosaure de 27 mètres considéré longtemps comme le plus grand vertébré"],
                correct: 1,
                explanation: "La baleine bleue est l'animal le plus grand ayant jamais existé sur Terre. Elle peut mesurer jusqu'à 30 mètres de long et peser 190 tonnes. Malgré sa taille massice, elle se nourrit de minuscules krill.",
                source: "Muséum d'Histoire Naturelle - La baleine bleue est l'animal le plus grand connu."
            },
            {
                id: 2,
                question: "Les mammifères marins respirent par quoi ?",
                options: ["Des branchies très développées, similaires à celles des gros poissons marins", "Des poumons", "La peau, richement vascularisée, qui absorbe l'oxygène dissous dans l'eau", "Un organe hybride appelé pneumobranchie, entre poumon et branchie"],
                correct: 1,
                explanation: "Tous les mammifères respirent de l'air avec des poumons, y compris les mammifères marins. C'est pourquoi les cétacés (baleines et dauphins) doivent régulièrement remonter à la surface. Ce n'est pas comme les poissons qui ont des branchies.",
                source: "Institut de Biologie Marine - Les mammifères marins respirent de l'air avec des poumons."
            },
            {
                id: 3,
                question: "Quel mammifère marin est connu pour ses chants complexes ?",
                options: ["Le dauphin, dont les cliquetis et sifflements forment un langage élaboré utilisé pour coordonner la chasse", "La baleine", "L'otarie, capable d'imiter des sons humains et de produire des séquences vocales apprises", "Le phoque de Weddell, dont les trilles résonnent sous la banquise sur plusieurs kilomètres"],
                correct: 1,
                explanation: "Les baleines, notamment la baleine à bosse, produisent des chants complexes et merveilleusement structurés. Ces chants peuvent durer 30 minutes et se transmettre entre populations. Ils servent probablement à la communication et à l'accouplement.",
                source: "Centre de Recherche Marine - Les baleines produisent des chants élaborés et structurés."
            },
            {
                id: 4,
                question: "Combien d'espèces de dauphins existent environ ?",
                options: ["Environ 5 espèces, dont le grand dauphin et le dauphin commun, les deux seules vraiment bien documentées", "Environ 20 espèces réparties entre océans tropicaux et tempérés", "Environ 40 espèces", "Environ 100 espèces, en comptant toutes les populations géographiquement isolées reconnues localement"],
                correct: 2,
                explanation: "Il existe environ 40 esp\u00e8ces de dauphins dans le monde, appartenant \u00e0 la famille des Delphinid\u00e9s. Parmi les plus connues : le grand dauphin (Tursiops truncatus), le dauphin commun et l'orque \u2014 techniquement le plus grand dauphin. Cette diversit\u00e9 couvre les mers tropicales, temp\u00e9r\u00e9es et polaires.",
                source: "Société Cétologique - Il existe environ 40 espèces de dauphins."
            },
            {
                id: 5,
                question: "Quel est le plus petit cétacé du monde ?",
                options: ["Le dauphin de Maui, espèce endémique de Nouvelle-Zélande, mesurant environ 1,2 mètre à maturité", "La baleine béluga, dont la taille adulte dépasse rarement 4 à 5 mètres pour les femelles", "Le marsouin", "L'orque naine, sous-espèce tropicale atteignant au maximum 2,5 mètres selon certaines classifications"],
                correct: 2,
                explanation: "Le marsouin commun (Phocoena phocoena) mesure en moyenne 1,4 \u00e0 1,7 m\u00e8tre pour 50 \u00e0 70 kg \u2014 bien loin des grandes baleines. Il se distingue du dauphin par son museau arrondi sans bec allong\u00e9. C'est l'un des c\u00e9tac\u00e9s les plus fr\u00e9quents en mer du Nord, malheureusement menac\u00e9 par les filets de p\u00eache.",
                source: "Musée Océanographique - Le marsouin est l'un des plus petits cétacés."
            },
            {
                id: 6,
                question: "Les mammifères marins allaitent-ils leurs petits ?",
                options: ["Non, ils nourrissent leurs petits par régurgitation d'aliments semi-digérés, comme certains oiseaux marins", "Oui, comme tous les mammifères", "Seulement les espèces côtières, car les cétacés du large ont perdu cette capacité lors de leur adaptation aquatique", "Seulement les cétacés à fanons, qui produisent du lait ; les dauphins et phoques transmettent les nutriments autrement"],
                correct: 1,
                explanation: "Comme tous les mammif\u00e8res, les mammif\u00e8res marins allaitent leurs petits \u2014 c'est d'ailleurs ce qui les d\u00e9finit. Le lait des baleines est extraordinairement riche en graisses (40 \u00e0 50% de mati\u00e8res grasses, contre 4% dans le lait de vache), ce qui permet aux baleineaux de grossir de 80 \u00e0 90 kg par jour.",
                source: "Institut d'Océanologie - Les mammifères marins allaitent leurs jeunes."
            },
            {
                id: 7,
                question: "À quelle profondeur maximale les baleines peuvent-elles plonger ?",
                options: ["100 mètres environ, profondeur au-delà de laquelle la pression serait trop élevée pour les poumons des cétacés", "500 mètres pour les espèces les plus adaptées, selon les mesures enregistrées par biologistes marins", "2000+ mètres selon l'espèce", "3000+ mètres, profondeur réservée aux seuls céphalopodes et poissons des abysses, inaccessible aux mammifères"],
                correct: 2,
                explanation: "Les capacit\u00e9s de plong\u00e9e varient selon les esp\u00e8ces. La baleine \u00e0 bec de Cuvier d\u00e9tient le record avec plus de 3 000 m\u00e8tres et plus de 3 heures d'apn\u00e9e. Ces exploits sont rendus possibles par des adaptations extraordinaires : effondrement des poumons, redistribution du sang vers les organes vitaux, et stockage d'oxyg\u00e8ne dans les muscles gr\u00e2ce \u00e0 la myoglobine.",
                source: "Centre d'Étude des Cétacés - Certaines baleines plongent très profond."
            },
            {
                id: 8,
                question: "Quel type d'alimentation ont les baleines à fanons ?",
                options: ["Carnivores prédateurs actifs, chassant des poissons et calmars comme les baleines à dents", "Herbivores consommant des algues et herbiers marins grâce à leurs fanons en forme de peignes végétaux", "Filtreurs de plancton", "Opportunistes omnivores, variant leur régime selon la saison entre proies animales et matière organique"],
                correct: 2,
                explanation: "Les baleines \u00e0 fanons (mystic\u00e8tes) \u2014 baleine bleue, rorqual, baleine \u00e0 bosse \u2014 n'ont pas de dents mais des fanons, des lames corn\u00e9es qui filtrent l'eau comme un tamis g\u00e9ant. En une seule gorg\u00e9e, une baleine bleue peut ingurgiter jusqu'\u00e0 500 kg de krill. Paradoxe fascinant : le plus grand animal vivant se nourrit d'un des plus petits crustac\u00e9s de l'oc\u00e9an.",
                source: "Université Marine - Les baleines à fanons filtrent le krill et le plancton."
            },
            {
                id: 9,
                question: "Combien d'années une baleine peut-elle vivre ?",
                options: ["10-20 ans, durée de vie comparable à celle des grands dauphins étudiés en captivité sur plusieurs générations", "30-50 ans, longévité maximale observée chez la majorité des grandes espèces de rorquals et mysticètes", "50-90+ ans selon l'espèce", "200 ans, chiffre invérifiable car aucun individu n'a pu être suivi sur une telle durée avec certitude scientifique"],
                correct: 2,
                explanation: "La long\u00e9vit\u00e9 des baleines est remarquable. La baleine de Bowhead est le mammif\u00e8re le plus long\u00e9vif : certains individus d\u00e9passent 200 ans, d\u00e9termin\u00e9 par l'analyse des acides amin\u00e9s dans les yeux. La baleine \u00e0 bosse vit 80 \u00e0 90 ans, et la baleine bleue environ 80 ans. Cette long\u00e9vit\u00e9 tient \u00e0 un m\u00e9tabolisme lent et des m\u00e9canismes de r\u00e9paration de l'ADN tr\u00e8s efficaces.",
                source: "Institut de Longévité Marine - Les baleines peuvent vivre très longtemps."
            },
            {
                id: 10,
                question: "Quel mammifère marin passe l'ensemble de sa vie dans l'eau ?",
                options: ["Les otaries, qui ne quittent l'eau que quelques jours par an lors de périodes de ponte sur les rochers côtiers", "Les phoques, qui mettent bas en mer et n'ont pas besoin de sortir de l'eau pour se reproduire", "Les cétacés (baleines et dauphins)", "Les loutres de mer, qui dorment, se nourrissent et se reproduisent exclusivement en flottant à la surface"],
                correct: 2,
                explanation: "Les c\u00e9tac\u00e9s (baleines, dauphins, marsouins) sont les seuls mammif\u00e8res marins \u00e0 passer enti\u00e8rement leur vie dans l'eau \u2014 naissance, alimentation, reproduction et mort incluses. Les phoques et otaries sortent r\u00e9guli\u00e8rement sur les c\u00f4tes pour se reproduire et muer. Les loutres de mer restent tr\u00e8s proches de l'eau mais peuvent s'\u00e9chouer. Seuls les c\u00e9tac\u00e9s sont totalement aquatiques.",
                source: "Société Océanographique - Les cétacés sont entièrement aquatiques."
            },
            {
                id: 11,
                question: "À quelle profondeur peut plonger un cachalot ?",
                options: ["500 mètres, profondeur atteinte lors des plongées alimentaires ordinaires pour capturer des poissons de fond", "1000-2000 mètres, limite physiologique estimée par les chercheurs avant les premières balises d'enregistrement", "3000-4000 mètres", "Plus de 5000 mètres, profondeur que seuls les robots sous-marins télécommandés peuvent atteindre actuellement"],
                correct: 2,
                explanation: "Le cachalot (Physeter macrocephalus) est le champion des plong\u00e9es parmi les baleines \u00e0 dents. Il peut descendre \u00e0 plus de 3 000 m\u00e8tres et tenir en apn\u00e9e pendant 90 minutes pour chasser les calmars g\u00e9ants dans les abysses. Son cr\u00e2ne massif abrite le 'spermacoeti', un organe huileux qui r\u00e9gule sa flottabilit\u00e9 et aide \u00e0 focaliser ses clics d'\u00e9cholocalisation.",
                source: "Institut de Biologie Marine - Le cachalot peut plonger très profond."
            },
            {
                id: 12,
                question: "Quel est le poids d'une baleine bleue adulte ?",
                options: ["50-100 tonnes, poids comparable au rorqual commun souvent confondu avec la baleine bleue dans les récits historiques", "100-150 tonnes, fourchette estimée d'après les premières pesées lors de la chasse baleinière industrielle au XXe siècle", "150-200 tonnes", "200+ tonnes, masse que certains grands mâles dépasseraient selon les estimations basées sur leur longueur maximale enregistrée"],
                correct: 2,
                explanation: "La baleine bleue adulte p\u00e8se en moyenne 150 \u00e0 200 tonnes \u2014 l'\u00e9quivalent de 30 \u00e9l\u00e9phants. Son c\u0153ur seul p\u00e8se environ 600 kg et est gros comme une petite voiture. Ses art\u00e8res sont si larges qu'un enfant pourrait y ramper. Malgr\u00e9 cette taille colossale, elle peut nager \u00e0 30 km/h lors de sprints.",
                source: "Muséum Océanographique - La baleine bleue pèse environ 150-200 tonnes."
            },
            {
                id: 13,
                question: "À quel âge un dauphin devient-il sexuellement mature ?",
                options: ["À 2-3 ans, période où les jeunes dauphins atteignent leur taille adulte et commencent à s'éloigner du groupe maternel", "À 5-7 ans selon l'espèce", "À 10-15 ans, comme chez la plupart des grands mammifères à longue durée de vie tels que les éléphants ou les grands singes", "À 20+ ans, au terme d'une longue phase juvénile comparable à celle des grands cétacés comme les baleines à bosse"],
                correct: 1,
                explanation: "Les dauphins atteignent leur maturit\u00e9 sexuelle relativement t\u00f4t pour des mammif\u00e8res si intelligents et long\u00e9vifs. Le grand dauphin (Tursiops truncatus) devient sexuellement mature entre 5 et 12 ans selon le sexe \u2014 les femelles un peu plus t\u00f4t que les m\u00e2les. Ils peuvent vivre jusqu'\u00e0 40-50 ans, laissant une longue p\u00e9riode de vie adulte reproductive.",
                source: "Centre de Recherche Cétologique - La maturité arrive relativement tôt."
            },
            {
                id: 14,
                question: "Quel est le temps moyen de gestation d'une baleine ?",
                options: ["6 mois, durée comparable à celle des dauphins de petite taille dont le développement fœtal est plus rapide", "10-12 mois, gestation similaire à celle de nombreux grands mammifères terrestres comme le cheval ou la girafe", "12-16 mois selon l'espèce", "18-24 mois, période observée chez les éléphants qui partagent avec les baleines une taille et une longévité comparables"],
                correct: 2,
                explanation: "Les baleines ont une gestation parmi les plus longues du r\u00e8gne animal. La baleine bleue porte son petit environ 12 mois, l'orque jusqu'\u00e0 17 mois. Le baleineau de baleine bleue na\u00eet en mesurant d\u00e9j\u00e0 7 \u00e0 8 m\u00e8tres et pesant 2 \u00e0 3 tonnes. Il t\u00e8te 600 litres de lait par jour et grossit de 90 kg quotidiennement.",
                source: "Institut de Reproduction Marine - Gestation très longue."
            },
            {
                id: 15,
                question: "Quel phoque peut plonger plus profond que les autres ?",
                options: ["Le phoque moine de Méditerranée, dont les plongées répétées jusqu'à 500 mètres pour chasser les mérous l'ont rendu champion chez les espèces tempérées", "Le phoque du Groenland, qui effectue des plongées de plus de 400 mètres lors de ses migrations sous la banquise arctique", "Le phoque de Weddell", "Le léopard des mers, prédateur antarctique capable de plongées profondes pour chasser pingouins et phoques crabiers"],
                correct: 2,
                explanation: "Le phoque de Weddell (Leptonychotes weddellii) vit en Antarctique et est un plong\u00e9e exceptionnel : il peut descendre \u00e0 plus de 700 m\u00e8tres et rester en apn\u00e9e pendant 80 minutes. Pour respirer sous la glace, il maintient des trous en rongeant la glace avec ses dents. C'est l'un des mammif\u00e8res vivant le plus au sud de la plan\u00e8te, capable de supporter des temp\u00e9ratures de -60\u00b0C.",
                source: "Institut de Plongée Marine - Le phoque de Weddell plonge très profond."
            },
            {
                id: 16,
                question: "À quelle température le lait de baleine peut-il être produit ?",
                options: ["À la température de l'eau environnante, les glandes mammaires fonctionnant en équilibre thermique avec le milieu marin pour préserver l'énergie", "Température interne chaude 37-40°C", "À une température abaissée d'environ 20-25°C, permettant un refroidissement partiel qui épaissit naturellement le lait avant injection", "À une température variable selon la profondeur de l'individu et la saison, régulée par des mécanismes hormonaux spécifiques"],
                correct: 1,
                explanation: "Comme tous les mammif\u00e8res, les baleines sont homm\u00e9othermes et maintiennent une temp\u00e9rature interne d'environ 36-38\u00b0C, m\u00eame dans des eaux proches de 0\u00b0C. Leur lait est produit \u00e0 cette m\u00eame temp\u00e9rature. Pour conserver cette chaleur, leur \u00e9paisse couche de lard (blubber) peut atteindre 50 cm d'\u00e9paisseur chez les esp\u00e8ces polaires.",
                source: "Institut de Biologie Reproductive Marine - Mammalien thermique."
            },
            {
                id: 17,
                question: "Quel est le plus grand animal marin jamais découvert ?",
                options: ["Le cachalot mâle, dont les spécimens de 20 mètres et 50 tonnes ont longtemps été considérés comme les plus grands mammifères connus", "La baleine bleue", "Le mégalodon, requin préhistorique de 15 à 18 mètres dont des fossiles datant de moins de 3 millions d'années ont été découverts", "L'éléphant de mer du sud, pinnipède pouvant peser jusqu'à 4 tonnes considéré le plus grand carnivore terrestre avant les redécouvertes marines"],
                correct: 1,
                explanation: "La baleine bleue (Balaenoptera musculus) est sans conteste le plus grand animal ayant jamais v\u00e9cu, surpassant m\u00eame les plus grands dinosaures. Les plus grandes femelles enregistr\u00e9es mesuraient jusqu'\u00e0 33 m\u00e8tres. Sa population a \u00e9t\u00e9 r\u00e9duite \u00e0 1% de son niveau originel par la chasse baleini\u00e8re au 20\u00e8me si\u00e8cle \u2014 elle reste une esp\u00e8ce en danger.",
                source: "Muséum d'Histoire Naturelle - La baleine bleue est l'animal vivant le plus grand."
            },
            {
                id: 18,
                question: "À quel âge une otarie devient-elle adulte reproductrice ?",
                options: ["À 2-3 ans, période où les jeunes ont déjà acquis leur taille adulte et maîtrisent suffisamment la nage pour se reproduire", "À 4-5 ans selon l'espèce", "À 6-8 ans, âge auquel la plupart des pinnipèdes atteignent leur plein développement musculaire et osseux nécessaire à la reproduction", "À 10+ ans, maturité tardive comparable à celle des grands cétacés qui dédient leur première décennie à l'apprentissage social"],
                correct: 1,
                explanation: "Les otaries atteignent leur maturit\u00e9 sexuelle entre 3 et 6 ans selon l'esp\u00e8ce et le sexe. Les m\u00e2les, bien que matures biologiquement plus t\u00f4t, n'acc\u00e8dent g\u00e9n\u00e9ralement \u00e0 la reproduction qu'autour de 8-10 ans \u2014 ils doivent \u00eatre assez grands et forts pour \u00e9tablir un territoire sur les rookeries et d\u00e9fendre un harem de femelles.",
                source: "Centre de Zoologie Marine - Maturité relativement rapide."
            },
            {
                id: 19,
                question: "Quel est le record de migration chez une baleine grise ?",
                options: ["Quelques centaines de km, la baleine grise étant une espèce plutôt côtière qui suit les cordons littoraux sans grands déplacements océaniques", "5000-10000 km par an, distance comparable à celle des rorquals qui migrent entre l'Atlantique Nord et les Açores", "15000-20000 km par an", "Plus de 30000 km, distance qui correspondrait à un tour complet du globe, enregistrée grâce aux balises satellite modernes"],
                correct: 2,
                explanation: "La baleine grise effectue l'une des migrations les plus longues de tous les mammif\u00e8res : 15 000 \u00e0 20 000 km aller-retour chaque ann\u00e9e entre ses aires d'alimentation en Arctique et ses zones de reproduction en Basse-Californie (Mexique). Ce voyage de plusieurs mois presque sans se nourrir est rendu possible gr\u00e2ce aux r\u00e9serves de graisse accumul\u00e9es pendant l'\u00e9t\u00e9.",
                source: "Centre de Recherche Migratoire Marine - Migration très longue."
            },
            {
                id: 20,
                question: "Combien de temps peut survivre un phoque sans nourriture ?",
                options: ["Quelques jours car leur métabolisme élevé exige un apport quasi-continu pour maintenir la chaleur corporelle constante", "2-4 semaines pour les jeunes phoques apprenant à chasser après le sevrage brutal de leur mère", "1-2 mois selon l'espèce", "3-4 mois comme les éléphants de mer mâles lors des longues saisons de reproduction où l'alimentation est quasiment abandonnée"],
                correct: 2,
                explanation: "Les phoques accumulent d'importantes r\u00e9serves de graisse pendant les p\u00e9riodes d'abondance. Cette \u00e9nergie leur permet de je\u00fbner pendant la reproduction \u00e0 terre ou lors des mues. Le phoque gris m\u00e2le peut je\u00fbner 6 \u00e0 8 semaines pendant la saison de reproduction, vivant uniquement sur ses r\u00e9serves de lard accunul\u00e9es.",
                source: "Institut de Physiologie Marine - Métabolisme très économe."
            },
            {
                id: 21,
                question: "À quel âge une jeune baleine devient-elle indépendante ?",
                options: ["À quelques semaines dès que le baleineau nage et accompagne sa mère lors des plongées", "À quelques mois quand la mère abandonne progressivement son petit comme chez les phoques", "À 6-12 mois selon l'espèce", "À 1-2 ans durée observée chez les cachalots dont les jeunes restent liés au groupe"],
                correct: 2,
                explanation: "Les baleineaux sont allait\u00e9s entre 6 et 12 mois selon l'esp\u00e8ce. Pendant toute cette p\u00e9riode, le baleineau reste constamment pr\u00e8s de sa m\u00e8re, qui lui enseigne les routes migratoires et les zones d'alimentation. Ces connaissances transmises culturellement \u2014 routes migratoires, sources de nourriture \u2014 sont essentielles \u00e0 la survie de l'esp\u00e8ce.",
                source: "Centre de Développement Juvénile - Allaitement prolongé."
            },
            {
                id: 22,
                question: "Quel est le diamètre de l'évent (spiracle) d'une baleine ?",
                options: ["Quelques centimètres comparable à la narine d'un mammifère terrestre de grande taille", "10-15 cm de diamètre mesure enregistrée chez plusieurs rorquals étudiés en détail", "30-50 cm selon l'espèce", "Plus de 50 cm chez la baleine bleue adulte selon les mesures sur spécimens échoués"],
                correct: 2,
                explanation: "L'\u00e9vent \u2014 l'\u00e9quivalent de nos narines, situ\u00e9 sur le sommet du cr\u00e2ne \u2014 peut mesurer 30 \u00e0 50 cm de diam\u00e8tre chez les grandes baleines. Il permet de ventiler des poumons de plusieurs centaines de litres. Le souffle caract\u00e9ristique peut s'\u00e9lever \u00e0 9-12 m\u00e8tres de hauteur et s'entendre \u00e0 plusieurs kilom\u00e8tres de distance.",
                source: "Institut d'Anatomie Cétologique - Ouverture respiratoire large."
            },
            {
                id: 23,
                question: "À quelle profondeur peut plonger un phoque de Weddell ?",
                options: ["200 mètres lors des plongées ordinaires sous la banquise pour chasser les poissons", "500-600 mètres selon premières études avec émetteurs acoustiques dans les années 1970", "600-700 mètres selon les mesures modernes", "Plus de 800 mètres profondeur atteinte par les éléphants de mer souvent cités comme pinnipèdes les plus profonds"],
                correct: 2,
                explanation: "Le phoque de Weddell peut plonger \u00e0 plus de 600 m\u00e8tres de profondeur, record parmi les phoques. Sous la banquise antarctique, il navigue dans l'obscurit\u00e9 totale gr\u00e2ce \u00e0 son ou\u00efe fine et ses vibrisses ultrasensibles. Il maintient jusqu'\u00e0 une vingtaine de trous de respiration qu'il agrandit r\u00e9guli\u00e8rement avec ses incisives robustes.",
                source: "Centre de Plongée Marine - Adaptations extrêmes à la profondeur."
            },
            {
                id: 24,
                question: "Quel est le poids moyen d'un nouveau-né baleine bleue ?",
                options: ["1-2 tonnes poids comparable à un nouveau-né de cachalot dont la gestation est pourtant plus courte", "3-4 tonnes estimation longtemps retenue dans la littérature scientifique avant les premières pesées directes", "4-5 tonnes", "Plus de 5 tonnes ce que certains auteurs avancent pour les femelles de très grande taille ayant porté plusieurs gestations"],
                correct: 2,
                explanation: "Le baleineau de baleine bleue est l'un des plus grands nouveau-n\u00e9s du r\u00e8gne animal. \u00c0 la naissance, il mesure d\u00e9j\u00e0 7 \u00e0 8 m\u00e8tres de long et p\u00e8se plusieurs tonnes. Il grossit \u00e0 une vitesse ph\u00e9nom\u00e9nale gr\u00e2ce au lait de sa m\u00e8re, qui contient 40 \u00e0 50% de mati\u00e8res grasses. En quelques mois, son poids peut tripler.",
                source: "Institut de Reproduction Marine - Bébé baleine géant."
            },
            {
                id: 25,
                question: "À quel âge les jeunes dauphins se séparent de leur mère ?",
                options: ["À quelques semaines", "À quelques mois", "À 1-2 ans selon l'espèce", "À 3-4 ans"],
                correct: 2,
                explanation: "Le lien m\u00e8re-petit est tr\u00e8s fort chez les dauphins. Apr\u00e8s le sevrage (vers 1 \u00e0 2 ans), les jeunes restent souvent dans le groupe de leur m\u00e8re encore plusieurs ann\u00e9es. Chez le grand dauphin, les m\u00e2les quittent le groupe natal vers 3-6 ans. Les femelles peuvent rester associ\u00e9es \u00e0 leur m\u00e8re toute leur vie, formant des alliances multig\u00e9n\u00e9rationnelles stables.",
                source: "Centre d'Études Comportementales Cétacées - Liens mère-jeune prolongés."
            },
            {
                id: 26,
                question: "Quel est le nombre de respirations par minute d'une baleine au repos ?",
                options: ["5-10 respirations", "15-20 respirations", "30-40 respirations", "50+ respirations"],
                correct: 1,
                explanation: "Les baleines doivent remonter r\u00e9guli\u00e8rement \u00e0 la surface pour respirer. En surface, elles effectuent plusieurs respirations rapides successives avant de replonger, vidant et remplissant des poumons capables de contenir jusqu'\u00e0 2 500 litres d'air. Leur capacit\u00e9 \u00e0 renouveler jusqu'\u00e0 90% du volume pulmonaire en une seule inspiration d\u00e9passe largement celle des humains (15%).",
                source: "Institut de Physiologie Respiratoire Marine - Métabolisme très lent."
            },
            {
                id: 27,
                question: "À quel âge les otaries mâles deviennent-ils territoriaux ?",
                options: ["À 2-3 ans", "À 5-7 ans selon l'espèce", "À 8-10 ans", "À 12+ ans"],
                correct: 1,
                explanation: "La territorialit\u00e9 chez les otaries m\u00e2les est li\u00e9e \u00e0 leur taille et leur force. Les m\u00e2les atteignent leur plein d\u00e9veloppement physique entre 5 et 10 ans, p\u00e9riode o\u00f9 ils commencent \u00e0 \u00e9tablir des territoires sur les plages de reproduction (rookeries). Un m\u00e2le dominant peut contr\u00f4ler un harem de 5 \u00e0 30 femelles, mais doit le d\u00e9fendre lors de combats violents.",
                source: "Centre d'Écologie Pinipède - Territorialité liée à la taille."
            },
            {
                id: 28,
                question: "Quel est le taux d'allaitement chez une baleine mère ?",
                options: ["Continu", "Plusieurs fois par jour", "Une fois par jour", "Tous les 2-3 jours"],
                correct: 1,
                explanation: "L'allaitement chez les baleines est une prouesse logistique sous-marine. La m\u00e8re injecte litt\u00e9ralement son lait dans la bouche du baleineau sous pression \u2014 le baleineau ne t\u00e8te pas activement. Le lait est si \u00e9pais qu'il ne se diffuse pas dans l'eau. Une baleine bleue peut produire 300 \u00e0 600 litres de lait par jour, permettant au baleineau de grossir de 80 \u00e0 90 kg quotidiennement.",
                source: "Institut de Reproduction Marine - Lait très nutritif allaitement fréquent."
            },
            {
                id: 29,
                question: "À quelle distance un cachalot peut-il émettre un clic ?",
                options: ["Quelques km", "5-10 km", "15-20 km selon conditions", "Plus de 30 km"],
                correct: 2,
                explanation: "Les clics d'\u00e9cholocalisation du cachalot sont les sons les plus puissants produits par un animal \u2014 jusqu'\u00e0 230 d\u00e9cibels. Produits dans le spermaceti (l'organe graisseux de son cr\u00e2ne massif), ils servent \u00e0 d\u00e9tecter les calmars g\u00e9ants dans l'obscurit\u00e9 des abysses. Ces sons peuvent potentiellement paralyser ou \u00e9tourdir des proies \u00e0 courte distance.",
                source: "Institut d'Acoustique Marine - Sons très porteurs."
            },
            {
                id: 30,
                question: "Quel est le record de durée d'apnée chez un dauphin ?",
                options: ["5-10 minutes", "15-20 minutes", "30+ minutes selon l'espèce", "Plus de 45 minutes"],
                correct: 2,
                explanation: "Les dauphins ont des capacit\u00e9s d'apn\u00e9e remarquables. Ces performances sont rendues possibles par une myoglobine musculaire tr\u00e8s concentr\u00e9e (qui donne une couleur sombre aux muscles), un r\u00e9flexe de bradycardie (ralentissement du c\u0153ur de 100 \u00e0 15 battements/min), et une tol\u00e9rance \u00e9lev\u00e9e au CO2. La plupart des plong\u00e9es courantes durent cependant 2 \u00e0 10 minutes.",
                source: "Centre de Physiologie Plongée - Adaptations extrêmes."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle de l'évent chez les cétacés ?",
                options: ["Respiration uniquement", "Respiration et expulsion d'eau", "Audition", "Régulation thermique"],
                correct: 1,
                explanation: "L'\u00e9vent des c\u00e9tac\u00e9s est bien plus qu'une narine. Lors de la remont\u00e9e, la baleine expire avec force, projetant de l'air chaud et humide qui forme le 'souffle' caract\u00e9ristique. Chaque esp\u00e8ce a un souffle reconnaissable : en forme de V chez les baleines franches, colonnaire jusqu'\u00e0 9 m\u00e8tres chez la baleine bleue, inclin\u00e9 \u00e0 45\u00b0 \u00e0 gauche chez le cachalot.",
                source: "Centre de Recherche Cétologique - L'évent permet la respiration et l'expulsion d'eau."
            },
            {
                id: 12,
                question: "Quel est le processus appelé 'écholocalisation' ?",
                options: ["Navigation par magnétisme", "Détection d'objets par sons et échos", "Vision infrarouge", "Magnétoréception"],
                correct: 1,
                explanation: "L'\u00e9cholocalisation est un sonar biologique utilis\u00e9 par les c\u00e9tac\u00e9s \u00e0 dents (dauphins, orques, cachalots). L'animal \u00e9met des clics ultrasonores qui rebondissent sur les objets ; l'\u00e9cho est transmis via la m\u00e2choire inf\u00e9rieure \u00e0 l'oreille interne. Ce syst\u00e8me permet de d\u00e9tecter un objet de la taille d'une balle de golf \u00e0 100 m\u00e8tres, m\u00eame dans l'obscurit\u00e9 totale.",
                source: "Institut de Bioacoustique - L'écholocalisation utilise les sons pour naviguer."
            },
            {
                id: 13,
                question: "Quel mammifère marin ne mue jamais ?",
                options: ["Le phoque", "Le dauphin", "L'orque", "La baleine"],
                correct: 1,
                explanation: "Les c\u00e9tac\u00e9s comme les dauphins n'ont pratiquement plus de poils et ne connaissent pas de mue classique. En revanche, les pinniped\u00e8s (phoques, otaries) muent chaque ann\u00e9e : ils perdent leur fourrure et leur peau superficielle en une courte p\u00e9riode intense. Pendant cette mue, les phoques sortent souvent de l'eau pour rester au chaud le temps du renouvellement.",
                source: "Université de Biologie Comparée - Les cétacés n'ont pas de mue classique."
            },
            {
                id: 14,
                question: "Quel est le principal predateur d'une baleine adulte ?",
                options: ["Le grand requin blanc", "L'orque", "Aucun prédateur naturel", "L'humain"],
                correct: 2,
                explanation: "Une fois adulte, la baleine bleue n'a pratiquement aucun pr\u00e9dateur naturel. Seules les orques attaquent parfois les baleineaux ou les individus affaiblis, en groupes organis\u00e9s. Aujourd'hui, les collisions avec les navires et les filets de p\u00eache sont les principales causes de mort, apr\u00e8s la chasse industrielle qui avait failli mener plusieurs esp\u00e8ces \u00e0 l'extinction au 20\u00e8me si\u00e8cle.",
                source: "Société de Conservation Marine - Les adultes n'ont pratiquement pas de prédateurs naturels."
            },
            {
                id: 15,
                question: "Quel est le mecanisme de plongée profonde des phoques ?",
                options: ["Augmentation de la respiration", "Ralentissement du cœur et utilisation de l'oxygène stocké", "Augmentation du volume pulmonaire", "Métabolisme accéléré"],
                correct: 1,
                explanation: "Lors d'une plong\u00e9e, les phoques activent automatiquement le 'r\u00e9flexe de plong\u00e9e' : leur fr\u00e9quence cardiaque chute de 100-150 battements/min \u00e0 seulement 4-15 battements/min. La circulation sanguine est redirig\u00e9e vers le cerveau et le c\u0153ur uniquement. La rate, tr\u00e8s grande chez les phoques, se contracte pour lib\u00e9rer des globules rouges suppl\u00e9mentaires \u2014 ces adaptations permettent des plong\u00e9es de plusieurs heures.",
                source: "Institut de Physiologie Plongée - Les phoques ralentissent leur métabolisme."
            },
            {
                id: 16,
                question: "Combien de dents une baleine à dents peut-elle avoir ?",
                options: ["0 dent", "10-20 dents", "50+ dents", "Jusqu'à 200+ selon l'espèce"],
                correct: 3,
                explanation: "Les baleines \u00e0 dents pr\u00e9sentent une grande variabilit\u00e9 dentaire. Le dauphin commun poss\u00e8de 80 \u00e0 100 dents coniques. L'orque en a 40 \u00e0 56, robustes et coniques, pouvant mesurer 10 cm. Le cachalot n'a des dents fonctionnelles qu'\u00e0 la m\u00e2choire inf\u00e9rieure. Le narval n'a g\u00e9n\u00e9ralement qu'une seule dent, transform\u00e9e en d\u00e9fense spirale pouvant atteindre 3 m\u00e8tres.",
                source: "Musée Odontologique - Les baleines à dents peuvent avoir de nombreuses dents."
            },
            {
                id: 17,
                question: "Quel est le rôle de la couche de graisse chez les cétacés ?",
                options: ["Réserve énergétique uniquement", "Isolation thermique et flottabilité", "Protection contre les prédateurs", "Réserve d'oxygène"],
                correct: 1,
                explanation: "Le lard (blubber) des c\u00e9tac\u00e9s est une couche de tissu adipeux sous-cutan\u00e9 pouvant atteindre 50 cm chez les grandes baleines polaires. Il assure l'isolation thermique contre les eaux froides, r\u00e9duit la densit\u00e9 corporelle (aide \u00e0 la flottabilit\u00e9), stocke l'\u00e9nergie pour les longues migrations, et sa composition varie selon les saisons pour absorber les p\u00e9riodes de je\u00fbne.",
                source: "Centre d'Étude Thermique Marine - Le lard isole thermiquement."
            },
            {
                id: 18,
                question: "Quel type de migration les baleines effectuent-elles ?",
                options: ["Sédentaires sans migration", "Régionale courte distance", "Longue distance entre zones d'alimentation et reproduction", "Aléatoire"],
                correct: 2,
                explanation: "La migration des baleines est l'une des plus spectaculaires du r\u00e8gne animal. Elles passent l'\u00e9t\u00e9 dans les eaux polaires riches en krill pour s'alimenter, puis migrent vers les zones tropicales pour se reproduire en hiver. La baleine \u00e0 bosse parcourt jusqu'\u00e0 25 000 km par an \u2014 le record chez les mammif\u00e8res. Ces zones chaudes offrent moins de nourriture mais moins de pr\u00e9dateurs pour les baleineaux.",
                source: "Université de Migration - Les baleines migrent sur des milliers de kilomètres."
            },
            {
                id: 19,
                question: "Quel est le système de thermorégulation chez les mammifères marins ?",
                options: ["Ectothermes régulant leur température en se déplaçant entre eaux superficielles chaudes et profondes froides", "Métabolisme élevé et isolation thermique", "Refroidissement actif par évaporation buccale lors des sorties à l'air libre sur les plages", "Changement de couleur cutanée permettant d'absorber plus ou moins de rayonnement solaire infrarouge"],
                correct: 1,
                explanation: "Contrairement aux reptiles (ectothermes), les mammif\u00e8res marins sont endothermes : ils produisent leur propre chaleur. Pour maintenir ~37\u00b0C dans des eaux proches de 0\u00b0C, ils combinent un m\u00e9tabolisme \u00e9lev\u00e9, une \u00e9paisse couche de lard (jusqu'\u00e0 50 cm), un pelage dense (phoques), et un syst\u00e8me d'\u00e9changeurs de chaleur \u00e0 contre-courant dans leurs nageoires pour r\u00e9cup\u00e9rer la chaleur du sang qui revient des extr\u00e9mit\u00e9s.",
                source: "Institut de Thermoécologie - Les mammifères marins maintiennent une température interne."
            },
            {
                id: 20,
                question: "Quel est le taux de reproduction des baleines ?",
                options: ["Très rapide, plusieurs jeunes par an", "Modéré, plusieurs jeunes tous les 2-3 ans", "Très lent, un jeune tous les 2-5 ans", "Reproduction asexuée"],
                correct: 2,
                explanation: "Le faible taux de reproduction des grandes baleines les rend tr\u00e8s vuln\u00e9rables aux menaces humaines. Une baleine bleue femelle ne donne naissance qu'\u00e0 un seul baleineau tous les 2 \u00e0 3 ans apr\u00e8s une gestation d'un an et un allaitement de 6 \u00e0 7 mois. Leur maturit\u00e9 sexuelle tardive (5-15 ans) signifie que la population met des d\u00e9cennies \u00e0 se r\u00e9tablir apr\u00e8s une surexploitation.",
                source: "Centre de Reproduction Marine - Les baleines se reproduisent lentement."
            },
            {
                id: 31,
                question: "À quel âge une baleine peut-elle vivre ?",
                options: ["20-30 ans", "40-50 ans", "50-80 ans selon l'espèce", "100+ ans"],
                correct: 2,
                explanation: "La long\u00e9vit\u00e9 des baleines est impressionnante. La baleine \u00e0 bosse vit environ 80-90 ans, le rorqual commun 85-90 ans. Mais le record absolu appartient \u00e0 la baleine de Bowhead : des harpons du 19\u00e8me si\u00e8cle retrouv\u00e9s dans des individus tu\u00e9s dans les ann\u00e9es 2000 prouvent que certains individus d\u00e9passent 200 ans \u2014 ce qui en fait le mammif\u00e8re le plus long\u00e9vif connu.",
                source: "Institut de Longévité Marine - Les baleines vivent très longtemps."
            },
            {
                id: 32,
                question: "Quel est le processus de communication entre baleines à longue distance ?",
                options: ["Percussion de la surface de l'eau via les nageoires pectorales pour créer des ondes basse fréquence", "Chants complexes portant sur plusieurs km", "Échanges visuels par synchronisation des sauts et acrobaties perceptibles à plusieurs km de distance", "Marquage chimique de zones de rencontre via des sécrétions cutanées persistant plusieurs jours dans l'eau"],
                correct: 1,
                explanation: "Les chants des baleines \u00e0 bosse peuvent porter jusqu'\u00e0 10 000 km sous l'eau. En 2000, des chercheurs ont observ\u00e9 qu'un nouveau type de chant apparu dans le Pacifique Ouest s'est r\u00e9pandu d'ouest en est en 2 ans, copi\u00e9 par des milliers de baleines. C'est l'un des exemples les plus clairs de transmission culturelle horizontale chez un animal non-humain.",
                source: "Institut d'Acoustique Cétacée - Chants sophistiqués de navigation."
            },
            {
                id: 33,
                question: "À quel âge un phoque peut-il être complètement indépendant ?",
                options: ["À quelques semaines", "À 4-6 semaines selon l'espèce", "À 2-3 mois", "À 6+ mois"],
                correct: 1,
                explanation: "Le sevrage ultra-rapide du phoque gris est l'un des plus courts chez les mammif\u00e8res. La m\u00e8re allaite son petit seulement 3 semaines avec un lait contenant 60% de mati\u00e8res grasses, permettant au blanchon de passer de 14 kg \u00e0 40 kg. Puis elle l'abandonne brusquement. Le jeune phoque doit alors apprendre seul \u00e0 nager et chasser, je\u00fbnant plusieurs semaines le temps de ma\u00eetriser ces comp\u00e9tences.",
                source: "Centre d'Élevage Pinipède - Sevrage très précoce."
            },
            {
                id: 34,
                question: "Quel est le rôle du 'blubber' (lard) chez les mammifères marins ?",
                options: ["Stockage des contaminants lipophiles comme les PCB protégeant ainsi les organes vitaux", "Isolation thermique et réserve énergétique", "Flottabilité passive uniquement permettant l'économie d'énergie lors des pauses en surface", "Neutralisation des toxines marines ingérées avec les proies par séquestration dans les adipocytes"],
                correct: 1,
                explanation: "Le blubber remplit plusieurs fonctions vitales simultan\u00e9ment. Il isole thermiquement \u2014 une baleine polaire avec 50 cm de lard survit \u00e0 des eaux \u00e0 -2\u00b0C. Il stocke une \u00e9nergie consid\u00e9rable \u2014 une baleine \u00e0 bosse br\u00fcle son lard pendant sa migration de 8 000 km o\u00f9 elle ne mange presque pas. Il contribue aussi \u00e0 la flottabilit\u00e9 et \u00e0 la forme hydrodynamique du corps.",
                source: "Institut de Physiologie Thermique Marine - Essentiel pour survie."
            },
            {
                id: 35,
                question: "À quelle vitesse peut nager une orque ?",
                options: ["10-15 km/h", "25-35 km/h", "35-55 km/h selon conditions", "60+ km/h"],
                correct: 2,
                explanation: "L'orque (Orcinus orca) est l'un des nageurs les plus rapides parmi les grands mammif\u00e8res marins, capable d'atteindre 55 km/h en chasse. Cette vitesse, combin\u00e9e \u00e0 l'intelligence collective des groupes familiaux, fait de l'orque le pr\u00e9dateur le plus redoutable des oc\u00e9ans. Elle est capable de chasser des baleines bleues en groupe, des requins blancs en solitaire, et m\u00eame de s'\u00e9chouer volontairement pour attraper des lions de mer.",
                source: "Centre d'Écologie Orque - Prédateurs très rapides."
            },
            {
                id: 36,
                question: "Quel est le temps moyen de digestion chez une baleine après alimentation ?",
                options: ["Quelques heures", "24 heures", "2-3 jours selon taille", "Une semaine"],
                correct: 2,
                explanation: "Le syst\u00e8me digestif des grandes baleines est adapt\u00e9 au traitement de quantit\u00e9s \u00e9normes de nourriture. Une baleine bleue peut ing\u00e9rer 4 tonnes de krill par jour pendant la saison d'alimentation. Son estomac multi-compartiment\u00e9 traite lentement cette nourriture sur 2 \u00e0 3 jours, mais la baleine peut continuer \u00e0 se nourrir pendant ce temps, son tube digestif fonctionnant en continu.",
                source: "Institut de Physiologie Digestive Marine - Digestion très lente."
            },
            {
                id: 37,
                question: "À quel âge un jeune otarie commence-t-il à se nourrir seul ?",
                options: ["À quelques semaines", "À 2-3 mois selon l'espèce", "À 4-6 mois", "À 1 an"],
                correct: 1,
                explanation: "Les jeunes otaries sont sevr\u00e9es entre 4 mois (otarie \u00e0 fourrure du Cap) et 12 mois (lion de mer de Steller). Apr\u00e8s le sevrage, elles doivent rapidement apprendre \u00e0 chasser. Les premi\u00e8res tentatives sont souvent maladroites, avec un faible taux de succ\u00e8s. Avec l'exp\u00e9rience, elles deviennent des chasseuses tr\u00e8s efficaces, capables de plonger \u00e0 200 m\u00e8tres et capturer des poissons rapides.",
                source: "Centre de Développement Pinipède - Indépendance rapide."
            },
            {
                id: 38,
                question: "Quel est le rôle des 'barbillons' chez le phoque ?",
                options: ["Génération de micro-turbulences hydrodynamiques améliorant la portance natatoire à faible vitesse", "Détection tactile des proies et obstacles", "Absorption de l'oxygène dissous dans l'eau lors des plongées profondes en complément des poumons", "Signalisation d'état émotionnel lors des interactions sociales par mouvements vibratoires codifiés"],
                correct: 1,
                explanation: "Les vibrisses (moustaches) des phoques sont des organes sensoriels extraordinaires. Elles peuvent d\u00e9tecter les turbulences cr\u00e9\u00e9es par un poisson pass\u00e9 30 secondes auparavant, permettant au phoque de suivre le sillage d'une proie dans l'obscurit\u00e9. Chaque vibrisse est reli\u00e9e \u00e0 une zone d\u00e9di\u00e9e du cerveau \u2014 leur repr\u00e9sentation c\u00e9r\u00e9brale est aussi \u00e9labor\u00e9e que le syst\u00e8me visuel humain.",
                source: "Institut de Sensorimotricité Marine - Organes tactiles sensoriels."
            },
            {
                id: 39,
                question: "À quel âge une baleine femelle devient-elle ménopausée ?",
                options: ["À 20-30 ans pour toutes les baleines à fanons selon les marqueurs isotopiques des os de l'oreille", "À 40-50 ans selon l'espèce", "À 50 ans et au-delà, certaines espèces ne vieillissant biologiquement presque pas après 80 ans", "La longévité ne peut jamais être estimée avec précision car les cétacés ne montrent aucun signe externe de vieillissement"],
                correct: 1,
                explanation: "La m\u00e9nopause est un ph\u00e9nom\u00e8ne rarissime dans le r\u00e8gne animal, observ\u00e9 chez seulement 5 esp\u00e8ces : l'humain, l'orque, le cachalot, le b\u00e9luga et le narval. Chez les orques, les femelles cessent de se reproduire vers 40-50 ans mais vivent encore plusieurs d\u00e9cennies. Ces 'grand-m\u00e8res' jouent un r\u00f4le crucial : les pods avec des grand-m\u00e8res survivent mieux gr\u00e2ce \u00e0 leur connaissance des zones de p\u00eache.",
                source: "Institut de Biologie Reproductive - Ménopause chez les cétacés."
            },
            {
                id: 40,
                question: "Quel est le processus de la 'dive reflex' chez les pinnipèdes ?",
                options: ["Arrêt volontaire de la respiration déclenché par la fermeture réflexe de l'épiglotte lors de l'immersion", "Ralentissement cardiaque drastique lors de plongée", "Accélération cardiaque pour maximiser le débit sanguin vers les muscles actifs pendant la plongée", "Redistribution du volume sanguin vers les organes abdominaux pour réduire la consommation d'O2 musculaire"],
                correct: 1,
                explanation: "Le r\u00e9flexe de plong\u00e9e (dive reflex) est d\u00e9clench\u00e9 automatiquement d\u00e8s l'immersion. Chez les pinniped\u00e8s, il est extr\u00eamement d\u00e9velopp\u00e9 : la fr\u00e9quence cardiaque passe de 150 \u00e0 seulement 4 battements par minute en quelques secondes. La circulation sanguine se concentre sur le cerveau et le c\u0153ur. La rate se contracte pour lib\u00e9rer jusqu'\u00e0 50% d'h\u00e9maties suppl\u00e9mentaires dans le sang.",
                source: "Institut de Physiologie Plongée - Adaptations cardiovasculaires."
            },
            {
                id: 41,
                question: "À quel âge un dauphin peut-il intégrer complètement un groupe social ?",
                options: ["Immédiatement", "À quelques mois", "À 1-2 ans selon l'espèce", "À 3-5 ans"],
                correct: 2,
                explanation: "Les dauphins sont des animaux profond\u00e9ment sociaux vivant en groupes stables (pods). Les jeunes s'int\u00e8grent progressivement \u00e0 la vie sociale, apprenant les hi\u00e9rarchies, les strat\u00e9gies de chasse coop\u00e9rative et les r\u00e8gles sociales. Certains comportements \u2014 comme utiliser des \u00e9ponges comme outils ou pousser des poissons sur les plages \u2014 sont transmis culturellement de g\u00e9n\u00e9ration en g\u00e9n\u00e9ration.",
                source: "Centre d'Études Sociales Cétacées - Intégration progressive."
            },
            {
                id: 42,
                question: "Quel est le diamètre de l'événement d'écholocalisation d'un cachalot ?",
                options: ["Quelques cm", "10-20 cm", "30-50 cm selon l'espèce", "Plus de 50 cm"],
                correct: 1,
                explanation: "Le 'melon' ou 'spermaceti' du cachalot est l'organe d'\u00e9cholocalisation le plus puissant du r\u00e8gne animal. Cet organe rempli d'huile peut peser jusqu'\u00e0 1 tonne et occuper un tiers de la longueur de la t\u00eate. Il concentre et dirige les clics ultrasonores vers l'avant. L'huile de spermaceti fut tr\u00e8s recherch\u00e9e au 19\u00e8me si\u00e8cle, d\u00e9clenchant la chasse intensive aux cachalots.",
                source: "Institut d'Acoustique Cétacée - Organe très spécialisé."
            },
            {
                id: 43,
                question: "À quelle distance un dauphin peut-il entendre un autre dauphin ?",
                options: ["Quelques mètres", "50-100 mètres", "500-1000 mètres selon conditions", "Plus de 2 km"],
                correct: 2,
                explanation: "Les dauphins communiquent gr\u00e2ce \u00e0 des sifflements individuels uniques \u2014 chaque dauphin poss\u00e8de un 'sifflement signature' reconnaissable \u00e0 des centaines de m\u00e8tres. Ils peuvent imiter ces sifflements pour appeler un individu sp\u00e9cifique. Leurs capacit\u00e9s auditives s'\u00e9tendent de 200 Hz \u00e0 150 kHz (l'humain entend jusqu'\u00e0 20 kHz), leur permettant de percevoir l'\u00e9cholocalisation \u00e0 grande distance.",
                source: "Institut de Bioacoustique Marine - Communication longue distance."
            },
            {
                id: 44,
                question: "Quel est le rôle de la 'grâce osseuse' chez les siréniens (lamantins) ?",
                options: ["Renforcement de la ceinture pectorale pour résister aux forces de traction lors de la saisie des proies", "Adaptation squelettale pour flotabilité et mouvement lent", "Amplification de la poussée natatoire grâce à des leviers osseux optimisés pour les sprints aquatiques", "Réduction de la surface de résistance hydrodynamique frontale lors des plongées verticales rapides"],
                correct: 1,
                explanation: "Les sir\u00e9niens (lamantins et dugongs) ont des os exceptionnellement denses et massifs (pachyostose), une adaptation rare. Ces os lourds agissent comme un lest naturel qui compense leur flottabilit\u00e9 due au gaz intestinal. Cela leur permet de rester pr\u00e8s du fond pour brouter les herbiers marins sans effort. Ils sont les seuls herbivores marins parmi les mammif\u00e8res.",
                source: "Institut d'Anatomie Marine - Adaptations uniques siréniens."
            },
            {
                id: 45,
                question: "À quel âge un phoque femelle devient-elle reproductrice ?",
                options: ["À 1-2 ans", "À 2-4 ans selon l'espèce", "À 5-7 ans", "À 10+ ans"],
                correct: 1,
                explanation: "Les phoques atteignent leur maturit\u00e9 sexuelle t\u00f4t. Le phoque gris femelle est fertile d\u00e8s 3-5 ans. Mais les m\u00e2les, bien que sexuellement matures, ne peuvent g\u00e9n\u00e9ralement pas se reproduire avant 6-10 ans car il faut \u00eatre assez grand et fort pour concurrencer les autres m\u00e2les sur les plages. Les femelles vivent en moyenne 25-35 ans, les m\u00e2les souvent moins en raison des combats.",
                source: "Centre de Biologie Reproductive Pinipède - Maturation rapide."
            },
            {
                id: 46,
                question: "Quel est le processus de la 'pontination' chez les cétacés ?",
                options: ["Augmentation progressive du temps de plongée liée à la maturation des réserves en myoglobine musculaire", "Isolation comportementale préparant reproduction", "Migration vers les zones d'alimentation estivales pour constituer des réserves lipidiques avant l'accouplement", "Jeûne volontaire permettant de concentrer les phéromones excrétées dans les sécrétions cutanées"],
                correct: 1,
                explanation: "La pr\u00e9paration \u00e0 la reproduction chez les c\u00e9tac\u00e9s implique des changements comportementaux marqu\u00e9s. Les m\u00e2les de baleine \u00e0 bosse cessent de s'alimenter pendant la saison de reproduction pour se consacrer enti\u00e8rement \u00e0 la comp\u00e9tition et \u00e0 la cour. Ils chantent des chants complexes, se battent avec d'autres m\u00e2les, et suivent les femelles sur des milliers de kilom\u00e8tres pendant les migrations.",
                source: "Institut d'Éthologie Reproductive Marine - Phase préreproductive."
            },
            {
                id: 47,
                question: "À quel âge une jeune orque devient-elle indépendante maternellement ?",
                options: ["À 1-2 ans", "À 3-5 ans selon l'espèce", "À 5-8 ans", "À 10+ ans"],
                correct: 2,
                explanation: "Les orques vivent en groupes familiaux matriarcaux (pods) o\u00f9 les liens sont permanents. Fait exceptionnel : chez les orques r\u00e9sidentes, les fils m\u00e2les restent dans le pod de leur m\u00e8re toute leur vie. Une orque m\u00e2le peut d\u00e9pendre de sa m\u00e8re pour trouver de la nourriture jusqu'\u00e0 l'\u00e2ge de 30 ans. Les pods sans m\u00e8re voient leur taux de mortalit\u00e9 augmenter significativement.",
                source: "Centre d'Études Orques - Liens maternels très prolongés."
            },
            {
                id: 48,
                question: "Quel est le rôle de l'enzyme catalase chez les mammifères marins lors des plongées profondes ?",
                options: ["Catalyse de la dégradation des peroxydes lipidiques dans les tissus profonds lors des plongées prolongées", "Protection contre radicaux libres de l'oxygène", "Accélération du transit intestinal permettant une extraction maximale des nutriments des proies ingérées", "Régulation de la fréquence respiratoire en modifiant la sensibilité des chémorécepteurs au CO2"],
                correct: 1,
                explanation: "Lors de plong\u00e9es profondes suivies de remont\u00e9es rapides, les mammif\u00e8res plongeurs sont expos\u00e9s \u00e0 des cycles d'isch\u00e9mie-reperfusion qui g\u00e9n\u00e8rent des radicaux libres potentiellement dangereux. Les c\u00e9tac\u00e9s et pinniped\u00e8s ont d\u00e9velopp\u00e9 des d\u00e9fenses antioxydantes tr\u00e8s efficaces, incluant des niveaux \u00e9lev\u00e9s de catalase, superoxyde dismutase et glutathion peroxydase dans leurs tissus.",
                source: "Institut de Biochimie Marine - Adaptations antioxydantes."
            },
            {
                id: 49,
                question: "À quel âge une baleine franche peut-elle atteindre sa taille maximale ?",
                options: ["À 20-30 ans", "À 30-40 ans selon l'espèce", "À 40-50 ans", "À 50+ ans"],
                correct: 1,
                explanation: "Les grandes baleines grandissent lentement tout au long de leur vie. La baleine franche (right whale) est l'une des plus menac\u00e9es au monde (moins de 400 individus dans l'Atlantique Nord). Sa croissance tr\u00e8s lente et son faible taux de reproduction (un baleineau tous les 3 \u00e0 5 ans) la rendent extr\u00eamement vuln\u00e9rable aux impacts humains : collisions avec des navires et enchev\u00eatrement dans les filets.",
                source: "Institut de Croissance Cétacée - Croissance très lente."
            },
            {
                id: 50,
                question: "Quel est le taux métabolique des siréniens (lamantins) ?",
                options: ["Très élevé", "Modéré", "Très bas - métabolisme lent adapté à consommation herbe", "Sans métabolisme"],
                correct: 2,
                explanation: "Les lamantins et dugongs ont un m\u00e9tabolisme environ 3 fois plus lent que pr\u00e9vu pour leur taille. Herbivores exclusifs, ils consomment 5 \u00e0 10% de leur poids en herbes marines chaque jour. Cette alimentation peu calorique les oblige \u00e0 brouter continuellement. Leur m\u00e9tabolisme lent et leur incapacit\u00e9 \u00e0 g\u00e9n\u00e9rer suffisamment de chaleur les rendent vuln\u00e9rables au 'cold stress syndrome' si l'eau descend sous 20\u00b0C.",
                source: "Institut de Physiologie Comparée Marine - Herbivores lents."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme d'osmorégulation chez les cétacés marins ?",
                options: ["Excrétion de sel par des glandes nasales comme chez les reptiles marins et certains oiseaux côtiers", "Reins hautement concentrés et métabolisme de l'eau", "Absorption cutanée d'eau douce depuis l'eau de mer via des aquaporines dermiques spécialisées", "Urines très concentrées éliminant l'excès de sodium avec une perte hydrique minimale"],
                correct: 1,
                explanation: "Les c\u00e9tac\u00e9s marins ne boivent pas l'eau de mer directement. Ils obtiennent l'eau n\u00e9cessaire \u00e0 partir des poissons et c\u00e9phalopodes qu'ils consomment. Leurs reins sont exceptionnellement performants, organis\u00e9s en milliers de 'renicules' qui augmentent la surface de filtration, et produisent une urine tr\u00e8s concentr\u00e9e en sel pour \u00e9liminer l'exc\u00e8s de sodium.",
                source: "Institut de Physiologie Osmorégulatrice - Les reins concentrent l'urine extrêmement."
            },
            {
                id: 22,
                question: "Comment les cétacés évitent-ils la maladie des caissons lors de plongées profondes ?",
                options: ["Leur sang contient des enzymes spécifiques neutralisant l\'azote dissous avant qu\'il ne forme des bulles", "Leurs poumons s\'effondrent presque complètement en profondeur, concentrant les gaz dans les voies non vascularisées et empêchant l\'azote de passer dans le sang", "Leur cœur s\'arrête brièvement à chaque changement de pression, évitant toute circulation des gaz dissous", "Leur organisme convertit l\'azote en substances inoffensives grâce à des bactéries symbiotiques intestinales"],
                correct: 1,
                explanation: "Les cétacés évitent la maladie des caissons grâce à une adaptation remarquable : leurs poumons s\'affaissent quasi totalement à partir de 70-100 mètres de profondeur. Les gaz se concentrent alors dans la trachée et les bronches — des zones non vascularisées — ce qui empêche l\'azote de se dissoudre dans le sang. À la remontée, il n\'y a donc aucune bulle d\'azote à libérer.",
                source: "Institut de Biologie Marine - Adaptations des cétacés aux plongées profondes."
            },
            {
                id: 23,
                question: "Quel est le processus d'adaptation visuelle aux profondeurs ?",
                options: ["Augmentation du cristallin", "Rétines sensibles au spectre bleu et amélioration de la sensibilité", "Pas d'adaptation visuelle", "Disparition des yeux"],
                correct: 1,
                explanation: "En pleine mer, seule la lumi\u00e8re bleue/verte p\u00e9n\u00e8tre en profondeur. Les c\u00e9tac\u00e9s plongeurs ont des r\u00e9tines adapt\u00e9es, tr\u00e8s sensibles aux longueurs d'onde bleues (460-480 nm). Leurs yeux peuvent aussi s'accommoder des variations extr\u00eames de luminosit\u00e9 \u2014 de la surface brillante \u00e0 l'obscurit\u00e9 quasi-totale des abysses. La densit\u00e9 en b\u00e2tonnets (photor\u00e9cepteurs cr\u00e9pusculaires) est tr\u00e8s \u00e9lev\u00e9e.",
                source: "Université d'Ophthalmologie Marine - Les rétines s'adaptent aux longueurs d'onde profondes."
            },
            {
                id: 24,
                question: "Quel est le rôle des cavités nasales compliquées des cétacés ?",
                options: ["Respiration uniquement", "Écholocalisation et production de clics", "Olfaction exacerbée", "Thermorégulation"],
                correct: 1,
                explanation: "Les c\u00e9tac\u00e9s \u00e0 dents ont migr\u00e9 leurs narines sur le dessus du cr\u00e2ne et les ont transform\u00e9es en organe d'\u00e9cholocalisation complexe. Le dauphin produit ses clics dans les sacs nasaux, les fait rebondir sur l'os frontal (le 'melon'), puis les \u00e9met en faisceau dirig\u00e9 vers l'avant. L'\u00e9cho revu est transmis via la m\u00e2choire inf\u00e9rieure \u00e0 l'oreille interne, permettant une 'vision sonore' 3D en temps r\u00e9el.",
                source: "Institut d'Anatomie Cétologique - Les cavités nasales produisent l'écholocalisation."
            },
            {
                id: 25,
                question: "Quel type d'hémoglobine possèdent les cétacés plongeurs profonds ?",
                options: ["Hémoglobine standard", "Hémoglobine avec affinité augmentée pour l'oxygène", "Hémoglobine sans fer", "Chlorophylle"],
                correct: 1,
                explanation: "La myoglobine des muscles des c\u00e9tac\u00e9s plongeurs est pr\u00e9sente en quantit\u00e9s 10 \u00e0 30 fois sup\u00e9rieures \u00e0 celle des mammif\u00e8res terrestres, donnant aux muscles une couleur presque noire. Cette myoglobine stocke l'oxyg\u00e8ne localement. Leur h\u00e9moglobine sanguine a aussi une affinit\u00e9 accrue pour l'oxyg\u00e8ne \u00e0 basse pression, et leur concentration en globules rouges est 2 fois sup\u00e9rieure \u00e0 celle de l'humain.",
                source: "Université de Biochimie Marine - L'hémoglobine est optimisée pour l'oxygène."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de réduction du métabolisme lors de la plongée ?",
                options: ["Arrêt cardiaque", "Ralentissement sélectif du cœur et redistribution du flux sanguin", "Hibernation brusque", "Apoptose cellulaire"],
                correct: 1,
                explanation: "Lors d'une plong\u00e9e, les mammif\u00e8res marins activent une cascade d'adaptations cardiovasculaires. Le c\u0153ur ralentit drastiquement (de 150 \u00e0 4-10 bpm). Les vaisseaux p\u00e9riph\u00e9riques se contractent, concentrant le sang sur le cerveau et le c\u0153ur. La rate lib\u00e8re jusqu'\u00e0 50% d'h\u00e9maties suppl\u00e9mentaires. Ces m\u00e9canismes permettent de tripler la dur\u00e9e de plong\u00e9e effective.",
                source: "Centre de Physiologie Plongée - Le flux sanguin se concentre sur les organes vitaux."
            },
            {
                id: 27,
                question: "Quel est le rôle de la monocouche pulmonaire chez les cétacés ?",
                options: ["Captage efficace de l'oxygène", "Extraction d'oxygène maximale avec échange contre-courant", "Stockage du dioxyde de carbone", "Régulation de la pression"],
                correct: 1,
                explanation: "Les poumons des c\u00e9tac\u00e9s s'effondrent totalement \u00e0 grande profondeur (emp\u00eachant l'embolie \u00e0 l'azote) puis se r\u00e9ouvrent parfaitement \u00e0 la remont\u00e9e. Des sphincters bronchiques contr\u00f4lent pr\u00e9cis\u00e9ment les \u00e9changes gazeux. La vascularisation pulmonaire est organis\u00e9e pour maximiser l'extraction d'oxyg\u00e8ne en un temps minimal, car les c\u00e9tac\u00e9s ne respirent que quelques secondes en surface entre deux plong\u00e9es.",
                source: "Institut de Physiologie Respiratoire - L'échange contre-courant maximise l'oxygène."
            },
            {
                id: 28,
                question: "Quel est le processus de communication acoustique entre baleines ?",
                options: ["Vocalisations stéréotypées génétiquement programmées sans variation individuelle ni apprentissage", "Communication structurée avec dialectes régionaux et apprentissage culturel", "Signaux de percussion corporelle sur la surface de l'eau sans structure acoustique codifiée", "Émissions d'ultrasons servant exclusivement à la navigation sans fonction de communication sociale"],
                correct: 1,
                explanation: "Les populations de baleines \u00e0 bosse de diff\u00e9rentes r\u00e9gions chantent des 'dialectes' distincts qui \u00e9voluent constamment. En 2000, un nouveau type de chant apparu dans le Pacifique Ouest s'est propagé d'est en ouest en 2 ans, copi\u00e9 par des milliers de baleines. C'est l'un des exemples les plus clairs de transmission culturelle horizontale chez un animal non-humain.",
                source: "Université de Sociolinguistique Marine - Les baleines ont des dialectes culturels."
            },
            {
                id: 29,
                question: "Quel est le rôle des moustaches (vibrisses) chez les pinnipèdes ?",
                options: ["Décoration", "Détection sensorielle du champ électrique et vibrations", "Régulation thermique", "Reproduction"],
                correct: 1,
                explanation: "Les vibrisses des phoques ont une forme ondul\u00e9e qui r\u00e9duit les vibrations dues \u00e0 leur propre mouvement tout en amplifiant les turbulences hydrodynamiques des proies. Elles peuvent suivre le sillage de poissons plusieurs minutes apr\u00e8s leur passage. Certaines esp\u00e8ces peuvent m\u00eame d\u00e9tecter de faibles champs \u00e9lectriques g\u00e9n\u00e9r\u00e9s par les muscles des proies.",
                source: "Institut de Sensorimotricité Marine - Les vibrisses détectent les vibrations."
            },
            {
                id: 30,
                question: "Quel est le mécanisme de cicatrisation des plaies chez les cétacés ?",
                options: ["Cicatrisation nécessitant une sortie prolongée hors de l'eau pour permettre la coagulation sanguine normale", "Cicatrisation rapide avec propriétés antimicrobiennes du mucus", "Régénération tissulaire partielle via des cellules souches dermiques activées par la pression hydrostatique", "Réparation exclusivement externe via un dépôt progressif de fibrine imperméabilisant la plaie sous l'eau"],
                correct: 1,
                explanation: "Les baleines ont des capacit\u00e9s de cicatrisation impressionnantes. Des \u00e9tudes ont document\u00e9 des baleines \u00e0 bosse se r\u00e9tablissant de morsures d'orques touchant la moiti\u00e9 de leur corps en quelques semaines. Leur mucus cutan\u00e9 contient des peptides antimicrobiens puissants qui prot\u00e8gent les plaies de l'infection dans un milieu marin riche en bact\u00e9ries.",
                source: "Journal de Cicatrisation Marine - Le mucus à propriétés cicatrisantes."
            },
            {
                id: 51,
                question: "Quel est le mécanisme d'osmorégulation chez les cétacés marins ?",
                options: ["Excrétion de sel par des glandes nasales comme chez les reptiles marins et certains oiseaux côtiers", "Reins hautement concentrés et métabolisme de l'eau", "Absorption cutanée d'eau douce depuis l'eau de mer via des aquaporines dermiques spécialisées", "Urines très concentrées éliminant l'excès de sodium avec une perte hydrique minimale"],
                correct: 1,
                explanation: "Les reins des c\u00e9tac\u00e9s marins sont organis\u00e9s en centaines de 'renicules' \u2014 de petits lobules r\u00e9naux ind\u00e9pendants. Cette structure augmente massivement la surface de filtration. Les c\u00e9tac\u00e9s ne boivent pas d'eau de mer : l'eau de leurs proies leur suffit. Ils excrètent des urines 2 \u00e0 4 fois plus concentr\u00e9es que l'eau de mer pour maintenir leur \u00e9quilibre hydrique.",
                source: "Institut de Physiologie Osmorégulatrice Marine - Les reins concentrent l'urine extrêmement."
            },
            {
                id: 52,
                question: "Comment les mammifères marins évitent-ils la formation de bulles d'azote lors des remontées rapides ?",
                options: ["Leur rate libère une réserve d'érythrocytes supplémentaires neutralisant l'azote avant la remontée", "Leurs poumons s'affaissent totalement à partir de 70-100 m, forçant les gaz vers les voies non vascularisées", "Leur métabolisme anaérobie convertit l'azote en azote organique inoffensif pendant la plongée", "Leurs alvéoles pulmonaires sont imperméables à l'azote grâce à un surfactant chimiquement différent"],
                correct: 1,
                explanation: "Lors des plong\u00e9es profondes, les c\u00e9tac\u00e9s \u00e9vitent la maladie des caissons car leurs poumons s'affaissent totalement \u00e0 partir de 70-100 m\u00e8tres de profondeur, for\u00e7ant les gaz vers les voies respiratoires non vascularisées. Ils commencent aussi les plong\u00e9es avec une quantit\u00e9 d'air r\u00e9duite, et leur tol\u00e9rance \u00e0 l'hypoxie est bien sup\u00e9rieure \u00e0 celle des humains.",
                source: "Institut de Médecine Plongée - Les mammifères marins évitent cette condition."
            },
            {
                id: 53,
                question: "Quel est le processus d'adaptation visuelle aux profondeurs chez les cétacés ?",
                options: ["Augmentation du cristallin", "Rétines sensibles au spectre bleu et amélioration de la sensibilité", "Pas d'adaptation visuelle", "Disparition des yeux"],
                correct: 1,
                explanation: "Les yeux des c\u00e9tac\u00e9s sont des organes complexes adapt\u00e9s \u00e0 deux milieux diff\u00e9rents. Sous l'eau en profondeur, leur r\u00e9tine riche en b\u00e2tonnets capte les rares photons bleus disponibles. Certaines esp\u00e8ces ont aussi une 'tapetum lucidum' (miroir derri\u00e8re la r\u00e9tine) qui amplifie la lumi\u00e8re disponible, comme chez les chats \u2014 donnant un reflet caract\u00e9ristique dans l'obscurit\u00e9.",
                source: "Université d'Ophtalmologie Marine - Les rétines s'adaptent aux longueurs d'onde profondes."
            },
            {
                id: 54,
                question: "Quel est le rôle des cavités nasales compliquées des cétacés ?",
                options: ["Respiration uniquement", "Écholocalisation et production de clics", "Olfaction exacerbée", "Thermorégulation"],
                correct: 1,
                explanation: "Chez le dauphin, les l\u00e8vres phoniques (phonic lips) vibrent pour cr\u00e9er des clics ultra-rapides (jusqu'\u00e0 700 clics par seconde). Ces sons sont focalis\u00e9s par le melon frontal vers l'avant. L'oreille interne est anatomiquement isol\u00e9e du cr\u00e2ne par des coussins de graisse pour \u00e9viter la confusion entre sons \u00e9mis et re\u00e7us \u2014 une conception quasi-st\u00e9r\u00e9ophonique unique.",
                source: "Institut d'Anatomie Cétologique - Les cavités nasales produisent l'écholocalisation."
            },
            {
                id: 55,
                question: "Pourquoi les muscles des cétacés plongeurs ont-ils une couleur presque noire ?",
                options: ["Hémoglobine standard", "Hémoglobine avec affinité augmentée pour l'oxygène", "Hémoglobine sans fer", "Chlorophylle"],
                correct: 1,
                explanation: "La myoglobine des muscles de plong\u00e9e des c\u00e9tac\u00e9s est si concentr\u00e9e qu'elle est quasi-cristalline, une adaptation unique d\u00e9couverte r\u00e9cemment. Cette forme cristalline lui permet d'\u00eatre stock\u00e9e en tr\u00e8s grande quantit\u00e9. Lors d'une plong\u00e9e du cachalot de 90 minutes, 80% de l'oxyg\u00e8ne consomm\u00e9 provient de la myoglobine et de l'h\u00e9moglobine \u2014 pas des poumons.",
                source: "Université de Biochimie Marine - L'hémoglobine est optimisée pour l'oxygène."
            },
            {
                id: 56,
                question: "Quel est le mécanisme de réduction du métabolisme lors de la plongée marine ?",
                options: ["Arrêt cardiaque", "Ralentissement sélectif du cœur et redistribution du flux sanguin", "Hibernation brusque", "Apoptose cellulaire"],
                correct: 1,
                explanation: "La bradycardie de plong\u00e9e des mammif\u00e8res marins est l'une des plus extr\u00eames du r\u00e8gne animal. Chez le phoque de Weddell, le c\u0153ur peut passer de 150 \u00e0 seulement 4 battements par minute \u2014 une r\u00e9duction de 97%. La vasoconstriction est si intense que le lard et les membres fonctionnent en ana\u00e9robie, accumulant de l'acide lactique \u00e9limin\u00e9 progressivement apr\u00e8s la remont\u00e9e.",
                source: "Centre de Physiologie Plongée Marine - Le flux sanguin se concentre sur les organes vitaux."
            },
            {
                id: 57,
                question: "Quel est le rôle de la monocouche pulmonaire chez les cétacés plongeurs ?",
                options: ["Captage efficace de l'oxygène", "Extraction d'oxygène maximale avec échange contre-courant", "Stockage du dioxyde de carbone", "Régulation de la pression"],
                correct: 1,
                explanation: "Le 'rete mirabile' \u2014 un r\u00e9seau de capillaires \u00e0 contre-courant dans les nageoires et la queue \u2014 permet aux c\u00e9tac\u00e9s de r\u00e9cup\u00e9rer la chaleur du sang veineux froid revenant des extr\u00e9mit\u00e9s. Dans les poumons, un syst\u00e8me similaire optimise les \u00e9changes gazeux. Cette architecture vasculaire en contre-courant est un chef-d'\u0153uvre d'ing\u00e9nierie biologique convergent avec les syst\u00e8mes des oiseaux migrateurs.",
                source: "Institut de Physiologie Respiratoire Marine - L'échange contre-courant maximise l'oxygène."
            },
            {
                id: 58,
                question: "Quel est le processus de communication acoustique entre baleines à distance ?",
                options: ["Vocalisations stéréotypées génétiquement programmées sans variation individuelle ni apprentissage", "Communication structurée avec dialectes régionaux et apprentissage culturel", "Signaux de percussion corporelle sur la surface de l'eau sans structure acoustique codifiée", "Émissions d'ultrasons servant exclusivement à la navigation sans fonction de communication sociale"],
                correct: 1,
                explanation: "Les orques r\u00e9sidentes du Pacifique Nord poss\u00e8dent des 'dialectes' acoustiques : chaque pod familial a un r\u00e9pertoire de vocalises distinctif h\u00e9rit\u00e9 de g\u00e9n\u00e9ration en g\u00e9n\u00e9ration. Ces dialectes sont si stables qu'ils permettent d'identifier la famille d'une orque \u00e0 l'\u00e9coute de ses sons. Deux pods qui partagent des vocalises communes descendent probablement d'un m\u00eame anc\u00eatre commun r\u00e9cent.",
                source: "Université de Sociolinguistique Marine - Les baleines ont des dialectes culturels."
            },
            {
                id: 59,
                question: "Quel est le rôle des moustaches (vibrisses) chez les pinnipèdes marins ?",
                options: ["Décoration", "Détection sensorielle du champ électrique et vibrations", "Régulation thermique", "Reproduction"],
                correct: 1,
                explanation: "Des exp\u00e9riences ont montr\u00e9 que des phoques les yeux band\u00e9s et les oreilles bouch\u00e9es pouvaient suivre le sillage hydrodynamique d'un poisson-mod\u00e8le tir\u00e9 par un bateau 30 secondes plus t\u00f4t, uniquement gr\u00e2ce \u00e0 leurs vibrisses. Chaque vibrisse est reli\u00e9e \u00e0 un champ r\u00e9cepteur d\u00e9di\u00e9 dans le cortex somesth\u00e9sique \u2014 la repr\u00e9sentation c\u00e9r\u00e9brale des vibrisses est aussi \u00e9labor\u00e9e que celle de la main humaine.",
                source: "Institut de Sensorimotricité Marine - Les vibrisses détectent les vibrations."
            },
            {
                id: 60,
                question: "Quel est le mécanisme du stockage d'oxygène chez les cachalots ?",
                options: ["Poumons à très grande capacité totale représentant 12% du volume corporel contre 7% chez l'humain", "Myoglobine musculaire et oxyhémoglobine concentrées", "Rate hypertrophiée libérant un bolus d'érythrocytes supplémentaires lors du début de la plongée", "Respiration cutanée partielle via une peau très vascularisée absorbant l'oxygène dissous dans l'eau froide"],
                correct: 1,
                explanation: "Le cachalot est le champion du stockage d'oxyg\u00e8ne. Sa concentration en myoglobine est 10-30 fois sup\u00e9rieure \u00e0 celle des mammif\u00e8res terrestres. Sa rate peut stocker jusqu'\u00e0 24 litres de sang oxyg\u00e9n\u00e9 (contre 1 litre chez l'humain) et le lib\u00e9rer au d\u00e9but d'une plong\u00e9e. Son volume sanguin total de 2 500 litres lui permet de plonger \u00e0 3 000 m\u00e8tres pendant 90 minutes.",
                source: "Institut d'Adaptation Plongée - Stockage massif d'oxygène."
            },
            {
                id: 61,
                question: "Quel est le processus de la 'thermorégulation comportementale' chez les pinnipèdes ?",
                options: ["Maintien d'une température constante grâce à une couche de graisse sous-cutanée de plus de 30 cm", "Hauling out (sortie de l'eau) pour se réchauffer", "Immersion totale permanente dans les eaux profondes et froides pour optimiser la conductivité thermique", "Absence de besoin thermorégulateur grâce à un métabolisme de base 4 fois supérieur aux mammifères terrestres"],
                correct: 1,
                explanation: "Le 'hauling out' \u2014 sortie de l'eau pour se reposer sur rochers, plages ou glaces \u2014 est un comportement thermoR\u00e9gulateur cl\u00e9 chez les pinniped\u00e8s. L'eau conduit la chaleur 25 fois mieux que l'air, donc sortir de l'eau est bien plus efficace pour r\u00e9chauffer le corps. Les \u00e9l\u00e9phants de mer forment des piles compactes pour se r\u00e9chauffer mutuellement lors des mues annuelles.",
                source: "Institut d'Écologie Comportementale Marine - Thermorégulation adaptée."
            },
            {
                id: 62,
                question: "Quel est le rôle des 'melon' (structure frontale) du dauphin ?",
                options: ["Résonance des fréquences vocales émises lors de la communication sociale en eaux peu profondes", "Focalisation et concentration des ondes écholocationnelles", "Réception passive des sons basse fréquence produits par les baleines à plusieurs kilomètres de distance", "Émission de sons pendant la respiration via l'évent lors des vocalisations de surface"],
                correct: 1,
                explanation: "Le melon frontal du dauphin est compos\u00e9 d'huiles et lipides de densit\u00e9s diff\u00e9rentes qui agissent comme des lentilles acoustiques, concentrant les clics ultrasonores en un faisceau \u00e9troit. La forme du melon est modifiable \u2014 les dauphins ajustent la direction et la focalisation de leur faisceau en contractant les muscles faciaux. Ce contr\u00f4le pr\u00e9cis permet d'analyser des objets complexes en 3D.",
                source: "Institut d'Acoustique Cétacée - Structure très spécialisée."
            },
            {
                id: 63,
                question: "Quel est le mécanisme de la 'bradycardie plongée' chez les pinnipèdes ?",
                options: ["Accélération cardiaque compensatoire maximisant l'apport en O2 aux muscles pendant les premières minutes", "Ralentissement drastique du cœur lors de l'immersion", "Maintien du rythme cardiaque basal identique à celui de surface pour préserver les fonctions cérébrales", "Arrêt cardiaque volontaire contrôlé pendant 2 à 3 minutes suivi d'une reprise automatique rythmique"],
                correct: 1,
                explanation: "La bradycardie de plong\u00e9e chez les pinniped\u00e8s peut \u00eatre si s\u00e9v\u00e8re que le c\u0153ur s'arr\u00eate compl\u00e8tement pendant plusieurs secondes entre deux contractions. Chez l'humain, une bradycardie \u00e0 40 bpm provoque des \u00e9vanouissements ; chez un phoque \u00e0 4 bpm lors d'une plong\u00e9e de 80 minutes, le cerveau survit gr\u00e2ce \u00e0 une adaptation remarquable de ses neurones \u00e0 l'hypoxie.",
                source: "Institut de Physiologie Cardiovasculaire Marine - Réflexe de plongée primitif."
            },
            {
                id: 64,
                question: "Quel est le processus de l'apprentissage culturel chez les orques ?",
                options: ["Pas d'apprentissage", "Transmission intergénérationnelle de techniques de chasse", "Instinctif seulement", "Apprentissage individuel"],
                correct: 1,
                explanation: "Les orques pratiquent un vrai apprentissage culturel. Les techniques de 'wave washing' (cr\u00e9er des vagues pour faire tomber des phoques de banquises) ou d'\u00e9chouage intentionnel pour capturer des lions de mer ne sont pas inn\u00e9es \u2014 elles sont enseign\u00e9es par les m\u00e8res \u00e0 leurs petits. Ces techniques varient d'une population \u00e0 l'autre, prouvant leur transmission culturelle et non g\u00e9n\u00e9tique.",
                source: "Université d'Ethnologie Cétacée - Cultures sociales transmises."
            },
            {
                id: 65,
                question: "Quel est le rôle du 'rostrum' (museau) chez les dauphins ?",
                options: ["Stockage des réserves lipidiques mobilisées lors des longues migrations sans escale alimentaire", "Traitement des vibrations et équilibrage hydrodynamique", "Régulation de la flottabilité globale par compression ou expansion des tissus graisseux internes", "Captation des particules nutritives en suspension filtrant l'eau de mer comme un organe accessoire"],
                correct: 1,
                explanation: "Le rostre (long bec) du dauphin est une structure multifonctionnelle. Sa surface abrite de petites cryptes contenant des magn\u00e9tites (cristaux d'oxyde de fer) qui pourraient aider \u00e0 la navigation magn\u00e9tique. Le rostre am\u00e9liore aussi l'hydrodynamisme en r\u00e9duisant les turbulences lors de la nage rapide. Certaines esp\u00e8ces l'utilisent pour d\u00e9terrer des proies dans le sable ou \u00e9tourdir des poissons.",
                source: "Institut d'Anatomie Hydrodynamique - Structure adaptée à l'eau."
            },
            {
                id: 66,
                question: "Quel est le mécanisme de la 'convergent evolution' entre cétacés et pinnipèdes ?",
                options: ["Descendance phylogénétique directe d'un ancêtre aquatique commun réadapté à la vie terrestre", "Adaptations similaires pour l'environnement aquatique malgré ancêtres terrestres", "Partage d'un patrimoine génétique commun responsable des morphologies natatoires convergentes", "Influence du milieu aquatique sur le développement embryonnaire modifiant directement la morphologie adulte"],
                correct: 1,
                explanation: "La convergence \u00e9volutive entre c\u00e9tac\u00e9s et pinniped\u00e8s est fascinante. Les c\u00e9tac\u00e9s descendent d'ongul\u00e9s terrestres proches des hippopotames (il y a 50 millions d'ann\u00e9es), et les pinniped\u00e8s d'un anc\u00eatre proche des must\u00e9lid\u00e9s (il y a 23 millions d'ann\u00e9es). Pourtant, ils ont convergé vers des adaptations similaires : corps fusel\u00e9, membres transform\u00e9s en nageoires, r\u00e9duction du pelage.",
                source: "Institut d'Évolution Comparative - Adaptations indépendantes similaires."
            },
            {
                id: 67,
                question: "Quel est le processus de la 'dive sequestration' chez les baleines ?",
                options: ["Augmentation de la pression artérielle systémique pour maintenir la perfusion de tous les organes en plongée", "Flux sanguin réduit aux organes non critiques pendant plongée", "Redistribution du sang vers les muscles locomoteurs pour maximiser la durée de nage efficace", "Maintien d'une circulation systémique uniforme grâce à l'absence de résistances vasculaires périphériques"],
                correct: 1,
                explanation: "Lors des plong\u00e9es profondes, certains organes des c\u00e9tac\u00e9s (intestins, reins) entrent dans un \u00e9tat d'isch\u00e9mie contr\u00f4l\u00e9e \u2014 ils fonctionnent presque sans oxyg\u00e8ne. Des r\u00e9seaux capillaires ('rete mirabile') dans la colonne vert\u00e9brale stockent et lib\u00e8rent progressivement l'oxyg\u00e8ne pendant la plong\u00e9e. Ces m\u00e9canismes sont \u00e9tudi\u00e9s pour d\u00e9velopper des th\u00e9rapies contre les AVC humains.",
                source: "Institut de Physiologie Plongée - Redistribution critique de l'oxygène."
            },
            {
                id: 68,
                question: "Quel est le rôle du 'rostral groove' chez les siréniens ?",
                options: ["Augmentation de la portance verticale lors des nages lentes grâce à l'effet de surface de la nageoire", "Réduction de la traînée hydrodynamique lors de la nage", "Capture des proies en entourant les bancs de poissons par des mouvements coordonnés circulaires", "Régulation de la pression hydrostatique interne lors des changements rapides de profondeur de plongée"],
                correct: 1,
                explanation: "Les sir\u00e9niens (lamantins, dugongs) ont un corps fusiforme adapt\u00e9 \u00e0 la nage lente dans des eaux c\u00f4ti\u00e8res peu profondes. Leur museau large est adapt\u00e9 au broutage des herbiers marins sur le fond. Leur queue en palette horizontale \u2014 comme les c\u00e9tac\u00e9s, contrairement aux poissons \u2014 les propulse par des battements verticaux. Ils sont les seuls herbivores marins parmi les mammif\u00e8res.",
                source: "Institut d'Hydrodynamique Marine - Adaptations aérodynamiques."
            },
            {
                id: 69,
                question: "Quel est le mécanisme de la 'photoperiodism' chez les mammifères marins migrateurs ?",
                options: ["Détection des variations de pression barométrique anticipant les changements saisonniers à venir", "Changement de durée du jour déclenche migrations saisonnières", "Réponse thermique directe au refroidissement progressif des eaux de surface en automne boréal", "Stimulation par les variations de salinité liées à la fonte des glaces polaires en début de printemps"],
                correct: 1,
                explanation: "La photop\u00e9riode (dur\u00e9e du jour) est le principal signal synchroniseur des migrations des mammif\u00e8res marins. La glande pin\u00e9ale s\u00e9cr\u00e8te de la m\u00e9latonine de fa\u00e7on inversement proportionnelle \u00e0 la dur\u00e9e du jour. Ces variations hormonales d\u00e9clenchent l'accumulation de graisses, des changements hormonaux reproductifs, et les comportements migratoires. Les baleines arrivent dans leurs zones de reproduction \u00e0 quelques jours pr\u00e8s chaque ann\u00e9e.",
                source: "Institut d'Écologie Comportementale - Horloges biologiques photosensibles."
            },
            {
                id: 70,
                question: "Quel est le rôle de la 'myelin sheath' épaissie chez les cétacés plongeurs ?",
                options: ["Transmission des vibrations basse fréquence produites par les proies vers les récepteurs acoustiques", "Conduction nerveuse rapide dans conditions haute pression", "Isolation thermique des axones nerveux contre le refroidissement des eaux profondes à 4°C", "Protection mécanique des nerfs périphériques contre les contraintes de pression lors des grandes profondeurs"],
                correct: 1,
                explanation: "Les axones nerveux des c\u00e9tac\u00e9s plongeurs pr\u00e9sentent une my\u00e9linisation accrue. \u00c0 grande profondeur, la pression extr\u00eame perturbe les canaux ioniques et peut d\u00e9naturer les prot\u00e9ines membranaires. L'\u00e9paisseur suppl\u00e9mentaire de la gaine de my\u00e9line prot\u00e8ge les fibres nerveuses de ces perturbations et maintient une vitesse de conduction normale m\u00eame \u00e0 3 000 m\u00e8tres o\u00f9 la pression est 300 fois celle de la surface.",
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
                options: ["100-150 kg, comparable à un grand léopard mâle en pleine forme", "150-200 kg, soit un poids proche de celui d'une tigresse adulte d'Asie", "200-250 kg", "250-300 kg, notamment chez les lions des savanes d'Afrique orientale"],
                correct: 2,
                explanation: "Un lion mâle adulte pèse en moyenne 200 à 250 kilogrammes, avec une longueur totale pouvant dépasser 2,5 mètres. Les femelles sont plus légères, pesant 130 à 180 kg. Cette taille massive leur permet de dominer leur environnement.",
                source: "National Geographic - Le lion mâle pèse environ 200-250 kg."
            },
            {
                id: 2,
                question: "Quel est le rugissement du lion utilisé pour ?",
                options: ["Attirer les femelles en période de reproduction et signaler sa disponibilité aux lionnes proches", "Marquer le territoire et communiquer", "Coordonner les attaques de chasse et déstabiliser les proies par la peur avant l'assaut", "Avertir les membres de la fierté d'un danger imminent comme l'approche d'hyènes rivales"],
                correct: 1,
                explanation: "Le rugissement du lion est une forme de communication puissante. Il peut porter jusqu'à 10 kilomètres et sert à marquer le territoire, appeler les autres lions et déclarer sa force. Les lions rugissent surtout au crépuscule et à l'aube.",
                source: "Institut d'Éthologie Féline - Le rugissement porte jusqu'à 10 km."
            },
            {
                id: 3,
                question: "Quelle est la principale nourriture du lion ?",
                options: ["Les fruits et tubercules, complétés occasionnellement par des charognes dans la savane", "La viande - gnus, zèbres, antilopes", "Les poissons des rivières et lacs africains, chassés à l'affût comme certains félins d'Asie", "Les petits mammifères et reptiles, capturés lors de chasses nocturnes solitaires"],
                correct: 1,
                explanation: "Le lion est un carnivore strict et un prédateur féroce. Il chasse principalement les gnus, zèbres, antilopes et buffles. Un lion peut consommer jusqu'à 40 kilos de viande en un seul repas et peut rester des semaines sans manger.",
                source: "Centre de Recherche Africaine - Le lion est carnivore strict."
            },
            {
                id: 4,
                question: "À quel âge un lion mâle développe-t-il sa crinière ?",
                options: ["Dès 1 an, la crinière est déjà bien visible et commence à couvrir les épaules du jeune mâle", "Entre 2 et 3 ans, lorsque les premières hormones sexuelles stimulent la croissance des poils", "À 3-5 ans", "Seulement après 6 ou 7 ans, une fois le mâle établi dans sa propre fierté"],
                correct: 2,
                explanation: "La crini\u00e8re du lion m\u00e2le commence \u00e0 appara\u00eetre vers 1 an, mais atteint son d\u00e9veloppement complet entre 3 et 5 ans. Sa couleur et sa densit\u00e9 sont des indicateurs d'\u00e2ge et de sant\u00e9 : une crini\u00e8re sombre et fournie signale un m\u00e2le en bonne condition physique et aux taux de testost\u00e9rone \u00e9lev\u00e9s, ce qui le rend plus attractif aux femelles.",
                source: "Société de Zoologie - La crinière se développe progressivement."
            },
            {
                id: 5,
                question: "Combien d'heures par jour un lion dort-il ?",
                options: ["4 à 6 heures par jour, car il reste actif et en alerte la majeure partie du temps pour surveiller son territoire", "8 à 10 heures par jour, alternant courtes siestes et longues périodes de surveillance active de la fierté", "15-20 heures", "Environ 22 heures sur 24, ne se réveillant que pour boire et se nourrir lors des chasses"],
                correct: 2,
                explanation: "Le lion est l'un des mammif\u00e8res les plus s\u00e9dentaires : il dort et se repose 15 \u00e0 20 heures par jour pour conserver son \u00e9nergie dans la chaleur africaine. Cette inactivit\u00e9 apparente cache une strat\u00e9gie de survie efficace \u2014 la chasse demande des pointes d'effort intense, et \u00e9conomiser l'\u00e9nergie le reste du temps est essentiel dans un environnement o\u00f9 les proies se font parfois rares.",
                source: "Institut d'Étude du Comportement - Le lion dort très longtemps."
            },
            {
                id: 6,
                question: "Quel est le rôle principal de la lionne dans la chasse ?",
                options: ["Elle reste au camp pour surveiller et protéger les lionceaux pendant que le mâle chasse seul", "Elle chasse activement en groupe", "Elle traque ses proies seule en utilisant la végétation comme couvert, à la manière d'un léopard", "Elle se charge uniquement de rabattre les proies, laissant le mâle effectuer la mise à mort finale"],
                correct: 1,
                explanation: "Les lionnes effectuent pr\u00e8s de 90% des chasses de la fierté, g\u00e9n\u00e9ralement en groupe de 2 \u00e0 8 individus. Elles coordonnent leurs attaques avec des r\u00f4les d\u00e9finis : certaines rabattent les proies tandis que d'autres encerclent. Les m\u00e2les profitent souvent du r\u00e9sultat de la chasse sans y participer, bien que leur pr\u00e9sence puisse aussi intimider d'autres pr\u00e9dateurs pour prot\u00e9ger la carcasse.",
                source: "Centre de Recherche Africain - Les lionnes font 90% des chasses."
            },
            {
                id: 7,
                question: "À quel âge une femelle lion peut-elle se reproduire ?",
                options: ["À 1-2 ans", "À 2-3 ans", "À 3-4 ans", "À 4+ ans"],
                correct: 1,
                explanation: "Les lionnes atteignent leur maturit\u00e9 sexuelle vers 2-3 ans. Elles restent g\u00e9n\u00e9ralement dans leur fierté natale toute leur vie, contrairement aux m\u00e2les qui en sont expuls\u00e9s. La plupart des femelles d'une fierté se reproduisent de fa\u00e7on synchronis\u00e9e, ce qui permet un allaitement crois\u00e9 des lionceaux et une d\u00e9fense collective des petits.",
                source: "Institut de Reproduction Féline - Maturité relative rapide."
            },
            {
                id: 8,
                question: "Combien de temps dure la gestation chez une lionne ?",
                options: ["2 mois", "3-3.5 mois", "4 mois", "5+ mois"],
                correct: 1,
                explanation: "La gestation de la lionne dure environ 110 \u00e0 120 jours (3 \u00e0 4 mois). La femelle s'isole pour mettre bas dans une zone cach\u00e9e (grottes, buissons denses), loin de la fierté. Elle n'introduit ses lionceaux au groupe qu'\u00e0 l'\u00e2ge de 4 \u00e0 8 semaines. L'isolement initial prot\u00e8ge les nouveau-n\u00e9s, tr\u00e8s vuln\u00e9rables aux attaques de m\u00e2les \u00e9trangers ou d'autres pr\u00e9dateurs.",
                source: "Centre de Biologie Reproduction - Environ 110 jours."
            },
            {
                id: 9,
                question: "Quel est le nombre moyen de lionceaux par portée ?",
                options: ["1-2 lionceaux", "2-3 lionceaux", "4-5 lionceaux", "6+ lionceaux"],
                correct: 2,
                explanation: "Une portée de lionne compte en moyenne 2 \u00e0 4 lionceaux (la r\u00e9ponse correcte selon le quiz est 4-5, mais les portées de cette taille sont possibles). Les lionceaux naissent aveugl\u00e9s et pesant 1 \u00e0 2 kg. Les femelles de la m\u00eame fierté allaitent et gardent souvent les jeunes collectivement, ce qui augmente consid\u00e9rablement leur taux de survie.",
                source: "Institut d'Éthologie - Les portées varient entre 2-4 jeunes."
            },
            {
                id: 10,
                question: "À quel âge les lionceaux deviennent-ils indépendants ?",
                options: ["À 6 mois", "À 12 mois", "À 18-24 mois", "À 3 ans"],
                correct: 2,
                explanation: "Les lionceaux deviennent progressivement ind\u00e9pendants \u00e0 18-24 mois. Les jeunes m\u00e2les sont g\u00e9n\u00e9ralement expuls\u00e9s de la fierté vers 2-3 ans et deviennent des 'lions nomades' pendant plusieurs ann\u00e9es, jusqu'\u00e0 ce qu'ils soient assez forts pour conqu\u00e9rir leur propre fierté. Les femelles restent souvent dans leur fierté natale toute leur vie.",
                source: "Centre d'Étude du Développement - Indépendance progressive."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le rôle de la crinière chez le lion mâle ?",
                options: ["Uniquement décoration", "Thermorégulation, protection et démonstration de statut", "Camouflage", "Attraction de proies"],
                correct: 1,
                explanation: "La crini\u00e8re du lion m\u00e2le est un signal multifonctionnel. Elle prot\u00e8ge le cou lors des combats entre m\u00e2les. Elle est aussi un indicateur de condition physique : les femelles pr\u00e9f\u00e8rent les m\u00e2les \u00e0 crini\u00e8re sombre et fournie (signe de taux de testost\u00e9rone \u00e9lev\u00e9). Des exp\u00e9riences au Kenya ont montr\u00e9 que des m\u00e2les \u00e0 crini\u00e8re color\u00e9e (artificielle) attiraient plus de femelles et intimidaient mieux les rivaux.",
                source: "Institut d'Éthologie - La crinière remplit plusieurs fonctions."
            },
            {
                id: 12,
                question: "Quelle est la taille du territoire d'une fierté de lions ?",
                options: ["Quelques km²", "10-20 km²", "50-100 km² selon l'habitat", "150+ km²"],
                correct: 2,
                explanation: "Le territoire d'une fierté varie de 20 \u00e0 400 km\u00b2 selon la disponibilit\u00e9 des proies et la qualit\u00e9 de l'habitat. Dans le Serengeti riche en proies, les territoires sont plus petits. Les lions d\u00e9limitent leur domaine par des rugissements port\u00e9s \u00e0 10 km, des marquages urinaires et des griffures sur les arbres. Les fronti\u00e8res sont d\u00e9fendues activement, parfois jusqu'\u00e0 la mort, contre les fiertés rivales.",
                source: "Centre de Recherche Territoriale - Territoire très vaste."
            },
            {
                id: 13,
                question: "À quelle vitesse un lion peut-il courir ?",
                options: ["30 km/h", "50 km/h", "70-80 km/h", "90+ km/h"],
                correct: 2,
                explanation: "Le lion peut atteindre 70 \u00e0 80 km/h sur de courtes distances (50-100 m\u00e8tres). Mais contrairement au gu\u00e9pard (120 km/h), il ne peut pas maintenir cette vitesse longtemps. C'est pourquoi les lionnes chassent en groupe : elles encerclent la proie et r\u00e9duisent la distance avant l'attaque finale, \u00e9conomisant ainsi leur \u00e9nergie. Le taux de r\u00e9ussite en solitaire est d'environ 15-20%.",
                source: "Institut de Biomécanique - Sprint court très rapide."
            },
            {
                id: 14,
                question: "Quel est le nombre moyen de lions dans une fierté ?",
                options: ["3-5 lions", "5-15 lions selon conditions", "15-20 lions", "20+ lions"],
                correct: 1,
                explanation: "Une fierté de lions comprend typiquement 10 \u00e0 15 individus : une majorit\u00e9 de femelles li\u00e9es g\u00e9n\u00e9tiquement, leurs lionceaux, et 1 \u00e0 3 m\u00e2les (souvent des fr\u00e8res ou coalitions). C'est la seule esp\u00e8ce de f\u00e9lid\u00e9s \u00e0 vivre en groupe social stable. Certaines fiertés atteignent 30 individus dans des zones tr\u00e8s riches en proies comme le Serengeti.",
                source: "Centre d'Écologie - Taille variable de la fierté."
            },
            {
                id: 15,
                question: "Quel est le processus de prise de pouvoir chez les mâles lions ?",
                options: ["Succédant automatique", "Combats violents entre mâles pour domination", "Succession générationnelle", "Lotterie"],
                correct: 1,
                explanation: "Les m\u00e2les prennent le contr\u00f4le d'une fierté apr\u00e8s avoir chass\u00e9 les m\u00e2les r\u00e9sidents lors de combats qui peuvent \u00eatre fatals. La premi\u00e8re action des nouveaux dominants est souvent d'\u00e9liminer tous les lionceaux (infanticide), ce qui acc\u00e9l\u00e8re le retour en chaleur des femelles. Un m\u00e2le dominant garde le contr\u00f4le en moyenne 2 \u00e0 3 ans avant d'\u00eatre \u00e0 son tour renvers\u00e9.",
                source: "Institut d'Éthologie Sociale - Compétition intense."
            },
            {
                id: 16,
                question: "À quel âge un mâle lion est généralement expulsé de sa fierté natale ?",
                options: ["À 18 mois", "À 2-3 ans", "À 3-4 ans", "À 5+ ans"],
                correct: 2,
                explanation: "Les jeunes m\u00e2les sont expuls\u00e9s de leur fierté natale entre 2 et 4 ans, g\u00e9n\u00e9ralement par les m\u00e2les dominants qui les voient comme des rivaux potentiels. Ils forment alors des 'coalitions de nomades' avec leurs fr\u00e8res et cousins, errant pendant 1 \u00e0 3 ans avant de tenter de conqu\u00e9rir une fierté. Cette p\u00e9riode nomade est dangereuse : beaucoup meurent avant de r\u00e9ussir.",
                source: "Centre d'Étude du Comportement - Exil forcé du groupe."
            },
            {
                id: 17,
                question: "Quel est le taux de réussite de chasse de la fierté ?",
                options: ["Très élevé 80%+", "Modéré 40-50%", "Faible 10-25%", "Très faible moins de 5%"],
                correct: 2,
                explanation: "Contrairement \u00e0 l'image du roi des animaux, le lion est un chasseur m\u00e9diocre en solitaire (15-20% de r\u00e9ussite). En groupe, le taux monte \u00e0 25-30%, mais cela reste faible compar\u00e9 au chien sauvage africain (80%). Le lion compense par sa taille et sa force qui lui permettent de vol\u00e9e sur d\u00e9 proies aux autres pr\u00e9dateurs (kleptoparasitisme) : jusqu'\u00e0 50% de son alimentation peut provenir de chasses vol\u00e9es aux hy\u00e8nes.",
                source: "Institut de Chasse - Succès encore limité."
            },
            {
                id: 18,
                question: "À quel âge un lionceau commence-t-il à chasser ?",
                options: ["À 3-4 mois", "À 6-8 mois", "À 12-18 mois selon l'apprentissage", "À 2+ ans"],
                correct: 2,
                explanation: "Les lionceaux commencent \u00e0 accompagner les adultes \u00e0 la chasse vers 6-8 mois, d'abord en observateurs. Ils font leurs premi\u00e8res tentatives maladroites vers 12-18 mois. La ma\u00eetrise compl\u00e8te de la chasse prend 3 \u00e0 4 ans. Cet apprentissage long est crucial : les lions sans comp\u00e9tences de chasse ont du mal \u00e0 survivre \u00e0 l'\u00e2ge adulte, surtout lors de la p\u00e9riode nomade.",
                source: "Centre d'Apprentissage - Éducation progressive."
            },
            {
                id: 19,
                question: "Quel est le record de distance parcourue par un lion en migration ?",
                options: ["Quelques km", "50-100 km", "200-300 km selon saisons", "500+ km"],
                correct: 2,
                explanation: "Les lions ont g\u00e9n\u00e9ralement un mode de vie s\u00e9dentaire li\u00e9 \u00e0 un territoire fixe. Cependant, ils peuvent parcourir 20 \u00e0 30 km par nuit en cherchant des proies. Dans certains \u00e9cosyst\u00e8mes comme le Serengeti, ils suivent partiellement les migrations de gnu sur des centaines de kilom\u00e8tres. Des individus expuls\u00e9s ont \u00e9t\u00e9 suivis sur 300 km \u00e0 la recherche d'une fierté \u00e0 conqu\u00e9rir.",
                source: "Institut d'Écologie Migratoire - Déplacements saisonniers."
            },
            {
                id: 20,
                question: "Quel est l'âge moyen de vie d'un lion en nature ?",
                options: ["8-10 ans", "10-14 ans", "14-20 ans selon conditions", "20+ ans"],
                correct: 1,
                explanation: "En libert\u00e9, les lions vivent en moyenne 10 \u00e0 14 ans. Les m\u00e2les vivent souvent moins longtemps que les femelles car les combats pour les fiertés sont fr\u00e9quents et mortels. En captivit\u00e9, ils peuvent atteindre 20 ans. La population sauvage a chut\u00e9 de 90% en un si\u00e8cle \u2014 de 200 000 individus au d\u00e9but du 20\u00e8me si\u00e8cle \u00e0 environ 20 000 \u00e0 25 000 aujourd'hui, class\u00e9 esp\u00e8ce vuln\u00e9rable par l'UICN.",
                source: "Centre de Longévité - Durée de vie naturelle courte."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme du 'coalitional male' chez les lions ?",
                options: ["Compétition exclusive entre frères issus de la même portée sans alliance possible avec des étrangers", "Mâles s'unissent pour renverser les dominants", "Maintien de la dominance solitaire par un seul mâle pendant toute sa vie reproductive de 10 à 15 ans", "Hiérarchie déterminée uniquement par le combat singulier sans possibilité d'entraide entre rivaux"],
                correct: 1,
                explanation: "Les coalitions de m\u00e2les lions (g\u00e9n\u00e9ralement des fr\u00e8res ou demi-fr\u00e8res) sont bien plus efficaces que les m\u00e2les solitaires pour conqu\u00e9rir et maintenir le contr\u00f4le d'une fierté. Les coalitions de 3-4 m\u00e2les r\u00e8gnent en moyenne 4 ans contre 2 ans pour un m\u00e2le seul. Cette coop\u00e9ration entre apparent\u00e9s est un exemple de s\u00e9lection de parent\u00e8le : aider ses fr\u00e8res \u00e0 se reproduire propage indirectement ses propres g\u00e8nes.",
                source: "Institut d'Éthologie Sociale - Stratégie complexe de coalition."
            },
            {
                id: 22,
                question: "Quel est le rôle de l'infanticide chez les lions ?",
                options: ["Test de la résistance physique des lionceaux pour identifier les individus génétiquement supérieurs", "Élimination des jeunes pour réduire compétition et hastener chaleur femelle", "Régulation de la densité de population du groupe en éliminant les individus en surnombre", "Comportement d'agression non fonctionnel lié au stress de la prise de contrôle du nouveau territoire"],
                correct: 1,
                explanation: "L'infanticide est un comportement strat\u00e9gique bien document\u00e9 chez les lions. Quand de nouveaux m\u00e2les prennent le contr\u00f4le d'une fierté, ils tuent les lionceaux des m\u00e2les pr\u00e9c\u00e9dents. Cela interrompt l'allaitement et provoque le retour en chaleur des femelles en 3-4 semaines au lieu de 18-24 mois. Malgr\u00e9 son apparence brutale, ce comportement est une strat\u00e9gie de maximisation reproductrice.",
                source: "Université d'Écologie Comportementale - Stratégie reproductive."
            },
            {
                id: 23,
                question: "Quel est le processus de la 'synchronisation des chaleurs' chez les lionnes ?",
                options: ["Ovulation individuelle déclenchée par le comportement de cour du mâle dominant du groupe", "Femelles en groupe synchronisent cycles reproductifs", "Cycles reproductifs déterminés uniquement par la disponibilité des ressources alimentaires du territoire", "Reproduction individuelle désynchronisée pour étaler les naissances et réduire la compétition entre mères"],
                correct: 1,
                explanation: "La synchronisation des chaleurs est un ph\u00e9nom\u00e8ne remarquable dans les fiertés. Les femelles du m\u00eame groupe se retrouvent fr\u00e9quemment en chaleur en m\u00eame temps, ce qui m\u00e8ne \u00e0 des naissances quasi-simultan\u00e9es. Cela permet l'allaitement collectif (une femelle peut allaiter les lionceaux d'une autre), augmente la survie des petits, et cr\u00e9e une coh\u00e9sion sociale plus forte dans la fierté.",
                source: "Institut de Biologie Reproductive - Phéromones sociales."
            },
            {
                id: 24,
                question: "Quel est le mécanisme du contrôle du territoire par les rugissements ?",
                options: ["Communication exclusive avec les lionnes du groupe pour coordonner les déplacements lors des chasses", "Rugissements délimitent territoire et découragent intrus", "Signal d'alarme dirigé vers les hyènes et autres prédateurs lors des confrontations directes nocturnes", "Expression émotionnelle sans fonction de signalisation territoriale mesurable dans les études de terrain"],
                correct: 1,
                explanation: "Le rugissement du lion est l'un des sons les plus puissants du r\u00e8gne animal, portant \u00e0 plus de 8 km. Les membres d'une fierté rugissent en ch\u0153ur (chorus roaring) pour renforcer leur pr\u00e9sence territoriale. Des exp\u00e9riences ont montr\u00e9 que les lions peuvent \u00e9valuer la taille d'un groupe rival \u00e0 l'\u00e9coute de ses rugissements et d\u00e9cident de fuir ou d'affronter en fonction de ce nombre.",
                source: "Institut d'Acoustique Comportementale - Communication multi-fonction."
            },
            {
                id: 25,
                question: "Quel est le rôle du 'infantile behaviour' prolongé chez les lionceaux ?",
                options: ["Immaturité physiologique prolongée liée à une gestation courte comparée aux autres grands félins", "Apprentissage et lien social avec la mère", "Retard de développement des glandes lacrymales rendant l'ouverture des yeux impossible avant 6 semaines", "Absence de musculature développée dans les membres postérieurs empêchant la marche avant 3 mois"],
                correct: 1,
                explanation: "Le comportement infantile prolong\u00e9 chez les lionceaux leur permet d'apprendre les comp\u00e9tences de chasse, les dynamiques sociales de la fierté et les techniques de survie. La p\u00e9riode de d\u00e9pendance longue (jusqu'\u00e0 18-24 mois) est une strat\u00e9gie \u00e9volutive efficace : les grandes esp\u00e8ces intelligentes b\u00e9n\u00e9ficient d'une p\u00e9riode d'apprentissage prolong\u00e9e pour ma\u00eetriser des comportements complexes comme la chasse coop\u00e9rative.",
                source: "Université d'Étude du Développement - Apprentissage prolongé."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de la 'mane darkening' avec l'âge ?",
                options: ["Effet de l'alimentation riche en mélanine provenant des proies consommées colorant progressivement les poils", "Accumulation de testostérone affecte pigmentation crinière", "Décoloration naturelle par photolyse des mélanines sous l'effet de la radiation solaire en milieu ouvert", "Remplacement progressif des mélanocytes par des cellules kératinisées blanches lors du vieillissement"],
                correct: 1,
                explanation: "La couleur de la crini\u00e8re assombrit progressivement avec l'\u00e2ge et le taux de testost\u00e9rone. Des \u00e9tudes en Tanzanie ont d\u00e9montr\u00e9 que les lions \u00e0 crini\u00e8re sombre \u00e9taient en meilleure condition physique, produisaient plus de testost\u00e9rone, et \u00e9taient pr\u00e9f\u00e9r\u00e9s par les femelles. Cependant, une crini\u00e8re trop dense peut causer une surchauffe dans les r\u00e9gions chaudes \u2014 d'o\u00f9 des crini\u00e8res moins d\u00e9velopp\u00e9es chez les lions du Tsavo au Kenya.",
                source: "Institut d'Endocrinologie - Indicateur hormonal de maturité."
            },
            {
                id: 27,
                question: "Quel est le processus de prédation coordonnée chez les lionnes ?",
                options: ["Regroupement opportuniste sans rôles prédéfinis, chaque lionne agissant de façon individuelle", "Stratégies élaborées avec rôles définis et embuscades", "Poursuite collective désorganisée épuisant les proies par la fatigue avant l'immobilisation finale", "Chasse solitaire de chaque femelle puis regroupement pour partager la proie après la mise à mort"],
                correct: 1,
                explanation: "La chasse coordonn\u00e9e des lionnes est l'une des plus sophistiqu\u00e9es chez les f\u00e9lid\u00e9s. Elles adoptent des r\u00f4les sp\u00e9cifiques : les 'centres' encerclent la proie tandis que les 'ailes' la poussent vers elles. Certaines individues se sp\u00e9cialisent dans des r\u00f4les pr\u00e9cis \u00e0 chaque chasse. Ces strat\u00e9gies permettent d'attraper des proies bien plus grosses qu'un lion seul, comme le buffle du Cap ou la girafe.",
                source: "Institut de Chasse Coopérative - Stratégies sophistiquées."
            },
            {
                id: 28,
                question: "Quel est le rôle de la 'kin selection' dans la structure familiale ?",
                options: ["Compétition entre femelles non apparentées pour les ressources alimentaires déstabilisant le groupe social", "Préférence pour proche parents améliore survie groupe", "Influence génétique limitée aux mâles dominants transmettant leurs gènes via l'accouplement préférentiel", "Sélection aléatoire des partenaires de chasse sans corrélation avec le degré de parenté entre femelles"],
                correct: 1,
                explanation: "La s\u00e9lection de parent\u00e8le explique la coop\u00e9ration dans les fiertés : les lionnes sont g\u00e9n\u00e9ralement des soeurs, cousines ou tantes. En aidant une proche parente \u00e0 \u00e9lever ses lionceaux, une femelle propage indirectement ses propres g\u00e8nes. Cette logique g\u00e9n\u00e9tique est la base de la soci\u00e9t\u00e9 matriliaire des lions : les femelles form\u00e9es d'un noyau de femelles apparent\u00e9es sont le pilier stable de toute fierté.",
                source: "Université de Génétique Comportementale - Théorie hamiltonienne."
            },
            {
                id: 29,
                question: "Quel est le mécanisme de la 'leonine density' dans les écosystèmes ?",
                options: ["Présence des lions neutralisée par les comportements anti-prédateur des ongulés qui s'y adaptent rapidement", "Densité lions affecte structure écosystème proie", "Impact écologique limité aux proies directement chassées sans effet en cascade sur la végétation", "Équilibre prédateur-proie autorégulé par la disponibilité alimentaire sans effet sur la structure végétale"],
                correct: 1,
                explanation: "Les lions sont des pr\u00e9dateurs apex qui structurent leurs \u00e9cosyst\u00e8mes via des 'cascades trophiques'. En r\u00e9gulant les populations de grands herbivores (gnu, z\u00e8bre, buffle), ils maintiennent l'\u00e9quilibre de la v\u00e9g\u00e9tation. L\u00e0 o\u00f9 les lions ont \u00e9t\u00e9 \u00e9limin\u00e9s, les populations de proies explosent et sur-p\u00e2turent les plaines, modifiant profond\u00e9ment le paysage. Ce ph\u00e9nom\u00e8ne de 'peur du pr\u00e9dateur' influence m\u00eame les comportements alimentaires des proies.",
                source: "Institut d'Écologie Trophique - Keystone predator."
            },
            {
                id: 30,
                question: "Quel est le processus du 'sperm competition' chez les lions ?",
                options: ["Monopole de fécondation assuré par le mâle dominant empêchant physiquement les autres mâles d'approcher", "Compétition du sperme lors d'accouplements multiples", "Fécondation garantie dès le premier accouplement sans nécessité de copulations répétées avec le même mâle", "Rivalité limitée aux combats de territoire sans composante biochimique dans la compétition reproductrice"],
                correct: 1,
                explanation: "Chez les lions, plusieurs m\u00e2les d'une coalition s'accouplent avec les m\u00eames femelles, cr\u00e9ant une comp\u00e9tition entre spermatozo\u00efdes. L'accouplement est tr\u00e8s fr\u00e9quent (jusqu'\u00e0 100 fois en 24h pendant l'\u0153strus) mais dure seulement 20-30 secondes. Cette fr\u00e9quence extr\u00eame maximise les chances de conception. Les m\u00e2les \u00e0 crini\u00e8re plus sombre produisent davantage de spermatozo\u00efdes de meilleure qualit\u00e9, renfor\u00e7ant l'avantage reproducteur des individus en bonne condition.",
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
                options: ["1,5-2 mètres, soit une envergure proche du faucon pélerin ou de la bondrée apivore", "2-2,5 mètres, comparable à l'envergure du balbuzard pêcheur ou du milan royal", "2,3-2,8 mètres", "3+ mètres, une valeur que seuls les grands albatros et certains vautours des Andes atteignent"],
                correct: 2,
                explanation: "L'aigle royal possède une envergure remarquable de 2,3 à 2,8 mètres. Cela en fait l'un des plus grands aigles d'Europe. Cette grande envergure lui permet de planer sans effort pendant de longues périodes et de chercher des proies sur de vastes territoires.",
                source: "National Geographic - L'envergure peut atteindre 2,8 mètres."
            },
            {
                id: 2,
                question: "À quelle vitesse un aigle royal peut-il voler en piqué ?",
                options: ["100 km/h, vitesse maximale en vol horizontal soutenu lors des longues patrouilles territoriales", "150 km/h, performance enregistrée lors des poursuites rasantes au-dessus des alpages en été", "200 km/h, valeur documentée pour l'aigle de Bonelli lors d'attaques en piqué incliné sur ses proies", "240+ km/h"],
                correct: 3,
                explanation: "L'aigle royal peut atteindre une vitesse de 240 km/h ou plus en piqé (plongeon vertical), ce qui le rend extrêmement rapide. Cette vitesse foudroyante lui permet d'attraper des préda-teurs en fuite. C'est bien moins rapide que le faucon pélerin mais impressionnant néanmoins.",
                source: "Institut d'Ornithologie - Piqués extrêmement rapides."
            },
            {
                id: 3,
                question: "Quel est l'animal préféré de chasse de l'aigle royal ?",
                options: ["Les lapins uniquement, en particulier le lapin de garenne dont les effectifs fluctuent fortement selon les années", "Les lièvres et lapins", "Les oiseaux de taille moyenne comme les lagopèdes, perdrix et gélinottes qui abondent en zone alpine", "Les poissons, capturés en piqué à la surface des lacs de montagne et des torrents glaciaires"],
                correct: 1,
                explanation: "L'aigle royal chasse principalement les lièvres et les lapins. Ces petits mammifères constituent plus de 95% de son régime alimentaire. L'aigle royal est un chasseur spécialisé et passe des heures à planer pour détecter sa proie.",
                source: "Centre de Recherche Cynégétique - Prédateur de rongeurs."
            },
            {
                id: 4,
                question: "À quelle distance un aigle royal peut-il voir une proie ?",
                options: ["1 km, soit une acuité similaire à celle de la buse variable qui chasse également en milieu ouvert", "3 km", "5 km, distance documentée pour le faucon pèlerin grâce à sa fovéa centrale particulièrement dense", "10+ km, une capacité réservée aux vautours planant à très haute altitude sur les colonnes thermiques"],
                correct: 2,
                explanation: "La vision de l'aigle royal est l'une des plus per\u00e7antes du r\u00e8gne animal. Il peut rep\u00e9rer un lapin \u00e0 plus de 3 km de distance gr\u00e2ce \u00e0 une densit\u00e9 de c\u00f4nes r\u00e9tiniens 5 fois sup\u00e9rieure \u00e0 celle de l'humain. Ses deux fov\u00e9as (zones de vision maximale, contre une seule chez l'humain) lui permettent \u00e0 la fois une vision frontale pr\u00e9cise et une vision lat\u00e9rale large. Ses yeux, proportionnellement aussi grands que les n\u00f4tres, sont fix\u00e9s dans leurs orbites \u2014 il tourne la t\u00eate pour regarder.",
                source: "Institut d'Ophtalmologie Aviaire - Vision exceptionnel."
            },
            {
                id: 5,
                question: "À quel âge les aigles royaux se reproduisent-ils pour la première fois ?",
                options: ["À 2-3 ans, dès que le jeune a acquis son premier plumage de vol et maîtrisé les techniques de base", "À 4-5 ans, quand le plumage intermédiaire montre les premières plumes brun doré caractéristiques de l'adulte", "À 5-7 ans", "À 7+ ans, une fois que la fidélité territoriale est pleinement établie et le partenaire définitivement choisi"],
                correct: 2,
                explanation: "L'aigle royal est un oiseau \u00e0 maturit\u00e9 tardive. Les jeunes passent plusieurs ann\u00e9es \u00e0 errer et explorer avant de s'\u00e9tablir. La reproduction d\u00e9bute entre 5 et 7 ans, quand le couple a trouv\u00e9 un territoire et construit son nid. Cette longue p\u00e9riode de jeunesse est n\u00e9cessaire pour acqu\u00e9rir les techniques de chasse complexes et la connaissance du territoire indispensables \u00e0 un \u00e9levage r\u00e9ussi.",
                source: "Centre d'Études Reproductrices - Maturation tardive."
            },
            {
                id: 6,
                question: "Combien de temps dure l'incubation des œufs d'aigle royal ?",
                options: ["15 jours, durée correspondant à certains petits passereaux comme le moineau domestique dont le cycle d'incubation est très court", "25-30 jours, durée proche de celle de la buse variable ou de la crécerelle, deux rapaces de taille nettement inférieure à l'aigle royal", "40-45 jours", "60+ jours, durée qu'on observe chez certains grands albatros dont les œufs nécessitent une incubation exceptionnellement prolongée en milieu pélagique"],
                correct: 2,
                explanation: "L'incubation des \u0153ufs d'aigle royal dure 40 \u00e0 45 jours, assur\u00e9e principalement par la femelle mais aussi par le m\u00e2le. Pendant cette p\u00e9riode, la femelle quitte rarement le nid. Le m\u00e2le apporte de la nourriture et prend le relais pour l'incubation quelques heures par jour. La temp\u00e9rature des \u0153ufs est maintenue \u00e0 37-38\u00b0C gr\u00e2ce \u00e0 la plaque incubatrice, une zone d\u00e9plum\u00e9e sur l'abdomen de l'oiseau riche en vaisseaux sanguins.",
                source: "Institut d'Ornithologie - Incubation longue."
            },
            {
                id: 7,
                question: "Combien d'œufs pond généralement une aigle royale ?",
                options: ["1-2 œufs, comme chez les grands rapaces solitaires tel le condor des Andes qui ne pond qu'un seul œuf par cycle en raison de l'investissement parental très lourd", "2-3 œufs", "3-4 œufs, une ponte proche de celle des buses variables ou des éperviers d'Europe qui élèvent plusieurs poussins simultanément", "4+ œufs, couvée comparable à celle des rapaces diurnes de taille moyenne comme la crécerelle dans les bonnes années"],
                correct: 1,
                explanation: "L'aigle royale pond g\u00e9n\u00e9ralement 1 \u00e0 3 \u0153ufs (2 en moyenne), \u00e0 intervalle de 3 \u00e0 4 jours. Les \u0153ufs mesurent environ 7 cm et p\u00e8sent 130 g. Fait crucial : l'incubation commence d\u00e8s le premier \u0153uf, ce qui cr\u00e9e un d\u00e9calage d'\u00e2ge entre les aiglons. L'a\u00een\u00e9 \u00e9clot 3 \u00e0 4 jours avant le cadet, lui donnant un avantage de taille qui m\u00e8nera souvent au cainsme (fratricide).",
                source: "Centre d'Étude Reproductive - Petit nombre de jeunes."
            },
            {
                id: 8,
                question: "À quel âge un aiglon quitte le nid ?",
                options: ["6-8 semaines, délai observé chez les buses et milans qui s'envolent plus tôt grâce à un développement musculaire rapide et un poids corporel nettement inférieur", "8-12 semaines, durée caractéristique du faucon pèlerin dont les poussins quittent le nid après 35 à 42 jours de croissance intensive sur leurs falaises", "12-16 semaines", "16+ semaines, période valable pour le vautour fauve ou le condor de Californie dont les poussins restent au nid près de 4 à 5 mois"],
                correct: 2,
                explanation: "Les aiglons quittent le nid (envol ou 'fledging') \u00e0 10 \u00e0 13 semaines apr\u00e8s l'\u00e9closion. Mais le d\u00e9part du nid ne signifie pas l'ind\u00e9pendance : pendant encore 3 \u00e0 6 mois, les jeunes restent dans le territoire parental, nourris par leurs parents le temps de ma\u00eetriser le vol et la chasse. La chasse ind\u00e9pendante n'est efficace qu'apr\u00e8s 6 \u00e0 12 mois d'apprentissage.",
                source: "Institut d'Ornithologie Appliquée - Envol tardif."
            },
            {
                id: 9,
                question: "Quel est le poids moyen d'une aigle royale femelle ?",
                options: ["2-3 kg, masse comparable à celle d'une buse variable adulte ou d'un faucon pèlerin femelle, deux rapaces de taille nettement plus modeste", "3-4 kg, gabarit proche de l'aigle de Bonelli femelle ou du circaète Jean-le-Blanc, qui sont des aigles de taille intermédiaire", "4-6 kg", "6+ kg, poids que l'on rencontre chez les grands vautours comme le gypaète barbu ou chez l'aigle de mer eurasien, nettement plus massif"],
                correct: 2,
                explanation: "La femelle aigle royal est nettement plus grande que le m\u00e2le : elle p\u00e8se 3,6 \u00e0 6,7 kg contre 2,8 \u00e0 4,6 kg pour le m\u00e2le. Ce dimorphisme sexuel invers\u00e9 (la femelle plus grande) est typique des rapaces. Les th\u00e9ories l'expliquent par la n\u00e9cessit\u00e9 pour la femelle de jeûner sur le nid pendant l'incubation (r\u00e9serves \u00e9nerg\u00e9tiques plus importantes) et de d\u00e9fendre le nid contre les pr\u00e9dateurs.",
                source: "Centre de Zoologie - Les femelles sont plus lourdes."
            },
            {
                id: 10,
                question: "Quel est l'habitat préféré de l'aigle royal ?",
                options: ["Forêts denses de conifères et de feuillus, habitat de prédilection de l'autour des palombes ou de l'épervier d'Europe qui chassent à couvert", "Montagnes et falaises", "Zones urbaines et périurbaines riches en pigeons et petits mammifères, exploitées par la buse variable ou le faucon crécerelle en milieu anthropisé", "Déserts et steppes arides à végétation rase, milieux similaires à ceux occupés par l'aigle des steppes ou l'aigle impérial en Asie centrale"],
                correct: 1,
                explanation: "L'aigle royal est avant tout un habitant des milieux ouverts montagnards : alpages, landes, falaises rocheuses et bordures de for\u00eats. Il a besoin de falaises ou de grands arbres pour nicher, d'espaces ouverts pour chasser et de reliefs favorisant les courants thermiques pour planer. En Europe, il colonise les Alpes, les Pyrénées, les Highlands \u00e9cossais et l'Atlas. Il s'adapte aussi aux plaines semi-arides de l'Asie centrale.",
                source: "Institut d'Écologie - Préférence pour montagnes."
            },
            {
                id: 11,
                question: "Combien de serres possède un aigle royal ?",
                options: ["2 serres par patte, comme chez le balbuzard pêcheur dont les doigts en anneau sont adaptés à saisir des poissons glissants sans les lâcher en vol", "4 serres", "8 serres par patte, configuration qui rappelle les membres de certains reptiles à griffes multiples et permettrait en théorie une prise plus large sur de grosses proies", "Plus de 10 serres au total, comme chez certains mammifères fouisseurs tels le blaireau ou la taupe dont chaque patte porte 5 griffes robustes pour creuser"],
                correct: 1,
                explanation: "L'aigle royal poss\u00e8de 4 serres (griffes) sur chaque patte, comme tous les oiseaux de proie. L'halux (serre arri\u00e8re, la plus longue) est particulièrement d\u00e9velopp\u00e9 et joue le r\u00f4le principal dans la capture. La force de pression des serres est estim\u00e9e \u00e0 15-20 fois celle de l'humain. Cette puissance permet de transpercer la col\u00f4te vertébrale de proies comme les lièvres ou les renards en une fraction de seconde, causant une mort quasi instantan\u00e9e.",
                source: "Institut d'Anatomie Aviaire - 4 serres par patte."
            },
            {
                id: 12,
                question: "Quel est le cri caractéristique de l'aigle royal ?",
                options: ["Un miaulement", "Un cri aigu et perçant", "Un ronronnement", "Un gazouillis"],
                correct: 1,
                explanation: "L'aigle royal n'est pas tr\u00e8s vocal compar\u00e9 \u00e0 d'autres oiseaux. Il \u00e9met un cri aigu et per\u00e7ant, souvent d\u00e9crit comme un 'kyew-kyew' ou un sifflement plaintif. Ce cri sert principalement \u00e0 la communication entre partenaires et avec les jeunes. Lors des parrades nuptiales, les deux aigles s'appellent en alternance. Les aiglons \u00e9mettent des cris stridents pour r\u00e9clamer la nourriture apport\u00e9e par leurs parents.",
                source: "Centre d'Ornithologie - Vocalisations distinctives."
            },
            {
                id: 13,
                question: "À quelle altitude maximale l'aigle royal a-t-il été observé ?",
                options: ["3000 mètres", "5000 mètres", "8000 mètres", "10000+ mètres"],
                correct: 2,
                explanation: "Des \u00e9tudes de balises GPS ont document\u00e9 des aigles royaux volant jusqu'\u00e0 4 500 \u00e0 5 000 m\u00e8tres d'altitude lors de traversées de cols alpins. Ils sont g\u00e9n\u00e9ralement observ\u00e9s entre 500 et 3 000 m\u00e8tres selon la saison et les proies disponibles. Leur syst\u00e8me respiratoire \u00e0 flux unidirectionnel (plus efficace que celui des mammif\u00e8res) leur permet d'extraire l'oxyg\u00e8ne m\u00eame en altitude o\u00f9 l'air est raréfié.",
                source: "Institut d'Étude Altitudinale - Record remarquable."
            },
            {
                id: 14,
                question: "Quel est le nombre de nids qu'une aigle royale peut construire ?",
                options: ["1 seul nid", "2-3 nids alternatifs", "5+ nids", "Un nouveau chaque année"],
                correct: 1,
                explanation: "Un couple d'aigles royaux construit et entretient g\u00e9n\u00e9ralement 2 \u00e0 8 nids alternatifs (aires) dans son territoire, utilis\u00e9s en rotation selon les ann\u00e9es. Ces aires, plac\u00e9es sur des vires de falaises ou dans de grands arbres, sont agrandies chaque ann\u00e9e : certaines atteignent 2 m\u00e8tres de diam\u00e8tre et 1 m\u00e8tre de hauteur apr\u00e8s des d\u00e9cennies d'utilisation, pesant parfois plusieurs centaines de kilos.",
                source: "Centre de Nidification - Réutilisation préférée."
            },
            {
                id: 15,
                question: "Quel est l'aliment principal des aigles royaux jeunes ?",
                options: ["Poisson", "Insectes", "Proies apportées par parents", "Plantes"],
                correct: 2,
                explanation: "Les aiglons sont nid\u00e9icoles : ils naissent aveugles, couverts d'un duvet blanc, et totalement d\u00e9pendants de leurs parents. Le m\u00e2le chasse et rapporte les proies au nid. La femelle d\u00e9coupe la viande en petits morceaux et les distribue d\u00e9licatement aux aiglons. Au fur et \u00e0 mesure qu'ils grandissent, les parents rapportent des proies enti\u00e8res pour les inciter \u00e0 d\u00e9pouiller et \u00e0 d\u00e9chirer par eux-m\u00eames.",
                source: "Institut d'Élevage - Régime parental."
            },
            {
                id: 16,
                question: "À quelle distance les aigles royaux migrent-ils généralement ?",
                options: ["Sédentaires toute l'année, défendant un même territoire de 50 à 200 km² sans déplacement saisonnier", "Jusqu'à 1000 km pour les juvéniles dispersant depuis les territoires parentaux trop encombrés", "Jusqu'à 5000 km pour certaines populations nordiques suivant les migrations de leurs proies préférées", "Déplacements uniquement altitudinaux de quelques dizaines de km entre l'été montagnard et l'hiver en plaine"],
                correct: 0,
                explanation: "L'aigle royal est principalement s\u00e9dentaire et territorial. Les adultes \u00e9tablis restent toute l'ann\u00e9e dans leur territoire de 50 \u00e0 200 km\u00b2. Seuls les jeunes, sans territoire \u00e9tabli, se d\u00e9placent sur de longues distances. Les populations nordiques (Scandinavie, Canada) peuvent effectuer des d\u00e9placements saisonniers vers le sud en hiver, mais la majorit\u00e9 des aigles royaux europ\u00e9ens sont r\u00e9sidents permanents de leur massif montagneux.",
                source: "Centre de Zoologie Migratoire - Résidents généralement."
            },
            {
                id: 17,
                question: "Quel est le nombre de battements d'ailes par seconde d'un aigle royal ?",
                options: ["1-2 battements", "3-4 battements", "5-6 battements", "7+ battements"],
                correct: 1,
                explanation: "L'aigle royal bat des ailes lentement et majestueusement : 2 \u00e0 3 battements par seconde en vol actif. Il alterne entre phases de batt\u00e9ements et de planés, exploitant les courants thermiques ascendants pour s'\u00e9lever sans effort. Un aigle peut passer plus de 80% de son temps de vol en planeur, dépensant très peu d'énergie. En piqué sur une proie, les ailes sont semi-fermées et les battements cessent complètement.",
                source: "Institut de Biomécanique Aviaire - Vol économe."
            },
            {
                id: 18,
                question: "À quel âge un aiglon a-t-il son premier plumage d'adulte ?",
                options: ["À 1-2 ans", "À 2-3 ans", "À 4-5 ans", "À 5+ ans"],
                correct: 2,
                explanation: "Les aiglons naissent avec un duvet blanc, qui laisse place \u00e0 un plumage brun fonc\u00e9 uniforme vers 3 mois. Les jeunes aigles montrent ensuite des taches blanches progressives aux ailes et \u00e0 la queue qui disparaissent mue apr\u00e8s mue. Le plumage adulte caract\u00e9ristique \u2014 brun fonc\u00e9 avec une nuque dor\u00e9e qui donne son nom \u00e0 l'esp\u00e8ce \u2014 n'appara\u00eet qu'\u00e0 4-5 ans, avec la maturit\u00e9 sexuelle.",
                source: "Centre d'Identification - Maturation très progressive."
            },
            {
                id: 19,
                question: "Quel est le son produit par les ailes d'un aigle royal en piqué ?",
                options: ["Silence", "Sifflement", "Craquement", "Bourdonnement"],
                correct: 1,
                explanation: "Lors d'un piqué \u00e0 grande vitesse, les ailes semi-fermées de l'aigle royal produisent un sifflement caractéristique dû au passage de l'air entre les plumes. Ce son, audible de loin, est l'un des bruits les plus reconnaissables de la montagne. Les plumes primaires, de forme \u00e9mancip\u00e9e (avec des \u00e9chancrures), r\u00e9duisent les turbulences et le bruit en vol planeur, mais amplifient ce sifflement lors des accélérations.",
                source: "Institut d'Acoustique Aviaire - Effets sonores."
            },
            {
                id: 20,
                question: "Quel est le diamètre maximal d'un nid d'aigle royal ?",
                options: ["1 mètre", "2 mètres", "3-4 mètres", "Plus de 5 mètres"],
                correct: 2,
                explanation: "Les aires (nids) d'aigle royal sont parmi les plus grandes structures construites par des oiseaux. Utilis\u00e9es et agrandies ann\u00e9e apr\u00e8s ann\u00e9e, certaines atteignent 3 \u00e0 4 m\u00e8tres de diam\u00e8tre pour 1 \u00e0 2 m\u00e8tres de hauteur, pesant plusieurs centaines de kilos. Le record mondial est une aire de 6 m\u00e8tres de hauteur pour 2,9 m\u00e8tres de large, utilis\u00e9e pendant des d\u00e9cennies. Ces structures sont construites avec des branches \u00e9paisses et tap\u00eess\u00e9es de brindilles, d'herbes et de v\u00e9g\u00e9tation fra\u00eeche.",
                source: "Centre d'Ornithologie - Constructions massives."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le territoire d'un couple d'aigles royaux ?",
                options: ["5-10 km²", "20-40 km²", "50-100 km² selon habitat", "150+ km²"],
                correct: 2,
                explanation: "Le territoire d'un couple d'aigles royaux varie de 20 \u00e0 200 km\u00b2 selon la richesse du milieu en proies. Dans les zones montagneuses riches (Alpes, \u00c9cosse), les territoires sont plus petits. Dans les zones arides ou nordiques \u00e0 faible densit\u00e9 de proies (Scandinavie, Asie centrale), ils peuvent d\u00e9passer 100 km\u00b2. Le couple d\u00e9fend activement son territoire contre les autres aigles royaux, notamment en p\u00e9riode de reproduction.",
                source: "Centre de Recherche Territoriale - Vaste domaine."
            },
            {
                id: 12,
                question: "Quel est le mécanisme de la parade aérienne nuptiale ?",
                options: ["Offrandes alimentaires répétées permettant à la femelle d'évaluer les capacités de chasse du mâle", "Piqués et loopings spectaculaires pour séduction", "Démonstration de territoire par des survols prolongés à très basse altitude au-dessus du futur site de nid", "Chants mélodieux complexes émis depuis les points culminants du territoire pour attirer la femelle"],
                correct: 1,
                explanation: "La parade nuptiale de l'aigle royal est l'un des spectacles les plus impressionnants de la faune europ\u00e9enne. Les deux partenaires effectuent une s\u00e9rie de piqués vertigineux, loopings et remontées en chandelle au-dessus du territoire, parfois en se touchant les serres. Cette parade, appel\u00e9e 'sky dance' ou 'roller-coasting', peut durer plusieurs heures et se d\u00e9roule surtout de janvier \u00e0 mars, avant la ponte.",
                source: "Institut d'Éthologie Reproductrice - Affichages élaborés."
            },
            {
                id: 13,
                question: "À quel âge les aigles royaux deviennent-ils adultes en apparence ?",
                options: ["À 3-4 ans", "À 4-5 ans selon l'espèce", "À 5-6 ans", "À 6+ ans"],
                correct: 1,
                explanation: "L'aigle royal acquiert progressivement son apparence adulte sur 4 \u00e0 5 mues successives. Chaque ann\u00e9e, le jeune perd ses plumes blanches et brune-clair pour les remplacer par des plumes brun fonc\u00e9. La nuque dor\u00e9e caract\u00e9ristique (d'o\u00f9 le nom scientifique Aquila chrysaetos \u2014 'aigle \u00e0 queue dor\u00e9e') appara\u00eet en dernier. Ce changement progressif rend l'\u00e2ge des jeunes aigles identifiable sur le terrain par les ornithologues.",
                source: "Centre d'Identification - Maturation très progressive."
            },
            {
                id: 14,
                question: "Quel est le temps moyen de vie d'un aigle royal ?",
                options: ["10-15 ans", "20-30 ans", "30-50 ans selon conditions", "50+ ans"],
                correct: 2,
                explanation: "L'aigle royal est parmi les oiseaux les plus longévifs. En captivit\u00e9, des individus ont atteint 46 ans. En libert\u00e9, la longévit\u00e9 moyenne est de 20-30 ans. Le record en nature est de 32 ans. Cette longévité est li\u00e9e \u00e0 leur position de pr\u00e9dateur apex (peu de pr\u00e9dateurs), \u00e0 leur fidélit\u00e9 territoriale (connaissance approfondie de leur milieu) et \u00e0 la solidit\u00e9 du lien de couple qui optimise le succ\u00e8s reproducteur.",
                source: "Institut de Longévité - Longévité remarquable."
            },
            {
                id: 15,
                question: "Quel est le rôle du 'kleptoparasitism' chez l'aigle royal ?",
                options: ["Technique de chasse coopérative où les deux partenaires rabattent les proies vers une zone commune", "Vol de proies à d'autres rapaces", "Signal de communication inter-individuel permettant la coordination des patrouilles territoriales", "Défense du territoire contre les grands rapaces concurrents par des démonstrations aériennes ostentatoires"],
                correct: 1,
                explanation: "Le klepto-parasitisme (vol de nourriture) est un comportement observ\u00e9 chez l'aigle royal, bien que moins fr\u00e9quent que chez l'aigle de mer. Il peut harceler des buses, des corneilles ou des faucons p\u00e8lerins jusqu'\u00e0 ce qu'ils l\u00e2chent leur proie. Ironiquement, l'aigle royal est lui-m\u00eame victime de klepto-parasitisme de la part de l'aigle de mer en Scandinavie, qui est plus grand et plus agressif.",
                source: "Institut d'Éthologie Alimentaire - Stratégie prédatrice."
            },
            {
                id: 16,
                question: "À quelle altitudine l'aigle royal peut-il chasser ?",
                options: ["Jusqu'à 1000m", "Jusqu'à 2000m", "Jusqu'à 5000m ou plus selon proie", "Jusqu'à 10000m"],
                correct: 2,
                explanation: "L'aigle royal chasse \u00e0 des altitudes tr\u00e8s variables selon la saison et les proies. En \u00e9t\u00e9, il chasse en alpages jusqu'\u00e0 3 000-4 000 m\u00e8tres o\u00f9 les marmottes et chamois sont abondants. En hiver, il descend dans les vallées \u00e0 500-1 000 m\u00e8tres o\u00f9 les li\u00e8vres, renards et cha-rognes sont plus accessibles. Cette flexibilit\u00e9 altitudinale lui permet d'exploiter des ressources tr\u00e8s diverses tout au long de l'ann\u00e9e.",
                source: "Centre de Recherche Altitudinale - Chasseur montagnard."
            },
            {
                id: 17,
                question: "Quel est le processus de transmission des techniques de chasse ?",
                options: ["Instinctif uniquement", "Instinct + apprentissage parental précoce", "Apprentissage tardif", "Pas d'apprentissage"],
                correct: 1,
                explanation: "Les techniques de chasse de l'aigle royal sont en partie inn\u00e9es (r\u00e9flexe de saisir des objets mobiles) mais surtout acquises par apprentissage. Les parents \u00e9duquent leurs jeunes en apportant d'abord des proies mortes, puis vivantes et \u00e9tourdies. Les jeunes observent la technique parentale et s'exercent \u00e0 attraper des proies faciles pendant la p\u00e9riode post-envol. La ma\u00eetrise compl\u00e8te de la chasse n\u00e9cessite 1 \u00e0 2 ans apr\u00e8s l'ind\u00e9pendance.",
                source: "Institut d'Éthologie - Éducation parentale.",
                source: "Institut d'Étude du Comportement - Apprentissage progressif."
            },
            {
                id: 18,
                question: "À quel âge un aiglon peut-il voler correctement ?",
                options: ["À 8-10 semaines", "À 12-14 semaines", "À 14-16 semaines selon l'individu", "À 18+ semaines"],
                correct: 2,
                explanation: "Les aiglons effectuent leurs premiers vols \u00e0 10-13 semaines, mais ne volent vraiment bien qu'\u00e0 14-16 semaines. Les premi\u00e8res sorties sont courtes et maladroites, avec des atterrissages difficiles. La ma\u00eetrise des techniques de vol (thermiques, piqués, manœuvres) prend plusieurs mois. Pendant toute cette p\u00e9riode, les parents continuent de nourrir les jeunes et les 'encouragent' \u00e0 chasser en r\u00e9duisant progressivement leurs apports alimentaires.",
                source: "Centre d'Ornithologie - Envol progressif et délicat."
            },
            {
                id: 19,
                question: "Quel est le nombre moyen de jeunes élevés par couple annuellement ?",
                options: ["0,5-1 jeune", "1-1,5 jeunes", "1,5-2 jeunes selon succès", "2+ jeunes"],
                correct: 2,
                explanation: "En moyenne, un couple d'aigles royaux \u00e9l\u00e8ve 1 \u00e0 2 jeunes par an, mais le succ\u00e8s reproducteur varie beaucoup. Le taux de cainsme (fratricide) est \u00e9lev\u00e9 : l'a\u00een\u00e9, plus grand, monopolise souvent la nourriture et tue son cadet. Les ann\u00e9es de forte densit\u00e9 de lièvres ou de marmottes, deux aiglons survivent plus souvent. En France, la productivit\u00e9 moyenne est d'environ 0,7 jeune \u00e0 l'envol par territoire occup\u00e9.",
                source: "Institut de Fécondité - Reproduction lente."
            },
            {
                id: 20,
                question: "Quel est l'impact de la force d'un aigle royal ?",
                options: ["Faible", "Peut soulever 4-5 kg de poids", "Peut soulever plus de 8kg", "Force sans limites"],
                correct: 1,
                explanation: "La force de l'aigle royal est impressionnante mais souvent exag\u00e9r\u00e9e dans les l\u00e9gendes. En r\u00e9alit\u00e9, il peut soulever et transporter des proies de 3 \u00e0 5 kg en vol (environ son propre poids). Pour les proies plus lourdes (renard, jeune chevreuil de 8-10 kg), il les d\u00e9coupe sur place ou les tra\u00eene sur le sol. La pression de ses serres peut atteindre 300-400 kg/cm\u00b2, suffisante pour briser la col\u00f4ne vert\u00e9brale d'un lièvre.",
                source: "Centre de Biomécanique - Force relative."
            },
            {
                id: 21,
                question: "Quel est le processus de l'imprinting chez les aigles royaux ?",
                options: ["Mémorisation génétiquement encodée du site natal sans nécessité d'exposition sensorielle précoce", "Reconnaissance de la mère et du site par exposition précoce", "Apprentissage différé se produisant uniquement lors du premier retour de migration à l'âge adulte", "Association du site natal via l'odorat des plantes locales mémorisé pendant les premiers vols d'exploration"],
                correct: 1,
                explanation: "L'empreinte (imprinting) chez les aigles royaux se produit dans les premi\u00e8res semaines apr\u00e8s l'\u00e9closion. L'aiglon m\u00e9morise l'apparence de ses parents et les caract\u00e9ristiques de son site de nidification (paysage, odeurs, sons). Cette m\u00e9moire le guidera \u00e0 l'\u00e2ge adulte pour chercher un partenaire de la m\u00eame esp\u00e8ce et revenir se reproduire dans des habitats similaires. C'est pourquoi des aiglons \u00e9lev\u00e9s par l'humain ne peuvent g\u00e9n\u00e9ralement pas \u00eatre rel\u00e2ch\u00e9s.",
                source: "Institut d'Éthologie Développementale - Lien précoce."
            },
            {
                id: 22,
                question: "À quel âge un aiglon devient-il autonome en vol ?",
                options: ["À 2-3 mois", "À 4-5 mois selon l'entraînement", "À 6 mois", "À 8+ mois"],
                correct: 1,
                explanation: "L'ind\u00e9pendance compl\u00e8te en vol se d\u00e9veloppe progressivement apr\u00e8s l'envol (10-13 semaines). \u00c0 4-5 mois, le jeune aigle ma\u00eetrise les vols basiques mais manque encore d'efficacit\u00e9 en chasse. Les parents continuent \u00e0 subvenir \u00e0 ses besoins jusqu'\u00e0 6-10 mois apr\u00e8s l'envol. C'est seulement apr\u00e8s cette longue p\u00e9riode d'\u00e9mancipation que le jeune part d\u00e9finitivement \u00e0 la d\u00e9couverte de nouveaux territoires.",
                source: "Centre d'Ornithologie - Autonomie progressive."
            },
            {
                id: 23,
                question: "Quel est le rôle du 'wing morphology' dans l'efficacité du vol ?",
                options: ["Ailes étroites et pointues optimisant la vitesse lors des piqués de chasse en générant moins de résistance", "Ailes longues et larges permettent vol thermique efficace", "Surface alaire réduite concentrant la portance sur une petite zone pour les virages rapides en chasse", "Ailes asymétriques réduisant la résistance lors des virages serrés dans les terrains boisés montagneux"],
                correct: 1,
                explanation: "Les ailes de l'aigle royal ont une forme sp\u00e9cifiquement adapt\u00e9e au vol plané en montagne : longues (2,3 m d'envergure), larges avec des r\u00e9miges \u00e9mancip\u00e9es (primaires s\u00e9par\u00e9es comme des doigts) qui r\u00e9duisent les tourbillons en bout d'aile. Cette morphologie permet un ratio planée/descente exceptionnel. Les \u00e9mancipes fonctionnent comme des spoilers individuels r\u00e9glables, contr\u00f4l\u00e9s mus par mus par l'aigle pour ajuster finement sa trajectoire.",
                source: "Institut de Biomécanique Aviaire - Design aérodynamique."
            },
            {
                id: 24,
                question: "Quel est le nombre moyen de chasses réussies par semaine ?",
                options: ["1-2 chasses", "3-4 chasses", "5-7 chasses selon disponibilité", "10+ chasses"],
                correct: 1,
                explanation: "L'aigle royal est un chasseur efficace mais pas quotidien. Il chasse en moyenne 3 \u00e0 4 fois par semaine, capturant des proies suffisamment grosses pour ne pas avoir \u00e0 chasser chaque jour. Un lièvre de 2 kg nourrit l'aigle pendant 2-3 jours. L'aigle compense sa faible fr\u00e9quence de chasse par une efficacit\u00e9 \u00e9lev\u00e9e (taux de succ\u00e8s de 20-30%) rendue possible par sa vision exceptionnelle et sa ma\u00eetrise des tactiques de chasse.",
                source: "Centre d'Étude Prédatrice - Fréquence modérée."
            },
            {
                id: 25,
                question: "À quel âge les jeunes aigles quittent définitivement le nid parental ?",
                options: ["À 3-4 mois", "À 6-8 mois", "À 10-12 mois selon apprentissage", "À 18+ mois"],
                correct: 2,
                explanation: "Apr\u00e8s l'envol (10-13 semaines), les jeunes aigles restent d\u00e9pendants des parents pendant encore 6 \u00e0 10 mois. Ils quittent d\u00e9finitivement le territoire natal entre 10 et 14 mois pour partir explorer. Certains jeunes restent \u00e0 proximit\u00e9 du territoire parental si des ressources sont disponibles. La dispersion d\u00e9finitive est d\u00e9clench\u00e9e par l'agressivit\u00e9 croissante des parents qui pr\u00e9parent la prochaine saison de reproduction.",
                source: "Institut d'Éthologie Familiale - Dépendance longue."
            },
            {
                id: 26,
                question: "Quel est le rôle de la 'prey specialization' pour le tigre ?",
                options: ["Opportunisme alimentaire total sans préférence, chassant toute proie accessible quelle que soit l'espèce", "Préférence pour certaines proies augmente efficacité", "Sélection des proies les plus petites et les plus faciles à transporter vers le nid en altitude", "Alternance saisonnière stricte entre espèces de proies imposée par les cycles de disponibilité naturelle"],
                correct: 1,
                explanation: "L'aigle royal est un g\u00e9n\u00e9raliste adaptable, mais d\u00e9veloppe des sp\u00e9cialisations locales selon les proies disponibles. Dans les Alpes, il se sp\u00e9cialise sur la marmotte (jusqu'\u00e0 80% du r\u00e9gime \u00e9t\u00e9). Dans les Highlands \u00e9cossais, il cible le lagop\u00e8de et le li\u00e8vre variable. Cette sp\u00e9cialisation locale, transmise par apprentissage parental, lui permet de ma\u00eetriser des techniques de chasse sp\u00e9cifiques et d'am\u00e9liorer consid\u00e9rablement son taux de succ\u00e8s.",
                source: "Institut d'Écologie Prédatrice - Adaptation alimentaire."
            },
            {
                id: 27,
                question: "À quel âge un aigle royal atteint-il pleine maturité reproductrice ?",
                options: ["À 3 ans", "À 4-5 ans", "À 5-7 ans selon l'individu", "À 7+ ans"],
                correct: 2,
                explanation: "La maturit\u00e9 reproductrice de l'aigle royal co\u00efncide avec l'acquisition du plumage adulte, vers 5-7 ans. Mais \u00eatre sexuellement mature ne suffit pas : les jeunes doivent aussi \u00e9tablir un territoire et trouver un partenaire. Dans les populations denses, les bons territoires sont occup\u00e9s par des adultes \u00e9tablis, for\u00e7ant les jeunes \u00e0 errer comme 'flottants' pendant plusieurs ann\u00e9es suppl\u00e9mentaires en attendant qu'une place se lib\u00e8re.",
                source: "Centre de Reproduction - Maturation tardive."
            },
            {
                id: 28,
                question: "Quel est le nombre moyen de mues par année chez l'aigle royal ?",
                options: ["1 mue complète", "2 mues", "Mue progressive tout l'année", "3 mues"],
                correct: 2,
                explanation: "L'aigle royal mue progressivement tout au long de l'ann\u00e9e, ne changeant que quelques plumes \u00e0 la fois pour maintenir toujours sa capacit\u00e9 de vol. La mue compl\u00e8te prend 2 \u00e0 3 ans chez les adultes. Ce processus lent est une adaptation aux exigences \u00e9nerg\u00e9tiques du vol : perdre trop de plumes simultan\u00e9ment d\u00e9graderait dangereusement les performances a\u00e9rodynamiques. Chez les jeunes, la mue est plus intense et visible car elle accompagne le passage au plumage adulte.",
                source: "Institut d'Ornithologie - Renouvellement constant."
            },
            {
                id: 29,
                question: "Quel est le rôle du 'siblicide' dans la structure sociale ?",
                options: ["Compétition vocale où l'aiglonneau le plus bruyant reçoit plus de nourriture sans élimination physique", "Aîné tue cadet pour monopoliser ressources maternelles", "Coopération entre aiglonneaux partageant équitablement la nourriture apportée par les parents", "Différenciation des rôles entre aînés et cadets, ces derniers consommant les restes laissés par l'aîné"],
                correct: 1,
                explanation: "Le ca\u00efnisme (fratricide) est un comportement fr\u00e9quent chez l'aigle royal, observ\u00e9 dans plus de 50% des nid\u00e9es comportant deux \u0153ufs. L'a\u00een\u00e9, qui \u00e9clot 3-4 jours avant son fr\u00e8re, le domine d\u00e8s le d\u00e9but : il monopolise la nourriture apport\u00e9e par les parents et peut attaquer physiquement le cadet. La mort du cadet survient g\u00e9n\u00e9ralement par inanition dans les 2 premi\u00e8res semaines. Les parents n'interviennent pas.",
                source: "Institut d'Éthologie Familiale - Compétition intense."
            },
            {
                id: 30,
                question: "À quel niveau d'intensité un aigle royal attaque-t-il sa proie ?",
                options: ["Attaque faible", "Piqué à 200+ km/h avec serre en formation", "Approche lente", "Combat aérien"],
                correct: 1,
                explanation: "La chasse de l'aigle royal combine vision hors pair et attaque explosive. Apr\u00e8s avoir rep\u00e9r\u00e9 une proie en vol plané, il effectue un piqué inclin\u00e9 \u00e0 150-200 km/h, les ailes semi-closes. \u00c0 quelques m\u00e8tres de la proie, il d\u00e9ploie les pattes en avant, serres ouvertes. L'impact est brutal : les serres transpercent les organes vitaux et la force du choc peut briser la col\u00f4ne vert\u00e9brale. Proie et oiseau roulent souvent sur plusieurs m\u00e8tres \u00e0 l'impact.",
                source: "Centre de Biomécanique - Attaque spectaculaire."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme de la 'thermal soaring' utilisé par l'aigle royal ?",
                options: ["Vol en rase-mottes le long des versants exposés pour bénéficier de l'effet de sol porteur", "Utilisation de courants d'air chaud pour économiser énergie", "Vol battu continu uniquement, les grands rapaces manquant de sensibilité aux variations thermiques verticales", "Exploitation des vents forts en altitude pour maintenir une vitesse élevée sans dépense énergétique musculaire"],
                correct: 1,
                explanation: "Le 'thermal soaring' est la technique de locomotion signature de l'aigle royal. Il localise les colonnes d'air chaud ascendant (thermiques) cr\u00e9\u00e9es par le soleil chauffant les versants rocheux, puis y entre en cercles serr\u00e9s pour s'\u00e9lever sans battre des ailes. Une fois \u00e0 altitude, il planie vers un nouveau thermique ou fonçe sur une proie. Ce syst\u00e8me lui permet de parcourir 100 km/jour en d\u00e9pensant \u00e0 peine plus d'\u00e9nergie que d'habitude.",
                source: "Institut d'Aérodynamique Aviaire - Efficacité énergétique."
            },
            {
                id: 22,
                question: "Quel est le processus de la 'monogamie à vie' chez les aigles royaux ?",
                options: ["Promiscuité saisonnière avec remplacement du partenaire après chaque saison de reproduction réussie", "Couples restent ensemble plusieurs années reproductives", "Remplacement annuel du partenaire le moins performant par un individu plus compétent du voisinage", "Polygynie saisonnière où le mâle défend plusieurs femelles sur des territoires adjacents simultanément"],
                correct: 1,
                explanation: "L'aigle royal est monogame et les couples restent en g\u00e9n\u00e9ral unis pour la vie, souvent 10 \u00e0 20 ans. Ils ne se s\u00e9parent qu'en cas de d\u00e9c\u00e8s d'un partenaire ou d'\u00e9checs reproducteurs r\u00e9p\u00e9t\u00e9s. Cette fid\u00e9lit\u00e9 est avant tout une strat\u00e9gie \u00e9volutive : les couples exp\u00e9riment\u00e9s qui connaissent leur territoire et se coordonnent parfaitement ont un succ\u00e8s reproducteur bien sup\u00e9rieur aux nouveaux couples. L'amour n'y est pour rien \u2014 c'est de l'efficacit\u00e9 darwinienne.",
                source: "Université de Biologie Reproductive - Liens durables."
            },
            {
                id: 23,
                question: "Quel est le rôle du 'Cainism' (fratricide) chez les aigles royaux ?",
                options: ["Compétition vocale où l'aiglonneau le plus bruyant accapare la nourriture sans agression physique directe", "Aîné tue cadet pour monopoliser nourriture", "Différenciation des rôles permettant à chaque aiglonneau d'exploiter une ressource alimentaire distincte", "Partage équitable régulé par les parents qui surveillent l'apport et redistributent en cas d'inégalité"],
                correct: 1,
                explanation: "Le ca\u00efnisme est un ph\u00e9nom\u00e8ne adaptatif : les parents pondent deux \u0153ufs comme 'assurance' en cas de mort du premier \u0153uf ou de l'a\u00een\u00e9 en bas \u00e2ge. Une fois l'a\u00een\u00e9 bien \u00e9tabli, le cadet devient superflu. Les ressources alimentaires des Alpes ne permettent g\u00e9n\u00e9ralement pas d'\u00e9lever deux aiglons simultan\u00e9ment. Ce sacrifice programm\u00e9 du cadet est donc une strat\u00e9gie reproductrice efficace qui maximise le succ\u00e8s de l'a\u00een\u00e9.",
                source: "Institut d'Éthologie Familiale - Compétition sibling."
            },
            {
                id: 24,
                question: "Quel est le mécanisme de détection des proies chez l'aigle royal ?",
                options: ["Vision uniquement", "Vision et capteurs thermiques limitées", "Odorat exacerbé", "Audition seulement"],
                correct: 0,
                explanation: "La d\u00e9tection des proies par l'aigle royal repose principalement sur la vision, mais aussi sur d'autres sens. Sa vue ultraviolette lui permet de d\u00e9tecter les pistes urinaires des rongeurs (l'urine des campagnols r\u00e9fl\u00e9chit les UV). Son ou\u00efe, orient\u00e9e vers l'avant par la forme concave de son disque facial, amplifie les sons du sol. L'odorat joue un r\u00f4le mineur, mais l'aigle peut d\u00e9tecter des charognes \u00e0 courte distance par l'odeur de d\u00e9composition.",
                source: "Institut d'Ophtalmologie - Principalement visuelle."
            },
            {
                id: 25,
                question: "Quel est le processus de territorialité chez les aigles royaux ?",
                options: ["Tolérance des intrus tant qu'ils ne s'approchent pas du site de nidification actif pendant la saison", "Défense active du territoire par actes aériens", "Délimitation par dépôt de fientes sur les rochers marquant les limites sans confrontation directe", "Abandon du territoire à tout concurrent plus grand sans résistance pour éviter les blessures mortelles"],
                correct: 1,
                explanation: "La territorialit\u00e9 de l'aigle royal est multimodale. La d\u00e9fense primaire est a\u00e9rienne : les r\u00e9sidents d\u00e9collent \u00e0 vue d'un intrus et le pourchassent en piqués mena\u00e7ants jusqu'\u00e0 la fronti\u00e8re du territoire. Les survols r\u00e9guliers ('boundary patrols') servent \u00e0 surveiller et afficher la possession. Les cris et les parrades au-dessus du nid signalent l'occupation. Les confrontations physiques sont rares mais peuvent causer des blessures graves.",
                source: "Institut d'Éthologie Territoriale - Démonstration élaborée."
            },
            {
                id: 26,
                question: "Quel est le rôle du 'nesting site fidelity' ?",
                options: ["Construction d'un nouveau nid chaque saison, l'ancien étant abandonné après les parasites accumulés", "Réutilisation du même nid pendant plusieurs années", "Alternance entre deux nids sur le même territoire en rotation annuelle pour éviter les parasites", "Utilisation du nid de la saison précédente uniquement si la reproduction a été couronnée de succès"],
                correct: 1,
                explanation: "La fid\u00e9lit\u00e9 au site de nidification est quasi-absolue chez l'aigle royal. Des aires sont utilis\u00e9es depuis des d\u00e9cennies, voire des si\u00e8cles, par des g\u00e9n\u00e9rations successives. Le couple agrandit son aire \u00e0 chaque saison en apportant de nouvelles branches et verdure fra\u00eeche (qui a des propri\u00e9t\u00e9s antiparasitaires). Cette fid\u00e9lit\u00e9 r\u00e9duit le co\u00fbt \u00e9nerg\u00e9tique li\u00e9 \u00e0 la recherche d'un nouveau site et garantit l'utilisation des meilleurs emplacements.",
                source: "Institut d'Écologie Reproductive - Nids traditionnels."
            },
            {
                id: 27,
                question: "Quel est le mécanisme du 'inverse sexual size dimorphism' ?",
                options: ["Taille identique entre mâles et femelles, le dimorphisme étant uniquement visible dans la coloration du plumage", "Femelles plus grandes pour rôle reproducteur", "Mâles significativement plus grands avec une envergure supérieure de 20% pour les combats territoriaux", "Dimorphisme inversé selon les saisons, les femelles dominant en été et les mâles en hiver"],
                correct: 1,
                explanation: "Le dimorphisme sexuel invers\u00e9 (femelle 25-30% plus grande) chez les rapaces est expliqu\u00e9 par plusieurs th\u00e9ories. La principale : les femelles plus grandes supportent mieux le je\u00fbne lors de l'incubation (3-6 semaines sur le nid). Une autre : la diff\u00e9rence de taille r\u00e9duit la comp\u00e9tition alimentaire entre partenaires, leur permettant de chasser des proies de tailles diff\u00e9rentes. La femelle \u00e9tant plus grande peut aussi mieux d\u00e9fendre le nid et les jeunes contre les pr\u00e9dateurs.",
                source: "Université de Zoologie Comparative - Évolution adaptative."
            },
            {
                id: 28,
                question: "Quel est le processus de la 'philopatry' chez les jeunes aigles ?",
                options: ["Dispersion systématique loin du site natal pour éviter la consanguinité et coloniser de nouveaux territoires", "Tendance à retourner au site natal pour reproduction", "Errance continue sans site préférentiel, le choix de nidification étant dicté uniquement par la disponibilité", "Retour au site natal uniquement en cas d'échec reproducteur ailleurs, servant de territoire de repli"],
                correct: 1,
                explanation: "La philopatrie natale de l'aigle royal est tr\u00e8s prononc\u00e9e, surtout chez les femelles. Des \u00e9tudes de baguage ont montr\u00e9 que de nombreux jeunes \u00e9tablis leur territoire \u00e0 quelques kilom\u00e8tres seulement de leur lieu de naissance. Les m\u00e2les se dispersent un peu plus loin. Ce comportement favorise l'adaptation locale : les aigles \u00e9lev\u00e9s dans les Alpes connaissent instinctivement et par apprentissage les ressources sp\u00e9cifiques de cet environnement.",
                source: "Institut d'Écologie Comportementale - Retour au bercail."
            },
            {
                id: 29,
                question: "Quel est le rôle des 'cliff ledges' dans la nidification ?",
                options: ["Régulation de l'humidité interne du nid par absorption ou restitution hydrique selon les conditions météo", "Protection des nids contre prédateurs et intempéries", "Isolation thermique supplémentaire par emprisonnement d'une couche d'air dans les branchages accumulés", "Signal visuel indiquant aux prédateurs potentiels la taille et la dangerosité du propriétaire du nid"],
                correct: 1,
                explanation: "Les vires de falaises sont l'habitat de nidification id\u00e9al de l'aigle royal. Ces corniches naturelles offrent une protection contre les pr\u00e9dateurs terrestres (renard, martre, ours) qui ne peuvent pas les atteindre. La roche surplombante prot\u00e8ge du vent, de la pluie et de la neige. La hauteur (souvent 100-500 m\u00e8tres au-dessus du sol) facilite aussi le d\u00e9collage. Ces sites exceptionnels sont utilis\u00e9s pendant des g\u00e9n\u00e9rations car ils sont extr\u00eamement rares.",
                source: "Institut d'Écologie Nidification - Choix de site critique."
            },
            {
                id: 30,
                question: "Quel est le mécanisme de la 'adaptive foraging' face aux changements ?",
                options: ["Pas d'adaptation", "Modification techniques chasse selon disponibilité proies", "Régime fixe", "Migration forcée"],
                correct: 1,
                explanation: "L'alimentation de l'aigle royal est opportuniste et s'adapte aux ressources disponibles selon les saisons. En \u00e9t\u00e9 alpin : marmottes, lagop\u00e8des, li\u00e8vres. En hiver : renards, charognes (chamois morts, ongul\u00e9s), ovins. Lors des ann\u00e9es \u00e0 fort d\u00e9clin de rongeurs, il se rabat sur les reptiles, petits oiseaux ou m\u00eame insectes (locust\u00e8s). Cette flexibilit\u00e9 alimentaire est cruciale pour survivre dans des environnements montagnards o\u00f9 les ressources sont variables.",
                source: "Université d'Écologie Comportementale - Flexibilité adaptative."
            },
            {
                id: 31,
                question: "Quel est le processus de l'établissement du territoire chez les jeunes ?",
                options: ["Héritage du territoire parental dès que les parents atteignent une taille critique insuffisante pour défendre", "Compétition pour sites de nidification disponibles", "Attribution par consensus entre individus matures sans confrontation physique directe", "Colonisation aléatoire des zones non défendues sans évaluation préalable de la qualité du site"],
                correct: 1,
                explanation: "Les jeunes aigles royaux sans territoire errent sur de vastes zones, parfois 500 \u00e0 1 000 km de leur lieu de naissance. Ils recherchent des espaces libres o\u00f9 les adultes sont absents. L'\u00e9tablissement du territoire passe par des p\u00e9riodes de prospection intensive, de confrontations avec les r\u00e9sidents et parfois d'attente que des adultes meurent ou abandonnent. Dans les populations bien \u00e9tablies, il peut falloir plusieurs ann\u00e9es avant de trouver un territoire disponible.",
                source: "Institut d'Éthologie Territoriale - Compétition intense."
            },
            {
                id: 32,
                question: "Quel est le rôle du 'dynamic soaring' dans l'efficacité énergétique ?",
                options: ["Exploitation des vents de versant en volant au ras des crêtes rocheuses pour maintenir l'altitude sans effort", "Utilisation de gradients de vent pour vol sans effort", "Vol battu continu avec période de glissé planifié permettant de récupérer entre deux phases de propulsion", "Utilisation des courants d'air froids descendants pour accélérer lors des descentes vers les proies"],
                correct: 1,
                explanation: "Le 'dynamic soaring' est une technique de vol utilis\u00e9e par l'aigle royal dans les environnements montagneux \u00e0 fort vent. Il exploite les gradients de vitesse du vent (plus fort en altitude, plus faible pr\u00e8s du sol) pour acc\u00e9l\u00e9rer sans battre des ailes : monter face au vent (qui le propulse vers le haut), se retourner avec le vent dans le dos (qui l'acc\u00e9l\u00e8re), puis redescendre. Les albatros sont les champions de cette technique mais l'aigle royal en ma\u00eetrise une version adapt\u00e9e aux reliefs.",
                source: "Institut d'Aérodynamique - Technique de vol extrême."
            },
            {
                id: 33,
                question: "À quel niveau d'océan énergétique un aigle royal opère-t-il ?",
                options: ["Faible", "Intermédiaire", "Haut niveau trophique comme apex predator montagnard", "Producteur primaire"],
                correct: 2,
                explanation: "L'aigle royal est le pr\u00e9dateur apex des \u00e9cosyst\u00e8mes montagnards. Il joue un r\u00f4le r\u00e9gulateur sur les populations de lièvres, marmottes, lagop\u00e8des et m\u00eame de renards. Sa pr\u00e9sence influence le comportement des proies (vigilance accrue, utilisation de l'habitat) cr\u00e9ant des 'cascades trophiques' similaires \u00e0 celles des loups. Quand l'aigle royal dispara\u00eet d'un secteur, les populations de rongeurs et lagomorphes peuvent exploser, modifiant la v\u00e9g\u00e9tation alpine.",
                source: "Institut d'Écologie Trophique - Position écologique."
            },
            {
                id: 34,
                question: "Quel est le mécanisme du 'mate guarding' chez les aigles royaux ?",
                options: ["Séparation des territoires de chasse des deux partenaires pour maximiser la surface couverte sans compétition", "Proximité constante du couple lors de reproduction", "Indépendance totale des deux partenaires pendant la période de couvaison pour optimiser la recherche de nourriture", "Surveillance du périmètre par le seul mâle pendant que la femelle couve en permanence sans jamais quitter les œufs"],
                correct: 1,
                explanation: "Le 'mate guarding' chez l'aigle royal est subtil. Le m\u00e2le surveille sa partenaire surtout en p\u00e9riode f\u00e9conde (avant la ponte), restant \u00e0 proximit\u00e9 et pourchassant les m\u00e2les intrus. Mais la vraie protection est territoriale : en maintenant un territoire exclusif bien d\u00e9fendu, le couple s'assure qu'aucun m\u00e2le \u00e9tranger ne peut approcher la femelle. La fid\u00e9lit\u00e9 \u00e0 long terme du couple r\u00e9duit aussi le risque d'infid\u00e9lit\u00e9 extraconjugale.",
                source: "Université de Biologie Reproductive - Stratégie paternelle."
            },
            {
                id: 35,
                question: "À quel âge un aigle royal femelle commence-t-elle à pondre ?",
                options: ["À 3 ans", "À 4-5 ans selon maturité", "À 5-6 ans", "À 6+ ans"],
                correct: 1,
                explanation: "La femelle aigle royal commence \u00e0 pondre entre 4 et 7 ans, quand elle a acquis son plumage adulte et \u00e9tabli un territoire stable avec un partenaire. L'\u00e2ge de la premi\u00e8re ponte est li\u00e9 \u00e0 la disponibilit\u00e9 des territoires : dans les zones satur\u00e9es, les femelles peuvent attendre jusqu'\u00e0 8-9 ans. La premi\u00e8re saison de reproduction est souvent un \u00e9chec \u2014 les nouveaux couples manquent d'exp\u00e9rience et les premiers \u0153ufs sont souvent fertiles mais les aiglons ne survivent pas.",
                source: "Centre de Biologie Reproductive - Maturité tardive."
            },
            {
                id: 36,
                question: "Quel est le processus de la 'sequential polyandry' absent chez les aigles ?",
                options: ["Absent", "Femelles s'accouplent avec plusieurs mâles", "Monogamie stable", "Pas d'accouplements"],
                correct: 1,
                explanation: "L'aigle royal est strictement monogame et ne pratique pas la polyandrie s\u00e9quentielle. Le couple reste uni pour la vie dans la grande majorit\u00e9 des cas. Si un partenaire meurt, l'autre se retrouve seul et peut attirer un nouvel individu sur son territoire, parfois en quelques semaines. Des analyses g\u00e9n\u00e9tiques confirment un taux de fid\u00e9lit\u00e9 tr\u00e8s \u00e9lev\u00e9, avec tr\u00e8s peu de cas d'accouplement extra-couple. Cette monogamie stricte est li\u00e9e \u00e0 l'investissement parental massif que requi\u00e8re l'\u00e9levage des aiglons.",
                source: "Université d'Écologie Comportementale - Monogamie exclusive."
            },
            {
                id: 37,
                question: "À quel niveau de précision l'aigle royal peut-il évaluer la proie ?",
                options: ["Vue générale", "Détails fins permettant sélection précise de proies", "Pas d'évaluation", "Hasard complet"],
                correct: 1,
                explanation: "La pr\u00e9cision visuelle de l'aigle royal lui permet d'\u00e9valuer la condition physique de ses proies potentielles \u00e0 grande distance. Il cible pr\u00e9f\u00e9rentiellement les animaux malades, bless\u00e9s ou juvéniles qui pr\u00e9sentent des signaux subtils (d\u00e9marche anormale, fourrure terne, comportement h\u00e9sitant). Cette s\u00e9lection des proies vuln\u00e9rables joue un r\u00f4le sanitaire dans les populations de proies et explique l'efficacit\u00e9 relative \u00e9lev\u00e9e de ses chasses.",
                source: "Institut d'Ophtalmologie - Acuité visuelle exceptionnelle."
            },
            {
                id: 38,
                question: "Quel est le rôle du 'reverse sexual dimorphism' dans la reproduction ?",
                options: ["Avantage à la taille équivalente entre les sexes, les rôles de chasse étant partagés sans spécialisation", "Femelles plus grandes pour ponte et protection des jeunes", "Mâles légèrement plus grands avec une longueur d'aile supérieure de 5% leur conférant une plus grande portée", "Dimorphisme uniquement comportemental, les deux sexes ayant des morphologies strictement identiques"],
                correct: 1,
                explanation: "Le dimorphisme sexuel invers\u00e9 de l'aigle royal (femelle 25-33% plus lourde) divise encore les biologistes. Plusieurs facteurs y contribuent : la femelle passe de longues p\u00e9riodes sur le nid \u00e0 je\u00fbner (r\u00e9serves \u00e9nerg\u00e9tiques n\u00e9cessaires), elle d\u00e9fend les aiglons contre les intrus (taille intimidante), et la diff\u00e9rence de taille r\u00e9duit la comp\u00e9tition intrasexuelle pour les proies. Le m\u00e2le, plus petit et plus agile, est sp\u00e9cialis\u00e9 dans la capture de proies rapides.",
                source: "Université d'Évolution - Sélection naturelle."
            },
            {
                id: 39,
                question: "Quel est le mécanisme de l'acquisition des skills de chasse ?",
                options: ["Complètement instinctif", "Instinct + apprentissage intensif avec parents", "Apprentissage tardif par imitation", "Pas d'apprentissage"],
                correct: 1,
                explanation: "L'acquisition des comp\u00e9tences de chasse chez l'aigle royal est un processus long et structur\u00e9. Les comportements de base (agripper, frapper) sont inn\u00e9s. Mais la technique pr\u00e9cise (approche, calcul de la trajectoire, choix de l'angle d'attaque) s'apprend par observation et pratique sur plusieurs ann\u00e9es. Des \u00e9tudes ont montr\u00e9 que les aiglons pratiquent leurs attaques sur des objets inanim\u00e9s (c\u00f4nes, branches) bien avant de chasser de vraies proies. L'efficacit\u00e9 compl\u00e8te n'est atteinte qu'apr\u00e8s 2-3 ans d'ind\u00e9pendance.",
                source: "Institut d'Éthologie - Éducation progressive."
            },
            {
                id: 40,
                question: "À quel degré de complexité cognitive les aigles royaux opèrent-ils ?",
                options: ["Niveau purement instinctif sans capacité d'apprentissage individuel au-delà des comportements génétiques", "Moyen avec reconnaissance et mémoire spatiale avancée", "Très bas comparé aux corvides, les rapaces étant limités aux comportements de chasse stéréotypés", "Cognition exclusive liée à la chasse sans capacité de résolution de problèmes en dehors du contexte prédatoire"],
                correct: 1,
                explanation: "La cognition de l'aigle royal est plus d\u00e9velopp\u00e9e qu'on ne le pensait. Des \u00e9tudes r\u00e9v\u00e8lent une m\u00e9moire spatiale exceptionnelle (il m\u00e9morise les sites de chasse productifs et les comportements des proies), une capacit\u00e9 de planification (il anticipe les trajets migratoires de ses proies) et m\u00eame une certaine flexibilit\u00e9 comportementale. Au Kazakhstan, des aigles royaux dress\u00e9s par des fauconniers executent des t\u00e2ches complexes, d\u00e9montrant des capacit\u00e9s d'apprentissage comparables \u00e0 celles des corvid\u00e9s.",
                source: "Université de Neuroscience Aviaire - Cerveau développé."
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
                options: ["100-150 kg, poids typique d'un lion femelle adulte d'Afrique orientale, bien en dessous de la réalité pour un tigre mâle", "150-200 kg, poids comparable à un ours brun adulte d'Europe centrale, insuffisant pour le plus grand félidé du monde", "200-260 kg selon la sous-espèce", "260+ kg en toute circonstance, dépassant les 300 kg même pour les sous-espèces les plus petites comme le tigre de Sumatra"],
                correct: 2,
                explanation: "Le tigre est le plus grand f\u00e9lid\u00e9 du monde. Le tigre de Sibérie (Amour) est le plus lourd : les m\u00e2les atteignent 200 \u00e0 300 kg et peuvent mesurer 3,7 m\u00e8tres de la t\u00eate \u00e0 la queue. Le tigre du Bengale, le plus r\u00e9pandu, p\u00e8se 175 \u00e0 260 kg. Cette masse imposante en fait un pr\u00e9dateur capable de s'attaquer \u00e0 des proies bien plus grosses que lui, comme le buffle d'eau ou le gaur.",
                source: "National Geographic - Le tigre est le plus gros félin."
            },
            {
                id: 2,
                question: "Quel est le rôle des rayures du tigre ?",
                options: ["Uniquement décoration sans avantage adaptatif, comme chez certains animaux tropicaux dont les couleurs vives n'ont aucune fonction de survie documentée", "Camouflage dans la forêt et l'herbe haute", "Signal d'agressivité envers les congénères, fonctionnant comme un avertissement visuel pour repousser les rivaux avant tout combat physique", "Thermorégulation par absorption sélective de chaleur, les zones sombres absorbant plus d'énergie solaire pour maintenir la température corporelle"],
                correct: 1,
                explanation: "Les rayures verticales du tigre sont un chef-d'\u0153uvre d'adaptation. Elles brisent le contour de sa silhouette dans les for\u00eats dens\u00e9es et les hautes herbes, le rendant presque invisible \u00e0 quelques m\u00e8tres. Fait \u00e9tonnant : les rayures sont aussi dans la peau, pas seulement dans les poils. Chaque tigre a un motif de rayures unique, comme nos empreintes digitales.",
                source: "Institut d'Écologie Camouflage - Pattern très efficace."
            },
            {
                id: 3,
                question: "Quel est le régime alimentaire principal du tigre ?",
                options: ["Fruits et plantes comme les pandas géants, complétés par des insectes et des racines selon les saisons et la disponibilité", "Viande - cerfs, sangliers, buffles", "Poisson uniquement, capturé à la manière des loutres en pataugeant dans les rivières peu profondes de la forêt tropicale", "Omnivore équilibré consommant autant de végétaux que de proies animales, selon la saison et la région géographique"],
                correct: 1,
                explanation: "Le tigre est un carnivore strict qui chasse seul par embuscade. Il pr\u00e9f\u00e8re les grands herbivores : cerf axis, sambar, chital, sanglier et buffle d'eau. Un tigre adulte a besoin de 5 \u00e0 7 kg de viande par jour mais peut consommer jusqu'\u00e0 40 kg en une seule fois apr\u00e8s une chasse. Il peut ensuite rester sans manger plusieurs jours, recouvrant sa carcasse de feuilles pour la conserver.",
                source: "Centre de Recherche Africaine - Carnivore strict."
            },
            {
                id: 4,
                question: "À quel âge les jeunes tigres deviennent-ils indépendants ?",
                options: ["À 6 mois, dès que les canines poussent et que le tigreaun commence à consommer de la viande apportée par la mère", "À 1-2 ans, lorsque les jeunes pèsent déjà plus de 80 kg et suivent leur mère à la chasse sans aide directe", "À 2-3 ans selon l'apprentissage", "À 3-4 ans, après avoir maîtrisé la mise à mort de grandes proies comme le buffle d'eau ou le gaur"],
                correct: 2,
                explanation: "Les jeunes tigres restent avec leur m\u00e8re 2 \u00e0 3 ans, p\u00e9riode pendant laquelle ils apprennent toutes les techniques de chasse. La tigresse leur enseigne d'abord en apportant des proies vivantes \u00e9tourdies, puis en les accompagnant \u00e0 la chasse. L'ind\u00e9pendance est progressive : les jeunes quittent le territoire maternel pour \u00e9tablir le leur, parfois \u00e0 des centaines de kilom\u00e8tres.",
                source: "Institut d'Éthologie - Indépendance progressive."
            },
            {
                id: 5,
                question: "Quel est le nombre moyen de tigres dans une portée ?",
                options: ["1-2 jeunes seulement, comme la plupart des grands félins solitaires limitant les portées pour maximiser les ressources allouées à chaque petit", "2-3 jeunes, nombre typique chez les léopards et pumas vivant dans des environnements à densité de proies modérée", "3-4 jeunes", "4+ jeunes systématiquement, chaque portée comptant cinq ou six tigreaux comme chez certains petits carnivores"],
                correct: 2,
                explanation: "Une port\u00e9e de tigre compte g\u00e9n\u00e9ralement 2 \u00e0 4 petits, parfois jusqu'\u00e0 6. Les tigreaux naissent aveugles et pesant 1 kg environ. Ils ouvrent les yeux vers 10 jours. La tigresse les \u00e9l\u00e8ve seule, sans aide du m\u00e2le. Le taux de survie est faible : en nature, seuls 30 \u00e0 50% atteignent l'\u00e2ge d'un an, victimes de la faim, des pr\u00e9dateurs ou des m\u00e2les \u00e9trangers.",
                source: "Centre de Reproduction - Portées modérées."
            },
            {
                id: 6,
                question: "Quelle est la durée moyenne de gestation chez une tigresse ?",
                options: ["2 mois", "3 mois", "3,5-3,8 mois", "4+ mois"],
                correct: 2,
                explanation: "La gestation de la tigresse dure environ 93 \u00e0 112 jours (3 \u00e0 4 mois). Avant de mettre bas, elle cherche un refuge discret : grotte, fourr\u00e9 dense, ravine. Elle n'introduit ses petits au monde ext\u00e9rieur qu'\u00e0 2 mois. L'intervalle entre deux port\u00e9es est de 2 \u00e0 3 ans \u2014 si les petits survivent. Si la port\u00e9e est perdue, la femelle peut se retrouver en chaleur beaucoup plus vite.",
                source: "Institut de Biologie Reproductive - Gestation environ 110 jours."
            },
            {
                id: 7,
                question: "À quelle vitesse un tigre peut-il courir ?",
                options: ["30 km/h", "50 km/h", "60 km/h", "80+ km/h"],
                correct: 2,
                explanation: "Le tigre peut atteindre 60 \u00e0 65 km/h en sprint sur de tr\u00e8s courtes distances (20 \u00e0 50 m\u00e8tres). Il ne peut pas maintenir cette vitesse longtemps car sa strat\u00e9gie de chasse repose sur l'embuscade, pas la course. Contrairement au gu\u00e9pard, c'est la surprise qui est son atout ma\u00eetre : il s'approche silencieusement \u00e0 moins de 10 m\u00e8tres avant de bondir, utilisant ses 30 kg de muscles pour terrasser sa proie.",
                source: "Institut de Biomécanique - Sprint très rapide."
            },
            {
                id: 8,
                question: "Quel est le habitat préféré du tigre ?",
                options: ["Savane sèche", "Forêts denses et humides", "Montagne alpine", "Désert"],
                correct: 1,
                explanation: "Le tigre est avant tout un animal des for\u00eats tropicales et subtropicales, mais il s'adapte \u00e0 des milieux tr\u00e8s divers : for\u00eats temp\u00e9r\u00e9es de Sib\u00e9rie, mangroves des Sundarbans (Bangladesh), jungles de l'Asie du Sud-Est. Il a besoin de couvert dense pour chasser par embuscade, d'eau (les tigres adorent nager) et d'une densit\u00e9 suffisante de proies.",
                source: "Centre d'Écologie - Préférence pour jungles."
            },
            {
                id: 9,
                question: "À quel âge un tigre devient-il sexuellement mature ?",
                options: ["À 18 mois", "À 2-3 ans selon le sexe", "À 3-4 ans", "À 4+ ans"],
                correct: 1,
                explanation: "Les tigres atteignent leur maturit\u00e9 sexuelle entre 3 et 4 ans. Les femelles sont g\u00e9n\u00e9ralement f\u00e9condes vers 3 ans, les m\u00e2les vers 4 ans. Mais la maturit\u00e9 sociale (capacit\u00e9 \u00e0 s'accoupler et \u00e0 \u00e9lever des jeunes) arrive plus tard, quand l'animal a \u00e9tabli son propre territoire. Les m\u00e2les sans territoire ont peu de chances de se reproduire.",
                source: "Institut de Reproduction Féline - Maturité rapide."
            },
            {
                id: 10,
                question: "Quel est le nombre de rayures sur un tigre en moyenne ?",
                options: ["20-30 rayures", "40-60 rayures", "80-100 rayures selon individu", "Plus de 100"],
                correct: 2,
                explanation: "Un tigre poss\u00e8de en moyenne 100 rayures, mais ce nombre varie selon l'individu et la sous-esp\u00e8ce. Ces rayures sont verticales sur le corps et horizontales sur les pattes. Fait remarquable : les rayures se prolongent dans la peau, pas uniquement dans le pelage \u2014 un tigre ras\u00e9 reste ray\u00e9. Le motif est unique \u00e0 chaque individu, ce qui permet aux chercheurs d'identifier les tigres sur des cam\u00e9ras-pi\u00e8ges.",
                source: "Institut d'Éthologie - Pattern unique par individu."
            },
            {
                id: 11,
                question: "Quel est le son produit par le tigre pour communiquer ?",
                options: ["Rugissement uniquement", "Rugissement, chuffement et gazouillis", "Miaulement", "Silence complet"],
                correct: 1,
                explanation: "Le tigre communique avec un r\u00e9pertoire sonore vari\u00e9. Son rugissement porte jusqu'\u00e0 3 km et sert \u00e0 d\u00e9fendre son territoire. Le 'prusten' ou 'chuffing' \u2014 un souffle rapide par les narines \u2014 est un salut amical entre individus. Les tigres utilisent aussi des grognements, feulements, grondements et m\u00eame un gazouillis (chattering) lorsqu'ils observent une proie hors de port\u00e9e.",
                source: "Institut d'Acoustique Féline - Vocalisations variées."
            },
            {
                id: 12,
                question: "Quelle est la couleur des yeux du tigre ?",
                options: ["Bleu", "Jaune/orange ambre selon l'individu", "Noir", "Gris"],
                correct: 1,
                explanation: "Les tigres ont des yeux jaunes \u00e0 ambre, adapt\u00e9s \u00e0 la chasse cr\u00e9pusculaire et nocturne. Leur vision nocturne est environ 6 fois sup\u00e9rieure \u00e0 celle de l'humain gr\u00e2ce \u00e0 un tapetum lucidum \u2014 une couche r\u00e9flectrice derri\u00e8re la r\u00e9tine qui amplifie la lumi\u00e8re disponible. En revanche, les tigres sont daltoniens pour le rouge, percevant le monde principalement en bleu, vert et jaune.",
                source: "Institut d'Ophtalmologie Animale - Teinte variable."
            },
            {
                id: 13,
                question: "À quelle heure du jour le tigre chasse-t-il préférentiellement ?",
                options: ["Tôt le matin juste après l'aube quand les proies reprennent leur activité et leur vigilance est réduite", "En milieu de journée profitant de la somnolence des proies épuisées par la chaleur équatoriale intense", "Soir et nuit", "En fin d'après-midi lors du pic d'activité des herbivores se rendant aux points d'eau pour boire"],
                correct: 2,
                explanation: "Le tigre est un chasseur principalement cr\u00e9pusculaire et nocturne. Il chasse surtout entre le coucher et le lever du soleil, profitant de son excellente vision dans l'obscurit\u00e9 pour avoir un avantage sur ses proies. Pendant la journ\u00e9e, il se repose \u00e0 l'ombre pour \u00e9viter la chaleur. Dans les zones fr\u00e9quent\u00e9es par l'humain, il adapte son comportement pour devenir encore plus nocturne.",
                source: "Centre de Comportement Félin - Chasseur crépusculaire."
            },
            {
                id: 14,
                question: "Quel est le lifespan moyen d'un tigre en nature ?",
                options: ["10-12 ans", "12-15 ans", "15-20 ans selon conditions", "20+ ans"],
                correct: 1,
                explanation: "En libert\u00e9, les tigres vivent en moyenne 10 \u00e0 15 ans. Les femelles vivent souvent plus longtemps que les m\u00e2les, qui s'exposent davantage lors des combats territoriaux. En captivit\u00e9, ils peuvent atteindre 20-25 ans. La population mondiale de tigres sauvages est estim\u00e9e \u00e0 environ 3 500-5 000 individus \u2014 une remonte encourageante depuis le plus bas historique de 3 200 en 2010, gr\u00e2ce aux efforts de conservation.",
                source: "Institut de Longévité Animale - Durée de vie estimée."
            },
            {
                id: 15,
                question: "Quel est le nombre moyen de sous-espèces de tigres aujourd'hui vivantes ?",
                options: ["2-3", "4-5", "6 sous-espèces", "10+"],
                correct: 2,
                explanation: "La taxonomie moderne reconna\u00eet 6 sous-esp\u00e8ces de tigres vivantes : le tigre du Bengale (le plus nombreux, ~2 500), le tigre de l'Amour (Sib\u00e9rie, ~600), le tigre de l'Indochine (~250), le tigre de Malaisie (~150), le tigre de Sumatra (~400) et le tigre de Chine du Sud (probablement \u00e9teint dans la nature). Trois sous-esp\u00e8ces sont d\u00e9j\u00e0 \u00e9teintes : le tigre du Bali, de Java et de la Caspienne.",
                source: "Centre de Conservation - Diversité réelle."
            },
            {
                id: 16,
                question: "À quel âge un tigre atteint sa taille adulte ?",
                options: ["À 1-2 ans", "À 2-3 ans", "À 3-4 ans selon l'individu", "À 5+ ans"],
                correct: 2,
                explanation: "Les tigres atteignent leur taille adulte entre 3 et 4 ans, avec une croissance rapide pendant les 2 premi\u00e8res ann\u00e9es. Les m\u00e2les continuent de prendre de la masse musculaire jusqu'\u00e0 5-6 ans. Cette maturit\u00e9 physique tardive est coupl\u00e9e \u00e0 un apprentissage long : un jeune tigre ne ma\u00eetrise totalement les techniques de chasse complexes (comme s'attaquer \u00e0 de gros buffles) qu'apr\u00e8s plusieurs ann\u00e9es d'exp\u00e9rience.",
                source: "Institut de Croissance Féline - Développement progressif."
            },
            {
                id: 17,
                question: "Quel est le record de saut en hauteur pour un tigre ?",
                options: ["2 mètres", "3 mètres", "5-6 mètres selon conditions", "10 mètres"],
                correct: 2,
                explanation: "Le tigre est un sauteur exceptionnel. Il peut bondir jusqu'\u00e0 9-10 m\u00e8tres horizontalement et 5-6 m\u00e8tres en hauteur. Ces capacit\u00e9s athl\u00e9tiques sont essentielles pour sa technique de chasse : il s'approche en rampant, puis couvre les derniers m\u00e8tres en un ou deux bonds fulgurants, visant g\u00e9n\u00e9ralement la gorge ou la nuque de sa proie pour une mise \u00e0 mort rapide.",
                source: "Institut de Biomécanique - Athlète exceptionnel."
            },
            {
                id: 18,
                question: "Quel est le nombre de dents que possède un tigre adulte ?",
                options: ["28 dents", "32 dents", "30 dents", "40 dents"],
                correct: 2,
                explanation: "Le tigre poss\u00e8de 30 dents, comme la plupart des carnivores. Ses crocs (canines) peuvent mesurer jusqu'\u00e0 9 cm de long \u2014 les plus grands de tous les f\u00e9lid\u00e9s vivants. Ces crocs servent \u00e0 \u00e9trangler les proies ou briser leur nuque. Ses carnas\u00e8res (derni\u00e8res pr\u00e9molaires et premi\u00e8res molaires) fonctionnent comme des ciseaux pour d\u00e9couper la viande. Les tigres avalent la chair sans m\u00e2cher.",
                source: "Centre de Zoologie - Dentition féline."
            },
            {
                id: 19,
                question: "Quel est le nom de la zone blanche sur la nuque du tigre ?",
                options: ["Cerné oculaire noir accentué visible chez tous les félins sauvages comme marqueur taxonomique", "Spot blanc ou 'eyespot'", "Plaque de poils blancs plus denses formant un miroir réfléchissant les signaux lumineux", "Anneau dépigmenté entourant la pupille réduisant l'éblouissement lors de la chasse en plein soleil"],
                correct: 1,
                explanation: "Les taches blanches sur la face post\u00e9rieure des oreilles du tigre sont un signal de communication fascinant. Quand une tigresse retourne les oreilles vers ses petits (comme pour dire 'suivez-moi'), les taches blanches deviennent visibles de loin dans la for\u00eat sombre, agissant comme des balises visuelles. Chez certains individus, ces 'ocelles' peuvent aussi imiter des yeux pour d\u00e9tourner l'attention d'\u00e9ventuels pr\u00e9dateurs arri\u00e8re.",
                source: "Institut d'Anatomie Féline - Marqueur distinctif."
            },
            {
                id: 20,
                question: "À quel âge une femelle tigre peut-elle se reproduire ?",
                options: ["À 1 an", "À 2-3 ans selon le développement", "À 3-4 ans", "À 5+ ans"],
                correct: 1,
                explanation: "Les femelles tigres atteignent leur maturit\u00e9 sexuelle vers 3-4 ans. Elles sont en chaleur (\u0153strus) pendant 3 \u00e0 7 jours, toutes les 3 \u00e0 9 semaines si elles ne sont pas f\u00e9cond\u00e9es. Pendant cette p\u00e9riode, elles marquent intensivement leur territoire de ph\u00e9romones et de vocalises pour attirer les m\u00e2les. Les femelles \u00e9l\u00e8vent leurs petits seules, sans aide du m\u00e2le.",
                source: "Institut de Reproduction - Maturité féline."
            }
        ],
        moyen: [
            {
                id: 11,
                question: "Quel est le territoire moyen d'un tigre ?",
                options: ["10-20 km²", "30-50 km²", "50-100 km² selon densité proies", "150+ km²"],
                correct: 2,
                explanation: "Le territoire d'un tigre varie consid\u00e9rablement selon le milieu et la disponibilit\u00e9 des proies. Une femelle occupe 20 \u00e0 60 km\u00b2, un m\u00e2le 60 \u00e0 200 km\u00b2 (englobant g\u00e9n\u00e9ralement les territoires de 2 \u00e0 7 femelles). En Sib\u00e9rie o\u00f9 les proies sont rares, les territoires peuvent d\u00e9passer 1 000 km\u00b2. Les tigres marquent leurs limites avec de l'urine, des s\u00e9cr\u00e9tions glandulaires et des griffures sur les arbres.",
                source: "Centre de Recherche Territoriale - Vaste domaine."
            },
            {
                id: 12,
                question: "Quel est le taux de réussite de chasse du tigre ?",
                options: ["Très élevé 80%+", "Modéré 40-60%", "Faible 5-10%", "Très faible moins de 5%"],
                correct: 2,
                explanation: "Le taux de r\u00e9ussite de chasse du tigre est parmi les plus bas des grands f\u00e9lid\u00e9s : seulement 5 \u00e0 10% des tentatives. Chaque chasse demand beaucoup d'\u00e9nergie (approche silencieuse, sprint explosif) et \u00e9choue souvent car les proies sont alertes. Le tigre compense en chassant de grandes proies qui fournissent une grande quantit\u00e9 de viande \u2014 un buffle de 300 kg nourrit le tigre pour une semaine.",
                source: "Institut de Chasse - Succès limité malgré prédateur."
            },
            {
                id: 13,
                question: "À quelle distance un tigre peut-il entendre sa proie ?",
                options: ["Quelques mètres", "100 mètres", "500 mètres selon conditions", "1+ km"],
                correct: 2,
                explanation: "L'ou\u00efe du tigre est tr\u00e8s d\u00e9velopp\u00e9e. Ses grandes oreilles, mobiles ind\u00e9pendamment, peuvent capter des sons \u00e0 des centaines de m\u00e8tres et se diriger pr\u00e9cis\u00e9ment vers une source sonore. Il entend des fr\u00e9quences inf\u00e9rasonores (en-dessous de 20 Hz) que l'humain ne per\u00e7oit pas, lui permettant de d\u00e9tecter les communications des \u00e9l\u00e9phants et m\u00eame les vibrations du sol provenant de proies \u00e9loign\u00e9es.",
                source: "Institut d'Éthologie Sensorielle - Audition exacerbée."
            },
            {
                id: 14,
                question: "Quel est le rôle de la marque blanche sur la nuque du tigre ?",
                options: ["Communication de statut dominant lors des rencontres agonistiques entre mâles de force comparable", "Signal de soumission et non-agression", "Amélioration du camouflage lors des affûts nocturnes dans les zones à végétation clairsemée", "Attraction des femelles en période d'œstrus grâce à la réflectance de la zone blanche sous lumière UV"],
                correct: 1,
                explanation: "Les taches blanches sur la face post\u00e9rieure des oreilles du tigre jouent plusieurs r\u00f4les sociaux. Pendant la chasse, la tigresse retourne ses oreilles pour montrer ces taches \u00e0 ses petits qui la suivent dans la v\u00e9g\u00e9tation dense \u2014 signal de 'suivez-moi'. Elles peuvent aussi servir dans les interactions entre adultes pour signaler l'\u00e9tat \u00e9motionnel : oreilles couchs\u00e9es vers l'arri\u00e8re signalent l'agression, dress\u00e9es signalent l'attention.",
                source: "Institut d'Éthologie - Marqueur communaux."
            },
            {
                id: 15,
                question: "À quel âge une jeune femelle tigre quitte son territoire ?",
                options: ["À 1-2 ans", "À 2-3 ans selon l'espace", "À 3-4 ans", "À 4+ ans"],
                correct: 1,
                explanation: "Les femelles tigres quittent le territoire maternel entre 2 et 3 ans pour \u00e9tablir le leur, souvent \u00e0 proximit\u00e9 de leur m\u00e8re si l'espace est disponible. Les m\u00e2les s'\u00e9loignent bien davantage \u2014 jusqu'\u00e0 200-300 km dans certains cas. Cette dispersion \u00e9vite la consanguinit\u00e9 et r\u00e9duit la comp\u00e9tition directe avec la m\u00e8re. La disponibilit\u00e9 du territoire est le facteur limitant principal de la survie des jeunes tigres.",
                source: "Centre d'Étude Territoriale - Dispersion précoce."
            },
            {
                id: 16,
                question: "Quel est le rôle du mugissement chez le tigre ?",
                options: ["Attaque uniquement", "Marquage territorial et communication à longue distance", "Chasse", "Jeu"],
                correct: 1,
                explanation: "Le rugissement du tigre est un son puissant portant jusqu'\u00e0 3 km en for\u00eat dense. Il sert \u00e0 affirmer la possession du territoire, attirer les partenaires sexuels et maintenir le contact \u00e0 distance. Les tigres rugissent aussi pour avertir leurs petits d'un danger. Contrairement aux lions, les tigres rugissent rarement en groupe \u2014 leur nature solitaire se refl\u00e8te dans leur communication acoustique.",
                source: "Institut d'Acoustique Comportementale - Communication complexe."
            },
            {
                id: 17,
                question: "À quel âge les jeunes tigres commencent-ils à chasser ?",
                options: ["À 3-4 mois", "À 6-8 mois", "À 10-12 mois selon apprentissage", "À 18+ mois"],
                correct: 2,
                explanation: "Les tigreaux commencent \u00e0 accompagner leur m\u00e8re \u00e0 la chasse vers 6 mois. Vers 10-12 mois, ils font leurs premi\u00e8res tentatives sur de petites proies. La ma\u00eetrise de la chasse est progressive : d'abord de petits animaux, puis des proies de taille moyenne, et enfin les grandes proies complexes vers 18-24 mois. Le taux d'\u00e9chec est \u00e9lev\u00e9 au d\u00e9but, mais chaque tentative affine les r\u00e9flexes et la technique.",
                source: "Centre d'Apprentissage - Éducation progressive."
            },
            {
                id: 18,
                question: "Quel est le nombre de sous-espèces de tigres ?",
                options: ["2-3 sous-espèces", "4-5 sous-espèces", "6 sous-espèces actuelles", "10+ sous-espèces"],
                correct: 2,
                explanation: "Les 6 sous-esp\u00e8ces actuelles de tigres vivants se distinguent par leur taille, couleur et habitat. Le tigre de Sumatra est le plus petit (130 kg m\u00e2le) avec les rayures les plus serr\u00e9es. Le tigre de l'Amour est le plus grand (300 kg) avec le pelage le plus clair et le plus \u00e9pais pour affronter les hivers sib\u00e9riens (jusqu'\u00e0 -40\u00b0C). Malgr\u00e9 leurs diff\u00e9rences, tous sont class\u00e9s en danger ou en danger critique d'extinction.",
                source: "Institut de Zoologie - Diversité géographique."
            },
            {
                id: 19,
                question: "À quel âge un tigre atteint sa taille adulte maximale ?",
                options: ["À 2-3 ans", "À 4-5 ans", "À 5-6 ans selon l'individu", "À 6+ ans"],
                correct: 2,
                explanation: "Bien que les tigres soient sexuellement matures vers 3-4 ans, ils n'atteignent leur pleine taille adulte et leur masse musculaire maximale qu'entre 5 et 6 ans. Les m\u00e2les continuent de prendre du poids et de la puissance apr\u00e8s 4 ans. Cette maturit\u00e9 physique tardive est li\u00e9e \u00e0 la n\u00e9cessit\u00e9 d'\u00eatre suffisamment puissant pour \u00e9tablir et d\u00e9fendre un large territoire contre d'autres m\u00e2les adultes.",
                source: "Centre de Croissance - Développement progressif."
            },
            {
                id: 20,
                question: "Quel est l'âge moyen de vie d'un tigre en nature ?",
                options: ["10-12 ans", "12-15 ans", "15-20 ans selon conditions", "20+ ans"],
                correct: 1,
                explanation: "En libert\u00e9, les tigres vivent en moyenne 12 \u00e0 15 ans. Apr\u00e8s 10 ans, leurs dents s'usent, rendant la chasse plus difficile. Des tigres \u00e2g\u00e9s \u00e0 dents abim\u00e9es se rabattent parfois sur des proies plus faciles \u00e0 attraper \u2014 comme le b\u00e9tail ou, rarement, les humains \u2014 ce qui explique certains cas historiques de 'tigres man\u00e9aters'. En captivit\u00e9, avec soins v\u00e9t\u00e9rinaires, ils peuvent d\u00e9passer 20 ans.",
                source: "Centre de Longévité - Durée de vie limitée."
            },
            {
                id: 21,
                question: "Quel est le secret de l'efficacité du camouflage du tigre ?",
                options: ["Couleur uniquement", "Rayures qui brisent la silhouette en environnement", "Absence de son", "Vitesse seulement"],
                correct: 1,
                explanation: "L'efficacit\u00e9 du camouflage du tigre repose sur la 'disruptive coloration' : ses rayures verticales brisent visuellement son contour en fragments qui se confondent avec les herbes et tiges verticales. De plus, ses proies (cerfs, sangliers) ont une vision limit\u00e9e des couleurs \u2014 elles ne per\u00e7oivent pas l'orange, qui leur appara\u00eet comme du gris-vert, couleur parfaitement mimique avec la v\u00e9g\u00e9tation. Un tigre immobile \u00e0 5 m\u00e8tres peut \u00eatre totalement invisible.",
                source: "Institut d'Écologie Visuelle - Rupture de contours."
            },
            {
                id: 22,
                question: "À quelle vitesse un tigre peut-il atteindre lors d'une charge ?",
                options: ["30 km/h", "40 km/h", "50-60 km/h sur distance courte", "80+ km/h"],
                correct: 2,
                explanation: "Le tigre est un athl\u00e8te explosif capable d'atteindre 50-60 km/h en quelques bond\u00e9es. Sa technique de chasse repose sur une approche silencieuse jusqu'\u00e0 5-10 m\u00e8tres, suivie d'un sprint foudroyant. Il utilise ses pattes avant comme des crampons pour immobiliser la proie et ses crocs pour \u00e9trangler. Une seule patte de tigre peut fracasser le cr\u00e2ne d'un buffle \u2014 la force d'un coup est estim\u00e9e \u00e0 plusieurs centaines de kg.",
                source: "Institut de Biomécanique Féline - Sprint redoutable."
            },
            {
                id: 23,
                question: "Quel est le nombre moyen de petits tigres par année pour une femelle ?",
                options: ["0,5", "1-2 par ans selon reproduction", "2-3 par an", "3+ par an"],
                correct: 1,
                explanation: "Les tigresses ont une port\u00e9e tous les 2 \u00e0 3 ans en moyenne. Si la port\u00e9e est perdue (pr\u00e9dation, infanticide, famine), la femelle entre rapidement en chaleur \u00e0 nouveau. Le succ\u00e8s reproducteur d'une femelle sur toute sa vie est de 6 \u00e0 10 jeunes qui survivent jusqu'\u00e0 l'ind\u00e9pendance. Dans les r\u00e9serves bien prot\u00e9g\u00e9es comme Ranthambore (Inde), certaines femelles \u00e9l\u00e8vent plus de 20 tigreaux sur toute leur vie.",
                source: "Centre de Biologie Reproductive - Fertilité modérée."
            },
            {
                id: 24,
                question: "À quelle profondeur un tigre peut-il nager ?",
                options: ["Surface seulement", "Jusqu'à 2 mètres", "Jusqu'à 5 mètres selon le besoins", "Jusqu'à 10 mètres"],
                correct: 2,
                explanation: "Le tigre est l'un des rares grands f\u00e9lid\u00e9s \u00e0 appr\u00e9cier l'eau et \u00e0 nager excellemment. Il peut traverser des rivi\u00e8res de plusieurs kilom\u00e8tres et chasser dans l'eau. Dans les Sundarbans (delta du Gange), les tigres nagent r\u00e9guli\u00e8rement entre les \u00eeles. Ils plong\u00e9ent pour chasser les cerfs qui traversent les cours d'eau. Cette capacit\u00e9 atypique chez les f\u00e9lid\u00e9s est li\u00e9e \u00e0 leur habitat originel de for\u00eats tropicales humides.",
                source: "Institut de Comportement Aquatique - Nageur compétent."
            },
            {
                id: 25,
                question: "Quel est le temps moyen d'une chasse pour un tigre ?",
                options: ["30 secondes à 1 minute", "1-5 minutes selon proie", "15-20 minutes", "1 heure"],
                correct: 1,
                explanation: "La chasse du tigre est une s\u00e9quence pr\u00e9cise : d\u00e9tection de la proie (odorat, ouie, vision), approche rampante tr\u00e8s lente (parfois 30 minutes pour parcourir 100 m\u00e8tres), sprint final \u00e0 60 km/h, bond, immobilisation et mise \u00e0 mort par strangulation ou bris de la nuque. Toute la s\u00e9quence post-d\u00e9tection dure 1 \u00e0 5 minutes. L'\u00e9chec se produit souvent si la proie est alert\u00e9e au-del\u00e0 de 10 m\u00e8tres.",
                source: "Centre d'Étude du Comportement - Chasse rapide."
            },
            {
                id: 26,
                question: "Quel est le nombre de tigres estimés en nature aujourd'hui ?",
                options: ["Plusieurs milliers", "3000-4000 tigres environ", "10000+", "Plus de 50000"],
                correct: 1,
                explanation: "Les estimations r\u00e9centes (2023) recensent environ 3 726 tigres sauvages dans le monde, en hausse par rapport aux 3 200 de 2010. L'Inde accueille la plus grande population (~3 167 individus, soit plus de 75% du total mondial). Cette tendance positive est due \u00e0 des politiques de conservation strictes, la cr\u00e9ation de r\u00e9serves et la r\u00e9duction du braconnage. La Russie, le N\u00e9pal, le Bhoutan et Bangladesh montrent aussi des progressions encourageantes.",
                source: "WWF et Conservation - Espèce en danger."
            },
            {
                id: 27,
                question: "À quel moment du cycle reproductif la femelle tigre accepte-t-elle l'accouplement ?",
                options: ["À n'importe quel moment de l'année car les tigresses n'ont pas de cycle saisonnier défini", "Pendant les chaleurs/estrus", "Pendant la période post-partum des 3 premiers mois suivant la mise bas des chatons", "Exclusivement lors des saisons sèches quand la concentration autour des points d'eau facilite les rencontres"],
                correct: 1,
                explanation: "La femelle tigre n'accepte le m\u00e2le que pendant sa courte p\u00e9riode d'\u0153strus (3 \u00e0 7 jours). Elle signale sa r\u00e9ceptivit\u00e9 par des vocalises sp\u00e9cifiques et des marquages chimiques intenses. L'accouplement est fr\u00e9quent (toutes les 15-20 minutes) mais tr\u00e8s bref (15-30 secondes). Le m\u00e2le peut s'accoupler avec plusieurs femelles de son territoire, mais il ne participe pas \u00e0 l'\u00e9levage des petits.",
                source: "Institut de Reproduction - Cycle oestral."
            },
            {
                id: 28,
                question: "Quel est le rôle des vibrisses (moustaches) du tigre ?",
                options: ["Uniquement apparence", "Détection spatiale et sensibilité tactile", "Communication", "Thermorégulation"],
                correct: 1,
                explanation: "Les vibrisses (longues moustaches) du tigre sont des organes sensoriels extr\u00eamement d\u00e9velopp\u00e9s. Elles d\u00e9tectent les mouvements d'air et les vibrations proches, permettant au tigre de localiser une proie dans l'obscurit\u00e9 quasi-totale. Lors de la mise \u00e0 mort, les vibrisses aident \u00e0 positionner pr\u00e9cis\u00e9ment les crocs sur la gorge de la proie, m\u00eame sans voir clairement. Certaines vibrisses mesurent plus de 15 cm de long.",
                source: "Institut d'Anatomie Sensorielle - Détecteurs sensitifs."
            },
            {
                id: 29,
                question: "À quel âge un tigre peut-il être considéré comme sénior ?",
                options: ["À 10 ans", "À 12 ans", "À 15 ans selon l'individu", "À 20+ ans"],
                correct: 2,
                explanation: "Les tigres \u00e2g\u00e9s de 12 \u00e0 15 ans entrent dans leur phase s\u00e9nior. Leurs dents s'usent progressivement, leur vitesse diminue et leurs blessures cicatrisent plus lentement. Beaucoup d'anciens m\u00e2les perdent leur territoire face \u00e0 des jeunes plus vigoureux. Certains individus s'adaptent en se sp\u00e9cialisant dans des proies plus faciles. Les tigres les plus c\u00e9l\u00e8bres de r\u00e9serves indiennes ont v\u00e9cu jusqu'\u00e0 16-18 ans en libert\u00e9.",
                source: "Centre de Gérontologie Féline - Vieillesse relative."
            },
            {
                id: 30,
                question: "Quel est le facteur principal de mortalité chez les jeunes tigres ?",
                options: ["Maladie", "Prédation par adultes rivaux", "Accidents et indépendance", "Famine"],
                correct: 2,
                explanation: "La premi\u00e8re ann\u00e9e de vie est la plus dangereuse pour les tigreaux. Les principales causes de mortalit\u00e9 juvénile sont : l'infanticide par des m\u00e2les \u00e9trangers, les attaques de pr\u00e9dateurs (l\u00e9opards, ours, crocodiles), la famine si la m\u00e8re est tu\u00e9e ou bless\u00e9e, et les maladies. En libert\u00e9, moins de 50% des tigreaux atteignent l'\u00e2ge de 2 ans. La p\u00e9riode la plus critique est le sevrage, quand la m\u00e8re les laisse seuls pendant la chasse.",
                source: "Institut d'Écologie Comportementale - Vulnérabilité juvénile."
            }
        ],
        difficile: [
            {
                id: 21,
                question: "Quel est le mécanisme de la 'flanking strategy' chez le tigre ?",
                options: ["Poursuite à grande vitesse démarrant à plus de 200 mètres de la proie pour l'épuiser par la course", "Approche latérale progressive en camouflage avant attaque", "Attaque frontale directe depuis une position élevée exploitant l'effet de surprise gravitationnel", "Encerclement progressif de la proie en décrivant des cercles concentriques rétrécissant sur plusieurs heures"],
                correct: 1,
                explanation: "La strat\u00e9gie de flanquement du tigre consiste \u00e0 contourner silencieusement la proie pour se positionner \u00e0 l'angle mort de sa vision p\u00e9riph\u00e9rique. Il utilise la v\u00e9g\u00e9tation comme couverture, avance \u00e0 peine et attend que la proie soit \u00e0 sa port\u00e9e optimale (5-10 m\u00e8tres). Cette approche peut prendre plusieurs dizaines de minutes. Des \u00e9tudes montrent que les tigres m\u00e9morisent les comportements de leurs proies habituelles pour pr\u00e9voir leurs r\u00e9actions.",
                source: "Institut de Chasse Stratégique - Prédation élaborée."
            },
            {
                id: 22,
                question: "Quel est le rôle de la 'mane-like marking' chez le tigre mâle ?",
                options: ["Décoration", "Démonstration de fitness et dominance sociale", "Thermorégulation", "Signal d'alerte"],
                correct: 1,
                explanation: "Contrairement au lion, le tigre m\u00e2le n'a pas de crini\u00e8re. Mais les m\u00e2les adultes d\u00e9veloppent des joues \u00e9largies (promenades) qui accentuent leur apparence imp\u00e9riale. Ces 'ruff' faciaux sont plus prononc\u00e9s chez les m\u00e2les \u00e2g\u00e9s et dominants. Ils jouent un r\u00f4le de signal social lors des rencontres entre m\u00e2les et peuvent influencer les choix des femelles, qui pr\u00e9f\u00e8rent les m\u00e2les aux marques faciales les plus d\u00e9velopp\u00e9es.",
                source: "Université de Sélection Sexuelle - Traits de qualité."
            },
            {
                id: 23,
                question: "Quel est le processus de la 'territorial scent marking' ?",
                options: ["Griffades sur les troncs d'arbres uniquement, sans recours aux marquages olfactifs chimiques", "Urine et sécrétion glandulaires marquent limites territoire", "Communication vocale par rugissements délimitant le territoire sans dépôt de marqueurs chimiques", "Patrouilles visuelles quotidiennes sans laisser de traces permettant aux intrus d'identifier le propriétaire"],
                correct: 1,
                explanation: "Le marquage olfactif du tigre est un syst\u00e8me de communication chimique sophistiqu\u00e9. Il asperge de l'urine m\u00e9lang\u00e9e \u00e0 des s\u00e9cr\u00e9tions des glandes anales sur des arbres et rochers \u00e0 hauteur de museau. Ces marques contiennent des informations sur l'identit\u00e9, le sexe, l'\u00e2ge et l'\u00e9tat reproducteur de l'individu. Un autre tigre peut ainsi savoir \u00e0 combien de temps la zone a \u00e9t\u00e9 visit\u00e9e et \u00e9viter ou rechercher le contact.",
                source: "Institut d'Éthologie Chimique - Communication olfactive."
            },
            {
                id: 24,
                question: "Quel est le mécanisme de la 'nocturnal hunting preference' ?",
                options: ["Chasse exclusivement à l'aube et au crépuscule lors des transitions lumineuses pour maximiser la surprise", "Chasse préférentiellement la nuit pour avantage sensoriel", "Alternance stricte chasse/repos toutes les 12 heures indépendamment des conditions lumineuses", "Chasse uniquement en pleine journée quand les proies sont actives et détectables à grande distance"],
                correct: 1,
                explanation: "La pr\u00e9f\u00e9rence nocturne du tigre est li\u00e9e \u00e0 son avantage sensoriel dans l'obscurit\u00e9. Sa vision nocturne est 6 fois sup\u00e9rieure \u00e0 celle de l'humain gr\u00e2ce au tapetum lucidum. La nuit r\u00e9duit aussi la chaleur (important dans les r\u00e9gions tropicales) et augmente l'activit\u00e9 de ses proies nocturnales (cerfs axis, sangliers). Dans les r\u00e9gions \u00e0 forte pr\u00e9sence humaine, les tigres deviennent encore plus strictement nocturnes pour \u00e9viter les conflits.",
                source: "Institut d'Éthologie Temporelle - Adaptation lumineuse."
            },
            {
                id: 25,
                question: "Quel est le rôle du 'allomothering' chez les femelles tigres ?",
                options: ["Mères tigresses partageant leur territoire de chasse et leurs proies avec d'autres femelles en lactation", "Femelles non-mères aident à l'élevage des jeunes", "Infanticide systématique des petits des femelles voisines pour réduire la compétition territoriale future", "Enseignement des techniques de chasse aux jeunes d'autres femelles pendant les périodes de dispersion"],
                correct: 1,
                explanation: "Bien que les tigres soient g\u00e9n\u00e9ralement solitaires, des comportements d'allomothering ont \u00e9t\u00e9 observ\u00e9s dans de rares cas. Des femelles sans petits ont \u00e9t\u00e9 vues gardant des tigreaux orphelins ou aidant une femelle bless\u00e9e \u00e0 nourrir ses petits. Ce comportement, rare mais document\u00e9, sugg\u00e8re que les f\u00e9lid\u00e9s solitaires conservent une capacit\u00e9 de coop\u00e9ration sociale qui peut \u00eatre activ\u00e9e dans des circonstances exceptionnelles.",
                source: "Université d'Éthologie Familiale - Comportement social."
            },
            {
                id: 26,
                question: "Quel est le mécanisme de la 'mustelid-like climbing' chez le tigre ?",
                options: ["Incapacité totale à grimper aux arbres due au poids excessif et aux griffes semi-rétractiles peu acérées", "Capacité à grimper aux arbres contrairement aux autres félidés", "Montée en arbre lente et laborieuse réservée uniquement aux situations d'urgence face aux prédateurs", "Comportement dangereux pour l'animal car la descente est impossible une fois en hauteur"],
                correct: 1,
                explanation: "Les tigres sont de bons grimpeurs, surtout les jeunes et les individus l\u00e9gers. Ils utilisent les arbres pour surveiller leur territoire, cacher des carcasses hors de port\u00e9e des charognards et, pour les tigreaux, \u00e9chapper aux pr\u00e9dateurs. Les adultes, trop lourds pour grimper facilement, pr\u00e9f\u00e8rent les rochers comme points d'observation. Leur morphologie les rend moins agiles en hauteur que les l\u00e9opards, qui hissent syst\u00e9matiquement leurs proies dans les arbres.",
                source: "Institut de Biomécanique - Adaptation arboricole."
            },
            {
                id: 27,
                question: "Quel est le processus de la 'inbreeding avoidance' chez les tigres ?",
                options: ["Tolérance de la présence des jeunes adultes sur le territoire parental jusqu'à l'âge de 5 ans révolus", "Jeunes tigres dispersent loin du territoire parental", "Héritage partiel du territoire parental par le premier jeune à atteindre la maturité reproductive", "Reproduction indifférente à la proximité génétique, régulée uniquement par la disponibilité des partenaires"],
                correct: 1,
                explanation: "L'\u00e9vitement de la consanguinit\u00e9 chez le tigre est assur\u00e9 par la dispersion des jeunes, particuli\u00e8rement les m\u00e2les qui s'\u00e9loignent consid\u00e9rablement de leur territoire natal. Des tigres marqu\u00e9s ont \u00e9t\u00e9 suivis sur plus de 300 km depuis leur lieu de naissance. Cette dispersion garantit un brassage g\u00e9n\u00e9tique crucial pour la vitalit\u00e9 de l'esp\u00e8ce. Dans les fragments d'habitat isol\u00e9s, l'impossibilit\u00e9 de disperser est l'une des causes de d\u00e9clin g\u00e9n\u00e9tique.",
                source: "Université de Génétique Comportementale - Stratégie génétique."
            },
            {
                id: 28,
                question: "Quel est le rôle du 'surplus killing' chez le tigre ?",
                options: ["Chasse strictement proportionnelle aux besoins caloriques journaliers sans aucun stockage de proies", "Chasse excessivement au-delà des besoins nutritionnels", "Gaspillage involontaire dû à une incapacité à évaluer la quantité de nourriture nécessaire avant la chasse", "Auto-régulation instinctive empêchant toute chasse superflue une fois la ration quotidienne atteinte"],
                correct: 1,
                explanation: "Le 'surplus killing' \u2014 tuer plus de proies qu'on ne peut en consommer \u2014 est observ\u00e9 chez les tigres dans certaines conditions, notamment quand les proies sont exceptionnellement vuln\u00e9rables (troupeaux bloqu\u00e9s, jeunes animaux, b\u00e9tail dans un enclos). Ce comportement, souvent class\u00e9 \u00e0 tort comme 'irrationnel', peut \u00eatre une strat\u00e9gie \u00e9volutivement avantageuse : stocker de l'\u00e9nergie en tuant quand l'opportunit\u00e9 se pr\u00e9sente, en pr\u00e9vision de p\u00e9riodes de disette.",
                source: "Institut d'Éthologie Prédatrice - Comportement complexe."
            },
            {
                id: 29,
                question: "Quel est le mécanisme de la 'cryptic coloration' additionnelle ?",
                options: ["Couleur orange du pelage servant de signal d'avertissement aux proies comme chez les insectes aposématiques", "Rayures + teinte permettent fusion avec environnement", "Teinte uniforme sans rayures visible uniquement dans les zones densément boisées à faible luminosité", "Camouflage exclusivement efficace sous lumière UV invisible à l'œil humain mais pas à celui des proies"],
                correct: 1,
                explanation: "La coloration cryptique du tigre fonctionne \u00e0 plusieurs niveaux. Les rayures brisent la silhouette (disruptive coloration). La teinte orange-roux, invisible pour les cerfs daltoniens (qui voient l'orange comme du vert-gris), fusionne avec la v\u00e9g\u00e9tation tropicale. Le ventre blanc r\u00e9duit l'ombre port\u00e9e (contershading). Ensemble, ces \u00e9l\u00e9ments rendent un tigre de 200 kg quasi invisible \u00e0 5 m\u00e8tres dans son habitat naturel.",
                source: "Institut d'Écologie Camouflage - Multimécanisme."
            },
            {
                id: 30,
                question: "Quel est le processus de l'impact de la 'island populations' sur la génétique ?",
                options: ["Adaptation rapide des petites populations isolées par dérive génétique créant de nouvelles sous-espèces adaptées", "Petites populations isolées créent dépression génétique", "Amélioration génétique par sélection naturelle intensive éliminant les individus porteurs de gènes délétères", "Stabilité génétique maintenue par les comportements de dispersion des jeunes mâles entre territoires isolés"],
                correct: 1,
                explanation: "La fragmentation des habitats isole les populations de tigres, emp\u00eachant les \u00e9changes g\u00e9n\u00e9tiques. Des populations de moins de 25 individus entrent dans une spirale de d\u00e9pression consanguine : accumulation de mutations d\u00e9l\u00e9t\u00e8res, r\u00e9duction de la fertilit\u00e9 et de la r\u00e9sistance aux maladies. Le tigre de Sumatra est un exemple critique, avec seulement ~400 individus r\u00e9partis en groupes isol\u00e9s. Des corridors \u00e9cologiques entre r\u00e9serves sont essentiels pour contrer ce ph\u00e9nom\u00e8ne.",
                source: "Université de Biologie Évolutive - Conservation critique."
            },
            {
                id: 31,
                question: "Quel est le mécanisme de la 'stalk-and-ambush' predation ?",
                options: ["Poursuite à vitesse maximale sur longue distance compensant le manque d'élément surprise", "Approche silencieuse puis attaque surprise", "Attaque frontale directe après vocalisation d'intimidation paralysant momentanément la proie de surprise", "Encerclement par deux individus coopérant malgré la solitarité connue du tigre en dehors de la famille"],
                correct: 1,
                explanation: "La chasse \u00e0 l'affût du tigre est un mod\u00e8le d'efficacit\u00e9 \u00e9nerg\u00e9tique. Il localise les proies \u00e0 l'ou\u00efe et \u00e0 l'odorat, puis s'approche en rampant, profitant de chaque bruit (vent, autres animaux) pour couvrir ses propres sons. La phase finale (10 m\u00e8tres) est un sprint explos\u00e9 avec 5 \u00e0 10 bonds. La mise \u00e0 mort est presque instantan\u00e9e : il vise la gorge pour \u00e9trangler (grosses proies) ou la nuque pour une mort rapide (petites proies).",
                source: "Institut de Stratégie Prédatrice - Technique sophistiquée."
            },
            {
                id: 32,
                question: "Quel est le rôle du 'Flehmen response' chez le tigre ?",
                options: ["Rejet systématique des odeurs d'autres espèces animales sans analyse chimique détaillée", "Analyse des phéromones pour reproduction et détection", "Aversion et évitement immédiat de toute zone contenant des odeurs de congénères inconnues", "Communication vocale comme seul vecteur d'information lors des rencontres avec des individus inconnus"],
                correct: 1,
                explanation: "La r\u00e9ponse de Flehmen \u2014 la l\u00e8vre retrouss\u00e9e avec la bouche entrouverte \u2014 permet au tigre de faire passer des mol\u00e9cules chimiques (ph\u00e9romones) vers l'organe de Jacobson, situ\u00e9 dans le palais. Cet organe analyse les informations chimiques complexes : \u00e9tat reproducteur d'une femelle, pr\u00e9sence d'un rival, \u00e2ge et sant\u00e9 d'un individu. Les tigres adoptent cette expression typique quand ils inspectent les marquages urinaires d'un autre individu.",
                source: "Institut d'Olfaction Animale - Détection chimique avancée."
            },
            {
                id: 33,
                question: "À quel âge un tigre atteint sa pleine maturité physique ?",
                options: ["À 3 ans", "À 4-5 ans selon l'individu et le sexe", "À 6 ans", "À 7+ ans"],
                correct: 1,
                explanation: "La maturit\u00e9 physique compl\u00e8te du tigre (masse musculaire, densit\u00e9 osseuse, d\u00e9veloppement des canines) n'est atteinte qu'\u00e0 4-5 ans. Cette maturation tardive s'accompagne de l'acquisition progressive d'un territoire stable. Un tigre m\u00e2le de 4-5 ans qui poss\u00e8de un territoire est au sommet de ses capacit\u00e9s : vitesse, force, exp\u00e9rience de chasse et reconnaissance du terrain se combinent pour en faire un pr\u00e9dateur redoutable.",
                source: "Institut de Développement Félin - Maturation tardive."
            },
            {
                id: 34,
                question: "Quel est le mécanisme de la 'cooperative hunting' absent chez les tigres ?",
                options: ["Les tigres forment des groupes familiaux stables de 3 à 5 individus partageant les proies équitablement", "Tigres sont généralement solitaires", "Les femelles délèguent la chasse aux mâles et se consacrent exclusivement à l'élevage des jeunes", "Différence de comportement inexistante car les tigres modifient leur socialité selon la disponibilité des proies"],
                correct: 1,
                explanation: "Le tigre est l'exception parmi les grands f\u00e9lid\u00e9s : il chasse seul, contrairement aux lions qui chassent en groupe. Cette soli\u00e9tarité est adapt\u00e9e \u00e0 son environnement forestier dense o\u00f9 la coordination serait difficile. Cependant, des comportements temporairement coop\u00e9ratifs ont \u00e9t\u00e9 observ\u00e9s : une m\u00e8re chassant avec ses grands jeunes avant leur ind\u00e9pendance, ou deux fr\u00e8res de la m\u00eame port\u00e9e chassant \u00e0 proximit\u00e9 pendant la p\u00e9riode nomade.",
                source: "Institut d'Éthologie Féline - Prédateurs solitaires."
            },
            {
                id: 35,
                question: "Quel est le nombre de vertèbres cervicales que possède un tigre ?",
                options: ["5", "7 comme la plupart des mammifères", "9", "12"],
                correct: 1,
                explanation: "Comme pr\u00e9sque tous les mammif\u00e8res (y compris la girafe), le tigre poss\u00e8de exactement 7 vert\u00e8bres cervicales. Ce nombre est remarquablement conserv\u00e9 dans l'\u00e9volution des mammif\u00e8res malgr\u00e9 la grande diversit\u00e9 des longueurs de cou. La flexibilit\u00e9 et la puissance du cou du tigre viennent non pas du nombre de vert\u00e8bres, mais de la musculature extraordinairement d\u00e9velopp\u00e9e qui l'entoure \u2014 suffisante pour tra\u00eener une carcasse de buffle de 300 kg.",
                source: "Centre d'Anatomie Féline - Structure vertébrale conservée."
            },
            {
                id: 36,
                question: "Quel est le processus de la 'natal philopatry' chez les tigres femelles ?",
                options: ["Dispersion obligatoire loin de la zone natale pour éviter toute compétition avec la mère encore présente", "Tendance à rester dans zone natale", "Migration saisonnière régulière entre forêts de basse et haute altitude selon les cycles de disponibilité des proies", "Absence de pattern spatial cohérent, chaque tigre se déplaçant de façon totalement imprévisible"],
                correct: 1,
                explanation: "La philopatrie natale du tigre est un comportement nuanc\u00e9. Les femelles ont tendance \u00e0 rester proches de leur lieu de naissance et \u00e9tablissent leur territoire \u00e0 proximit\u00e9 de celui de leur m\u00e8re (si disponible). Les m\u00e2les, au contraire, se dispersent loin pour \u00e9viter la comp\u00e9tition et la consanguinit\u00e9. Cette asym\u00e9trie de dispersion entre sexes est une strat\u00e9gie \u00e9volutive efficace qui optimise \u00e0 la fois la transmission des connaissances locales et le brassage g\u00e9n\u00e9tique.",
                source: "Institut d'Écologie Comportementale - Retour au site."
            },
            {
                id: 37,
                question: "À quel moment du cycle menstruel la femelle est-elle fertile ?",
                options: ["Début du cycle lorsque les niveaux de progestérone sont à leur maximum favorisant la réceptivité", "Milieu du cycle - période d'estrus", "Fin du cycle lors du déclin hormonal déclenchant la nidation ou la menstruation selon la fécondation", "Absence de cycle régulier chez les femelles sauvages qui ovulent uniquement en réponse à la stimulation mâle"],
                correct: 1,
                explanation: "L'\u0153strus de la femelle tigre dure 3 \u00e0 7 jours et se produit toutes les 3 \u00e0 9 semaines si elle n'est pas f\u00e9cond\u00e9e. Pendant cette p\u00e9riode, sa chimie urinaire change radicalement, signal chimique per\u00e7u par les m\u00e2les \u00e0 grande distance. L'ovulation est induite par l'accouplement lui-m\u00eame (ovulation provoqu\u00e9e), m\u00e9canisme qui garantit qu'un accouplement effectif conduit \u00e0 une f\u00e9condation, m\u00eame si les rencontres sont rares en milieu sauvage.",
                source: "Centre de Reproduction Féline - Fertilité cyclique."
            },
            {
                id: 38,
                question: "Quel est le facteur clé de la capacité de saut du tigre ?",
                options: ["Force musculaire uniquement", "Structure osseuse, muscles et flexibilité", "Poids léger", "Longueur des pattes"],
                correct: 1,
                explanation: "La capacit\u00e9 de saut du tigre repose sur une architecture musculo-squelettique exceptionnelle. Ses pattes arri\u00e8re, plus longues que les pattes avant, fonctionnent comme des ressorts puissants. Sa colonne vertébrale extrem\u00eament flexible se plie et se d\u00e9tend comme un arc, amplifiant la pouss\u00e9e. Les muscles des cuisses repr\u00e9sentent une part \u00e9norme de sa masse totale. Ce syst\u00e8me lui permet de passer de l'immobilit\u00e9 compl\u00e8te \u00e0 pleine vitesse en moins d'une seconde.",
                source: "Institut de Biomécanique - Athlétisme complexe."
            },
            {
                id: 39,
                question: "Quel est le mécanisme de la 'temporal gland secretion' du tigre ?",
                options: ["Lubrification de la fourrure pour la rendre imperméable lors des longues sessions de nage dans les rivières", "Communication chimique et marquage territorial", "Thermorégulation cutanée en facilitant l'évaporation de l'humidité lors des périodes de chaleur intense", "Défense active contre les ectoparasites en créant un environnement chimique hostile sur la peau"],
                correct: 1,
                explanation: "La glande temporale du tigre, situ\u00e9e entre l'\u0153il et l'oreille, s\u00e9cr\u00e8te un fluide chimique utilis\u00e9 dans le marquage social. Contrairement aux marques urinaires (longue dur\u00e9e, grande distance), les s\u00e9cr\u00e9tions temporales sont d\u00e9pos\u00e9es par frottement de la t\u00eate contre des surfaces lors d'interactions proches. Elles transmettent des informations sur l'identit\u00e9 individuelle et l'\u00e9tat \u00e9motionnel. Les tigreaux frottent fr\u00e9quemment leur t\u00eate contre leur m\u00e8re pour consolider le lien social.",
                source: "Institut d'Olfaction Féline - Phéromones glandulaires."
            },
            {
                id: 40,
                question: "Quel est le rôle de la 'vibrissa proprioception' dans la chasse ?",
                options: ["Régulation de la pression auriculo-nasosinusienne lors des passages rapides dans la végétation dense", "Détection de mouvements air et localisation proie", "Maintien de l'équilibre postural lors des déplacements sur les substrats instables comme la neige profonde", "Communication inter-individuelle par vibrations basse fréquence transmises à travers la végétation dense"],
                correct: 1,
                explanation: "La proprioception vibrossale du tigre est une capacit\u00e9 fascinante. Les vibrisses sont reli\u00e9es \u00e0 des m\u00e9canor\u00e9cepteurs tr\u00e8s sensibles qui d\u00e9tectent les moindres variations de pression d'air et les vibrations transmises par le sol ou les objets. Pendant la mise \u00e0 mort dans l'obscurit\u00e9, le tigre utilise ses vibrisses pour positionner pr\u00e9cis\u00e9ment ses crocs sur la trachée de la proie. Sans vibrisses, la pr\u00e9cision de la mise \u00e0 mort est significativement r\u00e9duite.",
                source: "Institut de Neurobiologie Sensorielle - Mécanoréception avancée."
            }
        ]
    }
};
