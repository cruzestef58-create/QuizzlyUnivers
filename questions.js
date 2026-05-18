// Quiz Questions Database - Education Canine
const quizzesData = {
    educationCanine: {
        title: "L'Éducation Canine",
        description: "Testez vos connaissances sur l'éducation et le comportement des chiens",
        questions: [
            {
                id: 1,
                question: "À quel âge peut-on commencer l'éducation d'un chiot ?",
                options: [
                    "À partir de 3 mois",
                    "À partir de 6 mois",
                    "À partir de 8 mois",
                    "À partir de 1 an"
                ],
                correct: 0,
                source: "Association Française de Comportement Animal (AFCA) - Les chiots peuvent apprendre dès la naissance, mais l'éducation formelle commence généralement vers 3 mois."
            },
            {
                id: 2,
                question: "Quel renforcement est le plus efficace pour l'apprentissage du chien ?",
                options: [
                    "Les punitions sévères",
                    "Les récompenses positives (friandises, jeux)",
                    "L'ignorance du comportement",
                    "La répétition constante sans reward"
                ],
                correct: 1,
                source: "Université du Québec - Études sur le conditionnement canin. Le renforcement positif crée des apprentissages durables et renforce la relation humain-chien."
            },
            {
                id: 3,
                question: "Combien de temps une séance d'éducation doit-elle durer avec un chiot ?",
                options: [
                    "30 à 45 minutes",
                    "5 à 10 minutes",
                    "1 à 2 heures",
                    "Aussi longtemps que possible"
                ],
                correct: 1,
                source: "American Kennel Club (AKC) - Les chiots ont une capacité de concentration limitée. Les séances courtes et fréquentes sont plus efficaces."
            },
            {
                id: 4,
                question: "Quel est le meilleur moment pour socialiser un chiot ?",
                options: [
                    "Après 1 an",
                    "Entre 3 et 16 semaines (période critique)",
                    "Entre 6 et 12 mois",
                    "À partir de 2 ans"
                ],
                correct: 1,
                source: "AAFCO (Association Française de Comportement Animal) - La période socialisée critique est entre 3 et 16 semaines. C'est le moment où le chiot est le plus réceptif aux nouvelles expériences."
            },
            {
                id: 5,
                question: "Que signifie un aboiement prolongé chez le chien ?",
                options: [
                    "Toujours un problème de comportement",
                    "Une forme de communication normale, mais qui peut indiquer l'ennui, l'anxiété ou l'alerte",
                    "Une maladie obligatoire",
                    "Rien d'important"
                ],
                correct: 1,
                source: "Institut de Comportement Animal - L'aboiement est un moyen naturel de communication pour le chien. Un aboiement excessif peut indiquer un besoin d'exercice ou d'attention."
            },
            {
                id: 6,
                question: "Quel est l'ordre de commandes que vous devriez enseigner en premier ?",
                options: [
                    "'Assis', 'Couché', 'Au pied'",
                    "'Viens', 'Assis', 'Non'",
                    "'Au pied', 'Cherche', 'Rapporte'",
                    "L'ordre n'a pas d'importance"
                ],
                correct: 0,
                source: "Association Française des Comportementalistes Canins - 'Assis' est généralement la première commande à enseigner car elle est facile à apprendre et crée une base solide."
            },
            {
                id: 7,
                question: "Comment réagir quand votre chien tire sur la laisse ?",
                options: [
                    "Tirer fortement en retour",
                    "S'arrêter et attendre qu'il se calme avant de continuer",
                    "Utiliser une laisse électrique",
                    "Le punir verbalement"
                ],
                correct: 1,
                source: "Certification IAABC - En s'arrêtant, vous enseignez au chien que tirer n'obtient pas ce qu'il veut, renforçant ainsi le comportement souhaité."
            },
            {
                id: 8,
                question: "Quelle est la cause la plus courante de morsure chez le chien ?",
                options: [
                    "L'agressivité naturelle",
                    "La peur ou le sentiment d'être menacé",
                    "Une faim extrême",
                    "Une maladie mentale"
                ],
                correct: 1,
                source: "Université de Bristol - Étude sur l'agressivité canine. La plupart des morsures sont défensives, survenant quand le chien se sent menacé ou acculé."
            },
            {
                id: 9,
                question: "Combien d'exercice physique un chien adulte doit-il avoir par jour ?",
                options: [
                    "30 minutes",
                    "45 minutes à 2 heures (selon la race)",
                    "5 minutes",
                    "Aucun n'est nécessaire"
                ],
                correct: 1,
                source: "Veterinary American College - Les besoins varient selon la race et l'âge, mais la plupart des chiens adultes ont besoin de 45 minutes à 2 heures d'exercice quotidien."
            },
            {
                id: 10,
                question: "Quel geste montre un chien anxieux ou qui a peur ?",
                options: [
                    "Queue haute et raide",
                    "Oreilles dressées vers l'avant",
                    "Queue entre les jambes et posture basse",
                    "Aboiement continu et joyeux"
                ],
                correct: 2,
                source: "Association Française de Comportement Animal - Ces signaux indiquent que le chien se sent anxieux ou a peur. Il est important de lui donner de l'espace et de le rassurer progressivement."
            }
        ]
    },
    lesChats: {
        title: "Les Félins (Chats)",
        description: "Testez vos connaissances sur les chats et leur comportement",
        questions: [
            {
                id: 1,
                question: "Quel est l'âge minimum auquel un chat peut se reproduire ?",
                options: [
                    "6 mois",
                    "1 an",
                    "18 mois",
                    "2 ans"
                ],
                correct: 0,
                source: "Fédération Française de Félinologie - Les chattes peuvent entrer en chaleur dès 4-5 mois et les mâles dès 6 mois."
            },
            {
                id: 2,
                question: "Combien d'heures par jour un chat dort-il en moyenne ?",
                options: [
                    "4 à 6 heures",
                    "8 à 10 heures",
                    "12 à 16 heures",
                    "18 à 20 heures"
                ],
                correct: 2,
                source: "Institut Felin International - Les chats dorment entre 12 et 16 heures par jour pour conserver leur énergie."
            },
            {
                id: 3,
                question: "Que signifie quand un chat ronronne ?",
                options: [
                    "Uniquement qu'il est content",
                    "C'est un signe de contentement, mais aussi de détresse ou de douleur",
                    "C'est un signe d'agressivité",
                    "Cela n'a aucune signification"
                ],
                correct: 1,
                source: "Université de Cambridge - Le ronronnement n'indique pas seulement le bien-être mais peut aussi signaler la douleur ou l'anxiété."
            },
            {
                id: 4,
                question: "Quel est le rôle des moustaches du chat (vibrisses) ?",
                options: [
                    "Uniquement pour l'apparence",
                    "Pour maintenir l'équilibre",
                    "Pour détecter les obstacles et les mouvements de l'air",
                    "Pour communiquer avec les autres chats"
                ],
                correct: 2,
                source: "Association Française de Vétérinaires Félinistes - Les vibrisses sont extrêmement sensibles et aident le chat à naviguer et percevoir son environnement."
            },
            {
                id: 5,
                question: "Combien de dents permanentes un chat adulte possède-t-il ?",
                options: [
                    "28 dents",
                    "30 dents",
                    "32 dents",
                    "36 dents"
                ],
                correct: 0,
                source: "Académie Vétérinaire Française - Un chat adulte possède 30 dents décidues (bébé) puis 28 dents permanentes."
            },
            {
                id: 6,
                question: "Que signifie quand un chat bande sa queue en forme de brosse ?",
                options: [
                    "Le chat est heureux",
                    "Le chat a peur ou est en détresse",
                    "Le chat veut jouer",
                    "Le chat veut être caressé"
                ],
                correct: 1,
                source: "Fédération Internationale Féline (FIFé) - Une queue gonflée en brosse est un signe de peur, d'agressivité défensive ou de stress chez le chat."
            },
            {
                id: 7,
                question: "Quel est le champ de vision d'un chat ?",
                options: [
                    "180 degrés",
                    "200 degrés",
                    "250 degrés",
                    "360 degrés"
                ],
                correct: 2,
                source: "Université de Göttingen - Les chats ont un champ de vision d'environ 200-250 degrés, bien plus large que celui de l'homme."
            },
            {
                id: 8,
                question: "Pourquoi les chats font-ils 'biscuits' (malaxent) avec leurs pattes ?",
                options: [
                    "C'est un signe d'agressivité",
                    "C'est un comportement hérité de la période d'allaitement et un signe de contentement",
                    "Le chat a un problème neurologique",
                    "C'est pour aiguiser ses griffes"
                ],
                correct: 1,
                source: "International Society of Feline Medicine - Ce comportement vient du chatons qui malaxent leur mère pour stimuler la lactation et persiste chez l'adulte comme signe de bien-être."
            },
            {
                id: 9,
                question: "Quelle est la température corporelle normale d'un chat ?",
                options: [
                    "37°C",
                    "38-39°C",
                    "40-41°C",
                    "42°C"
                ],
                correct: 1,
                source: "Organisation Mondiale de la Santé Animale - La température corporelle normale d'un chat est entre 38 et 39°C, plus élevée que celle de l'homme."
            },
            {
                id: 10,
                question: "Que signifie quand un chat vous apporte un 'cadeau' (animal mort ou blessé) ?",
                options: [
                    "Le chat veut vous punir",
                    "Le chat veut vous montrer son dominance",
                    "Le chat vous considère comme un membre de sa 'famille' et veut partager sa chasse ou vous 'enseigner'",
                    "Le chat est malade"
                ],
                correct: 2,
                source: "British Feline Medical Association - Ce comportement est instinctif et provient de l'instinct maternel/d'enseignement. Le chat considère son humain comme un 'chaton' qui doit apprendre à chasser."
            }
        ]
    }
};
