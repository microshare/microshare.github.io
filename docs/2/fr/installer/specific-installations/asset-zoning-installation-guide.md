---
layout: docs
title: Guide d'installation Asset Zoning
description: Comment installer une solution Microshare Asset Zoning
lang: fr
translation_of: docs/2/installer/specific-installations/asset-zoning-installation-guide.md
translations:
  en: /docs/2/installer/specific-installations/asset-zoning-installation-guide
  fr: /docs/2/fr/installer/specific-installations/asset-zoning-installation-guide
toc: true
---

---------------------------------------

Guide d'installation Asset Zoning

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

### ST01 – Asset Zoning

La solution Asset Zoning de Microshare est un service de détection complet pour les gestionnaires d'installations souhaitant surveiller et suivre l'emplacement des actifs clés dans leurs locaux.

Que contient la boîte ? Pour un déploiement rapide, la solution Asset Zoning de Microshare comprend des scanners IoT faciles à installer, des marqueurs de localisation et des étiquettes d'actifs individuelles, la connectivité des appareils, l'accès aux données et aux alertes via les tableaux de bord Microshare Business Tools ou l'accès API direct aux données via le Microshare Smart Network.

**Instructions d'installation :**

| --- | --- |
| **1.** **Installation du Kerlink Wave** <br> - L'appareil Wave fait le lien entre vos Asset Tags et le Microshare Smart Network. Les données des étiquettes sont reçues/scannées par le Wave lorsqu'elles entrent à proximité de l'appareil, puis transmises à la passerelle LoRaWAN et au Microshare Smart Network. <br> - Sortez le Kerlink Wave de l'emballage |{% include image.html url="/assets/img/UCT_Install_Images/AssetZoning_WaveScanner.png" description="Banner" %}|
| **2.** **Déploiement du Kerlink Wave (sans vis – si vous utilisez des vis, passez cette étape)** <br> - Si vous n'utilisez pas de vis, collez les pastilles adhésives à l'arrière de l'appareil comme indiqué sur l'image. |{% include image.html url="/assets/img/UCT_Install_Images/DeployingKerlink.png" description="Banner" %}|
| **3.** **Enregistrement du Kerlink Wave** <br> - À l'aide de l'appareil de scan, scannez le code QR sur le Wave dans la feuille de calcul Excel « Digital Twinning » fournie <br> - Nous utilisons généralement trois **tags** pour annoter l'emplacement d'un appareil – par exemple **« Building A, Floor 2, Room 5 »** <br> Vous trouverez un exemple ici : [Data Format](/docs/2/technical/data-format/microshare-standards/#d-metaiot) |{% include image.html url="/assets/img/UCT_Install_Images/RegisteringKerlink.png" description="Banner" %}|
| **4.** **Mise sous tension du Kerlink Wave** <br> - Branchez le câble secteur sur la prise murale – branchez l'autre extrémité sur le Kerlink Wave <br> - Un voyant vert s'allume une fois l'appareil alimenté |{% include image.html url="/assets/img/UCT_Install_Images/PoweringKerlink.png" description="Banner" %}|
| **5.** **Fixation du Kerlink Wave** <br> - Utilisez les pastilles adhésives pour coller le Wave à l'emplacement prédéfini, en veillant à ce que le câble reste correctement connecté |{% include image.html url="/assets/img/UCT_Install_Images/InstallingKerlink.png" description="Banner" %}|
| **6.** **Si vous utilisez des vis pour fixer le Kerlink Wave** <br> - Ouvrez les caches du Kerlink Wave pour exposer les trous de vis – marquez et percez des trous adaptés et utilisez des chevilles si nécessaire. <br> - Fixez le Wave au mur avec des vis de taille appropriée. |{% include image.html url="/assets/img/UCT_Install_Images/ScrewingKerlink3.png" description="Banner" %}|
| **7.** **Enregistrement avec l'application Deploy-M [iOS & Android]** <br> - Vous devriez déjà disposer de l'application Deploy-M et des identifiants de connexion dans le cadre de la configuration de votre projet avec Microshare <br> - Connectez-vous avec vos identifiants ; en cas de doute ou si vous avez besoin d'aide, contactez [installation@microshare.io](mailto:installation@microshare.io) |{% include image.html url="/assets/img/leak-installation/Image12.png" description="Banner" %}|
| - Sélectionnez le cluster d'appareils correct pour les appareils que vous installez. <br> Remarque – un « Device Cluster » est simplement un regroupement de capteurs, généralement dans un même espace, qui aide à identifier et annoter les données reçues de votre solution Microshare.|{% include image.html url="/assets/img/leak-installation/Image13.png" description="Banner" %}|
| - Sélectionnez l'emplacement correct où l'appareil sera installé. <br> - Cliquez sur Add |{% include image.html url="/assets/img/leak-installation/Image14.png" description="Banner" %}|
| - Une fois le capteur ajouté au bon emplacement dans l'application, cliquez sur RESCAN pour ouvrir l'appareil photo |{% include image.html url="/assets/img/leak-installation/Image15.png" description="Banner" %}|
| - Scannez le code QR situé sur le capteur |{% include image.html url="/assets/img/Asset_Zoning_Installation/DeployM_Wave_Scan.jpg" description="Banner" %}|
| - Vérifiez que le Dev EUI [généralement sur l'appareil sous le code QR] affiché correspond à celui de votre appareil, puis sélectionnez save en bas de l'écran. |{% include image.html url="/assets/img/leak-installation/Image17.png" description="Banner" %}|
| **8.** **Déploiement des Asset Tags** <br> - Ouvrez l'emballage et sortez les Microshare Asset Tags |{% include image.html url="/assets/img/UCT_Install_Images/LocationMarkerBoxed.jpg" description="Banner" %}|
| **9.** **Sortie de l'appareil de l'emballage** <br> - Retirez l'emballage transparent des Asset Tags<br><br>-REMARQUE : Il existe plusieurs formats d'Asset Tags. La Microshare C10 Card et la Microshare E9 tag illustrées dans ces images sont fixées aux actifs que vous souhaitez suivre |{% include image.html url="/assets/img/UCT_Install_Images/CardBeacon.png" description="Banner" %} <br> {% include image.html url="/assets/img/UCT_Install_Images/LocationMarker.png" description="Banner" %}|
| **10.** **Mise sous tension des Asset Tags** <br> - Pour mettre sous tension la Microshare C10 card, appuyez sur le côté de l'appareil portant le symbole Power comme indiqué. Un voyant rouge commence à clignoter – cela indique que l'appareil est sous tension. |{% include image.html url="/assets/img/UCT_Install_Images/PoweringLocationTag.png" description="Banner" %}|
| - Pour les Microshare E9 Asset Tags, dévissez simplement le capot pour exposer le logement de la pile et retirez l'onglet plastique d'isolation utilisé pour le transport. | {% include image.html url="/assets/img/UCT_Install_Images/B7_LocationMarker.jpg" description="Banner" %}|
| **11.** **Pose du ruban adhésif** <br> - Collez le ruban adhésif sur le côté de l'appareil portant le symbole d'alimentation comme indiqué |{% include image.html url="/assets/img/UCT_Install_Images/LocationWith3M.png" description="Banner" %}|
| **12.** **Fixation des Asset Tags** <br> - Collez l'appareil sur l'actif prédéfini à l'aide du ruban adhésif fourni sur l'appareil, ou utilisez <br>- Assurez-vous que le code QR reste visible – comme sur l'image. |{% include image.html url="/assets/img/UCT_Install_Images/LocationFixOnWall.png" description="Banner" %}|



**Une fois l'enregistrement du Wave Scanner terminé dans l'application Deploy-M, vous pouvez enregistrer les Asset Tags.**

| --- | --- |
| **1.** **Enregistrement de vos Asset Tags** <br> - Lors du suivi de plusieurs actifs, nous recommandons d'utiliser un scanner QR portable pour obtenir les ID d'appareil. <br> - Connectez-vous au portail web Microshare Asset Zoning Management avec les identifiants dédiés fournis.|{% include image.html url="/assets/img/UCT_Install_Images/RegisteringLocationTags.png" description="Banner" %}|
| **2.** **Renseignez les champs avec précision pour votre installation spécifique. Ne pas capturer les bonnes informations à ce stade créera des problèmes de gestion des données pour votre instance** <br>-**ID** : Il s'agit de l'ID de l'Asset Tag ; le code QR de l'appareil le contient <br> - **Type** : Ce champ indique le type d'actif suivi (Equipment, Machine, Vehicle par exemple) <br> - **Category** : Sous-catégorie du type d'actif (Equipment > Wheelchair, Vehicle > Forklift, Machine > Printer par exemple) <br> - **Label** : Permet d'attribuer un libellé unique à votre actif pour l'identifier dans votre flux de données (Wheelchair-A23, Forklift-7 par exemple) <br>- **External_ID** : Ce champ optionnel peut être utilisé pour identifier davantage les éléments dans votre instance de données |{% include image.html url="/assets/img/Asset_Zoning_Installation/AssetZoning_ManagementScreen1.png" description="Banner" %}|



**Pour les listes d'actifs plus importantes, nous recommandons de créer un fichier CSV avec tous les détails pertinents et d'utiliser des ID d'Asset Tag fictifs afin de scanner et écraser avec l'appareil réel à l'aide du scanner QR**

<style>
    tr td:first-child {
        width:60%;
        vertical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
