---
layout: docs
title: Vue d'ensemble technique de Microshare
description: Conçu pour les systèmes embarqués
lang: fr
translation_of: docs/2/general/meet-microshare/technical-overview.md
translations:
  en: /docs/2/general/meet-microshare/technical-overview
  fr: /docs/2/fr/general/meet-microshare/technical-overview
toc: true
---




{% include image.html url="/assets/img/CleanSafeOverview7.png" description="Microshare.io" %}


---------------------------------------

##### SOMMAIRE :

1. [Architecture](./#1-architecture)
2. [Fonctionne partout](./#2-fonctionne-partout)
3. [Embarqué éprouvé](./#3-embarque-eprouve)
4. [Comment ça fonctionne ?](./#4-comment-ca-fonctionne)


---------------------------------------
## Vue d'ensemble

Microshare met les données de votre environnement à portée de main, mais comment ? Sous le module plug-and-play de Microshare se cache un système de collecte de données et de communication des résultats via notre API. Les données de vos appareils sont envoyées à notre réseau, où elles sont configurées pour votre analyse sur votre tableau de bord. Microshare repose sur trois principes fondamentaux :

## 1. Architecture
---------------------------------------

- La plateforme est construite comme un ensemble de microservices, utilisables indépendamment pour soutenir votre propre offre.
- L'ensemble de la pile fonctionne via des appels API RESTful basés sur JSON, facilitant l'interopérabilité avec d'autres systèmes.
- Les données peuvent être stockées à la fois dans notre Data Lake et dans tout autre stockage sur site ou dans le cloud.

## 2. Fonctionne partout
---------------------------------------

- Microshare peut fonctionner en tant que service depuis notre cloud sécurisé.
- Nous pouvons exécuter tout ou partie du service dans votre centre de données.
- Nous pouvons également fonctionner directement sur les appareils.

## 3. Embarqué éprouvé
---------------------------------------

- Une partie de la plateforme Microshare a déjà été intégrée avec succès dans d'autres logiciels par de grandes entreprises cotées en bourse.
- Qualité de code éprouvée grâce à une intégration transparente et des audits externes (par ex. Black Duck).

## Avec quoi allez-vous travailler ?
---------------------------------------

Pour consulter les données de votre environnement, vous devrez interagir avec la plateforme Microshare en créant d'abord un [compte Microshare](/docs/2/general/quick-start/create-an-account/) et en obtenant l'accès de votre administrateur. Ensuite, rendez-vous sur la [console de la plateforme Microshare](https://app.microshare.io/) et suivez le [guide Accéder à mes applications](/docs/2/general/quick-start/access-my-apps/).

Alternativement, si votre administrateur Microshare crée une application invité, aucun compte Microshare n'est nécessaire ! Suivez simplement le lien envoyé dans votre boîte e-mail.

## 4. Comment ça fonctionne ?
---------------------------------------

Les modules IoT plug-and-play de Microshare sont nos solutions évolutives qui alimentent les analyses de données dans les petites installations comme dans les très grands sites.

#### Aucune formation technique requise

Vos capteurs pré-enregistrés s'installent en quelques minutes avec une autonomie moyenne de 5 ans. Fixez-les aux murs et aux tables avec des vis, du ruban adhésif et de la silicone standard. Activez une passerelle LoRaWAN locale avec notre [guide d'installation](/docs/2/installer/lorawan/gateway-installation/). Et tous vos capteurs sont gérés de manière centralisée pour que les données alimentent votre application d'installation intelligente Microshare en quelques minutes.

#### La technologie en coulisses

{% include image.html url="https://www.microshare.io/wp-content/uploads/2019/07/multi-access-sensors.png" description="Capteurs multi-accès" %}

Votre appareil collecte des données et les envoie à la plateforme de gestion de données Microshare, l'épicentre de nos solutions IoT. Notre moteur de règles, les modules de données dynamiques, les accélérateurs d'applications et notre module propriétaire de propriété des données garantissent que vos données sont collectées, analysées et distribuées de manière sécurisée et efficace. Vos données transitent par notre plateforme de gestion de données avant d'être présentées sur votre tableau de bord dans un format compréhensible.

{% include image.html url="https://www.microshare.io/wp-content/uploads/2019/08/bridge-the-gap.png" description="Données Microshare" %}


