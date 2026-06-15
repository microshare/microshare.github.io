---
layout: docs
title: Guide d'installation de la surveillance d'occupation des salles
description: Comment installer une solution Microshare Room Occupancy Monitoring
lang: fr
translation_of: docs/2/installer/specific-installations/room-occupancy-installation.md
translations:
  en: /docs/2/installer/specific-installations/room-occupancy-installation
  fr: /docs/2/fr/installer/specific-installations/room-occupancy-installation
toc: true
---

---------------------------------------

Guide d'installation de la solution Room Occupancy Monitoring

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

### SC03 – Room Occupancy Monitoring

La solution Room Occupancy Monitoring de Microshare est un service de détection complet pour mieux gérer la disponibilité et l'utilisation des salles de réunion et autres espaces partagés.

Que contient la boîte ? Pour un déploiement rapide, la solution Room Occupancy Monitoring de Microshare comprend des capteurs sans fil alimentés par batterie à longue durée de vie (jusqu'à deux ans), faciles à installer discrètement dans les salles de réunion, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare for Business ou l'accès API direct aux données via le Microshare Smart Network.

{% include image.html url="/assets/img/installation_tabs/tabs_motion_pir.png" description="Banner" %}

Portée de détection sans capuchon

**Instructions d'installation :**

| --- | --- |
| **1.** **Activation du capteur sans fil** <br>- Nos capteurs sans fil sont livrés avec des piles préinstallées. Pour activer, retirez l'onglet d'isolation de la pile d'expédition du capteur.<br>- Après environ une minute, la LED du capteur devrait commencer à clignoter de façon intermittente. | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_0.png" description="Banner" %}|
| **2.** **Préparation du capteur pour la fixation** <br><br>- Si vous fixez le capteur à l'aide d'un ruban adhésif approprié, placez le ruban du côté opposé au code QR. | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_1.png" description="Banner" %}|
| **3.** **Enregistrement du capteur avec l'application Deploy-M [iOS &amp; Android]** <br><br>- Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare<br>- Connectez-vous avec vos identifiants ; en cas de doute ou si vous avez besoin d'aide, contactez [installation@microshare.io](mailto:installation@microshare.io) | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_2.png" description="Banner" %} |
| - Sélectionnez le cluster d'appareils correct pour les appareils que vous installez. <br> Remarque – un « Device Cluster » est simplement un regroupement de capteurs, généralement dans un même espace, qui aide à identifier et annoter les données reçues de votre solution Microshare.| {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_3.png" description="Banner" %}  |
| - Sélectionnez l'emplacement correct où l'appareil sera installé.<br>
- Cliquez sur Add | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_4.png" description="Banner" %}  |
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur &#39;RESCAN&#39; pour ouvrir l'appareil photo | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_5.png" description="Banner" %}|
| - Scannez le code QR situé sur le capteur | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_6.png" description="Banner" %}|
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran. | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_7.png" description="Banner" %}|
| **4.** **Fixation du support du capteur** <br><br>- Retirez l'autocollant à l'arrière du support fourni et fixez-le au plafond ou sur une autre surface offrant un bon point de vue sur la pièce.<br>- À l'aide de l'image du champ de vision ci-dessus, installez l'appareil à une position et un angle qui placent au mieux l'espace dans la portée de l'élément de détection. En général, ces appareils sont installés au milieu de la pièce, à l'intersection du mur et du plafond. | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_8.png" description="Banner" %}|
| **5.** **Fixation du capteur** <br><br>- Une fois l'enregistrement du capteur terminé dans l'application Deploy-M, vous pouvez fixer le capteur en place. <br> - À l'aide de la pastille adhésive sur le capteur, fixez-le au support en laissant le code QR visible, à un angle d'environ 45 degrés avec le capteur PIR et la LED orientés vers l'intérieur de la pièce | {% include image.html url="/assets/img/installation_tabs/room_occupancy/room_occupancy_9.png" description="Banner" %}|



<style>
    tr td:first-child {
        width:60%;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
