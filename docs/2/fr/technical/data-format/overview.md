---
layout: docs
title: Vue d'ensemble des formats de données
description: Découvrez la structure des données Microshare™.
lang: fr
translation_of: docs/2/technical/data-format/overview.md
translations:
  en: /docs/2/technical/data-format/overview
  fr: /docs/2/fr/technical/data-format/overview
toc: true
---





{% include image.html url="/assets/img/thumbnail-14.jpg" description="vignette 2" %}


---------------------------------------


#### Sommaire :

1. [Introduction](./#introduction)
2. [Métriques disponibles](./#metriques-disponibles)
3. [Enveloppe de données](./#enveloppe-de-donnees)
4. [Aller plus loin](./#aller-plus-loin)

---------------------------------------


## Introduction
---------------------------------------

Pour mieux utiliser les données Microshare, il est important de comprendre comment les données sont structurées,
 notamment pour l'utilisation des vues, des robots, des API et la création d'applications.

Comme décrit dans la section Microshare Platform Advanced, le dépaquetage des données suit l'ingestion des données. Mais qu'est-ce que cela signifie en termes de données ?

Lorsque les données brutes sont ingérées dans Microshare, elles sont stockées sous une forme simple, tandis que les données dépaquetées sont stockées dans le recType dépaqueté. Le nouveau recType dépaqueté contient beaucoup plus de données selon le formalisme Microshare.

Les recTypes sont explorés plus en détail dans la [page Collection API](/docs/2/technical/api/api-collection/#api-structures).

Ce guide vous aide à distinguer les différents composants d'une charge utile de données Microshare.


## Métriques disponibles
---------------------------------------

Les données télématiques proviennent de divers appareils de détection certifiés et peuvent capturer de nombreuses caractéristiques physiques de l'appareil lui-même et de l'environnement dans lequel il est situé. Un seul appareil peut être équipé de plusieurs capteurs et donc rapporter plusieurs métriques. Les métriques sont définies ci-dessous.

### Métriques du domaine appareil

msg_type Prise en charge spécifique au fournisseur pour les appareils polyvalents.

fault Signal spécifique au fournisseur indiquant que l'appareil ou le capteur dysfonctionne.

voltage mesuré en V. Potentiel électrique de la batterie ou de la source d'alimentation.

battery mesuré en %. Pourcentage d'énergie de batterie restante.

charge mesuré en %. Pourcentage de charge de batterie restante.

period mesuré en s. Fréquence de rapport de l'appareil.

rssi mesuré en dBm. Indicateur de force du signal relatif mesurant la puissance du signal du réseau sans fil.

snr mesuré en dB. Indicateur du rapport signal sur bruit mesurant les interférences du signal du réseau sans fil.

reports_since_reset Nombre de rapports depuis la mise sous tension ou la réinitialisation de l'appareil.

temperature mesuré en °C. Température au niveau du circuit imprimé.

mode Unité spécifique au fournisseur pour prendre en charge les modes de fonctionnement configurables.

### Métriques du domaine capteur

#### Environnemental

temperature mesuré en °C. Mesure de chaleur ou de froid exprimée sur l'échelle Celsius.

humidity mesuré en %RH. Mesure de la concentration de vapeur d'eau présente dans l'air par rapport au maximum (également appelée humidité relative).

pressure mesuré en hPa. Mesure de la pression atmosphérique en force par unité de surface exercée par une colonne atmosphérique.

illuminance mesuré en lx. Mesure de la quantité de lumière tombant sur une surface donnée et s'y répandant.

voc mesuré en ppb. Mesure des composés organiques volatils présents dans l'air.

co2 mesuré en ppm. Mesure du dioxyde de carbone présent dans l'air.

iaq Mesure spécifique au fournisseur de la qualité de l'air par rapport à l'idéal pour l'usage humain.

loudness mesuré en dBa. Mesure de l'amplitude de la sensation auditive transmise par l'air.

haziness mesuré en %. Pourcentage de lumière transmise bloquée par des particules dans l'air.

smokiness mesuré en %. Pourcentage de lumière transmise bloquée par de la fumée dans l'air.

gas mesuré en %. Pourcentage de la composition gazeuse de l'air en fraction molaire.

#### Électrique et mécanique

vibration mesuré en Hz. Mesure de l'oscillation d'un objet solide ou à l'intérieur d'un objet solide.

current mesuré en A. Mesure du flux électrique ou du mouvement des porteurs de charge à travers un milieu conducteur.

voltage mesuré en V. Mesure du potentiel électrique de la batterie ou de la source d'alimentation.

multiplier Multiplicateur mathématique pour définir l'échelle d'une mesure électrique.

#### Mouvement et occupation

presence Mesure binaire représentant la détection d'un objet chaud.

motions_since_reset Nombre de changements de position d'objets chauds (mouvements) depuis la mise sous tension ou la réinitialisation de l'appareil.

events_since_reset Nombre de changements d'état depuis la mise sous tension ou la réinitialisation de l'appareil.

motions_since_transmit Nombre de changements de position d'objets chauds (mouvements) depuis le dernier rapport.

acceleration mesuré en m/s2. Mesure de la variation de vitesse d'un objet solide.

velocity mesuré en m/s. Mesure de la vitesse de déplacement d'un objet solide.

x Position relative à un point de départ arbitraire dans le plan horizontal.

y Position relative à un point de départ arbitraire dans le plan vertical.

z Position relative à un point de départ arbitraire dans le plan longitudinal.

#### État du conteneur (ex. baril/bac à déchets)

closed Mesure binaire représentant la proximité relative (proche) de deux objets magnétiques (effet Hall).

open Mesure binaire représentant la proximité relative (éloignée) de deux objets magnétiques (effet Hall).

fill mesuré en %. Mesure en pourcentage de la réduction de capacité d'un conteneur de profondeur fixe.

distance mesuré en m. Mesure de l'espace libre entre deux objets solides.

#### Localisation

gps Mesure de la position relative à la surface de la Terre selon le système de coordonnées géographiques.

lat mesuré en °. Mesure de la distance Nord/Sud par rapport à l'équateur terrestre.

lon mesuré en °. Mesure de la distance Est/Ouest par rapport au méridien principal de la Terre.

accuracy mesuré en m. Mesure du rayon d'incertitude attendu pour une mesure de position.

#### Bouton Feedback

push Mesure binaire de l'activation mécanique d'un bouton ou d'un interrupteur.

swipe Mesure binaire de l'activation électromécanique.

pushes_since_reset Nombre d'activations mécaniques (appuis) depuis la mise sous tension ou la réinitialisation de l'appareil.

count_since_reset Nombre d'événements génériques depuis la mise sous tension ou la réinitialisation de l'appareil.

count_since_transmit Nombre d'événements génériques depuis le dernier rapport.

#### Alarmes et événements génériques

leak Présence binaire de liquide détectable électriquement.

alarm Mesure binaire d'occurrence d'événement générique (voir SubTypes).

#### Temps

time Mesure du temps qui ne cesse de s'écouler, en secondes depuis le 1er janvier 1970.

iso_time Mesure du temps qui ne cesse de s'écouler, au format ISO 8601.

seconds_since_change mesuré en s. Nombre de secondes depuis le dernier changement d'état d'événement.

## Enveloppe de données
---------------------------------------

Pour commencer par quelque chose de simple, prenons l'exemple de données que nous avons généré avec le tutoriel API : [API Share API](/docs/2/technical/api/share-api/#2-write-data).


{% highlight javascript %}
{
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 999,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
    "objs": [
        {
            "_id": "5ed1123046e0fb0028b70???",
            "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
            "createDate": "2020-05-29T13:46:24.779Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "Test": "Data"
            },
            "desc": "",
            "id": "5ed1123046e0fb0028b70???",
            "name": "",
            "origin": {
                "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
                "createDate": "2020-05-29T13:46:24.779Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type your.name",
                "id": "5ed1123046e0fb0028b70???",
                "name": "your name",
                "remoteAddress": "your remote address",
                "tokendata": {
                    "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
                    "ip": "your ip address"
                }
            },
            "owner": {
                "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "your.name",
            "tstamp": 1590759984779,
            "updateDate": "2020-05-29T13:46:24.779Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}
{% endhighlight %}

#### A) Meta

Dans l'exemple ci-dessus, les informations ont été demandées sans spécification du nombre de pages ni de la quantité de données par page. Par défaut, le nombre de pages (`totalPages`) est défini à 1 et le nombre de données `perPage` est défini à 999. Comme l'exemple ne contient qu'une seule donnée, il comporte `un seul enregistrement et une seule page`.

L'objet `source` représente l'origine des informations. Dans ce cas, la charge utile de données provient de la base de données ou `db`.

Veuillez noter que si vous avez accès aux données `meta` mais pas aux données `obj`, c'est parce que vous ne disposez pas des privilèges nécessaires pour les lire. Vos privilèges peuvent être ajustés par la création d'une [règle de partage](/docs/2/technical/microshare-platform/rules-guide).


#### B) Objs

La section `Objs` des données stocke la plupart des descripteurs de l'interaction. `Objs` stocke les données sous forme de tableau ; l'utilisation de plusieurs entrées peut donc être nécessaire selon l'appel.

##### B.1 Valeurs simples

{% highlight javascript %}
"_id": "5ed1123046e0fb0028b70???",
"checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
"createDate": "2020-05-29T13:46:24.779Z",
"creatorId": "yourname@microshare.io",

"desc": "",
"id": "5ed1123046e0fb0028b70???",
"name": "",

"recType": "your.name",
"tstamp": 1590759984779,
"updateDate": "2020-05-29T13:46:24.779Z",
"updaterId": "yourname@microshare.io"
{% endhighlight %}

* `"_id"` et `"id"`

L'identifiant des données est son identifiant unique. Il est utilisé par un technicien Microshare pour retrouver une donnée particulière dans le datalake.

* `"checksum"`

Le checksum est un hachage cryptographique de la portion de données de l'enregistrement. En utilisant l'algorithme de hachage sha-256 pour générer un nouveau hachage à partir du contenu de l'élément Data, une comparaison peut être effectuée pour s'assurer que les données n'ont pas été compromises. Un checksum est également inclus dans la section Origin de la structure JSON qui capture le contenu des données lorsque l'enregistrement a été introduit pour la première fois dans le système. En comparant ces deux checksums, vous pouvez prouver que les données n'ont pas été modifiées à l'intérieur du système Microshare.

* `"createDate"`

CreateDate est un horodatage date/heure ISO 8601 au format YYYY-MM-DDThh:mm:ss.sTZD qui représente la date et l'heure d'introduction des données dans le système Microshare.

* `"creatorId"`

CreatorId fournit l'adresse e-mail du créateur de cette donnée.

* `"desc"`

Cet objet sert à décrire le capteur dont proviennent les informations. Habituellement, cet objet est vide.

* `"name"`

Cet objet donne le nom du capteur dont proviennent les informations. Ce champ est habituellement vide.

* `"recType"`

Le recType est une notation qui décrit le format des données. Il est utilisé pour orienter le flux de traitement dans tout le Smart Network. C'est l'étiquette la plus importante utilisée pour le stockage et la récupération des informations dans le système Microshare. Les recTypes qui commencent par io.microshare utilisent un format JSON canonique géré par Microshare. Vous trouverez ces formats canoniques décrits ici. Vous pouvez en savoir plus sur les [recTypes ici](/docs/2/technical/microshare-platform-advanced/data-ingestion/#2-lorawan-network-ingestion-via-device-cluster).

* `"tstamp"`

Il s'agit de l'horodatage (en millisecondes) en unité d'époque Unix. L'époque Unix (ou temps Unix ou temps POSIX ou horodatage Unix) est le nombre de secondes écoulées depuis le 1er janvier 1970 (minuit UTC/GMT), sans compter les secondes intercalaires (en ISO 8601 : 1970-01-01T00:00:00Z). Au sens strict, l'époque est le temps Unix 0 (minuit le 1/1/1970), mais « époque » est souvent utilisé comme synonyme de temps Unix. Certains systèmes stockent les dates d'époque sous forme d'entier signé 32 bits, ce qui peut poser des problèmes le 19 janvier 2038 (connu sous le nom de problème de l'an 2038 ou Y2038). Le convertisseur sur cette page convertit les horodatages en secondes (10 chiffres), millisecondes (13 chiffres) et microsecondes (16 chiffres) en dates lisibles.

[https://www.epochconverter.com/](https://www.epochconverter.com/)

Ici, la valeur est 1590759984779, donc la date est vendredi 29 mai 2020 13:46:24.779, ce qui correspond exactement à la valeur `createDate` : "2020-05-29T13:46:24.779Z".

* `"updateDate"`

UpdateDate est un horodatage date/heure ISO 8601 au format YYYY-MM-DDThh:mm:ss.sTZD qui représente la date et l'heure de la dernière mise à jour des données dans le système Microshare. Si les données n'ont pas été mises à jour, ce sera la même valeur que createDate.

* `"updaterId"`

Le `updaterId` indique quel utilisateur a mis à jour les données en dernier. Si les données n'ont pas été mises à jour, le `updaterId` sera le même que le `creatorId`.

##### B.2 Data

{% highlight javascript %}
"data": {
    "Test": "Data"
},
{% endhighlight %}

Cette section contient les informations principales telles qu'ingérées par le Smart Network Microshare. Le format de la section data variera en fonction du recType. Si le recType commence par io.microshare, le format canonique de cette section sera documenté dans cette section.

##### B.3 Origin

{% highlight javascript %}
"origin": {
    "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
    "createDate": "2020-05-29T13:46:24.779Z",
    "creatorId": "yourname@microshare.io",
    "desc": "Record of Type your.name",
    "id": "5ed1123046e0fb0028b70???",
    "name": "your name",
    "remoteAddress": "your remote address",
    "tokendata": {
        "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
        "ip": "your ip address"
    }
},
{% endhighlight %}

Vous trouvez ici l'origine des données, qui les a créées, quand, et sous quel recType (`name`).

Vous trouverez également encore plus d'informations sur les PI des systèmes qui ont créé ces données.

L'origine peut être utile lorsque les données vous sont partagées, car vous pouvez facilement déterminer d'où elles proviennent.


##### B.4 Owner

{% highlight javascript %}
"owner": {
    "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
    "org": "io.microshare",
    "owners": [],
    "user": "yourname@microshare.io"
},
{% endhighlight %}

La propriété des données est une partie essentielle des données ; vous y trouverez qui possède les données, quel compte (`user`) et sous quelle identité (`org`). Il peut y avoir plusieurs propriétaires pour chaque donnée. Les propriétaires ont la possibilité de créer des règles de partage qui accordent des privilèges à d'autres utilisateurs.

Les informations supplémentaires dans `appid` correspondent à la clé d'application utilisée pour créer les données. La clé d'application crée un jeton ou un jeton de canal pour créer les données de manière sécurisée.

## Aller plus loin
---------------------------------------


Ensuite, vous devriez consulter les [Standards Microshare](/docs/2/fr/technical/data-format/microshare-standards) pour approfondir le processus d'ingestion des données par les clusters d'appareils et la manière de demander des informations à l'aide d'une action push. Ce guide décrit les composants des paquets de données IoT et des données IPSO.

