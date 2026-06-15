---
layout: docs
title: Appareils LoRaWAN
description: Les appareils dans les solutions Microshare™
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-devices.md
translations:
  en: /docs/2/technical/lorawan/lorawan-devices
  fr: /docs/2/fr/technical/lorawan/lorawan-devices
toc: true
---





{% include image.html url="/assets/img/thumbnail-4.jpg" description="LoRaWan Technology" %}

<br>

---------------------------------------

##### SOMMAIRE :

1. [Introduction](./#1-introduction)
2. [Types d'appareils](./#2-types of devices)
3. [Appareils utilisés par Microshare](./#3-devices-microshare-uses)
- A. [Appareils Browan](./#a-browan-devices)
- B. [Kerlink Wave](./#b-kerlink-wave)
- C. [Appareils de retour Skiply Smilio Action](./#c-skiply-smilio-action-feedback-devices)
- D. [Appareils Adeunis Temp 3](./#d-adeunis-temp-3)
- E. [Appareils SmartEnds](./#e-smartends-brighterbins-smart-waste-devices)
4. [Ressources externes](./#4-external-resources)

---------------------------------------


## 1. Introduction
---------------------------------------
Les solutions Smart Facilities de Microshare sont alimentées par des appareils qui transmettent rapidement et efficacement les données vers votre tableau de bord. Du nettoyage prédictif à la surveillance environnementale, Microshare offre d'innombrables possibilités de synchroniser vos données et vous-même.

Les appareils LoRaWAN offrent une solution plus efficace pour communiquer des données que le cellulaire ou le WiFi. En envoyant des informations via LoRa, la portée de communication s'étend à des centaines de kilomètres carrés. L'efficacité énergétique des appareils LoRa dépasse largement celle de leurs homologues WiFi ou cellulaires, offrant une autonomie de batterie pouvant atteindre cinq ans.

Microshare configure votre solution avant qu'elle n'arrive à votre porte, pour une expérience plug-and-play. Voici les types d'appareils que vous apprendrez à connaître en travaillant avec Microshare.


Vous avez d'autres questions sur les solutions Microshare ? Consultez notre [page principale](https://www.microshare.io/smart-facilities-dashboards-and-solutions/).

## 2. Types d'appareils
---------------------------------------

### A. Appareils de mouvement

Les appareils de mouvement ont une variété d'applications dans votre environnement. Ils ont été utilisés pour fournir des solutions d'occupation de bureau, d'occupation de salle, de stationnement intelligent, de nettoyage prédictif et de surveillance du niveau d'activité.

### B. Appareils de température et d'humidité

Microshare travaille avec des appareils spécifiques intérieurs et extérieurs qui surveillent les changements environnementaux de divers emplacements. Les appareils de température et d'humidité sont appliqués dans la surveillance de la qualité de l'air intérieur, la surveillance environnementale, la surveillance des réfrigérateurs et les solutions de prévention de la légionellose.

### C. Appareils de retour

Les appareils de retour vous permettent de collecter des réponses en temps réel de votre public cible, et sont utilisés dans les stations de retour et les solutions de pointage intelligent.

### D. Fuite d'eau

La solution de fuite d'eau détecte et alerte les gestionnaires d'installations d'un problème potentiel majeur. À l'aide d'une petite sonde, les appareils peuvent être placés de manière pratique dans les zones à risque.

### E. Lumière ambiante

L'appareil de lumière ambiante vous permet de surveiller l'intensité lumineuse dans diverses pièces de votre installation et est appliqué dans les solutions de luminosité et de surveillance environnementale.

### F. Gestion des déchets

L'appareil de gestion des déchets détecte et prédit le débordement d'une poubelle, améliorant la propreté des installations et la prévisibilité des tournées de collecte.

## 3. Appareils utilisés par Microshare
---------------------------------------

Microshare travaille avec divers modèles d'appareils LoRaWAN pour offrir une plateforme polyvalente de collecte et de gestion de données.

### A. Appareils Browan

Microshare utilise les appareils Browan pour les solutions de surveillance intérieure.

#### Appareils de mouvement Tabs

Numéro de modèle US : TBMS100-915
Numéro de modèle EU : TBMS100-868

Le capteur de mouvement Tabs utilise un détecteur infrarouge passif et une lentille de Fresnel pour détecter et communiquer la présence d'une personne dans une pièce.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Tabs_MS.png" height="300" width="300" description="Tabs Motion Sensor" %}

Pour plus d'informations sur les spécifications du capteur de mouvement Tabs et un exemple de code de décodage pour l'appareil, consultez le [document TBMS100](/assets/pdf/TBMS100.pdf).

#### Appareils de température et d'humidité Tabs

Numéro de modèle US : TMHV110-915
Numéro de modèle EU : TMHV110-868

Le capteur de température et d'humidité Tabs mesure la température intérieure, l'humidité relative et la qualité de l'air de votre bâtiment.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Tabs_TH.png" height="300" width="300" description="Tabs Temp/Humid" %}

Pour plus d'informations sur les spécifications de l'appareil de température et d'humidité Tabs et un exemple de code de décodage pour l'appareil, consultez le [document TBHV100](/assets/pdf/TBHV100.pdf) ou le [document TBHV110](/assets/pdf/TBHV110.pdf).

#### Appareils porte et fenêtre Tabs

Numéro de modèle US : TMDW100-915
Numéro de modèle EU : TMDW100-868

Les appareils porte et fenêtre Tabs détectent la proximité d'un aimant placé sur l'élément mobile d'une porte ou d'une fenêtre à l'aide d'un capteur à effet Hall.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Tabs_DW.png" height="300" width="300" description="Tabs Door/Window Sensor" %}

Pour plus d'informations sur les spécifications de l'appareil porte et fenêtre Tabs et un exemple de code de décodage pour l'appareil, consultez le [document TBDW100](/assets/pdf/TBDW100.pdf).

#### Appareil de fuite d'eau Tabs

Numéro de modèle US : TBWT100-915
Numéro de modèle EU : TBWT100-868

L'appareil de fuite d'eau Tabs utilise une sonde pour détecter les gouttelettes d'eau.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Tabs_L.png" height="300" width="300" description="Tabs Leak Sensor" %}

Pour plus d'informations sur les spécifications de l'appareil de fuite d'eau Tabs et un exemple de code de décodage pour l'appareil, consultez le [document TBDW100](/assets/pdf/TBDW100.pdf).

#### Appareil de lumière ambiante Tabs

Numéro de modèle US : TBAM100-915
Numéro de modèle EU : TBAM100-868

L'appareil de lumière ambiante Tabs mesure l'intensité de la lumière ambiante dans le contexte de l'œil humain dans divers scénarios d'éclairage.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Tabs_AL.png" height="250" width="250" description="Tabs Light Sensor" %}

Pour plus d'informations sur les spécifications de l'appareil de lumière ambiante et un exemple de code de décodage pour l'appareil, consultez le [document TBAM100](/assets/pdf/TBAM100.pdf).

### B. Kerlink

Bien que les produits Kerlink soient principalement utilisés comme [passerelles LoRaWAN](/docs/2/fr/technical/lorawan/lorawan-gateways) pour que vos appareils communiquent avec la plateforme Microshare, le Kerlink Wave sert d'ancre entre votre appareil LoRaWAN en utilisant le WiFi et le BLE pour sécuriser et évaluer davantage votre solution IoT.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Kerlink_Wave.png" height="250" width="250" description="Kerlink" %}

image du [site web Kerlink](https://www.kerlink.com/product/wanesy-wave/)



### C. Appareil de retour Skiply Smilio Action Microshare 5 boutons

Numéro de modèle US : SKPF000185
Numéro de modèle EU : SKPF000184

La version Microshare de l'appareil de retour Smilio A offre cinq options pour enregistrer les retours de votre public cible. L'appareil envoie les données vers la plateforme Microshare où elles sont représentées sur votre tableau de bord.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Smilio.png" height="250" width="250" description="Smilio Feedback Sensor" %}

Pour plus d'informations sur les spécifications du Skiply Smilio Action et un exemple de code de décodage pour l'appareil, consultez le [document Smilio Action](/assets/pdf/SKPF00018.pdf).

### D. Adeunis Temp 3

Numéro de modèle US : ARF8170RA
Numéro de modèle EU : ARF8180BA

L'Adeunis Temp 3 est un capteur de température à 1 sonde qui mesure et surveille la température pour fournir des alertes en cas de dépassement de seuils, identifier les pertes de température et enregistrer les changements. Le Temp 3 a des applications sur divers terrains, des routes pour optimiser les opérations de service hivernal, aux bâtiments ou à la surveillance des changements dans les piscines.

{% include image.html url="\assets\img\LoRaWAN Device pictures\Temp3.webp" height="250" width="250" description="Temp 3 Sensor" %}

Pour plus d'informations sur les spécifications de l'Adeunis Temp 3 et un exemple de code de décodage pour l'appareil, consultez le [document Temp 3](/assets/pdf/Temp-3.pdf).

### E. Appareils SmartEnds BrighterBins pour déchets intelligents

L'appareil BrighterBin détecte lorsqu'une poubelle déborde et alerte pour la collecte des déchets commerciaux. La mise en œuvre de l'appareil BrighterBin rendra les tournées de nettoyage plus efficaces et prévisibles.

{% include image.html url="\assets\img\LoRaWAN Device pictures\BrighterBins.webp"  description="Brighter Bins" %}

image de [Smart Ends](https://www.smartends.com/single-post/2019/05/09/A-new-IoT-sensor-device-for-a-growing-market-of-8-million-public-waste-bins)

Pour plus d'informations sur les spécifications du SmartEnds Brighterbin et un exemple de code de décodage pour l'appareil, consultez le [document Brighterbins](/assets/pdf/brighterbins.pdf).

## 4. Ressources supplémentaires
---------------------------------------

### Environnement de développement interactif
* [Arduino IDE](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/arduino_ide)
* [System Workbench ST32](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/system-workbench-st32-ide)

### Tutoriels sur les appareils
* [SODAQ ExpLoRer](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/sodaq_explorer)
* [Kit de découverte ST B-L072Z-LRWAN1 LoRa](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/st-b-1072z-lrwan1-discovery-kit)

### Tutoriels sur les plateformes
* [Streamer des paquets IoT de Senet vers Microshare](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/senet-tutorial)
* [Streamer des paquets IoT de The Things Network (TTN) vers Microshare](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/tts_tutorial)
* [Configurer le routage depuis le SPN de la passerelle Kerlink vers Microshare](/docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/kerlink-tutorial)


 