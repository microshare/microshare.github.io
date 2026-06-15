---
layout: docs
title: Installation des Feedback Stations
description: Comment installer une solution Feedback Station
lang: fr
translation_of: docs/2/installer/specific-installations/feedback-station-installation-guide.md
translations:
  en: /docs/2/installer/specific-installations/feedback-station-installation-guide
  fr: /docs/2/fr/installer/specific-installations/feedback-station-installation-guide
toc: true
---

---------------------------------------

Guide d'installation des Feedback Stations

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

SF01 – Feedback Stations

La solution Feedback Stations de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant recueillir des retours exploitables auprès des employés et visiteurs dans leurs locaux.

Que contient la boîte ? Pour un déploiement rapide, la solution Feedback Stations de Microshare comprend des stations de feedback sans fil alimentées par batterie à longue durée de vie avec des options de feedback personnalisables, faciles à installer dans les bâtiments, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare for Business ou l'accès API direct aux données via le Microshare Smart Network. Les Feedback Stations sont fournies avec des piles [2 piles Lithium AA 3,6 V requises], un panneau arrière prépersonnalisé et des bandes adhésives si nécessaire.


**Instructions d'installation :**

| --- | --- |
| **1.** **Insertion des piles** <br> - Insérez les deux piles Lithium AA 3,6 V comme indiqué.  | {% include image.html url="/assets/img/feedback-station/feedbackstation_1.png" description="Banner" %}|
| **2.** **Fixation des Feedback Stations sur les panneaux arrière** <br> - Placez l'arrière de l'appareil de feedback sur le panneau arrière comme indiqué (les pieds en caoutchouc aux coins doivent maintenant être face à vous), puis placez l'appareil par-dessus comme ci-dessous.|{% include image.html url="/assets/img/feedback-station/feedbackstation_2.png" description="Banner" %}|
| **3.** **Fixation des Feedback Stations sur les panneaux arrière** <br> - À l'aide des 4 vis, fixez la station de feedback au panneau arrière  |{% include image.html url="/assets/img/feedback-station/feedbackstation_3.png" description="Banner" %} |
| **4.** **Pose des bandes adhésives au dos des panneaux arrière** <br> - Placez les bandes adhésives double face fournies au dos du panneau arrière|{% include image.html url="/assets/img/feedback-station/feedbackstation_4.png" description="Banner" %}|
| **5.** **Notez le code sur l'étiquette à côté de l'emplacement de la station dans la feuille de calcul fournie** | {% include image.html url="/assets/img/feedback-station/feedbackstation_5.png" description="Banner" %}|
| **6.** **Fixation de la Feedback Station assemblée** <br> - Une fois terminé, retirez l'adhésif au dos et fixez le panneau arrière au mur à l'emplacement prédéfini |{% include image.html url="/assets/img/feedback-station/feedbackstation_6.png" description="Banner" %}|
| **7.** **Enregistrement du capteur avec l'application Deploy-M [iOS & Android]** <br> - Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare <br> - Connectez-vous avec les identifiants envoyés lors de la configuration. | {% include image.html url="/assets/img/leak-installation/Image12.png" description="Banner" %} |
| - Sélectionnez le cluster d'appareils pour les appareils que vous installez. | {% include image.html url="/assets/img/leak-installation/Image13.png" description="Banner" %} |
| - Sélectionnez l'emplacement correct où l'appareil sera installé. <br> - Cliquez sur Add | {% include image.html url="/assets/img/leak-installation/Image14.png" description="Banner" %} |
| - Une fois la Feedback Station ajoutée au bon emplacement dans l'application, cliquez sur « RESCAN » pour ouvrir l'appareil photo | {% include image.html url="/assets/img/leak-installation/Image15.png" description="Banner" %} |
| - Scannez le code QR situé sur la Feedback Station |{% include image.html url="/assets/img/feedback-station/feedbackstation_7.png" description="Banner" %}|
| - Vérifiez que le Dev EUI [généralement le deuxième code sur le capteur sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran.  | {% include image.html url="/assets/img/leak-installation/Image17.png" description="Banner" %} |

<style>
    tr td:first-child {
        width:60%;
        vertical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
