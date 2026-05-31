const champions = [
    {
        "name": "Aatrox",
        "role": "top",
        "description": "Épée des Darkin",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Aatrox.png"
    },
    {
        "name": "Ahri",
        "role": "mid",
        "description": "Renarde à neuf queues",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ahri.png"
    },
    {
        "name": "Akali",
        "role": "mid",
        "description": "Assassine rebelle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Akali.png"
    },
    {
        "name": "Akshan",
        "role": "adc",
        "description": "Sentinelle rebelle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Akshan.png"
    },
    {
        "name": "Alistar",
        "role": "top",
        "description": "Minotaure",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Alistar.png"
    },
    {
        "name": "Ambessa",
        "role": "top",
        "description": "Matriarche de guerre",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ambessa.png"
    },
    {
        "name": "Amumu",
        "role": "top",
        "description": "Momie mélancolique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Amumu.png"
    },
    {
        "name": "Anivia",
        "role": "mid",
        "description": "Cryophénix",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Anivia.png"
    },
    {
        "name": "Annie",
        "role": "mid",
        "description": "Enfant des ténèbres",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Annie.png"
    },
    {
        "name": "Aphelios",
        "role": "adc",
        "description": "Arme des Lunaris",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Aphelios.png"
    },
    {
        "name": "Ashe",
        "role": "adc",
        "description": "Archère de givre",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ashe.png"
    },
    {
        "name": "Aurelion Sol",
        "role": "mid",
        "description": "Forgeur d'étoiles",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/AurelionSol.png"
    },
    {
        "name": "Aurora",
        "role": "mid",
        "description": "Sorcière d'entre les mondes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Aurora.png"
    },
    {
        "name": "Azir",
        "role": "mid",
        "description": "Empereur des sables",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Azir.png"
    },
    {
        "name": "Bard",
        "role": "support",
        "description": "Gardien errant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Bard.png"
    },
    {
        "name": "Bel'Veth",
        "role": "top",
        "description": "Impératrice du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Belveth.png"
    },
    {
        "name": "Blitzcrank",
        "role": "top",
        "description": "Golem de vapeur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Blitzcrank.png"
    },
    {
        "name": "Brand",
        "role": "mid",
        "description": "Vengeur flamboyant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Brand.png"
    },
    {
        "name": "Braum",
        "role": "top",
        "description": "Cœur de Freljord",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Braum.png"
    },
    {
        "name": "Briar",
        "role": "top",
        "description": "Faim insatiable",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Briar.png"
    },
    {
        "name": "Caitlyn",
        "role": "adc",
        "description": "Shérif de Piltover",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Caitlyn.png"
    },
    {
        "name": "Camille",
        "role": "top",
        "description": "Ombre d'acier",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Camille.png"
    },
    {
        "name": "Cassiopeia",
        "role": "mid",
        "description": "Étreinte du serpent",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Cassiopeia.png"
    },
    {
        "name": "Cho'Gath",
        "role": "top",
        "description": "Terreur noire",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Chogath.png"
    },
    {
        "name": "Corki",
        "role": "adc",
        "description": "Artilleur téméraire",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Corki.png"
    },
    {
        "name": "Darius",
        "role": "top",
        "description": "Main de Noxus",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Darius.png"
    },
    {
        "name": "Diana",
        "role": "top",
        "description": "Mépris de la lune",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Diana.png"
    },
    {
        "name": "Dr. Mundo",
        "role": "top",
        "description": "Dément de Zaun",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/DrMundo.png"
    },
    {
        "name": "Draven",
        "role": "adc",
        "description": "Glorieux exécuteur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Draven.png"
    },
    {
        "name": "Ekko",
        "role": "mid",
        "description": "Fractureur du temps",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ekko.png"
    },
    {
        "name": "Elise",
        "role": "mid",
        "description": "Reine araignée",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Elise.png"
    },
    {
        "name": "Evelynn",
        "role": "mid",
        "description": "Démon sadique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Evelynn.png"
    },
    {
        "name": "Ezreal",
        "role": "adc",
        "description": "Explorateur prodigue",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ezreal.png"
    },
    {
        "name": "Fiddlesticks",
        "role": "mid",
        "description": "Effroi nocturne",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Fiddlesticks.png"
    },
    {
        "name": "Fiora",
        "role": "top",
        "description": "Sublime bretteuse",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Fiora.png"
    },
    {
        "name": "Fizz",
        "role": "mid",
        "description": "Filou des mers",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Fizz.png"
    },
    {
        "name": "Galio",
        "role": "top",
        "description": "Colosse",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Galio.png"
    },
    {
        "name": "Gangplank",
        "role": "top",
        "description": "Fléau des mers",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Gangplank.png"
    },
    {
        "name": "Garen",
        "role": "top",
        "description": "Force de Demacia",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Garen.png"
    },
    {
        "name": "Gnar",
        "role": "top",
        "description": "Chaînon manquant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Gnar.png"
    },
    {
        "name": "Gragas",
        "role": "top",
        "description": "Agitateur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Gragas.png"
    },
    {
        "name": "Graves",
        "role": "adc",
        "description": "Hors-la-loi",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Graves.png"
    },
    {
        "name": "Gwen",
        "role": "top",
        "description": "Couturière sacrée",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Gwen.png"
    },
    {
        "name": "Hecarim",
        "role": "top",
        "description": "Ombre de la guerre",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Hecarim.png"
    },
    {
        "name": "Heimerdinger",
        "role": "mid",
        "description": "Inventeur réputé",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Heimerdinger.png"
    },
    {
        "name": "Hwei",
        "role": "mid",
        "description": "Visionnaire",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Hwei.png"
    },
    {
        "name": "Illaoi",
        "role": "top",
        "description": "Prêtresse du kraken",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Illaoi.png"
    },
    {
        "name": "Irelia",
        "role": "top",
        "description": "Danseuse des lames",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Irelia.png"
    },
    {
        "name": "Ivern",
        "role": "support",
        "description": "Aîné de la forêt",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ivern.png"
    },
    {
        "name": "Janna",
        "role": "support",
        "description": "Avatar de l'air",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Janna.png"
    },
    {
        "name": "Jarvan IV",
        "role": "top",
        "description": "Exemple demacien",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/JarvanIV.png"
    },
    {
        "name": "Jax",
        "role": "top",
        "description": "Maître d'armes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Jax.png"
    },
    {
        "name": "Jayce",
        "role": "top",
        "description": "Protecteur du futur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Jayce.png"
    },
    {
        "name": "Jhin",
        "role": "adc",
        "description": "Virtuose",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Jhin.png"
    },
    {
        "name": "Jinx",
        "role": "adc",
        "description": "Gâchette folle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Jinx.png"
    },
    {
        "name": "K'Santé",
        "role": "top",
        "description": "Fierté de Nazumah",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/KSante.png"
    },
    {
        "name": "Kai'Sa",
        "role": "adc",
        "description": "Fille du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kaisa.png"
    },
    {
        "name": "Kalista",
        "role": "adc",
        "description": "Lance de la vengeance",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kalista.png"
    },
    {
        "name": "Karma",
        "role": "mid",
        "description": "Sagesse incarnée",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Karma.png"
    },
    {
        "name": "Karthus",
        "role": "mid",
        "description": "Liche",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Karthus.png"
    },
    {
        "name": "Kassadin",
        "role": "mid",
        "description": "Chasseur du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kassadin.png"
    },
    {
        "name": "Katarina",
        "role": "mid",
        "description": "Lame sinistre",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Katarina.png"
    },
    {
        "name": "Kayle",
        "role": "mid",
        "description": "Vertueuse",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kayle.png"
    },
    {
        "name": "Kayn",
        "role": "top",
        "description": "Faucheur de l'ombre",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kayn.png"
    },
    {
        "name": "Kennen",
        "role": "mid",
        "description": "Cœur de la tempête",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kennen.png"
    },
    {
        "name": "Kha'Zix",
        "role": "mid",
        "description": "Faucheur du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Khazix.png"
    },
    {
        "name": "Kindred",
        "role": "adc",
        "description": "Chasseurs éternels",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kindred.png"
    },
    {
        "name": "Kled",
        "role": "top",
        "description": "Cavalier colérique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Kled.png"
    },
    {
        "name": "Kog'Maw",
        "role": "adc",
        "description": "Gueule des abysses",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/KogMaw.png"
    },
    {
        "name": "LeBlanc",
        "role": "mid",
        "description": "Manipulatrice",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Leblanc.png"
    },
    {
        "name": "Lee Sin",
        "role": "top",
        "description": "Moine aveugle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/LeeSin.png"
    },
    {
        "name": "Leona",
        "role": "top",
        "description": "Aube radieuse",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Leona.png"
    },
    {
        "name": "Lillia",
        "role": "top",
        "description": "Fleur timide",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Lillia.png"
    },
    {
        "name": "Lissandra",
        "role": "mid",
        "description": "Sorcière de glace",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Lissandra.png"
    },
    {
        "name": "Lucian",
        "role": "adc",
        "description": "Purificateur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Lucian.png"
    },
    {
        "name": "Lulu",
        "role": "support",
        "description": "Sorcière féérique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Lulu.png"
    },
    {
        "name": "Lux",
        "role": "mid",
        "description": "Dame de lumière",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Lux.png"
    },
    {
        "name": "Malphite",
        "role": "top",
        "description": "Éclat du monolithe",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Malphite.png"
    },
    {
        "name": "Malzahar",
        "role": "mid",
        "description": "Prophète du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Malzahar.png"
    },
    {
        "name": "Maokai",
        "role": "top",
        "description": "Tréant torturé",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Maokai.png"
    },
    {
        "name": "Maître Yi",
        "role": "top",
        "description": "Fine lame Wuju",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/MasterYi.png"
    },
    {
        "name": "Mel",
        "role": "mid",
        "description": "Reflet de l'âme",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Mel.png"
    },
    {
        "name": "Milio",
        "role": "support",
        "description": "Douce flamme",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Milio.png"
    },
    {
        "name": "Miss Fortune",
        "role": "adc",
        "description": "Chasseuse de primes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/MissFortune.png"
    },
    {
        "name": "Mordekaiser",
        "role": "top",
        "description": "Revenant de fer",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Mordekaiser.png"
    },
    {
        "name": "Morgana",
        "role": "support",
        "description": "Déchue",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Morgana.png"
    },
    {
        "name": "Naafiri",
        "role": "mid",
        "description": "la meute de fer",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Naafiri.png"
    },
    {
        "name": "Nami",
        "role": "support",
        "description": "Aquamancienne",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nami.png"
    },
    {
        "name": "Nasus",
        "role": "top",
        "description": "Gardien des sables",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nasus.png"
    },
    {
        "name": "Nautilus",
        "role": "top",
        "description": "Titan des profondeurs",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nautilus.png"
    },
    {
        "name": "Neeko",
        "role": "mid",
        "description": "Caméléon curieux",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Neeko.png"
    },
    {
        "name": "Nidalee",
        "role": "mid",
        "description": "Chasseresse bestiale",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nidalee.png"
    },
    {
        "name": "Nilah",
        "role": "top",
        "description": "Joie incarnée",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nilah.png"
    },
    {
        "name": "Nocturne",
        "role": "top",
        "description": "Éternel cauchemar",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nocturne.png"
    },
    {
        "name": "Nunu et Willump",
        "role": "top",
        "description": "Le Garçon et son yéti",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Nunu.png"
    },
    {
        "name": "Olaf",
        "role": "top",
        "description": "Berzerker",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Olaf.png"
    },
    {
        "name": "Orianna",
        "role": "mid",
        "description": "Demoiselle mécanique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Orianna.png"
    },
    {
        "name": "Ornn",
        "role": "top",
        "description": "Dieu de la forge volcanique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ornn.png"
    },
    {
        "name": "Pantheon",
        "role": "top",
        "description": "Lance éternelle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Pantheon.png"
    },
    {
        "name": "Poppy",
        "role": "top",
        "description": "Gardienne du marteau",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Poppy.png"
    },
    {
        "name": "Pyke",
        "role": "support",
        "description": "Éventreur des abysses",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Pyke.png"
    },
    {
        "name": "Qiyana",
        "role": "mid",
        "description": "Impératrice des éléments",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Qiyana.png"
    },
    {
        "name": "Quinn",
        "role": "adc",
        "description": "Ailes de Demacia",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Quinn.png"
    },
    {
        "name": "Rakan",
        "role": "support",
        "description": "Charmeur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Rakan.png"
    },
    {
        "name": "Rammus",
        "role": "top",
        "description": "Tatou blindé",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Rammus.png"
    },
    {
        "name": "Rek'Sai",
        "role": "top",
        "description": "Traqueuse du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/RekSai.png"
    },
    {
        "name": "Rell",
        "role": "top",
        "description": "Vierge de fer",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Rell.png"
    },
    {
        "name": "Renata Glasc",
        "role": "support",
        "description": "Baronne de la chimie",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Renata.png"
    },
    {
        "name": "Renekton",
        "role": "top",
        "description": "Dévoreur des sables",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Renekton.png"
    },
    {
        "name": "Rengar",
        "role": "mid",
        "description": "Fier traqueur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Rengar.png"
    },
    {
        "name": "Riven",
        "role": "top",
        "description": "Exilée brisée",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Riven.png"
    },
    {
        "name": "Rumble",
        "role": "top",
        "description": "Menace mécanisée",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Rumble.png"
    },
    {
        "name": "Ryze",
        "role": "mid",
        "description": "Mage runique",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ryze.png"
    },
    {
        "name": "Samira",
        "role": "adc",
        "description": "Rose du désert",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Samira.png"
    },
    {
        "name": "Sejuani",
        "role": "top",
        "description": "Fureur du nord",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Sejuani.png"
    },
    {
        "name": "Senna",
        "role": "support",
        "description": "Rédemptrice",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Senna.png"
    },
    {
        "name": "Sett",
        "role": "top",
        "description": "Patron",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Sett.png"
    },
    {
        "name": "Shaco",
        "role": "mid",
        "description": "Bouffon des ténèbres",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Shaco.png"
    },
    {
        "name": "Shen",
        "role": "top",
        "description": "Œil du crépuscule",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Shen.png"
    },
    {
        "name": "Shyvana",
        "role": "top",
        "description": "Demi-dragon",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Shyvana.png"
    },
    {
        "name": "Singed",
        "role": "top",
        "description": "Chimiste fou",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Singed.png"
    },
    {
        "name": "Sion",
        "role": "top",
        "description": "Colosse mort-vivant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Sion.png"
    },
    {
        "name": "Sivir",
        "role": "adc",
        "description": "Mercenaire du désert",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Sivir.png"
    },
    {
        "name": "Skarner",
        "role": "top",
        "description": "Souverain originel",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Skarner.png"
    },
    {
        "name": "Smolder",
        "role": "adc",
        "description": "Dragonnet flamboyant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Smolder.png"
    },
    {
        "name": "Sona",
        "role": "support",
        "description": "Virtuose de la harpe",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Sona.png"
    },
    {
        "name": "Soraka",
        "role": "support",
        "description": "Enfant des étoiles",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Soraka.png"
    },
    {
        "name": "Swain",
        "role": "mid",
        "description": "Grand général noxien",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Swain.png"
    },
    {
        "name": "Sylas",
        "role": "mid",
        "description": "Révolutionnaire déchaîné",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Sylas.png"
    },
    {
        "name": "Syndra",
        "role": "mid",
        "description": "Souveraine obscure",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Syndra.png"
    },
    {
        "name": "Séraphine",
        "role": "support",
        "description": "Chanteuse rêveuse",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Seraphine.png"
    },
    {
        "name": "Tahm Kench",
        "role": "top",
        "description": "Roi des rivières",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/TahmKench.png"
    },
    {
        "name": "Taliyah",
        "role": "mid",
        "description": "Tisseuse de pierres",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Taliyah.png"
    },
    {
        "name": "Talon",
        "role": "mid",
        "description": "Lame des ténèbres",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Talon.png"
    },
    {
        "name": "Taric",
        "role": "support",
        "description": "Bouclier de Valoran",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Taric.png"
    },
    {
        "name": "Teemo",
        "role": "adc",
        "description": "Éclaireur de Bandle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Teemo.png"
    },
    {
        "name": "Thresh",
        "role": "support",
        "description": "Garde aux chaînes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Thresh.png"
    },
    {
        "name": "Tristana",
        "role": "adc",
        "description": "Canonnière yordle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Tristana.png"
    },
    {
        "name": "Trundle",
        "role": "top",
        "description": "Roi des trolls",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Trundle.png"
    },
    {
        "name": "Tryndamere",
        "role": "top",
        "description": "Roi barbare",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Tryndamere.png"
    },
    {
        "name": "Twisted Fate",
        "role": "mid",
        "description": "Maître des cartes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/TwistedFate.png"
    },
    {
        "name": "Twitch",
        "role": "adc",
        "description": "Semeur de peste",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Twitch.png"
    },
    {
        "name": "Udyr",
        "role": "top",
        "description": "Gardien des esprits",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Udyr.png"
    },
    {
        "name": "Urgot",
        "role": "top",
        "description": "Broyeur",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Urgot.png"
    },
    {
        "name": "Varus",
        "role": "adc",
        "description": "Flèche de la vengeance",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Varus.png"
    },
    {
        "name": "Vayne",
        "role": "adc",
        "description": "Chasseresse nocturne",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Vayne.png"
    },
    {
        "name": "Veigar",
        "role": "mid",
        "description": "Seigneur des maléfices",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Veigar.png"
    },
    {
        "name": "Vel'Koz",
        "role": "mid",
        "description": "Œil du Néant",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Velkoz.png"
    },
    {
        "name": "Vex",
        "role": "mid",
        "description": "Ombre du désespoir",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Vex.png"
    },
    {
        "name": "Vi",
        "role": "top",
        "description": "Pacifieuse de Piltover",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Vi.png"
    },
    {
        "name": "Viego",
        "role": "top",
        "description": "Roi déchu",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Viego.png"
    },
    {
        "name": "Viktor",
        "role": "mid",
        "description": "Héraut de l'arcane",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Viktor.png"
    },
    {
        "name": "Vladimir",
        "role": "mid",
        "description": "Saigneur pourpre",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Vladimir.png"
    },
    {
        "name": "Volibear",
        "role": "top",
        "description": "Tempête impitoyable",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Volibear.png"
    },
    {
        "name": "Warwick",
        "role": "top",
        "description": "Fureur déchaînée de Zaun",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Warwick.png"
    },
    {
        "name": "Wukong",
        "role": "top",
        "description": "Roi des singes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/MonkeyKing.png"
    },
    {
        "name": "Xayah",
        "role": "adc",
        "description": "Rebelle",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Xayah.png"
    },
    {
        "name": "Xerath",
        "role": "mid",
        "description": "Mage suprême",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Xerath.png"
    },
    {
        "name": "Xin Zhao",
        "role": "top",
        "description": "Sénéchal de Demacia",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/XinZhao.png"
    },
    {
        "name": "Yasuo",
        "role": "top",
        "description": "Disgracié",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Yasuo.png"
    },
    {
        "name": "Yone",
        "role": "top",
        "description": "Inoublié",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Yone.png"
    },
    {
        "name": "Yorick",
        "role": "top",
        "description": "Berger des âmes",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Yorick.png"
    },
    {
        "name": "Yunara",
        "role": "adc",
        "description": "Foi inébranlable",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Yunara.png"
    },
    {
        "name": "Yuumi",
        "role": "support",
        "description": "Gardienne du Grimoire",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Yuumi.png"
    },
    {
        "name": "Zaahen",
        "role": "top",
        "description": "Incorruptible",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zaahen.png"
    },
    {
        "name": "Zac",
        "role": "top",
        "description": "Arme secrète",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zac.png"
    },
    {
        "name": "Zed",
        "role": "mid",
        "description": "Maître des ombres",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zed.png"
    },
    {
        "name": "Zeri",
        "role": "adc",
        "description": "Étincelle de Zaun",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zeri.png"
    },
    {
        "name": "Ziggs",
        "role": "mid",
        "description": "Expert des Hexplosifs",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Ziggs.png"
    },
    {
        "name": "Zilean",
        "role": "support",
        "description": "Gardien du Temps",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zilean.png"
    },
    {
        "name": "Zoé",
        "role": "mid",
        "description": "Manifestation du Crépuscule",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zoe.png"
    },
    {
        "name": "Zyra",
        "role": "mid",
        "description": "Dame aux ronces",
        "image": "https://ddragon.leagueoflegends.com/cdn/16.10.1/img/champion/Zyra.png"
    }
];


