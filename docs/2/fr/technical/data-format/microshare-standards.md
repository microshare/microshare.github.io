---
layout: docs
title: Standards Microshare™
description: Découvrez la structure des données Microshare™.
lang: fr
translation_of: docs/2/technical/data-format/microshare-standards.md
translations:
  en: /docs/2/technical/data-format/microshare-standards
  fr: /docs/2/fr/technical/data-format/microshare-standards
toc: true
---





{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}


---------------------------------------

##### SOMMAIRE :

1. [Format décompressé Microshare](./#1-format-decompresse-microshare)
2. [Données Standards Microshare](./#2-donnees-standards-microshare)
    - A. [Structure générale](./#a-structure-generale)
    - B. [{Data}](./#b-data)
    - C. [Types de champs Microshare](./#c-types-de-champs-microshare)
    - D. [Meta/IoT](./#d-metaiot)
    - E. [Origin](./#e-origin)
    - F. [Unpacker](./#f-unpacker)
    - G. [recTypes](./#g-rectypes)
3. [Table des données standards](./#3-table-des-donnees-standards)
4. [Exemple](./#4-exemple)
    - A. [Données de mouvement](./#a-donnees-de-mouvement)
    - B. [Données de température](./#b-donnees-de-temperature)
    - C. [Données de feedback](./#c-donnees-de-feedback)
    - D. [Traçage des contacts](./#d-tracage-des-contacts)
    - E. [Zonage des actifs](./#e-zonage-des-actifs)
    - F. [Données heartbeat](./#f-donnees-heartbeat)

---------------------------------------


## 1. Format décompressé Microshare
---------------------------------------


Les données sont envoyées sous forme de payload depuis les appareils IoT vers les unpackers Microshare en données brutes compressées pour plus d'efficacité. Les données sont ensuite transformées et enrichies par l'unpacker Microshare en informations compréhensibles à l'aide de l'un de nos formats JSON canoniques. Ce processus garantit que les données peuvent être analysées de manière cohérente, quel que soit le fabricant de l'appareil ou le réseau utilisé pour la transmission. Le format final est appelé données décompressées (unpacked data).

Ce guide fournit des détails sur les processus impliqués dans la collecte des données brutes et leur décompression en données décompressées. **Veuillez noter que les informations fournies peuvent différer légèrement de celles requises pour votre serveur réseau, car les détails varient d'un serveur à l'autre.**

De plus, ce guide aborde les tags. Les tags sont des libellés ou descriptions attachés à vos clusters d'appareils pour faciliter leur identification. 




## 2. Données Standards Microshare
---------------------------------------

Exemple : 

```
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2023-10-02T13:28:32.556Z",
      "creatorId": "yourname@microshare.io",
      "data": {
          co2": [
              {
                  "unit": "ppm",
                  "value": 462
              }
          ],
          "device_health": {
              "id": "00-16-16-00-00-00-0C-BB",
              "voltage": [
                  {
                      "unit": "V",
                      "value": 3.6
                  }
              ]
          },
          "humidity": [
              {
                  "unit": "%RH",
                  "value": 35
              }
          ],
          "temperature": [
              {
                  "unit": "°C",
                  "value": 23
              }
          ],
         "meta": {
            "device": [
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "global": [
              "Europe",
              "United Kingdom",
              "London"
            ],
            "iot": {
                "bw": 125,
                "channel": 7,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 6,
                "fport": 2,
                "freq": 903.7,
                "iso_time": "2023-10-02T13:28:32.556Z",
                "ns_version": "v3.0",
                "payload": "0200dd001a02f2005a002f",
                "payload_fmt": 1,
                "rssi": -79,
                "sf": 10,
                "snr": 9.5,
                "time": "2023-10-02T13:28:32.556Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SE09"
        },
        "time": "2023-10-02T13:28:32.556Z"
        "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.environment.unpacked",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.environment.unpacked",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.environment.unpacked",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
    }
  }
]}
```

#### A. Structure générale

La majorité des informations contenues dans le paquet de données détaille les paramètres du cluster d'appareils. Les autres informations contiennent les données collectées par les appareils. 

Voici comment le cluster d'appareils est configuré :


{% include image.html url="\assets\img\dc-data-formatnew.png" width="800" description="dc" %}

<br>

#### B. {Data}

Parlons maintenant de `{Data}`, qui contient les informations de l'appareil.

Les différents composants incluent : 
  - C. [Types de champs Microshare](./#c-types-de-champs-microshare)
  - D. [Meta/IoT](./#d-metaiot)
  - E. [Origin](./#e-origin)
  - F. [Unpacker](./#f-unpacker)

Ci-dessus se trouvent les données de l'appareil au sein de `{Data}`. 

Toutes ces valeurs sont expliquées avec leurs unités dans le tableau suivant : 

##### > [Table des données standards](./#3-table-des-donnees-standards)

`{Data}` contient des informations sur l'appareil qui a fourni le payload de données. Cela inclut généralement l'identifiant de l'appareil, le type de batterie, etc. Le code fourni ressemblera à : 

```
"device_health": {
    "id": "00-16-16-00-00-00-0C-BB",
    "voltage": [
        {
            "unit": "V",
            "value": 3.6
        }
    ]
},
```

#### C. Types de champs Microshare

Microshare® a consacré des efforts considérables au développement d'une bibliothèque complète de types de champs (Field Types) pour standardiser la catégorisation des données de mesure issues des capteurs.

Nous avons amélioré la précision et la clarté des données collectées par divers capteurs, là où les données des capteurs constituent la base de la prise de décision, comme la surveillance environnementale, l'automatisation industrielle et la gestion des villes intelligentes. 

Chaque type de champ au sein de la bibliothèque encapsule un ensemble d'attributs :
- Identifiant unique.
- Unité de mesure standard.
- Description complète qui explique clairement ce que le capteur mesure et comment les données doivent être interprétées.

Ce niveau de détail garantit que les utilisateurs de différents domaines peuvent comprendre l'importance des données des capteurs sans ambiguïté, tout en réduisant les erreurs d'interprétation des données et en favorisant l'interopérabilité entre les systèmes et applications qui s'appuient sur les données des capteurs.

La maintenance de cette bibliothèque est un processus continu, reflétant la nature dynamique de la technologie et l'émergence de nouveaux types de champs, tandis que les types existants sont affinés. Microshare® veille à ce que sa bibliothèque reste une source de référence pour la catégorisation des données des capteurs, contribuant ainsi à la création de systèmes plus intelligents, réactifs et efficaces.

#### D. Meta/IoT

```
"meta": {
  "device": [
    "London",
    "1st Floor",
    "Office 3"
  ],
  "global": [
    "Europe",
    "United Kingdom",
    "London",
    "5 Merchant Square",
    "your environment"
  ],
  "iot": {
    "device_id": "58-A0-CB-00-00-40-??-??",
    "fcnt_dwn": 749,
    "fcnt_up": 4510,
    "fport": 103,
    "iso_time": "2020-06-17T09:48:08.494Z",
    "ns_version": "v3.0",
    "payload": "08cb3340ffffffff",
    "payload_fmt": 1,
    "time": "2020-06-17T09:48:08.494Z",
    "type": "uplink"
  },
  "source": []
},
```

##### Le `meta` fournit :

- `device` - l'emplacement spécifique de l'appareil.

- `global` - l'emplacement du cluster d'appareils de l'appareil.

- `device_id` - le numéro d'identification unique de l'appareil.

- `type` - si l'information est un uplink (les données sont envoyées de l'appareil vers le serveur réseau) ou un downlink (les données sont envoyées du serveur réseau vers l'appareil). Il s'agira presque toujours d'un uplink.

- `fcnt_up` - le compteur montant ; le nombre d'interactions uplink entre l'appareil et le serveur réseau.

- `fcnt_down` - le compteur descendant. 

- `fport` - le port par lequel le paquet de l'appareil est envoyé au serveur réseau.

- `iso_time` ou `time` - l'heure à laquelle le réseau a reçu les données de l'appareil.

- `ns_version` - la version du serveur réseau.

- `payload` - les données que l'appareil envoie au serveur réseau.



#### E. Origin

```
"origin": {
  "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
  "createDate": "2020-06-17T09:48:08.980Z",
  "creatorId": "yourname@microshare.io",
  "desc": "Record of Type io.microshare.yourenvironment.unpacked",
  "id": "5ed1123046e0fb0028b70???",
  "name": "io.microshare.yourenvironment.unpacked",
  "remoteAddress": "your ip address",
  "tokendata": {
    "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
    "ip": "your ip address"
  }
},
```

Une explication détaillée des origines se trouve sur la [page Vue d'ensemble](/docs/2/fr/technical/data-format/overview/#b3-origin). 

Certaines informations peuvent différer si vous décompressez les données dans un compte autre que celui qui héberge les données compressées. Cette pratique est déconseillée ; soyez prudent pour éviter cette erreur.

#### F. Unpacker

```
"unpacker": {
  "class": "io.tracknet.healthy.TBHV100.Decoder",
  "library": "lorawan_device_unpack",
  "version": "0.5.5"
},
```

Le dernier bloc de données dans `{Data}` décrit le cluster d'appareils autorisé à décompresser le payload. C'est important car Microshare dispose d'un grand nombre d'unpackers et envoyer le payload au mauvais unpacker peut entraîner une perte d'informations. Ci-dessous se trouve la `library` de tous les différents unpackers Microshare et son emplacement. Les descripteurs `class` et `version` aident à naviguer dans cette bibliothèque. 

#### G. recTypes

| Solutions                     | packed RecType                      | unpacked RecType                                 |
| ----------------------------- | ----------------------------------- | ------------------------------------------------ |
| Activity Level Indicator      | io.microshare.motion.packed	      |   io.microshare.motion.unpacked                  |
| Brightness Monitoring         | io.microshare.light.packed	      |    io.microshare.light.unpacked                  |
| Decibel Monitoring         	| io.microshare.sound.packed	      |    io.microshare.sound.unpacked                  |
| Desk Occupancy Monitoring     | io.microshare.occupancy.packed	  |   io.microshare.occupancy.unpacked               |
| Feedback Stations             | io.microshare.feedback.packed	      |   io.microshare.feedback.unpacked(.event.meta)   |
| Fridge temperature Monitoring	| io.microshare.environment.packed	  |    io.microshare.environment.unpacked            |
| Indoor Air Quality Monitoring | io.microshare.environment.packed	  |    io.microshare.environment.unpacked            |
| Leak Detection                | io.microshare.leak.packed	          |    io.microshare.leak.unpacked                   |
| Open Shut Indicator	        | io.microshare.openclose.packed	  |   io.microshare.openclose.unpacked               |
| Room Occupancy Monitoring     | io.microshare.occupancy.packed	  |   io.microshare.occupancy.unpacked               |
| Smart Activity Timestamping   | io.microshare.feedback.packed	      |    io.microshare.feedback.unpacked(.event.meta)  |
| Smart Waste Management        | io.microshare.bin.packed	          |    io.microshare.bin.unpacked                    |
| Touchfree Feedback        	|                                     |  io.microshare.feedback.unpacked.event.meta      |
| Electricity Usage Monitoring	| io.microshare.current.packed	      |  io.microshare.current.unpacked                  |
| People Counting	            | io.microshare.peoplecounting.packed |	io.microshare.peoplecounting.unpacked            |


## 3. Table des données standards
---------------------------------------

|**Mesure**|**Champ**|**Unité**|**Champ appareil**|**Signification**|
| - | - | - | - |- |
|Type de message|msg_type||true|Prise en charge spécifique au fournisseur pour les appareils polyvalents|
|Défaut appareil|fault||true|Signal spécifique au fournisseur indiquant que l'appareil/le capteur dysfonctionne|
|Alerte appareil|alert||true|Signal spécifique au fournisseur indiquant que l'appareil/le capteur a une alerte|
|||||||
|Tension batterie appareil |voltage|V|true|Potentiel électrique de la batterie ou de la source d'alimentation|
|Charge batterie appareil|charge|A|true|Pourcentage de charge de batterie restante|
|Période de transmission|period|s|true|Fréquence de rapport de l'appareil|
|RSSI de transmission|rssi|dBm|true|Indicateur de force du signal relatif mesurant la puissance du signal du réseau sans fil|
|SNR de transmission|snr|dB|true|Indicateur du rapport signal sur bruit mesurant les interférences du signal du réseau sans fil|
|Rapports appareil depuis réinitialisation|reports_since_reset||true|Nombre de rapports depuis la mise sous tension ou la réinitialisation de l'appareil|
|Température PCB|temperature|°C|true|Température au niveau du circuit imprimé|
|||||||
|Température|temperature|°C||Mesure de chaleur ou de froid exprimée sur l'échelle Celsius|
|Humidité relative|humidity|%||Mesure de la concentration de vapeur d'eau présente dans l'air par rapport au maximum (également appelée humidité relative)|
|Pression|pressure|hPa||Mesure de la pression atmosphérique en force par unité de surface exercée par une colonne atmosphérique|
|Éclairement|illuminance|lx||Mesure de la quantité de lumière tombant sur une surface donnée et s'y répartissant|
|COV|voc|ppb||Mesure des composés organiques volatils présents dans l'air|
|CO2|co2|ppm||Mesure du dioxyde de carbone présent dans l'air|
|IAQ - Qualité de l'air intérieur|iaq|||Mesure spécifique au fournisseur de la qualité de l'air par rapport à l'idéal pour un usage humain|
|AQI - Indice de qualité de l'air|air_quality_index|||Mesure spécifique au fournisseur de la qualité de l'air par rapport à l'idéal pour un usage humain|
|Sonie|loudness|dBA||Mesure de l'amplitude de la sensation auditive conduite par l'air|
|Transmittance lumineuse de brume|haze_luminous_transmittance|%||Pourcentage de lumière transmise bloquée par des particules dans l'air|
|Densité optique de fumée|smoke_optical_density|dBm||Pourcentage de lumière transmise bloquée par de la fumée dans l'air|
|Gaz|gas|%LEL||Pourcentage de la composition gazeuse de l'air par fraction molaire|
|Matières particulaires|particulate_matter|µg/m³|||
|Masse des matières particulaires|particulate_matter_number|µg/m³|||
|Taille typique des particules|particulate_matter_typical_particle_size|µm|||
|||||||
| Formaldéhyde          | formaldehyde         | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Benzène               | benzene              | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Ozone                 | ozone                | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Monoxyde de carbone       | carbon_monoxide      | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Chlore              | chlorine             | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Hydrogène              | hydrogen             | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Sulfure d'hydrogène     | hydrogen_sulphide    | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Chlorure d'hydrogène     | hydrogen_chloride    | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Cyanure d'hydrogène      | hydrogen_cyanide     | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Fluorure d'hydrogène     | hydrogen_fluoride    | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Ammoniac               | ammonia              | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Dioxyde d'azote      | nitrogen_dioxide     | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Oxyde d'azote        | nitrogen_oxide       | ppb                  |                  |Mesure de la présence de l'élément dans l'air|
| Oxygène                | oxygen               | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Dioxyde de soufre        | sulfur_dioxide       | µg/m³                |                  |Mesure de la présence de l'élément dans l'air|
| Odeurs sulfurées      | sulfurous_odours     | OU           |                  |Mesure de la présence de l'élément dans l'air|
|||||||
| Couleur d'éclairage                | lighting_color               | °K    |                  |Représente la température de couleur de l'éclairage, mesurée en Kelvin|
| Scintillement d'éclairage           | lighting_flickering          | %   |                  |Mesure la fluctuation de la sortie lumineuse en pourcentage|
|||||||
| Indice de santé                  | health_index                 | %   |                  ||
| Indice de cognitivité             | cognitivity_index            | %   |                  ||
| Indice de sommeil                   | sleep_index                  | %   |                  ||
| Indice d'irritation de la gorge       | throat_irritation_index      | %   |                  ||
| Indice de santé du bâtiment         | building_health_index        | %   |                  ||
| Indice de propagation virale         | virus_spreading_index        | %   |                  ||
|||||||
|Fuite|leak|||Présence binaire de liquide détectable électriquement|
|Plus clair|lighter||||
|Plus sombre|darker||||
|Démontage|dismantle||||
|||||||
|Courant|current|A||Mesure du flux électrique ou du mouvement des porteurs de charge à travers un milieu conducteur|
|Multiplicateur électrique|multiplier|||Multiplicateur mathématique pour définir l'échelle d'une mesure électrique|
|Puissance|power|kW|||
|Consommation d'énergie|power_consumption|kWh|||
|||||||
|Présence|presence|||Mesure binaire représentant la détection d'un objet chaud|
|Mouvements depuis réinitialisation|motions_since_reset|||Nombre de changements de position d'objets chauds (mouvements) depuis la mise sous tension ou la réinitialisation de l'appareil|
|Événements depuis réinitialisation|events_since_reset|||Nombre de changements d'état depuis la mise sous tension ou la réinitialisation de l'appareil|
|Mouvements depuis transmission|motions_since_transmit|||Nombre de changements de position d'objets chauds (mouvements) depuis le dernier rapport|
|Accélération|acceleration|m/s2||Mesure du changement de vitesse d'un objet solide|
|Vitesse|velocity|m/s||Mesure de la vitesse de déplacement d'un objet solide|
|*Champ composé* X|x|||Position par rapport à un point de départ arbitraire dans le plan horizontal|
|*Champ composé* Y|y|||Position par rapport à un point de départ arbitraire dans le plan vertical|
|*Champ composé* Z|z|||Position par rapport à un point de départ arbitraire dans le plan longitudinal|
|||||||
|État fermé|closed|||Mesure binaire représentant la position relative proche (fermé) de deux objets magnétiques (effet Hall) ou circuit électronique ON|
|État ouvert|open|||Mesure binaire représentant la position relative éloignée (ouvert) de deux objets magnétiques (effet Hall) ou circuit électronique OFF|
|||||||
|État de remplissage|fill|%||Mesure en pourcentage de la réduction de capacité d'un conteneur de profondeur fixe|
|État de distance|distance|m||Mesure de l'espace libre entre deux objets solides|
|||||||
|GPS|gps|||Mesure de la localisation par rapport à la surface de la Terre selon le système de coordonnées géographiques|
|*Champ composé* Latitude|lat|||Mesure de la distance Nord/Sud par rapport à l'équateur terrestre|
|*Champ composé* Longitude|lon|||Mesure de la distance Est/Ouest par rapport au méridien origine terrestre|
|Précision|accuracy|m||Mesure du rayon d'incertitude attendu pour une mesure de position|
|||||||
|Appui|push|||Mesure binaire de l'activation mécanique d'un bouton ou d'un interrupteur|
|Glissement|swipe|||Mesure binaire de l'activation électromécanique|
|Appuis depuis réinitialisation|push_since_reset|||Nombre d'activations mécaniques (appuis) depuis la mise sous tension ou la réinitialisation de l'appareil|
|||||||
| Pourcentage d'apprentissage                         | learning_percentage                            | %     |                  |Représente le pourcentage d'achèvement d'un processus d'apprentissage automatique ou le degré auquel un système a « appris » à partir de son jeu de données|
| Indice de fréquence de crête                        | peak_frequency_index                           | Hz       |                  |Désigne l'indice ou la position de la fréquence de crête dans un spectre, couramment utilisé en traitement du signal pour identifier la composante de fréquence dominante|
| Type d'apprentissage                               | learning_type                                  |       |                  |Indique la catégorie ou la méthode d'apprentissage employée par un système, telle que l'apprentissage supervisé, non supervisé, par renforcement ou semi-supervisé|
| Transformée de Fourier rapide                      | fast_fourier_transform                         | Hz       |                  |Fait référence au résultat d'un calcul de transformée de Fourier rapide, qui transforme un signal du domaine temporel vers le domaine fréquentiel, révélant les composantes de fréquence du signal|
|||||||
| Vibration                                   | vibration                                      | Hz       |                  |Mesure de l'oscillation d'un objet solide ou en son sein|
| Amplitude de vibration                         | vibration_amplitude                            | G     |                  |Mesure de l'étendue maximale d'une vibration ou oscillation, mesurée depuis la position d'équilibre|
| Dérive de vibration                             | vibration_drift                                | %     |                  |Variation en pourcentage de la fréquence ou de la position de vibration au fil du temps|
| Durée de dérive de vibration                    | vibration_drift_duration                       | min      |                  |Durée pendant laquelle la dérive de vibration est observée ou mesurée|
| Prédiction de dérive de vibration 24 heures         | vibration_drift_prediction_24_hours            | hour        |                  |Changement prévu du comportement ou des caractéristiques de vibration dans 24 heures|
| Prédiction de dérive de vibration 30 jours          | vibration_drift_prediction_30_days             | day         |                  |Changement prévu du comportement ou des caractéristiques de vibration dans 30 jours|
| Prédiction de dérive de vibration 6 mois         | vibration_drift_prediction_6_months            | month       |                  |Changement prévu du comportement ou des caractéristiques de vibration dans 6 mois|
| Temps de fonctionnement                              | operating_time                                 | min      |                  ||
| Numéro d'alarme                                | alarm_number                                   |       |                  ||
| Période de rapport                               | report_period                                  | min      |                  ||
|||||||
|Comptage depuis réinitialisation|count_since_reset|||Nombre d'événements génériques depuis la mise sous tension ou la réinitialisation de l'appareil|
|Comptage depuis transmission|count_since_transmit|||Nombre d'événements génériques depuis le dernier rapport|
|||||||
|Alarme |alarm|||Mesure binaire d'occurrence d'événement générique (voir SubTypes)|
|||||||
|Temps en secondes depuis 1970|time|s||Mesure du temps qui continue de s'écouler, en secondes depuis le 1er janvier 1970|
|Temps ISO (ISO TIME - champ général)|iso_time|||Mesure du temps qui continue de s'écouler, au format ISO 8601|
|Secondes depuis changement|seconds_since_change|s||Nombre de secondes depuis le dernier changement d'état d'événement|
|Secondes|seconds|s||Mesure du temps|
||||||

## 4. Exemple
---------------------------------------

#### A. Données de mouvement

```
{
    "meta": {
        "currentCount": 355,
        "currentPage": 1,
        "perPage": 1000,
        "source": "db",
        "totalCount": 1000,
        "totalPages": 1
    },
    "objs": [
        {
            "_id": "5eea1d8d46e0fb0028a0b???",
            "checksum": "8BAA297C7FC219B1EFFA2846C5B9C9EZE34CAC3671A7D3AF90C89CEC5DAABC2L1425",
            "createDate": "2023-10-02T13:28:32.556Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "device_health": {
                      "charge": [
                          {
                              "unit": "%",
                              "value": 0
                          }
                      ],
                      "id": "E8-E1-E1-00-01-03-C8-57",
                      "temperature": [
                          {
                              "unit": "°C",
                              "value": 6
                          }
                      ],
                      "voltage": [
                          {
                              "unit": "V",
                              "value": 3.6
                          }
                      ]
                  },
                  "motions_since_reset": [
                    {
                        "value": 86282
                    }
                ],
                "presence": [
                    {
                        "value": false
                    }
                ],
                "seconds_since_change": [
                    {
                        "unit": "s",
                        "value": 129900
                    }
                ]
                "meta": {
                    "backboard": "5ea0488146e0fb002a074145",
                    "device": [
                      "Building 1",
                      "1st Floor",
                      "Men-West",
                      "Men"
                    ],
                    "global": [
                      "Europe",
                      "United Kingdom",
                      "London"
                    ],
                    "iot": {
                        "bw": 125,
                        "channel": 7,
                        "device_id": "70-B3-D5-32-6B-00-08-8E",
                        "fcnt_dwn": 0,
                        "fcnt_up": 6,
                        "fport": 2,
                        "freq": 903.7,
                        "iso_time": "2023-10-02T13:28:32.556Z",
                        "ns_version": "v3.0",
                        "payload": "0200dd001a02f2005a002f",
                        "payload_fmt": 1,
                        "rssi": -79,
                        "sf": 10,
                        "snr": 9.5,
                        "time": "2023-10-02T13:28:32.556Z",
                        "type": "uplink"
                    },
                    "source": [],
                    "usecase": "SC03"
                },
                "time": "2023-10-02T13:28:32.556Z"
            },
            "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.feedback.unpacked.event.meta",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.feedback.unpacked.event.meta",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.feedback.unpacked.event.meta",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
        },
```

Le comptage représente le nombre de mouvements déclenchés, la plage est de 0 à 16 777 215. Il est réinitialisé à chaque cycle d'alimentation ou remplacement de batterie. 
Le temps représente le nombre de minutes depuis le dernier mouvement déclenché. La plage est de 0 à 65 535 ; il sera réinitialisé en même temps que le comptage. 



#### B. Données de température

```
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2023-10-02T13:28:32.556Z",
      "creatorId": "yourname@microshare.io",
      "data": {
          co2": [
              {
                  "unit": "ppm",
                  "value": 462
              }
          ],
          "device_health": {
              "id": "00-16-16-00-00-00-0C-BB",
              "voltage": [
                  {
                      "unit": "V",
                      "value": 3.6
                  }
              ]
          },
          "humidity": [
              {
                  "unit": "%RH",
                  "value": 35
              }
          ],
          "temperature": [
              {
                  "unit": "°C",
                  "value": 23
              }
          ],
         "meta": {
            "device": [
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "global": [
              "Europe",
              "United Kingdom",
              "London"
            ],
            "iot": {
                "bw": 125,
                "channel": 7,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 6,
                "fport": 2,
                "freq": 903.7,
                "iso_time": "2023-10-02T13:28:32.556Z",
                "ns_version": "v3.0",
                "payload": "0200dd001a02f2005a002f",
                "payload_fmt": 1,
                "rssi": -79,
                "sf": 10,
                "snr": 9.5,
                "time": "2023-10-02T13:28:32.556Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SE09"
        },
        "time": "2023-10-02T13:28:32.556Z"
        "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.environment.unpacked",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.environment.unpacked",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.environment.unpacked",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
    }
  }
]}
```

#### C. Données de feedback

```
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2023-10-02T13:28:32.556Z",
      "creatorId": "yourname@microshare.io",
      "data": {
          "pushes_since_reset": [
              {
                  "context_id": "Button #1, Upper Left",
                  "value": 237
              },
              {
                  "context_id": "Button #2, Upper Right",
                  "value": 27
              },
              {
                  "context_id": "Button #3, Lower Left",
                  "value": 93
              },
              {
                  "context_id": "Button #4, Lower Right",
                  "value": 47
              },
              {
                  "context_id": "Button #5, Middle",
                  "value": 781
              }
          ],
          "swipe": [
              {
                  "value": false
              }
          ]
         "meta": {
            "device": [
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "global": [
              "Europe",
              "United Kingdom",
              "London"
            ],
            "iot": {
                "bw": 125,
                "channel": 7,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 6,
                "fport": 2,
                "freq": 903.7,
                "iso_time": "2023-10-02T13:28:32.556Z",
                "ns_version": "v3.0",
                "payload": "0200dd001a02f2005a002f",
                "payload_fmt": 1,
                "rssi": -79,
                "sf": 10,
                "snr": 9.5,
                "time": "2023-10-02T13:28:32.556Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SF01"
        },
        "time": "2023-10-02T13:28:32.556Z"
        "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.feedback.unpacked",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.environment.unpacked",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.feedback.unpacked",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
    }
  }
]}
```

#### D. Traçage des contacts

```
  {
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 1,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
    "objs": [
        {
            "_id": "5ee136f146e0fb00282cb???",
            "checksum": "8E6E2AD84157FA0E152B0AD419FB5290ED54808139E67A98F76116B8C0CC51EAL825",
            "createDate": "2020-06-10T19:39:29.798Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "averageRSSI": -89,
                "detectedDevice": "000003BAB???",
                "device": {
                    "id": "AC233F664???"
                },
                "duration": 3,
                "endTime": "2020-06-10T19:37:28.331Z",
                "locationBeacon": true,
                "meta": {
                    "device": {},
                    "iot": {
                        "device_id": "AC233F664???"
                    },
                    "source": {
                        "device": [
                            "Wokingham",
                            "Ground",
                            "Lounge",
                            ""
                        ],
                        "global": [],
                        "iot": {
                            "device_id": "70-76-FF-00-69-04-??-??",
                            "fcnt_dwn": 5,
                            "fcnt_up": 347,
                            "fport": 95,
                            "ns_version": "v3.0",
                            "payload": "a16176818346ac233f6644ab190b4e8b851831437cbf000604358500433406000605348500432f00000806308500430200000805348500430100000804358500430100000301368500430100000403358500430300000605318500440163fa0009063585004401560000080631850043190000050334",
                            "payload_fmt": 1,
                            "time": "2020-06-10T19:39:28.331Z",
                            "type": "uplink"
                        },
                        "source": []
                    }
                },
                "originatingDevice": "AC233F664???",
                "originatingDeviceBattery": 2.894,
                "start": 5,
                "startTime": "2020-06-10T19:34:28.331Z"
            },
            "desc": "",
            "id": "5ee136f146e0fb00282cb???",
            "name": "",
            "origin": {
                "checksum": "8E6E2AD84157FA0E152B0AD419FB5290ED54808139E67A98F76116B8C0CC51EAL825",
                "createDate": "2020-06-10T19:39:29.798Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.contact.unpacked.event",
                "id": "5ee136f146e0fb00282cb???",
                "name": "io.microshare.contact.unpacked.event",
                "remoteAddress": "000.00.00.000",
                "tokendata": {
                    "id": "a1c1541d-3a3d-4255-951a-499311c5e???",
                    "ip": "000.00.00.000"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E???",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.contact.unpacked.event",
            "tags": [
                "Wokingham",
                "Ground",
                "Lounge"
            ],
            "tstamp": 1591817969798,
            "updateDate": "2020-06-10T19:39:29.798Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}
```

```
{
    "event_type":"create",
    "id":"5edfb7e246e0fb00297b5???",
    "obj":{
        "checksum":"E418D6462C167B01655652EA9F0987D42490DBFABBBDD64EFA324A384A3394C3L1496",
        "createDate":1591719906298,
        "creatorId":"yourname@microshare.io",
        "data":{
            "averageRSSI":-6,
            "detectedDevice":"C96E9E87F???",
            "duration":11,
            "endTime":"2020-05-07T14:41:00.000Z",
            "locationBeacon":false,
            "originatingDevice":"EEA0E0E2D???",
            "originatingDeviceBattery":"2.658V",
            "start":5,
            "startTime":"2020-05-07T14:35:00.000Z",
            "device":{
                "id":"EEA0E0E2D???"
            },
            "meta":{
                "device":{

                },
                "iot":{
                    "device_id":"EEA0E0E2D???"
                },
                "source":{
                    "device":[
                        "Location1",
                        "Location2",
                        "Location3",
                        "Location4"
                    ],
                    "global":[
                        "GlobalTag1",
                        "GlobalTag2",
                        "GlobalTag3",
                        "GlobalTag4"
                    ],
                    "iot":{
                        "device_id":"70-76-FF-00-69-04-??-??",
                        "fcnt_dwn":1,
                        "fcnt_up":79,
                        "fport":85,
                        "iso_time":"2020-06-09T19:47:39.185Z",
                        "ns_version":"v3.0",
                        "payload":"a16162958346a0e6f8a0c537350083460b3c470150923200834170340083410433008342746e3100834104340083410531008341013400834101330083419631008346185318127e423600834610e4d899208b300083460897b3c3ac4a3300834603b21606e77035008346069f0f8d92003200834604124eca6ea426008346034325f968da3300834601c64aac0f57310083460df476b95daa320083452a01caba0d29008341812600",
                        "payload_fmt":1,
                        "time":"2020-06-04T19:30:00.185Z",
                        "type":"uplink"
                    },
                    "source":[

                    ]
                }
            }
        },
        "desc":"",
        "id":"5edfb7e246e0fb00297b5???",
        "name":"",
        "origin":{
            "checksum":"E418D6462C167B01655652EA9F0987D42490DBFABBBDD64EFA324A384A3394C3L1496",
            "createDate":"2020-06-09T16:25:06.298Z",
            "creatorId":"yourname@microshare.io",
            "desc":"Record of Type io.microshare.contact.unpacked.event",
            "id":"5edfb7e246e0fb00297b5???",
            "name":"io.microshare.contact.unpacked.event",
            "remoteAddress":"113.90.8.233",
            "tokendata":{
                "id":"5d548231-7b91-4040-bff6-ad4a92ee3???",
                "ip":"000.00.00.000"
            }
        },
        "owner":{
            "appid":"51C54CDB-D278-4CFD-B8378EF13462E???",
            "meta":{

            },
            "org":"io.microshare",
            "owners":[

            ],
            "user":"yourname@microshare.io"
        },
        "recType":"io.microshare.contact.unpacked.event",
        "tags":[
            "Europe",
            "Ireland",
            "Leinster",
            "Dublin"
        ],
        "tstamp":1591719906298,
        "updaterId":"yourname@microshare.io"
    },
    "obj_type":"objs",
    "recType":"io.microshare.contact.unpacked.event",
    "source":"ShareService"
}
```


#### E. Zonage des actifs

Voir ci-dessous le code pour plus de détails sur la signification des différents champs.

```
  {
        "_id": "5fb54be9a401e8001d80c7fb",
        "checksum": "AC23F16DDC3330223DEC3AE9B60DF4FC03BC9CD633A07294BF1BE2B97D9E5BA7L633",
        "createDate": "2020-10-17T16:29:29.769Z",
        "creatorId": "admin@microshare.io",
        "data": {
          "device": {
            "id": "AC754B6636BC"
          },
          "event": "confirm",
          "external_id": "",
          "meta": {
            "device": [
              "Machine",
              "Xray",
              "Xray1"
            ],
            "iot": {
              "device_id": "AC754B6636BC"
            },
            "source": {
              "device": [
                "Main Building",
                "First Floor",
                "Entrance",
                ""
              ],
              "global": [
                "UK",
                "London",
                "West Hill",
                "Asset Zoning"
              ],
              "iot": {
                "device_id": "78-70-EE-00-69-04-02-50",
                "fcnt_dwn": 12694,
                "fcnt_up": 12841,
                "fport": 85,
                "ns_version": "v3.0",
                "payload": "a1616381831ab76eda4f3600",
                "payload_fmt": 1,
                "time": "2020-10-17T16:29:29.172Z",
                "type": "uplink"
              },
              "source": []
            }
          },
          "movement": false,
          "signal": {
            "unit": "rssi",
            "value": -93
          },
          "time": "2020-10-17T16:29:29.172Z"
        },
        "desc": "",
        "id": "5fb54be9a401e8001d80c7fb",
        "name": "",
        "origin": {
          "checksum": "AC23F16DDC3330223DEC3AE9B60DF4FC03BC9CD633A07294BF1BE2B97D9E5BA7L633",
          "createDate": "2020-10-17T16:29:29.769Z",
          "creatorId": "admin@microshare.io",
          "desc": "Record of Type io.microshare.zoning.unpacked.mock.event",
          "id": "5fb54be9a401e8001d80c7fb",
          "name": "io.microshare.zoning.unpacked.mock.event",
          "remoteAddress": "",
          "tokendata": {
            "id": "",
            "ip": ""
          }
        },
        "owner": {
          "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
          "org": "io.microshare",
          "owners": [],
          "user": "admin@microshare.io"
        },
        "recType": "io.microshare.zoning.unpacked.mock.event",
        "tags": [
          "Machine",
          "Xray",
          "Xray1"
          "UK",
          "London",
          "West Hill",
          "Main Building",
          "First Floor",
          "Entrance"
        ],
        "tstamp": 1605716969769,
        "updateDate": "2020-10-17T16:29:29.769Z",
        "updaterId": "admin@microshare.io"
      }
```

* data.event - ce champ a 3 valeurs :
* "new" - l'appareil est entré dans la portée du scanner d'ondes
* "remove" - l'appareil était précédemment à portée et a quitté la portée du scanner d'ondes. Le RSSI sera à 0
* "confirm" - l'appareil était précédemment à portée et est toujours à portée du scanner
* data.meta.device contient les détails de l'actif détecté
* data.meta.source.device et .global contiennent les détails du scanner d'ondes qui a détecté l'appareil
* data.movement  - ( True – L'actif est en mouvement / False – L'actif n'est pas en mouvement)
* data.device.id - ID du tag (tag BLE) 
* data.signal - Force du signal 
* data.time - Heure de l'événement (dernière détection) 


#### F. Données heartbeat

Utilisé dans les solutions de traçage des contacts et de zonage des actifs, un enregistrement heartbeat indique une communication entre Microshare et un appareil portable pour s'assurer que l'appareil fonctionne correctement. Les enregistrements heartbeat sont utilisés pour les appareils en mode stockage et les appareils actifs sans enregistrements de contact précédents (qui ne seraient autrement pas détaillés dans les données d'événement des solutions de traçage des contacts). 

**Paramètres :**

- `id` : Le numéro d'identification de votre appareil en communication.
- `deviceBattery` : Le niveau de batterie de votre appareil.
- `messageType` : Ce champ sera « contact » pour une solution de traçage des contacts et « asset » pour une solution de zonage des actifs. 
- `mode` : Ce champ indiquera « storage » si l'appareil en contact est en stockage et inactif. S'il indique « nominal », l'appareil en contact est actif mais n'a pas d'enregistrements de contact précédents. 

```
{
  "device": {
    "id": "ACD340663???"
  },
  "deviceBattery": 2.673,
  "messageType": "contact",
  "meta": {
    "device": [],
    "iot": {
      "device_id": "ACD340663???"
    },
    "source": {
      "device": [
        "HQ",
        "Main Floor",
        "Break Room",
        ""
      ],
      "global": [],
      "iot": {
        "device_id": "AA-BB-CC-DD-00-??-??-??"
      },
      "source": {}
    }
  },
  "mode": "nominal",
  "time": "2020-10-05T17:19:02.855Z"
}
```
