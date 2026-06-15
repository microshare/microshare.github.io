---
layout: docs
title: Kerlink iFemtocell
description: Comment la configurer ?
lang: fr
translation_of: docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell.md
translations:
  en: /docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell
  fr: /docs/2/fr/installer/lorawan/gateway-installations/indoor-ifemtocell
toc: true
---

## Configuration de la Kerlink iFemtocell
---------------------------------------

La Kerlink iFemtocell reçoit les transmissions radio des appareils IoT Microshare dans et autour de votre bâtiment et utilise une connexion Ethernet ou cellulaire/mobile intégrée pour envoyer les données en toute sécurité vers le Microshare Smart Network.
Assurez-vous que l'emplacement physique d'installation choisi permettra un bon signal cellulaire et qu'il est central par rapport aux appareils IoT que vous utiliserez dans votre établissement. Contactez Microshare si vous avez des doutes sur le meilleur emplacement pour installer la passerelle. Un mauvais placement entraînera de mauvaises performances du système global.

{% include image.html width=400 url="/assets/img/ifemtocell/femto-usb-step1-800x800.jpg" description="LoRaWan Technology" %}

Microshare livre les Kerlink iFemtocell préconfigurées et, si nécessaire, avec une clé USB 4G déjà activée.
Tout ce que vous avez à faire pour que votre réseau LoRaWAN soit opérationnel est de :
<br>
**1.** Réassembler les pièces
<br>
**2.** Brancher sur une source d'alimentation secteur et attendre que la connexion soit établie

Les passerelles intérieures sont alimentées par une alimentation AC/DC 12 V CC avec une prise 5,5 mm x 2,5 mm.
Les Kerlink Waves sont alimentées par une alimentation Micro-USB 5 V standard. La source d'alimentation doit avoir une tension comprise entre 4,75 V CC et 5,25 V CC, et un courant compris entre 1 A et 3 A.

### Contenu de la boîte :
---------------------------------------

{% include image.html width=400 url="/assets/img/ifemtocell/femto-usb-step2-800x800.jpg" description="LoRaWan Technology" %}

<br> 1x passerelle LoRaWAN™ carrier-grade Kerlink iFemtocell
<br> 1x antenne Kerlink à gain élevé
<br> 1x adaptateur secteur (spécifique à la région)
<br> [En option] 1x clé USB 4G


### Réassemblage
---------------------------------------

{% include image.html width=400 url="/assets/img/ifemtocell/femto-usb-step3-800x800.jpg" description="LoRaWan Technology" %}


###### Étape 1

Vissez l'antenne sur le connecteur doré situé sur le côté droit de l'iFemtocell

---------------------------------------

{% include image.html width=400 url="/assets/img/ifemtocell/femto-usb-step4-800x800.jpg" description="LoRaWan Technology" %}

###### Étape 2

<br> **Si vous utilisez une clé 4G externe,** insérez la clé 4G dans le port USB de l'autre côté de l'iFemtocell. Vous devrez peut-être pousser doucement la clé pour qu'elle s'enfonce complètement.
<br> **Si vous utilisez l'Ethernet,** insérez un câble Ethernet standard avec connecteur RJ45 dans le port approprié sur le côté de l'iFemtocell.

---------------------------------------

{% include image.html width=400 url="/assets/img/ifemtocell/femto-usb-step5-800x800.jpg" description="LoRaWan Technology" %}


###### Étape 3
Branchez l'adaptateur secteur sur l'iFemtocell


### Mise sous tension
---------------------------------------

{% include image.html width=400 url="/assets/img/ifemtocell/femto-usb-step6-800x800.jpg" description="LoRaWan Technology" %}


###### Étape 4
* Branchez l'adaptateur secteur sur une prise murale.
* Après environ 2 à 3 minutes, les deux premiers voyants de l'iFemtocell devraient devenir verts fixes.


C'est terminé ! Veuillez envoyer un e-mail à `support@microshare.io` pour indiquer que la passerelle est opérationnelle afin que nous puissions le confirmer de notre côté.


### La passerelle apparaît hors ligne — dépannage
---------------------------------------

1) Vérifiez que l'appareil est toujours installé à l'emplacement prévu

2) Y a-t-il deux voyants verts fixes sur la passerelle ?
* S'il n'y a pas de voyants, vérifiez que la passerelle est toujours connectée au secteur via le câble fourni.
* S'il y a un voyant vert fixe et un autre clignotant en vert ou fixe en rouge, cela signifie que l'appareil n'est pas connecté au réseau.
     <br> -Si vous utilisez la connectivité cellulaire, vérifiez que la carte SIM est correctement insérée (elle se trouve au bas de l'appareil)
     <br> -Si vous utilisez l'Ethernet, vérifiez que le câble Ethernet est connecté à la fois à la passerelle et au routeur
* S'il n'y a pas de voyants, vérifiez que la passerelle est toujours connectée au secteur via le câble fourni.

3) Vous saurez que le problème est résolu lorsqu'il y a deux voyants verts fixes sur l'appareil

4) Si vous rencontrez toujours des problèmes — veuillez contacter notre équipe d'assistance 24h/24 à `support@microshare.io`



