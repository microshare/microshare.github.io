---
layout: docs
title: Démarrage rapide technique
description: Un guide pour interagir avec la technologie Microshare™
lang: fr
translation_of: docs/2/technical/quick-start/overview.md
translations:
  en: /docs/2/technical/quick-start/overview
  fr: /docs/2/fr/technical/quick-start/overview
toc: true
redirect_from:
  - /docs/2/fr/technical/
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

<br>



---------------------------------------

#### Sommaire :

1. [Que fait Microshare ?](./#1-what-does-microshare-do)
2. [Que puis-je faire ?](./#2-what-can-i-do)
3. [Que se passe-t-il du côté technique de Microshare ?](./#3-whats-going-on-in-the-technical-side-of-microshare)

## 1. Que fait Microshare ?
---------------------------------------

<br>
Microshare vous connecte à vos bâtiments, actifs, collaborateurs et appareils grâce à une gamme de solutions IoT prêtes à déployer, connectées au Microshare Smart Network™. Avec l'une de nos dizaines de solutions, branchez votre appareil et connectez-vous à votre environnement.

{% include image.html url="/assets/img/microshareex1.png" width="800" description="demo" %}


Plus récemment, Microshare a permis aux grandes entreprises de rouvrir leurs installations en toute sécurité et de repenser leur empreinte physique dans le contexte de la COVID-19. Notre modèle Sensing-as-a-Service clé en main pour les installations intelligentes utilise des données en temps réel pour détecter les points chauds des bâtiments et atténuer le risque d'exposition au virus. Avec Universal Contact Tracing, nous permettons à nos clients dans le monde entier de reprendre leurs activités aussi rapidement, en toute sécurité et de manière rentable que possible, sans les contraintes de confidentialité des applications pour smartphone. Visitez notre [site web principal](https://www.microshare.io/smart-facilities-dashboards-and-solutions/) pour en savoir plus sur les solutions Microshare !

**Des termes vous semblent confus ? Consultez la [page glossaire.](/docs/2/general/quick-start/glossary/)**

**Vous avez des questions ? N'hésitez pas à demander de l'aide à `support@microshare.io`.**




## 2. Que puis-je faire ?
---------------------------------------

<br>
Consultez notre [tableau de bord de démonstration](/docs/2/general/meet-microshare/demo-live/) pour voir vers quoi tend toute la documentation technique. Interagissez avec les applications et visualisez les données des sites Microshare collectées en temps réel !

{% include image.html url="/assets/img/demo-dashboard.jpg" width="800" description="dashboard demo" %}

Microshare connecte l'utilisateur général aux données de son environnement sur le tableau de bord, tandis que le côté technique rend cela possible grâce aux interactions avec la console développeur Microshare et l'API Microshare. [La feuille de route développeur de base](/docs/2/technical/quick-start/basic-dev-roadmap/) vous guide dans le processus d'initiation au travail avec la console développeur Microshare et l'API Microshare. 


## 3. Que se passe-t-il du côté technique de Microshare ?

---------------------------------------

<br>

{% include image.html url="/assets/img/microshare-lora-governance-gap.png" width="800" description="process diagram" %}


L'objectif technique principal de Microshare est d'obtenir des informations sur votre environnement et de les représenter sur votre tableau de bord. Pour ce faire, les appareils LoRaWAN collectent d'abord les données de votre environnement et les envoient via un signal LoRa à votre passerelle LoRaWAN. La passerelle transmet les informations de l'appareil via WiFi ou cellulaire au Microshare Smart Network™ où elles sont stockées sous forme de données brutes. L'appareil envoie les données sous une forme non digérée pour des raisons de sécurité. Les données brutes sont digérées dans une forme lisible et représentées sur votre tableau de bord, de manière similaire à la [démo en direct]. En tant que développeur, votre responsabilité est de gérer la façon dont les données sont représentées sur le tableau de bord, leur format et qui peut les consulter. De plus, vous devrez apprendre à interagir avec l'API de Microshare pour envoyer et demander des informations sur les données des appareils. Enfin, vos données ne sont pas stockées localement, mais dans le cloud via une solution d'intégration de données telle que Microsoft Azure, Google Pub/Sub ou Amazon Web Services. 


 
