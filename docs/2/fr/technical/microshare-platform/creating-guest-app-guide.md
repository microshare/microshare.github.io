---
layout: docs
title: Comment configurer une application d'accès invité
lang: fr
translation_of: docs/2/technical/microshare-platform/creating-guest-app-guide.md
translations:
  en: /docs/2/technical/microshare-platform/creating-guest-app-guide
  fr: /docs/2/fr/technical/microshare-platform/creating-guest-app-guide
toc: true
---

#### Sommaire :

1. [Qu'est-ce qu'une Guest Access App ?](./#1-quest-ce-qu-une-guest-access-app)
2. [Création de la Guest App](./#2-creation-de-la-guest-app)

---------------------------------------

### 1. Qu'est-ce qu'une Guest Access App ?

Microshare permet de fournir un accès contrôlé aux applications/tableaux de bord pour des utilisateurs anonymes (non authentifiés). Cela est souhaitable dans les situations où le grand public est invité à interagir avec les données. Cela ne doit être utilisé que pour des données destinées à une diffusion publique générale (données vertes).

Pour que cela fonctionne, un objet « Link To » est créé par le propriétaire de l'application, qui fournit un pointeur vers un actif accessible via une URL non authentifiée /guest. L'URL guest utilise l'identifiant de l'objet Link To pour déterminer le comportement attendu.

L'invité apparaîtra au système (APP et API) comme guest@microshare.net. Des règles de partage peuvent être créées pour rendre accessibles des actifs au-delà de l'application/du formulaire. Cela permet d'exploiter les vues et les partages. L'écriture de données dans le système via les commandes POST du serveur API est également possible dans la guest app. Les données créées seront la propriété de l'utilisateur guest@microshare.net avec l'organisation du propriétaire de l'application.


### 2. Création de la Guest App

<!--Details on having the app/ data on hand-->

1. S'authentifier (via l'API Dauth) en tant que propriétaire de l'application/vue/données (ou un utilisateur partagé).
2. Utiliser l'API dapp /links2 pour créer une entrée dans la collection links.
* POST `https://dapp.microshare.io/links2?Authorization=<sessionkey>` Note : ceci est différent de l'utilisation du Bearer token dans l'en-tête authorization.
*   Les paramètres pour ce POST sont () raw puis choisir JSON dans le menu déroulant text.
*  Le sessionkey est utilisé via le paramètre de requête Authentication.
*  targetId : app id
*  Email : guest@microshare.net
*  targetType : app
*  Utiliser le corps d'exemple

{% highlight javascript %}
{"name":"Feedback App Test", "recType":"pipe", 

"desc":"Link toFeedback App Test",  

"data":{ "email" : "guest@microshare.net", "targetId" : "5e6ce6b62b0000636ad81a38" , "targetType" : "app"}  

} 
{% endhighlight %}

Note : veillez à utiliser .net et non .io pour l'email

3. Récupérer l'id renvoyé par l'appel link ci-dessus.
* Exemple de Product Suite dans le compte assets : `5e73b63d3a00002a934523d4`.
* Exemple d'application Touchless Feedback dans le compte assets : `5e77ac483a0000df97452437`.

4. Composer une URL `https://dapp.microshare.io/guest/<linkid>?optional-query-string=optional`.
* Exemple d'URL pour Product Suite dans le compte assets : `https://dapp.microshare.io/guest/5e73b63d3a00002a934523d4`.

5. Copier ce lien.
6. Pour toute vue, créer des règles qui partagent des « filtered objects » avec guest@microshare.net avec les droits Execute.
7. Pour consulter les données créées par un utilisateur invité interagissant avec un lien vers l'application, vous devez également créer une règle qui partage ces données depuis guest@microshare.net vers l'organisation (un administrateur d'organisation).

{% include image.html url="/assets/img/creating-guest-app-guide-1.png" description="CGAG1" %}

{% include image.html url="/assets/img/creating-guest-app-guide-2.png" description="CGAG2" %}

{% include image.html url="/assets/img/creating-guest-app-guide-3.png" description="CGAG3" %}

{% include image.html url="/assets/img/creating-guest-app-guide-4.png" description="CGAG4" %}


