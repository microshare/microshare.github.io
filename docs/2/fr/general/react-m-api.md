---
layout: docs
title: API React-M
description: Démarrez avec React-M™, le seul système de gestion de TODO déclenché par les données au monde.
lang: fr
translation_of: docs/2/general/react-m-api.md
translations:
  en: /docs/2/general/react-m-api
  fr: /docs/2/fr/general/react-m-api
toc: true
---

---------------------------------------

{% include image.html url="/assets/img/banner-2.jpg"  description="logo ms" %}

##### SOMMAIRE :

1. [Introduction](./#introduction)


2. [Créer une tâche](./#creer-une-tache)


3. [API](./#api)


---------------------------------------

Si vous avez des questions auxquelles cette documentation ne répond pas, contactez `jbardin@microshare.io`.


## Introduction
---------------------------------------

Si vous souhaitez comprendre le fonctionnement de React-M, consultez notre page dédiée :
[https://docs.microshare.io/docs/2/general/reactm-user-guide/](https://docs.microshare.io/docs/2/general/reactm-user-guide/)



## Créer une tâche
---------------------------------------

1. La tâche déclenchée par les données sera générée par notre système de robots qui analyse les données et déclenche de nouvelles tâches selon des paramètres.
Pour cela, la solution doit être configurée par Microshare, dans le cadre de notre solution ALPHA, BETA ou produit.

2. Créer vos propres tâches :

Vous pouvez créer vos propres tâches via l'API.

## API
---------------------------------------

Pour suivre ces explications, vous devez d'abord consulter notre documentation API :
[https://docs.microshare.io/docs/2/technical/api/quick-start/](https://docs.microshare.io/docs/2/technical/api/quick-start/)

Pour utiliser l'API pour nos ToDo, voici les détails :

**URL : {{wfhostname}}/processes/TODO?Authorization={{sessionKey}}**

**remplacez {{value}} par la valeur correspondante**

wfhostname est le même que celui configuré dans le tutoriel. Pour le sessionKey,
lors de l'authentification, vous devriez voir la clé de session dans la réponse.

**BODY :**

```
{
    "REQUEST": {
        "INPUT": {
            "FACTS": {
                "todos": [
                    {
                        "item": "'Pls Cln' was received from 1st Floor.",
                        "isChecked": false
                    }
                ],
                "title": "'Pls Cln' at 1st Floor.",
                "notificationTitle": "'Pls Cln' was received from 1st Floor.",
                "notificationBody": "Please go to the location and act on the request",
                "listAssignee": "assigne1@microshare.io,assigne2@microshare.io",
                "wf_location": "Wework Microshare,1st Floor, North - Men, Restroom",
                "wf_metaTags": "bathroom,toilet",
                "location1": "Wework Microshare",
                "location2": "1st Floor",
                "location3": "North - Men",
                "location4": "Restroom"
            }
        }
    }
}
```

<br><br><br>
##### Ces paramètres sont obligatoires :

  listAssignee - (String) liste des utilisateurs ayant accès à la tâche, séparés par des virgules.

  notificationTitle - (String) Titre personnalisé de la notification. (par défaut : "New task available for you.")

  notificationBody - (String) Texte personnalisé du corps de la notification. (par défaut : "Click to Claim, Close, or Ignore.")

  title - (String) Titre de la tâche dans l'application React-M. (par défaut : 1ère sous-tâche)

  todos - (Array[Object]) Sous-tâches du ToDO.
  
  wf_location - (String) Emplacement de l'événement, séparé par des virgules
  
  wf_metaTags - (String) Métadonnées sur l'événement et son emplacement, séparées par des virgules
  
  "location1": "location2": "location3": "location4 - (String) - Chaque niveau de l'emplacement.

<br><br><br>
##### Ces paramètres sont disponibles pour un chemin de workflow différent dans ReactM :

    wf_includeSteps - étapes à inclure, chaîne du type : accept,do - pour définir les étapes à conserver pour un processus allégé (si aucune étape à inclure, ce paramètre est ignoré)

    wf_excludeSteps: "étapes à exclure, chaîne du type : accept" - pour définir les étapes à ignorer pour un processus allégé ; sera écrasé par wf_includeSteps (si toutes les étapes sont exclues, ce paramètre est ignoré)


<br><br><br>
##### Ces paramètres sont obligatoires pour de meilleures statistiques d'utilisation de ReactM :

    wf_originType - (String) Type de données d'origine comme "feedback", "motion"

    wf_originEvent - (String) Événement de données d'origine comme "clean", "paper", "soap" ...

    wf_productBrand - (String) Marque produit Microshare de cette tâche, par ex. "eversmart"

    wf_product - (String) Type de produit Microshare de cette tâche, par ex. "clean" (pour ES Clean)

    task_category - (String) Type de catégorie (maintenance, device_health, cleaning, organisation ...)

    task_id - (String) Identifiant de la tâche dans cette catégorie


<br><br><br>
##### Ces paramètres "configReactM" sont optionnels :

// Activity Timer String: https://en.wikipedia.org/wiki/ISO_8601#Durations

    startingPriorityUpdate - (Int) Cette tâche a-t-elle une priorité plus élevée ? Spécifiez une valeur de priorité initiale. (par défaut : 0)

    remindingPriorityUpdate - (Int) À chaque rappel, la priorité doit-elle augmenter ? Si oui, elle sera appliquée à la priorité (par défaut : 50)

    globalReminderTime - (Activity Timer String) Combien de temps l'application attend-elle avant de rappeler aux utilisateurs une tâche ouverte si personne ne l'a prise ?
    Pour toutes les étapes ; sera écrasé par les définitions d'étapes (par défaut : PT2H => 2 heures)

    globalTimeoutTime - (Activity Timer String) Combien de temps l'application attend-elle avant de fermer une tâche si personne ne l'a prise ? Pour toutes les étapes ; sera écrasé par les définitions d'étapes (par défaut : PT2H => 2 heures)

    acceptReminderTime - (Activity Timer String) Combien de temps l'application attend-elle avant de rappeler aux utilisateurs une tâche ouverte si personne ne l'a prise ? Pour l'étape Accept (par défaut : PT2H => 2 heures)

    doReminderTime - (Activity Timer String) Combien de temps l'application attend-elle avant de rappeler aux utilisateurs une tâche ouverte si personne ne l'a prise ? Pour l'étape Do (par défaut : PT2H => 2 heures)

    doReminderTime - (Activity Timer String) Combien de temps l'application attend-elle avant de rappeler aux utilisateurs une tâche ouverte si personne ne l'a prise ? Pour l'étape Done (par défaut : PT2H => 2 heures)

    acceptTimeoutTime - (Activity Timer String) Combien de temps l'application attend-elle avant de fermer une tâche si personne ne l'a prise ? Pour l'étape Accept (par défaut : PT3H => 3 heures)

    doTimeoutTime - (Activity Timer String) Combien de temps l'application attend-elle avant de fermer une tâche si personne ne l'a prise ? Pour l'étape Do (par défaut : PT3H => 3 heures)

    doTimeoutTime - (Activity Timer String) Combien de temps l'application attend-elle avant de fermer une tâche si personne ne l'a prise ? Pour l'étape Done (par défaut : PT3H => 3 heures)
