---
layout: docs
title: Premiers pas avec le développement
lang: fr
translation_of: docs/2/technical/quick-start/basic-dev-roadmap.md
translations:
  en: /docs/2/technical/quick-start/basic-dev-roadmap
  fr: /docs/2/fr/technical/quick-start/basic-dev-roadmap
toc: true
---




{% include image.html url="/assets/img/thumbnail-12.jpg" description="thumbnail 2" %}

---------------------------------------

##### SOMMAIRE : 

1. [Par où commencer ?](./#1-where-do-i-start)
2. [Créer votre compte développeur Microshare](./#2-creating-your-microshare-developer-account)
3. [Travailler avec l'API](./#3-becoming-familiar-with-the-microshare-api)
4. [Premiers pas avec la plateforme Microshare](./#4-getting-started-with-the-microshare-platform)
5. [Comment créer une application](./#5-how-to-create-an-app)
6. [Prêt pour la suite](./#6-ready-for-more)

---------------------------------------

## 1. Par où commencer ?
---------------------------------------

La quantité d'informations dédiées au développeur peut sembler écrasante ; ce guide vous aide à naviguer pour bien démarrer et décrit le parcours à suivre pour mieux comprendre Microshare. 
Après avoir lu la [Vue d'ensemble](/docs/2/technical/quick-start/overview/) du rôle du développeur et compris la [Structure technique de Microshare](/docs/2/technical/quick-start/microshare-technical-structure), vous devriez commencer par créer votre compte développeur Microshare, qui vous donnera la possibilité de créer des robots, des règles, des vues, des applications et des clusters d'appareils.


## 2. Créer votre compte développeur Microshare
---------------------------------------

Suivez les étapes décrites sur la page [Créer un compte](/docs/2/general/quick-start/create-an-account/), mais assurez-vous d'utiliser l'environnement [http://dapp.microshare.io](http://dapp.microshare.io). Dans l'environnement développeur, vous pourrez tester la création de clusters d'appareils, de tableaux de bord, l'édition de vues, la création de règles et de robots. 



## 3. Se familiariser avec l'API Microshare
---------------------------------------

#### Authentification

Commencez par consulter le [Démarrage rapide API](/docs/2/technical/api/quick-start/) pour installer l'application Postman et apprendre la terminologie de l'API Microshare. Ensuite, utilisez le [Guide d'authentification](/docs/2/technical/api/authentication/) où vous apprendrez à naviguer dans les fonctionnalités de sécurité de l'API Microshare en demandant votre propre jeton. Il est crucial de terminer le guide d'authentification avant de passer au tutoriel de requêtes simples, car vous ne pourrez pas effectuer les requêtes sans authentification.

#### Share API

En suivant le [tutoriel Share API](/docs/2/technical/api/share-api/), vous apprendrez à envoyer et demander des informations à l'API Microshare. Ces concepts sont les composants fondamentaux pour travailler avec les robots et les clusters d'appareils par la suite. 


## 4. Premiers pas avec la plateforme Microshare
---------------------------------------
Une fois configuré dans l'environnement développeur, suivez les étapes suivantes pour interagir avec l'environnement Microshare :

#### Clusters d'appareils

Les [Clusters d'appareils](/docs/2/technical/microshare-platform/device-cluster-guide/) vous permettent de regrouper vos appareils situés dans des emplacements similaires, en combinant les données des appareils individuels. À partir de là, vous pouvez créer des applications pour afficher et analyser les informations du cluster, et utiliser des règles pour contrôler la façon dont les autres peuvent consulter ces informations. 

#### Vues

Une [Vue](/docs/2/technical/microshare-platform/views-guide/) est un composant pour gérer l'accès à vos données. Elle vous permet d'envoyer des données statiques, d'interroger le lac de données, de gérer le contenu et d'appliquer des contrôles sur les éléments de données ainsi que les règles de partage. 

#### Tableau de bord

Les [Tableaux de bord](/docs/2/technical/microshare-platform/dashboard-guide/) vous permettent d'organiser les applications ensemble et d'éliminer l'encombrement sur votre page de gestion. Cela sera particulièrement utile pour regrouper les applications d'un client. Il est important de noter qu'une grande partie du contenu du guide des tableaux de bord relève de la catégorie développeur avancé. 

#### Règles 

[Une Règle](/docs/2/technical/microshare-platform/rules-guide/) est une expression concrète d'une politique de partage. Elle permet à un propriétaire de données de définir les conditions dans lesquelles une opération demandée sera accordée. Les règles autorisent uniquement le partage. Les règles n'empêchent pas le partage. Le partage est bloqué par défaut.

## 5. Comment créer une application
---------------------------------------

Tout d'abord, rendez-vous sur [dapp.microshare.io](http://dapp.microshare.io) et connectez-vous. Ensuite, accédez à l'onglet applications marqué en vert et cliquez sur l'icône clé pour créer une nouvelle application. À partir de là, vous devriez voir :

{% include image.html url="\assets\img\dashboard-guide-8.png" height="900" width="900" description="Dashboard Guide 8" %}
 
 Configurez votre application avec les options suivantes :
{% include image.html url="\assets\img\dashboard-guide-2.png" height="900" width="900" description="Dashboard Guide 2" %}
 
 <br>
 `App Type`: Display
 <br>
 `Parent Tag(s)`: Laisser vide
 <br>
 `Style Choice`: Showcase
 <br>
 `Theme`: https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css 
 <br>
 `Include`: Laisser vide sauf demande contraire
 <br>
 `Facts to display`: None 
 <br>
 `Form to display`: Pour les applications en temps réel, choisir Realtime Form v2.5 et Trending Form v2.6 pour les applications de tendance 
 

Maintenant, configurez votre application avec des facts. Créez un nouveau fact en appuyant sur le bouton au-dessus de la flèche verte et en cliquant sur apend. 

{% include image.html url="\assets\img\dashboard-guide-3.png" height="900" width="900" description="Dashboard Guide3" %}

Voici quelques détails sur les facts requis par toutes les applications. Pour des facts plus spécifiques par type d'appareil, consultez [le Guide des tableaux de bord](/docs/2/technical/microshare-platform/dashboard-guide/).

<br>
`appTitle`: Doit correspondre au nom que vous avez fourni comme nom de l'application (ci-dessus).
<br>
`navOptions`: Ces identifiants doivent être complétés en dernier. Ajoutez les liens et noms de toutes les applications du compte du client à chaque app.json afin que le client puisse naviguer d'une application à l'autre.
<br>
`selectionOptions`: Toutes les applications vous demandent de fournir les options d'emplacement spécifiques au client dans le champ navOptions. Utilisez le databoard pour générer le JSON au bon format. Obtenez un jeton pour le compte qui possède le(s) cluster(s) d'appareils et rendez-vous sur [https://databoard.azurewebsites.net/dashboard/0](https://databoard.azurewebsites.net/dashboard/0). Choisissez Edit Workspace dans le menu des paramètres, puis Add Monitor Widget pour les clusters concernés, puis Lock Workspace, puis cliquez sur le moniteur d'appareils pour afficher la vue liste, puis cliquez sur Download JSON. 
<br>
`dataRecType`: correspond au recType cible du cluster d'appareils.
<br>
`dataContext`: Utilisez la balise meta que vous avez choisie dans le cluster d'appareils.
<br>
`queryId`, `queryId1`, `queryId2`, `queryId3`: il est recommandé de laisser les paramètres de requête identiques à ceux du json d'exemple
footerLogo, headerLogo, header SecondaryLogo et get RecType: ne pas modifier sauf demande contraire.
<br>
Après avoir complété tous les facts nécessaires ci-dessus et ceux du [Guide des tableaux de bord](/docs/2/technical/microshare-platform/dashboard-guide/), vous pouvez terminer en cliquant sur le bouton create indiqué par la flèche verte ci-dessous.

{% include image.html url="\assets\img\basic-dev-roadmap-image-1.png" height="900" width="900" description="BDRM1" %}

## 6. Prêt pour la suite ?
---------------------------------------

Rendez-vous sur la [Feuille de route développeur avancée](/docs/2/technical/quick-start/advanced-dev-roadmap/) pour approfondir l'interaction avec la plateforme Microshare.

Vous avez des questions ? N'hésitez pas à contacter `support@microshare.io` pour toute assistance. 




 
