---
layout: docs
title: Données compteur de personnes
description: Les étapes des données pour l'appareil IMBuildings People Counter
lang: fr
translation_of: docs/2/technical/data-format/people-counter.md
translations:
  en: /docs/2/technical/data-format/people-counter
  fr: /docs/2/fr/technical/data-format/people-counter
toc: true
---




#### Sommaire :
1. [Vue d'ensemble](./#1-vue-densemble)
2. [Données décompressées](./#2-donnees-decompressees)
3. [Données au niveau de la porte](./#3-donnees-au-niveau-de-la-porte)
4. [Données au niveau de la pièce](./#4-donnees-au-niveau-de-la-piece)


## 1. Vue d'ensemble
---------------------------------------


Le compteur de personnes IMBuildings mesure le nombre de personnes passant entre ses deux composants. Cet appareil est le plus souvent installé au-dessus d'une porte ou d'un passage et peut être utilisé pour compter les personnes entrant et sortant d'une pièce.

---------------------------------------

## 1) Données décompressées

La première étape correspond aux données télématiques envoyées par l'appareil physique. Au-delà des métadonnées standard qui accompagnent chaque enregistrement télématique produit par Microshare (telles que les informations de jumelage dans meta.device et meta.global, etc.), les données spécifiques à l'appareil incluent :
- **count_since_transmit** - un décompte du nombre de personnes ayant traversé le compteur de personnes *dans chaque direction* depuis la dernière transmission
- **count_since_reset** - le nombre de personnes ayant traversé le compteur de personnes *dans chaque direction* depuis la dernière réinitialisation de l'appareil. 
- **device.fault** et **device.alert** - les défaillances et/ou alertes signalées par l'appareil
- la tension de la batterie de l'appareil


RECTYPE : io.microshare.peoplecounter.unpacked

Exemple de données :

```
{
  "_warning_": "This data is not real data and is provided solely for demo purposes.",
  "data": {
      "count_since_reset": [
      {
        "context_id": "A",
        "value": 459
      },
      {
        "context_id": "B",
        "value": 453
      }
    ],
    "count_since_transmit": [
      {
        "context_id": "A",
        "value": 0
      },
      {
        "context_id": "B",
        "value": 0
      }
    ],
    "device_health": {
      "alert": [
        {
          "subtype": "reconnect",
          "value": false
        },
        {
          "subtype": "settings_changed",
          "value": false
        },
        {
          "subtype": "placed_battery_not_full",
          "value": false
        },
        {
          "subtype": "low_battery",
          "value": false
        }
      ],
      "fault": [
        {
          "subtype": "infrared_signal_not_at_full_strength",
          "value": false
        },
        {
          "subtype": "disturbance",
          "value": false
        },
        {
          "subtype": "infrared_blocked",
          "value": false
        }
      ],
      "id": "00-04-A3-0B-00-F7-E8-19",
      "voltage": [
        {
          "unit": "V",
          "value": 2.9
        }
      ]
    },
    "meta": {
      "device": [
        "Building A",
        "4th Floor",
        "Room 71",
        "Doorway A"
      ],
      "global": [
        "Microshare",
        "demo",
        "solutions",
        "people"
      ],
      "reset_hour": 0,
      "timezone": "Europe/London"
    }
}

```

À ce stade des données, nous ne savons pas quelle direction correspond à quoi, c'est-à-dire que nous ne savons pas si le premier élément (context_id : A) compte les personnes entrant dans la pièce ou en sortant.  


## 2) Données au niveau de la porte

À cette étape, nous attribuons une direction aux données et comptons combien de personnes sont *entrées* et combien sont *sorties*. Nous suivons également les totaux quotidiens du nombre de personnes entrées ou sorties par cette porte *aujourd'hui* afin de produire une estimation du nombre de personnes pouvant se trouver dans une pièce *en ce moment* (du moins selon cette seule porte). L'utilisation du total quotidien pour estimer le nombre actuel de personnes dans la pièce permet de limiter la « dérive » des données, car toute imprécision survenue au cours d'une journée ne se reporte pas sur la journée suivante.

Notez que les totaux quotidiens sont réinitialisés à une heure de réinitialisation configurable, par défaut à minuit heure locale.

Les données au niveau de la porte incluent :
- change
	- **in** - combien de personnes ont été comptées comme entrant par la porte depuis le dernier rapport
	- **out** - combien de personnes ont été comptées comme sortant par la porte depuis le dernier rapport
	- **traffic** - la somme de *in* et *out* depuis le dernier rapport
	- **count** - la différence entre *in* et *out* - combien de personnes de plus sont entrées dans l'espace par cette porte qu'elles n'en sont sorties depuis le dernier rapport
	- **alerts** - combien d'alertes l'appareil a signalées dans cette charge utile
	- **faults** - combien de défaillances l'appareil a signalées dans cette charge utile
- daily_total
	- **in** - combien de personnes ont été comptées comme entrant par la porte *aujourd'hui* 
	- **out** - combien de personnes ont été comptées comme sortant par la porte *aujourd'hui*  
	- **traffic** - la somme de *in* et *out*   
	- **count** - la différence entre *in* et *out* - combien de personnes de plus sont entrées dans l'espace par cette porte qu'elles n'en sont sorties *aujourd'hui*
	- **alerts** - combien d'alertes l'appareil a signalées *aujourd'hui* 
	- **faults** - combien de défaillances l'appareil a signalées *aujourd'hui* 
- device
	- **fault** - les défaillances spécifiques signalées par l'appareil dans cette charge utile
	- **alert** - les alertes spécifiques signalées par l'appareil dans cette charge utile
	- **voltage** - tension de la batterie de l'appareil


RECTYPE : io.microshare.peoplecounter.unpacked.event

Exemple de données :

```
{
  "_warning_": "This data is not real data and is provided solely for demo purposes.",
  "change": {
		"alerts": 0,
		"count": 0,
		"faults": 0,
		"in": 0,
		"missing_records": 0,
		"out": 0,
		"source_record": "63ebd48af0849a56c66c7e3d",
		"traffic": 0
  },
  "daily_total": {
		"alerts": 0,
    "count": 10,
    "date": "2023-02-14",
    "day_of_the_week": 2,
		"faults": 0,
    "hour": 13,
    "in": 38,
    "missing_records": 2,
    "out": 28,
    "raw_count": 10,
    "reset_time": "2023-02-14T00:00:00.000Z",
    "start_of_total": false,
    "timezone": "Europe/London",
    "traffic": 66
  },
  "event": "people_counter",
  "meta": {
    "device": [
      "Building A",
      "4th Floor",
      "Room 71",
      "Doorway A"
    ],
    "global": [
      "Microshare",
      "demo",
      "solutions",
      "people"
    ],
    "reset_hour": 0,
    "timezone": "Europe/London"
  },
  "time": "2023-02-14T13:46:34.381Z"
}
```

Nous avons maintenant une idée de l'affluence à cette porte. Si le site est entièrement composé de pièces à porte unique, ces données sont pleinement exploitables.


## 3) Données au niveau de la pièce

À cette étape, nous agrégeons les données de toutes les portes pour produire des données au niveau de la pièce. Par défaut, cela se fait en agrégeant la dernière lecture de chaque appareil qui était identique sur les trois premières balises de localisation. Si les balises sont identiques jusqu'au 3e niveau, elles sont traitées comme des portes de la même pièce. À ce stade du pipeline, la 4e balise est supprimée du format de données résultant, de sorte que { "meta": { "device": [ "Building A", "4th Floor", "Room 71", "Doorway A" ] } } devient { "meta": { "device": [ "Building A", "4th Floor", "Room 71" ] } }

Les données au niveau de la pièce incluent :
- change
	- **in** - combien de personnes ont été comptées comme entrant dans la pièce depuis le dernier rapport
	- **out** - combien de personnes ont été comptées comme sortant de la pièce depuis le dernier rapport
	- **traffic** - la somme de *in* et *out* depuis le dernier rapport
	- **count** - la différence entre *in* et *out* depuis le dernier rapport

- daily_total
	- **in** - combien de personnes ont été comptées comme entrant dans la pièce *aujourd'hui* 
	- **out** - combien de personnes ont été comptées comme sortant de la pièce *aujourd'hui*  
	- **traffic** - la somme de *in* et *out*   
	- **raw_count** - la différence entre *in* et *out* - combien de personnes « en trop » sont entrées dans cette pièce *aujourd'hui*
	- **count** - estimation du nombre de personnes actuellement présentes dans la pièce. Si raw_count est inférieur à zéro, count est fixé à zéro.
	- **percent_capacity** - count divisé par la capacité de la pièce (si configurée) donne le pourcentage de capacité
	- **alerts** - combien d'alertes les capteurs des portes de cette pièce ont signalées *aujourd'hui* 
	- **faults** - combien de défaillances les capteurs des portes de cette pièce ont signalées *aujourd'hui* 


RECTYPE : io.microshare.peoplecounter.unpacked.event.agg

```
{
	"change": {
		"count": 0,
		"elapsed": {
			"minutes": 15
		},
		"in": 0,
		"missing_records": 0,
		"num_devices": 1,
		"out": 0,
		"raw_count": 0,
		"traffic": 0
	},
	"daily_total": {
		"alerts": 0,
		"count": 10,
		"date": "2023-02-14",
		"day_of_the_week": 2,
		"faults": 0,
		"hour": 13,
		"in": 38,
		"missing_records": 2,
		"num_devices": 1,
		"out": 28,
		"percent_capacity": 20,
		"raw_count": 10,
		"reset_time": "2023-02-14T00:00:00.000Z",
		"timezone": "Europe/London",
		"traffic": 66
	},
	"event": "people_counter_aggregate",
	"meta": {
		"capacity": 50,
		"device": [
			"Building A",
			"4th Floor",
			"Room 71"
		],
		"global": [
			"Microshare",
			"demo",
			"solutions",
			"people"
		],
		"reset_hour": 0,
		"tag_depth": 3,
		"timezone": "Europe/London"
	}
}
```


## Défaillances
Si les compteurs sont mal installés ou déplacés, ils ne pourront pas mesurer le trafic. Dans ce cas, ils génèrent des défaillances qui apparaissent ensuite dans les champs fault des données. Utilisez les champs fault pour filtrer les mauvaises données et/ou réagir et corriger le problème.

## Imprécision

Il est important de noter qu'une certaine imprécision est attendue. Le suivi de l'interruption d'un faisceau infrarouge est utile pour détecter quand une personne traverse une porte. Mais d'autres éléments peuvent interrompre un faisceau infrarouge. Si quelqu'un se tient dans l'embrasure et bloque le faisceau pendant que d'autres passent, si deux personnes traversent en même temps, ou si quelqu'un gesticule ou pousse un chariot rempli d'objets — toutes ces situations peuvent entraîner des personnes non comptées et/ou un double comptage. Les deux valeurs entrées et sorties peuvent s'éloigner l'une de l'autre en raison de ces imprécisions attendues, et l'estimation du nombre de personnes à partir des entrées et des sorties devient alors de plus en plus inexacte. C'est pourquoi nous réinitialisons les compteurs quotidiens cumulés à l'heure de la journée où l'espace est le plus susceptible d'être vide.  

<br>

**Vous avez une question sans réponse ici ? Contactez `support@microshare.io` pour plus d'informations.**
