---
layout: docs
title: Instructions d'installation de l'indicateur de niveau d'activité
description: Comment installer la solution Microshare Activity Level Indicator (basée sur le mouvement)
lang: fr
translation_of: docs/2/installer/specific-installations/activity-level-indicator-installation-guide.md
translations:
  en: /docs/2/installer/specific-installations/activity-level-indicator-installation-guide
  fr: /docs/2/fr/installer/specific-installations/activity-level-indicator-installation-guide
toc: true
---

---------------------------------------

Guide d'installation de la solution Activity Level Indicator

Ce guide contient des informations importantes sur les méthodes correctes, sûres et efficaces d'installation des solutions Microshare Smart FM.

_Nous avons livré et installé des milliers de capteurs pour des clients du monde entier dans un large éventail d'applications ; n'hésitez pas à nous contacter si vous avez besoin d'aide. Notre équipe d'experts est à votre disposition pour vous accompagner._

Contactez <installation@microshare.io> si vous avez besoin d'assistance

**Note**
Utilisation sécurisée de vos solutions Microshare

-   Respectez les exigences en matière de piles indiquées avant d'installer des piles.

-   Ne forcez jamais un connecteur dans un port. Si le connecteur et le port ne s'emboîtent pas facilement, ils ne correspondent probablement pas. Assurez-vous que le connecteur correspond au port et que vous l'avez positionné correctement par rapport au port.

-   Protégez les capteurs Microshare de la lumière directe du soleil, dans la mesure du possible.

-   Utilisez les solutions Microshare dans des environnements conformes à leurs spécifications. La plupart des produits sont destinés à un usage intérieur uniquement.

-   Il n'existe aucune pièce réparable par l'utilisateur à l'intérieur des capteurs Microshare. Pour le personnel de maintenance : débranchez toujours l'alimentation externe, retirez les piles et coupez l'onduleur avant toute intervention.

-   Les capteurs Microshare peuvent être endommagés par un stockage ou une manipulation inappropriés. Veillez à ne pas les faire tomber pendant le transport et l'installation.

{% include image.html url="/assets/img/installation_tabs/security.png" description="Banner" %}

AVERTISSEMENT : N'essayez pas d'ouvrir ou de démonter les solutions Microshare. Vous risquez une décharge électrique et l'annulation de la garantie limitée. Aucune pièce réparable par l'utilisateur n'est à l'intérieur.

Ces informations peuvent contenir des inexactitudes techniques ou des erreurs typographiques. Des modifications sont apportées périodiquement ; elles seront intégrées dans les nouvelles éditions de la publication. Microshare peut apporter des améliorations et/ou des modifications aux produits et/ou programmes décrits dans cette publication à tout moment et sans préavis.

### SC01 -- Activity Level Indicator (basé sur le mouvement)

La solution Activity Level Indicator de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant obtenir de meilleures informations, renforcer la sécurité et développer de nouvelles applications d'usage autour de leurs locaux.

Que contient la boîte ? Pour un déploiement rapide, la solution Activity Level Indicator de Microshare comprend :

* `Des capteurs sans fil alimentés par batterie à longue durée de vie (jusqu'à deux ans), faciles à installer discrètement aux points clés de vos locaux`

* `La connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare Business Tools ou l'accès API direct aux données via le Microshare Smart Network.`

Remarque : Afin de réduire le risque d'enregistrement de fausses alertes, un capuchon simple est préinstallé sur l'unité de capteur pour limiter la portée de détection de l'appareil. Cela garantit que seule l'activité dans le champ de vision requis est mesurée.

{% include image.html url="/assets/img/installation_tabs/tabs_motion_pir.png" description="Banner" %}

Portée de détection sans capuchon

**Instructions d'installation :**


| --- | --- |
| **1.** **Activation du capteur sans fil** <br>- Nos capteurs sans fil sont livrés avec des piles préinstallées. Pour activer, retirez l'onglet d'isolation de la pile d'expédition du capteur.<br>- Après environ une minute, la LED du capteur devrait commencer à clignoter de façon intermittente. | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_0.png" description="Banner" %}|
| **2.** **Préparation du capteur pour la fixation** <br><br>- Si vous fixez le capteur à l'aide d'un ruban adhésif approprié, placez le ruban du côté opposé au code QR. | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_1.png" description="Banner" %}|
| **3.** **Enregistrement du capteur avec l'application Deploy-M [iOS &amp; Android]** <br><br>- Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare<br>- Connectez-vous avec vos identifiants ; en cas de doute ou si vous avez besoin d'aide, contactez [installation@microshare.io](mailto:installation@microshare.io) | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_2.png" description="Banner" %} |
| - Sélectionnez le cluster d'appareils correct pour les appareils que vous installez. <br> Remarque – un « Device Cluster » est simplement un regroupement de capteurs, généralement dans un même espace, qui aide à identifier et annoter les données reçues de votre solution Microshare.| {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_3.png" description="Banner" %}  |
| - Sélectionnez l'emplacement correct où l'appareil sera installé.<br>
- Cliquez sur Add | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_4.png" description="Banner" %}  |
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur &#39;RESCAN&#39; pour ouvrir l'appareil photo | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_5.png" description="Banner" %}|
| - Scannez le code QR situé sur le capteur | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_6.png" description="Banner" %}|
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran. | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_7.png" description="Banner" %}|
| **4.** **Fixation du support du capteur** <br><br>- Une fois l'enregistrement du capteur terminé dans l'application Deploy-M, vous pouvez fixer le capteur en place.<br>- Ce capteur est généralement installé le long du haut d'un cadre de porte (à l'intérieur de la pièce), avec l'élément de détection orienté vers le bas et le code QR face à vous. S'il n'y a pas d'espace en haut du cadre, l'appareil peut également être installé en haut à droite ou à gauche du cadre, selon le sens d'ouverture de la porte – l'essentiel est que l'élément de détection soit orienté vers le bas et vers l'intérieur de la pièce surveillée. <br>- À l'aide de l'adhésif du capteur, fixez le capteur en laissant le code QR visible et le capteur orienté vers le bas comme indiqué. | {% include image.html url="/assets/img/installation_tabs/activity_monitor/activity_monitor_8.png" description="Banner" %}|



Une fois l'installation terminée, ou si vous avez besoin d'assistance, contactez <installation@microshare.io>


<style>
    tr td:first-child {
        width:60%;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
