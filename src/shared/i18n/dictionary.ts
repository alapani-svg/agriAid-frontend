export type Lang = "en" | "fr";

export interface Dictionary {
  nav: string[];
  actions: {
    signIn: string;
    getStarted: string;
    getStartedFree: string;
    seeHow: string;
  };
  hero: {
    badge: string;
    headlinePre: string;
    headlineHighlight: string;
    subtitle: string;
    microcopy: string;
    scoreEyebrow: string;
    scoreOverview: string;
    highTier: string;
    maxTerm: string;
    years: string;
    repayment: string;
    onTime: string;
    receiptTitle: string;
    activeCollateral: string;
  };
  partnersIntro: string;
  partnersFull: string[];
  problem: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
    solutionEyebrow: string;
    solutionTitle: string;
    solutionSubtitle: string;
    pillars: { title: string; text: string }[];
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  roles: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { name: string; text: string }[];
  };
  credibility: {
    eyebrow: string;
    title: string;
    subtitle: string;
    weightsTitle: string;
    tiersTitle: string;
    weights: string[];
    tiers: { tier: string; term: string }[];
    scoreLabel: string;
    disclaimer: string;
  };
  stats: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: string[];
    source: string;
  };
  tech: {
    eyebrow: string;
    title: string;
    subtitle: string;
    builtOn: string;
    items: { title: string; text: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    benefits: string[];
    fullName: string;
    fullNamePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    role: string;
    selectRole: string;
    roleOptions: string[];
    region: string;
    selectRegion: string;
    regionOptions: string[];
    submit: string;
    privacy: string;
    successTitle: string;
    successGreeting: string;
    successRest: string;
    errors: { name: string; email: string; role: string; region: string };
  };
  footer: {
    tagline: string;
    platformTitle: string;
    platformLinks: string[];
    audienceTitle: string;
    audienceLinks: string[];
    rights: string;
    privacy: string;
    terms: string;
  };
}

