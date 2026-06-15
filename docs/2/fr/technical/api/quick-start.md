---
layout: docs
title: Démarrage rapide API
description: Une introduction à l'API Microshare™
lang: fr
translation_of: docs/2/technical/api/quick-start.md
translations:
  en: /docs/2/technical/api/quick-start
  fr: /docs/2/fr/technical/api/quick-start
toc: true
---




{% include image.html url="/assets/img/thumbnail-14.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SOMMAIRE : 

1. [Introduction](./#1-introduction)
2. [Obtenir une clé API](./#2-get-an-api-key)
3. [Configurer Postman](./#3-setup-postman)
    * [Environnement Microshare](./#a-microshare-environment)
    * [Configuration](./#b-setup)
    * [Mot de passe dans Postman](./#c-password-in-postman)

---------------------------------------
## 1. Introduction
---------------------------------------

Vous utiliserez l'API Microshare pour configurer vos interactions avec la plateforme Microshare via des requêtes. L'API est la destination des données de vos appareils et constitue la principale forme de communication avec la plateforme Microshare. Ce guide vous explique comment configurer le logiciel Postman pour interagir avec l'API et commencer à opérer avec la plateforme Microshare.

**<!> Attention, Microshare donne accès à deux de ses environnements (Dev et Production), assurez-vous d'utiliser les bons environnements pour toutes les étapes selon vos besoins. <!>**

Si vous n'êtes pas sûr de l'environnement à utiliser, cette [partie](/docs/2/general/quick-start/create-an-account/#a-development-or-production) de la page « Créer un compte » explique pourquoi vous devriez utiliser Dev ou Production. [Développement ou Production](/docs/2/general/quick-start/create-an-account/#a-development-or-production)

## 2. Obtenir une clé API
---------------------------------------

Tout d'abord, vous devrez demander une clé API pour l'authentification avec les services. Ensuite, vous pourrez utiliser la Microshare Share API pour lire des données depuis, ainsi qu'écrire des données vers la plateforme.

* Connectez-vous à votre 

Production : [compte Microshare.](https://app.microshare.io)
Dev : [compte Microshare.](https://dapp.microshare.io)

* Allez dans `Manage -> Keys.`  

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}

<br>
* Cliquez sur `CREATE NEW APP` et donnez un nom convivial à votre clé API (pourquoi pas « My first IoT App » ?).

<br>
{% include image.html url="/assets/img/create-apikey-4.png" description="Add an App" %}

{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}

<br>
* Une fois la clé créée, copiez-la dans un endroit pratique, vous en aurez besoin pour exécuter les appels API Microshare.

<br>
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

## 3. Configurer Postman
---------------------------------------

### a. Environnement Microshare

Dans les tutoriels suivants sur l'API, l'environnement pourrait ne pas être celui que vous devriez utiliser selon vos besoins. 

En effet, vous pouvez utiliser l'environnement **Development** ou **Production**

Si vous n'êtes pas sûr de l'environnement à utiliser, cette [partie](/docs/2/general/quick-start/create-an-account/#a-development-or-production) de la page « Créer un compte » explique pourquoi vous devriez utiliser Dev ou Production. [Développement ou Production](/docs/2/general/quick-start/create-an-account/#a-development-or-production)

Nous vous montrerons comment configurer un environnement dans la partie suivante, cependant nous avons besoin que vous compreniez la différence entre les deux environnements.

> Si vous êtes en **Production**  

L'environnement sur Postman devrait ressembler à ceci : 

{% include image.html url="/assets/img/api/prod_environment.png" description="Empty Postman environment" width=500 %}

* authHostname : _https://auth.microshare.io_

* hostname : _https://api.microshare.io_

> Si vous êtes en **Dev**  

L'environnement sur Postman devrait ressembler à ceci : 

{% include image.html url="/assets/img/api/dev_environment.png" description="Empty Postman environment" width=500 %}

* authHostname : _https://**d**auth.microshare.io_

* hostname : _https://**d**api.microshare.io_




### b. Configuration

Cette étape est facultative si vous avez déjà une autre façon d'invoquer l'API. Dans ce cas, consultez la [documentation API Microshare](../api-collection) pour une liste des appels API et passez à la section suivante.

Sinon, vous pouvez configurer le gestionnaire d'API avec Postman sur votre ordinateur pour un accès rapide à la collection API Microshare.


<br>
**1.** Visitez notre [page de documentation API](../api-collection/) (de préférence dans un autre onglet afin d'avoir les deux références ouvertes).

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/6881783-fed1e41c-e08b-4d1e-afea-85b8fc1b05a0)

<br>
**2.** Cliquez sur le bouton `Run in Postman` pour installer Postman sur votre ordinateur et charger automatiquement notre collection API Postman et l'environnement.  

**Si cela échoue**, rendez-vous sur [le site Postman](https://www.getpostman.com/) pour installer Postman manuellement, puis téléchargez et importez la collection et l'environnement depuis notre [page de documentation API](../api-collection/).

<br>
**3.** Ouvrez Postman sur votre ordinateur. Il vous affichera une fenêtre modale `Create New`, fermez-la simplement.

<br>
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

<br>
**4.** Pour voir la **collection** Postman Microshare, cliquez sur `Collections` dans le volet de gauche.

<br>
{% include image.html url="/assets/img/configure-postman-2new.png" description="Collection and Environment config" %}

<br>
**5.** Pour configurer votre **environnement** Microshare, sélectionnez l'icône d'engrenage située en haut à droite de l'écran. Puis `Manage Environments`, puis cliquez sur `microshare`.

<br>
{% include image.html url="/assets/img/create-apikey-5.png" description="Empty Postman environment" %}

<br>
**6.** Dans la configuration de l'environnement, collez votre clé API dans le champ apikey, et entrez votre nom d'utilisateur et mot de passe dans les champs correspondants. 

<br>
{% include image.html url="/assets/img/generate-pipe-token-1new.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2new.png" description="Filled Postman environment" %}


### c. Mot de passe dans Postman

Si votre mot de passe contient des caractères simples, votre demande de jeton devrait fonctionner correctement.

Cependant, si votre mot de passe contient des caractères spéciaux (#,?,!,^,$,&,@ ...), veuillez suivre cette correction rapide pour éviter les erreurs.

* [Sur Postman Desktop](./#--on-postman-desktop)
* [Sur Postman Web](./#--on-postman-web)

#### - Sur Postman Desktop

Faites simplement un **clic droit sur la valeur « password »** dans l'url puis **sélectionnez « EncodeURIComponent »**.

{% include image.html url="/assets/img/api/encodeURI0.png" description="Empty Postman environment" width=600 %}

---------------------------------------

{% include image.html url="/assets/img/api/encodeURI1.png" description="Empty Postman environment" width=600 %}

---------------------------------------

{% include image.html url="/assets/img/api/encodeURI2.png" description="Empty Postman environment" width=600 %}

---------------------------------------

{% include image.html url="/assets/img/api/encodeURI3.png" description="Empty Postman environment" width=600 %}


Puis si vous réessayez votre requête, elle devrait fonctionner.

#### - Sur Postman Web

Cliquez simplement sur la valeur **« password »** dans l'url, puis **cliquez sur les trois points** et enfin **sélectionnez « EncodeURIComponent »**.

{% include image.html url="/assets/img/api/encodeURIweb0.png" description="Empty Postman environment" width=600 %}

---------------------------------------

{% include image.html url="/assets/img/api/encodeURIweb1.png" description="Empty Postman environment" width=600 %}

Puis si vous réessayez votre requête, elle devrait fonctionner.



---------------------------------------
<br>
C'est tout ! Vous avez maintenant accès à la collection API Microshare et êtes configuré pour vous [authentifier](../authentication), [écrire et lire](../share-api) des données avec la plateforme. 

###### > [Authentification](../authentication)
###### > [Share API](../share-api)
###### > [API de démonstration](../demo-api)
