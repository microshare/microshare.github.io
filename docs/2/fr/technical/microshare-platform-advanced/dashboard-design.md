---
layout: docs
title: Conception de tableaux de bord
description: Outils en libre-service pour la conception. Faites passer vos tableaux de bord au niveau supérieur et créez votre propre design.
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/dashboard-design.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/dashboard-design
  fr: /docs/2/fr/technical/microshare-platform-advanced/dashboard-design
---
---------------------------------------

##### SOMMAIRE : 

1. [Système de tableaux de bord](./#1-systeme-de-tableaux-de-bord)
  - A. [Applications](./#a-applications)
  - B. [Application Suite](./#b-application-suite)
2. [CSS de design](./#2-css-de-design)

---------------------------------------

## 1. Système de tableaux de bord
---------------------------------------

### A. Applications

Vous utilisez des applications Microshare mais vous ne savez pas comment elles fonctionnent ? Voici une brève explication de leur système de fonctionnement.

Une application est composée de 3 composants Microshare : 

1) La structure de l'application, alias « form ». Nous sélectionnons un form lors de la création d'une application depuis une liste déroulante, vous le trouverez sous le nom « Form to display »

2) Le design de l'application, alias « stylesheet form ». Il ajoute tout le design au code de structure, vous le trouverez sous le nom « Include » dans les paramètres de l'application. 

3) La configuration de l'application, alias « app facts ». Une fois que nous avons le code de l'application et le design, la dernière étape consiste simplement à alimenter l'application avec la bonne configuration (« quels tableaux de bord, quelles données... »)

Ces 3 composants Microshare sont configurés en interne par Microshare et nous vous conseillons de ne pas les modifier sans l'approbation de Microshare. Nous verrons plus tard comment modifier le design dans la [Section 2](./#2-css-de-design)

#### Comment voir ces configurations d'application ? 

1) Connectez-vous à Microshare

{% include image.html url="/assets/img/apps/login.png" description="Login" %}

2) Accédez au panneau « Manage » (barre supérieure)

{% include image.html url="/assets/img/apps/home.png" description="Home" %}

3) Accédez à la section « Apps » (barre latérale gauche)

{% include image.html url="/assets/img/apps/apps_menu.png" description="Home" %}

4) Cliquez sur une application puis sur le bouton d'édition en haut à droite.

{% include image.html url="/assets/img/apps/edit_app.png" description="Home" %}

5) Vous voyez ici les configurations de l'application.

{% include image.html url="/assets/img/apps/app_config.png" description="Home" %}



### B. Application Suite

L'application suite est une extension des applications : c'est une application qui affichera en iframe les applications sélectionnées (via une combinaison de tags parent/enfant dans la config), en iframe comme une multi-application. 

Ainsi, lorsque vous lancez l'application suite (souvent configurée comme application favorite), elle ouvre le code de l'application suite. Celle-ci découvre les applications ayant le même « parent tag » que le « child tag » de cette application suite. 

Ensuite, lorsque vous cliquez sur l'une des applications, elle conserve la barre de navigation supérieure et la barre inférieure de l'application suite, et affiche le reste de l'application via une iframe. 

Cela signifie que l'apparence de l'application est un mélange de l'application suite et de l'application elle-même. Comme nous l'expliquerons dans la section suivante sur la configuration du design, n'oubliez pas les implications de l'application suite. 


## 2. CSS de design
---------------------------------------

Nous vous avons montré le chemin pour accéder à la configuration de l'application dans la première section ; voyons maintenant ce que vous pouvez configurer. 

En termes de design, la première chose que vous pouvez modifier sont les logos de la barre supérieure. Vous pouvez changer le logo Microshare Smart Facilities en haut à gauche, mais aussi ajouter un logo en haut à droite.

Pour ce faire, dans la configuration de l'application (carré bleu sur l'image ci-dessous), vous pouvez ajouter les deux champs : 

```"headerLogo":"",```

```"headerSecondaryLogo":"",```


et modifier le lien vers l'image souhaitée. 

Ensuite, vous pouvez modifier le CSS (Cascading Style Sheets). Comme son nom l'indique, le CSS fonctionne en cascade, et voici comment cela fonctionne dans la configuration Microshare. 

    1) La feuille de style standard Microshare

    2) Un éventuel lien vers une feuille de style externe

    3) Un code CSS individuel (application par application)

Comme mentionné ci-dessus, vous ne modifierez pas « la feuille de style standard Microshare », mais tout ce que vous ajouterez en 2) ou 3) écrasera par la cascade la feuille 1).

Pour 2), vous pouvez ajouter un lien vers un CSS externe où vous pouvez ajouter votre propre feuille de style pour la structure Microshare. Vous incluriez ce lien dans le champ « Theme » de l'application (en orange sur l'image ci-dessous). Ce lien peut être utilisé facilement pour de nombreuses applications.

Enfin, pour 3), dans la section « style » (verte) de la configuration de l'application, vous pouvez ajouter votre propre design en remplaçant la ligne ```<!--Enter Style Here-->``` par votre CSS. 

Vous devez « Update » ou « Quick Update » vos modifications pour les voir en direct. 

__La structure HTML des forms peut évoluer dans le temps ; nous essayons de la garder aussi stable que possible et nous souhaitons fournir une meilleure convention de nommage des classes pour faciliter la superposition CSS pour nos clients.__


{% include image.html url="/assets/img/apps/app_config_edit.png" description="Home" %}
