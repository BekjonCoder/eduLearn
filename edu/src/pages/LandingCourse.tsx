const data: Record<string, Record<string, { questions: Question[]; audios: { correct: string; incorrect: string; win: string } }>> = {
  english: {
    "1": {
    questions: [
      { word: "quarter", options: ["quarter", "quality", "question", "quiet"], correct: "quarter" },
      { word: "beautiful", options: ["beauty", "beat", "beautiful", "beast"], correct: "beautiful" },
      { word: "strength", options: ["strong", "strength", "string", "strange"], correct: "strength" },
      { word: "achieve", options: ["achieve", "active", "activity", "actual"], correct: "achieve" },
      { word: "rhythm", options: ["rhyme", "rhythm", "ritual", "ribbon"], correct: "rhythm" },
      { word: "knowledge", options: ["know", "knowledge", "known", "knock"], correct: "knowledge" },
      { word: "although", options: ["altogether", "although", "also", "along"], correct: "although" },
      { word: "throughout", options: ["through", "thorough", "throughout", "though"], correct: "throughout" },
      { word: "opinion", options: ["option", "opinion", "open", "operate"], correct: "opinion" },
      { word: "foreign", options: ["forage", "foreign", "forgive", "forget"], correct: "foreign" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "2": {
    questions: [
      { word: "business", options: ["busy", "business", "bus", "buses"], correct: "business" },
      { word: "environment", options: ["environ", "environment", "envelope", "envious"], correct: "environment" },
      { word: "especially", options: ["special", "especially", "specialist", "specify"], correct: "especially" },
      { word: "temperature", options: ["temple", "temper", "temperature", "temporary"], correct: "temperature" },
      { word: "government", options: ["govern", "governor", "government", "governing"], correct: "government" },
      { word: "development", options: ["develop", "developer", "development", "developing"], correct: "development" },
      { word: "difference", options: ["different", "differ", "difference", "differing"], correct: "difference" },
      { word: "sentence", options: ["sense", "sentence", "sent", "sentinel"], correct: "sentence" },
      { word: "necessary", options: ["necessary", "necessarily", "necessity", "necessary"], correct: "necessary" },
      { word: "opposite", options: ["oppose", "opposite", "opposing", "option"], correct: "opposite" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "3": {
    questions: [
      { word: "familiar", options: ["family", "familiar", "fame", "farm"], correct: "familiar" },
      { word: "language", options: ["land", "language", "long", "large"], correct: "language" },
      { word: "library", options: ["liberal", "library", "liberty", "liver"], correct: "library" },
      { word: "material", options: ["matter", "material", "mature", "mate"], correct: "material" },
      { word: "original", options: ["origin", "original", "organ", "orange"], correct: "original" },
      { word: "particular", options: ["particular", "particle", "partly", "part"], correct: "particular" },
      { word: "probably", options: ["probable", "problem", "probably", "probe"], correct: "probably" },
      { word: "purpose", options: ["purposely", "purpose", "purse", "pure"], correct: "purpose" },
      { word: "remember", options: ["remind", "remember", "remains", "remark"], correct: "remember" },
      { word: "separate", options: ["separate", "separation", "separately", "separating"], correct: "separate" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "4": {
    questions: [
      { word: "success", options: ["succession", "success", "successful", "succeed"], correct: "success" },
      { word: "suggestion", options: ["suggest", "suggestive", "suggestion", "suggesting"], correct: "suggestion" },
      { word: "surprise", options: ["surprised", "surprising", "surprise", "surprises"], correct: "surprise" },
      { word: "system", options: ["system", "systematic", "sister", "symptom"], correct: "system" },
      { word: "variety", options: ["vary", "variety", "various", "variable"], correct: "variety" },
      { word: "weight", options: ["wait", "weight", "wheat", "white"], correct: "weight" },
      { word: "whether", options: ["weather", "whether", "whither", "wither"], correct: "whether" },
      { word: "writing", options: ["writer", "writing", "written", "writes"], correct: "writing" },
      { word: "youth", options: ["you", "youth", "youthful", "yours"], correct: "youth" },
      { word: "absence", options: ["absent", "absence", "absentee", "absorption"], correct: "absence" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "5": {
    questions: [
      { word: "accident", options: ["accidental", "accident", "accidentally", "accidence"], correct: "accident" },
      { word: "activity", options: ["active", "activate", "activity", "actual"], correct: "activity" },
      { word: "advantage", options: ["advance", "advantage", "advantageous", "advice"], correct: "advantage" },
      { word: "agreement", options: ["agree", "agreement", "agreeable", "agreed"], correct: "agreement" },
      { word: "analysis", options: ["analyst", "analysis", "analyze", "analytical"], correct: "analysis" },
      { word: "application", options: ["apply", "applicant", "application", "applied"], correct: "application" },
      { word: "appointment", options: ["appoint", "appointed", "appointment", "appointee"], correct: "appointment" },
      { word: "argument", options: ["argue", "argument", "arguing", "argued"], correct: "argument" },
      { word: "assessment", options: ["assess", "assessment", "assessed", "assessing"], correct: "assessment" },
      { word: "atmosphere", options: ["atom", "atmosphere", "atomic", "atlas"], correct: "atmosphere" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "6": {
    questions: [
      { word: "attention", options: ["attend", "attention", "attentive", "attendee"], correct: "attention" },
      { word: "attitude", options: ["attitude", "aptitude", "altitude", "attribute"], correct: "attitude" },
      { word: "authority", options: ["author", "authority", "authorized", "authorship"], correct: "authority" },
      { word: "background", options: ["back", "background", "backyard", "backup"], correct: "background" },
      { word: "behavior", options: ["behave", "behavior", "behaving", "behalf"], correct: "behavior" },
      { word: "benefit", options: ["beneficial", "benefit", "beneficiary", "benevolent"], correct: "benefit" },
      { word: "capacity", options: ["capable", "capacity", "capital", "captain"], correct: "capacity" },
      { word: "category", options: ["cater", "category", "catalogue", "catastrophe"], correct: "category" },
      { word: "challenge", options: ["chance", "challenge", "change", "charge"], correct: "challenge" },
      { word: "character", options: ["charity", "character", "characteristic", "charge"], correct: "character" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "7": {
    questions: [
      { word: "choice", options: ["choose", "choice", "chosen", "choir"], correct: "choice" },
      { word: "circumstance", options: ["circumstance", "circumstances", "circumstantial", "circumvent"], correct: "circumstance" },
      { word: "communication", options: ["communicate", "communication", "communicative", "commune"], correct: "communication" },
      { word: "community", options: ["commute", "community", "communal", "communion"], correct: "community" },
      { word: "comparison", options: ["compare", "comparison", "comparative", "compared"], correct: "comparison" },
      { word: "competition", options: ["compete", "competition", "competitive", "competent"], correct: "competition" },
      { word: "complex", options: ["complicated", "complex", "complacent", "complain"], correct: "complex" },
      { word: "concept", options: ["conceive", "concept", "concern", "concert"], correct: "concept" },
      { word: "conclusion", options: ["conclude", "conclusion", "conclusive", "concluded"], correct: "conclusion" },
      { word: "condition", options: ["conduct", "condition", "conduction", "condone"], correct: "condition" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "8": {
    questions: [
      { word: "conference", options: ["confess", "conference", "conflict", "confirm"], correct: "conference" },
      { word: "confidence", options: ["confident", "confidence", "confide", "configure"], correct: "confidence" },
      { word: "confusion", options: ["confuse", "confusion", "confusing", "confused"], correct: "confusion" },
      { word: "connection", options: ["connect", "connection", "connected", "connecting"], correct: "connection" },
      { word: "consequence", options: ["consequent", "consequence", "consecutively", "concession"], correct: "consequence" },
      { word: "construction", options: ["construct", "construction", "constructive", "constructor"], correct: "construction" },
      { word: "consumer", options: ["consume", "consumer", "consuming", "consumption"], correct: "consumer" },
      { word: "contact", options: ["contain", "contact", "context", "contest"], correct: "contact" },
      { word: "context", options: ["contact", "context", "content", "contest"], correct: "context" },
      { word: "contrast", options: ["contract", "contrast", "contrary", "control"], correct: "contrast" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "9": {
    questions: [
      { word: "contribution", options: ["contribute", "contribution", "contributor", "contributing"], correct: "contribution" },
      { word: "conversation", options: ["converse", "conversation", "conversion", "convert"], correct: "conversation" },
      { word: "conviction", options: ["convict", "conviction", "convincing", "convinced"], correct: "conviction" },
      { word: "cooperation", options: ["cooperate", "cooperation", "cooperative", "cooperating"], correct: "cooperation" },
      { word: "courage", options: ["courier", "courage", "course", "court"], correct: "courage" },
      { word: "criticism", options: ["critic", "criticism", "critical", "critique"], correct: "criticism" },
      { word: "culture", options: ["cult", "culture", "cultural", "cultivate"], correct: "culture" },
      { word: "currency", options: ["current", "currency", "curiosity", "curtain"], correct: "currency" },
      { word: "customer", options: ["custom", "customer", "customary", "customize"], correct: "customer" },
      { word: "decision", options: ["decide", "decision", "decisive", "deciding"], correct: "decision" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  "10": {
    questions: [
      { word: "definition", options: ["define", "definition", "definite", "defining"], correct: "definition" },
      { word: "delivery", options: ["deliver", "delivery", "delivering", "delivered"], correct: "delivery" },
      { word: "demand", options: ["demand", "demonstrate", "democracy", "demonstration"], correct: "demand" },
      { word: "department", options: ["depart", "department", "departure", "depend"], correct: "department" },
      { word: "description", options: ["describe", "description", "descriptive", "describing"], correct: "description" },
      { word: "development", options: ["develop", "development", "developer", "developed"], correct: "development" },
      { word: "difference", options: ["differ", "difference", "different", "differing"], correct: "difference" },
      { word: "difficulty", options: ["difficult", "difficulty", "differ", "diffuse"], correct: "difficulty" },
      { word: "direction", options: ["direct", "direction", "director", "directing"], correct: "direction" },
      { word: "discussion", options: ["discuss", "discussion", "discussed", "discussing"], correct: "discussion" },
    ],
    audios: { correct: correctEng, incorrect: incorrectEng, win: winEng },
  },
  },

  french: {
    "1": {
    questions: [
      { word: "bonjour", options: ["bonjour", "bonsoir", "bonne", "bonsai"], correct: "bonjour" },
      { word: "merci", options: ["merci", "mercredi", "mer", "merveille"], correct: "merci" },
      { word: "fromage", options: ["fromage", "fraise", "frère", "froid"], correct: "fromage" },
      { word: "voiture", options: ["voiture", "voir", "voix", "vol"], correct: "voiture" },
      { word: "école", options: ["école", "étoile", "écouter", "écrire"], correct: "école" },
      { word: "pomme", options: ["pomme", "pompe", "poumon", "pompon"], correct: "pomme" },
      { word: "chaise", options: ["chose", "chaise", "chaud", "chance"], correct: "chaise" },
      { word: "livre", options: ["lire", "livre", "lèvre", "lien"], correct: "livre" },
      { word: "eau", options: ["eau", "haut", "aube", "hautement"], correct: "eau" },
      { word: "soleil", options: ["sol", "soleil", "soul", "sole"], correct: "soleil" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "2": {
    questions: [
      { word: "lumière", options: ["lumière", "lune", "lutte", "lourd"], correct: "lumière" },
      { word: "argent", options: ["argent", "agence", "arrière", "argile"], correct: "argent" },
      { word: "chien", options: ["chien", "chine", "chêne", "chaîne"], correct: "chien" },
      { word: "chat", options: ["chat", "chou", "chose", "chaud"], correct: "chat" },
      { word: "maison", options: ["maison", "maître", "maisonnée", "maïs"], correct: "maison" },
      { word: "table", options: ["table", "tabac", "tâche", "taille"], correct: "table" },
      { word: "porte", options: ["porte", "part", "port", "pore"], correct: "porte" },
      { word: "fenêtre", options: ["fenêtre", "fête", "femme", "fendre"], correct: "fenêtre" },
      { word: "route", options: ["route", "roue", "rouge", "roi"], correct: "route" },
      { word: "ville", options: ["ville", "vie", "vite", "vis"], correct: "ville" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "3": {
    questions: [
      { word: "travail", options: ["travailler", "travail", "travers", "traduire"], correct: "travail" },
      { word: "fleur", options: ["fleur", "flair", "flamme", "flemme"], correct: "fleur" },
      { word: "musique", options: ["musée", "musique", "musclé", "muse"], correct: "musique" },
      { word: "ami", options: ["âme", "ami", "amie", "aimer"], correct: "ami" },
      { word: "amour", options: ["amour", "âme", "ami", "aimé"], correct: "amour" },
      { word: "histoire", options: ["histoire", "hiver", "hôpital", "huile"], correct: "histoire" },
      { word: "temps", options: ["temps", "tente", "témoin", "tenir"], correct: "temps" },
      { word: "année", options: ["année", "anneau", "âne", "annonce"], correct: "année" },
      { word: "enfant", options: ["enfance", "enfant", "enfer", "enfantin"], correct: "enfant" },
      { word: "famille", options: ["famille", "famine", "fameux", "fâché"], correct: "famille" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "4": {
    questions: [
      { word: "santé", options: ["sang", "santé", "sangle", "sanction"], correct: "santé" },
      { word: "mer", options: ["mer", "mère", "mari", "mais"], correct: "mer" },
      { word: "montagne", options: ["mont", "montagne", "montée", "monter"], correct: "montagne" },
      { word: "rivière", options: ["rival", "rivière", "rive", "risque"], correct: "rivière" },
      { word: "pays", options: ["paye", "pays", "paix", "payer"], correct: "pays" },
      { word: "plage", options: ["plage", "pluie", "plaie", "plan"], correct: "plage" },
      { word: "forêt", options: ["forêt", "force", "formé", "forme"], correct: "forêt" },
      { word: "oiseau", options: ["oiseau", "outil", "ouest", "oreille"], correct: "oiseau" },
      { word: "cheval", options: ["cheveux", "cheval", "cheville", "chef"], correct: "cheval" },
      { word: "poisson", options: ["poison", "poisson", "poissonnier", "poitrine"], correct: "poisson" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "5": {
    questions: [
      { word: "pain", options: ["pain", "peine", "pince", "pan"], correct: "pain" },
      { word: "beurre", options: ["beurre", "barre", "bulle", "ber"], correct: "beurre" },
      { word: "lait", options: ["lait", "laid", "lien", "lit"], correct: "lait" },
      { word: "thé", options: ["thé", "tôt", "taux", "tais"], correct: "thé" },
      { word: "café", options: ["café", "caver", "cave", "cage"], correct: "café" },
      { word: "vin", options: ["vin", "vent", "vain", "vingt"], correct: "vin" },
      { word: "bière", options: ["bière", "bise", "bête", "bile"], correct: "bière" },
      { word: "repas", options: ["repart", "repas", "repasser", "repos"], correct: "repas" },
      { word: "viande", options: ["viande", "vieille", "vite", "vide"], correct: "viande" },
      { word: "poivre", options: ["poivre", "pouvoir", "pouvoirs", "poule"], correct: "poivre" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "6": {
    questions: [
      { word: "soirée", options: ["soir", "soie", "soirée", "soif"], correct: "soirée" },
      { word: "matin", options: ["matin", "maintien", "matière", "maître"], correct: "matin" },
      { word: "nuit", options: ["nuit", "nœud", "nu", "nuire"], correct: "nuit" },
      { word: "heure", options: ["heure", "heurter", "heureux", "heur"], correct: "heure" },
      { word: "minute", options: ["minuit", "minute", "mine", "mince"], correct: "minute" },
      { word: "semaine", options: ["semaine", "semer", "semelle", "semblable"], correct: "semaine" },
      { word: "mois", options: ["mois", "mot", "mou", "moi"], correct: "mois" },
      { word: "année", options: ["année", "anneau", "âne", "annonce"], correct: "année" },
      { word: "hier", options: ["hier", "hiver", "haut", "huile"], correct: "hier" },
      { word: "demain", options: ["demain", "demeure", "demande", "demander"], correct: "demain" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "7": {
    questions: [
      { word: "lundi", options: ["lundi", "lune", "lourd", "lutte"], correct: "lundi" },
      { word: "mardi", options: ["mardi", "marche", "marin", "marier"], correct: "mardi" },
      { word: "mercredi", options: ["mercredi", "merci", "mer", "merveille"], correct: "mercredi" },
      { word: "jeudi", options: ["jeudi", "jeu", "jeune", "jeun"], correct: "jeudi" },
      { word: "vendredi", options: ["vendredi", "vent", "vendre", "venue"], correct: "vendredi" },
      { word: "samedi", options: ["samedi", "sable", "salle", "sain"], correct: "samedi" },
      { word: "dimanche", options: ["dimanche", "dime", "dîner", "dire"], correct: "dimanche" },
      { word: "printemps", options: ["printemps", "principe", "prince", "prise"], correct: "printemps" },
      { word: "été", options: ["été", "était", "étage", "état"], correct: "été" },
      { word: "hiver", options: ["hiver", "hier", "huile", "haut"], correct: "hiver" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "8": {
    questions: [
      { word: "rouge", options: ["rouge", "route", "roue", "roi"], correct: "rouge" },
      { word: "bleu", options: ["bleu", "blanc", "blessé", "belle"], correct: "bleu" },
      { word: "vert", options: ["vert", "verre", "vers", "ver"], correct: "vert" },
      { word: "jaune", options: ["jaune", "jeune", "jour", "joue"], correct: "jaune" },
      { word: "noir", options: ["noir", "nord", "nom", "note"], correct: "noir" },
      { word: "blanc", options: ["blanc", "bleu", "blessé", "belle"], correct: "blanc" },
      { word: "rose", options: ["rose", "route", "roi", "roue"], correct: "rose" },
      { word: "gris", options: ["gris", "gros", "gras", "grève"], correct: "gris" },
      { word: "marron", options: ["marron", "marre", "marine", "marin"], correct: "marron" },
      { word: "violet", options: ["violet", "voile", "viol", "ville"], correct: "violet" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "9": {
    questions: [
      { word: "homme", options: ["homme", "hommage", "honte", "horizon"], correct: "homme" },
      { word: "femme", options: ["femme", "ferme", "faim", "fête"], correct: "femme" },
      { word: "garçon", options: ["garçon", "garde", "gare", "gâteau"], correct: "garçon" },
      { word: "fille", options: ["fille", "fil", "file", "filer"], correct: "fille" },
      { word: "bébé", options: ["bébé", "beurre", "beaucoup", "bête"], correct: "bébé" },
      { word: "père", options: ["père", "pierre", "perle", "per"], correct: "père" },
      { word: "mère", options: ["mère", "mer", "mare", "mar"], correct: "mère" },
      { word: "frère", options: ["frère", "fraise", "froid", "front"], correct: "frère" },
      { word: "sœur", options: ["sœur", "souris", "sourd", "source"], correct: "sœur" },
      { word: "ami", options: ["ami", "amie", "âme", "aimer"], correct: "ami" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  "10": {
    questions: [
      { word: "manger", options: ["manger", "manquer", "marcher", "manier"], correct: "manger" },
      { word: "boire", options: ["boire", "baisser", "bouger", "bondir"], correct: "boire" },
      { word: "parler", options: ["parler", "parer", "partir", "payer"], correct: "parler" },
      { word: "écouter", options: ["écouter", "écrire", "écouter", "échapper"], correct: "écouter" },
      { word: "lire", options: ["lire", "lier", "lutte", "lèvre"], correct: "lire" },
      { word: "écrire", options: ["écrire", "écouter", "écraser", "éclairer"], correct: "écrire" },
      { word: "voir", options: ["voir", "vouloir", "vendre", "venir"], correct: "voir" },
      { word: "aller", options: ["aller", "aider", "aimer", "agir"], correct: "aller" },
      { word: "faire", options: ["faire", "fêter", "fuir", "finir"], correct: "faire" },
      { word: "prendre", options: ["prendre", "penser", "payer", "pleurer"], correct: "prendre" },
    ],
    audios: { correct: correctFrench, incorrect: incorrectFrench, win: winFrench },
  },
  },

  german: {
    "1": {
    questions: [
      { word: "hallo", options: ["hallo", "halten", "hals", "haus"], correct: "hallo" },
      { word: "danke", options: ["danke", "denken", "dach", "du"], correct: "danke" },
      { word: "bitte", options: ["bitte", "bieten", "bisschen", "blieben"], correct: "bitte" },
      { word: "tschüss", options: ["tschüss", "tisch", "tier", "tag"], correct: "tschüss" },
      { word: "ja", options: ["ja", "jagd", "jahr", "januar"], correct: "ja" },
      { word: "nein", options: ["nein", "nebel", "neu", "neun"], correct: "nein" },
      { word: "vater", options: ["vater", "vogel", "viel", "vier"], correct: "vater" },
      { word: "mutter", options: ["mutter", "müde", "müll", "muss"], correct: "mutter" },
      { word: "bruder", options: ["bruder", "brot", "brunnen", "braun"], correct: "bruder" },
      { word: "schwester", options: ["schwester", "schwein", "schwer", "schwamm"], correct: "schwester" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "2": {
    questions: [
      { word: "freund", options: ["freund", "freiheit", "früh", "froh"], correct: "freund" },
      { word: "schule", options: ["schule", "schuh", "schön", "schnee"], correct: "schule" },
      { word: "lehrer", options: ["lehrer", "lehre", "leise", "leicht"], correct: "lehrer" },
      { word: "kind", options: ["kind", "kinder", "kilo", "kirche"], correct: "kind" },
      { word: "essen", options: ["essen", "erste", "esel", "ecke"], correct: "essen" },
      { word: "trinken", options: ["trinken", "trennen", "treffen", "tragen"], correct: "trinken" },
      { word: "wasser", options: ["wasser", "wachs", "woche", "wunder"], correct: "wasser" },
      { word: "brot", options: ["brot", "brötchen", "bruder", "braut"], correct: "brot" },
      { word: "milch", options: ["milch", "milde", "mittel", "miete"], correct: "milch" },
      { word: "apfel", options: ["apfel", "april", "abfall", "abend"], correct: "apfel" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "3": {
    questions: [
      { word: "haus", options: ["haus", "haut", "hahn", "hand"], correct: "haus" },
      { word: "zimmer", options: ["zimmer", "zinsen", "zirkus", "zeichen"], correct: "zimmer" },
      { word: "tisch", options: ["tisch", "tier", "titel", "tief"], correct: "tisch" },
      { word: "stuhl", options: ["stuhl", "stunde", "sturm", "stück"], correct: "stuhl" },
      { word: "bett", options: ["bett", "beet", "bitte", "boot"], correct: "bett" },
      { word: "fenster", options: ["fenster", "feste", "felder", "feuer"], correct: "fenster" },
      { word: "tür", options: ["tür", "tüte", "turm", "teil"], correct: "tür" },
      { word: "garten", options: ["garten", "garn", "garbe", "gabe"], correct: "garten" },
      { word: "straße", options: ["straße", "strahl", "streit", "strom"], correct: "straße" },
      { word: "stadt", options: ["stadt", "statt", "stark", "start"], correct: "stadt" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "4": {
    questions: [
      { word: "auto", options: ["auto", "apfel", "auge", "abend"], correct: "auto" },
      { word: "fahrrad", options: ["fahrrad", "farbe", "fahren", "fall"], correct: "fahrrad" },
      { word: "bus", options: ["bus", "buch", "bunt", "bühne"], correct: "bus" },
      { word: "zug", options: ["zug", "zunge", "zwei", "zahl"], correct: "zug" },
      { word: "flughafen", options: ["flughafen", "fliegen", "flasche", "fluss"], correct: "flughafen" },
      { word: "bahnhof", options: ["bahnhof", "bahn", "bär", "ball"], correct: "bahnhof" },
      { word: "straße", options: ["straße", "strumpf", "streik", "strich"], correct: "straße" },
      { word: "weg", options: ["weg", "welt", "weiß", "welle"], correct: "weg" },
      { word: "brücke", options: ["brücke", "brief", "brot", "bruder"], correct: "brücke" },
      { word: "platz", options: ["platz", "plan", "pflicht", "preis"], correct: "platz" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "5": {
    questions: [
      { word: "arbeit", options: ["arbeit", "art", "arzt", "arm"], correct: "arbeit" },
      { word: "firma", options: ["firma", "form", "fahrt", "farbe"], correct: "firma" },
      { word: "büro", options: ["büro", "buch", "bunt", "bühne"], correct: "büro" },
      { word: "chef", options: ["chef", "chefkoch", "chefin", "check"], correct: "chef" },
      { word: "kollege", options: ["kollege", "kohle", "kugel", "koffer"], correct: "kollege" },
      { word: "projekt", options: ["projekt", "produkt", "prozess", "profi"], correct: "projekt" },
      { word: "meeting", options: ["meeting", "mittag", "mittel", "miete"], correct: "meeting" },
      { word: "pause", options: ["pause", "pass", "paar", "passe"], correct: "pause" },
      { word: "urlaub", options: ["urlaub", "uhr", "ufer", "um"], correct: "urlaub" },
      { word: "ferien", options: ["ferien", "firma", "farbe", "fragen"], correct: "ferien" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "6": {
    questions: [
      { word: "morgen", options: ["morgen", "möglich", "monat", "mutter"], correct: "morgen" },
      { word: "mittag", options: ["mittag", "miete", "milch", "mittel"], correct: "mittag" },
      { word: "abend", options: ["abend", "abfahrt", "apfel", "auto"], correct: "abend" },
      { word: "nacht", options: ["nacht", "nicht", "nase", "neu"], correct: "nacht" },
      { word: "jahr", options: ["jahr", "jagd", "ja", "januar"], correct: "jahr" },
      { word: "woche", options: ["woche", "wolle", "wohl", "wolf"], correct: "woche" },
      { word: "tag", options: ["tag", "tanz", "tank", "tal"], correct: "tag" },
      { word: "stunde", options: ["stunde", "stuhl", "sturm", "stück"], correct: "stunde" },
      { word: "minute", options: ["minute", "mütze", "mutter", "milch"], correct: "minute" },
      { word: "sekunde", options: ["sekunde", "seite", "seele", "see"], correct: "sekunde" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "7": {
    questions: [
      { word: "eins", options: ["eins", "eis", "eile", "ecke"], correct: "eins" },
      { word: "zwei", options: ["zwei", "zeit", "zehn", "zeigen"], correct: "zwei" },
      { word: "drei", options: ["drei", "dreh", "dach", "dame"], correct: "drei" },
      { word: "vier", options: ["vier", "viel", "vogel", "vater"], correct: "vier" },
      { word: "fünf", options: ["fünf", "film", "form", "frau"], correct: "fünf" },
      { word: "sechs", options: ["sechs", "seite", "see", "segel"], correct: "sechs" },
      { word: "sieben", options: ["sieben", "sieg", "sitz", "sicht"], correct: "sieben" },
      { word: "acht", options: ["acht", "art", "arm", "ab"], correct: "acht" },
      { word: "neun", options: ["neun", "neu", "nein", "nacht"], correct: "neun" },
      { word: "zehn", options: ["zehn", "zeit", "ziel", "ziehen"], correct: "zehn" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "8": {
    questions: [
      { word: "rot", options: ["rot", "ruhig", "raus", "reis"], correct: "rot" },
      { word: "blau", options: ["blau", "blut", "blatt", "blase"], correct: "blau" },
      { word: "grün", options: ["grün", "grund", "gruß", "gruppe"], correct: "grün" },
      { word: "gelb", options: ["gelb", "geld", "genau", "gehen"], correct: "gelb" },
      { word: "schwarz", options: ["schwarz", "schwer", "schwanz", "schwach"], correct: "schwarz" },
      { word: "weiß", options: ["weiß", "weise", "welt", "weg"], correct: "weiß" },
      { word: "grau", options: ["grau", "grab", "grad", "graf"], correct: "grau" },
      { word: "braun", options: ["braun", "brief", "brot", "bruder"], correct: "braun" },
      { word: "rosa", options: ["rosa", "rost", "ruhe", "raupe"], correct: "rosa" },
      { word: "lila", options: ["lila", "linie", "licht", "liste"], correct: "lila" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "9": {
    questions: [
      { word: "kopf", options: ["kopf", "koffer", "kuchen", "küche"], correct: "kopf" },
      { word: "hand", options: ["hand", "haus", "hund", "hahn"], correct: "hand" },
      { word: "fuß", options: ["fuß", "fahrt", "farbe", "frage"], correct: "fuß" },
      { word: "bein", options: ["bein", "bahn", "biene", "bier"], correct: "bein" },
      { word: "auge", options: ["auge", "auto", "abend", "apfel"], correct: "auge" },
      { word: "ohr", options: ["ohr", "ort", "ofen", "oben"], correct: "ohr" },
      { word: "mund", options: ["mund", "mutter", "milch", "müll"], correct: "mund" },
      { word: "nase", options: ["nase", "nacht", "name", "nah"], correct: "nase" },
      { word: "herz", options: ["herz", "heiß", "herr", "her"], correct: "herz" },
      { word: "bauch", options: ["bauch", "baum", "bahn", "bank"], correct: "bauch" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  "10": {
    questions: [
      { word: "laufen", options: ["laufen", "lassen", "leben", "lesen"], correct: "laufen" },
      { word: "gehen", options: ["gehen", "geben", "glauben", "gehören"], correct: "gehen" },
      { word: "sehen", options: ["sehen", "sein", "sagen", "sitzen"], correct: "sehen" },
      { word: "sprechen", options: ["sprechen", "springen", "spielen", "stehen"], correct: "sprechen" },
      { word: "schreiben", options: ["schreiben", "schreien", "schreiten", "schrien"], correct: "schreiben" },
      { word: "lesen", options: ["lesen", "lassen", "leben", "leisten"], correct: "lesen" },
      { word: "essen", options: ["essen", "erste", "esel", "ecke"], correct: "essen" },
      { word: "trinken", options: ["trinken", "trennen", "treffen", "tragen"], correct: "trinken" },
      { word: "machen", options: ["machen", "möchten", "müssen", "merken"], correct: "machen" },
      { word: "arbeiten", options: ["arbeiten", "antworten", "ankommen", "aussehen"], correct: "arbeiten" },
    ],
    audios: { correct: correctGerman, incorrect: incorrectGerman, win: winGerman },
  },
  },
};


import React, { useState, useEffect } from 'react';
import { Button, Alert } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

import correctEng from '../assets/correct.mp3';
import incorrectEng from '../assets/incorrect.mp3';
import winEng from '../assets/win.mp3';

import correctFrench from '../assets/correct.mp3';
import incorrectFrench from '../assets/incorrect.mp3';
import winFrench from '../assets/win.mp3';

import correctGerman from '../assets/correct.mp3';
import incorrectGerman from '../assets/incorrect.mp3';
import winGerman from '../assets/win.mp3';

interface Question {
  word: string;
  options: string[];
  correct: string;
}


const LandingCourse: React.FC = () => {
  const { coursePath, levelId } = useParams<{ coursePath: string; levelId: string }>();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [disabledButtons, setDisabledButtons] = useState(false);

  const [correctAudio, setCorrectAudio] = useState<HTMLAudioElement | null>(null);
  const [incorrectAudio, setIncorrectAudio] = useState<HTMLAudioElement | null>(null);
  const [winAudio, setWinAudio] = useState<HTMLAudioElement | null>(null);

  const course = coursePath && levelId && data[coursePath][levelId];

  useEffect(() => {
    const synth = window.speechSynthesis;
    const loadVoices = () => setVoices(synth.getVoices());

    loadVoices();
    synth.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (course) {
      setCorrectAudio(new Audio(course.audios.correct));
      setIncorrectAudio(new Audio(course.audios.incorrect));
      setWinAudio(new Audio(course.audios.win));
    }
  }, [course]);

  const playSpeech = (text: string) => {
    const synth = window.speechSynthesis;
    const msg = new SpeechSynthesisUtterance(text);

    let selectedVoice = voices.find(v =>
      (coursePath === 'english' && (v.lang === 'en-GB' || v.lang.startsWith('en'))) ||
      (coursePath === 'french' && v.lang.startsWith('fr')) ||
      (coursePath === 'german' && v.lang.startsWith('de'))
    );

    if (selectedVoice) msg.voice = selectedVoice;
    else console.warn(`No voice found for language: ${coursePath}`);

    msg.rate = 1;
    msg.pitch = 1;
    synth.speak(msg);
  };

  const handleOptionClick = (option: string) => {
    if (!course || disabledButtons) return;

    setSelectedOption(option);
    setDisabledButtons(true);

    if (option === course.questions[current].correct) {
      correctAudio?.play();
      setShowSuccess(true);
      setScore(score + 1);

      if (current < course.questions.length - 1) {
        setTimeout(() => {
          setCurrent(current + 1);
          setShowSuccess(false);
          setSelectedOption(null);
          setDisabledButtons(false);
        }, 1000);
      } else {
        winAudio?.play();
        setFinished(true);
      }
    } else {
      incorrectAudio?.play();
      setShowSuccess(false);

      setTimeout(() => {
        setSelectedOption(null);
        setDisabledButtons(false);
      }, 1000);
    }
  };

  if (!course) return <p className="text-center text-red-500">Course not found</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow rounded p-5">
      <h2 className="text-xl font-bold mb-4">
        {coursePath?.toUpperCase()} Level {levelId} | Question {current + 1} of {course.questions.length}
      </h2>

      <Button type="primary" onClick={() => playSpeech(course.questions[current].word)}>
        🎧 Listening
      </Button>

      <div className="grid grid-cols-2 gap-4 mt-6">
        {course.questions[current].options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={disabledButtons}
            className={
              selectedOption === option && option === course.questions[current].correct
                ? 'bg-green-500 text-white border-none'
                : ''
            }
          >
            {option}
          </Button>
        ))}
      </div>

      {showSuccess && (
        <div className="mt-5">
          <Alert message="Correct! ✅" type="success" showIcon className="mt-4" />
        </div>
      )}

      {finished && (
        <div className="mt-6">
          <Alert
            message={`Finished! Your score: ${score}/${course.questions.length}`}
            type="success"
            showIcon
          />
          <Button
            type="primary"
            className="mt-4"
            onClick={() => navigate(`/levels/${coursePath}`)}
          >
            Go to Levels
          </Button>
        </div>
      )}

      <p className="mt-6 font-semibold">Score: {score}</p>
    </div>
  );
};

export default LandingCourse;
