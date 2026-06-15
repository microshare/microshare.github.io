---
layout: docs
title: Glossaire Microshare™
description: Des termes Microshare™ vous semblent obscurs ?
lang: fr
translation_of: docs/2/general/quick-start/glossary.md
translations:
  en: /docs/2/general/quick-start/glossary
  fr: /docs/2/fr/general/quick-start/glossary
toc: true
---
---

{% include image.html url="/assets/img/thumbnail-3.jpg" description="vignette 2" %}

<br>

---

## Sommaire

1. [Vue d'ensemble](./#vue-densemble)
2. [Terminologie Microshare](./#terminologie-microshare)
3. [Terminologie du secteur](./#terminologie-du-secteur)
4. [Terminologie métier étendue](../faq/business-terms.md)
5. [Terminologie technique IoT étendue](../faq/technical-terms.md)




## Vue d'ensemble

---

Avec une documentation aussi vaste, de nombreuses expressions et mots peuvent ne pas être familiers au lecteur moyen. Cette page sert de référence pour tout mot inconnu que vous pourriez rencontrer. Le glossaire est divisé en deux parties : une pour les termes spécifiques à Microshare et une autre pour les termes fréquemment utilisés dans l'industrie IoT.

Vous avez du mal avec un mot ou une expression introuvable ici ? N'hésitez pas à demander de l'aide à `support@microshare.io`

---

## Terminologie Microshare

<br>

##### App

Une application Microshare est une application web configurée, gérée et accessible via le portail Microshare. Ces applications servent souvent à visualiser des données dans un tableau de bord.

<br>

##### Formatage des données

Le formatage ou le traitement des données est le processus par lequel Microshare prend les données chiffrées de votre ou vos appareil(s) et les représente sur votre tableau de bord.

<br>

##### Ingestion de données

L'ingestion de données est le processus par lequel Microshare consomme des données provenant de diverses sources pour les distribuer via le Smart Network et/ou les stocker dans le [data lake](./#data-lake) Microshare.

<br>

##### Deploy-M

L'application mobile Microshare qui permet de configurer facilement vos appareils sur site depuis vos appareils Android ou iOS.

<br>

##### Appareil

Microshare utilise le terme « appareil » pour désigner un composant matériel individuel qui englobe un ou plusieurs [capteurs](./#capteur) utilisés pour collecter des données de votre environnement.

<br>

##### Cluster d'appareils

Un cluster d'appareils est un groupe d'appareils de même type – généralement situés au même endroit. Les clusters d'appareils peuvent également servir à diviser logiquement les appareils en groupes fonctionnels, dont les données sont destinées à être affichées ou analysées ensemble dans une seule représentation ou visualisation.

<br>

##### Événement

Données qui ont été [décompressées](./#packed) mais non stockées dans le [data lake](./#data-lake) Microshare.

<br>

##### Facts

Les applications Microshare stockent les informations de configuration spécifiques à l'application sous forme de [facts](./#facts) au format JSON. Lorsqu'une application est lancée, les facts sont transmis au JavaScript du fichier de formulaire sous-jacent comme des arguments passés à une fonction.

<br>

##### Formulaire

Un formulaire attribue le type de données traitées afin qu'elles puissent être correctement utilisées et affichées.

<br>

##### Identité

Le compte sous lequel vous opérez, qui détermine non seulement les données que vous pouvez consulter, mais aussi les applications et formulaires sur lesquels vous avez autorité. Une identité partage ses applications et ses droits de partage avec ses utilisateurs.

<br>

##### Microshare Core

Combine une architecture de [data lake](./#data-lake), une [API RESTful](./#api) simple permettant une interaction programmatique avec les objets de données, et un moteur de règles de sécurité contextuelle pour prendre des décisions de politique.

<br>

##### Microshare Stream

Fournit une architecture évolutive pour l'enrichissement intelligent des données et le traitement d'événements complexes.

<br>

##### Policy Fabric™

Microshare utilise un policy fabric breveté pour permettre à ses clients d'avoir un contrôle granulaire sur qui peut accéder à leurs données. Voir aussi les [règles de partage](./#share-rule).

<br>

##### Enregistrement

Chaque unité de données stockée dans le [data lake](./#data-lake) Microshare est appelée un enregistrement ou un enregistrement de partage.

<br>

##### recType

Le nom sous lequel les données sont stockées.

<br>

##### Règle

Une règle est une expression concrète d'une politique de partage. Elle permet à un propriétaire de données de définir les conditions dans lesquelles une opération demandée sera accordée. Les règles autorisent uniquement le partage. Elles n'empêchent pas le partage. Le partage est bloqué par défaut.

<br>

##### Capteur

Le composant de l'appareil qui collecte les informations de votre environnement.

<br>

##### Partage

Lorsqu'une [identité](./#identite) distribue la possibilité d'accéder à ses données à d'autres identités.

<br>

##### Enregistrement de partage

Chaque unité de données stockée dans le [data lake](./#data-lake) Microshare est appelée un enregistrement ou un [enregistrement de partage](./#enregistrement-de-partage).

<br>

##### Règle de partage

Une règle est une expression concrète d'une politique de partage. Elle permet à un propriétaire de données de définir les conditions dans lesquelles une opération demandée sera accordée. Les règles autorisent uniquement le partage. Elles n'empêchent pas le partage. Le partage est bloqué par défaut.

<br>

##### Tag

Une étiquette [JSON](./#json) attribuée à un appareil pour préciser son emplacement.

<br>

##### Vue

Une vue est un composant pour gérer l'accès aux données. Elle offre des moyens avancés d'interroger le [data lake](./#data-lake). Une vue peut également servir à stocker et récupérer des données statiques propriétaires.

<br>

---

## Terminologie du secteur

<br>

##### API

L'API RESTful Microshare (Application Programming Interface) est un ensemble de fonctions qui donnent aux développeurs un accès programmatique au système Microshare.

<br>

##### Bearer

Le compte associé au [jeton](./#jeton).

<br>

##### Intégration de données

L'intégration de données est le processus de combinaison de données provenant de différentes sources en une vue unifiée.

<br>

##### Data Lake

Microshare stocke ses données dans un [data lake](./#data-lake), un dépôt unique de différents types de données – brutes et transformées. Les producteurs de données les différencient en désignant un « type d'enregistrement », alias [recType](./#rectype), lors du stockage. Ce même recType doit être invoqué lors de la récupération des données.

<br>

##### Jumeau numérique

Une représentation ou un modèle virtuel d'un espace physique. Microshare utilise un système de tags hiérarchique pour le jumelage numérique.

<br>

##### Passerelle

L'« intermédiaire » entre le réseau Microshare et votre [appareil](./#appareil). L'appareil envoie les données collectées à la passerelle, qui les transmet ensuite au réseau Microshare.

<br>

##### JSON

JavaScript Object Notation ; un mécanisme pour stocker et récupérer des données arbitrairement complexes dans une variété de types sous forme de chaîne lisible par l'homme et multiplateforme.

<br>

##### Clé

Un élément d'information d'authentification utilisé dans vos interactions avec l'[API](./#api). Il s'agit d'une information très sensible qui ne doit être partagée avec personne.

<br>

##### LoRa®

La couche physique ou la modulation sans fil utilisée pour créer le lien de communication longue portée.

<br>

##### Packed

Les données brutes envoyées par votre appareil au format hexadécimal qui n'ont pas encore été [décompressées](./#unpacked) en données exploitables.

<br>

##### Requête

Une demande à l'[API](./#api) ou à une base de données pour obtenir des informations.

<br>

##### Robot

Les robots sont des microservices qui peuvent être configurés pour agir lorsqu'un événement déclencheur se produit.

<br>

##### Source

L'endroit d'où proviennent les informations.

<br>

##### Standard

Le modèle formel que Microshare respecte dans son processus de gestion des données.

<br>

##### Cible

L'endroit où vont les informations.

<br>

##### Jeton

Un élément d'information d'authentification à durée de vie courte utilisé dans vos interactions avec l'[API](./#api). Il s'agit d'une information très sensible qui ne doit être partagée avec personne.

<br>

##### Unpacked

Transformer les données binaires produites par l'appareil en données au format [JSON](./#json) pouvant être plus facilement traitées par le consommateur de données en aval.
