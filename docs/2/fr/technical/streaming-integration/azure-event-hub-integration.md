---
layout: docs
title: Intégration Microsoft Azure Event Hub
description: 
lang: fr
translation_of: docs/2/technical/streaming-integration/azure-event-hub-integration.md
translations:
  en: /docs/2/technical/streaming-integration/azure-event-hub-integration
  fr: /docs/2/fr/technical/streaming-integration/azure-event-hub-integration
toc: true
---


<br>


{% include image.html url="/assets/img/azure-2.jpg" description="thumbnail 2" %}

<br>

---------------------------------------
##### SOMMAIRE : 

1. [Vue d'ensemble](./#1-overview)
2. [Configuration](./#2-setup)
3. [Sécurité](./#security)



## 1. Vue d'ensemble
---------------------------------------

L'intégration Event Hub est une intégration de données en streaming qui pousse les données du Smart Network vers le tenancy Azure d'un client en temps réel. Les données sont généralement disponibles sur un Event Hub avec une latence inférieure à la seconde pour garantir que la gestion des événements et l'analyse sont livrées avec l'état le plus actuel de l'espace mesuré. 


## 2. Configuration
---------------------------------------

Pour être adapté à l'intégration en temps réel, l'Event Hub Namespace doit être configuré avec les options suivantes :

<br>
 **1.** API Kafka activée - cette option ne peut pas être modifiée une fois l'Event Hub Namespace créé

<br>
 **2** Shared Access Policy (SAS) qui accorde la politique « Manage » comme avec le SAP « Ingest » dans la capture d'écran ci-dessous. 

<br>
Configuré de cette manière, l'intégration créera automatiquement de nouvelles files Event Hub dans votre Event Hub Namespace afin que de nouveaux types de données puissent être transmis sans configuration supplémentaire. Chaque recType Microshare sera exporté dans sa propre file unique afin que, même avec plusieurs capteurs et flux de données, les données restent segmentées pour une analyse facile. 

{% include image.html url="\assets\img\azure-hub.png" width="900" description="azure event hub" %}

Votre contact Service ou Support Microshare aura besoin de la « Connection string-primary key », elle devrait ressembler à ceci : 

`Endpoint=sb://yourchoice.servicebus.windows.net/;SharedAccessKeyName=microshareintegration;SharedAccessKey=mkeyQB/MuK/hfHwSomeOtherChars2qyqroAJsS92vt0=;EntityPath=yourchoice`
 
Cette clé doit rester privée. Ne transmettez ni ne stockez la clé de manière non sécurisée.



## 3. Sécurité
---------------------------------------

Comme pour la plupart des installations Azure, Event Hubs prend en charge l'authentification et l'autorisation via les Share Access Signatures (SAS) qui permettent au client un contrôle total sur les permissions d'écriture pour l'Event Hub Namespace et identifient positivement l'accès au Smart Network. Les données sont chiffrées sur le réseau et au repos par défaut avec Event Hubs. La journalisation et la surveillance des données et de l'activité de gestion sont disponibles sur l'Event Hub. Étant donné que le Smart Network provient de l'extérieur des réseaux d'entreprise, les restrictions de sécurité réseau sur les opérations d'écriture ne sont pas possibles sur le point de terminaison réseau entrant. La restriction de l'accès au réseau interne est possible. Consultez un partenaire certifié Microsoft pour plus d'informations.

Références de sécurité

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-security-controls](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-security-controls)

[https://docs.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature](https://docs.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature)

 
