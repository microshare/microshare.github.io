---
layout: docs
title: Données Feedback
description: Une page dédiée à la compréhension de la réception des données
lang: fr
translation_of: docs/2/technical/data-format/feedback.md
translations:
  en: /docs/2/technical/data-format/feedback
  fr: /docs/2/fr/technical/data-format/feedback
toc: true
---




#### Sommaire :
1. [Vue d'ensemble](./#1-vue-densemble)
2. [Flux de données](./#2-flux-de-donnees)
3. [Données d'événement métier](./#3-donnees-devenement-metier)
5. [Foire aux questions](./#5-foire-aux-questions)


## 1. Vue d'ensemble
---------------------------------------

**Les entrées Feedback Microshare peuvent passer par l'application touchfree ou l'appareil feedback :**
{% include image.html url="\assets\img\feedback\feedback.png" width="800" height="500" description="feedback" %}

Cette solution repose sur 3 niveaux de données.


<br>
## 2. Flux de données
---------------------------------------

## 1) Données décompressées

Le premier niveau correspond aux données brutes envoyées par l'appareil physique : il s'agit simplement du compteur, pour chaque bouton, du nombre de fois qu'il a été pressé depuis la réinitialisation de l'appareil.

RECTYPE : io.microshare.feedback.unpacked

Voici à quoi cela ressemble :

```
{
  "_warning_": "This data is not real data and is provided solely for demo purposes.",
  "pushes_since_reset": [
      {
          "context_id": "Button #1, Upper Left",
          "value": 237
      },
      {
          "context_id": "Button #2, Upper Right",
          "value": 27
      },
      {
          "context_id": "Button #3, Lower Left",
          "value": 93
      },
      {
          "context_id": "Button #4, Lower Right",
          "value": 47
      },
      {
          "context_id": "Button #5, Middle",
          "value": 781
      }
  ],
  "swipe": [
      {
          "value": false
      }
  ]
  "meta": {
      "backboard": "5ea0488146e0fb002a074145",
      "device": [
        "Building 1",
        "1st Floor",
        "Men-West",
        "Men"
      ],
      "global": [
        "Europe",
        "United Kingdom",
        "London"
      ],
      "iot": {
          "bw": 125,
          "channel": 1,
          "device_id": "70-B3-D5-32-6B-00-08-8E",
          "fcnt_dwn": 0,
          "fcnt_up": 2,
          "fport": 2,
          "freq": 902.5,
          "iso_time": "2023-11-05T01:25:25.673Z",
          "ns_version": "v3.0",
          "payload": "0200ed001b030d005d002f",
          "payload_fmt": 1,
          "rssi": -76,
          "sf": 10,
          "snr": 10.2,
          "time": "2023-11-05T01:25:25.673Z",
          "type": "uplink"
      },
      "source": [],
      "usecase": "SF01"
  },
}
```

Ces données ne sont pas très utiles en elles-mêmes : il faut toujours deux enregistrements pour comprendre ce qui s'est passé, c'est-à-dire quel est le véritable événement.



## 2) Données d'événement


Nous transformons donc les données précédentes en un événement, avec pour objectif que chaque nouvelle donnée indique simplement quel bouton a été pressé !

RECTYPE : io.microshare.feedback.unpacked.event

Voici ce que nous obtenons :

```
{
          "change": 1,
          "current": {
            "sum": 781
          },
          "event": "Button #5, Middle",
          "history": {
            "sum": 780
          },
          "meta": {
            "device": [
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "global": [
              "Europe",
              "United Kingdom",
              "London"
            ],
            "iot": {
                "bw": 125,
                "channel": 1,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 2,
                "fport": 2,
                "freq": 902.5,
                "iso_time": "2023-11-05T01:25:25.673Z",
                "ns_version": "v3.0",
                "payload": "0200ed001b030d005d002f",
                "payload_fmt": 1,
                "rssi": -76,
                "sf": 10,
                "snr": 10.2,
                "time": "2023-11-05T01:25:25.673Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SF01"
          },
          "time": "2023-11-05T01:25:25.673Z"
        }
```

Nous savons maintenant quel bouton a été pressé, mais nous voulons en savoir plus sur cette donnée, sans avoir à retourner sur l'appareil pour vérifier ce que signifie le bouton 5.


## 3) Données d'événement métier


Nous savons ce que signifient les boutons 5, 1, 2, 3, etc., nous enrichissons donc les données avec les métadonnées de l'événement métier correspondant : s'il s'agit du personnel ou d'une demande, et quel est le libellé affiché sur le panneau sur site.

RECTYPE : io.microshare.feedback.unpacked.event.meta

```
{
    "button": "Button #5, Middle",
    "change": 1,
    "current": {
        "sum": 781
    },
    "event": "good",
    "history": {
        "sum": 780
    },
    "label": "Great job",
    "meta": {
      "device": [
        "Building 1",
        "1st Floor",
        "Men-West",
        "Men"
      ],
      "global": [
        "Europe",
        "United Kingdom",
        "London"
      ],
      "iot": {
          "bw": 125,
          "channel": 1,
          "device_id": "70-B3-D5-32-6B-00-08-8E",
          "fcnt_dwn": 0,
          "fcnt_up": 2,
          "fport": 2,
          "freq": 902.5,
          "iso_time": "2023-11-05T01:25:25.673Z",
          "ns_version": "v3.0",
          "payload": "0200ed001b030d005d002f",
          "payload_fmt": 1,
          "rssi": -76,
          "sf": 10,
          "snr": 10.2,
          "time": "2023-11-05T01:25:25.673Z",
          "type": "uplink"
      },
      "source": [],
      "usecase": "SF01"
    },
}
```

Ce sont les données que nous utiliserons : elles nécessitent deux transformations à partir de la génération par l'appareil. En revanche, avec l'application touchfree Microshare, les données d'événement métier sont générées directement.

Voici quelques explications sur les champs :



- `button` : indique quel bouton a été pressé

- `current` : représente le nombre de fois que ce bouton a été pressé depuis la réinitialisation à l'instant présent, tandis que `history` représente l'état juste avant

- `change` : représente la différence entre l'historique et l'état actuel.

- `event` : représente l'identifiant du nom de l'événement métier ; ici c'est `good`, mais cela peut être (`clean`, `staff`, `leak`, etc.)

- `label` : représente ce sur quoi les utilisateurs ont cliqué (le libellé affiché dans l'interface)

- `meta.device` : l'emplacement de l'appareil dans le bâtiment (bâtiment, étage, nom de la pièce) ; nous pouvons ajouter 4 tags pour une précision accrue

- `meta.global` : emplacement global du bâtiment + étiquetage du cas d'usage. (l'étiquetage global devrait plutôt ressembler à `Continent`, `Country`, `City`, `SiteName`, etc.)

- `iot` : {
            `device_id` : `70-B3-D5-32-6B-00-08-8E`, quel appareil il s'agit
            `iso_time` : `2023-11-05T01:25:25.673Z`, et quand le bouton a été pressé
            `time` : `2023-11-05T01:25:25.673Z`
        }


## 5. Foire aux questions
---------------------------------------
<br>
**Question :** Quelle est la liste des noms d'événements possibles ?

<br>
**Réponse :** Les noms d'événements sont configurables ; selon les besoins, ils peuvent varier, et le libellé suivra. La combinaison la plus courante, comme on le voit sur notre compte de démonstration, est orientée nettoyage prédictif pour les sanitaires :

- `good` ("label": "Great job")

- `clean` ("label": "Please clean")

- `soap` ("label": "Low soap")

- `paper` ("label": "No paper")

- `leak` ("label": "Leak or water")

- `staff` ("label": "Staff arrival") ne peut être généré que par le personnel de nettoyage à l'aide d'un aimant
<br>


<br>
**Une question sans réponse ici ? Contactez `support@microshare.io` pour obtenir de l'aide.**
