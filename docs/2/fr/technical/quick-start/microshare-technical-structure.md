---
layout: docs
title: La structure technique Microshare™
description: Comment Microshare™ vous apporte vos données
lang: fr
translation_of: docs/2/technical/quick-start/microshare-technical-structure.md
translations:
  en: /docs/2/technical/quick-start/microshare-technical-structure
  fr: /docs/2/fr/technical/quick-start/microshare-technical-structure
toc: true
---



{% include image.html url="/assets/img/thumbnail-9.jpg" height="1000" width="1000" description="thumbnail 2" %}

<br>
---------------------------------------
#### Sommaire :
1. [Introduction](./#introduction)
2. [Technologie LoRaWAN](./#lorawan-technology)
3. [L'API Microshare](./#microshares-api)
4. [La plateforme Microshare](./#the-microshare-platform)
5. [Par où commencer ?](./#where-do-i-start)


---------------------------------------
## Introduction
---------------------------------------

Microshare met les données de votre environnement à portée de main, mais comment ? Sous le module plug-n-play de Microshare se cache un système de collecte de données et de communication des résultats via notre API. Comme vous pouvez le voir, le côté technique du site de documentation est séparé en catégories plateforme Microshare, API et LoRaWAN. Ces trois sections représentent les piliers de la structure technique de Microshare. 


{% include image.html url="/assets/img/LoRa00.png" description="LoRa" %}

## Technologie LoRaWAN
---------------------------------------

Tout d'abord, Microshare utilise du matériel installé autour de l'environnement du client pour communiquer avec notre API. Cela se fait via trois types d'appareils : capteurs, passerelles et nos réseaux. Le capteur est un appareil LoRaWAN qui collecte des données et envoie ces informations via un signal LoRa à la passerelle LoRaWAN, également installée dans l'environnement. Cette passerelle transmet ensuite les informations au réseau Microshare via un signal cellulaire ou WiFi. L'API Microshare prend les informations et les représente dans votre tableau de bord, accessible sur la [Plateforme Microshare](https://app.microshare.io/). Vous pouvez apprendre comment ces appareils sont installés [ici](/docs/2/installer/quick-start/overview/). Les appareils arrivent à votre porte entièrement configurés et prêts à l'emploi par notre équipe de fulfillment, et notre [application Deploy-M](/docs/2/installer/deploy-m/download-the-app/) rendra votre installation très facile. 

## L'API Microshare
---------------------------------------

L'API, ou Interface de Programmation d'Applications, dispose des protocoles et outils spécifiques de Microshare pour communiquer les données des appareils. L'API Microshare prend de nombreuses précautions de sécurité pour assurer la protection des données client et comprendre l'[Authentification](/docs/2/technical/api/authentication/) sera crucial pour apprendre l'interface. Apprendre la share API vous permettra de créer et gérer vos données dans le lac de données de Microshare. Vous pouvez démarrer avec l'API Microshare [via la page Démarrage rapide](/docs/2/technical/api/quick-start/).

## La plateforme Microshare
---------------------------------------

La plateforme Microshare vous donne le contrôle sur la visualisation des données collectées par les appareils. En créant un cluster d'appareils, vous pouvez regrouper les données de plusieurs appareils pour les représenter ensemble. Créer une application vous permet de personnaliser la façon dont ces données sont représentées. L'implémentation de règles et de vues vous permet de contrôler qui a accès à certaines données, et les robots vous permettent d'automatiser certaines tâches au sein de la plateforme. Les identités donnent certaines autorisations pour consulter les données, régulant davantage qui a accès à certains outils et informations. Tous ces outils sont des composants clés de la plateforme et vous permettent d'avoir un contrôle complet sur vos données. 
    
## Par où commencer ? 
---------------------------------------

En tant que développeur, vous explorerez les fonctionnalités et applications de ces composants plus en détail. [La feuille de route développeur de base](/docs/2/technical/quick-start/basic-dev-roadmap/) vous guide pas à pas pour vous familiariser au mieux avec ce que Microshare propose en coulisses. De plus, la [Feuille de route développeur avancée](/docs/2/technical/quick-start/advanced-dev-roadmap/) vous guide à travers les concepts les plus avancés de la plateforme et de l'API Microshare. 

 
