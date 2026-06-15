---
layout: docs
title: Authentification
description: La sécurité est notre priorité en matière d'accès aux données
lang: fr
translation_of: docs/2/technical/api/authentication.md
translations:
  en: /docs/2/technical/api/authentication
  fr: /docs/2/fr/technical/api/authentication
toc: true
---


{% include image.html url="/assets/img/thumbnail-5.jpg" height="900" width="900" description="thumbnail 2" %}


<br>
#### SOMMAIRE :

1. [Introduction](./#introduction)
2. [Étapes](./#steps)



## Introduction
---------------------------------------

Ce guide vous explique comment obtenir un jeton d'authentification pour travailler avec l'API de démonstration Microshare. Vous devrez d'abord suivre le [Guide de démarrage rapide API](/docs/2/technical/api/quick-start/) pour obtenir votre clé et démarrer avec Postman. Ce n'est qu'après avoir terminé ce tutoriel que vous pourrez passer aux étapes suivantes. 



## Étapes
---------------------------------------

<br>
**1.** Avec votre environnement Postman configuré, vous pouvez vous authentifier auprès du service en exécutant la requête `Authentication -> Request token` de la collection. Sélectionnez l'appel POST `Request token` sur le côté droit et appuyez sur le bouton `send`. Si vous avez tous les identifiants appropriés établis depuis le [Guide de démarrage rapide API](/docs/2/technical/api/quick-start/), vous devriez recevoir votre jeton dans la zone jaune marquée ci-dessous.  

<br>
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}

<br>
**2.** Un jeton d'accès, valide pendant 48 heures, est généré et renvoyé sous la clé `access token` dans le jeu de résultats.

<br>
**Note :** Vous pouvez exécuter la requête `Authentication -> Request Pipe token` pour générer un jeton valide pour une durée illimitée MAIS qui ne peut être utilisé que pour publier des données sur la plateforme Microshare (pas de lecture). Un tel jeton est pratique pour configurer un flux routé de données IoT depuis une autre plateforme.

<br>
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

<br>
**Note :** Tous les jetons générés peuvent être trouvés, copiés ou révoqués depuis l'écran `Manage -> Key -> Tokens` dans Microshare. Si vous n'avez pas copié le jeton pipe immédiatement après l'appel, connectez-vous à votre [compte Microshare.](https://app.microshare.io), allez dans `Manage -> Key -> Tokens` et trouvez le jeton Pipe. Copiez-le !

<br>
{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}
 
<br>
**3.** Le jeton d'accès a été automatiquement collé dans votre environnement Postman. Il est utilisé par les autres appels API pour s'assurer que c'est VOUS qui interrogez les données.



---------------------------------------

Maintenant que vous avez terminé l'authentification, vous pouvez effectuer vos premières requêtes.

###### > [Share API](../share-api)

 
