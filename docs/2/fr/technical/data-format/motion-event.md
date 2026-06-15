---
layout: docs
title: Événement de mouvement
description: Découvrez la structure des données d'événement de mouvement Microshare™
lang: fr
translation_of: docs/2/technical/data-format/motion-event.md
translations:
  en: /docs/2/technical/data-format/motion-event
  fr: /docs/2/fr/technical/data-format/motion-event
toc: true
---





{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## Introduction
---------------------------------------

Cette page fournit une vue d'ensemble de la structure des données pour un événement de capteur de mouvement. Ce capteur est spécifiquement utilisé pour surveiller le mouvement/trafic à travers une porte et l'occupation d'une pièce. Les données sont présentées au format JSON et contiennent des informations sur l'appareil, l'événement et les métadonnées associées.

Le `recType` peut être `io.microshare.motion.unpacked.event` ou `io.microshare.occupancy.unpacked.event`.

## 2. Champs de données
---------------------------------------

### Champs principaux : informations sur le type d'événement détecté par l'appareil

**elapsed.minutes :** Représente le temps écoulé entre l'événement précédent et l'actuel (entier).

**motion.value :** Représente le nombre de mouvements détectés entre l'événement précédent et l'actuel (entier).

**motion.hourly_rate :** À partir du temps écoulé et du nombre de mouvements détectés, nous calculons le taux horaire de cet événement (long).

**presence.change :** Informations sur la présence détectée par le capteur, indique si elle a changé (booléen).

**presence.state_time.false :** Durée pendant laquelle l'état « absence de présence » a duré (minutes — entier).

**presence.state_time.true :** Durée pendant laquelle l'état « présence » a duré (minutes — entier).

**presence.value :** L'état actuel de la présence. False indique qu'aucune présence n'est actuellement détectée (booléen).

**time :** L'horodatage de ces données d'événement (chaîne).

### Device : informations sur l'appareil physique

**connection_restart :** Indique si l'appareil a redémarré sa connexion. Ici, false signifie que l'appareil n'a pas redémarré (booléen).

**last_record :** L'horodatage du dernier enregistrement de l'appareil (chaîne).

**missing_records :** Indique le nombre d'enregistrements manquants. Ici, il n'y en a aucun (entier).

**id :** L'identifiant unique de l'appareil (chaîne).


### Meta : informations de localisation et réseau

**device :** Un tableau contenant des informations sur l'emplacement de l'appareil.

**global :** Un tableau contenant des informations relatives au cluster d'appareils contenant l'appareil.

**iot.time :** Contient l'heure à laquelle le capteur a capturé et envoyé l'événement.



## 3. Exemple
---------------------------------------


{% highlight javascript %}
{
    "device": {
      "connection_restart": false,
      "id": "E8-E1-E1-00-01-AA-AA-AA",
      "last_record": "2023-10-17T13:54:07.493Z",
      "missing_records": 0
    },
    "elapsed": {
      "minutes": 60
    },
    "meta": {
      "device": [
        "Building A",
        "1st Floor",
        "Room C",
        "Door 4",
        ""
      ],
      "global": [
        "traffic",
        "Europe", 
        "London",
        "motion"
      ],
      "iot": {
        "iso_time": "2023-10-17T14:54:08.004Z",
        "time": "2023-10-17T14:54:08.004Z"
      },
      "source": [],
      "usecase": "SC05"
    },
    "motion": {
      "hourly_rate": 0,
      "value": 0
    },
    "presence": {
      "change": false,
      "state_time": {
        "false": {
          "minutes": 60
        },
        "true": {
          "minutes": 0
        }
      },
      "value": false
    },
    "time": "2023-10-17T14:54:08.004Z"
  }
{% endhighlight %}
