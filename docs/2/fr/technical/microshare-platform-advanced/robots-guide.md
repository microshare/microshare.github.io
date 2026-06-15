---
layout: docs
title: Guide des Robots
description: Guide complet pour comprendre les Robots
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/robots-guide.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/robots-guide
  fr: /docs/2/fr/technical/microshare-platform-advanced/robots-guide
---
{% include image.html url="/assets/img/thumbnail-7.jpg" height="900" weight="900" description="thumbnail 2" %}

<br>
---------------------------------------

##### SOMMAIRE : 

1. [Qu'est-ce qu'un Robot ?](./#1-quest-ce-quun-robot)
2. [Que font les robots Microshare ?](./#2-que-font-les-robots-microshare)
3. [Que puis-je faire avec eux ?](./#3-que-puis-je-faire-avec-eux)
4. [Comment les utiliser ?](./#4-comment-les-utiliser)
  - A. [Accéder à l'interface](./#a-acceder-a-linterface)
  - B. [Code de base](./#b-code-de-base)
  - C. [Déclenché vs planifié](./#c-declenche-vs-planifie)
  - D. [Tests](./#d-tests)
5. [Créer un Robot pour transformer des données et envoyer des alertes](./#5-creer-un-robot-pour-transformer-des-donnees-et-envoyer-des-alertes)
6. [Comment fonctionnent-ils ?](./#6-comment-fonctionnent-ils)
7. [Plus d'informations](./#7-plus-dinformations)

---------------------------------------

## 1. Qu'est-ce qu'un Robot ?
---------------------------------------

Un Robot est un acteur qui automatise les tâches associées à la transformation, l'enrichissement et l'annotation de vos données. Les Robots peuvent interagir avec des services pour alimenter et extraire des données de systèmes externes. Un seul Robot automatise généralement une seule tâche. Garder chaque Robot simple garantit qu'il sera : facile à maintenir, rapide et efficace avec un débit plus élevé, et réutilisable dans plusieurs scénarios.
 
Les Robots peuvent être déclenchés par l'arrivée de nouvelles données dans le data lake Microshare, programmés pour s'exécuter à intervalles prédéfinis, ou réagir à des événements externes tels que l'arrivée d'un fichier de données ou la connexion d'un websocket. Les Robots s'exécutent en parallèle et réagissent aux événements au fur et à mesure. Dans la plupart des cas, un Robot réagira à un événement en lisant un enregistrement Microshare, en agissant dessus d'une certaine manière, et en écrivant un nouvel enregistrement dans Microshare.


## 2. Que font les robots Microshare ?
---------------------------------------

Il existe deux types généraux de robots prêts à l'emploi que Microshare déploie dans la configuration client — les robots de _notification_ et de _pipeline_.  

### Robots de notification

Microshare propose deux variantes de robots de _notification_.  

Le robot _Value Monitor_ est configuré pour surveiller la valeur d'un champ spécifié dans les nouveaux enregistrements share créés dans un recType. Si la valeur est supérieure à un _maxValue_ spécifié OU inférieure à un _minValue_ spécifié OU correspond à l'une des valeurs d'un ensemble, une notification peut être envoyée à une liste de destinataires.

Par exemple, un robot _Value Monitor_ peut être installé et configuré pour envoyer des notifications 
  - lorsqu'un visiteur a appuyé sur un bouton d'un appareil de feedback
  - lorsque la température d'un réfrigérateur dépasse un certain seuil
  - si une porte est ouverte en dehors des heures d'ouverture
  - si le niveau de dioxyde de carbone dans une pièce dépasse un seuil
  - etc.

Le robot _Rate Monitor_ est configuré pour surveiller les changements au fil du temps d'un champ spécifié dans les nouveaux enregistrements share créés dans un recType. Des notifications sont envoyées lorsque la valeur change de plus d'un seuil spécifié pendant un intervalle de temps donné.

Par exemple, un robot _Rate Monitor_ peut être configuré pour envoyer des notifications
  - lorsque plus de rateThreshold événements de mouvement se sont produits en thresholdDurationInMinutes minutes
  - etc.

Les robots _Value Monitor_ et _Rate Monitor_ peuvent être configurés pour « limiter » les notifications afin qu'elles soient envoyées moins fréquemment. Ils peuvent également être configurés pour envoyer des notifications à différents utilisateurs (ou pas du tout) selon l'heure de la journée, le jour de la semaine, l'emplacement ou un ou plusieurs metaTags.

### Robots de pipeline

Microshare emploie divers robots de _pipeline_ pour traiter les données et générer un nouveau format plus facile à consommer pour l'étape suivante du pipeline.  


## 3. Que puis-je faire avec eux ?
---------------------------------------

Si vous développez vos propres robot(s), gardez ces conseils à l'esprit. Pour garder votre workflow de données simple, chaque Robot ne doit effectuer qu'une seule action. Voici quelques cas d'usage typiques :

[1. Ingestion de données](../data-ingestion)  

Pour les Robots chargés de récupérer ou recevoir des données envoyées par une source externe.  
* Fichiers CSV déposés dans un dossier cible
* Connexion websocket active vers un serveur distant
* Interaction avec un service externe via API

[2. Analyse de données](../data-formatting-by-robots/#f-data-parsing)  
Souvent géré dans un workflow de données pour enrichir les enregistrements au fil du flux.  
  
[3. Transformation de données](../data-formatting-by-robots/#g-data-transformation)  
Idéal pour décoder une charge utile IoT formatée.  
  
[4. Formatage de données](../data-formatting-by-robots/#h-data-formatting)  
Préparez vos données pour un système externe ou un tableau de bord.  
  
[5. Déclencheurs de services externes](../data-formatting-by-robots/#i-external-services-triggering)  

Pour un Robot utilisé pour déclencher un autre service sur le web.  
  
## 4. Comment les utiliser ?
---------------------------------------
### A. Accéder à l'interface
Depuis la console de gestion disponible [ici](https://app.microshare.io), ouvrez les panneaux Manage -> Robots. Créez et modifiez vos Robots ici.  
  
### B. Code de base  
À l'intérieur d'un Robot s'exécute un script JavaScript. Lors de la création d'un robot, un exemple de code auto-généré sera présent.

Il inclura les éléments de base requis pour exécuter un robot :

{% highlight js %}
  var lib = require('./libs/helpers');
  function main(text, auth) {
  }
{% endhighlight %}

La méthode ```require``` charge la bibliothèque de fonctions que votre Robot pourra utiliser, et la fonction ```main``` est ce qui s'exécute lorsque le robot est déclenché ; elle doit donc encapsuler toutes les actions du Robot. D'autres fonctions peuvent être utilisées, mais c'est la fonction principale appelée.

```main``` a deux paramètres :
* ```text``` contient les métadonnées sur l'événement qui a déclenché le Robot.  
* ```auth``` est votre jeton d'authentification permettant à ce Robot d'accéder au data lake en votre nom.  

Pour plus d'exemples de code, consultez la [bibliothèque Robots](../robots-library/).  

### C. Déclenché vs planifié  
---------------------------------------

Déclenché est l'état par défaut d'un robot, ce qui signifie qu'il sera activé __à chaque fois__ qu'un enregistrement avec son record type est ajouté au data lake (à condition qu'il ait accès à l'enregistrement). Le record type du robot doit correspondre au record type déclencheur.  


Optionnellement, votre Robot peut s'exécuter selon un planning, sans attendre la création d'un nouvel enregistrement.  
**Delay time** exécutera votre Robot une fois après le délai spécifié ; le compte à rebours démarre lorsque vous activez le Robot.  
**Interval time** déclenche votre Robot périodiquement à chaque intervalle, indéfiniment.  
Définissez les temps Delay et/ou Interval, activez la case (cochée = activé), et détendez-vous.

{% include image.html url="/assets/img/Schedule_a_robot.png" description="Schedule a Robot" %}

### D. Tests  
Si vous modifiez un Robot existant, vous verrez qu'un panneau de test est présent. Suivez les instructions pour simuler une exécution du Robot avec des données d'exemple. Il fournira une sortie pour votre test. 
Important : lib.write n'écrit pas de nouvel enregistrement lors d'un test, vous n'avez donc pas de risque de polluer vos données.  


## 5. Créer un Robot pour transformer des données et envoyer des alertes
---------------------------------------

Les Robots peuvent être chaînés pour répondre à de nombreux cas d'usage ; ici nous configurerons deux Robots pour détecter un niveau de température anormal et envoyer des notifications par e-mail.

* Accédez à la [plateforme Microshare](https://app.microshare.io)
* Cliquez sur le bouton `Manage` dans la barre d'outils supérieure
* Cliquez sur le bouton `Robots` dans la barre latérale gauche et cliquez sur `CREATE`

{% include image.html url="/assets/img/hackiot-create-a-robot.png" description="Create a Robot from the composer" %}

Nous ferons le minimum pour débloquer toutes les options Robot pour l'instant.

* Donnez un nom à votre Robot.
* Saisissez le Record Type utilisé dans les appels de la section précédente.
* Terminez la création en cliquant sur `CREATE`, puis en saisissant votre combinaison login, mot de passe et clé API.

{% include image.html url="/assets/img/hackiot-create-a-robot-2.png" description="Minimal Robot configuration" %}

Vous reviendrez à la liste des cartes Robot et votre Robot devrait maintenant s'afficher.

Pour modifier un Robot existant, trouvez votre Robot dans la liste :

* Cliquez dessus 
* Cliquez sur l'icône `crayon` en haut de la page

{% include image.html url="/assets/img/hackiot-configure-robot-2.png" description="Open Robot edition mode" %}

En mode édition vous pouvez :
* Activer et désactiver votre Robot
* Écrire le script Robot
* Tester le script

{% include image.html url="/assets/img/hackiot-configure-robot-3new.png" description="Full Robot edition mode" %}

Nous n'avons pas de vraies données à utiliser ici, nous allons donc les transformer avec nos propres données fictives.
Nous allons ajouter une valeur de température fictive et la date/heure actuelle à l'enregistrement, puis sauvegarder cet enregistrement transformé.

* Remplacez le code de votre script Robot par :
{% highlight js %}
  var lib = require('./libs/helpers');
  function main(text, auth) {
      
      var rec = lib.parseMsg(text);
      var newData = rec.objs[0].data;
      var recType = rec.objs[0].recType;
      
      var now = new Date();

      newData.temperature = now.getSeconds();
      newData.dateTime = now.toString();

      lib.writeShare(auth, recType + '.withTemperature', newData, []);

  }
{% endhighlight %}

Activez et mettez à jour votre Robot une fois terminé. Il sera maintenant déclenché automatiquement pour lire, enrichir, puis réécrire un enregistrement dans le data lake, avec le suffixe `.withTemperature` ajouté au champ recType.

Vous pouvez tester que votre Robot se déclenche en écrivant une nouvelle donnée avec votre recType initial, et lire le `recType.withTemperature` avec l'API.

Vous pouvez utiliser ce second recType comme déclencheur pour un autre Robot de transformation de données, etc.

* Créez un nouveau Robot
* Donnez un nom à votre Robot
* Saisissez le Record Type avec le suffixe `.withTemperature`
* Terminez la création en cliquant sur `CREATE`, puis en saisissant votre combinaison login, mot de passe et clé API
* Modifiez ce Robot et remplacez le script par :
{% highlight js %}

var lib = require('./libs/helpers');
function main(text, auth){

    var rec = lib.parseMsg(text);
    var data = rec.objs[0].data;

    if (data.temperature > 30){

        /* lib.sendMicroshareEmail(recipient's email address,
            subject of your email,
            body of your email);
           The email sender will be notification@microshare.io
        */

        var TO = 'INPUT YOUR EMAIL HERE';
        var SUBJECT = 'High temperature alert';
        var BODY = 'A temperature of ' + data.temperature + ' was detected at ' + data.dateTime;

        lib.sendMicroshareEmail(TO, SUBJECT, BODY);

    }
}

{% endhighlight %}

* Dans le code collé dans la section « Script », modifiez la variable « TO » avec votre e-mail
* Activez et mettez à jour votre Robot
* Écrivez quelques enregistrements pour votre recType

Les deux Robots sont activés successivement. Si la température fictive créée est supérieure à 30, vous recevrez une alerte par e-mail.

Vous êtes maintenant prêt à configurer votre propre flux de données IoT, et à transformer, analyser et recevoir des alertes sur les données.

## 6. Comment fonctionnent-ils ?
---------------------------------------

En coulisses, chaque Robot est un Agent Akka chargé de son script compatible ECMAScript 6.  
Notre Java Stream-Service peut configurer, démarrer et arrêter les Agents ; et exploite le moteur JavaScript Oracle Nashorn pour compiler les scripts ES6.  
Les bibliothèques Java accessibles par les Robots pointent vers le Service adéquat pour lire et écrire dans le data lake.  


## 7. Plus d'informations
---------------------------------------

Pour plus de détails sur les méthodes Robot disponibles, consultez la [bibliothèque Robots](../robots-library)

Pour savoir comment router votre flux IoT depuis votre plateforme ou passerelle préférée vers Microshare, consultez notre [documentation d'ingestion de données](../../microshare-platform-advanced//data-ingestion/).
