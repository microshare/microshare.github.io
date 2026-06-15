---
layout: docs
title: Installation du Contact Tracing
description: Comment installer une solution Microshare™ Contact Tracing
lang: fr
translation_of: docs/2/installer/specific-installations/universal-contact-tracing-installation-guide.md
translations:
  en: /docs/2/installer/specific-installations/universal-contact-tracing-installation-guide
  fr: /docs/2/fr/installer/specific-installations/universal-contact-tracing-installation-guide
toc: true
---

**Guide de configuration et d'installation**

_Nous avons livré et installé des milliers de capteurs pour des clients du monde entier dans un large éventail d'applications ; n'hésitez pas à nous contacter si vous avez besoin d'aide. Notre équipe d'experts est à votre disposition pour vous accompagner._

Contactez [`installation@microshare.io`](mailto:installation@microshare.io) si vous avez besoin d'assistance

---------------------------------------

### ST05 – Universal Contact Tracing (UCT)

La solution Universal Contact Tracing de Microshare est un service de détection complet pour les organisations souhaitant offrir un environnement de travail plus sûr en permettant la surveillance et l'alerte anonymes des contacts humain-à-humain et humain-à-lieu dans un environnement de travail tel qu'une usine, un bureau ou un chantier.

Que contient la boîte ? La solution Contact Tracing de Microshare comprend :

* `Des appareils portables Bluetooth alimentés par batterie [avec attaches bracelet, brassard et/ou tour de cou]`

* `Des marqueurs de localisation Bluetooth [avec bandes adhésives]`

* `Des appareils Wave`

* `Des passerelles LoRaWAN`

* `Un appareil portable de scan QR USB`

Nos solutions incluent également la connectivité des appareils, l'accès API direct et l'accès aux données en streaming via le Microshare Smart Network.

Outre l'installation du matériel, des processus de données doivent être configurés de votre côté pour mettre en œuvre la solution UCT de Microshare. Ce document couvre à la fois les étapes de configuration des données et les étapes requises pour l'installation du matériel.

Nous recommandons d'installer/activer le matériel dans l'ordre suivant. Après l'installation/activation de chaque appareil, vous pouvez envoyer un e-mail à [`installation@microshare.io`](mailto:installation@microshare.io) pour confirmer que chaque composant est configuré et s'enregistre correctement sur le réseau :

* `1.   Passerelle LoRaWAN`

* `2.   Appareils Wave`

* `3.   Marqueurs de localisation`

* `4.   Appareils portables`

---------------------------------------

