---
layout: docs
title: Bibliothèque de Robots
description: Extraits de méthodes utilisables depuis les Robots
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/robots-library.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/robots-library
  fr: /docs/2/fr/technical/microshare-platform-advanced/robots-library
---
{% include image.html url="/assets/img/thumbnail-5.jpg" height="900" width="900" description="thumbnail 2" %}


<br>
---------------------------------------

##### SOMMAIRE : 

1. [Bibliothèque de Robots](./#1-bibliotheque-de-robots)
3. [Comment décoder manuellement vos données](./#2-comment-decoder-manuellement-vos-donnees)

---------------------------------------

## 1. Bibliothèque de Robots
---------------------------------------

La bibliothèque Robot est accessible depuis les scripts Robot via  
{% highlight js %} var lib = require('./libs/helpers'); {% endhighlight %}

Elle donne accès à des méthodes pratiques pour vous faciliter la vie.

Ci-dessous se trouvent des catégories et des extraits de code pour vous guider dans l'utilisation de ces méthodes lib :

#####  [Lecture et écriture d'enregistrements](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/read-and-write/)
#####  [Appels RESTful](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/making-restful-calls-new/)
#####  [Envoi de notifications](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/sending-notifications-new/)



## 2. Comment décoder manuellement vos données 
---------------------------------------

Comme présenté dans les pages sur l'ingestion et la transformation des données, pour les capteurs compatibles Microshare les décodeurs sont liés aux device clusters, cette étape n'est donc pas nécessaire. 

#####  [Appareils TrackNet Tabs V1.1](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/tracknet-tabs/)
#####  [Traceur GPS LoRaWAN Globalsat LT-100](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/globalsat-lt-100/)
#####  [Sagemcom Siconia](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/sagemcom-siconia/)
#####  [Démonstrateur LoRaWAN Adeunis V1.1](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/adeunis-demonstrator/)
#####  [Décodage générique](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/decoding-payloads-new/)


 
