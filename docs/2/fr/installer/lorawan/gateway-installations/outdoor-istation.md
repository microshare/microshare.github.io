---
layout: docs
title: Kerlink iStation
description: Comment la configurer ?
lang: fr
translation_of: docs/2/installer/lorawan/gateway-installations/outdoor-istation.md
translations:
  en: /docs/2/installer/lorawan/gateway-installations/outdoor-istation
  fr: /docs/2/fr/installer/lorawan/gateway-installations/outdoor-istation
toc: true
---
## Planification de votre installation

{% include image.html width=800 url="/assets/img/outdoor-station/fresnel.jpg" description="LoRaWan Technology" %}

### Un dégagement recommandé de 1 à 1,5 mètre au-dessus de tous les obstacles pour l'antenne améliore le rayon de la zone de Fresnel, renforçant ainsi le signal radio.

---------------------------------------

## Configuration de la Kerlink iStation
---------------------------------------

La Kerlink iStation est une passerelle LoRaWAN® carrier-grade extérieure qui reçoit les transmissions radio des appareils IoT Microshare dans et autour de votre bâtiment ou campus. Elle utilise une connexion cellulaire/mobile intégrée pour envoyer les données en toute sécurité vers le Microshare Smart Network. Elle est entièrement étanche et conçue pour être installée à l'extérieur, mais peut dans certains cas être installée à l'intérieur.
Assurez-vous que l'emplacement physique d'installation choisi permettra un bon signal cellulaire et qu'il est central par rapport aux appareils IoT que vous utiliserez dans votre établissement. Contactez Microshare si vous avez des doutes sur le meilleur emplacement pour installer la passerelle. Un mauvais placement entraînera de mauvaises performances du système global.

### Ce qui est inclus

{% include image.html width=400 url="/assets/img/outdoor-station/iStation-included.png" description="LoRaWan Technology" %}

Microshare livre les Kerlink iStation préconfigurées, comprenant un injecteur PoE intérieur, une antenne extérieure et une carte SIM 4G dans la station.

Le PoE fourni peut différer de l'image et si vous disposez d'un réseau PoE, vous pouvez également alimenter la passerelle directement depuis votre propre réseau sans utiliser l'injecteur PoE fourni.

Des injecteurs PoE extérieurs sont disponibles sur demande moyennant un coût supplémentaire.

### Dans la boîte

{% include image.html width=400 url="/assets/img/outdoor-station/Box-contents.png" description="LoRaWan Technology" %}

La boîte de la passerelle contient les éléments suivants :

Presse-étoupe pour protéger le câble Ethernet provenant de l'injecteur PoE
un support à installer sur un poteau (recommandé) ou un mur
le câble de mise à la terre pour relier la passerelle à la terre
la passerelle elle-même


### Ce qui n'est pas inclus et est requis

{% include image.html width=400 url="/assets/img/outdoor-station/iStation-required3.png" description="LoRaWan Technology" %}

Vous aurez besoin d'un câble Ethernet standard en paire torsadée Cat5/Cat6 pour alimenter la passerelle.

Le câble peut mesurer jusqu'à 100 m entre l'injecteur PoE fourni et la passerelle. Assurez-vous de disposer d'une longueur de câble appropriée, de connecteurs RJ45 et d'un outil de sertissage avant le jour de l'installation.

Pour des performances radio optimales, la passerelle doit être installée sur un poteau, pour lequel vous aurez également besoin de fixations appropriées, telles que des vis, des boulons, des colliers ou des colliers de serrage solides.

## Préparer le câble PoE pour alimenter la passerelle
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Ethernet-cable-prep.png" description="LoRaWan Technology" %}


Choisissez l'extrémité du câble qui sera connectée à la passerelle à l'extérieur et préparez le connecteur en suivant les étapes suivantes :

1. faites glisser le presse-étoupe fourni sur le câble avec les vis orientées vers l'extrémité où se trouvera le connecteur RJ45.