const builds = [
    {
        champion: 'Garen',
        role: 'TOP',
        items: ['Épée de Kaenic', 'Armure Abyssale', 'Manteau Spectre'],
        winrate: '54%'
    },
    {
        champion: 'Lee Sin',
        role: 'JUNGLE',
        items: ['Écaillures de Dragon', 'Flamme Bâtard', 'Gage de Tournoi'],
        winrate: '51%'
    },
    {
        champion: 'Ahri',
        role: 'MID',
        items: ['Baston', 'Bâton des Flots', 'Voile de Banshee'],
        winrate: '53%'
    },
    {
        champion: 'Ashe',
        role: 'ADC',
        items: ['Faux Infinie', 'Canon Lentille', 'Ange Gardien'],
        winrate: '52%'
    },
    {
        champion: 'Leona',
        role: 'SUPPORT',
        items: ['Cœur Gelé', 'Chevalière de Soleil', 'Égide de Feu Sacré'],
        winrate: '56%'
    }
];

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId === 'champions') {
        loadChampions();
    } else if (sectionId === 'builds') {
        loadBuilds();
    }
}

function setActiveNav(element) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    if (element) element.classList.add('active');
}

// ── Build database ─────────────────────────────────────────────────────────
// Patch 16.11.1 — images: https://ddragon.leagueoflegends.com/cdn/16.11.1/img/item/{id}.png
// IDs vérifiés via metabot.gg — items S-tier patch 26.10:
//   2517=Endless Hunger(57.9%WR)  2501=Overlord's Bloodmail(57.1%WR)  3026=Guardian Angel(60.4%WR)
//   3137=Cryptbloom(58.1%WR)      6621=Dawncore(57.7%WR)              6692=Eclipse  6333=Death's Dance
//   6610=Sundered Sky             2523=Hexoptics C44                   2524=Bandlepipes  2525=Protoplasm Harness