const en: Dictionary = {
  nav: ["Platform", "Features", "How it works", "Technology", "Contact"],
  actions: {
    signIn: "Sign In",
    getStarted: "Get Started",
    getStartedFree: "Get started free",
    seeHow: "See how it works",
  },
  hero: {
    badge: "Built for Cameroon's producers",
    headlinePre: "Turn everyday farm activity into ",
    headlineHighlight: "verifiable credit",
    subtitle:
      "AgriAid documents your harvests and stock, certifies warehouse deposits, and builds an objective activity history, so producers can unlock financing of up to 20 years.",
    microcopy:
      "No cost to join, works on low-bandwidth connections, and your data stays yours",
    scoreEyebrow: "Credibility score",
    scoreOverview: "Cooperative overview",
    highTier: "High tier",
    maxTerm: "Maximum eligible term",
    years: "20 yrs",
    repayment: "Repayment history",
    onTime: "On-time, 12 / 12",
    receiptTitle: "Certified maize warehouse receipt",
    activeCollateral: "Active collateral",
  },
  partnersIntro: "Designed to work with the institutions farmers rely on",
  partnersFull: [
    "Ministry of Agriculture & Rural Development",
    "Ministry of Livestock & Fisheries",
    "Ministry of Finance",
    "Commercial lenders",
    "MFIs & cooperatives",
    "Development partners",
  ],
  problem: {
    eyebrow: "The problem",
    title: "Hard work that lenders can't see",
    subtitle:
      "Producers build real value every season, but without records or collateral it stays invisible to the institutions that could finance their growth.",
    items: [
      {
        title: "No documented history",
        text: "Farmers work for years but keep no verifiable record of harvests, storage, or sales, so lenders have nothing to assess.",
      },
      {
        title: "No acceptable collateral",
        text: "Stock sits in stores with no certification, so it cannot be pledged against a loan or trusted by a financier.",
      },
      {
        title: "No path to financing",
        text: "Without history or collateral, producers are locked out of formal credit and long-term investment.",
      },
    ],
    solutionEyebrow: "The solution",
    solutionTitle: "One platform that makes value verifiable",
    solutionSubtitle:
      "AgriAid connects documentation, certified storage and scoring so producers earn credibility that institutions can trust.",
    pillars: [
      {
        title: "Continuous documentation",
        text: "Every harvest, movement and sale is logged, building an objective activity history over time.",
      },
      {
        title: "Certified warehouse receipts",
        text: "Deposited stock is inspected and certified into receipts that act as verifiable, pledgeable collateral.",
      },
      {
        title: "Automated credibility scoring",
        text: "Documented activity and repayment are turned into a transparent score that unlocks graduated financing.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything a producer needs in one place",
    subtitle:
      "From documenting daily activity to unlocking long-term financing, built to be simple, verifiable and useful offline.",
    items: [
      {
        title: "Movement documentation",
        text: "Record harvests, deposits, withdrawals and sales from any device, building a tamper-evident trail.",
      },
      {
        title: "Automated credibility score",
        text: "A transparent, weighted score computed from verified activity and repayment history.",
      },
      {
        title: "Certified warehouse receipts",
        text: "Turn certified stock into QR-verifiable receipts that institutions accept as collateral.",
      },
      {
        title: "Financing up to 20 years",
        text: "Graduated terms, from short working capital to 20-year structural loans, matched to your score.",
      },
      {
        title: "Marketplace & fair prices",
        text: "List produce, receive purchase orders and see live market prices by city to sell with confidence.",
      },
      {
        title: "Weather & climate alerts",
        text: "Regional weather and climate alerts help protect stored stock and plan planting and harvest.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "From daily activity to a loan in four steps",
    subtitle:
      "A simple, repeatable cycle that compounds into credibility and access to financing.",
    items: [
      {
        title: "Document activity",
        text: "Log harvests, movements and sales as they happen, with no paperwork and offline-friendly.",
      },
      {
        title: "Store & certify",
        text: "Deposit stock at a certified warehouse; it is inspected and issued as a verifiable receipt.",
      },
      {
        title: "Build credibility",
        text: "Your documented, verified activity grows an objective credibility score over time.",
      },
      {
        title: "Access financing",
        text: "Share your score and receipts with financing institutions to unlock loans up to 20 years.",
      },
    ],
  },
  roles: {
    eyebrow: "Who it's for",
    title: "One ecosystem, every role connected",
    subtitle:
      "AgriAid gives each participant the tools they need, and a shared, trusted record between them.",
    items: [
      {
        name: "Farmers & CIGs",
        text: "Document activity, certify stock and build a credit history that opens the door to financing.",
      },
      {
        name: "Financing institutions",
        text: "Assess producers with objective scores and receipt-backed collateral before lending.",
      },
      {
        name: "Warehouse managers",
        text: "Track deposits and withdrawals and issue certified receipts against stored stock.",
      },
      {
        name: "Buyers & traders",
        text: "Discover verified produce, place purchase orders and transact on fair, transparent prices.",
      },
      {
        name: "Government bodies",
        text: "Access regional reporting on production, storage and financing to guide policy.",
      },
    ],
  },
  credibility: {
    eyebrow: "Credibility score",
    title: "A transparent score, not a black box",
    subtitle:
      "Producers and lenders see exactly what drives the score, and how it maps to financing terms.",
    weightsTitle: "How the score is weighted",
    tiersTitle: "Score to financing terms",
    weights: [
      "Consistency & frequency of movements",
      "Independently verified movements",
      "Repayment history on prior loans",
      "Length & continuity of platform use",
      "Volume & value of certified stock",
    ],
    tiers: [
      { tier: "Building", term: "Short-term working capital" },
      { tier: "Established", term: "Up to 5-year loans" },
      { tier: "Strong", term: "Up to 10-year loans" },
      { tier: "High", term: "Up to 20-year financing" },
    ],
    scoreLabel: "Score",
    disclaimer:
      "The score informs lending decisions but does not replace an institution's own underwriting. Final terms remain at the discretion of each financing partner.",
  },
  stats: {
    eyebrow: "Why it matters",
    title: "A financing gap holding back a whole economy",
    subtitle:
      "Agriculture powers Cameroon, yet most producers can't reach the credit that would let them grow.",
    labels: [
      "of Cameroon's GDP comes from agriculture",
      "of the active population works in agriculture",
      "of agricultural labour is carried out by women",
      "of smallholders access formal agricultural credit",
    ],
    source:
      "Indicative figures drawn from national and development-agency estimates; used to illustrate the financing gap AgriAid addresses.",
  },
  tech: {
    eyebrow: "Technology & access",
    title: "Trustworthy, secure and built for the field",
    subtitle:
      "AgriAid is engineered so records can be trusted, data stays protected, and the platform works wherever farmers do.",
    builtOn: "Built on",
    items: [
      {
        title: "Verifiability",
        text: "Independently confirmed movements and certified receipts make records trustworthy end to end.",
      },
      {
        title: "Role-based security",
        text: "Every role (farmer, warehouse, lender, buyer, government) sees only what it should.",
      },
      {
        title: "Low-bandwidth ready",
        text: "Built to stay usable on slow, intermittent rural connections.",
      },
      {
        title: "Accessible by design",
        text: "Clear language, large targets and simple flows for varied digital literacy.",
      },
    ],
  },
  cta: {
    eyebrow: "Get started",
    title: "Start building your verifiable credit today",
    subtitle:
      "Join AgriAid to document your activity, certify your stock and open the door to financing. Tell us a little about you and we'll be in touch.",
    benefits: [
      "No cost to join",
      "No credit card required",
      "Your data stays yours",
    ],
    fullName: "Full name",
    fullNamePlaceholder: "e.g. Amina Njoya",
    email: "Email address",
    emailPlaceholder: "you@example.com",
    role: "Role",
    selectRole: "Select role",
    roleOptions: [
      "Farmer / CIG",
      "Financing institution",
      "Warehouse manager",
      "Buyer / trader",
      "Government body",
    ],
    region: "Region",
    selectRegion: "Select region",
    regionOptions: [
      "Adamawa",
      "Centre",
      "East",
      "Far North",
      "Littoral",
      "North",
      "North-West",
      "South",
      "South-West",
      "West",
    ],
    submit: "Get started free",
    privacy: "We respect your privacy. No spam, just onboarding help.",
    successTitle: "You're on the list!",
    successGreeting: "Thanks",
    successRest:
      "We'll reach out with next steps to get your cooperative onboarded to AgriAid.",
    errors: {
      name: "Please enter your full name.",
      email: "Please enter a valid email address.",
      role: "Please select your role.",
      region: "Please select your region.",
    },
  },
  footer: {
    tagline:
      "AgriAid turns everyday farm activity into verifiable credit, documenting harvests, certifying stock and connecting Cameroon's producers to financing.",
    platformTitle: "Platform",
    platformLinks: ["Platform", "Features", "How it works", "Credibility score"],
    audienceTitle: "Who it's for",
    audienceLinks: [
      "Farmers & CIGs",
      "Financing institutions",
      "Warehouse managers",
      "Buyers & traders",
    ],
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
};

const fr: Dictionary = {
  nav: ["Plateforme", "Fonctionnalités", "Comment ça marche", "Technologie", "Contact"],
  actions: {
    signIn: "Se connecter",
    getStarted: "Commencer",
    getStartedFree: "Commencer gratuitement",
    seeHow: "Voir comment ça marche",
  },
  hero: {
    badge: "Conçu pour les producteurs du Cameroun",
    headlinePre: "Transformez l'activité agricole quotidienne en ",
    headlineHighlight: "crédit vérifiable",
    subtitle:
      "AgriAid documente vos récoltes et vos stocks, certifie les dépôts en entrepôt et construit un historique d'activité objectif, afin que les producteurs puissent débloquer un financement allant jusqu'à 20 ans.",
    microcopy:
      "Adhésion gratuite, fonctionne sur les connexions à faible débit, et vos données restent les vôtres",
    scoreEyebrow: "Score de crédibilité",
    scoreOverview: "Aperçu de la coopérative",
    highTier: "Niveau élevé",
    maxTerm: "Durée maximale éligible",
    years: "20 ans",
    repayment: "Historique de remboursement",
    onTime: "À temps, 12 / 12",
    receiptTitle: "Récépissé d'entrepôt de maïs certifié",
    activeCollateral: "Garantie active",
  },
  partnersIntro:
    "Conçu pour travailler avec les institutions dont dépendent les agriculteurs",
  partnersFull: [
    "Ministère de l'Agriculture et du Développement Rural",
    "Ministère de l'Élevage, des Pêches et des Industries Animales",
    "Ministère des Finances",
    "Prêteurs commerciaux",
    "IMF et coopératives",
    "Partenaires de développement",
  ],
  problem: {
    eyebrow: "Le problème",
    title: "Un travail acharné que les prêteurs ne voient pas",
    subtitle:
      "Les producteurs créent une réelle valeur chaque saison, mais sans registres ni garanties, elle reste invisible pour les institutions qui pourraient financer leur croissance.",
    items: [
      {
        title: "Aucun historique documenté",
        text: "Les agriculteurs travaillent pendant des années mais ne conservent aucun registre vérifiable des récoltes, du stockage ou des ventes, si bien que les prêteurs n'ont rien à évaluer.",
      },
      {
        title: "Aucune garantie acceptable",
        text: "Le stock reste dans des magasins sans certification, il ne peut donc pas être mis en gage pour un prêt ni inspirer confiance à un financier.",
      },
      {
        title: "Aucun accès au financement",
        text: "Sans historique ni garantie, les producteurs sont exclus du crédit formel et de l'investissement à long terme.",
      },
    ],
    solutionEyebrow: "La solution",
    solutionTitle: "Une plateforme qui rend la valeur vérifiable",
    solutionSubtitle:
      "AgriAid relie la documentation, le stockage certifié et le scoring afin que les producteurs gagnent une crédibilité digne de la confiance des institutions.",
    pillars: [
      {
        title: "Documentation continue",
        text: "Chaque récolte, mouvement et vente est enregistré, construisant un historique d'activité objectif au fil du temps.",
      },
      {
        title: "Récépissés d'entrepôt certifiés",
        text: "Le stock déposé est inspecté et certifié en récépissés qui servent de garantie vérifiable et mobilisable.",
      },
      {
        title: "Scoring de crédibilité automatisé",
        text: "L'activité documentée et les remboursements sont transformés en un score transparent qui débloque un financement progressif.",
      },
    ],
  },
  features: {
    eyebrow: "Fonctionnalités",
    title: "Tout ce dont un producteur a besoin en un seul endroit",
    subtitle:
      "De la documentation de l'activité quotidienne au déblocage d'un financement à long terme, conçu pour être simple, vérifiable et utile hors ligne.",
    items: [
      {
        title: "Documentation des mouvements",
        text: "Enregistrez récoltes, dépôts, retraits et ventes depuis n'importe quel appareil, en construisant une piste infalsifiable.",
      },
      {
        title: "Score de crédibilité automatisé",
        text: "Un score transparent et pondéré, calculé à partir de l'activité vérifiée et de l'historique de remboursement.",
      },
      {
        title: "Récépissés d'entrepôt certifiés",
        text: "Transformez le stock certifié en récépissés vérifiables par QR que les institutions acceptent comme garantie.",
      },
      {
        title: "Financement jusqu'à 20 ans",
        text: "Des conditions progressives, du fonds de roulement court aux prêts structurels sur 20 ans, adaptées à votre score.",
      },
      {
        title: "Marché et prix équitables",
        text: "Publiez vos produits, recevez des bons de commande et consultez les prix du marché en direct par ville pour vendre en confiance.",
      },
      {
        title: "Alertes météo et climat",
        text: "Des alertes météo et climatiques régionales aident à protéger le stock et à planifier semis et récoltes.",
      },
    ],
  },
  how: {
    eyebrow: "Comment ça marche",
    title: "De l'activité quotidienne à un prêt en quatre étapes",
    subtitle:
      "Un cycle simple et répétable qui se cumule en crédibilité et en accès au financement.",
    items: [
      {
        title: "Documenter l'activité",
        text: "Enregistrez récoltes, mouvements et ventes au fur et à mesure, sans paperasse et compatible hors ligne.",
      },
      {
        title: "Stocker et certifier",
        text: "Déposez le stock dans un entrepôt certifié ; il est inspecté et émis sous forme de récépissé vérifiable.",
      },
      {
        title: "Bâtir la crédibilité",
        text: "Votre activité documentée et vérifiée fait croître un score de crédibilité objectif au fil du temps.",
      },
      {
        title: "Accéder au financement",
        text: "Partagez votre score et vos récépissés avec les institutions financières pour débloquer des prêts jusqu'à 20 ans.",
      },
    ],
  },
  roles: {
    eyebrow: "Pour qui",
    title: "Un écosystème, chaque rôle connecté",
    subtitle:
      "AgriAid donne à chaque participant les outils dont il a besoin, ainsi qu'un registre commun et fiable entre eux.",
    items: [
      {
        name: "Agriculteurs et GIC",
        text: "Documentez l'activité, certifiez le stock et bâtissez un historique de crédit qui ouvre la porte au financement.",
      },
      {
        name: "Institutions financières",
        text: "Évaluez les producteurs grâce à des scores objectifs et à des garanties adossées aux récépissés avant de prêter.",
      },
      {
        name: "Gestionnaires d'entrepôt",
        text: "Suivez les dépôts et les retraits et émettez des récépissés certifiés pour le stock entreposé.",
      },
      {
        name: "Acheteurs et négociants",
        text: "Découvrez des produits vérifiés, passez des bons de commande et échangez à des prix justes et transparents.",
      },
      {
        name: "Organismes publics",
        text: "Accédez à des rapports régionaux sur la production, le stockage et le financement pour orienter les politiques.",
      },
    ],
  },
  credibility: {
    eyebrow: "Score de crédibilité",
    title: "Un score transparent, pas une boîte noire",
    subtitle:
      "Producteurs et prêteurs voient exactement ce qui détermine le score et comment il se traduit en conditions de financement.",
    weightsTitle: "Comment le score est pondéré",
    tiersTitle: "Du score aux conditions de financement",
    weights: [
      "Régularité et fréquence des mouvements",
      "Mouvements vérifiés de façon indépendante",
      "Historique de remboursement des prêts antérieurs",
      "Durée et continuité de l'utilisation de la plateforme",
      "Volume et valeur du stock certifié",
    ],
    tiers: [
      { tier: "Débutant", term: "Fonds de roulement court terme" },
      { tier: "Établi", term: "Prêts jusqu'à 5 ans" },
      { tier: "Solide", term: "Prêts jusqu'à 10 ans" },
      { tier: "Élevé", term: "Financement jusqu'à 20 ans" },
    ],
    scoreLabel: "Score",
    disclaimer:
      "Le score éclaire les décisions de prêt mais ne remplace pas l'analyse de crédit propre à chaque institution. Les conditions finales restent à la discrétion de chaque partenaire financier.",
  },
  stats: {
    eyebrow: "Pourquoi c'est important",
    title: "Un déficit de financement qui freine toute une économie",
    subtitle:
      "L'agriculture fait tourner le Cameroun, pourtant la plupart des producteurs n'atteignent pas le crédit qui leur permettrait de croître.",
    labels: [
      "du PIB du Cameroun provient de l'agriculture",
      "de la population active travaille dans l'agriculture",
      "du travail agricole est réalisé par les femmes",
      "des petits exploitants accèdent au crédit agricole formel",
    ],
    source:
      "Chiffres indicatifs tirés d'estimations nationales et d'agences de développement ; utilisés pour illustrer le déficit de financement qu'AgriAid adresse.",
  },
  tech: {
    eyebrow: "Technologie et accès",
    title: "Fiable, sécurisé et conçu pour le terrain",
    subtitle:
      "AgriAid est conçu pour que les registres soient dignes de confiance, que les données restent protégées et que la plateforme fonctionne partout où travaillent les agriculteurs.",
    builtOn: "Construit avec",
    items: [
      {
        title: "Vérifiabilité",
        text: "Des mouvements confirmés de façon indépendante et des récépissés certifiés rendent les registres fiables de bout en bout.",
      },
      {
        title: "Sécurité par rôle",
        text: "Chaque rôle (agriculteur, entrepôt, prêteur, acheteur, gouvernement) ne voit que ce qu'il doit voir.",
      },
      {
        title: "Prêt pour le faible débit",
        text: "Conçu pour rester utilisable sur des connexions rurales lentes et intermittentes.",
      },
      {
        title: "Accessible par conception",
        text: "Un langage clair, de grandes cibles et des parcours simples pour des niveaux variés de littératie numérique.",
      },
    ],
  },
  cta: {
    eyebrow: "Commencer",
    title: "Commencez à bâtir votre crédit vérifiable dès aujourd'hui",
    subtitle:
      "Rejoignez AgriAid pour documenter votre activité, certifier votre stock et ouvrir la porte au financement. Parlez-nous un peu de vous et nous vous recontacterons.",
    benefits: [
      "Adhésion gratuite",
      "Aucune carte de crédit requise",
      "Vos données restent les vôtres",
    ],
    fullName: "Nom complet",
    fullNamePlaceholder: "ex. Amina Njoya",
    email: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.com",
    role: "Rôle",
    selectRole: "Sélectionnez un rôle",
    roleOptions: [
      "Agriculteur / GIC",
      "Institution financière",
      "Gestionnaire d'entrepôt",
      "Acheteur / négociant",
      "Organisme public",
    ],
    region: "Région",
    selectRegion: "Sélectionnez une région",
    regionOptions: [
      "Adamaoua",
      "Centre",
      "Est",
      "Extrême-Nord",
      "Littoral",
      "Nord",
      "Nord-Ouest",
      "Sud",
      "Sud-Ouest",
      "Ouest",
    ],
    submit: "Commencer gratuitement",
    privacy:
      "Nous respectons votre vie privée. Pas de spam, juste de l'aide à l'inscription.",
    successTitle: "Vous êtes sur la liste !",
    successGreeting: "Merci",
    successRest:
      "Nous vous recontacterons avec les prochaines étapes pour intégrer votre coopérative à AgriAid.",
    errors: {
      name: "Veuillez saisir votre nom complet.",
      email: "Veuillez saisir une adresse e-mail valide.",
      role: "Veuillez sélectionner votre rôle.",
      region: "Veuillez sélectionner votre région.",
    },
  },
  footer: {
    tagline:
      "AgriAid transforme l'activité agricole quotidienne en crédit vérifiable, en documentant les récoltes, en certifiant le stock et en reliant les producteurs du Cameroun au financement.",
    platformTitle: "Plateforme",
    platformLinks: [
      "Plateforme",
      "Fonctionnalités",
      "Comment ça marche",
      "Score de crédibilité",
    ],
    audienceTitle: "Pour qui",
    audienceLinks: [
      "Agriculteurs et GIC",
      "Institutions financières",
      "Gestionnaires d'entrepôt",
      "Acheteurs et négociants",
    ],
    rights: "Tous droits réservés.",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, fr };
