---
layout: docs
title: API de démonstration
description: Une introduction à l'API Microshare™
lang: fr
translation_of: docs/2/technical/api/demo-api.md
translations:
  en: /docs/2/technical/api/demo-api
  fr: /docs/2/fr/technical/api/demo-api
toc: true
---




{% include image.html url="/assets/img/thumbnail-14.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SOMMAIRE : 


Nous avons créé des API spécifiquement pour la démonstration afin de vous montrer comment fonctionne Microshare.  

Pour les essayer, vous aurez besoin d'un compte Microshare sur la plateforme de développement. Veuillez suivre [ce tutoriel](../../../general/quick-start/create-an-account) si vous n'en avez pas déjà un. 

Ensuite, vous devrez créer votre clé API et configurer Postman comme indiqué dans le [Démarrage rapide](../quick-start).
<br>
**1.** [Obtenir une clé API](./#1-get-an-api-key)
<br>
**2.** [Configurer Postman](./#2-setup-postman) 

Une fois terminé, vous devrez suivre les [tutoriels d'authentification](../authentication). 

Il est important que vous compreniez comment fonctionnent ces requêtes car nous ajouterons un paramètre supplémentaire. 

Lorsque vous effectuez une requête, un jeton de requête est requis à la fin de l'appel :

`&identity=External_ID`

Une fois que vous avez créé et spécifié votre jeton de requête, en appuyant sur le bouton `Send`, vous devriez voir quelque chose de similaire à ce qui suit si toutes vos spécifications sont correctes :

{% include image.html url="/assets/img/authentification_demonew.png" description="authentification demo" %}

Cela vous permettra de rejoindre l'identité de la démo à l'exécution.

Une fois terminé, vous pouvez maintenant effectuer des share API et des requêtes complexes de lecture de données ! 


### A. Requête simple

L'objectif suivant est d'effectuer des requêtes simples pour lire les données de démonstration en suivant [ce tutoriel](../share-api). Sur cette API de démonstration, vous pouvez utiliser les recTypes suivants (ou points de terminaison) pour demander des informations ! Vous ajouterez ces recTypes au champ entouré en jaune ci-dessous.

<br>
#### ATTENTION : Ces données ne sont pas des données réelles et sont fournies uniquement à des fins de démonstration.

##### Nous vous donnons l'opportunité de voir comment les données circuleront via l'API, afin que vous puissiez comprendre l'essence de la structure des données. Si vous souhaitez vous concentrer sur la signification des données et les corrélations temporelles ou géographiques, nous vous conseillons d'installer certains de nos capteurs pour obtenir un flux de données réel.

Temperature : `io.microshare.demo.environment.unpacked`

Fridge : `io.microshare.demo.fridge.unpacked`

Water Temperature : `io.microshare.demo.water.pipe.unpacked`

AirQuality : `io.microshare.demo.airquality.unpacked`

Decibels Monitoring : `io.microshare.demo.sound.unpacked`

Brightness Monitoring : `io.microshare.demo.light.unpacked`

Open-Close Monitoring : `io.microshare.demo.openclose.unpacked` 

Leak Detection : `io.microshare.demo.feedback.unpacked`

Leak : `io.microshare.demo.leak.unpacked`

Asset Zoning : `io.microshare.demo.assetzoning.unpacked.event`

Contact Tracing : `io.microshare.demo.contact.unpacked.event`

Desk, Room, Bathroom, Hospital Beds (occupancy/activity)  : `io.microshare.demo.motion.unpacked`

Feedback : `io.microshare.demo.feedback.unpacked.event.meta`

UCT : `io.microshare.demo.contact.unpacked.event`

{% include image.html url="/assets/img/simple_request_demo.png" description="simple request demo" %}

<br>
 
