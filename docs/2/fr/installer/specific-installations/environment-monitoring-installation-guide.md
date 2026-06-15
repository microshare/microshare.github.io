---
layout: docs
title: Guide d'installation de la surveillance environnementale
description: Comment installer une solution Microshare Environment Monitoring
lang: fr
translation_of: docs/2/installer/specific-installations/environment-monitoring-installation-guide.md
translations:
  en: /docs/2/installer/specific-installations/environment-monitoring-installation-guide
  fr: /docs/2/fr/installer/specific-installations/environment-monitoring-installation-guide
toc: true
---

---------------------------------------

Guide d'installation de la solution Environment Monitoring

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

### SE01 – Environment Monitoring

La solution Environment Monitoring de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant surveiller la qualité de l'air intérieur et de l'environnement dans leurs bâtiments.

Que contient la boîte ? Pour un déploiement rapide, la solution Environment Monitoring de Microshare comprend des capteurs sans fil alimentés par batterie à longue durée de vie, faciles à installer discrètement dans les bâtiments, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare Business Tools ou l'accès API direct aux données via le Microshare Smart Network.

**Instructions d'installation :**

| --- | --- |
| **1.** **Activation du capteur** <br>- Nos capteurs sans fil sont livrés avec des piles préinstallées. Pour activer, retirez l'onglet d'isolation de la pile d'expédition du capteur.<br>- La LED du capteur devrait commencer à clignoter de façon intermittente.<br> | {% include image.html url="/assets/img/install_environment/EnvironmentSensor.jpg" description="Environment Sensor" %} |
| **2.** **Préparation du capteur pour la fixation** <br><br>- À l'aide d'un ruban adhésif approprié, **placez le ruban du côté opposé au code QR ; couvrir le code QR vous empêchera d'utiliser l'application Deploy-M pour ajouter votre appareil au système.** | {% include image.html url="/assets/img/install_environment/tabs_side_adhesive.png" description="Sensor with adhesive tape" %}|
| **3.** **Enregistrement du capteur avec l'application Deploy-M [iOS & Android]** <br><br>- Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare<br>- Connectez-vous avec vos identifiants ; en cas de doute ou si vous avez besoin d'aide, contactez [installation@microshare.io](mailto:installation@microshare.io) | {% include image.html url="/assets/img/leak-installation/Image12.png" description="Banner" %} |
| - Sélectionnez le cluster d'appareils correct pour les appareils que vous installez. <br> Remarque – un « Device Cluster » est simplement un regroupement de capteurs, généralement dans un même espace, qui aide à identifier et annoter les données reçues de votre solution Microshare. | {% include image.html url="/assets/img/leak-installation/Image13.png" description="Banner" %} |
| - Sélectionnez l'emplacement correct où l'appareil sera installé.<br>
- Cliquez sur Add | {% include image.html url="/assets/img/leak-installation/Image14.png" description="Banner" %}  |
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur RESCAN pour ouvrir l'appareil photo | {% include image.html url="/assets/img/leak-installation/Image15.png" description="Banner" %} |
| - Scannez le code QR situé sur le capteur | {% include image.html url="/assets/img/install_environment/EnvironmentSensor_DMScan.jpg" description="QR Code Scan on Deploy-M app" %} |
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran. | {% include image.html url="/assets/img/leak-installation/Image17.png" description="Banner" %} |
| **4.** **Fixation du capteur Environment Monitoring** <br><br>- Une fois l'enregistrement du capteur terminé dans l'application Deploy-M, vous pouvez fixer le capteur en place.<br>- Retirez l'autocollant adhésif à l'arrière de l'appareil et fixez-le à l'emplacement prédéfini. Nous recommandons de fixer le capteur hors de portée. | {% include image.html url="/assets/img/install_environment/EnvironmentSensor_attached.png" description="Banner" %} |

<style>
    tr td:first-child {
        width:60%;
        vertical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
