---
layout: docs
title: Terminologie technique IoT
description: Glossaire des termes techniques IoT couramment utilisés
lang: fr
translation_of: docs/2/general/faq/technical-terms.md
translations:
  en: /docs/2/general/faq/technical-terms
  fr: /docs/2/fr/general/faq/technical-terms
toc: true
---

| Terme | Définition |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| | |
| 6LoWPAN | Fusion d'IPv6 (le protocole Internet actuel) et des réseaux personnels sans fil basse consommation ; permet aux appareils IoT contraints en énergie d'accéder directement à Internet TCP/IP. |
| Access Point | Périphérique réseau sans fil qui sert de portail pour connecter des appareils à un réseau local. |
| Activation | Chaque terminal doit être enregistré sur un réseau avant d'envoyer et de recevoir des messages. Cette procédure est appelée activation. Deux méthodes existent : Over-The-Air-Activation (la plus sécurisée et flexible) et Activation By Personalization (la moins sécurisée et flexible). |
| Actuator | Composant responsable du mouvement et du contrôle d'un mécanisme ou système, par exemple l'ouverture d'une vanne. |
| Adaptive Data Rate | Mécanisme d'optimisation des débits de données, du temps d'émission et de la consommation d'énergie dans le réseau. Il contrôle : * Spreading Factor * Bandwidth * Puissance de transmission |
| Advanced Encryption Standards | Spécification de chiffrement de données électroniques, standard pour la sécurité de la couche transport des appareils IoT depuis 2001. |
| Application Programming Interface | Méthode pour accélérer la communication entre ordinateurs et plateformes matérielles/logicielles. |
| Application Server | Traite les messages de données applicatives reçus des terminaux. Génère également les charges utiles applicatives descendantes et les envoie aux terminaux via le serveur réseau. Un réseau LoRaWAN peut avoir plusieurs serveurs d'application. |
| Bandwidth | Plage de fréquences occupée par le signal radio modulé, exprimée en hertz (Hz). |
| Beacons | Petits émetteurs qui se connectent à des appareils Bluetooth et Bluetooth Low Energy (BLE), comme les smartphones ou les colis suivis. |
| Big Data | Grands volumes d'informations structurées et non structurées, collectées depuis de nombreuses sources et livrées à très grande vitesse ; données brutes utilisées par les analystes pour élaborer des stratégies. |
| Bluetooth Low Energy | Réseau personnel sans fil à faible consommation et portée limitée pour la transmission de données. Aussi appelé Bluetooth 4.0. |
| Cloud Computing | Serveurs distants connectés via un réseau pour le stockage, le traitement et la gestion des données, au lieu d'un serveur physique local. |
| Contactless | Technologies permettant à une carte à puce, un téléphone mobile ou autre appareil de se connecter sans fil — sans contact — à un lecteur électronique, généralement pour effectuer un paiement. |
| Cyber-physical systems | Intégration de calcul, réseau et processus physiques avec des boucles de rétroaction où les processus physiques affectent les calculs et vice versa. |
| Decibel (dB) | Unité de mesure du rapport entre quantités sur une échelle logarithmique ; en radio, souvent pour le gain d'antenne ou le rapport signal/bruit. |
| Decibel-milliwatts (dBm) | Unité indiquant qu'un niveau de puissance est exprimé en décibels (dB) par rapport à une puissance d'entrée de 1 mW. |
| Device | Unité de matériel ou d'équipement fournissant une ou plusieurs fonctions informatiques dans un système. |
| Device Classes | La spécification LoRaWAN définit trois types — Classe A (All), Classe B (Beacon) et Classe C (Continuous). Classe A : fenêtres de réception après une montante. Classe B : fenêtres de réception périodiques. Classe C : écoute continue. Tous les appareils LoRaWAN doivent implémenter la Classe A. |
| Digital twins | Réplique numérique d'actifs, processus, personnes, lieux, systèmes et appareils physiques, intégrant des données historiques de machines dans un modèle numérique. |
| Downlink Message | Message envoyé par le serveur réseau (ou serveur d'application) à un terminal et relayé par une passerelle. |
| Effective Isotropic Radiated Power | Puissance totale rayonnée par une antenne isotrope hypothétique dans une seule direction, exprimée en dBm ou watts. |
| Embedded Software | Logiciel contrôlant des appareils et systèmes matériels non considérés comme des ordinateurs, comme un réfrigérateur connecté. |
| End Device | Capteur ou actionneur connecté sans fil au réseau LoRaWAN. |
| eSIM | SIM intégrée (eSIM ou eUICC) ; élément sécurisé conçu pour gérer à distance plusieurs abonnements d'opérateurs mobiles conformément aux spécifications GSMA. |
| Firmware-Over-The-Air | FOTA ; permet l'installation, la réparation et la mise à jour à distance de logiciels et services sur appareils mobiles. |
| Forward Error Correction | Méthode de contrôle d'erreurs dans une transmission bruitée en ajoutant des données redondantes ; le récepteur n'accepte que les données jugées correctes. |
| Frequency | Nombre d'oscillations par seconde d'une onde radio, mesuré en hertz. Le spectre radio va de 30 Hz à 300 GHz. |
| Frequency Plan | Définit les débits de données et canaux conformes aux paramètres régionaux LoRaWAN pour une bande ou zone géographique. |
| Gateway | « Hub traducteur » entre deux ordinateurs ou appareils permettant la compréhension mutuelle des transferts de données. |
| Geofencing | Utilisation du GPS ou de la RFID pour créer une limite géographique virtuelle dans laquelle les appareils peuvent fonctionner. |
| GIS | Geographic Information System ; système de capture, manipulation, analyse, gestion et présentation de données spatiales ou géographiques. |
| GNSS | Global Navigation Satellite System ; constellation de satellites fournissant des signaux de positionnement et de synchronisation. |
| GPS | Global Positioning System ; technologie créée par le gouvernement américain pour les services de localisation. |
| Haptics | Science de l'application de sensations tactiles au contrôle de l'interaction avec des applications informatiques. |
| HAV | Hardware-Assisted Virtualisation ; utilisation des composants physiques d'un ordinateur pour prendre en charge le logiciel de machines virtuelles. |
| Hub | Périphérique matériel connectant d'autres appareils de transmission de données à une station centrale. |
| Hybrid | Généralement un mélange de modèles Private et Community ; union de plusieurs réseaux privés formant un grand réseau IoT. Exemple : Switzercloud. |
| ICCID | Integrated Circuit Card Identifier ; numéro de série unique intégré à une carte SIM. |
| IMU | Inertial Measurement Unit ; mesure la force spécifique, le taux angulaire et parfois le champ magnétique d'un corps (ex. drone). |
| Industrial IoT | Moyen pour machines et applications industrielles de communiquer en temps réel entre elles (M2M). |
| IoT module | Petit appareil électronique intégré dans des objets connectés à des réseaux sans fil pour envoyer et recevoir des données. |
| IP Address | Numéro unique attribué à un ordinateur (ou autre appareil) connecté à un réseau, notamment Internet. |
| Join Server | Traite les messages de demande de jonction des terminaux ; stocke les clés racines, génère les clés de session et les transfère au serveur réseau et au serveur d'application (LoRaWAN 1.1 et 1.0.4). |
| LIDAR | Light Detection and Ranging ; télédétection par impulsions laser pour créer des modèles 3D et cartes. |
| LoRa | Technique de modulation sans fil dérivée du chirp spread spectrum ; encode l'information sur les ondes radio par impulsions chirp. |
| Lora Protocol | Technique de communication numérique longue portée pour l'IoT et les communications M2M. |
| LoRaWAN | Protocole de couche MAC construit sur la modulation LoRa ; définit comment les appareils utilisent le matériel LoRa. Développé et maintenu par la LoRa Alliance®. |
| Low-Power Wide-Area | Réseau à faible portée et faible consommation, principalement pour les communications M2M. |
| Low-Power Wireless Sensor Network | Ensemble d'appareils indépendants mesurant des conditions environnementales ou physiques avec une faible consommation d'énergie. |
| LTE-M | Standard plus économe en énergie pour les communications machine. |
| Machine-to-Machine | M2M ; communication entre machines ou appareils connectés sans intervention humaine. |
| Mechatronics | Ingénierie de systèmes électriques et mécaniques combinant robotique, électronique, informatique, télécoms, contrôle et ingénierie produit. |
| Media Access Control | Sous-couche de la couche liaison de données transmettant des paquets vers et depuis une carte réseau. |
| Mesh Network | Système réseau où les appareils transmettent leurs données tout en servant de relais à d'autres nœuds. |
| Mobile IoT | Appareils basse consommation et large zone utilisés avec des appareils mobiles connectés aux réseaux IoT. |
| Modem | Périphérique permettant à un ordinateur d'envoyer et de recevoir des données via une ligne téléphonique, un câble ou une connexion satellite. |
| NB-IoT | Narrow Band IoT ; moyen pratique et économique d'étendre l'IoT à de nouveaux appareils et objets du quotidien ; technologie basse consommation et large zone. |
| Near-Field Communication | NFC ; communication bidirectionnelle entre terminaux proches ; courte portée, faible puissance, faible débit. |
| Network Server | Gère le réseau LoRaWAN ; reçoit les montantes des passerelles, route les descendantes, gère l'activation, la déduplication, l'accusé de réception, la géolocalisation et l'ADR. |
| Noise Floor | Somme de toutes les sources de bruit dans un système de mesure ; généralement la plus petite unité mesurable. |
| Open Community | Réseaux communautaires ouverts visant un accès IoT gratuit pour tous ; infrastructure souvent construite par des passerelles données par les membres. Exemple : The Things Network. |
| Over the Air Activation | Méthode d'activation la plus sécurisée ; le terminal effectue une procédure de jonction avec attribution dynamique d'adresse et négociation des clés de sécurité. |
| Preamble | Ensemble de symboles (ou chirps) permettant au récepteur de détecter un paquet LoRa ; LoRaWAN utilise une série de 8 up-chirps. |
| Private IoT | Entreprise, projet conjoint ou consortium construisant et gérant son propre réseau IoT non ouvert au public. |
| Public IoT | Infrastructure radio détenue et exploitée par des opérateurs télécoms ou tiers ; ouverte au public régionalement ou nationalement ; service par abonnement. Exemples : Swisscom, Sigfox. |
| Quality of Service | Mesure de la qualité de support de la connectivité IT (délais, disponibilité, perte de données). |
| Radio Frequency Identification | RFID ; utilise le couplage électromagnétique et les radiofréquences pour identifier personnes et objets ; portée et capacités de transmission limitées. |
| Received Signal Strength Indicator (RSSI) | Puissance du signal reçu en milliwatts, mesurée en dBm ; indicateur de qualité de réception. |
| Repeater | Appareil étendant la portée du réseau en recevant et retransmettant un signal numérique. |
| RF Geolocation | Utilisation d'un émetteur-récepteur radio pour localiser un autre ; exemple classique : le GPS. |
| Router | Périphérique matériel recevant, analysant et acheminant des paquets IP vers un autre réseau. |
| Sensor | Appareil mesurant une entrée physique de son environnement et la convertissant en données interprétables par un humain ou une machine. |
| Sensor/Sensor Network | Appareil ou groupe d'appareils surveillant et collectant des données environnementales à divers emplacements à portée du réseau. |
| Signal-to-noise ratio | SNR ; rapport entre la puissance du signal reçu et le niveau de bruit de fond, exprimé en dB. |
| Smart Meter | Appareil des sociétés de services publics collectant la consommation d'énergie et transmettant les données à l'entreprise ou au consommateur. |
| SOC | Subscriber Identify Module ; carte à puce stockant l'identité, la localisation, le numéro de téléphone, les données d'autorisation réseau et les clés de sécurité. |
| Software-Defined Network | Méthode réseau réaffectant le contrôle du flux d'informations du matériel vers un contrôleur logiciel. |
| Spreading Factor | Définit un motif d'étalement appliqué au flux de bits avant modulation ; LoRaWAN définit 6 facteurs — SF7 à SF12. |
| Telematics | Système de surveillance d'un actif via GPS et diagnostics embarqués pour enregistrer les déplacements sur une carte informatisée. |
| Telematics | Système informatique pour transmissions de données longue distance ; exemple le plus répandu : GPS et radio satellite dans les automobiles. |
| Transmission Control Protocol/Internet Protocol | TCP/IP ; suite de protocoles de base pour toutes les communications Internet et réseaux privés. |
| Ultra-Wide Band | UWB ; signal faible sur une large bande de fréquences, surtout utilisé pour la localisation et la mesure de distance. |
| Uplink Message | Message envoyé par un terminal au serveur réseau et relayé par une ou plusieurs passerelles. |
| Wearable | Appareils portés par des personnes, équipés de capteurs, moniteurs et d'une connexion Internet (ex. Apple Watch, Fitbit). |
| Wireless modem | Modem contournant le réseau téléphonique et se connectant directement à un réseau sans fil pour accéder à Internet. |
| Zigbee/Z-Wave | Standards pour réseaux personnels (PAN) à courte portée et faible consommation, pour le contrôle, la détection et des réseaux à faible débit de données. |
