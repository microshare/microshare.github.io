---
layout: docs
title: Share API
description: Démarrez avec l'API Microshare™
lang: fr
translation_of: docs/2/technical/api/share-api.md
translations:
  en: /docs/2/technical/api/share-api
  fr: /docs/2/fr/technical/api/share-api
toc: true
---






{% include image.html url="/assets/img/thumbnail-7.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SOMMAIRE : 

1. [Vue d'ensemble](./#1-overview)
2. [Écrire des données](./#2-write-data)
3. [Lire des données](./#3-read-data)
4. [D'un appel Postman à un morceau de code](./#4-from-a-postman-call-to-a-piece-of-code)

---------------------------------------

## 1. Vue d'ensemble
---------------------------------------

Maintenant que vous avez terminé l'authentification, vous pouvez effectuer vos premières requêtes.

Ce guide vous explique comment écrire des données et demander des informations aux API. 

Pour cela, il existe des points de terminaison, similaires à des adresses, où les données sont stockées. 

Dans les exemples ci-dessous, nous créerons vos propres points de terminaison spécifiques (recType). Mais nous utilisons souvent des points de terminaison prédéfinis qui correspondent au type de données lui-même. Vous pouvez trouver ces informations sur la [page d'ingestion de données.](/docs/2/technical/microshare-platform-advanced/data-ingestion/)

Si vous souhaitez ensuite lire des données plus conventionnelles, vous pouvez essayer les [API de démonstration.](/docs/2/technical/api/quick-start/#4-demo-api) 



## 2. Écrire des données
---------------------------------------

**1.** Depuis la collection Postman, ouvrez la requête `Shares -> Create one Share`.

<br>
**2.** Cliquez sur `Params`, à côté du bouton `Send`, pour modifier la valeur recType. Le recType est la catégorie, ou l'identifiant, sous laquelle les données sont stockées dans Microshare. Vous avez généralement un recType par flux de données (par passerelle IoT, ou appareil IoT si vous pouvez les différencier).

<br>
{% include image.html url="/assets/img/api/create_one_share_1new.png" description="create one share" %}

<br>
**3.** Entrez votre propre recType ici, en utilisant votre combinaison `firstName.lastName`.

<br>
**4.** Cliquez sur l'onglet `Body`, sous la zone Params, et écrivez n'importe quel corps JSON, par exemple `{"Test":"Data"}`.

<br>
{% include image.html url="/assets/img/api/create_one_share_2new.png" description="create one share" %}

<br>
**4.** Cliquez sur `Send`

<br>
{% include image.html url="/assets/img/api/create_one_share_3new.png" description="create one share" %}

<br>
**5.** Un message de confirmation sera envoyé, indiquant que les données ont été écrites avec succès dans Microshare. Il renvoie des métadonnées utilisables avec d'autres appels API.



## 3. Lire des données
---------------------------------------

**1.** Depuis la collection Postman, ouvrez la requête `Shares -> Get Shares by recType` pour la configurer.

<br>
**2.** Cliquez sur `Params`, à côté du bouton `Send`, pour modifier la valeur recType. Spécifiez le recType que vous avez utilisé dans la requête Write.

<br>
{% include image.html url="/assets/img/api/read_share_1new.png" description="read share" %}

<br>
**3.** Cliquez sur `Send`. La réponse retournée sera toutes les informations stockées sous ce recType (point de terminaison). Une partie des métadonnées affichées est votre identifiant de connexion et votre clé API, montrant que VOUS êtes le propriétaire de ces données :

{% include image.html url="/assets/img/api/read_share_2new.png" description="read share" %}

**4.** Si vous exécutez à nouveau la requête Write, puis Read, le nombre d'enregistrements augmente car vous avez créé un nouvel enregistrement. Les métadonnées Microshare vous indiquent combien de pages d'enregistrements vous avez et le nombre total d'enregistrements (à l'échelle de la plateforme) stockés sous ce recType.

**Note :** La valeur `totalCount` peut être supérieure au nombre total d'enregistrements que vous possédez. C'est parce qu'un autre utilisateur pourrait stocker des données sous le même recType. Ne vous inquiétez pas, vous ne verrez que vos données, et les autres utilisateurs ne pourront voir que leurs données, sauf si vous avez créé des Rules pour partager vos données.

Les Rules sont une fonctionnalité avancée de la plateforme, mieux décrite dans le [Guide des règles.](/docs/2/technical/microshare-platform/rules-guide)

**5.** Vous pouvez utiliser la requête `Shares -> Get Latest Shares by recType`, qui ne renvoie que le tout dernier enregistrement créé sous ce recType.

**6.** Pour plus d'informations sur la configuration d'un flux de données IoT depuis une plateforme web en utilisant cette API, consultez notre [Guide des robots.](/docs/2/technical/microshare-platform-advanced/robots-guide/)



## 4. D'un appel Postman à un morceau de code
---------------------------------------

Nous avons une liste de 7 requêtes API assez simples disponibles dans cette collection Postman. Vous pouvez trouver les informations et paramètres de chacune d'elles dans le fichier Collection API.

##### > [Collection API](../api-collection)

Une fois que vous avez trouvé la requête dont vous avez besoin sur Postman, vous pouvez très rapidement extraire un code fonctionnel pour votre application : 

- Cliquez simplement sur le bouton code une fois votre requête prête. 

{% include image.html url="/assets/img/api/get_code_postman_0new.png" description="read share" %}

- Choisissez votre langage de programmation et vous obtiendrez votre code. 

{% include image.html url="/assets/img/api/get_code_postman_1new.png" description="read share" %}


**<!> Attention, le jeton n'est valide que pendant 48 heures, il est généralement nécessaire d'avoir une requête d'authentification au préalable puis d'utiliser ce jeton dans votre requête. <!>**

 
