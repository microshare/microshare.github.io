---
layout: docs
title: Guide d'installation de la surveillance des réfrigérateurs
description: Comment installer une solution Microshare Fridge Monitoring
lang: fr
translation_of: docs/2/installer/specific-installations/fridge-monitoring-installation.md
translations:
  en: /docs/2/installer/specific-installations/fridge-monitoring-installation
  fr: /docs/2/fr/installer/specific-installations/fridge-monitoring-installation
toc: true
---

---------------------------------------

Guide d'installation de la solution Fridge Monitoring

Ce document contient des informations importantes sur les méthodes correctes, sûres et efficaces d'installation des solutions Microshare Smart FM.

_Nous avons livré et installé des milliers de capteurs pour des clients du monde entier dans un large éventail d'applications ; n'hésitez pas à nous contacter si vous avez besoin d'aide. Notre équipe d'experts est à votre disposition pour vous accompagner._

Contactez [installation@microshare.io](mailto:installation@microshare.io) si vous avez besoin d'assistance

**Note**

Utilisation sécurisée de vos solutions Microshare

- Respectez les exigences en matière de piles indiquées avant d'installer des piles.
- Ne forcez jamais un connecteur dans un port. Si le connecteur et le port ne s'emboîtent pas facilement, ils ne correspondent probablement pas. Assurez-vous que le connecteur correspond au port et que vous l'avez positionné correctement par rapport au port.
- Protégez les capteurs Microshare de la lumière directe du soleil, dans la mesure du possible.
- Utilisez les solutions Microshare dans des environnements conformes à leurs spécifications. La plupart des produits sont destinés à un usage intérieur uniquement.
- Il n'existe aucune pièce réparable par l'utilisateur à l'intérieur des capteurs Microshare. Pour le personnel de maintenance : débranchez toujours l'alimentation externe, retirez les piles et coupez l'onduleur avant toute intervention.
- Les capteurs Microshare peuvent être endommagés par un stockage ou une manipulation inappropriés. Veillez à ne pas les faire tomber pendant le transport et l'installation.

{% include image.html url="/assets/img/installation_tabs/security.png" description="Banner" %}

AVERTISSEMENT : N'essayez pas d'ouvrir ou de démonter les solutions Microshare. Vous risquez une décharge électrique et l'annulation de la garantie limitée. Aucune pièce réparable par l'utilisateur n'est à l'intérieur.

Ces informations peuvent contenir des inexactitudes techniques ou des erreurs typographiques. Des modifications sont apportées périodiquement ; elles seront intégrées dans les nouvelles éditions de la publication. Microshare peut apporter des améliorations et/ou des modifications aux produits et/ou programmes décrits dans cette publication à tout moment et sans préavis.

### SM02 – Fridge Monitoring

La solution Fridge Monitoring de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant surveiller la température dans les réfrigérateurs et autres espaces de stockage frigorifique.

Que contient la boîte ? Pour un déploiement rapide, la solution Fridge Monitoring de Microshare comprend un capteur sans fil alimenté par batterie à longue durée de vie avec sondes de température, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare for Business ou l'accès API direct aux données via le Microshare Smart Network.

Pour installer la solution, vous aurez également besoin de colliers de serrage et d'un aimant, non fournis.


**Instructions d'installation :**

| --- | --- |
| **1.** **Activation du capteur** <br>- Nos capteurs sans fil sont livrés avec des piles préinstallées. Pour activer, maintenez simplement un aimant contre le cercle en relief indiqué sur l'image. L'appareil est activé lorsque les LED clignotent à travers le plastique en bas de l'appareil<br><br>Voir l'exemple dans cette vidéo : [Watch this step in video](https://youtu.be/Jvxx7kxU-Y4?t=126) | {% include image.html url="/assets/img/Installation_fridge/FridgeSensor1.png" description="Fridge Sensor" %} |
| **2.** **Préparation du capteur pour la fixation** <br><br>- Si vous fixez le capteur à l'aide d'un ruban adhésif approprié, placez le ruban du côté opposé au code QR. | {% include image.html url="/assets/img/Installation_fridge/FridgeSensor2.png" description="Fridge Sensor" %}|
| **3.** **Enregistrement du capteur avec l'application Deploy-M [iOS & Android]** <br><br>- Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare<br>- Connectez-vous avec vos identifiants ; en cas de doute ou si vous avez besoin d'aide, contactez [installation@microshare.io](mailto:installation@microshare.io) | {% include image.html url="/assets/img/leak-installation/Image12.png" description="Banner" %} |
| - Sélectionnez le cluster d'appareils correct pour les appareils que vous installez. <br> Remarque – un « Device Cluster » est simplement un regroupement de capteurs, généralement dans un même espace, qui aide à identifier et annoter les données reçues de votre solution Microshare. | {% include image.html url="/assets/img/leak-installation/Image13.png" description="Banner" %} |
| - Sélectionnez l'emplacement correct où l'appareil sera installé.<br>
- Cliquez sur Add | {% include image.html url="/assets/img/leak-installation/Image14.png" description="Banner" %}  |
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur RESCAN pour ouvrir l'appareil photo | {% include image.html url="/assets/img/leak-installation/Image15.png" description="Banner" %} |
| - Scannez le code QR situé sur le capteur | {% include image.html url="/assets/img/Installation_fridge/FridgeSensor_QR_DM.png" description="Banner" %} |
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran. | {% include image.html url="/assets/img/leak-installation/Image17.png" description="Banner" %} |
| **4.** **Fixation du capteur Fridge Monitoring** <br><br>- Une fois l'enregistrement du capteur terminé dans l'application Deploy-M, vous pouvez fixer le capteur en place.<br>- Retirez l'autocollant adhésif à l'arrière de l'appareil et collez l'appareil à l'extérieur du réfrigérateur à l'emplacement prédéfini. | {% include image.html url="/assets/img/Installation_fridge/FridgeSensorFitted.png" description="Banner" %} |
| - Une fois le boîtier du capteur fixé, collez les pastilles adhésives sur le câble à environ un pouce [2,5 cm] de la sonde (située à l'extrémité du câble) comme indiqué | {% include image.html url="/assets/img/Installation_fridge/FridgeSensorProbe.png" description="Banner" %} |
| - Fixez la sonde à l'intérieur du réfrigérateur à l'aide des bandes adhésives que vous avez posées. Nous recommandons d'installer la sonde en haut du réfrigérateur | {% include image.html url="/assets/img/Installation_fridge/FridgeSensorProbeFitted.png" description="Banner" %} |


<style>
    tr td:first-child {
        width:60%;
        vertical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>

<br>**Vous êtes maintenant prêt à recevoir des données de votre réfrigérateur.**
