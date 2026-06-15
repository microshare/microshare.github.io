---
layout: docs
title: Guide des vues
description: Guide complet des vues
lang: fr
translation_of: docs/2/technical/microshare-platform/views-guide.md
translations:
  en: /docs/2/technical/microshare-platform/views-guide
  fr: /docs/2/fr/technical/microshare-platform/views-guide
toc: true
---


{% include image.html url="/assets/img/banner.jpg" description="thumbnail 2" %}

<br>
---------------------------------------

##### SOMMAIRE :

1. [Qu'est-ce qu'une vue ?](./#1-quest-ce-qu-une-vue)
2. [Que puis-je faire avec elles ?](./#2-que-puis-je-faire-avec-elles)
  - [Interroger le Data Lake](./#--interroger-le-data-lake)
  - [Créer des données d'exemple ou de référence](./#--creer-des-donnees-d-exemple-ou-de-reference)
3. [Comment les utiliser ?](./#3-comment-les-utiliser)
  - A. [Création d'une vue](./#--a-creation-d-une-vue)
  - B. [Vues statiques](./#--b-vues-statiques)
  - C. [Vues Pipeline Query](./#--c-vues-pipeline-query)
4. [Taille de requête par défaut d'une vue](./#4-taille-de-requete-par-defaut-d-une-vue)
5. [Remplacements de chaînes pour les vues](./#5-remplacements-de-chaines-pour-les-vues)
6. [Mise en pratique (cas d'usage du décompte d'enregistrements)](./#6-mise-en-pratique)

---------------------------------------

## 1. Qu'est-ce qu'une vue ?
---------------------------------------

Une vue est un composant pour examiner vos données de différentes manières. Elle peut contenir des données statiques ou des données récupérées dynamiquement, et vous permet de contrôler le contenu et les formats des données. La combinaison des vues avec les règles de partage vous permet de contrôler qui a accès aux données et quelles données ils peuvent voir.



## 2. Que puis-je faire avec une vue ?
---------------------------------------


#### Interroger le Data Lake
Utilisez l'option « Pipeline Query » pour interroger le data lake. Le format de requête est basé sur [MongoDB Aggregation Query](https://docs.mongodb.com/v3.4/aggregation/). L'utilisation d'une vue vous donne un contrôle plus avancé sur la récupération des données que les appels API RESTful Microshare utilisés seuls.

Utilisez une vue pour :

  • Appliquer des critères de recherche

  • Regrouper les données

  • Trier les données

  • Aplatir ou restructurer les données dans un format plus facilement exploitable par votre application ou cas d'usage

  • Configurer des règles de partage précises

Notez que l'utilisation de critères de recherche dans une vue offre des avantages distincts par rapport aux appels API classiques. Par exemple :

  • La limite d'enregistrements est appliquée APRÈS l'exécution du match, ce qui vous permet de récupérer plus facilement un nombre prévisible d'enregistrements parmi VOS données

  • La récupération de données historiques est plus simple avec une vue, car vous pouvez inclure les dates de début et de fin dans les critères de match. Avec l'API, la seule façon de le faire est la pagination.

  • Les vues vous offrent un contrôle granulaire sur les personnes ayant accès à quelles parties de vos données. Par exemple, vous pouvez écrire une vue pour exposer un sous-ensemble de vos données, puis écrire des règles de partage pour spécifier qui a accès aux données renvoyées par la vue.

  • Les performances de récupération des données sont meilleures avec une vue, car Microshare met en cache les données renvoyées par les vues.

#### Créer des données d'exemple ou de configuration
Utilisez l'option « Static JSON » pour :

  •  Créer des échantillons de données fixes pour les tests

  •  Stocker et récupérer vos propres données de configuration propriétaires

## 3. Comment utiliser les vues ?

 
#### Comment créer une vue

Les vues peuvent être créées via l'API ou via l'éditeur « View » dans la Composer Console. Pour accéder à l'éditeur de vues, cliquez sur « MANAGE » dans le panneau de navigation supérieur. Un panneau horizontal apparaîtra sur le côté gauche de la page. Sélectionnez le navigateur de panneau « VIEWS » à gauche pour voir la liste de vos vues enregistrées.

{% include image.html url="/assets/img/composer-fact-factindex1.jpg" description="View Index - Card View" %}

Cliquez sur le bouton « Create » pour créer une nouvelle vue pour vos données.

#### Vues statiques

Pour créer une vue qui renvoie des données statiques, sélectionnez l'onglet « Static JSON ». À partir de là, vous pouvez saisir ou coller des données statiques dans la section éditeur au format JSON.

{% include image.html url="/assets/img/composer-fact-create-static1.jpg" description="View Create Static" %}

Cliquez sur le bouton « Create » en haut pour créer votre nouvelle vue.

#### Vues Pipeline Query

Pour créer une vue qui peut récupérer, agréger ou transformer des données du data lake Microshare en utilisant le langage de requête d'agrégation MongoDB, sélectionnez l'onglet « Pipeline Query ».

{% include image.html url="/assets/img/composer-fact-create-query1.jpg" description="View Create Query" %}

##### Recherche via $match
$match vous permet de spécifier des critères de recherche pour trouver des enregistrements.

Par exemple, ceci récupérera tous les enregistrements ayant un « recType » de « io.microshare.environment.unpacked.
{% highlight JSON %}  
  [
    {"$match": {"recType": "io.microshare.environment.unpacked"}}
  ]
{% endhighlight %}  

Des critères de recherche supplémentaires peuvent être ajoutés à l'instruction $match en les ajoutant aux éléments $match.
{% highlight JSON %}[
  {
    "$match": {
      "recType": "io.microshare.environment.unpacked",
      "data.meta.device": {
        "$all": [
          "London"
        ]
      }
    }
  }
]{% endhighlight %}  

Dans cet exemple, la recherche renverra tous les enregistrements avec un recType de « io.microshare.environment.unpacked » et une balise de localisation « London » auxquels l'utilisateur a accès.


##### Tri de plusieurs enregistrements
Cet exemple montre comment renvoyer les enregistrements dans l'ordre de leur horodatage, mais vous pouvez trier par n'importe quel champ de vos données ou métadonnées.
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.microshare.environment.unpacked"
    }
  },
  {
    "$sort": {
      "data.meta.iot.time": -1
    }
  }
]
{% endhighlight %}  

Le tri peut également porter sur tout autre champ des enregistrements.
{% highlight JSON %}
  "$sort": {
    "data.meta.iot.device_id": -1
  }
{% endhighlight %}  

##### Regroupement par éléments de données définis
Vous pouvez utiliser le langage de requête Mongo pour regrouper les résultats de la requête pour certaines opérations telles que sum, count, max, min, first, last ou average.

L'exemple suivant renvoie la dernière structure « device » et les balises de localisation pour chaque identifiant d'appareil unique. Cela peut être utile pour déterminer l'autonomie de la batterie.
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.tracknet.healthy.TBHV100"
    }
  },
  {
    "$sort": {
      "data.meta.iot.time": -1
    }
  },
  {
    "$limit": 1000
  },
  {
    "$group": {
      "_id": {
        "devEUI": "$data.device.id"
      },
      "loc1": {
        "$last": {
          "$arrayElemAt": [
            "$data.meta.device",
            0
          ]
        }
      },
      "loc2": {
        "$last": {
          "$arrayElemAt": [
            "$data.meta.device",
            1
          ]
        }
      },
      "loc3": {
        "$last": {
          "$arrayElemAt": [
            "$data.meta.device",
            2
          ]
        }
      },
      "device": {
        "$last": "$data.device"
      }
    }
  }
]
{% endhighlight %}  

Ou vous pouvez compter le nombre d'enregistrements pour chacune des régions :
{% highlight JSON %}
    "$group": {
      "_id": "$data.region",
      "count" : {"$sum" : 1 }
    }
{% endhighlight %}  

##### Spécifier les champs à partager avec $project
Vous pouvez renvoyer sélectivement uniquement les champs de données que vous souhaitez exposer et/ou modifier le nom des champs dans les données renvoyées.

Dans l'exemple suivant, chaque enregistrement contiendra 2 champs avec des noms de champs nouvellement définis. L'identifiant d'enregistrement du data lake est également ajouté par le système par défaut.
{% highlight JSON %}
[
  {
    "$match": {
      "recType": "io.microshare.environment.unpacked"
    }
  },
  {
    "$project": {
      "temp": "$data.temperature.0.value",
      "humidity": "$data.humidity.0.value"
    }
  }
]
{% endhighlight %}



Pour plus de détails sur la syntaxe des requêtes, consultez le site de documentation MongoDB
[Aggregation Pipeline Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/).


## 4. Taille de requête par défaut d'une vue
---------------------------------------

Pour optimiser les performances de votre requête de vue, elle n'est pas exécutée sur l'ensemble de votre collection d'enregistrements — cela pourrait représenter des millions d'entrées. Elle est exécutée par défaut sur les 999 enregistrements les plus récents correspondant à votre clause match.
Ainsi, une requête de vue comme celle-ci :

{% highlight JSON %}  
  [
    {"$match": {"recType": "com.your.recType"}}
  ]
{% endhighlight %}  

Est interprétée comme :

{% highlight JSON %}
  [
    {"$match": {"recType": "com.your.recType"}},
    {"$limit": 999}
  ]
{% endhighlight %}

Pour remplacer ce comportement par défaut, vous pouvez spécifier votre propre clause $limit.
Par exemple, dans cette requête :
{% highlight JSON %}
  [
    {"$match": {"recType": "com.your.recType"}},
    {"$limit": 42},
    {"$project": {"myData":"$data"}
  ]
{% endhighlight %}
la clause $project est exécutée sur les 42 enregistrements les plus récents avec le recType com.your.recType, ce qui la rend d'autant plus rapide.

## 5. Remplacements de chaînes pour les vues
---------------------------------------

Les vues statiques et de requête prennent en charge le remplacement de chaînes de variables avec la syntaxe ```${myVariable}```.
Les valeurs de remplacement peuvent être passées via l'appel API /share, ou via le paramètre params des fonctions lib.readShareByView d'un [Robot](../robot-guide).

#### Exemple 1 : Remplacement de chaînes pour les vues statiques via les appels /share
Considérez une vue statique avec un recType de ```com.your.recType``` et un id de ```1234```, avec l'entrée statique suivante :
{% highlight JSON %}
  {"name":"${myName}", "age":${myAge}}
{% endhighlight %}

Vous pouvez remplacer dynamiquement les variables ```${myAge}``` et ```${myName}``` lors de l'appel de la vue via une API /share comme suit :
```/share/com.your.recType?id=1234&myName=Bob&myAge=35```
Est interprété comme
{% highlight JSON %}
  {"name":"Bob", "age":35}
{% endhighlight %}

#### Exemple 2 : Remplacement de chaînes pour une requête de vue depuis un Robot
Une façon très puissante de personnaliser une requête de vue est de lui passer une variable dynamique calculée par un Robot.

Par exemple, si vous souhaitez obtenir tous les enregistrements du recType myRecords *créés dans la dernière minute*, vous pouvez utiliser cette requête de vue (recType de la vue ```com.your.recType``` et id ```1234```) :
{% highlight JSON %}
  [ 
    {
      "$match": {
        "recType": "${recType}",
          "data.meta.iot.time": {
            "$gt": "${timeLimit}"
          }
        }
    }
]
{% endhighlight %} 

Et la déclencher avec cet appel Robot :
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
      
      var now = new Date().getTime();
      
      var oneMinuteAgo = new Date(now - 60000).getTime();

      var paramMap = {
            timeLimit: oneMinuteAgo
      }; 
      
      lib.readShareByView(auth, "com.your.recType", "1234", [], paramMap);
  }
{% endhighlight %}

La variable ```timeLimit``` passée dans les paramètres de ```lib.readShareByView()``` remplacera la valeur ```${timeLimit}``` dans la requête pipeline de la vue.
La vue exécutera ensuite sa requête et ne récupérera que les enregistrements créés dans la dernière minute.

### Modifier et tester une vue

Vous pouvez modifier vos vues en sélectionnant et en cliquant sur l'icône de stylo pour ouvrir l'éditeur de vue.

{% include image.html url="/assets/img/composer-fact-edit-edit1.jpg" description="View Index - Card View" %}

Pour tester la réponse de cette vue dans l'appel API, faites défiler jusqu'à la section « View Preview », cliquez sur le bouton « SAVE & TEST » pour voir les résultats du test. Cela fonctionne également très bien lorsque vous souhaitez voir les résultats de la requête.

{% include image.html url="/assets/img/composer-fact-edit-test1.jpg" description="View Index - Card View" %}

## 6. Mise en pratique :
---------------------------------------

### Cas d'usage : suivi du décompte d'enregistrements

L'objectif de la solution est de fournir un moyen programmatique simple de vérifier que le décompte des enregistrements reçus au niveau Microshare est cohérent avec le décompte attendu.

Un appel API peut être utilisé pour invoquer une vue dans Microshare dont le rôle est de demander un décompte entre une plage de dates/heures correspondant à la durée de l'échantillon. La réponse de l'API peut être comparée aux enregistrements réellement enregistrés pour déterminer s'ils sont en accord.

Pour commencer, créez une nouvelle vue dans Composer sous le compte qui possède les enregistrements de données dans Microshare. Cette vue devrait ressembler à :

##### Requête
{% highlight JSON %}
[
  {
    "$match": {
      "recType": "${recType}",
      "createDate": {
        "$gte": "${from}",
        "$lte": "${to}"
      }
    }
  },
  {
    "$sort": {
      "createDate": -1
    }
  },
  {
    "$limit": 2500
  },
  {
    "$count": "count"
  }
]
{% endhighlight %}

Les valeurs de temps peuvent également provenir d'un horodatage au niveau des données tel que data.meta.iot.time lorsqu'il est disponible pour les formats de données IoT courants.

{% include image.html url="/assets/img/view-example-usecase1.png" description="View Setup for Use Case 1" %}

##### Exemple de paramètres de test
{% highlight JSON %}
{
    "recType":"com.mycompany.sensor.unpacked",
    "from":"2020-04-03T00:00:00-0400",
    "to":"2020-04-04T00:00:00-0400"
}
{% endhighlight %}

##### Appel API
`{{hostname}}/share/com.mycompany.count?id=5cd9809446e0fb002312cebe&from=2019-04-03T00:00:00-0400&to=2019-04-04T00:00:00-0400&recType=com.mycompany.sensor.unpacked`

Notez que le recType inclus dans le chemin est le recType attribué à la vue. Il est arbitraire mais doit correspondre au recType utilisé pour créer la vue dans Composer. Le paramètre de requête ?id= est l'identifiant de la vue.

Les autres valeurs de paramètres de requête correspondent aux insertions de texte dans la requête (ex. &from => ${from}). La paramétrisation permet à l'agent appelant de spécifier la plage de dates/heures et le recType pour une flexibilité maximale. Le recType peut être celui des enregistrements bruts OU déballés.

##### Exemple de réponse API :
{% highlight JSON %}
{
  "meta": {
    "totalPages": 1,
    "currentPage": 1,
    "perPage": 999,
    "totalCount": 1,
    "currentCount": 1
  },
  "objs": [
    {
      "desc": "Derived from com.mycompany.count",
      "name": "Derived Data",
      "url": "/share/com.mycompany.count",
      "_id": "5cd9809446e0fb002312c???",
      "tags": [],
      "data": {
        "count": 18688
      },
      "id": "5cd9809446e0fb002312c???",
      "tstamp": "05/13/2019 02:40:38:311 PM",
      "recType": "com.mycompany.count"
    }
  ]
}
{% endhighlight %}

##### Autorisation API
L'API peut s'authentifier en tant que propriétaire de la vue OU l'API peut utiliser une entité d'authentification distincte. Si un identifiant différent est utilisé, une règle doit être créée pour partager la vue avec l'utilisateur de l'API. Pour ce faire, sélectionnez « Shares: filtered objects (via View) » dans le menu déroulant Resource Type de la règle et autorisez les opérations Read/Query/Execute. Consultez la documentation sur les [règles](../rules-guide) pour plus d'informations.

{% include image.html url="/assets/img/rule-share-view-with-select.png" description="Rule Setup for Use Case 1" %}