#### Sections du guide et étapes d'installation :
<br>
[Section 1 – Étapes de test de streaming des données avant installation](./#section-1---pre-installation-data-streaming-test-steps)

[Section 2 – Étapes de configuration du matériel et instructions d'installation de la passerelle LoRaWAN](./#section-2--lorawan-gateway-install-instructions)

[Section 3 – Configuration du Wave](./#section-3---installing-the-kerlink-wave)

[Section 4 – Configuration des marqueurs de localisation](./#section-4---set-up-the-location-markers)

[Section 5 – Activation et désactivation des appareils portables](./#section-5--activate-the-wearable-devices)

   A. [Activer mon appareil portable (B7)](./#a--activate-my-wearable-device-b7)

   B. [Activer et désactiver mon appareil portable de type carte (C10)](./#b--activate-and-deactivate-my-card-type-wearable-device-c10)

[Section 6 – Passage à une installation en production](./#section-6--move-to-a-live-installation)

---------------------------------------

## Section 1 - Étapes de test de streaming des données avant installation

*   Configurer le service de streaming pour recevoir des données de test

*   Une fois configuré, partagez de manière sécurisée vos informations de point de terminaison avec Microshare pour permettre la réception des données de test

*   Recevez des données de streaming de test et commencez à créer des artefacts pour analyser les données

**Vue d'ensemble du service de streaming**

Pour Universal Contact Tracing, nous fournissons une intégration en streaming via plusieurs services. Les données Contact Tracing vous seront diffusées via l'un de ces services et vous pourrez créer des tableaux de bord, des rapports et/ou des alertes dans vos propres outils.

Services d'intégration en streaming :

**>** [Microsoft Azure Event Hub](http://docs.microshare.io/docs/2/technical/streaming-integration/azure-event-hub-integration/)

**>** [Microsoft Azure IoT Hub](http://docs.microshare.io/docs/2/technical/streaming-integration/azure-iot-hub-integration/)

**>** [AWS Kinesis](http://docs.microshare.io/docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration/)

**>** [AWS SQS](http://docs.microshare.io/docs/2/technical/streaming-integration/aws-sqs-integration/)

**>** [Google Pub/Sub](http://docs.microshare.io/docs/2/technical/streaming-integration/google-pub-sub-integration/)

Nous pouvons vous diffuser un ensemble de données de test UCT afin que vous puissiez commencer à créer des tableaux de bord, des rapports et/ou des alertes en attendant l'arrivée et l'installation du matériel. Les étapes ci-dessous décrivent les étapes générales pouvant être utilisées conjointement avec les instructions de streaming spécifiques ci-dessus.

**Configuration**

1.  Utilisez les instructions spécifiques au service de streaming pour configurer votre service de test. Fournissez à votre contact Microshare les informations de point de terminaison demandées (par ex. csv, chaîne de connexion primaire, clé privée, etc.) par un moyen sécurisé

2.  Microshare diffusera des données de test vers votre point de terminaison

3.  Créez des tableaux de bord, des rapports et/ou des alertes à l'aide du flux de données de test

4.  Utilisez les instructions spécifiques au service de streaming pour configurer votre flux de production. Vous pouvez utiliser le même flux précédemment fourni à Microshare ou en créer un nouveau. Fournissez à votre contact Microshare les informations de point de terminaison demandées par un moyen sécurisé

5.  Une fois votre matériel configuré et la création de données confirmée, Microshare commencera à diffuser vos données vers le nouveau point de terminaison

## Section 2 – Instructions d'installation de la passerelle LoRaWAN

*   Recevez les expéditions du matériel requis ; passerelle(s) LoRaWAN, Kerlink Wave, marqueurs de localisation et appareils portables

*   Installez les passerelles LoRaWAN aux emplacements déterminés lors de la réunion Site Checklist

*   Une fois ces étapes terminées, informez Microshare à [`installation@microshare.io`](mailto:installation@microshare.io) afin que nous puissions vérifier que les passerelles transmettent des données avec un bon signal

**Installation des passerelles LoRaWAN**

La passerelle LoRaWAN intérieure avec liaison 4G de Microshare reçoit les transmissions radio des appareils IoT Microshare déployés dans et autour de votre bâtiment et utilise une connexion cellulaire/mobile intégrée pour envoyer les données en toute sécurité au Microshare Smart Network.

Assurez-vous que l'emplacement physique choisi pour l'installation permettra un bon signal cellulaire et qu'il est central par rapport aux appareils IoT que vous utiliserez dans votre établissement. Contactez Microshare si vous avez des questions sur le meilleur emplacement pour installer la passerelle. Un mauvais placement entraînera de mauvaises performances du système global.

**Instructions d'installation de la passerelle intérieure :**

Dans la boîte, vous trouverez la passerelle intérieure, l'antenne de l'appareil et l'unité d'alimentation ou l'adaptateur Power over Ethernet (POE). L'installation permet la connectivité des appareils IoT et l'accès aux données via le Microshare Smart Network.

| --- | --- |
| **1.** **Déballage de la passerelle** <br>Déballez votre passerelle intérieure ; pour mettre votre réseau LoRaWAN en service, il vous suffit de :<br>1. Connecter l'antenne<br>2. Brancher sur une source d'alimentation secteur ou un port Power over Ethernet (POE)<br>3. Attendre 1 à 2 minutes pour que la connexion soit établie | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayBox.png" description="Banner" %}|
| **2.** **Connexion de l'antenne** <br><br>- Vissez l'antenne sur le connecteur doré sur le côté droit de la passerelle | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayAntenna2.png" description="Banner" %}|
| |{% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayAntenna.png" description="Banner" %}|
| **3.** **Alimentation de la passerelle** <br><br>- Branchez l'adaptateur secteur sur la prise d'alimentation de la passerelle | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayPower.png" description="Banner" %} |
| -Branchez l'adaptateur secteur sur une prise électrique [les LED de l'appareil seront rouges, indiquant que l'alimentation est active] | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayPower2.png" description="Banner" %}  |
| -Vous pouvez également utiliser l'adaptateur Power Over Ethernet (POE) comme indiqué sur l'image | {% include image.html url="/assets/img/UCT_Install_Images/POE_Adaptor1.jpg" description="Banner" %}  |
| **4.** **Attendre 1 à 2 minutes** <br><br> -Après 1 à 2 minutes, les deux LED à l'avant deviendront vertes fixes ; votre passerelle LoRaWAN est opérationnelle et vos capteurs peuvent être déployés dans votre bâtiment. **C'est terminé !** Veuillez envoyer un e-mail à [`installation@microshare.io`](mailto:installation@microshare.io) pour indiquer que votre passerelle est opérationnelle, afin que nous puissions le confirmer de notre côté. | {% include image.html url="/assets/img/UCT_Install_Images/POE_Adaptor2.jpg" description="Banner" %} |

**Si vous installez une passerelle extérieure, consultez [https://docs.microshare.io/docs/2/installer/lorawan/gateway-installations/outdoor-istation/](https://docs.microshare.io/docs/2/installer/lorawan/gateway-installations/outdoor-istation/) pour les instructions d'installation de la passerelle extérieure**

## Section 3 - Installation du Kerlink Wave :

L'appareil Wave fait le lien entre vos appareils portables et le Microshare Smart Network. Les données des appareils portables sont reçues/scannées par le Wave lorsqu'ils entrent à proximité de l'appareil, puis transmises à la passerelle LoRaWAN et au Microshare Smart Network.

| --- | --- |
| **1.** **Déballage du Kerlink Wave** <br><br>-Sortez le Kerlink Wave de l'emballage | {% include image.html url="/assets/img/UCT_Install_Images/AssetZoning_WaveScanner.png" description="Banner" %} |
| **2.** **Déploiement du Kerlink Wave (sans vis – si vous utilisez des vis, passez cette étape)** <br><br>-Si vous n'utilisez pas de vis, collez les pastilles adhésives à l'arrière de l'appareil comme indiqué sur l'image. <br id="registerWave"> | {% include image.html url="/assets/img/UCT_Install_Images/DeployingKerlink.png" description="Banner" %}  |
| **3.** **Enregistrement du Kerlink Wave** <br><br>-À l'aide de l'appareil de scan, scannez le code QR au dos du Wave dans la feuille de calcul Excel « Digital Twinning » fournie<br>-Nous utilisons généralement trois **tags** pour annoter l'emplacement d'un appareil – par exemple **« Building A, Floor 2, Room 5 »** <br> Vous trouverez un exemple ici : [Data Format](/docs/2/technical/data-format/microshare-standards/#d-metaiot) | {% include image.html url="/assets/img/UCT_Install_Images/RegisteringKerlink.png" description="Banner" %}  |
| **4.** **Mise sous tension du Kerlink Wave** <br><br> -Branchez le câble secteur sur la prise murale – branchez l'autre extrémité sur le Kerlink Wave <br>-Un voyant vert s'allume une fois l'appareil alimenté | {% include image.html url="/assets/img/UCT_Install_Images/PoweringKerlink.png" description="Banner" %}  |
| **5.** **Installation du Kerlink Wave** <br><br>-Utilisez les pastilles adhésives pour coller le Wave à l'emplacement prédéfini, en veillant à ce que le câble reste correctement connecté | {% include image.html url="/assets/img/UCT_Install_Images/InstallingKerlink.png" description="Banner" %}  |
| **6.** **Si vous utilisez des vis pour fixer le Kerlink Wave** <br><br> -Ouvrez les caches du Kerlink Wave pour exposer les trous de vis – marquez et percez des trous adaptés et utilisez des chevilles si nécessaire.<br>-Fixez le Wave au mur avec des vis de taille appropriée. | {% include image.html url="/assets/img/UCT_Install_Images/ScrewingKerlink3.png" description="Banner" %}|


## Section 4 - Configuration des marqueurs de localisation :

Les marqueurs de localisation existent sous différents formats et peuvent être installés de diverses manières. Les instructions ci-dessous concernent nos appareils les plus répandus. Si vous disposez d'un marqueur non illustré ci-dessous, contactez [`installation@microshare.io`](mailto:installation@microshare.io) si vous avez des questions sur les instructions d'installation.

| --- | --- |
| **1.** **Déballage des appareils** <br><br>-Ouvrez l'emballage et sortez les Microshare Location Markers | {% include image.html url="/assets/img/UCT_Install_Images/LocationMarkerBoxed.jpg" description="Banner" %} |
| **2.** **Sortie de l'appareil de l'emballage** <br><br>-Retirez l'emballage transparent du marqueur de localisation<br><br>-REMARQUE : Il existe plusieurs formats de marqueurs de localisation. La Microshare C10 Card et le marqueur Microshare E9 illustrés dans ces images en sont des exemples | {% include image.html url="/assets/img/UCT_Install_Images/CardBeacon.png" description="Banner" %} |
| | {% include image.html url="/assets/img/UCT_Install_Images/LocationMarker.png" description="Banner" %} |
| **3.** **Mise sous tension des marqueurs de localisation** <br><br>-Pour mettre sous tension la Microshare C10 card, appuyez sur le côté de l'appareil portant le symbole Power comme indiqué. Un voyant rouge commence à clignoter – cela indique que l'appareil est sous tension. | {% include image.html url="/assets/img/UCT_Install_Images/PoweringLocationTag.png" description="Banner" %} |
| -Pour les marqueurs de localisation Microshare B7, dévissez simplement le capot pour exposer le logement de la pile et retirez l'onglet plastique d'isolation utilisé pour le transport. | {% include image.html url="/assets/img/UCT_Install_Images/B7_LocationMarker.jpg" description="Banner" %} |
| **4.** **Pose du ruban adhésif** <br><br>-Collez le ruban adhésif sur le côté de l'appareil portant le symbole d'alimentation comme indiqué | {% include image.html url="/assets/img/UCT_Install_Images/LocationWith3M.png" description="Banner" %} |
| **5.** **Fixation des marqueurs de localisation au mur** <br><br>-Collez l'appareil à l'emplacement prédéfini à l'aide du ruban adhésif fourni sur l'appareil.<br>-Assurez-vous que le code QR reste visible – comme sur l'image. | {% include image.html url="/assets/img/UCT_Install_Images/LocationFixOnWall.png" description="Banner" %} |
| **6.** **Enregistrement du marqueur de localisation** <br><br>-À l'aide de votre appareil de scan, scannez le code QR dans une feuille Excel indiquant l'emplacement physique du marqueur de localisation – fournissez cette feuille à votre équipe d'analyse des données afin qu'elle puisse identifier quand les utilisateurs ont été en contact avec des emplacements spécifiques | {% include image.html url="/assets/img/UCT_Install_Images/RegisteringLocationTags.png" description="Banner" %} |


## Section 5 – Activation des appareils portables

*   Vous devrez **activer au moins 2 appareils portables** et les placer tous les deux près d'un Wave pendant au moins 7 minutes **afin de tester la solution**


###   A.  Activer mon appareil portable (B7)

<iframe width="560" height="315" src="https://www.youtube.com/embed/li0iHHcYhV8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

*   Consultez [https://www.youtube.com/watch?v=li0iHHcYhV8](https://www.youtube.com/watch?v=li0iHHcYhV8) (juste au-dessus) pour une démonstration de l'activation d'un appareil portable typique

*   Une fois ces étapes terminées, informez Microshare à [`installation@microshare.io`](mailto:installation@microshare.io) afin que nous puissions vérifier que les données circulent ; une fois confirmé, nous lancerons un flux de données vers votre environnement de test

*   Vous pouvez maintenant consulter vos données de streaming de test et essayer le système avec les deux appareils portables activés

| --- | --- |
| **1.** **Déballage et activation des badges portables Microshare** <br><br>-Ouvrez l'emballage et sortez les badges portables.<br>-Pour activer ces appareils portables, appuyez deux fois rapidement sur le bouton à l'avant de l'appareil, puis attendez que le voyant rouge cesse de clignoter. <br>Appuyez ensuite 3 fois à nouveau et maintenez la troisième pression. Le voyant clignotera en bleu pour indiquer que l'appareil est actif. | {% include image.html url="/assets/img/UCT_Install_Images/allWearablesUnbox.png" description="Banner" %} |
| Consultez [https://www.youtube.com/watch?v=li0iHHcYhV8](https://www.youtube.com/watch?v=li0iHHcYhV8) pour une démonstration de l'activation | {% include image.html url="/assets/img/UCT_Install_Images/wearableUnbox.png" description="Banner" %}|
| **2.** **Enregistrement du wearable Microshare** <br><br>-À l'aide de l'appareil de scan, scannez le code QR et ajoutez-le à votre feuille de calcul ou système de suivi <br>-Vérifiez que l'entrée Device ID correspond à l'ID sur le wearable et enregistrez l'appareil suivant | {% include image.html url="/assets/img/UCT_Install_Images/RegisteringWearables.png" description="Banner" %} |
| **3.** **Fixation du porte-clés au badge portable** <br><br>-Retirez les sangles de l'appareil en tirant la sangle par l'extrémité la plus large <br>-Fixez le porte-clés fourni à l'appareil – laissez les bracelets au destinataire s'il souhaite l'utiliser comme bracelet | {% include image.html url="/assets/img/UCT_Install_Images/AttachingWearableKeychain.png" description="Banner" %} |
| | {% include image.html url="/assets/img/UCT_Install_Images/AttachingWearableKeychain2.png" description="Banner" %} |
| | {% include image.html url="/assets/img/UCT_Install_Images/AttachingWearableKeychain3.png" description="Banner" %} |
| **4.** **Remplacement des piles de votre badge portable** <br><br>-Retrait du capot arrière : retournez l'appareil, le côté avec le code QR face à vous <br>-Placez une pièce de monnaie ou un objet similaire dans la rainure à l'arrière de l'appareil et tournez jusqu'à ce que le capot arrière soit retiré pour exposer la pile | {% include image.html url="/assets/img/UCT_Install_Images/ChgBatteriesWearable.png" description="Banner" %} |
| -Retirez l'ancienne pile et remplacez-la par une nouvelle pile CR2032 3V – assurez-vous que la pile est installée dans le bon sens (signe + face vers vous) | {% include image.html url="/assets/img/UCT_Install_Images/ChgBatteriesWearable2.png" description="Banner" %} |
| -À l'aide d'une pièce de monnaie ou d'un objet similaire, vissez le capot arrière sur l'appareil | {% include image.html url="/assets/img/UCT_Install_Images/ChgBatteriesWearable.png" description="Banner" %} |


Une fois tous les appareils installés et enregistrés, informez l'équipe Microshare à [`installation@microshare.io`](mailto:installation@microshare.io)


###   B.  Activer et désactiver mon appareil portable de type carte (C10)


<iframe src="https://player.vimeo.com/video/497030974" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

<br>

Les appareils portables de type carte C10 de Microshare sont simples à activer et désactiver en suivant les étapes ci-dessous :

| --- | --- |
| **1.** **Vérification de l'état de l'appareil :** <br><br>-Appuyez une fois sur le bouton Status (logo circulaire Microshare) pour afficher l'état de l'appareil sur la LED (indiqué sur l'image)<br>-*Clignotement rouge* indique que l'appareil est *inactif*<br>-*Clignotement bleu* indique que l'appareil est *actif*| {% include image.html url="/assets/img/UCT_Install_Images/C10-card-1.png" description="Banner" %} |
| **2.** **Activation et désactivation de l'appareil :** <br><br>-Appuyez 3 fois rapidement sur le bouton Status, en maintenant la troisième pression (« point-point-tiret ») jusqu'à ce que la LED cesse de clignoter<br>-Clignotement bleu pour indiquer que l'appareil est maintenant actif<br>-Clignotement rouge indique que l'appareil est maintenant inactif<br>*Remarque – La désactivation peut être désactivée sur demande du client auprès de Microshare*| {% include image.html url="/assets/img/UCT_Install_Images/C10-card-2.png" description="Banner" %} |

Une fois tous les appareils installés et enregistrés, informez l'équipe Microshare à [`installation@microshare.io`](mailto:installation@microshare.io)


## Section 6 – Passage à une installation en production

Une fois tous les tests terminés, vous êtes prêt à passer à une installation en production. Suivez ces étapes :

*   Informez Microshare que vous avez terminé les tests et êtes prêt à déployer l'installation Contact Tracing en production. Nous cesserons le streaming des données de test à ce stade pour préparer l'ingestion des données en production. _Remarque : Les données de vos appareils Wave ne peuvent être diffusées que vers un seul environnement Azure_

*   Configurez votre environnement de streaming en production et partagez vos identifiants de manière sécurisée avec Microshare

*   Installez la ou les passerelle(s), le(s) Wave(s) et le(s) marqueur(s) de localisation à leur emplacement définitif (le cas échéant) – utilisez le

*   Placez les deux appareils portables activés près l'un de l'autre et d'un Wave pendant au moins 7 minutes

*   Informez Microshare que tout est configuré et indiquez approximativement l'heure à laquelle tous les appareils ont été mis en place. Nous confirmerons que les données circulent correctement et commencerons à diffuser les données en direct vers votre environnement Azure

*   Consultez vos données de streaming en direct pour vous assurer que le flux de données vous convient

*   Activez et distribuez les appareils portables

Félicitations ! Vous devriez maintenant être en production avec votre solution Contact Tracing de Microshare. Si vous rencontrez des problèmes ou avez des questions, n'hésitez pas à nous contacter à [`installation@microshare.io`](mailto:installation@microshare.io)

<style>
    tr td:first-child {
        width:70%;
    }

    tr td:nth-child(2) {
        width:30%;
    }
</style>
