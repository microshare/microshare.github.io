---
layout: docs
title: Ingestion de données
description: Comment vos données entrent dans le Data Lake Microshare
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/data-ingestion.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/data-ingestion
  fr: /docs/2/fr/technical/microshare-platform-advanced/data-ingestion
---
{% include image.html url="/assets/img/thumbnail-13.jpg" height="900" width="900" description="thumbnail 2" %}

<br>
---------------------------------------
##### SOMMAIRE : 

1. [Qu'est-ce que l'ingestion de données ?](./#1-quest-ce-que-lingestion-de-donnees)
2. [Ingestion réseau LoRaWAN via Device Cluster](./#2-ingestion-reseau-lorawan-via-device-cluster)
3. [Téléverser des données via REST API POST](./#3-televerser-des-donnees-via-rest-api-post)
4. [Interrogation par Robot pour récupérer des données](./#4-interrogation-par-robot-pour-recuperer-des-donnees)
5. [Intégration Websocket](./#5-integration-websocket)

## 1. Qu'est-ce que l'ingestion de données ? 

---------------------------------------

L'ingestion de données est le processus par lequel Microshare consomme des données provenant de diverses sources pour les distribuer via le Smart Network et/ou les stocker dans le data lake Microshare. Les données ingérées deviennent disponibles en temps réel pour la visibilité dans les applications tableau de bord, le traitement d'événements complexes pour les notifications et déclencheurs, et l'injection dans votre architecture de streaming.


## 2. Ingestion réseau LoRaWAN via Device Cluster

---------------------------------------

[Le guide Device Cluster](/docs/2/technical/microshare-platform/device-cluster-guide/) constitue un excellent tutoriel pour vous guider dans la configuration du device cluster. Dans ce guide, une description plus approfondie des nombreux paramètres du device cluster sera fournie. 


{% include image.html url="/assets/img/data-ingestion-1.png" description="DI1" %}

La partie du device cluster impliquée dans l'ingestion de données consiste à collecter les données des appareils et à les déposer dans le lake. Lors de la création du device cluster, le recType **source**, marqué en vert, désigne le nom sous lequel arrivent les informations chiffrées, et le recType **cible**, marqué en bleu, est l'emplacement de stockage. Dans le code unpacker, le programme lit le flux de données du recType source et stocke sous le recType cible. Le recType cible sera utile plus tard lorsque vous voudrez extraire les données du data lake. Le répertoire unpacked du recType cible est très important car il signifie que les données ont été décodées. 

{% include image.html url="/assets/img/data-ingestion-2.png" description="DI2" %}

Marqué en bleu se trouve la catégorie fournisseur réseau. Ce champ est obligatoire car chaque réseau a son propre format pour livrer les informations au réseau Microshare. Renseigner le mauvais fournisseur réseau empêchera vos données d'appareils d'être correctement représentées sur votre tableau de bord. 

## 3. Téléverser des données via REST API POST
---------------------------------------

Le téléversement manuel est la méthode la plus basique pour envoyer des données sur la plateforme.
Pour ce faire, envoyez vos données comme corps d'un appel [POST /share](/assets/html/api-ms.html#request-shares-create-one-share). Elles seront ensuite disponibles depuis le data lake avec des appels [GET /share](/assets/html/api-ms.html#request-shares-get-one-share). 

## 4. Interrogation par Robot pour récupérer des données
---------------------------------------

Alternativement, certaines plateformes proposent des API RESTful pour demander les données qu'elles stockent, telles que [Sierra AirVantage](https://airvantage.net/#offers) ou [Cumulocity](https://www.cumulocity.com/).  
Dans ce cas, vous pouvez configurer un [Robot planifié](/docs/2/fr/technical/microshare-platform-advanced/robots-guide/#c-triggered-vs-scheduled) pour effectuer des appels GET vers votre plateforme IoT périodiquement.  
Vous êtes libre de configurer votre script Robot comme vous le souhaitez, pour décider quand et quoi stocker comme objet à partir de ces données.  
Ci-dessous se trouve un exemple de script Robot qui effectue une récupération de données depuis Orange LiveObjects, en stockant tous les paquets IoT récupérés dans le data lake Microshare :

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
      
      //setting up the recType to save the result under
      var recType = 'orange.liveobjects.siconia';

      // Setting up the data pull GET call to Orange LiveObjects
      var liveObjectDevEui = 'myDeviceDevEUI';
      var liveObjectsUrl = 'https://liveobjects.orange-business.com/api/v0/data/streams/urn:lora:' + liveObjectDevEui + '!uplink';
      
      var liveObjectsHeaders = {};
      liveObjectsHeaders["X-API-Key"] = "myLiveObjectsApikey";
      liveObjectsHeaders.Accept = 'application/json';

      // Performing the pull data GET call to LiveObjects
      var liveObjectsResponse = lib.get(liveObjectsUrl, liveObjectsHeaders);

      // Saving every packet to the microshare data lake
      liveObjectsResponse.forEach(function(packet){
          lib.write(recType, packet, auth, ['liveObjects']);
      });
      
  }
{% endhighlight %}
  
## 5. Intégration Websocket
---------------------------------------

Certaines plateformes IoT agissent comme des [serveurs websocket](https://en.wikipedia.org/wiki/WebSocket) et permettent aux clients websocket d'écouter et de récupérer des données en direct. En raison de la complexité de l'intégration, la connexion websocket ne peut pas être auto-gérée.
Votre interlocuteur Microshare peut configurer un client websocket qui prend en charge la gestion de la connexion websocket pour rendre vos données disponibles en temps réel.  
Nous aurons besoin des informations suivantes pour configurer le websocket :
{% highlight java %}
{
  // The URI to the websocket server
  // If the WS service takes authorization as a query parameter, add it to the end of the URL.
  uri = "ws://my.websocket.uri?Authorization=Basic+My_WS_token"
  // if the service takes authorization as a header use below.
  authHeader = "Basic My_WS_header"
}
{% endhighlight %}

## Et ensuite ?
---------------------------------------

Après l'ingestion des données dans le lake, elles sont déballées. Ce processus est expliqué en détail dans la [page Déballage des données](/docs/2/fr/technical/microshare-platform-advanced/data-unpacking/).

Vous pouvez également consulter le [guide Robot planifié.](/docs/2/fr/technical/microshare-platform-advanced/scheduled-robot)

 
