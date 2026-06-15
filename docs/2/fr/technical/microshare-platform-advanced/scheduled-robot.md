---
layout: docs
title: Configurer un Robot planifié pour récupérer des données
description: Page enfant de l'ingestion de données
group: getting-started
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/scheduled-robot.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/scheduled-robot
  fr: /docs/2/fr/technical/microshare-platform-advanced/scheduled-robot
---
------------------------------



Certaines plateformes proposent des API RESTful pour demander les données qu'elles stockent, telles que [Orange Live Objects](https://liveobjects.orange-business.com/), [Bouygues Telecom Objenious](https://spot.objenious.com/login), [Sierra AirVantage](https://airvantage.net/#offers) ou [Cumulocity](https://www.cumulocity.com/).  
Dans ce cas, vous pouvez configurer un [Robot planifié](../robot-guide/#triggered-vs-scheduled) pour effectuer des appels GET vers votre plateforme IoT périodiquement.  
Vous êtes libre de configurer votre script Robot comme vous le souhaitez, pour décider quand et quoi stocker comme microshare à partir de ces données.  
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


 
