---
layout: docs
title: Déballage des données
description: Comment vos données sont décryptées et mises à votre disposition
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/data-unpacking.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/data-unpacking
  fr: /docs/2/fr/technical/microshare-platform-advanced/data-unpacking
---
{% include image.html url="/assets/img/thumbnail-3.jpg" description="thumbnail 2" %}

<br>
---------------------------------------
##### SOMMAIRE : 

1. [Qu'est-ce que le déballage des données ?](./#1-quest-ce-que-le-deballage-des-donnees)
2. [Nouveau processus](./#2-nouveau-processus)
3. [Configuration du Device Cluster pour le déballage des données](./#3-configuration-du-device-cluster-pour-le-deballage-des-donnees)
4. [Comment fonctionne le processus de déballage des données ?](./#4-comment-fonctionne-le-processus-de-deballage-des-donnees)
5. [Et ensuite ?](./#5-et-ensuite)



## 1. Qu'est-ce que le déballage des données ?
---------------------------------------

Le déballage des données est le processus par lequel Microshare prend les données chiffrées de votre ou vos appareil(s) et les représente sur votre tableau de bord.  

## 2. Nouveau processus
---------------------------------------

Microshare effectuait auparavant le déballage des données avec une série de robots, mais a depuis conçu une nouvelle solution pour représenter vos données via les device clusters. Vous pouvez en savoir plus sur l'ancienne méthode de déballage dans la page [Déballage des données par les Robots](/docs/2/fr/technical/microshare-platform-advanced/data-unpacking-by-robots).

## 3. Configuration du Device Cluster pour l'ingestion de données
---------------------------------------

[Le guide Device Cluster](/docs/2/technical/microshare-platform/device-cluster-guide/) constitue un excellent tutoriel pour vous guider dans la configuration du device cluster. Cette page de déballage des données sera une description plus approfondie des nombreux paramètres du device cluster. 

## 4. Comment fonctionne le processus de déballage des données ?
---------------------------------------

Après avoir renseigné les recTypes source et cible, l'ensemble d'informations suivant concerne les appareils eux-mêmes. Lorsque vous fournissez les spécifications du modèle d'appareil, le device payload unpacker est rempli automatiquement.


{% include image.html url="/assets/img/data-formatting-1.png" description="DF1" %}

La catégorie des spécifications du modèle d'appareil est marquée en vert et le device payload unpacker en bleu. Le device payload unpacker est spécifique au format d'information envoyé par votre appareil et correspond à la fonction qui déchiffre vos informations. 


Vous indiquez ensuite l'EUI ou l'Id de chacun de vos appareils ainsi que les tags de localisation. Ces spécifications sont marquées par des flèches rouge et orange. Elles permettent au code de déballage de ne déchiffrer que les informations de vos appareils et de les différencier des enregistrements provenant de plusieurs appareils. Après analyse, la charge utile est transformée par le code de déballage. Selon ce que vous enregistrez, un événement peut être déclenché et les données sont stockées avec des informations supplémentaires sur la valeur décodée, son unité, l'appareil source, l'heure d'enregistrement, etc. 

Enfin, les données sont écrites dans le data lake sous le nom target recType.unpacked avec les tags spécifiés lors de la création du device cluster. L'écriture des données construit la piste d'audit de vos données et permet de déclencher l'étape suivante du workflow. 

#### L'ensemble du processus ressemble à ceci :

Les données de vos capteurs sont envoyées via signal LoRaWAN sans fil vers votre passerelle LoRaWAN. La passerelle envoie les données via WiFi ou signal cellulaire vers son réseau correspondant puis vers le réseau Microshare sous le nom du recType source. Le programme device cluster prend les données du recType source et les pousse dans le data lake Microshare sous le nom du recType cible. De là, les données passent par la fonction de décodage correspondant au type de votre appareil. Ensuite, le programme POST vos données dans un format exploitable vers l'API Microshare afin qu'elles puissent être représentées sur votre tableau de bord ou application.  

## 5. Et ensuite ?
---------------------------------------

Une fois vos données chargées dans le data lake, vous voudrez les préparer pour les tableaux de bord et les applications. Construisez votre workflow multi-étapes avec un [Robot](/docs/2/fr/technical/microshare-platform-advanced/robots-guide/) pour analyser, transformer et déballer vos données automatiquement.  

 
