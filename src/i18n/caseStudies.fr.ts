import type { CaseStudyContent, CaseStudyId } from "./caseStudyTypes";

const caseStudiesFr: Record<CaseStudyId, CaseStudyContent> = {
  xtalks: {
    label: "Xtalks",
    client: "Xtalks",
    title: "Rétablir une intégration critique d'inscription Zoom",
    focus: [
      "Développement back-end",
      "Intégration d'API tierces",
      "Migration OAuth",
      "Dépannage en production",
    ],
    technologies: ["PHP", "WordPress", "WooCommerce", "Zoom API", "OAuth 2.0"],
    sections: [
      {
        heading: "Le défi",
        blocks: [
          {
            type: "paragraph",
            text: "Xtalks utilisait une intégration WordPress sur mesure pour inscrire automatiquement les clients aux rencontres Zoom Peer Circle après un achat WooCommerce réussi.",
          },
          {
            type: "paragraph",
            text: "Lorsque l'intégration a cessé de fonctionner, les clients recevaient toujours leur confirmation d'achat, mais n'étaient plus inscrits aux rencontres Zoom associées. Ce parcours client essentiel était perturbé et exigeait une intervention manuelle pour donner accès aux rencontres.",
          },
          {
            type: "paragraph",
            text: "En analysant le problème, j'ai découvert que l'intégration dépendait du système d'authentification JWT de Zoom, abandonné en septembre 2023.",
          },
        ],
      },
      {
        heading: "Mon approche",
        blocks: [
          {
            type: "paragraph",
            text: "J'ai pris en charge l'analyse, la mise à jour et la validation de l'intégration existante. Le travail comprenait :",
          },
          {
            type: "list",
            items: [
              {
                lead: "Migration de l'authentification",
                text: "Refonte de l'authentification à l'API Zoom de l'extension sur mesure pour utiliser OAuth, en remplacement du mécanisme JWT obsolète.",
              },
              {
                lead: "Dépannage de l'API",
                text: "Analyse des demandes de jetons d'accès échouées, des identifiants manquants et des réponses inattendues de l'API.",
              },
              {
                lead: "Débogage back-end",
                text: "Suivi des données de commande WooCommerce à travers le flux d'inscription, afin de cerner les problèmes liés aux identifiants de rencontre, aux informations client et aux données envoyées à l'API.",
              },
              {
                lead: "Rétablissement du flux",
                text: "Correction de la logique de création des utilisateurs Zoom, de leur affectation aux bons groupes et de leur inscription aux rencontres.",
              },
              {
                lead: "Tests de bout en bout",
                text: "Validation de l'intégration au moyen d'achats tests, d'activations de nouveaux utilisateurs, d'affectations de groupes Zoom, d'inscriptions aux rencontres et de courriels de confirmation, en local et en préproduction.",
              },
            ],
          },
        ],
      },
      {
        heading: "Le résultat",
        blocks: [
          {
            type: "paragraph",
            text: "L'intégration a été reconstruite autour de l'authentification OAuth, et l'ensemble du flux d'inscription a été validé en préproduction.",
          },
          {
            type: "paragraph",
            text: "Les tests ont confirmé que les nouveaux clients pouvaient effectuer un achat, activer leur compte Zoom, être affectés aux bons groupes et recevoir la confirmation de leur inscription.",
          },
          {
            type: "paragraph",
            text: "Après la validation en préproduction, les modifications ont été fusionnées et déployées en production pour une vérification finale par le client.",
          },
        ],
      },
      {
        heading: "Leçons techniques",
        blocks: [
          {
            type: "paragraph",
            text: "Ce projet exigeait de diagnostiquer des défaillances à travers plusieurs systèmes interconnectés, plutôt que de simplement remplacer une méthode d'authentification.",
          },
          {
            type: "paragraph",
            text: "Il a renforcé l'importance de maintenir la compatibilité avec les API tierces, de suivre les données d'un système à l'autre et de valider les parcours utilisateurs complets avant tout déploiement en production.",
          },
        ],
      },
    ],
  },
  stackadapt: {
    label: "StackAdapt",
    client: "StackAdapt",
    title: "Optimiser la performance front-end et l'exécution JavaScript",
    focus: [
      "Performance web",
      "Optimisation JavaScript",
      "Intégrations tierces",
      "Dépannage en production",
    ],
    technologies: [
      "TypeScript",
      "JavaScript",
      "PHP",
      "WordPress VIP",
      "Gutenberg",
      "HubSpot",
      "Google reCAPTCHA",
      "Lighthouse",
    ],
    sections: [
      {
        heading: "Le défi",
        blocks: [
          {
            type: "paragraph",
            text: "StackAdapt souhaitait améliorer la performance de son site marketing sur ordinateur et sur mobile, en particulier en réduisant le Total Blocking Time (TBT) et l'exécution JavaScript superflue.",
          },
          {
            type: "paragraph",
            text: "Les premières analyses ont révélé que des scripts tiers, notamment les intégrations de formulaires HubSpot et Google reCAPTCHA, alourdissaient le traitement par le navigateur lors du chargement.",
          },
          {
            type: "paragraph",
            text: "Ces ressources étaient chargées sur des pages qui n'en avaient pas forcément besoin, ce qui pouvait nuire au temps de chargement et à la réactivité.",
          },
          {
            type: "paragraph",
            text: "Le défi consistait à réduire l'exécution JavaScript inutile sans perturber les formulaires de génération de prospects, l'analytique ni les fonctionnalités existantes du site.",
          },
        ],
      },
      {
        heading: "Mon approche",
        blocks: [
          {
            type: "paragraph",
            text: "J'ai dirigé l'analyse technique et mis en œuvre des optimisations ciblées pour alléger la charge du navigateur.",
          },
          { type: "subheading", text: "1. Audit de l'exécution JavaScript" },
          {
            type: "paragraph",
            text: "À l'aide de Lighthouse, de PageSpeed Insights et d'une analyse du code, j'ai examiné le temps d'exécution JavaScript, l'activité du thread principal, les dépendances tierces et les ressources des blocs Gutenberg sur mesure.",
          },
          {
            type: "paragraph",
            text: "J'ai ciblé les ressources HubSpot et reCAPTCHA chargées globalement comme pistes d'amélioration, tout en confirmant que plusieurs scripts de blocs Gutenberg étaient déjà chargés de façon conditionnelle.",
          },
          {
            type: "subheading",
            text: "2. Mise en place du chargement conditionnel des scripts",
          },
          {
            type: "paragraph",
            text: "J'ai modifié le front-end pour n'initialiser reCAPTCHA qu'en présence des composants de formulaire concernés.",
          },
          {
            type: "paragraph",
            text: "J'ai aussi mis en place le chargement conditionnel des scripts HubSpot, évitant une initialisation inutile sur les pages sans formulaire.",
          },
          {
            type: "paragraph",
            text: "Ces changements visaient la surcharge d'exécution JavaScript tout en préservant le fonctionnement des intégrations existantes.",
          },
          {
            type: "subheading",
            text: "3. Résolution des problèmes de compatibilité entre environnements",
          },
          {
            type: "paragraph",
            text: "Pendant les tests, des différences entre le développement, la préproduction et la production ont mis au jour plusieurs problèmes d'intégration.",
          },
          {
            type: "paragraph",
            text: "J'ai analysé des incohérences liées aux modèles de page WordPress, à la détection des blocs Gutenberg et au comportement de la mise en cache de WordPress VIP.",
          },
          {
            type: "paragraph",
            text: "La solution finale tenait compte des formulaires affichés à la fois dans le contenu des pages et dans des modèles réutilisables, afin que les scripts se chargent au besoin sans revenir à un chargement systématique sur tout le site.",
          },
          { type: "subheading", text: "4. Tests et déploiement" },
          {
            type: "paragraph",
            text: "J'ai mené plusieurs séries de tests Lighthouse, d'analyses de régression, d'assurance qualité et de validation en préproduction avant le déploiement en production.",
          },
          {
            type: "paragraph",
            text: "Il fallait concilier les gains de performance et la fiabilité de formulaires essentiels pour l'entreprise.",
          },
        ],
      },
      {
        heading: "Résultats mesurés",
        blocks: [
          {
            type: "stats",
            items: [
              {
                value: "35 %",
                label: "De travail en moins sur le thread principal",
              },
              { value: "4,0 s → 2,6 s", label: "Travail du thread principal" },
              {
                value: "50–80 ms",
                label: "TBT sur la plupart des pages testées",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Pour une page représentative testée en préproduction :",
          },
          {
            type: "table",
            head: ["Indicateur", "Avant", "Après"],
            rows: [
              { cells: ["Travail du thread principal", "4,0 s", "2,6 s"] },
              {
                cells: [
                  "Réduction du travail du thread principal",
                  "—",
                  "35 %",
                ],
                highlight: true,
              },
              { cells: ["Évaluation du TBT", "Jaune", "Vert"] },
              {
                cells: [
                  "Diagnostic d'exécution JavaScript",
                  "2,2 s signalées",
                  "Plus signalé",
                ],
              },
              { cells: ["Score de performance Lighthouse", "66", "81"] },
            ],
          },
          {
            type: "paragraph",
            text: "Des tests d'assurance qualité supplémentaires en préproduction ont relevé des valeurs de TBT d'environ 50 à 80 ms sur la plupart des pages testées.",
          },
          {
            type: "paragraph",
            text: "Le score Lighthouse global n'a pas augmenté de façon constante, ce qui souligne l'influence d'autres facteurs, notamment le Largest Contentful Paint (LCP), les médias d'en-tête et le rendu visuel.",
          },
          {
            type: "paragraph",
            text: "Les modifications ont ensuite été déployées en production, et d'autres analyses de performance restent possibles.",
          },
        ],
      },
      {
        heading: "Leçons techniques",
        blocks: [
          {
            type: "paragraph",
            text: "Ce projet a démontré qu'une optimisation efficace de la performance web ne se limite pas à réduire la taille des fichiers ou à retirer des scripts.",
          },
          {
            type: "paragraph",
            text: "Le travail exigeait de comprendre les dépendances tierces, de distinguer les ressources nécessaires du travail évitable pour le navigateur, de tenir compte du rendu et de la mise en cache de WordPress, et de tester les changements dans différents environnements.",
          },
          {
            type: "paragraph",
            text: "Surtout, il a renforcé la nécessité d'évaluer les gains de performance en parallèle avec la fiabilité de l'application, en particulier lorsqu'on optimise des intégrations responsables de la génération de prospects.",
          },
        ],
      },
    ],
  },
};

export default caseStudiesFr;
