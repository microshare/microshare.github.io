---
layout: docs
title: Incident
description: Découvrez les incidents Microshare™
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/incident.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/incident
  fr: /docs/2/fr/technical/microshare-platform-advanced/incident
---
{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## 1. Alertes Microshare
---------------------------------------

Dans le pipeline de données Microshare, nous transformons les données IoT (provenant des capteurs) en événements et alertes, ce qui permet un système plus réactif où les données de mouvement et environnementales deviennent des alertes et des données d'action.

Les données d'alerte marquent la fin du processus dans le pipeline IoT de base, conduisant à une notification, un SMS ou un e-mail, laissant le client décider de la suite.

## 2. Microshare étend l'IoT avec le BPM
---------------------------------------

#### BPM

La « Business Process Management » (BPM) est une approche systématique visant à rendre le flux de travail d'une organisation plus efficace, performant et adaptable à un environnement en constante évolution. Elle vise à aligner tous les aspects d'une organisation sur les attentes et besoins des clients. Le BPM est une approche de gestion holistique qui favorise l'efficacité et la performance tout en recherchant l'innovation, la flexibilité et l'intégration technologique.

Le BPM tente d'améliorer continuellement les processus. On peut donc le décrire comme un « processus d'optimisation des processus ». On affirme que le BPM permet aux organisations d'être plus efficaces, performantes et capables de changement qu'une approche de gestion hiérarchique traditionnelle centrée sur les fonctions.

Les composants clés du BPM incluent :

- **Modélisation des processus** : identification et documentation des processus existants ainsi que conception de nouveaux processus. Cela utilise souvent des organigrammes ou des outils similaires.
- **Analyse des processus** : examen des processus pour identifier les inefficacités ou les goulets d'étranglement.
- **Conception et optimisation des processus** : refonte des processus pour améliorer l'efficacité, réduire les erreurs ou répondre à de nouveaux besoins métier.
- **Exécution des processus** : mise en œuvre de processus nouveaux ou révisés, souvent à l'aide d'outils logiciels.
- **Suivi et contrôle** : suivi des performances des processus après mise en œuvre, identification des axes d'amélioration.
- **Technologie et intégration** : exploitation de la technologie pour faciliter une meilleure gestion des processus, ce qui peut inclure l'intégration de diverses technologies métier ou l'automatisation de certains processus.
- **Changement organisationnel et culturel** : prise en compte des changements de culture ou de structure d'entreprise nécessaires pour soutenir les améliorations des processus.

Le BPM implique souvent l'utilisation de divers outils logiciels appelés systèmes BPM, conçus pour soutenir la mise en œuvre et la gestion du BPM dans les organisations. Ces outils peuvent automatiser, mesurer et optimiser les processus métier et sont intégraux à de nombreuses stratégies BPM.

#### IoT et BPM

Comme illustré dans cette image :

{% include image.html url="/assets/img/bpm.jpg" width="800" height="500" description="bpm" %}

La mise en œuvre du BPM, en complément de notre expertise IoT, aidera à mieux gérer ce qui se passe après une alerte.

Nous avons créé un BPM appelé « incident », déclenché par nos alertes et offrant de multiples capacités.

## 3. Incidents
---------------------------------------
#### A. Démarrage

Un incident est déclenché par une première alerte et, à ce stade, lance un processus avec plusieurs étapes et options.

#### B. Clôture

Un incident peut être fermé s'il est résolu (c'est-à-dire terminé), si quelqu'un l'annule, ou s'il expire par inaction.

#### C. Attribution

Différents utilisateurs sont assignés à un incident selon la configuration et peuvent agir sur un incident pour le résoudre.

#### D. Étapes

Nous avons conçu notre incident comme un processus de résolution en trois étapes :
- Qui prend en charge l'incident
- Quand la personne assignée commence à agir sur l'incident
- Quand la personne en charge a terminé l'incident

Ces trois étapes peuvent être paramétrées individuellement. Il est également possible de créer un incident plus léger en supprimant certaines étapes.

#### E. Notification

Notre système d'incidents a été conçu pour simplifier le système de notification. En ajoutant des abonnements à certains types d'alertes, le système de notification peut informer les bonnes personnes avec leurs coordonnées correctes.

#### F. Regroupement — Incident intelligent

L'incident a été conçu pour être intelligent et capable de regrouper les alertes correspondant au même incident lorsqu'un incident est déjà ouvert pour le même problème.

Ainsi, lorsque plusieurs alertes sont reçues d'un capteur alors que personne n'agit, ces alertes sont regroupées en un seul incident, évitant la fatigue d'alerte et favorisant une meilleure résolution.

Le système d'incidents est intelligent et peut être configuré pour regrouper sur une zone plus large qu'un simple capteur. Si vous définissez que les alertes de plusieurs capteurs correspondent au même incident, vous pouvez ajuster l'incident pour regrouper par site, bâtiment, étage, zone, pièce, etc.

## 4. Analytique
---------------------------------------

Comme expliqué précédemment, le BPM vous aide à mieux structurer les actions entreprises après une alerte IoT. Il aide également à enregistrer des statistiques sur votre capacité de résolution.

L'utilisation des incidents permet d'analyser votre temps de résolution, votre capacité à répondre rapidement et avec précision, et de collecter des informations basées sur le lieu et la personne ayant contribué à résoudre l'incident.
