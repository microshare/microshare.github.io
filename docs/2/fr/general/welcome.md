---
layout: docs
title: Bienvenue
description: >-
  Démarrez avec Microshare™, la seule solution préconfigurée et évolutive de
  gestion et de partage de données pour l'IoT au monde.
lang: fr
translation_of: docs/2/general/welcome.md
translations:
  es: /docs/2/es/general/welcome
  fr: /docs/2/fr/general/welcome
  en: /docs/2/general/welcome
toc: true
redirect_from:
  - /docs/2/general/
---
---------------------------------------

{% include image.html url="/assets/img/banner-2.jpg" description="logo ms" %}

##### SOMMAIRE : 

1. [Introduction](./#introduction)
2. [Liens rapides](./#quick-links)
3. [Plateforme](./#platform)

---------------------------------------
## Important

Vous vous demandez si la console Microshare est active ? Vérifiez son statut sur la [page d'accès à la console](https://www.microshare.io/management-console-access/) pour connaître les dates de mise à jour.


Si vous avez des questions auxquelles cette documentation ne répond pas, contactez `support@microshare.io`.


## Introduction
---------------------------------------

Microshare fournit une stratégie de données en tant que service, permettant à nos clients de capturer rapidement des informations jusque-là cachées, qui génèrent des économies de coûts, des indicateurs de durabilité et des opportunités commerciales. Nos solutions produisent des données dès le premier jour, installées à grande échelle rapidement par du personnel non technique et fonctionnent indépendamment des réseaux informatiques sensibles des entreprises. Nos solutions créent un jumeau numérique de vos actifs physiques, offrant une vue complète de leurs performances, des risques auxquels ils sont confrontés et des mesures nécessaires pour en tirer le meilleur rendement.

La documentation Microshare guide tous les utilisateurs tout au long du processus d'utilisation des outils Microshare afin qu'ils puissent tirer parti de leurs données.

Vous souhaitez en savoir plus sur les solutions Microshare ? Consultez notre site web sur [microshare.io.](https://www.microshare.io/)


## Que puis-je faire ?
---------------------------------------

En tant qu'utilisateur ordinaire, vous visualiserez vos données via une solution Microshare. Pour commencer, [créez un compte](/docs/2/general/quick-start/create-an-account/) et suivez le [guide d'accès à mes applications](/docs/2/general/quick-start/access-my-apps/). 
Vous souhaitez découvrir ce que Microshare propose, **consultez notre [page de démonstration en direct](/docs/2/general/meet-microshare/demo-live/) pour voir nos solutions en action !**

Vous souhaitez en savoir plus sur Microshare ? La [page Pourquoi Microshare](/docs/2/general/meet-microshare/why-microshare/) vous guidera à travers les applications des solutions Microshare.

## Et si je ne suis pas un utilisateur général ?
---------------------------------------

Cette documentation propose des guides pour d'autres rôles au sein d'une solution Microshare.

Êtes-vous en charge de la mise en place d'une solution Microshare ? Consultez nos guides pour un [Installateur.](/docs/2/installer/quick-start/overview/)

Vous gérez les données de votre entreprise ou d'un client ? Utilisez les [guides Administrateur.](/docs/2/admin/admin-management/overview/)

Êtes-vous un ingénieur ou un développeur travaillant sur les aspects techniques de Microshare ? Consultez la [section Technique.](/docs/2/technical/quick-start/overview/)

## Plateforme
---------------------------------------

{% include image.html url="/assets/img/banner.jpg" description="logo ms" %}

La plateforme Microshare est composée de deux ensembles coopératifs de microservices : **Microshare Core** et **Microshare Stream**.

Microshare Core combine une architecture de lac de données, une API RESTful simple permettant une interaction programmatique avec les objets de données, et un moteur de règles de sécurité contextuelle pour prendre des décisions de politique.
L'API permet le stockage (via POST) et la récupération (via GET). Le [lac de données](https://en.wikipedia.org/wiki/Data_lake) peut stocker tout type de données pouvant être sérialisées en JSON. Vos données sont stockées sous une forme annotée mais non modifiée dans le lac de données. Les opérations de récupération tiennent compte de la politique établie par un propriétaire de données avant d'accorder ou de rejeter toute opération demandée.

Microshare Stream fournit une architecture évolutive pour l'enrichissement intelligent des données et le traitement d'événements complexes.
Les Robots sont des microservices pouvant être configurés pour agir lorsqu'un événement déclencheur se produit.
Les événements déclencheurs peuvent inclure des événements planifiés (démarrage programmé), l'introduction de nouvelles données et l'invocation de politiques.
Vous pouvez créer votre propre logique unique en écrivant des fonctions Javascript dans une configuration de Robot.

Ces deux entités sont regroupées sur la plateforme Microshare. Il s'agit de **Microshare Composer** ; en effet, l'intérêt de cette plateforme est de pouvoir construire différents outils capables de fonctionner ensemble pour créer des applications, des workflows intelligents et extrêmement efficaces.

Vous pouvez accéder à la plateforme Microshare ici : 

#####   [Production](https://app.microshare.io/composer)
#####   [Développement](https://dapp.microshare.io/composer)
