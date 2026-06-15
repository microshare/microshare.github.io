---
layout: docs
title: Passerelles LoRaWAN
description: Les passerelles dans les solutions Microshare™
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-gateways.md
translations:
  en: /docs/2/technical/lorawan/lorawan-gateways
  fr: /docs/2/fr/technical/lorawan/lorawan-gateways
toc: true
---





{% include image.html url="/assets/img/thumbnail-3.jpg" description="LoRaWan Technology" %}

<br>

---------------------------------------

##### SOMMAIRE :

1. [Introduction](./#1-introduction)
2. [Avec quelles passerelles Microshare travaille-t-il ?](#2-avec-quelles-passerelles-microshare-travaille-t-il)


---------------------------------------
### 1. Introduction
---------------------------------------
{% include image.html url="/assets/img/LoRaWan/LoRaWan06.png" description="LoRaWan Technology" %}

Comme illustré ci-dessus, les passerelles servent de pont entre vos appareils et le serveur réseau, en utilisant des réseaux à bande passante comme le WiFi, l'Ethernet ou le signal cellulaire pour communiquer. Les passerelles LoRaWAN® peuvent recevoir des paquets LoRa de votre appareil, tandis que les passerelles classiques s'appuient sur le WiFi ou la technologie cellulaire (3G, 4G, 5G, etc.).

Les passerelles fonctionnent sur un système d'exploitation tel que Kerlink IoT Station, qui interprète les paquets de votre appareil en arrière-plan. L'administrateur de la passerelle utilise ce système d'exploitation pour gérer sa passerelle.

Pour plus d'informations sur les passerelles, consultez [le site The Things Network](https://www.thethingsnetwork.org/docs/gateways/).



### 2. Avec quelles passerelles Microshare travaille-t-il ?
---------------------------------------
<!--Need to complete this list-->
#### Kerlink Indoor iFemtocell et Indoor iFemtocell Evo

{% include image.html url="\assets\img\LoRaWAN Device pictures\iFemtocell_Evo.png" height="350" width="350" description="iFemtocell" %}

image de [Kerlink](https://www.kerlink.com/product/wirnet-ifemtocell-evolution/)

Le Kerlink iFemtocell et le Kerlink iFemtocell Evolution reçoivent les transmissions radio des appareils IoT Microshare à l'intérieur et autour de votre bâtiment, et utilisent une connexion cellulaire/mobile intégrée pour envoyer les données en toute sécurité vers le Microshare Smart Network. Le Kerlink iFemtocell est le plus souvent associé à des appareils qui surveillent l'activité intérieure pour des solutions telles que :

- Contact Tracing
- Predictive Cleaning
- Desk/ Room Occupancy
- Indoor Air Quality Monitoring
- Environment Monitoring
- Brightness Monitoring
- Activity Level Monitoring
- Asset Zoning
- Leak Detection
- Door/ Window monitoring
- Smart Smoke Detection
- Fridge Monitoring
- Feedback or Timecard Stations

### Comment installer mon Kerlink iFemtocell ?
Notre page d'installation propose un excellent tutoriel pour l'[iFemtocell](/docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell) et l'[iFemtocell EVO](/docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell-evo/) !

#### Kerlink Outdoor iStation


{% include image.html url="\assets\img\LoRaWAN Device pictures\iStation.png" height="300" width="300" description="iStation" %}

image de [Kerlink](https://www.kerlink.com/product/wirnet-istation/)

Le Kerlink iStation est une passerelle LoRaWAN® outdoor de qualité opérateur qui reçoit les transmissions radio des appareils IoT Microshare à l'intérieur et autour de votre bâtiment ou campus. Il utilise une connexion cellulaire/mobile intégrée pour envoyer les données en toute sécurité vers le Microshare Smart Network. Il est entièrement étanche et conçu pour une installation extérieure, mais peut dans certains cas être installé en intérieur. Le Kerlink iStation est le plus souvent associé à des appareils qui surveillent l'activité extérieure pour des solutions telles que :

- Outdoor Temperature Monitoring
- Leak detection
- Smart Waste Detection
- Smart Parking Monitoring
- Smart Legionella Prevention

### Comment installer mon Kerlink iFemtocell ?
Notre page d'installation propose un excellent tutoriel pour l'[iFemtocell](/docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell) et l'[iFemtocell EVO](/docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell-evo/) !



### 3. Plus d'informations sur les passerelles
---------------------------------------
Les passerelles LoRaWAN® utilisées par Microshare relèvent de la passerelle de classe A, où la passerelle ne peut pas initier la communication avec votre appareil. La passerelle ne peut communiquer que pendant une brève fenêtre de temps avec votre appareil si celui-ci le demande. Cela renforce la sécurité et l'efficacité énergétique de vos appareils.


 



