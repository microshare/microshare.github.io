---
layout: docs
title: Traçage des contacts
description: Une page dédiée à la compréhension de la réception des données
lang: fr
translation_of: docs/2/technical/data-format/contact-tracing.md
translations:
  en: /docs/2/technical/data-format/contact-tracing
  fr: /docs/2/fr/technical/data-format/contact-tracing
toc: true
---




#### Sommaire :
1. [Vue d'ensemble](./#1-vue-densemble)
2. [Flux de données](./#2-flux-de-donnees)
3. [Décompression](./#3-decompression)
4. [Exemples de données de traçage des contacts](./#4-exemples-de-donnees-de-tracage-des-contacts)
5. [Foire aux questions](./#5-foire-aux-questions)


## 1. Vue d'ensemble
---------------------------------------
**La solution Microshare Contact Tracing fonctionne comme suit :**
{% include image.html url="\assets\img\Contact_tracing1.png" width="500" height="500" description="contact tracing image" %}

**Avec les paramètres par défaut recommandés de Kerlink, le comportement suivant est attendu.**

<br>
**1.** Les balises personnelles effectuent une analyse pendant 220 ms à un intervalle de 40 000 ms.

<br>
**2.** Les balises personnelles émettent des annonces à un intervalle de 200 ms.

<br>
**3.** Les balises personnelles enregistrent un événement de contact lorsqu'elles sont à proximité d'autres balises personnelles ou de localisation si les conditions suivantes sont remplies :
  - Le contact est détecté au moins 4 fois sur 7 dans la fenêtre de contact glissante.
  - Le contact présente un niveau RSSI égal ou supérieur au seuil RSSI de -70 dBm.
  
<br>
**4.** L'appareil Wave récupère les événements de contact des balises personnelles via le transport BLE. 
  - Après une récupération réussie, la mémoire et l'horloge des balises personnelles sont réinitialisées.
  
<br>
**5.** La Wave transmet les données à la passerelle LoRaWAN via le transport LoRaWAN.

<br>
**6.** Le Microshare Smart Network reçoit et traite les données brutes de la charge utile.
  - Les données d'événement de contact traitées incluent l'identifiant de la balise, la tension, le RSSI moyen, la durée du contact et l'horodatage relatif.

<br>
## 2. Flux de données
---------------------------------------

{% include image.html url="\assets\img\uct\uct-3.png" description="uct-3" %}

Avec les paramètres par défaut recommandés de Kerlink, le comportement suivant est attendu.

- Les balises personnelles effectuent une analyse pendant 220 ms à un intervalle de 40 000 ms.
- Les balises personnelles émettent des annonces à un intervalle de 200 ms.
- Les balises personnelles enregistrent un événement de contact lorsqu'elles sont à proximité d'autres balises personnelles ou de localisation si les conditions suivantes sont remplies :
  - Le contact est détecté au moins 4 fois sur 7 dans la fenêtre de contact glissante.
  - Le contact présente un niveau RSSI égal ou supérieur au seuil RSSI de -70 dBm.
- L'appareil Wave récupère les événements de contact des balises personnelles via le transport BLE. 
  - Après une récupération réussie, la mémoire et l'horloge des balises personnelles sont réinitialisées.
- La Wave transmet les données à la passerelle LoRaWAN via le transport LoRaWAN.
- Le Microshare Smart Network reçoit et traite les données brutes de la charge utile.
  - Les données d'événement de contact traitées incluent l'identifiant de la balise, la tension, le RSSI moyen, la durée du contact et l'horodatage relatif.

## Flux de données

1. De balise à balise via le transport BLE : une certaine perte de données est attendue en raison des collisions BLE ou d'une annonce manquée pour des raisons de synchronisation. Cela est atténué par l'utilisation du seuil de contact de 4 fois sur 7 dans la fenêtre de contact glissante.
2. De balise à Wave via le transport BLE : la Wave ne réinitialise la balise personnelle qu'après une récupération réussie des données d'événement de contact.
3. De la Wave à la passerelle LoRaWAN via le transport LoRaWAN. La Wave n'envoie les données qu'une seule fois. Si une passerelle LoRaWAN n'écoute pas, les données seront perdues.
4. Le Microshare Smart Network reçoit et traite les données brutes de la charge utile. Les données ont été stockées dans la base de données Microshare sous le recType .unpacked et peuvent donc être rejouées si nécessaire.
5. La bibliothèque de décompression LoRaWAN du Microshare Smart Network décompresse les données brutes vers le recType .packed.
6. Le robot du Microshare Smart Network aplatit les événements de contact enregistrés en événements individuels, généralement stockés dans le recType .unpacked.event, et peuvent donc être rejoués si nécessaire.
7. Diffusion vers le hub d'événements via un mécanisme de streaming.


<br>
**3.** De la Wave à la passerelle LoRaWAN via le transport LoRaWAN. La Wave n'envoie les données qu'une seule fois. Si une passerelle LoRaWAN n'écoute pas, les données seront perdues.

<br>
**4.** Le Microshare Smart Network reçoit et traite les données brutes de la charge utile. Les données ont été stockées dans la base de données Microshare sous le recType .unpacked et peuvent donc être rejouées si nécessaire.

<br>
**5.** La bibliothèque de décompression LoRaWAN du Microshare Smart Network décompresse les données brutes vers le recType .packed.

<br>
**6.** Le robot du Microshare Smart Network aplatit les événements de contact enregistrés en événements individuels, généralement stockés dans le recType .unpacked.event, et peuvent donc être rejoués si nécessaire.

<br>
**7.** Diffusion vers le hub d'événements via un mécanisme de streaming.

<br>
## 3. Décompression
---------------------------------------

#### Décompression et sortie des données

Les données décompressées sont produites dans un format plus lisible :

{% include image.html url="\assets\img\Contact_tracing2.png" description="contact tracing image 2" %}

#### Décompresser les données des appareils Wave

Les données décompressées effectuent les opérations suivantes : 
- Déterminer si la balise est une balise de localisation ou une balise personnelle.
- Calculer l'heure de début et de fin à partir des horodatages relatifs.
- Aplatir l'enregistrement en événements individuels.

#### Données d'événement en sortie 
- `originatingDevice` - Identifiant de la balise personnelle qui a détecté un événement de contact.
- `originatingDeviceBattery` - Niveau de tension de la balise personnelle.
- `detectingDevice` - Identifiant de la balise personnelle avec laquelle le contact a eu lieu.
- `startTime` - Heure de début du contact en UTC.
- `start` - Décalage en minutes par rapport à l'heure de réception auquel l'événement de contact a commencé.
- `duration` - Durée de l'événement de contact en minutes.
- `endTime` - Heure de fin du contact en UTC.
- `locationBeacon` - true si le contact était avec une balise de localisation, false si c'était une balise personnelle.
- `averageRSSI` - RSSI moyen sur la durée de l'événement de contact.

## Exemples de données de traçage des contacts
---------------------------------------

{% highlight java %}
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

{% endhighlight %}

Les Kerlink Waves, également appelées « sniffers Bluetooth », sont des appareils LoRaWAN. Avec les balises personnelles et de localisation, les Waves font partie du [cluster d'appareils](/docs/2/fr/technical/microshare-platform/device-cluster-guide/), et leurs informations sont regroupées. Dans les données du cluster d'appareils, la localisation individuelle est fournie. Cela correspond à la section « device » de l'extrait de code ci-dessus. De plus, le cluster d'appareils détaille la localisation de l'ensemble du groupe de données, par exemple un bâtiment spécifique. C'est le rôle des métadonnées « global ». 

En résumé, les emplacements des appareils sont les emplacements spécifiques de chaque appareil, tandis que les données globales décrivent l'emplacement du cluster d'appareils (le groupe de Waves et de balises personnelles).

**Vous ne savez pas comment nommer vos balises ? Consultez la [page d'installation Contact Tracing.](/docs/2/installer/specific-installations/contact-tracing-installation/#registerWave)**

## 4. Exemples de données de traçage des contacts
---------------------------------------
Selon la section du pipeline que vous consultez, votre fichier JSON aura un aspect différent. Votre code JSON peut donc différer des exemples suivants. Le code JSON ci-dessous est découpé en sections pour vous aider à interpréter vos données.  

#### Exemple 1 : un fichier de sortie .unpacked.event d'une détection entre une balise personnelle et une balise de localisation.

{% highlight javascript %}
  {
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 1,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
{%  endhighlight %}
    
La section ci-dessus indique la quantité de données fournies dans le fichier JSON. Il y a une page et les informations proviennent de la base de données. 

{% highlight javascript %}
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
{% endhighlight %}

Cette section fournit les données de l'appareil qui a créé l'enregistrement. L'appareil `AC233F664???` était en contact avec l'appareil `000003BAB???` pendant trois minutes dans le salon (Lounge). De plus, les identifiants des appareils sont fournis ainsi que l'heure à laquelle l'enregistrement a été effectué. Le champ `locationBeacon` est true, ce qui signifie que cet enregistrement correspond à un échange entre une balise personnelle et une balise de localisation. 

{% highlight javascript %}
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

{% endhighlight %}
            

Cette section détaille le cluster d'appareils auquel l'appareil source appartient. L'identifiant du cluster d'appareils est fourni ainsi que la charge utile, l'heure de réception de la charge utile et le nombre de communications entre le cluster d'appareils et la passerelle (`fcnt_dwn` et `fcnt_up`).

{% highlight javascript %}
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
{% endhighlight %} 

La dernière section de cet exemple réitère les informations données ci-dessus, mais détaille également les informations du créateur du cluster d'appareils, y compris son e-mail, son identifiant, son adresse IP et son organisation. De plus, le recType sous lequel ces données JSON sont enregistrées est indiqué comme `io.microshare.contact.unpacked.event`.

#### Exemple 2 : des données de sortie .unpacked.event d'un contact entre deux balises personnelles.

Voici un exemple des données de sortie que vous verriez lors d'un échange entre deux balises personnelles. 

{% highlight java %}
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
{% endhighlight %}

Cette section indique que l'enregistrement correspond à un échange entre une balise personnelle source et une balise personnelle détectée, car le champ `locationBeacon` est false. De plus, l'e-mail du créateur est fourni ainsi que la date de création, l'heure de la détection, la durée du contact et la force du signal. 

{% highlight javascript %}
            "originatingDevice":"EEA0E0E2D???",
            "originatingDeviceBattery":"2.658V",
            "start":5,
            "startTime":"2020-05-07T14:35:00.000Z",
            "device":{
                "id":"EEA0E0E2D???"
            },
{% endhighlight %}

Il s'agit des informations sur la balise personnelle source dans l'échange. L'identifiant de la balise personnelle source est fourni, ainsi que l'heure de détection et son niveau de batterie. 

{% highlight javascript %}
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
                    
{% endhighlight %}

Cette partie du code JSON fournit les détails de localisation du cluster d'appareils auquel la balise personnelle source appartient.

{% highlight javascript %}
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


{% endhighlight %}

Cette section détaille le cluster d'appareils auquel l'appareil source appartient. L'identifiant du cluster d'appareils est fourni ainsi que la charge utile, l'heure de réception de la charge utile et le nombre de communications entre le cluster d'appareils et la passerelle (`fcnt_dwn` et `fcnt_up`).

{% highlight javascript %}

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
        
        
{% endhighlight %}

Cette section détaille l'e-mail du créateur, son identifiant, son adresse IP, son identifiant d'application, son organisation et l'identifiant du jeton. Le fichier JSON de cet exemple est enregistré sous le recType `io.microshare.contact.unpacked.event`.

{% highlight javascript %}


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
{% endhighlight %}

Cette dernière section détaille l'emplacement du cluster d'appareils et réitère l'e-mail du créateur et le recType. 

## 5. Foire aux questions
---------------------------------------
<br>
**Question :** Où trouver les informations contenant tous les bracelets impliqués dans un contact ?

<br>
**Réponse :** Elles se trouvent sous .unpacked.event, qui inclut également les métadonnées (l'emplacement du cluster d'appareils et le lien). Si vous recherchez des données sur un bracelet spécifique, vous pouvez interroger les données à l'aide des [outils avancés Microshare](/docs/2/fr/technical/api/share-api/#3-read-data).

<br>

**Question :** Je vois deux fichiers d'informations différents, l'un intitulé `.unpacked` et l'autre `.event`. Quelle est la différence entre ces deux fichiers et lequel dois-je consulter ?

<br>
**Réponse :** Le fichier `.unpacked` contient les informations envoyées par un seul bracelet, tandis que le fichier `.event` est une version affinée de ces informations qui inclut les métadonnées (informations sur le cluster d'appareils, telles que l'emplacement du cluster) utilisées pour votre tableau de bord. Vous n'aurez besoin de consulter que le fichier `.event`, car il donne un contexte aux informations et est plus facile à interpréter. 

<br>

**Question :** Lors de la recherche des personnes en contact, devons-nous examiner à la fois les catégories de détection et de source ?

<br>
**Réponse :** Oui, vous devez vérifier à la fois les sources de détection et d'origine pour les appareils en contact les uns avec les autres. 

<br>
**Vous avez une question sans réponse ici ? Contactez `support@microshare.io` pour obtenir de l'aide.**

{% include image.html url="\assets\img\clean-safe.png" description="clean safe" %}
{% include image.html url="\assets\img\microshare-logo.png" description="logo" %}
