---
layout: docs
title: Guide d'identité
description: Se familiariser avec les identités Microshare™
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/identity-guide.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/identity-guide
  fr: /docs/2/fr/technical/microshare-platform-advanced/identity-guide
---
{% include image.html url="/assets/img/thumbnail-12.jpg" description="thumbnail 2" %}

<br>    
---------------------------------------

##### SOMMAIRE : 
1. [Qu'est-ce qu'une identité ?](./#1-quest-ce-quune-identite)
2. [Changer d'identité](./#2-changer-didentite)

---------------------------------------
## 1. Qu'est-ce qu'une identité ?

Votre identité détermine non seulement les données que vous pouvez consulter, mais aussi les applications et formulaires sur lesquels vous avez autorité. Souvent, lorsque vous ne voyez pas les données auxquelles vous devriez avoir accès, c'est que vous êtes connecté à la mauvaise identité.


**Une identité partage avec ses utilisateurs :** ses applications et les droits de partage qui lui sont assignés.

Pour simplifier, une fois connecté à votre compte, vous pouvez accéder à l'identité de votre choix en suivant les instructions pour changer d'identité. 

Une fois sur votre identité, vous verrez dans votre tableau de bord les applications appartenant à votre identité. C'est-à-dire que toutes les personnes ayant accès à cette identité auront exactement les mêmes applications. 

**Il y a une différence entre accéder aux applications et exécuter des applications avec leurs données.**

Les données utilisées par une application partagée avec l'identité globale ne seront accessibles que lorsque vous êtes connecté à cette identité. Vous pouvez partager votre identité sans que les données soient partagées. Dans ce cas, vous pourrez ouvrir les applications, mais malheureusement, elles resteront vides de données.

Et voici la différence : les applications suivent l'identité, mais les données ne sont partagées avec l'identité que si la règle de partage global appropriée a été créée.


## 2. Changer d'identité
---------------------------------------

Pour changer d'identité, vous devez :

<br>
**1.** Accéder à la Console et vous connecter sur [https://app.microshare.io](https://app.microshare.io).

<br>
**2.** Cliquer sur l'icône personne en haut à droite de l'écran Console.

<br>
{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="Profile Pic" %}

<br>
**3.** Sélectionner l'identité « Construction ».

<br>
**4.** Consulter les applications sous votre identité.

## 3. Quelques conseils : 
---------------------------------------

#### Se connecter directement à une identité

Pour éviter de devoir changer d'identité une fois connecté, vous pouvez ajouter un paramètre à la connexion dans le champ `Organization (Optional)`.

{% include image.html url="/assets/img/access-my-apps/log-in.png" description="Log in" %}

La valeur correcte à insérer dans ce paramètre se trouve lorsque vous parcourez vos clés une fois connecté à cet emplacement : 

{% include image.html url="/assets/img/identity_code.png" description="identity code" %}

Vous pouvez ainsi vous connecter directement à l'identité.

#### Le partage de données concerne une identité entière

`Bientôt disponible`

#### Accéder aux données d'identité via l'API.

Comme pour la plateforme Microshare, le principe par API est le même. Si nous voulons accéder aux données partagées avec l'identité, notre jeton de connexion doit provenir de la bonne identité. 

Pour cela, deux possibilités : 
Être connecté sur le web Microshare avec la bonne identité, et lorsque vous demanderez un jeton, celui-ci proviendra automatiquement de la bonne identité. Vous pouvez vérifier dans le JSON reçu l'identité correspondante ici : 

{% include image.html url="/assets/img/identity-on-api.png" description="identity code" %}

Sinon, comme lors de la connexion avec le paramètre d'identité vu ci-dessus, vous pouvez ajouter à la fin de votre demande de jeton ce paramètre : 

`&identity=YourIdentityID`

 