const PATCH = '16.11.1';

const itemNames = {
    3006:"Bottes du Berserker", 3009:"Bottes des Champions",  3020:"Bottes du Sorcier",
    3047:"Semelles Plaquées",   3111:"Bottes de Mercure",     3158:"Bottes d'Ionie",
    // S26 nouveaux items
    2501:"Overlord's Bloodmail",2510:"Dusk and Dawn",         2512:"Fiendhunter Bolts",
    2517:"Endless Hunger",      2520:"Bastionbreaker",        2522:"Actualizer",
    2523:"Hexoptics C44",       2524:"Bandlepipes",           2525:"Protoplasm Harness",
    // Items meta 16.11
    3026:"Ange Gardien",        3031:"Lame de l'Infini",      3033:"Mortal Reminder",
    3153:"Lame du Roi Déchu",  6673:"Arc-bouclier Immortel",  3072:"Soif de Sang",
    3036:"Briseur de Plaque",   3041:"Mejai's Soulstealer",   3046:"Sword of the Divine",
    3050:"Ardent Censer",       3053:"Sterak's Gage",         3065:"Esprit du Châtiment",
    3068:"Sunfire Aegis",       3071:"Briseur Noir",          3072:"Soif de Sang",
    3083:"Warmogs",             3085:"Hurricane de Runaan",   3089:"Chapeau de Rabadon",
    3091:"Esprit du Sorcier",   3094:"Rapid Firecannon",      3097:"Stormrazor",
    3100:"Lich Bane",           3102:"Voile de Banshee",      3109:"Knight's Vow",
    3116:"Orbe de Rylai",       3124:"Nashors Tooth",         3135:"Lance-Vide",
    3137:"Cryptbloom",          3143:"Randuins",              3146:"Hextech Gunblade",
    3157:"Sablier de Zhonya",   3165:"Morellonomicon",        3190:"Locket",
    3508:"Essence Reaver",      3742:"Protège-os",            3748:"Hydre Ravageuse",
    4629:"Cosmic Drive",        4632:"Orbe du Vide",          4637:"Tourments de Liandry",
    4638:"Sceptre d'Archanges", 4645:"Rabadon's Deathcap",
    6333:"Death's Dance",       6610:"Sundered Sky",          6616:"Staff of Flowing Water",
    6621:"Dawncore",            6630:"Crève-âme",             6631:"Stridebreaker",
    6632:"Divine Sunderer",     6633:"Trinity Force",         6662:"Iceborn Gauntlet",
    6672:"Galeforce",           6691:"Duskblade",             6692:"Eclipse",
    6697:"Hubris",
};

