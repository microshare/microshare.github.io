---
layout: docs
title: Démarrage rapide de la plateforme Microshare™
lang: fr
translation_of: docs/2/technical/microshare-platform/quick-start.md
translations:
  en: /docs/2/technical/microshare-platform/quick-start
  fr: /docs/2/fr/technical/microshare-platform/quick-start
toc: true
---

{% include image.html url="/assets/img/thumbnail-11.jpg" description="thumbnail 2" %}

<br>
---------------------------------------

##### SOMMAIRE :

1. [Introduction](./#1-introduction)
2. [Configuration de votre compte](./#2-configuration-de-votre-compte)
3. [Outils et capacités](./#3-outils-et-capacites)
    - A. [Clusters d'appareils](./#a-clusters-d-appareils)
    - B. [Vues](./#b-vues)
    - C. [Tableaux de bord](./#c-tableaux-de-bord)
    - D. [Règles](./#d-regles)
    - E. [Identités](./#e-identites)
    - F. [Robots](./#f-robots)
    - G. [Ingestion de données](./#g-ingestion-de-donnees)
    - H. [Déballage des données](./#h-deballage-des-donnees)

---------------------------------------


## 1. Introduction
---------------------------------------

La plateforme Microshare est l'épicentre de vos données ; l'endroit où vous pourrez non seulement consulter vos données, mais aussi imposer des restrictions aux autres, automatiser des tâches et bien plus encore.

Il existe une différence entre ce qu'un utilisateur général et un développeur peuvent faire. L'utilisateur général n'a accès qu'aux données et aux outils administrés par son administrateur. Le développeur, quant à lui, peut accéder à tous les outils et les consulter. Par exemple, le développeur peut créer des clusters d'appareils, des robots, des règles, des formulaires, changer d'identité et accéder aux vues, tandis que l'utilisateur général ne peut consulter que les données qui lui ont été attribuées.



## 2. Configuration de votre compte
---------------------------------------

Si vous n'avez pas encore de compte développeur, suivez le [tutoriel Créer un compte](/docs/2/fr/general/quick-start/create-an-account/) pour commencer. Si vous avez déjà un compte, continuez à lire cette page et rendez-vous sur [la page de connexion développeur]( https://dapp.microshare.io/login?requestURL=%2F). Ensuite, consultez la [page Vue d'ensemble technique](/docs/2/technical/quick-start/overview/).

## 3. Outils et capacités
---------------------------------------
Voici la liste des différents outils et capacités avec lesquels vous travaillerez en tant que développeur sur la plateforme Microshare :

### A. Clusters d'appareils

Les clusters d'appareils vous permettent de regrouper les données de capteurs. C'est particulièrement utile pour les capteurs situés dans la même zone. Vous pouvez ajouter des appareils au cluster via l'application Deploy M ou via la plateforme Microshare (voir la [page Clusters d'appareils](/docs/2/fr/technical/microshare-platform/device-cluster-guide/)). Vous pouvez consulter les données du cluster dans le tableau de bord.

### B. Vues

Une vue est un composant pour gérer l'accès à vos données. Elle permet d'envoyer des données statiques, d'interroger le data lake, de gérer le contenu et de formater les données. Les vues appliquent également des contrôles sur les données ainsi que des règles de partage. Vous pouvez apprendre à créer et gérer des vues via le [guide des vues.](/docs/2/fr/technical/microshare-platform/views-guide/)

### C. Tableaux de bord

Le tableau de bord est l'endroit où vous consultez vos applications. Vos applications représentent les données de vos appareils selon vos préférences. [Le guide du tableau de bord](/docs/2/fr/technical/microshare-platform/dashboard-guide/) vous guidera dans la création d'applications pour vos appareils et leur configuration selon vos préférences.

### D. Règles

Les règles permettent à l'administrateur de gérer les données que certaines personnes peuvent consulter. Cela renforce la sécurité et le partage de vos données. Consultez [le guide des règles](/docs/2/fr/technical/microshare-platform/rules-guide/) pour apprendre à créer et personnaliser les règles de vos données.

### E. Identités

Votre identité détermine les données que vous pouvez consulter et les outils auxquels vous pouvez accéder et/ou que vous pouvez créer. En tant que développeur, vous alternerez entre les identités pour modifier ce que vous pouvez consulter. Utilisez [le guide des identités](/docs/2/technical/microshare-platform-advanced/identity-guide/) pour apprendre à créer et alterner entre vos identités.

### F. Robots

Les robots permettent d'automatiser certaines tâches pour vos données. Par exemple, vous pouvez programmer un robot pour vous alerter si votre capteur détecte une chute de température significative ou si votre salle de réunion est vacante. [Le guide des robots](/docs/2/technical/microshare-platform-advanced/robots-guide/) vous accompagnera dans le processus d'automatisation des tâches selon vos capteurs, et [la bibliothèque de robots](/docs/2/technical/microshare-platform-advanced/robots-library/) est une excellente ressource pour des exemples d'automatisation de tâches dans Microshare.

### G. Ingestion de données

[Le guide d'ingestion de données](/docs/2/technical/microshare-platform-advanced/data-ingestion-guide/) vous guidera pour déplacer vos données de plusieurs sources vers le data lake Microshare sous forme de microshares. De plus, vous pouvez créer un robot pour effectuer automatiquement cette tâche en utilisant [le guide d'ingestion de données par robots.](/docs/2/technical/microshare-platform-advanced/data-ingestion-by-robots/)

### H. Déballage des données

Vous pouvez configurer des processus automatisés en plusieurs étapes pour acheminer et transformer vos données afin qu'elles soient prêtes à être consommées par une application ou un tableau de bord en utilisant [le guide de déballage des données](/docs/2/technical/microshare-platform-advanced/data-unpacking/) et automatiser cette tâche avec [le guide de déballage des données avec des robots](/docs/2/technical/microshare-platform-advanced/data-unpacking-by-robots/).

