---
layout: docs
title: Guide d'installation de l'indicateur Open/Shut
description: Comment installer une solution Microshare Open/Shut Indicator
lang: fr
translation_of: docs/2/installer/specific-installations/open-shut-indicator-installation.md
translations:
  en: /docs/2/installer/specific-installations/open-shut-indicator-installation
  fr: /docs/2/fr/installer/specific-installations/open-shut-indicator-installation
toc: true
---

---------------------------------------

Guide d'installation de la solution Open/Shut Indicator

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

**SM04 – Open/Shut Indicator**

La solution Open/Shut Indicator de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant mieux comprendre l'utilisation de leurs locaux.

Que contient la boîte ? Pour un déploiement rapide, la solution Open/Shut Indicator de Microshare comprend un capteur sans fil alimenté par batterie à longue durée de vie et une unité magnétique séparée, faciles à installer discrètement dans les locaux, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare for Business ou l'accès API direct aux données via le Microshare Smart Network.


**Instructions d'installation :**

| --- | --- |
| **1.** **Activation du capteur sans fil** <br> - Nos capteurs sans fil sont livrés avec des piles préinstallées. Pour activer, retirez l'onglet d'isolation de la pile d'expédition du capteur.<br>- Après environ une minute, la LED du capteur devrait commencer à clignoter de façon intermittente. | {% include image.html url="/assets/img/Open_Shut_indicator/openshut_1.jpg" description="Banner" %}|
| **2.** **Préparation du capteur pour la fixation** <br> - Fixez le côté rouge de la pastille adhésive « 3M » du côté opposé au code QR <br> - Posez également une pastille adhésive sur la pièce magnétique | {% include image.html url="/assets/img/Open_Shut_indicator/openshut_2.png" description="Banner" %}|
| **3.** **Enregistrement du capteur avec l'application Deploy-M [iOS and Android]** <br> - Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare<br>- Connectez-vous avec les identifiants envoyés lors de la configuration | {% include image.html url="/assets/img/Open_Shut_indicator/openshut_3.png" description="Banner" %}| 
| - Sélectionnez le cluster d'appareils pour les appareils que vous installez | {% include image.html url="/assets/img/Open_Shut_indicator/openshut_4.png" description="Banner" %}|
| - Sélectionnez l'emplacement correct où l'appareil sera installé. <br> - Cliquez sur Add | | {% include image.html url="/assets/img/Open_Shut_indicator/openshut_5.png" description="Banner" %}| |
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur &#39;RESCAN&#39; pour ouvrir l'appareil photo || {% include image.html url="/assets/img/Open_Shut_indicator/openshut_6.png" description="Banner" %}||
| - Scannez le code QR situé sur le capteur | {% include image.html url="/assets/img/Open_Shut_indicator/openshut_7.jpg" description="Banner" %}|
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran. |{% include image.html url="/assets/img/Open_Shut_indicator/openshut_8.png" description="Banner" %}|
| **4.** **Fixation du capteur sans fil** <br>- Une fois l'enregistrement du capteur terminé dans l'application Deploy-M, vous pouvez fixer le capteur en place. <br> - Retirez l'autocollant à l'arrière de l'appareil et collez l'appareil au mur à côté de l'ouverture que vous souhaitez surveiller. <br> - Collez ensuite l'aimant sur la porte ou la fenêtre près du capteur, en veillant à ce qu'ils soient alignés. Voir l'image pour référence.|{% include image.html url="/assets/img/Open_Shut_indicator/openshut_9.png" description="Banner" %}|



<style>
    tr td:first-child {
        width:60%;
        vertical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
