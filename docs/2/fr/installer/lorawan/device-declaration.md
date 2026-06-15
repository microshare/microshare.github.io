---
layout: docs
title: Déclaration des appareils
description: Configuration de vos appareils
lang: fr
translation_of: docs/2/installer/lorawan/device-declaration.md
translations:
  en: /docs/2/installer/lorawan/device-declaration
  fr: /docs/2/fr/installer/lorawan/device-declaration
toc: true
---


{% include image.html url="/assets/img/thumbnail-6.jpg" description="thumbnail 2" %}

<br>
---------------------------------------

##### SOMMAIRE :

1. [Possibilités](./#1-possibilites)
2. [Création d'un cluster d'appareils](./#2-creation-dun-cluster-dappareils)
2. [Ajouter un appareil](./#3-ajouter-un-appareil)

---------------------------------------


## 1. Possibilités
---------------------------------------

Il existe deux méthodes d'installation pour vos appareils.

La seconde méthode, plus simple, vous oblige à créer d'abord le cluster d'appareils sur Microshare, puis à utiliser l'application mobile Deploy-M pour scanner vos appareils et indiquer leurs emplacements en temps réel. Les deux méthodes nécessitent la création du cluster d'appareils avant d'ajouter les appareils.

**Remarque :** Les clusters d'appareils sont gérés par l'administrateur ; la coordination et la communication avec votre administrateur concernant le placement des appareils sont essentielles pour une installation réussie.


## 2. Création d'un cluster d'appareils
---------------------------------------

Un cluster d'appareils est un groupe d'appareils de même type — généralement situés physiquement au même endroit. Les clusters d'appareils peuvent également être utilisés pour diviser logiquement les appareils en groupes fonctionnels, dont les données sont destinées à être affichées ou analysées ensemble dans une seule représentation ou visualisation. Les clusters d'appareils et leurs applications sont décrits plus en détail [sur cette page](/docs/2/fr/technical/microshare-platform/device-cluster-guide/).

Par exemple, supposons que nous ayons des appareils de température que nous souhaitons installer dans notre bâtiment.

**Nous savons :**

le type d'appareil : Tabs Environment TBHV100

l'emplacement global : Europe,UK,London,Paddington,5 Merchant Square

le cas d'usage : gestion de la température

Nous pouvons maintenant créer le cluster d'appareils. Comme indiqué précédemment, les clusters d'appareils se trouvent normalement sur le compte administrateur principal. L'administrateur crée le cluster d'appareils. Vous devrez simplement faire une demande à l'administrateur de votre entité pour créer le cluster d'appareils nécessaire.

## 3. Ajouter un appareil
---------------------------------------

Une fois le cluster d'appareils créé, il ne reste plus qu'à ajouter les appareils. Vous pouvez suivre le [guide des clusters d'appareils](../../../technical/microshare-platform/device-cluster-guide/) pour ajouter les appareils selon l'ancienne méthode.

Sinon, téléchargez l'[application Deploy-M](../../deploy-m/download-the-app) et suivez ce tutoriel pour configurer vos appareils via l'application mobile.

##### > [Guide Deploy-M](../../deploy-m/app-guide)

