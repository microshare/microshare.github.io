---
layout: docs
title: Vue d'ensemble installateur
description: Comment installer une solution Microshare™
lang: fr
translation_of: docs/2/installer/quick-start/overview.md
translations:
  en: /docs/2/installer/quick-start/overview
  fr: /docs/2/fr/installer/quick-start/overview
toc: true
redirect_from:
  - /docs/2/fr/installer/
---



{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

---------------------------------------
##### SOMMAIRE :

1. [Que faut-il installer ?](./#what-needs-to-be-installed)
2. [Prérequis](./#requirements)
3. [Étapes](./#steps)

---------------------------------------



## Que faut-il installer ?
---------------------------------------

La priorité principale du processus d'installation est de faire en sorte que les appareils du client collectent des données le plus rapidement possible. Avant l'installation, il est crucial de comprendre quoi et pourquoi vous installez en lisant la page suivante sur la technologie LoRaWan :

###### > [Technologie LoRaWan](../../../technical/lorawan/lorawan-technology)

En bref, les appareils LoRaWan envoient des données via un signal <em>Lora</em> vers la passerelle ou un réseau public. La passerelle ou le réseau public est connecté à Internet via WiFi, Ethernet ou 3G/4G/5G. Les données transitent ensuite par Internet vers le cloud où elles sont traitées et digérées pour le tableau de bord prévu.

Voici une représentation visuelle du processus :


{% include image.html url="/assets/img/lorawan-network.png" description="LoRaWan Network" %}

Image de [reasearchgate.net](https://www.researchgate.net/publication/323620460_IoT-based_wireless_seismic_quality_control/figures?lo=1)


Au cours du processus d'installation, il est crucial de confirmer que les capteurs et la ou les passerelle(s) sont correctement installés et transmettent des informations.



## Prérequis
---------------------------------------

Pour préparer une installation réussie, il est préférable de vérifier quelques points :

Avant l'installation, vous devez...

- avoir préparé la quantité nécessaire de capteurs et de passerelles.
- connaître à l'avance l'emplacement des capteurs et des passerelles.
- avoir téléchargé l'[application Deploy-M](../../deploy-m/download-the-app).
- avoir appris à utiliser [Deploy-M](../../deploy-m/app-guide).
- avoir préparé les [prérequis](../../deploy-m/app-guide/#1-requirements) pour utiliser Deploy-M.
- disposer de toutes les fixations nécessaires pour les capteurs et les passerelles (autocollants 3M, supports Tabs, autocollants Velcro...).
- disposer de tous les outils nécessaires à l'installation.

## Étapes
---------------------------------------

Pour configurer votre système, vous allez :

###### > 1. D'abord installer les [passerelles](../../lorawan/gateway-installation).

###### > 2. Installer les [appareils](../../lorawan/device-declaration).

###### > 3. Utiliser [Deploy-M](../../deploy-m/app-guide) pour une installation plus efficace.

###### > 4. Enfin, [valider](../../quick-start/validation-of-a-successfull-installation) que l'installation a réussi.

Si vous avez des questions, consultez notre page [FAQ sur les installations](../faq-about-installations).
