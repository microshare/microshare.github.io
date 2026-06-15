---
layout: docs
title: Intégration Azure IoT Hub
description: Intégrer Azure dans votre solution Microshare™
group: Azure IoT Hub Integration
lang: fr
translation_of: docs/2/technical/streaming-integration/azure-iot-hub-integration.md
translations:
  en: /docs/2/technical/streaming-integration/azure-iot-hub-integration
  fr: /docs/2/fr/technical/streaming-integration/azure-iot-hub-integration
toc: true
---

<br>

{% include image.html url="/assets/img/azure-2.jpg" description="thumbnail 2" %}

<br>


---------------------------------------

##### SOMMAIRE : 

1. [Vue d'ensemble](./#1-overview)
2. [Architecture de base](./#2-basic-architecture)
3. [Configuration](./#3-setup)
4. [Sécurité](./#4-security)

---------------------------------------


## 1. Vue d'ensemble
---------------------------------------

L'intégration Azure IoT Hub est une intégration de données en streaming qui pousse les données du Smart Network vers le tenancy Azure d'un client en temps réel. Les données sont généralement disponibles sur un IoT Hub avec une latence inférieure à la seconde pour garantir que la gestion des événements et l'analyse sont alimentées avec l'état le plus actuel de l'espace mesuré. L'intégration Azure IoT Hub crée un chemin vers le stockage avancé, la visualisation et l'analyse dans l'écosystème Microsoft Azure depuis le Microshare Smart Network. Utilisez Azure IoT Hub pour standardiser vos pipelines de données IoT, intégrer avec Azure Digital Twins et profiter des services avancés de santé des appareils.

### Informations nécessaires

Pour configurer l'intégration Azure IoT Hub pour vous, votre contact support aura besoin du point de terminaison de connectivité et des identifiants étiquetés « Primary Connection String » pour une entrée IoT Device dédiée depuis le portail Azure ou la sortie d'exécution ARM/Terraform. Plus d'informations sont incluses ci-dessous.

## 2. Architecture de base
---------------------------------------

L'architecture typique pour les données en streaming dans l'environnement Azure en utilisant l'intégration Azure IoT Hub comprendra des composants pour :

**1.** Stockage Cold Path – stockage de données brutes à long terme et à faible coût au format JSON ou Avro. Les données sont généralement stockées dans des fichiers de séries temporelles avec chaque flux de données (recType) séparé dans des fichiers uniques.

<br>
**2.** Traitement Warm Path – données relationnelles à moyen terme qui seront généralement utilisées pour alimenter les outils de visualisation via le stockage SQL.

<br>
**3.** Chemin opérationnel – Utilisé pour déclencher des processus métier en aval en temps réel. Implique généralement des notifications, l'invocation de workflows humains et la mise à jour des enregistrements d'actifs pour refléter l'état actuel.

<br>
{% include image.html url="/assets/img/azure-iot-hub/Azure_downstream_architecture.png" description="Azure downstream architecture" %}

Exemple d'architecture en aval Azure IoT Hub

## 3. Configuration
---------------------------------------

Si vous utilisez déjà IoT Hub dans votre organisation, un IoT Hub existant peut être réutilisé. Dans ce cas, passez à Créer un appareil. Sinon, continuez avec les étapes suivantes pour créer un nouvel IoT Hub dans votre tenancy Azure.

Les étapes seront :

**1.** Configurer un IoT Hub.
<br>
**2.** Créer une entrée d'appareil.
<br>
**3.** Copier la Primary Connection String de l'appareil.

### Étape 1 : Configurer un IoT Hub

{% include image.html url="/assets/img/azure-iot-hub/Azure_IoT_Hub1.png" height="500" width="500" description="Azure Hub pic 1" %}

{% include image.html url="/assets/img/azure-iot-hub/Azure_IoT_Hub2.png" height="500" width="500" description="Azure Hub pic 2" %}

L'option Networking par défaut devrait être Public endpoint. C'est le paramètre nécessaire pour permettre l'accès aux données entrantes depuis les serveurs du Microshare Smart Network.

{% include image.html url="/assets/img/azure-iot-hub/Azure_IoT_Hub3.png" height="500" width="500" description="Azure Hub pic 3" %}

Pour la plupart des installations, le niveau S1: Standard Tier devrait être suffisant pour commencer à utiliser l'intégration Microshare IoT Hub. Pour les installations impliquant plus de 1000 appareils, consultez le contact Services Microshare.

(Voir [le site Azure](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling) pour plus de détails.)

### Étape 2 : Créer une entrée d'appareil

Dans cette étape, vous créerez un enregistrement d'appareil « catch-all » qui peut être utilisé pour sécuriser la connexion entre le Microshare Smart Network et l'IoT Hub dans Azure. Il est recommandé de créer une entrée d'appareil unique pour chaque flux de données unique afin de faciliter la segmentation en aval. Typiquement, l'appareil IoT est nommé en utilisant le recType Microshare du flux de données.

{% include image.html url="/assets/img/azure-iot-hub/Azure_create_device1.png" height="500" width="500" description="Azure create a device 1" %}

Une fois l'IoT Hub provisionné, sélectionnez la lame de console et cliquez sur le menu « IoT devices » sous « Explorers ». Puis, cliquez sur le lien « + New » en haut au centre de la navigation.

{% include image.html url="/assets/img/azure-iot-hub/Azure_create_device2.png" height="500" width="500" description="Azure create a device 2" %}

Pour le Device ID, il est recommandé d'utiliser le recType Microshare en notation pointée. C'est une convention arbitraire mais facilitera l'alignement de vos abonnements avec le traitement en amont et en aval. Laissez Azure générer automatiquement les clés de chiffrement et assurez-vous que l'interrupteur Enable est actif (ce devraient être les valeurs par défaut).

{% include image.html url="/assets/img/azure-iot-hub/Azure_create_device3.png" height="600" width="600" description="Azure create a device 3" %}

Les détails suivants seront fournis après le provisionnement du Device ID. Ces informations peuvent être récupérées ultérieurement en cliquant sur le Device ID dans la vue lame « IoT devices ».

Votre contact Service ou Support Microshare aura besoin de la « Primary Connection String », elle devrait ressembler à ceci :

HostName=your-hub-name.azure-devices.net;DeviceId=io.microshare.contact.unpacked.event;SharedAccessKey=SOME000BASE64KEY=

Cette clé doit rester privée. Ne transmettez ni ne stockez la clé de manière non sécurisée. Il est recommandé d'envoyer ces informations de manière sécurisée via un e-mail chiffré GPG ou via une connexion de chat chiffrée utilisant keybase.io.

#### Références de configuration

[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal)

[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling)

## 4. Sécurité
---------------------------------------
Comme pour la plupart des installations Azure, IoT Hub prend en charge l'authentification et l'autorisation via les Share Access Signatures (SAS) qui permettent au client un contrôle total sur les permissions d'écriture pour chaque appareil IoT configuré. Le SAS (alias Primary Connection String) identifie positivement l'accès au Smart Network. Les données sont chiffrées sur le réseau et au repos par défaut avec l'IoT Hub. La journalisation et la surveillance des données et de l'activité de gestion sont disponibles sur l'IoT Hub. Étant donné que le Smart Network provient de l'extérieur des réseaux d'entreprise, les restrictions de sécurité réseau sur les opérations d'écriture ne sont pas possibles sur le point de terminaison réseau entrant. La restriction de l'accès au réseau interne est possible. Consultez un partenaire certifié Microsoft pour plus d'informations.

### Références de sécurité

[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-tls-support](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-tls-support)

[https://docs.microsoft.com/en-us/azure/iot-fundamentals/iot-security-deployment?context=azure/iot-hub/rc/rc](https://docs.microsoft.com/en-us/azure/iot-fundamentals/iot-security-deployment?context=azure/iot-hub/rc/rc)

 
