---
layout: docs
title: Premiers pas en tant qu'administrateur Microshare™
description: Guide pour gérer l'accès aux données des clients
lang: fr
translation_of: docs/2/admin/admin-management/ms-admin.md
translations:
  en: /docs/2/admin/admin-management/ms-admin
  fr: /docs/2/fr/admin/admin-management/ms-admin
toc: true
---



{% include image.html url="/assets/img/thumbnail-11.jpg" description="vignette 2" %}

<br>

---------------------------------------

##### SOMMAIRE :

1. [Démarrage rapide](./#1-demarrage-rapide)
2. [Configurer les favoris](./#2-configurer-les-favoris)



---------------------------------------

## 1. Démarrage rapide
---------------------------------------

Avant de commencer à utiliser le compte ms_admin, vous devez comprendre ce qui est partagé avec une identité et ce qui appartient au compte ms_admin. La [page de vue d'ensemble](../overview) aborde ces concepts en détail. En tant qu'administrateur du compte ms_admin, vous avez la responsabilité d'administrer et de gérer les identités correspondantes.

<br>
#### A. En tant qu'administrateur, votre première action sera de créer les clusters d'appareils sur Microshare.

{% include image.html url="/assets/img/cards/dc-card.png" description="Bannière" width="200" %}

Vous pouvez ajouter des appareils depuis votre ordinateur, ou votre installateur peut rapidement en ajouter via l'application Deploy-M.

Pour apprendre à créer un cluster d'appareils, comprendre leur rôle et les bonnes pratiques à suivre, consultez le guide suivant :

###### > [Guide des clusters d'appareils](/docs/2/technical/microshare-platform/device-cluster-guide/)
<br>

#### B. L'administrateur contrôle également un sous-ensemble des données de son organisation et peut définir des [règles](/docs/2/technical/microshare-platform/rules-guide/) pour déterminer la part de ces données que les utilisateurs ordinaires peuvent consulter.

{% include image.html url="/assets/img/cards/rule-card.png" description="Bannière" width="200" %}

Une fois les clusters d'appareils créés, vous recevrez des données sur le compte ms_admin. Une fois les données partagées, elles peuvent être utilisées pour créer des applications ou des robots.

Pour partager des données, vous créerez des règles de partage pour les identités qui utiliseront ces données. Partagez les données d'un cluster d'appareils uniquement avec le groupe de personnes enregistrées sur l'identité sélectionnée. Elles pourront utiliser les données avec les applications de l'identité.
<br>

#### C. L'administrateur a également la possibilité de posséder des [robots](/docs/2/technical/microshare-platform-advanced/robots-guide/).

{% include image.html url="/assets/img/cards/robot-card.png" description="Bannière" width="200" %}

Les robots sont utilisés sur Microshare pour automatiser des tâches. Un cas d'usage courant consiste à déclencher une action lorsqu'un événement particulier se produit, ou à envoyer une alerte par e-mail lorsqu'une température dans une pièce est dépassée.

Pour cela, il suffit de lier un robot à un flux de données provenant d'un cluster d'appareils.
Les personnes auxquelles vous avez précédemment accordé l'accès pourront créer leurs propres robots sur les flux de données. Microshare recommande que les robots généraux soient créés sur le compte ms_admin afin de pouvoir facilement faire en sorte que les alertes e-mail soient envoyées aux autres utilisateurs depuis un seul robot.

<br>

#### D. L'administrateur a également la possibilité de posséder des [applications](/docs/2/technical/microshare-platform/dashboard-guide/).

{% include image.html url="/assets/img/cards/app-card.png" description="Bannière" width="200" %}

Pour les applications, celles-ci sont partagées au sein de l'identité. Chaque application que vous créez sur les différentes identités sera donc visible par tous les utilisateurs de la même identité, à l'exception de l'identité Microshare par défaut.

En revanche, voir les applications ne signifie pas nécessairement qu'elles fonctionneront. Vous devez partager les données avec les identités appropriées pour que ces applications utilisent les données prévues.

### 2. Configurer les favoris
---------------------------------------

Une fois les applications terminées, utilisez l'application Postman pour créer un /share avec le recType io.point.userPrefs. Connectez-vous avec les identifiants du compte ms_admin du client. Le corps doit ressembler à :

{% highlight js %}
  { 
    "favs" : { 
      "apps" : 
        [ 
          "5a1p2p3sf1e00000343f72???", 
          "5a1p2p3sb1e00006a3ef72???", 
          "5a1p2p3sc1e00009151f78???", 
          "5a1p2p3s51d0000d1b8c0b???" 
        ] 
    }
  } 
{% endhighlight %}

Créez ensuite une règle de partage pour partager les préférences utilisateur avec le reste de l'organisation afin que tous les membres puissent voir les applications :

{% include image.html url="/assets/img/Setting_favorites_rules_screenshot.png" description="Configuration des favoris" %}