2. dénudez le câble pour exposer les paires torsadées et alignez les fils dans le bon ordre. Nous recommandons d'utiliser la norme T-568A comme indiqué ci-dessous :
{% include image.html width=400 url="/assets/img/outdoor-station/T-568A-standard-wiring.png" description="LoRaWan Technology" %}
3. Utilisez l'outil de sertissage pour fixer les fils dans le connecteur RJ45

## Faire passer le câble vers l'alimentation interne
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Feeding-cable.png" description="LoRaWan Technology" %}

Trouvez l'emplacement approprié pour faire passer le câble Ethernet à travers le mur vers l'alimentation interne, en laissant l'extrémité avec le presse-étoupe et le connecteur RJ45 terminé avec suffisamment de câble libre pour permettre l'installation de la passerelle.


## Connecter le câble à l'injecteur PoE
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Power-connector.png" description="LoRaWan Technology" %}

À l'intérieur, faites passer le câble Ethernet Cat5/Cat6 vers une prise murale interne appropriée et terminez le câble avec un connecteur RJ45 standard et un protecteur, en utilisant le même ordre de fils que ci-dessus (norme T-568A).

Connectez le câble Ethernet à l'injecteur PoE, en veillant à utiliser la bonne prise étiquetée « OUT » ou « Data/Power OUT » et non « DATA IN ».


## Vérifier la connexion d'alimentation
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Power-on.png" description="LoRaWan Technology" %}


Mettez sous tension l'injecteur PoE interne et branchez le connecteur RJ45 Ethernet extérieur sur la passerelle du côté gauche.

Dévissez le protecteur anti-poussière du côté droit et vérifiez que la LED d'alimentation est allumée et verte.

Une fois terminé, revissez le capot anti-poussière du côté droit et sécurisez le câble Ethernet avec le protecteur de presse-étoupe du côté gauche.

Vous devez débrancher l'injecteur PoE par mesure de sécurité pendant que vous installez la passerelle en place.


## Fixer le support de la passerelle
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Mount-install.png" description="LoRaWan Technology" %}


Le support de montage doit être fixé solidement soit sur un poteau (recommandé afin que la passerelle soit plus haute et ait moins d'interférences), soit sur un mur à l'aide de sangles, boulons ou vis appropriés (non fournis).

Assurez-vous que les quatre « triangles » de montage pointent vers le bas et que la vis de fixation de la passerelle se trouve en bas.

## Installer la passerelle sur le support
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Install-on-mount.png" description="LoRaWan Technology" %}


La passerelle s'emboîtera directement sur le support fixé à l'étape précédente. Les étapes suivantes sont essentielles pour garantir une connexion sûre et durable :

connectez le câble de mise à la terre à la fois à l'arrière de la passerelle et sur le support
connectez le câble Ethernet RJ45 à la passerelle et sécurisez-le à l'aide du presse-étoupe, en veillant à ce qu'il soit étanche.
fixez la passerelle sur le support à l'aide de la vis de verrouillage en bas du support
vissez l'antenne extérieure soit directement, soit via un câble coaxial de type N en haut de la passerelle après avoir retiré le bouton argenté en haut.

## Sécuriser l'installation
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/iStation_installed.png" description="LoRaWan Technology" %}

Kerlink iStation installée sur un poteau
Assurez-vous de sécuriser le poteau à l'aide des fixations appropriées, par ex. kit de cerclage, supports, etc.

Une fois tout sécurisé, mettez sous tension l'injecteur PoE. Vous pouvez maintenant commencer à déployer les capteurs Microshare dans votre bâtiment ou campus.

C'est terminé ! Veuillez envoyer un e-mail à support@microshare.io pour indiquer que la passerelle est opérationnelle afin que nous puissions le confirmer de notre côté.

---------------------------------------

### Rappel : pour des performances optimales
{% include image.html width=800 url="/assets/img/outdoor-station/fresnel.jpg" description="LoRaWan Technology" %}
