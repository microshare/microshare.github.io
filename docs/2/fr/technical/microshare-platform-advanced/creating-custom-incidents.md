---
layout: docs
title: Création d'incidents personnalisés
description: Découvrez comment créer des tâches et alertes personnalisées non associées à un capteur ou emplacement capteur
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/creating-custom-incidents.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/creating-custom-incidents
  fr: /docs/2/fr/technical/microshare-platform-advanced/creating-custom-incidents
---
{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail" %}

<br>

---------------------------------------

##### SOMMAIRE : 

1. [Alertes Microshare](./#1-alertes-microshare)
2. [Vue d'ensemble](./#2-vue-densemble)
3. [API Create Share pour une alerte](./#3-api-create-share-pour-une-alerte)
4. [Vérifier la création de l'alerte](./#4-verifier-la-creation-de-lalerte)
5. [Créer des alertes par emplacement personnalisé](./#5-creer-des-alertes-par-emplacement-personnalise)
6. [Créer des alertes par type d'alerte personnalisé](./#6-creer-des-alertes-par-type-dalerte-personnalise)
7. [RecTypes](./#7-rectypes)
  - A. [Configuration du Bundler](./#a-configuration-du-bundler)

---------------------------------------

## 1. Alertes Microshare
---------------------------------------

Dans le pipeline de données Microshare, nous transformons les données IoT (provenant des capteurs) en événements et alertes, ce qui permet un système plus réactif où les données de mouvement et environnementales deviennent des alertes et des données d'action.

Les données d'alerte marquent la fin du processus dans le pipeline IoT de base, conduisant à une notification, un SMS ou un e-mail, laissant le client décider de la suite.

Pour en savoir plus sur les incidents et alertes, consultez le guide [Incidents](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/incident/).

## 2. Vue d'ensemble
---------------------------------------

Les alertes sont principalement déclenchées par le flux de données d'un capteur. Il peut survenir un besoin de créer des alertes personnalisées non associées à un capteur ou emplacement capteur, c'est-à-dire manuellement. Ces alertes peuvent déclencher un incident sur lequel le client peut agir.

Actuellement, les alertes pour une application de routage sont générées à partir d'un certain événement produit par un capteur, ou le client peut créer des alertes associées à un emplacement capteur. Il n'existe pas encore de fonctionnalité permettant aux clients de créer des alertes personnalisées non associées à un emplacement capteur.

Pour créer des alertes personnalisées non associées à un capteur, nous pouvons utiliser l'interface API de Microshare avec Postman pour créer un nouveau share dans un rectype. 
Pour démarrer avec l'interface API Microshare, consultez les guides [Démarrage rapide](https://docs.microshare.io/docs/2/technical/api/quick-start/) et [Authentification](https://docs.microshare.io/docs/2/technical/api/authentication/).

## 3. API Create Share pour une alerte
---------------------------------------

Dans la collection API Microshare que vous aurez configurée après le guide de démarrage rapide API, sélectionnez la requête « Create One Share ». Sous path variables, définissez la valeur de rectype comme le rectype du type d'alerte événement que vous souhaitez créer.

par ex. io.microshare.event.alert.feedback
{% include image.html url="/assets/img/incidents/image1.png" description="thumbnail 1" %}

Ce rectype peut être un rectype existant ou un nouveau rectype personnalisé de votre choix. Si le rectype est personnalisé, vous devrez configurer un nouveau robot bundler qui gérera les alertes de votre nouveau rectype. Pour créer un nouveau robot et le configurer, consultez le [guide Robots](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/robots-guide/) et la [configuration Bundler](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/bundler-configuration/)

Ensuite, dans l'onglet Body de la requête, sélectionnez le format raw pour le corps, et écrivez le corps de l'alerte que vous souhaitez créer au format ci-dessous.

```
{ 
  "alert": "<alert_type>", 
  "change": 1, 
  "current": { 
    "sum": 1 
  }, 
  "event": "<event_type>", 
  "history": { 
    "sum": 0 
  }, 
  "label": "<label>", 
  "meta": { 
    "device": [ 
      "<location>"
    ], 
    "global": [ 
      "<organisation>"
    ], 
    "iot": { 
        "time": "YYYY-MM-DDThh:mm:ss.000Z",    
    }, 
    "source": [], 
    "usecase": "SF01" 
  }, 
  "solution": "<solution_type>" 
}
``` 
Pour des exemples de corps pour créer des alertes avec emplacements et types d'alerte personnalisés, consultez les sections [5](./#5-creer-des-alertes-par-emplacement-personnalise) et [6](./#6-creer-des-alertes-par-type-dalerte-personnalise)

{% include image.html url="/assets/img/incidents/image2.png" description="thumbnail 2" %}

Après avoir ajouté votre corps et le rectype approprié (ex. io.microshare.event.alert.feedback), cliquez sur send sur la requête et un nouveau share devrait être ajouté dans le rectype approprié. Ensuite, vérifiez si le share a bien été créé.

## 4. Vérifier la création de l'alerte
---------------------------------------
Lorsque vous créez un share de la nouvelle alerte sur le rectype d'alerte, vous obtiendrez un corps de réponse de confirmation comme suit.
{% include image.html url="/assets/img/incidents/image3.png" description="thumbnail 3" %}

À partir de ce corps, copiez le champ url. 
Ensuite, ouvrez la requête « Get One Share » et remplacez la partie sélectionnée par l'url que vous avez copiée.
{% include image.html url="/assets/img/incidents/image4.png" description="thumbnail 4" %}

Cliquez maintenant sur send. Vous devriez voir un corps de réponse comme illustré ci-dessous, qui devrait contenir le corps de l'alerte que vous avez créée. 
{% include image.html url="/assets/img/incidents/image5.png" description="thumbnail 5" %}

Vous pouvez ainsi vérifier si votre share a été créé correctement. Après un certain temps, votre nouvelle alerte devrait apparaître dans votre application de routage et pourra être assignée au personnel concerné.

## 5. Créer des alertes par emplacement personnalisé
---------------------------------------
Exemple de corps pour ajouter des alertes pour un emplacement personnalisé.
```
{ 
  "alert": "feedback", 
  "change": 1, 
  "current": { 
    "sum": 1 
  }, 
  "event": "clean", 
  "history": { 
    "sum": 0 
  }, 
  "label": "Label", 
  "meta": { 
    "device": [ 
      "Building B", 
      "Floor 2", 
      "Kitchen", 
      "Sink" 
    ], 
    "global": [ 
      "custom global tags"
    ], 
    "iot": { 
        "time": "YYYY-MM-DDThh:mm:ss.sssZ"
    }, 
    "source": [], 
    "usecase": "Usecase" 
  }, 
  "solution": "alert" 
} 
``` 
L'exemple ci-dessus démontre un corps de requête pour créer un share avec un tag d'emplacement personnalisé avec un type d'alerte et d'événement connu. Cet emplacement peut ne pas être associé à un emplacement capteur et peut correspondre à une tâche ponctuelle pour un lieu particulier.

Pour gérer les emplacements personnalisés, vous devrez configurer le robot bundler respectif pour le rectype d'alerte donné.

Par exemple, ici, solution est alert et le type d'alerte est feedback ; vous pouvez [configurer](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/bundler-configuration/) le robot existant pour le rectype « io.microshare.event.alert.feedback » pour gérer le nouvel emplacement qui est ["Building B", "Floor 2", "Kitchen", "Sink"].

## 6. Créer des alertes par type d'alerte personnalisé
---------------------------------------
Exemple de corps pour créer une alerte avec un type d'alerte personnalisé
```
{ 
  "alert": "trash", 
  "change": 1, 
  "current": { 
    "sum": 1 
  }, 
  "event": "full", 
  "history": { 
    "sum": 0 
  }, 
  "label": "Label", 
  "meta": { 
    "device": [ 
      "Building A", 
      "Floor 4", 
      "Room 1", 
      "Trash Can" 
    ], 
    "global": [ 
      "custom global tags"
    ], 
    "iot": { 
        "time": "YYYY-MM-DDThh:mm:ss.sssZ"
    }, 
    "source": [], 
    "usecase": "Usecase" 
  }, 
  "solution": "clean" 
} 
``` 
L'exemple ci-dessus démontre la création d'une tâche avec un type d'alerte et d'événement personnalisés. 
Ici, la tâche consiste à vider la poubelle.
{% include image.html url="/assets/img/incidents/image7.png" description="thumbnail 7" %}

Ce type de format peut être utilisé pour assigner des tâches ponctuelles qui peuvent ou non être liées aux alertes capteur.

Pour les alertes avec types d'alerte et d'événement personnalisés, un robot bundler d'incidents personnalisé doit être [créé](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/robots-guide/) et [configuré](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/bundler-configuration/) 

## 7. RecTypes
---------------------------------------
Le recType par défaut pour les alertes est io.microshare.event.alert.(alertType)
Vous pouvez créer des shares d'alertes dans le même rectype ou définir votre propre rectype personnalisé. 

Les rectypes personnalisés peuvent être définis au format io.microshare.event.alert.(customAlertType)

Par exemple : rectype = io.microshare.event.alert.refill
{% include image.html url="/assets/img/incidents/image6.png" description="thumbnail 6" %}

### Configuration du Bundler
---------------------------------------
Pour que ces nouvelles alertes personnalisées soient enregistrées dans l'application de routage, un robot bundler doit être configuré pour gérer vos alertes personnalisées. 
Si le share d'alerte est créé dans un recType existant, vous devrez mettre à jour le robot bundler existant selon l'alerte basée sur le type d'alerte ou l'emplacement.
Si vous avez créé un nouveau rectype pour votre share d'alerte personnalisé, vous devrez créer un nouveau robot bundler d'incidents.

Pour configurer un robot Bundler, consultez le guide [configuration bundler](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/bundler-configuration/).
Pour créer un nouveau robot, consultez le [guide Robots](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/robots-guide/) puis la [configuration bundler](https://docs.microshare.io/docs/2/fr/technical/microshare-platform-advanced/bundler-configuration/) pour configurer le robot bundler d'incidents.
