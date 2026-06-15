---
layout: docs
title: Enregistrement
description: Guide complet pour installer des appareils avec Deploy-M
lang: fr
translation_of: docs/2/installer/deploy-m/app-guide.md
translations:
  en: /docs/2/installer/deploy-m/app-guide
  fr: /docs/2/fr/installer/deploy-m/app-guide
group: deploy-m
toc: true
---


{% include image.html url="/assets/img/deploy-M-1.png" description="thumbnail 2" %}




##### SOMMAIRE
1. [Vue d'ensemble](./#1-overview)
2. [Prérequis](./#1-requirements)
3. [Connexion](./#2-sign-in)
4. [Accéder à un device cluster](./#3-access-to-device-cluster)
5. [Ajouter un appareil](./#4-add-a-device)
6. [Modifier un appareil](./#5-change-a-device)
7. [Supprimer un appareil](./#6-delete-a-device)
<br>


## 1. Vue d'ensemble
---------------------------------------
Deploy-M est une application mobile qui simplifie le processus de configuration des appareils. Utilisez Deploy-M pour configurer tous vos appareils sur votre compte Microshare simultanément, ce qui vous fait gagner du temps et garantit une installation sans erreur de votre solution de jumeau numérique.

###### Démarrez votre flux de données IoT avec les étapes suivantes


## 2. Prérequis
---------------------------------------

Pour pouvoir utiliser l'application Deploy-M afin de configurer vos appareils, assurez-vous d'avoir rempli les prérequis suivants.

Pour commencer, un compte Microshare est requis, sur notre plateforme Production ou Development.
Pour créer un compte, [suivez ce guide.](/docs/2/general/quick-start/create-an-account/)

Ce compte doit disposer d'un ou plusieurs « device clusters » pour héberger les appareils que nous enregistrerons avec l'application.
Pour créer un device cluster, [suivez ce guide.](/docs/2/technical/microshare-platform/device-cluster-guide/)

Vous êtes maintenant prêt à ajouter des appareils à la plateforme Microshare. Les appareils obtenus via Microshare sont étiquetés avec des codes QR Microshare, ce qui facilite, accélère et sécurise la configuration avec l'application Deploy-M.

## 3. Connexion
---------------------------------------
Maintenant que tout est prêt, commençons !

<br>
**1.** Lancez l'application Deploy-M sur votre smartphone.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M01.PNG" description="Deploy-M App" %}

<br>
**2.** Lors du premier lancement de l'application, vous serez invité à vous connecter au serveur de production Microshare. Saisissez vos identifiants pour vous connecter.

<br>
Vous arriverez sur la page de gestion des device clusters, où vous verrez le ou les device clusters précédemment créés.

**NOTE :** Pour utiliser le serveur de développement de Microshare, connectez-vous d'abord au serveur de production comme indiqué ci-dessus. Rendez-vous ensuite sur la page About.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M02.PNG" description="Deploy-M App" %}

<br>
Activez le commutateur **<em>Development Server</em>**, puis déconnectez-vous. Vous pourrez alors vous connecter avec vos identifiants du serveur de développement.

## 4. Accéder à un device cluster
---------------------------------------

**1.** Assurez-vous d'être sur la page de gestion des device clusters, où vous pouvez voir les device clusters de votre compte.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M03.PNG" description="Deploy-M App" %}

<br>
**2.** Appuyez sur un device cluster pour voir les appareils qu'il contient.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}


## 5. Ajouter un appareil
---------------------------------------

**1.** Pour ajouter un appareil, appuyez sur le bouton **<em>Add</em>** en bas de l'écran.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04B.PNG" description="Deploy-M App" %}

Vous pouvez ajouter un appareil manuellement ou en scannant le code QR Microshare.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M05.PNG" description="Deploy-M App" %}

**2.** Appuyez sur le bouton **<em>Scan</em>** pour ouvrir la page de scan, puis déplacez l'appareil photo et/ou l'appareil jusqu'à ce que le code QR soit visible dans la vue caméra comme sur l'image ci-dessous.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M06.PNG" description="Deploy-M App" %}

<br>
Deploy-M lit l'ID de l'appareil et le type d'appareil à partir du code QR et ouvre la page **<em>Add/Edit Device</em>** pour vous permettre de renseigner des informations supplémentaires.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M07.PNG" description="Deploy-M App" %}

<br>
**3.** Les quatre champs déroulants sont les tags de localisation utilisés pour le jumeau numérique. Ils correspondent généralement au bâtiment, à l'étage, à la salle et à l'index de localisation optionnel.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M08.PNG" description="Deploy-M App" %}

Assurez-vous de renseigner les bons tags de localisation, car c'est essentiel pour le processus de jumeau numérique. Plus d'informations sur les tags de localisation [ici](/docs/2/installer/deploy-m/contact-tracing-installation-guide/#more-on-tags).

**4.** Une fois les champs remplis, appuyez sur le bouton **<em>Save</em>** pour ajouter l'appareil au device cluster et enregistrer la modification sur votre compte Microshare.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M10.PNG" description="Deploy-M App" %}

## 6. Modifier un appareil
---------------------------------------

Pour modifier un appareil, appuyez sur le device cluster, puis sur l'appareil souhaité.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M09.PNG" description="Deploy-M App" %}

Modifiez les informations manuellement, ou appuyez sur le bouton **<em>Rescan</em>** pour scanner un autre appareil pour cet emplacement. Enregistrez vos modifications sur votre compte Microshare en appuyant sur le bouton **<em>Save</em>**.

## 7. Supprimer un appareil
---------------------------------------

Pour supprimer un appareil, balayez vers la gauche sur l'appareil, puis appuyez sur **<em>Delete</em>**.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M11.PNG" description="Deploy-M App" %}

<br>
L'appareil est maintenant supprimé.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}

 