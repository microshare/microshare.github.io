---
layout: docs
title: Installation de la détection de fuites
description: Comment installer une solution Microshare Leak Detection
lang: fr
translation_of: docs/2/installer/specific-installations/leak-detection-installation-guide.md
translations:
  en: /docs/2/installer/specific-installations/leak-detection-installation-guide
  fr: /docs/2/fr/installer/specific-installations/leak-detection-installation-guide
toc: true
---

---------------------------------------

Guide d'installation de la solution Leak Detection

Ce document contient des informations importantes sur les méthodes correctes, sûres et efficaces d'installation des solutions Microshare Smart FM.

_Nous avons livré et installé des milliers de capteurs pour des clients du monde entier dans un large éventail d'applications ; n'hésitez pas à nous contacter si vous avez besoin d'aide. Notre équipe d'experts est à votre disposition pour vous accompagner._

Contactez [installation@microshare.io](mailto:installation@microshare.io) si vous avez besoin d'assistance


**Note** Utilisation sécurisée de vos solutions Microshare

- Respectez les exigences en matière de piles indiquées avant d'installer des piles.
- Ne forcez jamais un connecteur dans un port. Si le connecteur et le port ne s'emboîtent pas facilement, ils ne correspondent probablement pas. Assurez-vous que le connecteur correspond au port et que vous l'avez positionné correctement par rapport au port.
- Protégez les capteurs Microshare de la lumière directe du soleil, dans la mesure du possible.
- Utilisez les solutions Microshare dans des environnements conformes à leurs spécifications. La plupart des produits sont destinés à un usage intérieur uniquement.
- Il n'existe aucune pièce réparable par l'utilisateur à l'intérieur des capteurs Microshare. Pour le personnel de maintenance : débranchez toujours l'alimentation externe, retirez les piles et coupez l'onduleur avant toute intervention.
- Les capteurs Microshare peuvent être endommagés par un stockage ou une manipulation inappropriés. Veillez à ne pas les faire tomber pendant le transport et l'installation.

{% include image.html url="/assets/img/installation_tabs/security.png" description="Banner" %}

AVERTISSEMENT : N'essayez pas d'ouvrir ou de démonter les solutions Microshare. Vous risquez une décharge électrique et l'annulation de la garantie limitée. Aucune pièce réparable par l'utilisateur n'est à l'intérieur.

Ces informations peuvent contenir des inexactitudes techniques ou des erreurs typographiques. Des modifications sont apportées périodiquement ; elles seront intégrées dans les nouvelles éditions de la publication. Microshare peut apporter des améliorations et/ou des modifications aux produits et/ou programmes décrits dans cette publication à tout moment et sans préavis.

### SM03 – Leak Detection

La solution Leak Detection de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant surveiller leurs locaux et espaces de stockage pour détecter des signes de fuites d'eau.

Que contient la boîte ? Pour un déploiement rapide, la solution Leak Detection de Microshare comprend des capteurs sans fil alimentés par batterie à longue durée de vie (jusqu'à deux ans) et une sonde de détection d'eau, faciles à installer aux points clés de vos locaux, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare for Business ou l'accès API direct aux données via le Microshare Smart Network.


**Instructions d'installation :**

| --- | --- |
| **1.** **Préparation du capteur** <br>- La solution Leak Detection est composée de deux éléments. Le premier est la sonde de détection d'eau, fournie avec un câble de 2 m, qui se connecte au second élément, le capteur lui-même.  | {% include image.html url="/assets/img/leak-installation/leakdetectorImage1.png" description="Banner" %}|
| **2.** **Dérouler le câble et le connecter au capteur** <br>- Insérez le Micro-USB dans le port du capteur | {% include image.html url="/assets/img/leak-installation/Image2.png" description="Banner" %}|
| **3.** **Retirez l'onglet de la pile du capteur pour l'activer** <br>- La LED devrait commencer à clignoter pour indiquer un fonctionnement correct | {% include image.html url="/assets/img/leak-installation/Image3.png" description="Banner" %} {% include image.html url="/assets/img/leak-installation/Image4.png" description="Banner" %}|
| **4.** **Préparation de l'unité capteur pour la fixation** <br>- Fixez le côté rouge de la pastille adhésive du côté opposé au code QR | {% include image.html url="/assets/img/leak-installation/Image5.jpg" description="Banner" %} {% include image.html url="/assets/img/leak-installation/Image6.png" description="Banner" %} |
| **5.** **Placez la sonde de détection d'eau, avec les 3 sondes orientées vers le bas** <br>- Pour que le capteur détecte une fuite, au moins deux des trois sondes doivent être reliées par l'eau pour envoyer une alerte. Voici quelques exemples : | {% include image.html url="/assets/img/leak-installation/Image7.png" description="Banner" %} {% include image.html url="/assets/img/leak-installation/Image8.png" description="Banner" %} <br> {% include image.html url="/assets/img/leak-installation/Image9.png" description="Banner" %} {% include image.html url="/assets/img/leak-installation/Image10.png" description="Banner" %}|
| - Le capteur d'eau doit être orienté avec les sondes vers le haut afin de détecter la fuite. | {% include image.html url="/assets/img/leak-installation/Image11.png" description="Banner" %} |
| **6.** **Enregistrement du capteur avec l'application Deploy-M [iOS & Android]** <br> - Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare <br> - Connectez-vous avec les identifiants envoyés lors de la configuration. | {% include image.html url="/assets/img/leak-installation/Image12.png" description="Banner" %} |
| - Sélectionnez le cluster d'appareils pour les appareils que vous installez. | {% include image.html url="/assets/img/leak-installation/Image13.png" description="Banner" %} |
| - Sélectionnez l'emplacement correct où l'appareil sera installé. <br> - Cliquez sur Add | {% include image.html url="/assets/img/leak-installation/Image14.png" description="Banner" %} |
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur « RESCAN » pour ouvrir l'appareil photo | {% include image.html url="/assets/img/leak-installation/Image15.png" description="Banner" %} |
| - Scannez le code QR situé sur le capteur  | {% include image.html url="/assets/img/leak-installation/Image16.jpg" description="Banner" %} |
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran.  | {% include image.html url="/assets/img/leak-installation/Image17.png" description="Banner" %} |
| **Une fois l'appareil enregistré avec Deploy-M et placé à l'emplacement que vous souhaitez surveiller pour les fuites, vous êtes prêt à recevoir des données !** | {% include image.html url="/assets/img/leak-installation/Image18.png" description="Banner" %} |


<style>
    tr td:first-child {
        width:60%;
        vetical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
