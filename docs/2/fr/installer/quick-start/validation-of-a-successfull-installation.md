---
layout: docs
title: Validation d'une installation réussie
description: Comment savoir si j'ai correctement installé mes appareils ?
lang: fr
translation_of: docs/2/installer/quick-start/validation-of-a-successfull-installation.md
translations:
  en: /docs/2/installer/quick-start/validation-of-a-successfull-installation
  fr: /docs/2/fr/installer/quick-start/validation-of-a-successfull-installation
toc: true
---





{% include image.html url="/assets/img/thumbnail-14.jpg" description="thumbnail 2" %}

---------------------------------------
#### Sommaire

1. [Vue d'ensemble](./#1-overview)
2. [Validation Microshare](./#2-microshare-validation)


## 1. Vue d'ensemble
---------------------------------------

Pour confirmer une installation réussie, validez d'abord les éléments suivants dans l'ordre :
<br>
**1.**	La passerelle fonctionne correctement
<br>
**2.**	Les appareils collectent et envoient des données
<br>
**3.**	Les données sont reçues sur la plateforme Microshare

<br>
Après avoir terminé ces étapes, vous êtes prêt à passer à la création du tableau de bord et à l'accès aux données.

**<!> Note : Ces étapes sont interdépendantes<!>**

Vous devez valider les étapes ci-dessus dans l'ordre indiqué, mais vérifier que les données sont reçues sur la plateforme Microshare suffit à confirmer une installation complète.


### Prérequis

Prenez un moment pour vérifier que vous avez correctement suivi les étapes demandées dans le tutoriel d'installation.

## 2. Validation Microshare
---------------------------------------

Pour valider l'installation des appareils d'une solution Microshare, vérifiez que les éléments suivants ont été correctement créés :

<br>
**1.** Après la configuration des passerelles et des capteurs, créez ces entités sur le réseau LoRaWan utilisé.
<br>
**2.** Activez le pont de données entre le réseau LoRaWan et le device cluster Microshare.

<br>
Ensuite, scannez les appareils avec l'application Deploy-M iOS ou Android pour enregistrer les appareils sur Microshare. Une fois l'appareil activé, il commencera à envoyer des données. À ce stade, l'appareil sur Microshare passera de cet état :


{% include image.html url="/assets/img/installation/installation-no-1.png" description="Banner" %}

À celui-ci :

{% include image.html url="/assets/img/installation/installation-yes-1.png" description="Banner" %}

Il sera ainsi vert et validé.

 