---
layout: docs
title: Accéder à mes applications
description: Comment utiliser les applications Microshare™
lang: fr
translation_of: docs/2/general/quick-start/access-my-apps.md
translations:
  en: /docs/2/general/quick-start/access-my-apps
  fr: /docs/2/fr/general/quick-start/access-my-apps
toc: true
---





{% include image.html url="/assets/img/thumbnail-11.jpg" description="vignette 2" %}

<br>

---------------------------------------

##### SOMMAIRE :

1. [Se connecter](./#1-se-connecter)
2. [Sélectionner mon identité](./#2-selectionner-mon-identite)
3. [Naviguer sur mon compte](./#3-naviguer-sur-mon-compte)
4. [Quelles données ou applications sont normalement partagées ?](./#4-quelles-donnees-ou-applications-sont-normalement-partagees)

---------------------------------------


## 1. Se connecter
---------------------------------------

Maintenant que vous avez [créé un compte](../create-an-account), vous pouvez vous connecter.

Pour vous connecter, rendez-vous sur l'environnement de votre choix :

Dev : [dapp.microshare.io](https://dapp.microshare.io/login)

Prod : [app.microshare.io](https://app.microshare.io/login)

{% include image.html url="/assets/img/access-my-apps/log-in.png" description="Connexion" %}

Vous serez redirigé vers la page principale qui ressemble à :

{% include image.html url="/assets/img/access-my-apps/microshare-homepage.png" description="page d'accueil microshare" %}

Il s'agit du tableau de bord de l'identité sur laquelle vous êtes.

Ensuite, vous apprendrez comment changer d'identité pour alterner votre vue des tableaux de bord.

## 2. Sélectionner mon identité
---------------------------------------

Les identités facilitent la navigation d'un tableau de bord ou jeu de données à un autre sans changer de compte.

Ce guide ne fournit qu'une explication de base des identités. Pour une explication approfondie :

##### > [Guide d'identité](../../../technical/microshare-platform-advanced/identity-guide)

Lors de la connexion, l'identité affichée sera celle que vous avez utilisée le plus récemment.
Lors de la création de votre compte, vous avez simplement été ajouté à l'identité `Microshare Default`. Celle-ci est propre à votre organisation.

Si vous êtes client Microshare, vous serez invité à rejoindre d'autres identités, qui peuvent différer pour chaque site où vous avez intégré la technologie Microshare.

Par exemple, si vous avez quatre sites équipés de la technologie Microshare, vous serez invité à quatre identités, chacune avec plusieurs tableaux de bord et ses propres données.

Cliquer sur l'icône de profil en haut à droite vous permet de changer rapidement d'identité.

{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="identité microshare" %}

Ici, par exemple, nous pouvons alterner entre deux identités.


## 3. Naviguer sur mon compte
---------------------------------------

Une fois connecté et après avoir choisi l'identité correspondant à ce que vous recherchez, vous pourrez utiliser la sélection d'outils Microshare.

Votre page d'accueil regorge d'applications. Cliquez sur l'une d'elles pour consulter les données du cluster d'appareils correspondant.

{% include image.html url="/assets/img/access-my-apps/demo-dashboard.png" description="démo microshare" %}

En accédant à l'onglet `Manage`, vous aurez accès à des outils plus avancés.

{% include image.html url="/assets/img/access-my-apps/microshare-manage-new.png" description="page d'accueil microshare" %}

Pour une explication approfondie et l'utilisation de ces outils, consultez la partie technique du site de documentation :

##### > [Technique](../../../technical/quick-start/overview)

Si vous êtes administrateur des données de votre entreprise, utilisez la documentation administrateur pour des instructions plus détaillées :

##### > [Administration](/docs/2/admin/admin-management/overview/)

Pour plus d'informations sur les outils d'installation, poursuivez avec la partie installateur de la documentation :

##### > [Installateur](/docs/2/installer/quick-start/overview/)


## 4. Quelles données ou applications sont normalement partagées ?
---------------------------------------

Par défaut, les données d'un appareil ne sont PAS PARTAGÉES. Seul le propriétaire du cluster d'appareils peut voir les données du cluster (en supposant qu'il utilise sa propre autorisation pour le cluster). Dans la plupart des cas, une règle de partage pour ce type d'enregistrement devra être créée afin de permettre à d'autres parties de consulter les données. Le cluster d'appareils est géré par l'administrateur MS.

En revanche, les applications sont partagées au niveau de l'organisation par défaut. Elles ne nécessitent pas la création de règles de partage. Leur accès ne peut pas être restreint (bien qu'elles puissent être masquées de la vue utilisateur par défaut à l'aide des favoris). L'accessibilité d'une entité est donc gérée par toute personne accréditée en tant qu'administrateur d'identité.

Les robots ne sont visibles que par leur créateur. Il n'existe pas actuellement de mécanisme pour partager les robots.

Les vues peuvent être partagées afin d'être réutilisées par un autre utilisateur. Les vues ne seront pas visibles sur le compte qui a reçu le droit de les utiliser ; elles resteront visibles uniquement pour le créateur.

