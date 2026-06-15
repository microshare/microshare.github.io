---
layout: docs
title: Intégration Google Pub/ Sub
description: 
lang: fr
translation_of: docs/2/technical/streaming-integration/google-pub-sub-integration.md
translations:
  en: /docs/2/technical/streaming-integration/google-pub-sub-integration
  fr: /docs/2/fr/technical/streaming-integration/google-pub-sub-integration
toc: true
---

{% include image.html url="\assets\img\google-pub-sub\Google_Logo.png" description="google pub/ sub logo" %}

#### Sommaire :
1. [Vue d'ensemble](./#1-overview)
2. [Configuration](./#2-setup)
    * [Créer un compte de service](./#a-create-a-service-account)
    * [Générer une clé](./#b-generate-the-needed-key)
    
    
-----------------------------------------------------------------
## 1. Vue d'ensemble
-----------------------------------------------------------------
L'intégration Google Cloud Pub/Sub est une intégration de données en streaming qui pousse les données du Smart Network vers le tenancy Google Cloud Pub/Sub d'un client en temps réel. Les données sont généralement disponibles sur les Topics Google Cloud Pub/Sub, sur lesquels des abonnements peuvent être configurés pour garantir que la gestion des événements et l'analyse sont alimentées avec l'état le plus actuel de l'espace mesuré. L'intégration Google Cloud Pub/Sub crée un chemin vers le stockage avancé, la visualisation et l'analyse dans l'écosystème Google Cloud depuis le Microshare Smart Network.

## 2. Configuration
-----------------------------------------------------------------
{% include image.html url="\assets\img\google-pub-sub\Pub_flowmap.png" description="flowmap" %}

### Côté client

**Prérequis :**

 - **A.** Créer un compte de service 
 - **B.** Générer une clé 

### A. Créer un compte de service

Pour créer un compte de service, connectez-vous d'abord à votre Google Cloud Platform (GCP).

{% include image.html url="\assets\img\google-pub-sub\Pub_1.png" description="image 1" %}

Puis allez dans **Menu &gt; API &amp; Services &gt; Credentials.**

{% include image.html url="\assets\img\google-pub-sub\Pub_2.png" description="image 2" %}

{% include image.html url="\assets\img\google-pub-sub\Pub_3.png" description="image 3" %}

Cliquez sur **Create Credentials** puis sur **Service Account.**

{% include image.html url="\assets\img\google-pub-sub\Pub_4.png" description="image 4" %}

Vous devrez ensuite lui donner un nom tel que _&quot;Microshare_® _Data&quot;_ par exemple, et un **Service Account Id**, qui pourrait être identique au nom. Et enfin, vous pouvez ajouter votre propre **description**.

{% include image.html url="\assets\img\google-pub-sub\Pub_5.png" description="image 5" %}

Notre exemple :

{% include image.html url="\assets\img\google-pub-sub\Pub_6.png" description="image 6" %}

Concernant les permissions, il est important de sélectionner **PubSub Editor** ou **PubSub Admin** pour une meilleure maintenance.

{% include image.html url="\assets\img\google-pub-sub\Pub_7.png" description="image 7" %}

Vous pouvez laisser la dernière page telle quelle et cliquer sur **Done.**

{% include image.html url="\assets\img\google-pub-sub\Pub_8.png" description="image 8" %}

Le compte de service est maintenant configuré, et l'e-mail est :

 - <em>Service Account Id</em>@<em>Project Name</em>.iam.gserviceaccount.com

Si à tout moment vous devez modifier le rôle, vous pouvez modifier les paramètres de l'e-mail dans l'interface des rôles.

{% include image.html url="\assets\img\google-pub-sub\Pub_9.png" description="image 9" %}

### B. Générer la clé nécessaire

Maintenant, **cliquons sur le compte de service créé.**

{% include image.html url="\assets\img\google-pub-sub\Pub_10.png" description="image 10" %}

Puis **allez en bas** de la page pour trouver la **section « Keys ».**

{% include image.html url="\assets\img\google-pub-sub\Pub_11.png" description="image 11" %}

Et **cliquez sur Add Key &gt; Create new Key.**

{% include image.html url="\assets\img\google-pub-sub\Pub_12.png" description="image 12" %}

**Choisissez JSON** et cliquez sur **CREATE.**

{% include image.html url="\assets\img\google-pub-sub\Pub_13.png" description="image 13" %}
Votre clé est maintenant **créée** et **automatiquement téléchargée** sur votre ordinateur.

{% include image.html url="\assets\img\google-pub-sub\Pub_14.png" description="image 14" %}

Vous pouvez l'ouvrir pour vérifier que tout est correct comme ceci :

{% include image.html url="\assets\img\google-pub-sub\Pub_15.png" description="image 15" %}

Faites attention à stocker et transmettre le fichier résultant de manière sécurisée. Ces identifiants d'accès sont stockés en texte brut et vulnérables aux fuites de sécurité.

Votre contact Service ou Support Microshare aura besoin du **fichier .json**. Il est recommandé d'envoyer ces informations de manière sécurisée via un e-mail chiffré GPG ou via une connexion de chat chiffrée utilisant keybase.io.


 