const championBuilds = {
    // ── TOP ──────────────────────────────────────────────────────────────────
    "Aatrox":      [{ label:"Patch 26.11", wr:"53%", items:[6610,2517,6333,3053,3026,3047] }],
    "Darius":      [{ label:"Patch 26.11", wr:"54%", items:[6632,2501,3071,3053,3143,3047] }],
    "Garen":       [{ label:"Patch 26.11", wr:"52%", items:[6662,3742,2501,3065,3143,3047] }],
    "Fiora":       [{ label:"Patch 26.11", wr:"52%", items:[6610,3153,2517,3071,3026,3009] }],
    "Camille":     [{ label:"Patch 26.11", wr:"52%", items:[6631,3153,3071,6333,3026,3047] }],
    "Irelia":      [{ label:"Patch 26.11", wr:"53%", items:[6673,3153,3031,3071,3143,3047] }],
    "Riven":       [{ label:"Patch 26.11", wr:"52%", items:[6610,2517,6333,3053,3026,3047] }],
    "Renekton":    [{ label:"Patch 26.11", wr:"53%", items:[6632,2501,3053,3143,3742,3047] }],
    "Sett":        [{ label:"Patch 26.11", wr:"53%", items:[6633,2501,3742,3143,3053,3047] }],
    "Ambessa":     [{ label:"Patch 26.11", wr:"52%", items:[6610,3153,2517,6333,3026,3047] }],
    "Cho'Gath":    [{ label:"Patch 26.11", wr:"54%", items:[4632,3116,2525,3065,3143,3111] }],
    "Malphite":    [{ label:"Patch 26.11", wr:"56%", items:[4632,3116,2525,3065,3143,3047] }],
    "Nasus":       [{ label:"Patch 26.11", wr:"53%", items:[6662,3742,2525,3065,3143,3047] }],
    "Ornn":        [{ label:"Patch 26.11", wr:"55%", items:[4632,3068,2525,3065,3742,3111] }],
    "Volibear":    [{ label:"Patch 26.11", wr:"53%", items:[6662,2525,3068,3065,3742,3047] }],
    "Gangplank":   [{ label:"Patch 26.11", wr:"51%", items:[6610,3031,3046,6333,3036,3009] }],
    "Gnar":        [{ label:"Patch 26.11", wr:"52%", items:[3742,2525,3143,3065,3083,3047] }],
    "Jayce":       [{ label:"Patch 26.11", wr:"51%", items:[6692,2520,3033,6630,3036,3047] }],
    "Wukong":      [{ label:"Patch 26.11", wr:"52%", items:[6631,2517,3742,3053,3143,3047] }],
    "Yasuo":       [{ label:"Patch 26.11", wr:"49%", items:[6673,3153,3031,3091,3033,3111] }],
    "Yone":        [{ label:"Patch 26.11", wr:"49%", items:[6673,3153,3031,3091,3033,3111] }],
    "Yorick":      [{ label:"Patch 26.11", wr:"53%", items:[6662,3742,2525,3065,3143,3047] }],
    "Tryndamere":  [{ label:"Patch 26.11", wr:"54%", items:[3153,6673,3031,3091,3036,3009] }],
    "Trundle":     [{ label:"Patch 26.11", wr:"53%", items:[6662,3742,2525,3053,3065,3047] }],
    "Urgot":       [{ label:"Patch 26.11", wr:"51%", items:[6631,3071,2501,3053,3143,3047] }],
    "Pantheon":    [{ label:"Patch 26.11", wr:"52%", items:[6697,2520,6692,3033,3036,3047] }],
    "Warwick":     [{ label:"Patch 26.11", wr:"52%", items:[3153,6673,6610,6333,3065,3047] }],
    "Xin Zhao":    [{ label:"Patch 26.11", wr:"52%", items:[6610,3153,2517,3742,3143,3047] }],
    "Mordekaiser": [{ label:"Patch 26.11", wr:"52%", items:[4637,3116,3157,3065,3102,3111] }],
    "Gragas":      [{ label:"Patch 26.11", wr:"51%", items:[4632,3068,3116,3065,3143,3111] }],
    "Heimerdinger":[{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3157,3102,3020] }],
    "Kennen":      [{ label:"Patch 26.11", wr:"53%", items:[4645,2510,3135,3157,3065,3020] }],
    "Quinn":       [{ label:"Patch 26.11", wr:"51%", items:[6692,2520,3033,6630,3036,3047] }],
    "Teemo":       [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3102,3020] }],
    "Dr. Mundo":   [{ label:"Patch 26.11", wr:"54%", items:[6662,3742,2525,3083,3065,3047] }],
    "Poppy":       [{ label:"Patch 26.11", wr:"53%", items:[3742,2525,3053,3065,4632,3047] }],
    "Singed":      [{ label:"Patch 26.11", wr:"53%", items:[4632,3068,3116,3065,3742,3111] }],
    "Olaf":        [{ label:"Patch 26.11", wr:"52%", items:[3153,6673,6333,3065,3742,3047] }],
    "Shen":        [{ label:"Patch 26.11", wr:"53%", items:[3748,2525,3068,3065,3742,3047] }],
    "Illaoi":      [{ label:"Patch 26.11", wr:"53%", items:[6632,2501,3053,3742,3065,3047] }],
    "Kled":        [{ label:"Patch 26.11", wr:"52%", items:[6610,2517,3071,6333,3026,3047] }],
    // ── JUNGLE ───────────────────────────────────────────────────────────────
    "Vi":          [{ label:"Patch 26.11", wr:"52%", items:[6631,2525,3742,3053,3065,3047] }],
    "Viego":       [{ label:"Patch 26.11", wr:"51%", items:[3153,6673,6610,6333,3053,3047] }],
    "Lee Sin":     [{ label:"Patch 26.11", wr:"51%", items:[6610,3153,2517,6333,3071,3047] }],
    "Kha'Zix":     [{ label:"Patch 26.11", wr:"53%", items:[6697,2520,6692,3033,3036,3047] }],
    "Rengar":      [{ label:"Patch 26.11", wr:"52%", items:[6697,2520,6692,3033,3036,3047] }],
    "Kindred":     [{ label:"Patch 26.11", wr:"51%", items:[6673,3153,3031,3046,3036,3009] }],
    "Nocturne":    [{ label:"Patch 26.11", wr:"54%", items:[6692,2520,6697,3033,3036,3047] }],
    "Master Yi":   [{ label:"Patch 26.11", wr:"52%", items:[3153,3124,3091,2512,3031,3009] }],
    "Amumu":       [{ label:"Patch 26.11", wr:"57%", items:[4632,3068,2525,3065,3143,3111] }],
    "Hecarim":     [{ label:"Patch 26.11", wr:"53%", items:[6610,3153,2517,6333,3065,3047] }],
    "Ekko":        [{ label:"Patch 26.11", wr:"52%", items:[4645,2510,3135,3157,3089,3020] }],
    "Nidalee":     [{ label:"Patch 26.11", wr:"51%", items:[4645,3135,3089,3165,3157,3020] }],
    "Graves":      [{ label:"Patch 26.11", wr:"51%", items:[6697,6692,3033,6630,3036,3047] }],
    "Fiddlesticks":[{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3157,3102,3020] }],
    "Diana":       [{ label:"Patch 26.11", wr:"52%", items:[4645,2510,3135,3089,3157,3111] }],
    "Evelynn":     [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3165,3020] }],
    "Elise":       [{ label:"Patch 26.11", wr:"51%", items:[4645,3135,3089,3157,3165,3020] }],
    "Sejuani":     [{ label:"Patch 26.11", wr:"54%", items:[4632,3742,2525,3068,3065,3111] }],
    "Jarvan IV":   [{ label:"Patch 26.11", wr:"52%", items:[6631,2525,3742,3068,3065,3047] }],
    "Shaco":       [{ label:"Patch 26.11", wr:"52%", items:[6692,2520,6630,3033,3036,3047] }],
    "Zac":         [{ label:"Patch 26.11", wr:"55%", items:[4632,3742,2525,3068,3065,3111] }],
    "Bel'Veth":    [{ label:"Patch 26.11", wr:"54%", items:[3153,3124,3091,2512,3031,3009] }],
    "Briar":       [{ label:"Patch 26.11", wr:"54%", items:[6673,3153,6610,6333,3053,3047] }],
    "Ivern":       [{ label:"Patch 26.11", wr:"52%", items:[3050,3109,2524,3190,3068,3111] }],
    "Kayn":        [{ label:"Patch 26.11", wr:"51%", items:[3153,6673,6610,6333,3071,3047] }],
    "Taliyah":     [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Wukong":      [{ label:"Patch 26.11", wr:"52%", items:[6631,2517,3742,3053,3143,3047] }],
    "Xin Zhao":    [{ label:"Patch 26.11", wr:"52%", items:[6610,3153,2517,3742,3143,3047] }],
    // ── MID ──────────────────────────────────────────────────────────────────
    "Ahri":        [{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3165,3089,3157,3020] }],
    "Akali":       [{ label:"Patch 26.11", wr:"51%", items:[3146,4645,3135,3089,3157,3020] }],
    "Zed":         [{ label:"Patch 26.11", wr:"52%", items:[6697,2520,6692,3033,3036,3047] }],
    "Syndra":      [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Lux":         [{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3157,3102,3020] }],
    "Viktor":      [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Orianna":     [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3165,3020] }],
    "Fizz":        [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3165,3020] }],
    "Katarina":    [{ label:"Patch 26.11", wr:"51%", items:[3146,4645,3135,3165,3157,3020] }],
    "Talon":       [{ label:"Patch 26.11", wr:"52%", items:[6697,2520,6692,3033,3036,3047] }],
    "Annie":       [{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3157,3165,3020] }],
    "Veigar":      [{ label:"Patch 26.11", wr:"54%", items:[4645,3135,3089,3157,3165,3020] }],
    "Xerath":      [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Ziggs":       [{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3165,3157,3020] }],
    "Cassiopeia":  [{ label:"Patch 26.11", wr:"52%", items:[2522,4645,3135,3089,3165,3020] }],
    "Azir":        [{ label:"Patch 26.11", wr:"51%", items:[4645,3135,3089,3165,3157,3020] }],
    "Galio":       [{ label:"Patch 26.11", wr:"52%", items:[4632,3068,3116,3157,3065,3111] }],
    "LeBlanc":     [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3165,3020] }],
    "Twisted Fate":[{ label:"Patch 26.11", wr:"51%", items:[4645,3135,3089,3157,3165,3020] }],
    "Zoe":         [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3165,3020] }],
    "Malzahar":    [{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3165,3157,3020] }],
    "Aurelion Sol":[{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Aurora":      [{ label:"Patch 26.11", wr:"55%", items:[4645,3135,3089,3157,3165,3020] }],
    "Qiyana":      [{ label:"Patch 26.11", wr:"51%", items:[6697,2520,6692,3033,3036,3047] }],
    "Anivia":      [{ label:"Patch 26.11", wr:"53%", items:[2522,4645,3135,3089,3065,3020] }],
    "Vladimir":    [{ label:"Patch 26.11", wr:"52%", items:[4637,3137,3135,3089,3165,3020] }],
    "Ryze":        [{ label:"Patch 26.11", wr:"51%", items:[2522,4645,3135,3089,3157,3020] }],
    "Brand":       [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Naafiri":     [{ label:"Patch 26.11", wr:"52%", items:[6697,2520,6692,3033,3036,3047] }],
    "Ekko":        [{ label:"Patch 26.11", wr:"52%", items:[4645,2510,3135,3157,3089,3020] }],
    // ── ADC ──────────────────────────────────────────────────────────────────
    "Jinx":        [{ label:"Patch 26.11", wr:"50%", items:[6673,3153,3031,3091,3036,3006] }],
    "Caitlyn":     [{ label:"Patch 26.11", wr:"52%", items:[6673,3031,2523,3046,3036,3006] }],
    "Ashe":        [{ label:"Patch 26.11", wr:"52%", items:[3031,6673,3153,3097,3036,3009] }],
    "Ezreal":      [{ label:"Patch 26.11", wr:"51%", items:[3508,3094,3046,3031,3036,3006] }],
    "Draven":      [{ label:"Patch 26.11", wr:"52%", items:[3153,6673,3072,3031,3036,3006] }],
    "Jhin":        [{ label:"Patch 26.11", wr:"53%", items:[6673,3031,3097,3046,3033,3006] }],
    "Vayne":       [{ label:"Patch 26.11", wr:"51%", items:[3153,6673,3097,3031,3091,3009] }],
    "Miss Fortune":[{ label:"Patch 26.11", wr:"52%", items:[6673,3031,2523,3046,3036,3006] }],
    "Lucian":      [{ label:"Patch 26.11", wr:"51%", items:[6692,3031,3094,3046,3036,3006] }],
    "Tristana":    [{ label:"Patch 26.11", wr:"53%", items:[6673,3153,3031,2512,3036,3006] }],
    "Sivir":       [{ label:"Patch 26.11", wr:"52%", items:[6673,3031,2523,3046,3036,3006] }],
    "Kog'Maw":     [{ label:"Patch 26.11", wr:"53%", items:[3124,3091,2512,6673,3046,3009] }],
    "Xayah":       [{ label:"Patch 26.11", wr:"52%", items:[6673,3031,2523,3046,3036,3006] }],
    "Aphelios":    [{ label:"Patch 26.11", wr:"51%", items:[6673,3031,2523,3046,3036,3006] }],
    "Kalista":     [{ label:"Patch 26.11", wr:"51%", items:[3124,3091,2512,6673,3031,3009] }],
    "Samira":      [{ label:"Patch 26.11", wr:"52%", items:[3153,6673,3031,3097,3143,3006] }],
    "Twitch":      [{ label:"Patch 26.11", wr:"52%", items:[6673,3124,3091,2512,3031,3009] }],
    "Varus":       [{ label:"Patch 26.11", wr:"51%", items:[6673,3031,2523,3046,3033,3006] }],
    "Akshan":      [{ label:"Patch 26.11", wr:"51%", items:[6673,3031,2523,3046,3036,3006] }],
    "Nilah":       [{ label:"Patch 26.11", wr:"52%", items:[3153,6673,3031,2512,3036,3006] }],
    "Yunara":      [{ label:"Patch 26.11", wr:"51%", items:[3124,3091,2512,6673,3046,3009] }],
    "Senna":       [{ label:"Patch 26.11", wr:"51%", items:[3031,3094,3046,6673,3036,3006] }],
    "Zeri":        [{ label:"Patch 26.11", wr:"51%", items:[6673,2512,3031,3046,3036,3009] }],
    // ── SUPPORT ──────────────────────────────────────────────────────────────
    "Thresh":      [{ label:"Patch 26.11", wr:"53%", items:[3109,3190,2524,3068,3143,3111] }],
    "Lulu":        [{ label:"Patch 26.11", wr:"54%", items:[3050,3109,3190,3011,2524,3158] }],
    "Nautilus":    [{ label:"Patch 26.11", wr:"55%", items:[4632,3742,2525,3068,3065,3111] }],
    "Leona":       [{ label:"Patch 26.11", wr:"56%", items:[4632,3742,2525,3068,3143,3047] }],
    "Blitzcrank":  [{ label:"Patch 26.11", wr:"53%", items:[4632,3742,2525,3068,3065,3111] }],
    "Janna":       [{ label:"Patch 26.11", wr:"55%", items:[6621,3050,3109,3190,2524,3158] }],
    "Soraka":      [{ label:"Patch 26.11", wr:"55%", items:[6621,3050,3109,3116,2524,3158] }],
    "Nami":        [{ label:"Patch 26.11", wr:"54%", items:[6621,3050,3109,3011,2524,3158] }],
    "Bard":        [{ label:"Patch 26.11", wr:"52%", items:[4632,3068,3116,3109,3065,3111] }],
    "Zilean":      [{ label:"Patch 26.11", wr:"57%", items:[4632,3116,3157,3190,3065,3158] }],
    "Morgana":     [{ label:"Patch 26.11", wr:"53%", items:[4632,3116,3157,3190,2524,3158] }],
    "Zyra":        [{ label:"Patch 26.11", wr:"56%", items:[4632,3116,3157,3190,3065,3158] }],
    "Yuumi":       [{ label:"Patch 26.11", wr:"51%", items:[6621,3050,3109,3011,2524,3158] }],
    "Renata Glasc":[{ label:"Patch 26.11", wr:"53%", items:[4632,3116,3157,3190,3065,3158] }],
    "Seraphine":   [{ label:"Patch 26.11", wr:"53%", items:[4645,3135,3089,3165,3157,3020] }],
    "Vel'Koz":     [{ label:"Patch 26.11", wr:"52%", items:[4645,3135,3089,3157,3165,3020] }],
    "Brand":       [{ label:"Patch 26.11 Sup", wr:"52%", items:[4645,3135,3089,3165,3157,3020] }],
    "Pyke":        [{ label:"Patch 26.11", wr:"52%", items:[6697,2520,6692,3033,3036,3047] }],
    "Karma":       [{ label:"Patch 26.11", wr:"52%", items:[6621,3050,3109,3190,2524,3158] }],
    "Sona":        [{ label:"Patch 26.11", wr:"55%", items:[6621,3050,3109,3190,2524,3158] }],
    "Rakan":       [{ label:"Patch 26.11", wr:"53%", items:[3109,3190,2524,4632,3742,3111] }],
    "Milio":       [{ label:"Patch 26.11", wr:"54%", items:[6621,3050,3109,3011,2524,3158] }],
    "Rell":        [{ label:"Patch 26.11", wr:"53%", items:[4632,3742,2524,2525,3068,3047] }],
    "Alistar":     [{ label:"Patch 26.11", wr:"54%", items:[4632,3742,2524,2525,3068,3047] }],
    "Braum":       [{ label:"Patch 26.11", wr:"53%", items:[4632,3742,2524,2525,3068,3047] }],
};

const roleFallback = {
    top:     [{ label:"Patch 16.11", wr:"50%", items:[6610,2517,6333,3053,3065,3047] }],
    jungle:  [{ label:"Patch 16.11", wr:"50%", items:[6610,2517,6333,3742,3065,3047] }],
    mid:     [{ label:"Patch 16.11", wr:"50%", items:[4645,3135,3089,3157,3165,3020] }],
    adc:     [{ label:"Patch 16.11", wr:"50%", items:[6672,3031,2523,3046,3036,3009] }],
    support: [{ label:"Patch 16.11", wr:"50%", items:[6621,3109,3190,2524,3065,3111] }],
};

function getItemName(id) {
    return itemNames[id] || `Item ${id}`;
}

function getChampionBuilds(champion) {
    return championBuilds[champion.name] || roleFallback[champion.role] || roleFallback.mid;
}

// ── Rune database (patch 16.11.1) ────────────────────────────────────────────
// Images DDragon officielles — IDs vérifiés metabot.gg
// S-tier runes 26.10: Gardien(51.6%), Conditioning(51.4%), Approach Velocity(51.3%),
//   Time Warp Tonic(51%), Glacial Augment(50.9%), Aéry(50.8%), Font of Life(50.8%)
// A-tier: Premier Coup(50.7%), Cash Back(50.6%), Tempête Montante(50.6%), Grasp(50.6%),
//   Aftershock(50.5%), Revitalize(50.4%), Overgrowth(50.4%), Biscuit(50.4%), Legend:Haste(50.4%)

const RUNE_BASE = 'https://ddragon.leagueoflegends.com/cdn/img/perk-images';

const runeData = {
    // KEYSTONES
    8005: { name:'Press the Attack',        img:`${RUNE_BASE}/Styles/Precision/PressTheAttack/PressTheAttack.png`,             tree:'Précision' },
    8008: { name:'Tempo Mortel',            img:`${RUNE_BASE}/Styles/Precision/LethalTempo/LethalTempoTemp.png`,                tree:'Précision' },
    8021: { name:'Fleet Footwork',          img:`${RUNE_BASE}/Styles/Precision/FleetFootwork/FleetFootwork.png`,                tree:'Précision' },
    8010: { name:'Conquérant',              img:`${RUNE_BASE}/Styles/Precision/Conqueror/Conqueror.png`,                       tree:'Précision' },
    8112: { name:'Électrocution',           img:`${RUNE_BASE}/Styles/Domination/Electrocute/Electrocute.png`,                  tree:'Domination' },
    8128: { name:'Moisson Noire',           img:`${RUNE_BASE}/Styles/Domination/DarkHarvest/DarkHarvest.png`,                  tree:'Domination' },
    9923: { name:'Grêle de Lames',          img:`${RUNE_BASE}/Styles/Domination/HailOfBlades/HailOfBlades.png`,                tree:'Domination' },
    8214: { name:"Invocation d'Aéry",       img:`${RUNE_BASE}/Styles/Sorcery/SummonAery/SummonAery.png`,                      tree:'Sorcellerie' },
    8229: { name:'Comète Arcane',           img:`${RUNE_BASE}/Styles/Sorcery/ArcaneComet/ArcaneComet.png`,                    tree:'Sorcellerie' },
    8230: { name:"Stormraider's Surge",     img:`${RUNE_BASE}/Styles/Sorcery/PhaseRush/StormraidersSurgeRuneIcon2.png`,        tree:'Sorcellerie' },
    8992: { name:'Deathfire Touch',         img:`${RUNE_BASE}/Styles/Sorcery/ArcaneComet/ArcaneComet.png`,                    tree:'Sorcellerie' },
    8437: { name:'Étreinte du Mort-Vivant', img:`${RUNE_BASE}/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png`,        tree:'Ténacité' },
    8439: { name:'Réplique',                img:`${RUNE_BASE}/Styles/Resolve/VeteranAftershock/VeteranAftershock.png`,         tree:'Ténacité' },
    8465: { name:'Gardien',                 img:`${RUNE_BASE}/Styles/Resolve/Guardian/Guardian.png`,                           tree:'Ténacité' },
    8351: { name:'Glacial Augment',         img:`${RUNE_BASE}/Styles/Inspiration/GlacialAugment/GlacialAugment.png`,           tree:'Inspiration' },
    8360: { name:'Grimoire Descellé',       img:`${RUNE_BASE}/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png`,     tree:'Inspiration' },
    8369: { name:'Premier Coup',            img:`${RUNE_BASE}/Styles/Inspiration/FirstStrike/FirstStrike.png`,                 tree:'Inspiration' },
    // PRÉCISION secondaires
    9101: { name:'Absorber la Vie',         img:`${RUNE_BASE}/Styles/Precision/AbsorbLife/AbsorbLife.png`,                     tree:'Précision' },
    9111: { name:'Triomphe',                img:`${RUNE_BASE}/Styles/Precision/Triumph.png`,                                   tree:'Précision' },
    8009: { name:"Présence d'Esprit",       img:`${RUNE_BASE}/Styles/Precision/PresenceOfMind/PresenceOfMind.png`,             tree:'Précision' },
    9104: { name:'Légende : Alacrité',      img:`${RUNE_BASE}/Styles/Precision/LegendAlacrity/LegendAlacrity.png`,             tree:'Précision' },
    9105: { name:'Légende : Célérité',      img:`${RUNE_BASE}/Styles/Precision/LegendHaste/LegendHaste.png`,                   tree:'Précision' },
    9103: { name:'Légende : Lignée',        img:`${RUNE_BASE}/Styles/Precision/LegendBloodline/LegendBloodline.png`,           tree:'Précision' },
    8014: { name:'Coup de Grâce',           img:`${RUNE_BASE}/Styles/Precision/CoupDeGrace/CoupDeGrace.png`,                   tree:'Précision' },
    8017: { name:'Destruction',             img:`${RUNE_BASE}/Styles/Precision/CutDown/CutDown.png`,                           tree:'Précision' },
    8299: { name:'Dernier Recours',         img:`${RUNE_BASE}/Styles/Sorcery/LastStand/LastStand.png`,                         tree:'Précision' },
    // DOMINATION secondaires
    8126: { name:'Tir Vicieux',             img:`${RUNE_BASE}/Styles/Domination/CheapShot/CheapShot.png`,                     tree:'Domination' },
    8139: { name:'Goût du Sang',            img:`${RUNE_BASE}/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png`,    tree:'Domination' },
    8143: { name:'Impact Soudain',          img:`${RUNE_BASE}/Styles/Domination/SuddenImpact/SuddenImpact.png`,                tree:'Domination' },
    8135: { name:'Chasseur de Trésors',     img:`${RUNE_BASE}/Styles/Domination/TreasureHunter/TreasureHunter.png`,            tree:'Domination' },
    8105: { name:'Chasseur Infatigable',    img:`${RUNE_BASE}/Styles/Domination/RelentlessHunter/RelentlessHunter.png`,        tree:'Domination' },
    8106: { name:'Chasseur Ultime',         img:`${RUNE_BASE}/Styles/Domination/UltimateHunter/UltimateHunter.png`,            tree:'Domination' },
    // SORCELLERIE secondaires
    8226: { name:'Flux de Mana',            img:`${RUNE_BASE}/Styles/Sorcery/ManaflowBand/ManaflowBand.png`,                   tree:'Sorcellerie' },
    8210: { name:'Transcendance',           img:`${RUNE_BASE}/Styles/Sorcery/Transcendence/Transcendence.png`,                 tree:'Sorcellerie' },
    8233: { name:'Focalisation Absolue',    img:`${RUNE_BASE}/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png`,                 tree:'Sorcellerie' },
    8237: { name:'Brûlure',                 img:`${RUNE_BASE}/Styles/Sorcery/Scorch/Scorch.png`,                               tree:'Sorcellerie' },
    8236: { name:'Tempête Montante',        img:`${RUNE_BASE}/Styles/Sorcery/GatheringStorm/GatheringStorm.png`,               tree:'Sorcellerie' },
    // TÉNACITÉ secondaires — S-tier: Conditioning(51.4%), Approach Velocity(51.3%), Overgrowth(50.4%), Revitalize(50.4%)
    8446: { name:'Démolir',                 img:`${RUNE_BASE}/Styles/Resolve/Demolish/Demolish.png`,                           tree:'Ténacité' },
    8463: { name:'Source de Vie',           img:`${RUNE_BASE}/Styles/Resolve/FontOfLife/FontOfLife.png`,                       tree:'Ténacité' },
    8401: { name:'Parade du Bouclier',      img:`${RUNE_BASE}/Styles/Resolve/MirrorShell/MirrorShell.png`,                     tree:'Ténacité' },
    8429: { name:'Conditionnement ★',       img:`${RUNE_BASE}/Styles/Resolve/Conditioning/Conditioning.png`,                   tree:'Ténacité' },
    8444: { name:'Second Souffle',          img:`${RUNE_BASE}/Styles/Resolve/SecondWind/SecondWind.png`,                       tree:'Ténacité' },
    8473: { name:'Blindage Osseux',         img:`${RUNE_BASE}/Styles/Resolve/BonePlating/BonePlating.png`,                     tree:'Ténacité' },
    8451: { name:'Surcroissance ★',         img:`${RUNE_BASE}/Styles/Resolve/Overgrowth/Overgrowth.png`,                       tree:'Ténacité' },
    8453: { name:'Revitaliser ★',           img:`${RUNE_BASE}/Styles/Resolve/Revitalize/Revitalize.png`,                       tree:'Ténacité' },
    8410: { name:'Vélocité Adaptable ★',   img:`${RUNE_BASE}/Styles/Resolve/ApproachVelocity/ApproachVelocity.png`,           tree:'Ténacité' },
    // INSPIRATION secondaires — S-tier: Cash Back(50.6%), Time Warp Tonic(51%), Biscuit(50.4%)
    8306: { name:'Flashtraption',           img:`${RUNE_BASE}/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png`,tree:'Inspiration' },
    8304: { name:'Chaussures Magiques',     img:`${RUNE_BASE}/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png`,         tree:'Inspiration' },
    8321: { name:'Cash Back ★',             img:`${RUNE_BASE}/Styles/Inspiration/CashBack/CashBack2.png`,                      tree:'Inspiration' },
    8313: { name:'Timing Parfait',          img:`${RUNE_BASE}/Styles/Inspiration/PerfectTiming/AlchemistCabinet.png`,          tree:'Inspiration' },
    8352: { name:'Tonique Temporel ★',      img:`${RUNE_BASE}/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png`,             tree:'Inspiration' },
    8345: { name:'Livraison de Biscuits ★', img:`${RUNE_BASE}/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png`,         tree:'Inspiration' },
    8347: { name:'Perspicacité Cosmique',   img:`${RUNE_BASE}/Styles/Inspiration/CosmicInsight/CosmicInsight.png`,             tree:'Inspiration' },
    8316: { name:'Jack of All Trades',      img:`${RUNE_BASE}/Styles/Inspiration/JackOfAllTrades/JackofAllTrades2.png`,        tree:'Inspiration' },
    // FRAGMENTS DE STATS
    5008: { name:'Force Adaptive',          img:`${RUNE_BASE}/StatMods/StatModsAdaptiveForceIcon.png`,                         tree:'Stats' },
    5005: { name:"Vitesse d'Attaque",       img:`${RUNE_BASE}/StatMods/StatModsAttackSpeedIcon.png`,                           tree:'Stats' },
    5007: { name:'Hâte de Compétence',      img:`${RUNE_BASE}/StatMods/StatModsCDRScalingIcon.png`,                            tree:'Stats' },
    5002: { name:'Armure',                  img:`${RUNE_BASE}/StatMods/StatModsArmorIcon.png`,                                 tree:'Stats' },
    5003: { name:'Résistance Magique',      img:`${RUNE_BASE}/StatMods/StatModsMagicResIcon.png`,                              tree:'Stats' },
    5001: { name:'Points de Vie',           img:`${RUNE_BASE}/StatMods/StatModsHealthScalingIcon.png`,                         tree:'Stats' },
};

const treeIcons = {
    'Précision':   `${RUNE_BASE}/Styles/7201_Precision.png`,
    'Domination':  `${RUNE_BASE}/Styles/7200_Domination.png`,
    'Sorcellerie': `${RUNE_BASE}/Styles/7202_Sorcery.png`,
    'Ténacité':    `${RUNE_BASE}/Styles/7204_Resolve.png`,
    'Inspiration': `${RUNE_BASE}/Styles/7203_Whimsy.png`,
};

const championRunes = {
    // ── TOP ───────────────────────────────────────────────────────────────────
    "Aatrox":   [{ label:"16.11 Conquérant",    wr:"53%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Darius":   [{ label:"16.11 Conquérant",    wr:"54%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Garen":    [{ label:"16.11 Conquérant",    wr:"54%", keystone:8010, primary:[9111,9104,8014],  secondary:[8451,8444], shards:[5008,5002,5001] }],
    "Fiora":    [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8017],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Camille":  [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8226,8210], shards:[5008,5002,5003] }],
    "Irelia":   [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Riven":    [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8226,8233], shards:[5008,5002,5003] }],
    "Renekton": [{ label:"16.11 Conquérant",    wr:"53%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Sett":     [{ label:"16.11 Conquérant",    wr:"53%", keystone:8010, primary:[9111,9104,8299],  secondary:[8451,8429], shards:[5008,5002,5001] }],
    "Ambessa":  [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Nasus":    [{ label:"16.11 Grasp",         wr:"53%", keystone:8437, primary:[8446,8463,8451],  secondary:[9105,9103], shards:[5008,5002,5001] }],
    "Cho'Gath": [{ label:"16.11 Grasp",         wr:"54%", keystone:8437, primary:[8446,8463,8451],  secondary:[8210,8237], shards:[5008,5002,5001] }],
    "Malphite": [{ label:"16.11 Aftershock",    wr:"56%", keystone:8439, primary:[8446,8473,8451],  secondary:[8229,8237], shards:[5007,5002,5001] }],
    "Ornn":     [{ label:"16.11 Aftershock",    wr:"55%", keystone:8439, primary:[8446,8473,8451],  secondary:[8210,8226], shards:[5007,5002,5001] }],
    "Volibear": [{ label:"16.11 Aftershock",    wr:"53%", keystone:8439, primary:[8446,8473,8451],  secondary:[9111,9104], shards:[5008,5002,5001] }],
    "Gangplank":[{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8226,8237], shards:[5008,5005,5003] }],
    "Gnar":     [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Wukong":   [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8446,8429], shards:[5008,5002,5001] }],
    "Yasuo":    [{ label:"16.11 Grêle de Lames",wr:"50%", keystone:9923, primary:[8139,8143,8106],  secondary:[9104,8014], shards:[5008,5005,5003] }],
    "Yone":     [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Tryndamere":[{ label:"16.11 Conquérant",   wr:"52%", keystone:8010, primary:[9101,9104,8299],  secondary:[8473,8429], shards:[5008,5005,5003] }],
    "Pantheon": [{ label:"16.11 Électrocution", wr:"52%", keystone:8112, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Mordekaiser":[{ label:"16.11 Stormraider", wr:"52%", keystone:8230, primary:[8226,8210,8237],  secondary:[8473,8451], shards:[5008,5002,5001] }],
    "Kennen":   [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Teemo":    [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Dr. Mundo":[{ label:"16.11 Grasp",         wr:"54%", keystone:8437, primary:[8446,8473,8451],  secondary:[9103,9111], shards:[5008,5002,5001] }],
    "Olaf":     [{ label:"16.11 PTA",           wr:"52%", keystone:8005, primary:[9111,9104,8014],  secondary:[8446,8429], shards:[5008,5005,5003] }],
    "Urgot":    [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Yorick":   [{ label:"16.11 Conquérant",    wr:"53%", keystone:8010, primary:[9111,9104,8014],  secondary:[8451,8444], shards:[5008,5002,5001] }],
    "Shen":     [{ label:"16.11 Grasp",         wr:"53%", keystone:8437, primary:[8446,8463,8451],  secondary:[9105,9103], shards:[5008,5002,5001] }],
    "Illaoi":   [{ label:"16.11 Conquérant",    wr:"53%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Kled":     [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8226,8233], shards:[5008,5002,5003] }],
    "Jayce":    [{ label:"16.11 PTA",           wr:"51%", keystone:8005, primary:[9111,9104,8014],  secondary:[8226,8237], shards:[5008,5002,5003] }],
    "Quinn":    [{ label:"16.11 Électrocution", wr:"51%", keystone:8112, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Poppy":    [{ label:"16.11 Aftershock",    wr:"53%", keystone:8439, primary:[8446,8473,8451],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Singed":   [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8444], shards:[5008,5002,5001] }],
    // ── JUNGLE ────────────────────────────────────────────────────────────────
    "Vi":       [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Viego":    [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8126,8143], shards:[5008,5002,5003] }],
    "Lee Sin":  [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Kha'Zix":  [{ label:"16.11 Dark Harvest",  wr:"53%", keystone:8128, primary:[8126,8143,8135],  secondary:[9101,9104], shards:[5008,5002,5003] }],
    "Rengar":   [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8135],  secondary:[9101,9104], shards:[5008,5002,5003] }],
    "Kindred":  [{ label:"16.11 PTA",           wr:"51%", keystone:8005, primary:[9101,9104,8014],  secondary:[8226,8233], shards:[5008,5005,5003] }],
    "Nocturne": [{ label:"16.11 Dark Harvest",  wr:"53%", keystone:8128, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Master Yi":[{ label:"16.11 Grêle de Lames",wr:"52%", keystone:9923, primary:[9101,9104,8299],  secondary:[8444,8473], shards:[5008,5005,5003] }],
    "Warwick":  [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8299],  secondary:[8446,8429], shards:[5008,5002,5001] }],
    "Amumu":    [{ label:"16.11 Aftershock",    wr:"57%", keystone:8439, primary:[8446,8473,8451],  secondary:[8345,8321], shards:[5007,5002,5001] }],
    "Hecarim":  [{ label:"16.11 Conquérant",    wr:"53%", keystone:8010, primary:[9111,9104,8014],  secondary:[8226,8210], shards:[5008,5002,5001] }],
    "Ekko":     [{ label:"16.11 Électrocution", wr:"52%", keystone:8112, primary:[8126,8143,8106],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Nidalee":  [{ label:"16.11 Dark Harvest",  wr:"51%", keystone:8128, primary:[8126,8143,8105],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Graves":   [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Fiddlesticks":[{ label:"16.11 DFT",        wr:"54%", keystone:8992, primary:[8226,8210,8237],  secondary:[8304,8347], shards:[5008,5002,5003] }],
    "Sejuani":  [{ label:"16.11 Aftershock",    wr:"54%", keystone:8439, primary:[8446,8473,8451],  secondary:[8226,8210], shards:[5007,5002,5001] }],
    "Jarvan IV":[{ label:"16.11 Aftershock",    wr:"52%", keystone:8439, primary:[8446,8473,8451],  secondary:[9111,9104], shards:[5008,5002,5001] }],
    "Shaco":    [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8135],  secondary:[8304,8347], shards:[5008,5002,5003] }],
    "Zac":      [{ label:"16.11 Aftershock",    wr:"55%", keystone:8439, primary:[8446,8473,8451],  secondary:[9111,9104], shards:[5007,5002,5001] }],
    "Bel'Veth": [{ label:"16.11 Grêle de Lames",wr:"51%", keystone:9923, primary:[9101,9104,8299],  secondary:[8226,8210], shards:[5008,5005,5003] }],
    "Briar":    [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9101,9104,8299],  secondary:[8473,8429], shards:[5008,5002,5001] }],
    "Diana":    [{ label:"16.11 Électrocution", wr:"52%", keystone:8112, primary:[8126,8143,8105],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Evelynn":  [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8105],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Elise":    [{ label:"16.11 Électrocution", wr:"51%", keystone:8112, primary:[8126,8143,8105],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Kayn":     [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Ivern":    [{ label:"16.11 Gardien ★",     wr:"52%", keystone:8465, primary:[8446,8463,8453],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Taliyah":  [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[8446,8429], shards:[5008,5002,5003] }],
    "Xin Zhao": [{ label:"16.11 Conquérant",    wr:"52%", keystone:8010, primary:[9111,9104,8014],  secondary:[8446,8429], shards:[5008,5002,5001] }],
    // ── MID ───────────────────────────────────────────────────────────────────
    "Ahri":     [{ label:"16.11 Électrocution", wr:"53%", keystone:8112, primary:[8126,8143,8105],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Akali":    [{ label:"16.11 Électrocution", wr:"51%", keystone:8112, primary:[8126,8143,8105],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Zed":      [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Syndra":   [{ label:"16.11 Comète",        wr:"52%", keystone:8229, primary:[8226,8210,8237],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Lux":      [{ label:"16.11 Comète",        wr:"53%", keystone:8229, primary:[8226,8210,8237],  secondary:[8304,8347], shards:[5008,5002,5003] }],
    "Viktor":   [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Orianna":  [{ label:"16.11 Comète",        wr:"52%", keystone:8229, primary:[8226,8210,8237],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Fizz":     [{ label:"16.11 Électrocution", wr:"52%", keystone:8112, primary:[8126,8143,8106],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Katarina": [{ label:"16.11 Conquérant",    wr:"51%", keystone:8010, primary:[9111,9104,8014],  secondary:[8126,8143], shards:[5008,5002,5003] }],
    "Talon":    [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Annie":    [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Veigar":   [{ label:"16.11 Premier Coup ★",wr:"54%", keystone:8369, primary:[8306,8321,8347],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Xerath":   [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[8304,8347], shards:[5008,5002,5003] }],
    "Ziggs":    [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8304,8347], shards:[5008,5002,5003] }],
    "Cassiopeia":[{ label:"16.11 DFT",          wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8444], shards:[5008,5002,5003] }],
    "Azir":     [{ label:"16.11 Stormraider",   wr:"51%", keystone:8230, primary:[8226,8210,8237],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Galio":    [{ label:"16.11 Aftershock",    wr:"52%", keystone:8439, primary:[8446,8473,8451],  secondary:[8229,8237], shards:[5007,5002,5001] }],
    "LeBlanc":  [{ label:"16.11 Électrocution", wr:"52%", keystone:8112, primary:[8126,8143,8106],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Twisted Fate":[{ label:"16.11 Premier Coup ★",wr:"51%",keystone:8369,primary:[8306,8321,8347], secondary:[8226,8236], shards:[5008,5002,5003] }],
    "Zoe":      [{ label:"16.11 Comète",        wr:"52%", keystone:8229, primary:[8226,8210,8237],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Malzahar": [{ label:"16.11 DFT",           wr:"54%", keystone:8992, primary:[8226,8210,8237],  secondary:[8304,8347], shards:[5007,5002,5003] }],
    "Aurelion Sol":[{ label:"16.11 DFT",        wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Aurora":   [{ label:"16.11 Électrocution", wr:"52%", keystone:8112, primary:[8126,8143,8106],  secondary:[8210,8237], shards:[5008,5002,5003] }],
    "Qiyana":   [{ label:"16.11 Électrocution", wr:"51%", keystone:8112, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    "Anivia":   [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8444], shards:[5008,5002,5003] }],
    "Vladimir": [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8444], shards:[5008,5002,5001] }],
    "Ryze":     [{ label:"16.11 Stormraider",   wr:"51%", keystone:8230, primary:[8226,8210,8237],  secondary:[8473,8444], shards:[5008,5002,5001] }],
    "Brand":    [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8429], shards:[5008,5002,5003] }],
    "Naafiri":  [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8135],  secondary:[9111,9104], shards:[5008,5002,5003] }],
    // ── ADC ───────────────────────────────────────────────────────────────────
    "Jinx":     [{ label:"16.11 Lethal Tempo",  wr:"53%", keystone:8008, primary:[9101,9104,8299],  secondary:[8009,9103], shards:[5008,5005,5003] }],
    "Caitlyn":  [{ label:"16.11 Fleet Footwork",wr:"52%", keystone:8021, primary:[9101,9104,8299],  secondary:[8226,8233], shards:[5008,5005,5003] }],
    "Ashe":     [{ label:"16.11 Lethal Tempo",  wr:"52%", keystone:8008, primary:[9101,9104,8299],  secondary:[8009,8237], shards:[5008,5005,5003] }],
    "Ezreal":   [{ label:"16.11 Fleet Footwork",wr:"51%", keystone:8021, primary:[9101,9104,8299],  secondary:[8226,8233], shards:[5008,5005,5003] }],
    "Draven":   [{ label:"16.11 PTA",           wr:"52%", keystone:8005, primary:[9101,9104,8014],  secondary:[8126,8143], shards:[5008,5005,5003] }],
    "Jhin":     [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[9104,8014], shards:[5008,5005,5003] }],
    "Vayne":    [{ label:"16.11 PTA",           wr:"51%", keystone:8005, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5005,5003] }],
    "Miss Fortune":[{ label:"16.11 Lethal Tempo",wr:"52%",keystone:8008, primary:[9101,9104,8014],  secondary:[8126,8143], shards:[5008,5005,5003] }],
    "Lucian":   [{ label:"16.11 PTA",           wr:"51%", keystone:8005, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5005,5003] }],
    "Tristana": [{ label:"16.11 Lethal Tempo",  wr:"52%", keystone:8008, primary:[9101,9104,8299],  secondary:[8126,8143], shards:[5008,5005,5003] }],
    "Sivir":    [{ label:"16.11 Fleet Footwork",wr:"52%", keystone:8021, primary:[9101,9104,8299],  secondary:[8226,8233], shards:[5008,5005,5003] }],
    "Kog'Maw":  [{ label:"16.11 Lethal Tempo",  wr:"53%", keystone:8008, primary:[9101,9104,8299],  secondary:[8226,8210], shards:[5008,5005,5003] }],
    "Xayah":    [{ label:"16.11 Lethal Tempo",  wr:"52%", keystone:8008, primary:[9101,9104,8299],  secondary:[8009,9103], shards:[5008,5005,5003] }],
    "Aphelios": [{ label:"16.11 Fleet Footwork",wr:"51%", keystone:8021, primary:[9101,9104,8299],  secondary:[8226,8233], shards:[5008,5005,5003] }],
    "Samira":   [{ label:"16.11 PTA",           wr:"52%", keystone:8005, primary:[9111,9104,8014],  secondary:[8126,8143], shards:[5008,5005,5003] }],
    "Twitch":   [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[9101,9104], shards:[5008,5005,5003] }],
    "Varus":    [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[9104,8014], shards:[5008,5005,5003] }],
    "Akshan":   [{ label:"16.11 Fleet Footwork",wr:"51%", keystone:8021, primary:[9101,9104,8299],  secondary:[8226,8233], shards:[5008,5005,5003] }],
    "Nilah":    [{ label:"16.11 PTA",           wr:"52%", keystone:8005, primary:[9111,9104,8014],  secondary:[8473,8429], shards:[5008,5005,5003] }],
    "Yunara":   [{ label:"16.11 Lethal Tempo",  wr:"51%", keystone:8008, primary:[9101,9104,8299],  secondary:[8226,8210], shards:[5008,5005,5003] }],
    "Zeri":     [{ label:"16.11 Lethal Tempo",  wr:"52%", keystone:8008, primary:[9101,9104,8299],  secondary:[8226,8210], shards:[5008,5005,5003] }],
    "Senna":    [{ label:"16.11 Glacial ★",     wr:"51%", keystone:8351, primary:[8306,8345,8347],  secondary:[9103,8014], shards:[5008,5002,5003] }],
    // ── SUPPORT ───────────────────────────────────────────────────────────────
    "Thresh":   [{ label:"16.11 Aftershock",    wr:"53%", keystone:8439, primary:[8446,8473,8451],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Lulu":     [{ label:"16.11 Aéry ★",        wr:"54%", keystone:8214, primary:[8226,8210,8233],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Nautilus": [{ label:"16.11 Aftershock",    wr:"55%", keystone:8439, primary:[8446,8473,8451],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Leona":    [{ label:"16.11 Aftershock",    wr:"56%", keystone:8439, primary:[8446,8473,8451],  secondary:[9111,9104], shards:[5007,5002,5001] }],
    "Blitzcrank":[{ label:"16.11 Aftershock",   wr:"53%", keystone:8439, primary:[8446,8473,8451],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Janna":    [{ label:"16.11 Aéry ★",        wr:"55%", keystone:8214, primary:[8226,8210,8237],  secondary:[8453,8410], shards:[5007,5002,5001] }],
    "Soraka":   [{ label:"16.11 Aéry ★",        wr:"55%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Nami":     [{ label:"16.11 Aéry ★",        wr:"54%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Bard":     [{ label:"16.11 Glacial ★",     wr:"52%", keystone:8351, primary:[8306,8345,8347],  secondary:[8229,8237], shards:[5007,5002,5001] }],
    "Zilean":   [{ label:"16.11 Aéry ★",        wr:"53%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Morgana":  [{ label:"16.11 Aéry ★",        wr:"53%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Zyra":     [{ label:"16.11 DFT",           wr:"52%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8444], shards:[5007,5002,5001] }],
    "Yuumi":    [{ label:"16.11 Aéry ★",        wr:"51%", keystone:8214, primary:[8226,8210,8237],  secondary:[8453,8463], shards:[5007,5002,5001] }],
    "Renata Glasc":[{ label:"16.11 Aéry ★",     wr:"52%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Seraphine":[{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Vel'Koz":  [{ label:"16.11 DFT",           wr:"53%", keystone:8992, primary:[8226,8210,8237],  secondary:[8304,8347], shards:[5008,5002,5003] }],
    "Pyke":     [{ label:"16.11 Dark Harvest",  wr:"52%", keystone:8128, primary:[8126,8143,8135],  secondary:[8306,8347], shards:[5008,5002,5003] }],
    "Karma":    [{ label:"16.11 Aéry ★",        wr:"53%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Sona":     [{ label:"16.11 Aéry ★",        wr:"55%", keystone:8214, primary:[8226,8210,8237],  secondary:[8453,8410], shards:[5007,5002,5001] }],
    "Rakan":    [{ label:"16.11 Aftershock",    wr:"53%", keystone:8439, primary:[8446,8463,8453],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Milio":    [{ label:"16.11 Aéry ★",        wr:"54%", keystone:8214, primary:[8226,8210,8237],  secondary:[8473,8453], shards:[5007,5002,5001] }],
    "Rell":     [{ label:"16.11 Aftershock",    wr:"55%", keystone:8439, primary:[8446,8473,8451],  secondary:[9111,9104], shards:[5007,5002,5001] }],
    "Alistar":  [{ label:"16.11 Aftershock",    wr:"54%", keystone:8439, primary:[8446,8473,8451],  secondary:[8304,8347], shards:[5007,5002,5001] }],
    "Braum":    [{ label:"16.11 Aftershock",    wr:"53%", keystone:8439, primary:[8446,8463,8451],  secondary:[8304,8347], shards:[5007,5002,5001] }],
};

const runeRoleFallback = {
    top:     [{ label:"16.11 Standard Top",    wr:"50%", keystone:8010, primary:[9111,9104,8014], secondary:[8473,8429], shards:[5008,5002,5001] }],
    jungle:  [{ label:"16.11 Standard Jungle", wr:"50%", keystone:8010, primary:[9111,9104,8014], secondary:[8473,8429], shards:[5008,5002,5001] }],
    mid:     [{ label:"16.11 Standard Mid",    wr:"50%", keystone:8992, primary:[8226,8210,8237], secondary:[8473,8429], shards:[5008,5002,5003] }],
    adc:     [{ label:"16.11 Standard ADC",    wr:"50%", keystone:8008, primary:[9101,9104,8299], secondary:[8226,8233], shards:[5008,5005,5003] }],
    support: [{ label:"16.11 Standard Support",wr:"50%", keystone:8214, primary:[8226,8210,8237], secondary:[8473,8453], shards:[5007,5002,5001] }],
};

function getChampionRunes(champion) {
    return championRunes[champion.name] || runeRoleFallback[champion.role] || runeRoleFallback.mid;
}
function runeImg(id)  { const r = runeData[id]; return r ? r.img  : ''; }
function runeName(id) { const r = runeData[id]; return r ? r.name : `Rune ${id}`; }
function runeTree(id) { const r = runeData[id]; return r ? r.tree : ''; }

// ── Modal ─────────────────────────────────────────────────────────────────────
function createModal() {
    if (document.getElementById('buildModal')) return;
    const modal = document.createElement('div');
    modal.id = 'buildModal';
    modal.className = 'build-modal';
    modal.innerHTML = `
        <div class="build-modal-backdrop" onclick="closeModal()"></div>
        <div class="build-modal-content">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <div id="modalBody"></div>
        </div>
    `;
    document.body.appendChild(modal);
}

function buildRuneHTML(runeSet) {
    const keystoneR = runeData[runeSet.keystone];
    const primaryTree = keystoneR ? keystoneR.tree : '';
    const secondaryTree = runeSet.secondary.length ? runeTree(runeSet.secondary[0]) : '';

    return `
        <div class="modal-build-block">
            <div class="modal-build-header">
                <span class="modal-build-label">${runeSet.label}</span>
                <span class="modal-winrate">Winrate <strong>${runeSet.wr}</strong></span>
            </div>
            <div class="rune-columns">
                <!-- PRIMARY -->
                <div class="rune-column rune-col-primary">
                    <div class="rune-col-header">
                        ${treeIcons[primaryTree] ? `<img src="${treeIcons[primaryTree]}" class="rune-tree-icon" alt="${primaryTree}">` : ''}
                        <span class="rune-col-title">${primaryTree}</span>
                    </div>
                    <!-- Keystone -->
                    <div class="rune-slot rune-slot-keystone">
                        <img src="${runeImg(runeSet.keystone)}" alt="${runeName(runeSet.keystone)}"
                             onerror="this.parentElement.style.display='none'">
                        <span class="rune-slot-name">${runeName(runeSet.keystone)}</span>
                    </div>
                    <!-- Primary non-keystone -->
                    <div class="rune-slots-row">
                        ${runeSet.primary.map(id => `
                            <div class="rune-slot rune-slot-minor">
                                <img src="${runeImg(id)}" alt="${runeName(id)}"
                                     onerror="this.parentElement.style.display='none'">
                                <span class="rune-slot-name">${runeName(id)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <!-- SECONDARY -->
                <div class="rune-column rune-col-secondary">
                    <div class="rune-col-header">
                        ${treeIcons[secondaryTree] ? `<img src="${treeIcons[secondaryTree]}" class="rune-tree-icon" alt="${secondaryTree}">` : ''}
                        <span class="rune-col-title">${secondaryTree}</span>
                    </div>
                    <div class="rune-slots-row rune-slots-col">
                        ${runeSet.secondary.map(id => `
                            <div class="rune-slot rune-slot-minor">
                                <img src="${runeImg(id)}" alt="${runeName(id)}"
                                     onerror="this.parentElement.style.display='none'">
                                <span class="rune-slot-name">${runeName(id)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <!-- Shards -->
                    <div class="rune-shards-section">
                        <span class="rune-shards-label">Fragments</span>
                        <div class="rune-shards-row">
                            ${runeSet.shards.map(id => `
                                <div class="rune-shard-slot" title="${runeName(id)}">
                                    <img src="${runeImg(id)}" alt="${runeName(id)}"
                                         onerror="this.parentElement.style.display='none'">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function openChampionModal(champion) {
    createModal();
    const patch = PATCH;

    // Builds HTML
    const builds = getChampionBuilds(champion);
    const buildsHTML = builds.map(b => `
        <div class="modal-build-block">
            <div class="modal-build-header">
                <span class="modal-build-label">${b.label}</span>
                <span class="modal-winrate">Winrate <strong>${b.wr}</strong></span>
            </div>
            <div class="modal-items-row">
                ${b.items.map(id => `
                    <div class="modal-item-slot" title="${getItemName(id)}">
                        <img src="https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${id}.png"
                             alt="${getItemName(id)}"
                             onerror="this.src='https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/1001.png'">
                        <span class="modal-item-name">${getItemName(id)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Runes HTML
    const runes = getChampionRunes(champion);
    const runesHTML = runes.map(r => buildRuneHTML(r)).join('');

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-champion-header">
            <img src="${champion.image}" alt="${champion.name}" class="modal-champ-img"
                 onerror="this.style.display='none'">
            <div>
                <h2 class="modal-champ-name">${champion.name}</h2>
                <p class="modal-champ-title">${champion.description}</p>
                <span class="modal-role-badge">${champion.role.toUpperCase()}</span>
            </div>
        </div>

        <!-- Tabs -->
        <div class="modal-tabs">
            <button class="modal-tab active" onclick="switchTab(this,'tab-builds')">⚔️ Builds</button>
            <button class="modal-tab" onclick="switchTab(this,'tab-runes')">✨ Runes</button>
        </div>

        <div id="tab-builds" class="modal-tab-content active">
            <div class="modal-builds-section">${buildsHTML}</div>
        </div>
        <div id="tab-runes" class="modal-tab-content">
            <div class="modal-builds-section">${runesHTML}</div>
        </div>
    `;

    document.getElementById('buildModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function switchTab(btn, tabId) {
    btn.closest('.build-modal-content').querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    btn.closest('.build-modal-content').querySelectorAll('.modal-tab-content').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('buildModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── loadChampions ─────────────────────────────────────────────────────────────
function loadChampions() {
    const championsList = document.getElementById('championsList');

    // Skeleton loading
    championsList.innerHTML = Array(12).fill(0).map(() => `
        <div class="champion-skeleton">
            <div class="skeleton-img"></div>
            <div class="skeleton-body">
                <div class="skeleton-line"></div>
                <div class="skeleton-line short"></div>
            </div>
        </div>
    `).join('');

    setTimeout(() => {
        championsList.innerHTML = '';
        champions.forEach(champion => {
            const card = document.createElement('div');
            card.className = 'champion-card';
            card.setAttribute('data-role', champion.role);
            card.onclick = () => openChampionModal(champion);
            card.innerHTML = `
                <div class="champion-img-wrapper">
                    <img
                        src="${champion.image}"
                        alt="${champion.name}"
                        class="champion-img"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentElement.classList.add('no-img');"
                    >
                    <div class="champion-card-overlay">
                        <span class="card-build-hint">⚔️ Voir le build</span>
                    </div>
                </div>
                <div class="champion-card-body">
                    <h4>${champion.name}</h4>
                    <span class="role-badge-small ${champion.role}">${getRoleLabel(champion.role)}</span>
                    <p class="description">${champion.description}</p>
                </div>
            `;
            championsList.appendChild(card);
        });
        updateChampionCount();
    }, 300);
}

function getRoleLabel(role) {
    const labels = { top: '🛡️ Top', jungle: '🌿 Jungle', mid: '⚡ Mid', adc: '🏹 ADC', support: '💚 Support' };
    return labels[role] || role.toUpperCase();
}

function updateChampionCount() {
    const countEl = document.getElementById('championsCount');
    if (!countEl) return;
    const allCards = document.querySelectorAll('.champion-card');
    const visible = [...allCards].filter(c => c.style.display !== 'none').length;
    const total = champions.length;
    countEl.textContent = visible === total
        ? `${total} champions disponibles`
        : `${visible} champion${visible > 1 ? 's' : ''} affiché${visible > 1 ? 's' : ''} sur ${total}`;
}

function filterChampions() {
    const searchTerm = document.getElementById('championSearch').value.toLowerCase();
    const roleFilter = document.getElementById('roleFilter').value;
    const cards = document.querySelectorAll('.champion-card');

    cards.forEach(card => {
        const name = card.querySelector('h4').textContent.toLowerCase();
        const role = card.getAttribute('data-role');
        const matchesSearch = name.includes(searchTerm);
        const matchesRole = !roleFilter || role === roleFilter;
        card.style.display = matchesSearch && matchesRole ? '' : 'none';
    });
    updateChampionCount();
}

// ── loadBuilds avec vraies images d'items ─────────────────────────────────────
function loadBuilds(roleFilter = 'all') {
    const buildsList = document.getElementById('buildsList');
    buildsList.innerHTML = '';
    const patch = '16.10.1';

    const featured = [
        { name: 'Aatrox',      role: 'top' },
        { name: 'Darius',      role: 'top' },
        { name: 'Fiora',       role: 'top' },
        { name: 'Garen',       role: 'top' },
        { name: 'Irelia',      role: 'top' },
        { name: 'Riven',       role: 'top' },
        { name: 'Lee Sin',     role: 'jungle' },
        { name: "Kha'Zix",    role: 'jungle' },
        { name: 'Amumu',       role: 'jungle' },
        { name: 'Hecarim',     role: 'jungle' },
        { name: 'Ekko',        role: 'jungle' },
        { name: 'Zac',         role: 'jungle' },
        { name: 'Ahri',        role: 'mid' },
        { name: 'Zed',         role: 'mid' },
        { name: 'Lux',         role: 'mid' },
        { name: 'Viktor',      role: 'mid' },
        { name: 'Yasuo',       role: 'mid' },
        { name: 'Syndra',      role: 'mid' },
        { name: 'Jinx',        role: 'adc' },
        { name: 'Caitlyn',     role: 'adc' },
        { name: 'Jhin',        role: 'adc' },
        { name: 'Ezreal',      role: 'adc' },
        { name: 'Ashe',        role: 'adc' },
        { name: 'Draven',      role: 'adc' },
        { name: 'Thresh',      role: 'support' },
        { name: 'Lulu',        role: 'support' },
        { name: 'Leona',       role: 'support' },
        { name: 'Nautilus',    role: 'support' },
        { name: 'Soraka',      role: 'support' },
        { name: 'Blitzcrank',  role: 'support' },
    ].filter(b => roleFilter === 'all' || b.role === roleFilter);

    featured.forEach(({ name, role }) => {
        const champion = champions.find(c => c.name === name);
        if (!champion) return;
        const buildData = getChampionBuilds(champion);
        const build = buildData[0];
        if (!build) return;

        const itemsHTML = build.items.map(id => `
            <img
                src="https://ddragon.leagueoflegends.com/cdn/${patch}/img/item/${id}.png"
                alt="${getItemName(id)}"
                class="build-item-img"
                title="${getItemName(id)}"
                onerror="this.style.display='none'"
                loading="lazy"
            >
        `).join('');

        const card = document.createElement('div');
        card.className = 'build-card';
        card.onclick = () => openChampionModal(champion);
        card.innerHTML = `
            <div class="build-card-header">
                <img src="${champion.image}" alt="${champion.name}" class="build-card-champ-img" onerror="this.style.display='none'">
                <div class="build-card-champ-info">
                    <h3>${champion.name}</h3>
                    <span class="role-badge-small ${role}">${getRoleLabel(role)}</span>
                    <div class="build-winrate">Winrate <strong>${build.wr}</strong></div>
                </div>
            </div>
            <div class="build-card-items">${itemsHTML}</div>
        `;
        buildsList.appendChild(card);
    });
}

function filterBuilds(btn, role) {
    document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadBuilds(role);
}

// ── Hamburger mobile ──────────────────────────────────────────────────────────
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}
function closeMenu() {
    document.getElementById('navMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

// ── Back to top ───────────────────────────────────────────────────────────────
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Particules Hero ───────────────────────────────────────────────────────────
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 22; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.bottom = '-10px';
        const size = (Math.random() * 3 + 1) + 'px';
        p.style.width = size;
        p.style.height = size;
        p.style.animationDuration = (Math.random() * 9 + 5) + 's';
        p.style.animationDelay = (Math.random() * 7) + 's';
        p.style.opacity = Math.random() * 0.7 + 0.1;
        // Alterner couleurs gold / blue
        p.style.background = i % 3 === 0
            ? 'rgba(255,209,102,0.7)'
            : 'rgba(106,92,255,0.5)';
        container.appendChild(p);
    }
}

// ── Compteurs animés ──────────────────────────────────────────────────────────
function animateCounters() {
    const counters = document.querySelectorAll('.hero-stat-number[data-target]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 1600;
        const steps = duration / 16;
        const step = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + (target > 10 ? '+' : '');
        }, 16);
    });
}

// ── Navbar compact au scroll ──────────────────────────────────────────────────
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
}

// ── Bouton retour en haut ─────────────────────────────────────────────────────
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });
}

// ── DOMContentLoaded ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    showSection('accueil');
    setActiveNav(document.getElementById('nav-accueil'));
    createParticles();
    animateCounters();
    initNavbarScroll();
    initBackToTop();

    // Fermer menu mobile si clic en dehors
    document.addEventListener('click', e => {
        const nav = document.getElementById('navMenu');
        const burger = document.getElementById('hamburger');
        if (nav && nav.classList.contains('open') && !nav.contains(e.target) && burger && !burger.contains(e.target)) {
            closeMenu();
        }
    });
});

