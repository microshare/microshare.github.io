---
layout: docs
title: Intégration de données
description: Quelles pages peuvent m'aider avec l'intégration de données ?
lang: fr
translation_of: docs/2/technical/quick-start/data-integration.md
translations:
  en: /docs/2/technical/quick-start/data-integration
  fr: /docs/2/fr/technical/quick-start/data-integration
toc: true
---



{% include image.html url="/assets/img/thumbnail-3.jpg" description="thumbnail 2" %}


---------------------------------------

##### SOMMAIRE : 

1. [Démarrage rapide](./#1-quick-start)
2. [Ingérer des données dans Microshare](./#2-ingesting-data-into-microshare)
3. [Diffuser des données depuis Microshare](./#3-stream-data-from-microshare)
    - A) [Azure IoT Hub](./#a-azure-iot-hub-integration)
    - B) [Azure Event Hub](./#b-azure-event-hub-integration)
    - C) [Intégration AWS Kinesis Data Stream](./#c-aws-kinesis-data-stream-integration)
    - D) [Intégration AWS SQS](./#d-aws-sqs-integration)
    - E) [Intégration Google Pub/Sub](./#e-google-pub-sub-integration)    
4. [Gérer les données avec l'API REST Microshare](./#4-managing-data-with-microshare)


---------------------------------------

## 1. Démarrage rapide
---------------------------------------

L'intégration de données est le processus de combinaison de données provenant de différentes sources en une vue unifiée. Les données sont d'abord importées, puis nettoyées pour le mapping et enfin transformées dans un référentiel cible. Ce processus rend finalement les données plus utilisables et utiles pour les utilisateurs qui les consultent.

Ainsi, Microshare vous permet d'intégrer toutes vos données IoT de manière organisée et accessible. Ce guide vous explique comment intégrer vos données dans Microshare.

Une fois toutes vos données liées à Microshare, les données peuvent être enrichies ou filtrées avec nos outils big data et des robots peuvent être créés pour agir sur certains événements.
Bien que nos tableaux de bord soient très puissants, vous pourriez avoir besoin d'intégrer les données améliorées dans votre propre plateforme pour vos propres solutions. Il existe plusieurs façons d'intégrer les données de Microshare dans votre plateforme.

Si vous êtes un revendeur Microshare, vous pouvez envoyer les données à Microshare et, une fois traitées, récupérer les informations utiles pour créer quelque chose directement pour vos clients. Tout cela peut être réalisé sans révéler le processus Microshare, ce qui vous permet de maîtriser facilement cette chaîne.

<br>

## 2. Ingérer des données dans Microshare
---------------------------------------

Pour intégrer les données dans Microshare, il existe trois méthodes : 

### A) Le serveur réseau pousse les données.
Pour un réseau serveur IoT, vous poussez les données sur un recType comme indiqué sur cette page : 
##### > [Ingestion de données](/docs/2/technical/microshare-platform-advanced/data-ingestion/)

### B) HTTP POST pour pousser les données.
L'API prend en charge les opérations RESTful POST pour injecter des données dans le système sous forme de documents JSON. 
##### > [APIs](/docs/2/technical/api/quick-start/)

### C) Les robots interrogeant les points de terminaison API pour extraire les données.
Les robots peuvent exécuter du Javascript qui peut être utilisé pour extraire des données via des API à intervalles réguliers.
##### > [Ingestion de données](/docs/2/technical/microshare-platform-advanced/data-ingestion/)

<br>

## 3. Diffuser des données depuis Microshare
---------------------------------------

Il existe plusieurs méthodes pour intégrer les données Microshare dans votre propre plateforme.
<br>
### Microsoft Azure
<br>

#### A) Intégration Azure IoT Hub

Azure IoT Hub est un service d'ingestion de données en temps réel entièrement géré, simple, sécurisé et évolutif, conçu spécifiquement pour les charges de travail IoT. Diffusez des millions d'événements par seconde depuis n'importe quelle source pour créer des pipelines de données dynamiques et répondre instantanément aux défis métier.
Avec Microshare, vous pouvez simplement injecter vos données dans l'IoT Hub et les combiner avec les flux de données IoT provenant d'autres sources pour créer un pipeline de données unifié. 
##### > [Intégration Azure IoT Hub](/docs/2/technical/streaming-integration/azure-iot-hub-integration/)

<br>

#### B) Intégration Azure Event Hub

Azure Event Hub est un service d'ingestion de données en temps réel entièrement géré, simple, sécurisé et évolutif. Diffusez des millions d'événements par seconde depuis n'importe quelle source pour créer des pipelines de données dynamiques et répondre instantanément aux défis métier.
Avec Microshare, vous pouvez simplement injecter vos données dans l'Event Hub et les intégrer avec d'autres outils que vous avez peut-être déjà en place.
##### > [Intégration Azure Event Hub](/docs/2/technical/streaming-integration/azure-event-hub-integration/)

<br>

### Amazon Web Services (AWS)

<br>
#### C) Intégration AWS Kinesis Data Stream

Amazon Kinesis facilite la collecte, le traitement et l'analyse de données en streaming en temps réel pour obtenir rapidement des informations stratégiques et réagir rapidement. Amazon Kinesis offre des capacités essentielles pour traiter les données en streaming à n'importe quelle échelle de manière rentable, ainsi que la possibilité de choisir les outils les mieux adaptés aux besoins de votre application.
Avec Microshare, vous pouvez simplement injecter vos données dans AWS Kinesis Data Stream et les intégrer avec les outils en aval de l'écosystème AWS.
##### > [Intégration AWS Kinesis Data Stream](/docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration/)

<br>

#### D) Intégration AWS SQS

Amazon Simple Queue Service (SQS) est un service de mise en file d'attente de messages entièrement géré qui vous permet de découpler et de faire évoluer les microservices, les systèmes distribués et les applications serverless. SQS élimine la complexité et la surcharge associées à la gestion et à l'exploitation des middleware orientés messages, et permet aux développeurs de se concentrer sur un travail différenciant. Avec SQS, vous pouvez envoyer, stocker et recevoir des messages entre composants logiciels à n'importe quel volume, sans perdre de messages ni exiger que d'autres services soient disponibles.
Avec Microshare, vous pouvez simplement injecter vos données dans le service AWS SQS et les intégrer avec les outils en aval de l'écosystème AWS.
##### > [Intégration AWS SQS](/docs/2/technical/streaming-integration/aws-sqs-integration/)

<br>

### Google Cloud Platform (GCP)

<br>
#### E) Google Pub/Sub

 Pub/Sub est un service de messagerie asynchrone qui découple les services qui produisent des événements des services qui les traitent.

Vous pouvez utiliser Pub/Sub comme middleware orienté messages ou pour l'ingestion et la livraison d'événements dans des pipelines d'analyse en streaming.

Google Pub/Sub offre un stockage de messages durable et une livraison de messages en temps réel avec une haute disponibilité et des performances constantes à grande échelle. Pub/Sub peut être utilisé comme middleware orienté messages ou pour l'ingestion et la livraison d'événements dans des pipelines d'analyse en streaming. Pub/Sub offre un stockage de messages durable et une livraison de messages en temps réel avec une haute disponibilité et des performances constantes à grande échelle.
Avec Microshare, vous pouvez simplement injecter vos données dans le service Google Pub/Sub et les intégrer avec les outils en aval de l'écosystème Google.
##### > [Intégration Google Pub/Sub](/docs/2/technical/streaming-integration/google-pub-sub-integration/)

<br>

## 4. Gérer les données avec l'API REST Microshare
---------------------------------------

Une API est une solution informatique qui permet aux applications de communiquer entre elles et d'échanger des services ou des données. C'est un ensemble de fonctions qui facilitent, via un langage de programmation, l'accès aux services d'une application.

Tous les services offerts par la plateforme Microshare sont disponibles pour la gestion via une API RESTful robuste. En utilisant l'API, vous pouvez gérer les données et la configuration via une API cohérente qui utilise le transport HTTPS avec des charges utiles JSON.
Les API pour accéder facilement aux données Microshare depuis votre propre solution. 

Pour ce faire, c'est très simple : suivez simplement les étapes du tutoriel des API Microshare.
##### > [APIs](/docs/2/technical/api/quick-start/)

<br>

 
