---
layout: docs
title: Vue d'ensemble administrateur
description: Ce que signifie être administrateur d'entreprise via Microshare™
lang: fr
translation_of: docs/2/admin/admin-management/overview.md
translations:
  en: /docs/2/admin/admin-management/overview
  fr: /docs/2/fr/admin/admin-management/overview
toc: true
redirect_from:
  - /docs/2/fr/admin/
---







{% include image.html url="/assets/img/thumbnail-4.jpg" description="vignette 2" %}

<br>

---------------------------------------

##### SOMMAIRE :

1. [Quelles sont les responsabilités de l'administrateur](./#1-quelles-sont-les-responsabilites-de-ladministrateur)
2. [Quelles données ou applications sont normalement partagées ?](./#2-quelles-donnees-ou-applications-sont-normalement-partagees)
3. [Types d'administrateurs](./#3-types-dadministrateurs)

---------------------------------------


## Quelles sont les responsabilités de l'administrateur ?
---------------------------------------

En tant qu'administrateur, vous êtes chargé de veiller à ce que les meilleures pratiques soient appliquées dans vos actions et celles de vos collaborateurs.

Selon le niveau d'administration, vous disposez d'outils puissants. Vous devez les utiliser en respectant les principales directives.

**Si, en parcourant cette documentation, vous rencontrez des problèmes ou souhaitez nous faire part de vos commentaires, n'hésitez pas à nous contacter à `support@microshare.io`.**


## Quelles données ou applications sont normalement partagées ?
---------------------------------------

Par défaut, les données d'un appareil ne sont PAS PARTAGÉES. Seul le propriétaire du cluster d'appareils peut voir les données (en supposant qu'il utilise sa propre autorisation pour le cluster). Dans la plupart des cas, une règle de partage pour ce recType devra être créée afin de permettre à d'autres parties de consulter les données. Le cluster d'appareils est géré par l'administrateur MS.

En revanche, les applications sont partagées au niveau de l'organisation par défaut. Elles ne nécessitent pas la création de règles de partage. Leur accès ne peut pas être restreint, bien qu'elles puissent être masquées de la vue utilisateur par défaut à l'aide des favoris. L'accessibilité d'une entité est donc gérée par toute personne accréditée en tant qu'administrateur d'identité.

Les robots ne sont visibles que par leur créateur. Il n'existe pas actuellement de mécanisme pour partager les robots.

Il est possible de partager des vues très simplement afin qu'elles puissent être réutilisées par un autre utilisateur ; seul leur usage sera partagé, elles ne seront pas visibles sur le compte de celui qui reçoit le droit de les utiliser.


## Types d'administrateurs
---------------------------------------

Il existe ainsi 3 types d'administrateur.

L'[administrateur d'identité](../identity-admin), accessible à tout utilisateur, est attribué aux personnes qui gèrent les entités.

L'[administrateur MS](../ms-admin), dont le compte `ms_admin@*customer.org*`, dispose d'une gestion des fonctionnalités plus étendue.

Le [Super Admin chez Microshare](../super-admin) est un membre de Microshare et peut donc créer des comptes ms_admin et des identités.

