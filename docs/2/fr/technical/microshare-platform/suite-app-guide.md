---
layout: docs
title: Configuration de l'application Suite
description: Page enfant du guide du tableau de bord
group: advanced
lang: fr
translation_of: docs/2/technical/microshare-platform/suite-app-guide.md
translations:
  en: /docs/2/technical/microshare-platform/suite-app-guide
  fr: /docs/2/fr/technical/microshare-platform/suite-app-guide
toc: true
---


---------------------------------------

Une Suite App vous permet d'encapsuler plusieurs applications dans une interface unique, plus simple à configurer et à parcourir que le menu sandwich des formulaires trending ou realtime. Il est facile de configurer une ou plusieurs suite apps qui regroupent des applications « enfants ».

## 1. Créer une nouvelle application :

{% include image.html url="\assets\img\suite-app-1.png" description="Dashboard Guide 4" %}

* `App Type` : Suite
* `Name` : Saisir le nom visible par l'utilisateur pour la nouvelle application.
* `Parent Tag(s)` : (Optionnel) permet à la suite app d'être elle-même configurée dans une autre suite app.
* `Child Tag` : Saisir une balise unique que votre suite app utilise pour sélectionner son application enfant ; DOIT correspondre aux parent tag(s) des applications enfants.
* `Style Choice` : Showcase.
* `Theme` : [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include` : Laisser vide sauf instruction contraire.
* `Icon` : Sélectionner le même que dans la suite app de démonstration du compte assets.
* `Facts to Display` : None.
* `Form to Display` : choisir Suite icon form v2.5.
* `footerLogo` : [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer.png)
* `headerLogo` : [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/header.png)
* `sortedApps` : (optionnel) une liste des noms d'applications. Ne doit être utilisé que si l'ordre de tri n'est pas alphabétique.

{% include image.html url="\assets\img\dashboard-guide-3.png" description="Dashboard Guide 4" %}
{% include image.html url="\assets\img\app-facts-tree.png" description="Dashboard Guide 4" %}
## 2. Configuration des applications enfants de la Suite App

Vous vous souvenez du « Child Tag » configuré dans la Suite App ? Ajoutez-le au champ « Parent Tag(s) » de l'application ou des applications concernées.

N'oubliez pas de tester votre Suite App ; les applications enfants doivent apparaître sous forme de tuiles dans la Suite App.
