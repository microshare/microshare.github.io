---
layout: docs
title: Événement rongeur
description: Découvrez la structure des données d'événement rongeur Microshare™
lang: fr
translation_of: docs/2/technical/data-format/rodent-event.md
translations:
  en: /docs/2/technical/data-format/rodent-event
  fr: /docs/2/fr/technical/data-format/rodent-event
toc: true
---





{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## Introduction
---------------------------------------

Cette page fournit une vue d'ensemble de la structure des données pour un événement de détection de mouvement, spécifiquement pour une détection de rongeur dans un piège. Les données sont présentées au format JSON et contiennent des informations sur l'appareil, l'événement et les métadonnées associées.


## 2. Champs de données
---------------------------------------


### Champs principaux : informations sur le type d'événement détecté par l'appareil

**solution :** Nom de la solution chez Microshare (chaîne). La solution ici est Eversmart Alert, donc le nom est « alert »

**alert :** Le type d'alerte auquel ces données sont liées (chaîne). « rodent » pour les cas d'usage rongeur.

**event :** Le type d'événement détecté par l'appareil (chaîne).

**change :** Combien de comptages d'événements nous obtenons (entier).

**time :** Heure ISO de l'événement (chaîne).


### Device : informations sur l'appareil physique

**battery :** Contient des informations sur la batterie de l'appareil.

**power :** Le niveau de charge actuel de la batterie en pourcentage (entier).

**power_label :** Le niveau de charge actuel de la batterie sous forme de chaîne avec le symbole %.

**voltage :** La tension actuelle de la batterie (float).

**voltage_label :** La tension actuelle de la batterie sous forme de chaîne avec l'unité de tension (V).

**count :** Le nombre d'événements détectés par l'appareil (entier).

**id :** L'identifiant unique de l'appareil (chaîne).


### Meta : informations de localisation et réseau

**device :** Un tableau contenant des informations sur l'emplacement de l'appareil.

**global :** Un tableau contenant des informations relatives au cluster d'appareils contenant l'appareil.

**iot :** Contient des informations sur la communication IoT et le réseau.

**bw :** La bande passante utilisée par l'appareil (entier).

**channel :** Le canal de communication utilisé par l'appareil (entier).

**device_id :** L'identifiant unique de l'appareil (chaîne).

**fcnt_dwn :** Le compteur de trames downlink (entier).

**fcnt_up :** Le compteur de trames uplink (entier).

**fport :** Le port de communication de l'appareil (entier).


## 3. Exemple
---------------------------------------


{% highlight javascript %}
{
    "alert": "rodent",
    "change": 1,
    "current": {
      "sum": 1
    },
    "device": {
      "battery": {
        "power": 0,
        "power_label": "0%",
        "voltage": 3.6,
        "voltage_label": "3.6V"
      },
      "count": 5740,
      "id": "E8-E1-E1-00-01-AA-AA-AA"
    },
    "event": "rodent_present",
    "history": {
      "sum": 1
    },
    "label": "Rodent Detected: Work Shop",
    "meta": {
      "device": [
        "Mall",
        "Building A",
        "Bakery",
        "Kitchen",
        ""
      ],
      "global": [
        "Europe",
        "London",
        "Paddington",
        "trap"
      ],
      "iot": {
        "bw": 125,
        "channel": 1,
        "device_id": "E8-E1-E1-00-01-AA-AA-AA",
        "fcnt_dwn": 1385,
        "fcnt_up": 13457,
        "fport": 102,
        "freq": 867.3,
        "iso_time": "2023-10-17T10:15:17.952Z",
        "ns_version": "v3.0",
        "payload": "010b3102006c1600",
        "payload_fmt": 1,
        "rssi": -113,
        "sf": 10,
        "snr": -2.2,
        "time": "2023-10-17T10:15:17.952Z",
        "type": "uplink"
      },
      "source": [],
      "usecase": "SC05"
     },
    "solution": "alert",
    "time": "2023-10-17T10:15:17.952Z"
  }
{% endhighlight %}
