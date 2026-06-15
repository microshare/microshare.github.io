---
layout: docs
title: Manuel d'installation Kerlink iFemtocell Evolution
description: Comment la configurer ?
lang: fr
translation_of: docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell-evo.md
translations:
  en: /docs/2/installer/lorawan/gateway-installations/indoor-ifemtocell-evo
  fr: /docs/2/fr/installer/lorawan/gateway-installations/indoor-ifemtocell-evo
toc: true
---

---------------------------------------
#### Sommaire :

1. [Avertissement](./#avertissement)
2. [Installation de la passerelle LoRaWAN intérieure](./#installation-de-la-passerelle-lorawan-interieure)
3. [Contenu de la boîte](./#contenu-de-la-boite)
4. [Instructions d'installation](./#instructions-dinstallation)


**Contactez `installation@microshare.io` si vous avez besoin d'aide.**

---------------------------------------

## Avertissement
---------------------------------------

Les informations contenues dans ce document sont fournies en lien avec les solutions Microshare. Rien dans ou sur la publication ne doit être interprété comme accordant une licence en vertu d'un droit de propriété intellectuelle, y compris tout droit de nature marque ou droit d'auteur, de Microshare. Microshare interdit expressément l'utilisation non autorisée de ses logos, marques ou autres graphiques, qu'ils soient enregistrés ou non, y compris, sans limitation, Microshare et <em>Unleash the Data</em>. Toutes les marques déposées sont enregistrées aux États-Unis d'Amérique (et/ou dans d'autres juridictions applicables).

Sauf disposition contraire dans les Conditions de service Microshare et autres conditions de vente des solutions Microshare, Microshare n'assume aucune responsabilité. Le paragraphe suivant ne s'applique pas dans tout pays où de telles dispositions sont incompatibles avec la loi locale : Microshare fournit cette publication « en l'état » sans garantie d'aucune sorte, expresse ou implicite, y compris, mais sans s'y limiter, les garanties implicites de non-contrefaçon, de qualité marchande ou d'adéquation à un usage particulier. Certains États n'autorisent pas l'exclusion des garanties expresses ou implicites dans certaines transactions ; par conséquent, cette déclaration peut ne pas s'appliquer à vous.

Les solutions Microshare doivent être utilisées uniquement pour leurs applications prévues, telles que recommandées par Microshare ou leur fabricant tiers, et ne sont pas conçues, destinées ou autorisées pour des applications critiques, y compris, mais sans s'y limiter, le maintien des fonctions vitales, la santé et la sécurité, l'aviation, le nucléaire et les applications de sécurité, ou pour toute autre application dans laquelle la défaillance du produit Microshare pourrait créer une situation où des blessures corporelles ou la mort pourraient survenir.

Si vous installez des produits dans une propriété détenue, exploitée ou gérée par un tiers ou où d'autres personnes vivent, travaillent ou sont autrement présentes (collectivement, « Autres parties »), vous déclarez et garantissez à Microshare que vous avez informé ces Autres parties, dans la mesure requise par la loi, et obtenu toutes les approbations, permissions, consentements et autorisations, si et selon les exigences de ces Autres parties, pour l'installation et l'exploitation du produit sur le site d'installation, l'utilisation du produit pour permettre à des personnes, y compris des livreurs, d'accéder au site sans accompagnement pour des livraisons à vous et à d'autres, et le retrait du produit. Vous déclarez et garantissez en outre à Microshare que l'emplacement où le produit est installé est sûr pour les personnes qui accèdent à la propriété.

 
* Utiliser vos solutions Microshare en toute sécurité  

    * Respectez les exigences en matière de batterie indiquées avant d'installer des piles. 

    * Ne forcez jamais un connecteur dans un port. Si le connecteur et le port ne s'emboîtent pas facilement, ils ne correspondent probablement pas. Assurez-vous que le connecteur correspond au port et que vous avez correctement positionné le connecteur par rapport au port. 

    * Protégez les capteurs Microshare de la lumière directe du soleil, dans la mesure du possible. 

    * Utilisez les solutions Microshare dans des environnements conformes à leurs spécifications. La plupart des produits sont destinés à un usage intérieur uniquement. 

    * Il n'y a pas de pièces réparables par l'utilisateur à l'intérieur des capteurs Microshare. Pour le personnel de maintenance : débranchez toujours l'alimentation externe, retirez les piles et éteignez la batterie UPS avant toute opération de maintenance. 

    * Les capteurs Microshare peuvent être endommagés par un stockage ou une manipulation inappropriés. Veillez à ne pas les faire tomber pendant le transport et l'installation. 
{% include image.html width=400 url="/assets/img/ifemtocell-evo/disclaimer-pic.png" description="LoRaWan Technology" %}
   
**AVERTISSEMENT :** N'essayez pas d'ouvrir ou de démonter les solutions Microshare. Vous risquez une décharge électrique et l'annulation de la garantie limitée. Aucune pièce réparable par l'utilisateur ne se trouve à l'intérieur. 

 

Ces informations peuvent contenir des inexactitudes techniques ou des erreurs typographiques. Des modifications sont périodiquement apportées aux informations contenues dans ce document ; ces modifications seront incorporées dans les nouvelles éditions de la publication. Microshare peut apporter des améliorations et/ou des modifications aux produits et/ou aux programmes décrits dans cette publication à tout moment et sans préavis.


## Installation de la passerelle LoRaWAN intérieure
---------------------------------------
La passerelle LoRaWAN intérieure de Microshare reçoit les transmissions radio des appareils IoT Microshare déployés dans et autour de votre bâtiment et utilise une connexion Ethernet standard à votre réseau, ou alternativement la connexion cellulaire/mobile intégrée pour envoyer les données en toute sécurité vers le Microshare Smart Network™.

La passerelle est très facile à installer, que ce soit par câble ou sans fil. Dans les deux cas, il suffit généralement de brancher l'équipement et en quelques minutes elle sera opérationnelle, l'option filaire offrant une fiabilité de transmission des données améliorée. La passerelle LoRaWAN est un appareil radio et fonctionnera donc mieux lorsqu'elle est installée à l'écart des grands objets métalliques et des cloisons.

Si vous utilisez l'option de backhaul cellulaire (4G), des performances optimales seront obtenues si l'emplacement physique d'installation choisi permet un bon signal cellulaire et est situé de manière centrale par rapport aux appareils IoT que vous utiliserez dans votre établissement. Microshare peut vous aider à tirer le meilleur parti de votre installation.

## Contenu de la boîte
---------------------------------------
Pour un déploiement rapide, la passerelle intérieure peut être branchée sur votre réseau existant via un câble Ethernet standard vers un commutateur ou un routeur avec accès Internet. Alternativement, si l'ajout à un réseau n'est pas une option, la passerelle est livrée préconfigurée avec la carte SIM 4G déjà activée. Dans la boîte, vous trouverez la passerelle intérieure, l'antenne de l'appareil, l'unité d'alimentation et un câble Ethernet. L'installation permet la connectivité des appareils IoT et l'accès aux données via l'API Microshare Smart Network, ou les alertes et tableaux de bord de données via Microshare Business Tools™.

Microshare livre la passerelle Kerlink iFemtocell Evolution prête à être ajoutée à votre réseau informatique existant. Tout ce que vous avez à faire pour que votre réseau LoRaWAN soit opérationnel est de :

1. Connecter l'antenne.
2. Brancher sur une source d'alimentation secteur.
3. Connecter à votre réseau avec un câble Ethernet et attendre 1 à 2 minutes pour que la connexion soit établie.

## Instructions d'installation
---------------------------------------


### 1. Déballage de la passerelle
---------------------------------------
Retirez tous les composants de la boîte et enlevez tout l'emballage des appareils. La boîte contient la ou les passerelle(s) intérieure(s), la ou les antenne(s) de l'appareil et la ou les unité(s) d'alimentation.

<br>
{% include image.html width=400 url="/assets/img/ifemtocell-evo/Femto-evo-1-800x800.png" description="LoRaWan Technology" %}

### 2. Connexion de l'antenne
---------------------------------------
Vissez l'antenne sur le connecteur doré situé sur le côté droit de la passerelle.

<br>
{% include image.html width=400 url="/assets/img/ifemtocell-evo/Femto-evo-2-800x800.png" description="LoRaWan Technology" %}
 


### 3. Alimenter la passerelle
---------------------------------------
Branchez l'adaptateur secteur dans la prise d'alimentation de la passerelle.

<br>
{% include image.html width=400 url="/assets/img/ifemtocell-evo/Femto-evo-3-800x800.png" description="LoRaWan Technology" %}

<br>
Branchez l'adaptateur secteur sur une prise électrique (les LED de l'appareil seront rouges, indiquant que l'alimentation est activée).

<br>
{% include image.html width=400 url="/assets/img/ifemtocell-evo/Femto-evo-4-800x800.png" description="LoRaWan Technology" %}

<br>
### 4. Connexion à votre réseau
---------------------------------------
Branchez un câble Ethernet standard avec accès Internet sur votre passerelle.

<br>

{% include image.html width=400 url="/assets/img/ifemtocell-evo/femto-evo-new2.png" description="LoRaWan Technology" %}
<br>
Après 1 à 2 minutes, les deux LED à l'avant deviendront vertes fixes ; votre passerelle LoRaWAN est maintenant opérationnelle et vos capteurs peuvent être déployés dans votre bâtiment.
<br>
{% include image.html width=400 url="/assets/img/ifemtocell-evo/femto-evo-new1.png" description="LoRaWan Technology" %}
{% include image.html width=400 url="/assets/img/ifemtocell-evo/Femto-evo-5.png" description="LoRaWan Technology" %}

<br>
**C'est terminé !**
Veuillez envoyer un e-mail à `installation@microshare.io` pour indiquer que votre passerelle est opérationnelle, afin que nous puissions le confirmer de notre côté.

#### 4A. Post-installation

Dans la plupart des cas, lors de la connexion à un réseau existant, la passerelle devrait communiquer immédiatement. Sinon, votre administrateur réseau devra peut-être ouvrir les ports suivants :
* Protocole : OpenVPN
* Port : 1194 UDP
<br>
* Protocole : ICMP
* (aucun numéro de port requis)

<br>
Pour une sécurité supplémentaire, les 2 protocoles ci-dessus peuvent être restreints à l'adresse IP de notre serveur :
[https://microshare.wanesy.com/](https://microshare.wanesy.com/)
Vous pouvez également déployer nos passerelles sur un VLAN dédié pour une séparation supplémentaire de votre réseau.


#### 4B. Installation de votre passerelle avec l'option de backhaul 4G préconfigurée

Comme alternative au déploiement de la passerelle intérieure sur votre réseau existant, Microshare livre la Kerlink iFemtocell Evolution préconfigurée avec une carte SIM 4G déjà activée. Sachez que certaines applications telles que le Contact Tracing et le zonage d'actifs nécessitent une connexion Internet très forte et peuvent ne pas fonctionner correctement si le signal 4G n'est pas adéquat à l'emplacement où vous installez la passerelle.

Si vous utilisez la 4G, suivez simplement ces étapes :

1. Connecter l'antenne
2. Brancher sur une source d'alimentation secteur
3. Attendre 1 à 2 minutes pour que la connexion de la carte SIM soit établie et les 2 LED deviendront vertes fixes pour indiquer que la connexion est établie.

**C'est terminé !**

Veuillez envoyer un e-mail à `Installation@microshare.io` pour indiquer que votre passerelle est opérationnelle, afin que nous puissions le confirmer de notre côté.


### La passerelle apparaît hors ligne — dépannage
---------------------------------------

1) Vérifiez que l'appareil est toujours installé à l'emplacement prévu

2) Y a-t-il deux voyants verts fixes sur la passerelle ?
* S'il n'y a pas de voyants, vérifiez que la passerelle est toujours connectée au secteur via le câble fourni.
* S'il y a un voyant vert fixe et un autre clignotant en vert ou fixe en rouge, cela signifie que l'appareil n'est pas connecté au réseau.
     <br> -Si vous utilisez la connectivité cellulaire, vérifiez que la carte SIM est correctement insérée (elle se trouve au bas de l'appareil)
     <br> -Si vous utilisez l'Ethernet, vérifiez que le câble Ethernet est connecté à la fois à la passerelle et au routeur
* S'il n'y a pas de voyants, vérifiez que la passerelle est toujours connectée au secteur via le câble fourni.

3) Vous saurez que le problème est résolu lorsqu'il y a deux voyants verts fixes sur l'appareil

4) Si vous rencontrez toujours des problèmes — veuillez contacter notre équipe d'assistance 24h/24 à `support@microshare.io`

