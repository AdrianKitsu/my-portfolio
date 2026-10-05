import type { Dictionary } from "./en";

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    portfolio: "Portfolio",
    about: "À propos",
    downloadCv: "Télécharger le CV",
    tagline: "Développeur full-stack / plateforme",
    homeAria: "Aller à l'accueil",
    primary: "Principale",
    mobilePrimary: "Principale (mobile)",
    toggleMenu: "Ouvrir ou fermer le menu",
  },
  theme: {
    toggle: "Changer de thème",
    toLight: "Passer au mode clair",
    toDark: "Passer au mode sombre",
  },
  footer: {
    role: "Développeur full-stack / plateforme · Canada",
  },
  hero: {
    badge: "Basé à Canada · Disponible pour contrat et temps plein",
    heading:
      "Développeur full-stack qui conçoit des plateformes web performantes pour des clients d'entreprise.",
    intro:
      "Je conçois et exploite des plateformes web full-stack pour des équipes d'entreprise, en travaillant avec TypeScript, React, WordPress et des systèmes côté serveur. Je livre des fonctionnalités en misant sur la performance, la fiabilité et un code maintenable.",
    viewWork: "Voir mes projets",
    downloadCv: "Télécharger le CV",
    coreStrengths: "Forces principales",
    strengths: [
      {
        title: "React + TypeScript",
        description:
          "Blocs Gutenberg, systèmes d'interface, bibliothèques de composants.",
      },
      {
        title: "WordPress VIP / Ops",
        description:
          "Déploiements, performance, fiabilité, gouvernance multisite.",
      },
      {
        title: "Livraison en entreprise",
        description:
          "Solutions axées sur les flux de travail : compositions, gabarits, expérience d'édition.",
      },
    ],
    openTo: {
      label: "Ouvert aux postes en",
      roles: ["frontend", "plateforme", "opérations web"],
      and: " et",
      suffix: ".",
    },
  },
  projects: {
    heading: "Projets phares",
    intro:
      "Une sélection de réalisations : plateformes WordPress d'entreprise, composants React et opérations en production.",
  },
  clients: {
    heading: "Clients avec qui j’ai travaillé",
    intro:
      "Des marques grand public et d'entreprise dans la finance, l'alimentation, les médias, la santé et l'événementiel.",
  },
  about: {
    heading: "À propos",
    personalHeading: "Profil",
    personal: [
      "Je suis développeur full-stack et je conçois et exploite depuis plus de 4 ans des plateformes web en production pour des clients d'entreprise et des médias comme RBC, Les Aliments Maple Leaf, StackAdapt et le Comité olympique canadien.",
      "Mon travail va au-delà de la livraison de fonctionnalités. Je prends en charge des systèmes : architecture CMS, flux de déploiement, performance et fiabilité, dans les environnements de développement, de préproduction et de production. J'ai mené des améliorations de performance frontend allant jusqu'à 40 %, agi comme point d'escalade technique lors d'incidents critiques en production et conçu des systèmes de composants adoptés sur plusieurs plateformes clients.",
      "Je donne le meilleur de moi-même dans des environnements où l'on confie aux développeurs une réelle autonomie, des relations clients et des responsabilités en production. Pas seulement des tickets.",
    ],
    siteHeading: "À propos de ce site",
    site: "Conçu avec Next.js, TypeScript et Tailwind. Mon stack plus large comprend React, PHP, Node.js, MySQL, GraphQL et des API REST. J'approfondis actuellement Three.js pour les expériences interactives et AWS pour l'architecture infonuagique.",
    cvNote: "Mon CV est disponible ci-dessous.",
    downloadCv: "Télécharger le CV",
  },
  portfolio: {
    heading: "Projets phares",
    previous: "Projet précédent",
    next: "Projet suivant",
    visitSite: "Visiter le site",
  },
  notFound: {
    title: "Page introuvable",
    message: "La page que vous cherchez n’existe pas.",
    backHome: "Retour à l'accueil",
  },
  projectList: {
    "tab-future": {
      label: "Objectif avenir",
      cardTitle: "RBC - Objectif avenir",
      text: `Le projet Objectif avenir a été mon premier mandat d'envergure chez Trew Knowledge. Il portait sur la migration de l'ancien site du client vers WordPress et sur le développement d'une bibliothèque réutilisable de composants React personnalisés et dynamiques pour son réseau de sites. Mes principales responsabilités comprenaient la reconstruction des composants existants avec des capacités de données améliorées et la création de nouveaux composants sous forme de blocs Gutenberg entièrement personnalisables, offrant aux auteurs de contenu la flexibilité du glisser-déposer. Ces composants ont permis des mises en page cohérentes, de meilleures options d'analytique et de suivi, ainsi qu'une personnalisation visuelle simplifiée sur l'ensemble de la plateforme. J'ai également contribué à la création de types de publication personnalisés, de gabarits et de compositions afin de simplifier et d'accélérer davantage les flux de production de contenu.`,
      text2: ``,
      text3: ``,
    },
    "tab-mitch": {
      label: "Mitchell's",
      cardTitle: "Mitchell's Food",
      text: `Le site web de Mitchell’s Foods s'inscrivait dans une refonte complète de la marque, pour laquelle j'étais responsable du contrôle de la qualité et du raffinement du style frontend. J'ai révisé l'implémentation des composants sur l'ensemble du site afin d'en assurer la cohérence et l'utilisabilité, et j'ai mis à jour les styles visuels pour les aligner sur la nouvelle orientation de la marque. Ce travail comprenait l'ajustement des mises en page, la correction d'incohérences dans l'interface et une étroite collaboration avec l'équipe de design pour maintenir une apparence cohérente tout au long de la refonte.`,
      text2: ``,
      text3: ``,
    },
    "tab-tempeh": {
      label: "Lightlife",
      cardTitle: "Lightlife",
      text: `Lightlife est un site web que je maintiens et améliore activement selon les besoins du client. Lorsque la marque a lancé son initiative autour du tempeh, j'ai collaboré avec l'équipe de design pour créer une nouvelle série de composants destinés à la page de campagne Tempehfy. Comme le site avait été développé à l'origine avec un ancien système d'édition complète de site, nous avons mis en place des solutions de compatibilité pour prendre en charge des composants modernes basés sur Gutenberg. La page Tempehfy a été lancée en deux phases distinctes, chacune avec sa propre orientation visuelle. Malgré des délais serrés et des exigences changeantes, nous avons livré les deux lancements dans les temps. Mes principales contributions comprenaient le développement des nouveaux composants React, la configuration des pages et des gabarits, une coordination étroite avec les responsables du design et de la technique pour s'aligner sur la vision, la planification du déploiement et l'encadrement d'un nouveau développeur qui s'est joint au projet.`,
      text2: ``,
      text3: ``,
    },
    "tab-gns": {
      label: "Grab 'N Snack",
      cardTitle: "Grab 'N Snack",
      text: `Tout comme le projet Mitchell’s Foods, Grab ’N Snack était une refonte complète visant à moderniser l'identité visuelle. Bien que seuls quelques nouveaux composants aient été ajoutés, l'essentiel du travail portait sur des mises à jour du style global, le raffinement des mises en page et la refonte du style des composants hérités du thème parent afin d'assurer la cohérence avec la nouvelle orientation de la marque. Cela comprenait l'amélioration de l'adaptabilité, l'harmonisation de la typographie et des couleurs, ainsi que la correction d'incohérences d'interface dans les différents gabarits et types de pages. Malheureusement, le site a depuis été archivé par le client.`,
      text2: ``,
      text3: ``,
    },
    "tab-thought": {
      label: "Leadership avisé",
      cardTitle: "RBC - Leadership avisé",
      text: `Après le succès du premier projet de migration pour RBC, j'ai eu l'occasion d'aider à intégrer deux autres sites existants, Leadership avisé et l'Institut d'action climatique, à l'écosystème WordPress. Avec pour seules références les anciens sites et les nouveaux fichiers de design, notre équipe a travaillé étroitement avec le client pour définir le comportement de chaque composant, en formulant des recommandations sur les flux d'édition, la réutilisabilité et l'évolutivité dans Gutenberg.`,
      text2: `Mon rôle consistait à reconstruire les composants existants avec des fonctionnalités dynamiques améliorées pour offrir plus de flexibilité aux auteurs de contenu, ainsi qu'à développer de nouveaux blocs React conformes au système de design mis à jour. J'ai également créé des pages clés, des gabarits personnalisés, des menus de navigation et des compositions réutilisables afin de reproduire fidèlement la structure du site d'origine tout en offrant une expérience de publication nettement améliorée.`,
      text3: ``,
    },
    "tab-src": {
      label: "Centre des ressources de vente",
      cardTitle: "Assurance RBC - Centre des ressources de vente",
      text: `Fort de la confiance continue de nos partenaires chez RBC, j'ai eu l'occasion de diriger la migration et l'amélioration de leur Centre des ressources de vente. Le projet visait à transférer l'ensemble des formulaires, documents et vidéos vers un nouveau fournisseur d'hébergement et à tirer parti de son API pour créer des composants réutilisables dotés d'un filtrage avancé côté serveur, permettant d'afficher du contenu dynamique et unique d'une page à l'autre.`,
      text2: `Mon rôle consistait principalement à auditer les composants existants et à mettre à jour le style global pour l'aligner sur les nouvelles normes de la marque. J'ai reconstruit d'anciens composants pour en améliorer la fonctionnalité et l'adaptabilité, corrigé des erreurs préexistantes et développé de nouveaux blocs React. Mes tâches comprenaient aussi la création de gabarits, de la navigation du site et de compositions réutilisables, ainsi que l'intégration de l'i18n pour les traductions. Pendant les trois ou quatre premières semaines, en l'absence du chef d'équipe, j'ai pris en charge la rédaction des récits utilisateurs, la coordination directe avec les clients, les parties prenantes et les responsables du projet, la révision des maquettes Figma, la planification des approches de développement et la recommandation d'améliorations en matière d'UX et de flux de travail.`,
      text3: ``,
    },
    "tab-src-2": {
      label: "Centre des ressources de vente : phase 2",
      cardTitle: "Assurance RBC - Centre des ressources de vente : phase 2",
      text: `Après le lancement réussi du site, j'ai pris en charge la phase suivante d'améliorations en tant que seul développeur. Le travail portait sur l'élargissement de la recherche, du tri, du filtrage et de l'intégration de l'API Bynder. J'ai hérité du code d'un autre développeur et j'ai dû le comprendre et le faire évoluer de façon autonome, puisque celui-ci ne faisait plus partie de l'équipe.`,
      text2: `J'ai analysé les obstacles techniques, recommandé des solutions et mis en œuvre les améliorations, notamment un menu de tri par popularité et des liens entre des ressources Bynder connexes dans différentes langues. L'abonnement Bynder existant du client limitait les capacités de l'API, alors j'ai étudié la documentation et développé des solutions de contournement à l'aide de propriétés de métadonnées personnalisées afin de livrer les fonctionnalités demandées dans ces contraintes, avec un impact limité sur la performance.`,
      text3: `En parallèle du développement, j'ai géré la majeure partie de la coordination avec le client et de la livraison au quotidien : création des tickets, planification des réunions, animation des scrums, présentation des démos et communication de l'avancement. J'ai mené le travail de l'analyse et de la planification jusqu'à la mise en œuvre et aux présentations au client, en respectant toutes les échéances et en tenant les parties prenantes informées de l'avancement, des obstacles et des solutions proposées.`,
    },
    "tab-vac": {
      label: "Centre des arts visuels",
      cardTitle: "Centre des arts visuels",
      text: `Le Centre des arts visuels avait besoin d'une plateforme d'inscription dédiée pour regrouper ses camps en une expérience centralisée, en prévision de futures offres de cours. Bâti sur WooCommerce et une extension de billetterie, le site permet aux parents de découvrir les camps et d'y inscrire leurs enfants. J'ai pris en charge des volets clés de l'expérience d'inscription, notamment le style visuel, la sélection des billets, le paiement et la gestion des places épuisées.`,
      text2: `J'ai intégré l'orientation visuelle approuvée dans le style du site et peaufiné les parcours de sélection des billets et de paiement pour soutenir l'inscription aux camps. Mon travail a relié l'expérience visuelle aux fonctionnalités d'achat, offrant aux familles un parcours cohérent, du choix des billets jusqu'au paiement.`,
      text3: `J'ai également mis en œuvre la logique de rupture de stock qui détermine comment les billets de camp indisponibles sont présentés et gérés lors de l'inscription. Ce travail touchait un aspect essentiel de l'expérience de réservation : rendre la disponibilité claire et empêcher les utilisateurs de poursuivre avec des sélections épuisées. Ma contribution combinait l'intégration du design et la logique commerciale derrière l'inscription.`,
    },
  },
};

export default fr;
