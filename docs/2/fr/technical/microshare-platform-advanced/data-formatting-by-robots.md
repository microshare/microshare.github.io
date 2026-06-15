---
layout: docs
title: Formatage des données par les Robots
description: Exemples de Robots pour construire un workflow de données
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/data-formatting-by-robots.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/data-formatting-by-robots
  fr: /docs/2/fr/technical/microshare-platform-advanced/data-formatting-by-robots
---
---------------------------------------

##### SOMMAIRE : 

1. [Déballer les données avec un robot](./#1-unpack-the-data-with-a-robot)
  - A. [Qu'est-ce qu'un workflow de données ?](./#a-what-is-a-data-workflow)
  - B. [Lire des données depuis le data lake](./#b-read-data-from-the-data-lake)
  - C. [Lire l'enregistrement déclenchant le Robot](./#c-read-record-triggering-the-robot)
  - D. [Lire n'importe quel enregistrement(s)](./#d-read-any-records)
  - E. [Requêtes avancées sur le data lake](./#e-data-lake-advanced-queries)
  - F. [Analyse de données](./#f-data-parsing)
  - G. [Transformation de données](./#g-data-transformation)
  - H. [Déballage des données](./#h-data-unpacking)
  - I. [Déclenchement de services externes](./#i-external-services-triggering)
  - J. [Écrire des données dans le data lake](./#j-write-data-to-the-data-lake)
  - K. [Exemple de workflow de données](./#k-data-workflow-example)
2. [Et ensuite ?](./#2-whats-next)

---------------------------------------

## 1. Déballer les données avec un robot
---------------------------------------

### A. Qu'est-ce qu'un workflow de données ?
Vous pouvez configurer des processus automatisés multi-étapes pour router et transformer vos données afin qu'elles soient prêtes à être consommées par une App ou un Tableau de bord.  
C'est ce qu'on appelle un workflow de données. Les actions automatisées sont gérées par les [Robots](/docs/2/fr/technical/microshare-platform-advanced/robots-guide/), et l'accès aux données transformées est accordé par les [Rules](/docs/2/technical/microshare-platform/rules-guide/).  
Dans cet article, nous décrirons les actions habituelles que vous pouvez effectuer avec les Robots pour préparer votre workflow de données.  

Pour une introduction aux robots, consultez le [guide Robot.](/docs/2/fr/technical/microshare-platform-advanced/robots-guide/)

### B. Lire des données depuis le data lake

Votre workflow commence généralement par la lecture des données poussées dans le data lake. Cela peut être déclenché automatiquement si votre Robot écoutait un recType de flux de données, ou périodiquement avec un Robot planifié.  
Ci-dessous se trouvent des extraits de code pour lire des données depuis le data lake.  

### C. Lire l'enregistrement déclenchant le Robot

Analysez le message qui déclenche le Robot avec lib.parseMsg pour obtenir les données et métadonnées du paramètre 'text' : 

{% highlight js %}
  // Include the helper objects which allows you to read and write to Microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# RECORD READ START ###########################');
    
    var record = lib.parseMsg(text, auth, []);
    
    print('################################# RECORD READ END #############################');
  }
{% endhighlight %}
  
Et le modèle de données retourné est  
{% highlight js %}

  {
    "meta": {
        "totalPages": 1,
        "currentPage": 1,
        "perPage": 999,
        "totalCount": 1,
        "currentCount": 1
    },
    "objs": [
        {
            "updaterId": "your@email.com",
            "desc": "",
            "name": "",
            "createDate": {
                "$date": 1507824651492
            },
            "_id": {
                "$oid": "59df940b46esfdf028fbb???"
            },
            "tags": [
                "tempID1234",
                "demoOnly",
                "raw"
            ],
            "data": {
                "Freq": 868300000,
                "upid": {
                    "$numberLong": "23393998034011604"
                },
                "DR": 5,
                "msgtype": "updf",
                "DevEui": "58-A0-CB-FF-FF-FE-??-??",
                "SessID": 3,
                "FCntUp": 165,
                "ArrTime": 1506622798.0322363,
                "confirm": false,
                "region": "EU863",
                "regionid": 1000,
                "FRMPayload": "00EB05050046E90F",
                "FPort": 102
            },
            "creatorId": "your@email.com",
            "id": "59df940b46e0fb0028fb????",
            "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98L266",
            "tstamp": {
                "$numberLong": "1507824651492"
            },
            "origin": {
                "tokendata": {
                    "id": "3766b4fc-4fae-49ab-afc4-cb0d741d????"
                },
                "desc": "Object of Type io.microshare.demo.sensor.temprature",
                "name": "io.microshare.demo.sensor.temprature",
                "createDate": {
                    "$numberLong": "1507824651492"
                },
                "creatorId": "your@email.com",
                "id": "59df940b46e0fb0028fb????",
                "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98L266"
            },
            "recType": "io.microshare.demo.sensor.temprature",
            "owner": {
                "appid": "51C54CDB-D278-FFFF-B8378EF13462????",
                "org": "com.email",
                "user": "your@email.com"
            }
        }
      ]  
  }
{% endhighlight %} 

### D. Lire n'importe quel enregistrement(s)
Vous pouvez également lire tout enregistrement dont vous connaissez le recType et/ou l'id.  
Cet appel retourne toujours un tableau et selon la lecture, 0 ou plusieurs enregistrements peuvent être retournés.

Pour obtenir des enregistrements par recType et id :

{% highlight js %}
  var record = lib.readShareById(auth, "com.yourdomain.yourrecType", "yourid");

{% endhighlight %}

Pour obtenir des enregistrements par recType et tags associés :

{% highlight js %}
  var tags = ["tag1", "tag2"]
  var record = lib.readShareByTags(auth, "com.yourdomain.yourrecType", tags);

{% endhighlight %}

### E. Requêtes avancées sur le data lake
You can use [VIEWS](https://microshare.github.io/docs/0.1/getting-started/views-guide/) to do advanced queries to the data lake.

Les Views exécutent une requête d'agrégation sur les entrées du data lake et peuvent prendre des paramètres. Le format retourné est le même que pour la lecture.

{% highlight js %}
  //Include the helper objects which allows you to read and write to Microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# VIEW READ START ###########################');
    
    var queryParams = {
        "substitute": "value"
    };
    
    var viewResult = lib.readShareByView(auth, "com.your.recType", "1234viewid", queryParams);
    
    print('################################# VIEW READ END #############################');
  }
{% endhighlight %}

IMPORTANT : Votre View doit avoir le même recType que celui qui déclenche le Robot !!! 

### F. Analyse de données

Idéal pour séparer différents enregistrements capteur provenant du même flux de paquets IoT.  
Par exemple, si une seule plateforme pousse des enregistrements concernant 2 appareils différents via le même canal (même recType), vous pourriez vouloir analyser par devEUI ensuite.  

L'exemple ci-dessous montre comment un Robot peut analyser deux devEUI.  
Une autre stratégie serait d'utiliser un Robot par devEUI, pouvant être activé ou désactivé pour démarrer ou arrêter 2 flux de données.  

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.parseMsg(text);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;

    if (m.DevEui == "58-A0-CB-FF-FF-FE-??-??") {
        
        //Motion Sensor
        //Write a new record with the Motion Sensor payload and the Time included in the network info
        lib.writeShare(auth, recType + '.motionsensor', {"payload": m.FRMPayload, "timestamp": m.ArrTime}, ['payload', 'timestamp']);
        
    } else if (m.DevEui == "58-A0-CB-FF-FF-FE-??-??") {
        
        //Healthy Home Sensor
        //Write a new record with the Healthy Home Sensor payload and the Time included in the network info
        lib.writeShare(auth, recType + '.healthyhomesensor', {"payload": m.FRMPayload, "timestamp": m.ArrTime}, ['payload', 'timestamp']);        
    }

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %} 

### G. Transformation de données

Les Robots exécutent des scripts JS, toute logique de transformation de données peut donc être ajoutée à votre workflow.  
Une étape de transformation habituelle de votre workflow est le décodage de votre charge utile IoT. Consultez notre liste de méthodes de décodage [ici](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/decoding-payloads-new).

IMPORTANT : Les scripts Robot utilisent uniquement ES6, vous ne pouvez donc pas vous appuyer sur vos API navigateur habituelles pour la transformation de données

Ci-dessous un exemple de décodage de charge utile, aboutissant à l'écriture d'un nouvel enregistrement dans le datalake :
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.parseMsg(text);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;

    var decodedRecord = lib.decodeTabsHealthyHomeSensor(m.payload);
    var decodedRecordJSON = JSON.parse(decodedRecord);
    decodedRecordJSON.timestamp = m.timestamp;

    //Save the record enhanced with the decoded data
    lib.writeShare(auth, recType + '.decoded', decodedRecordJSON, ['status', 'battery', 'temperature', 
'humidity', 'CO2', 'VOC', 'timestamp']);

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %}

### H. Déballage des données

Le déballage des données dans un Robot permet d'identifier des enregistrements intéressants et de formater les données pour votre rapport, App ou Tableau de bord.  
Ci-dessous un exemple de Robot ne transmettant que les enregistrements à CO2 élevé.

{% highlight js %}
    var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.parseMsg(text, auth, []);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;
    
    if(m.CO2 > 1500){
        var highValueRecord = {'CO2':m.CO2, 'CO2Unit':m.CO2Unit, 'timestamp':m.timestamp};
        
        var newRecType = recType.replace('decoded','highCO2');
        
        lib.writeShare(auth, newRecType, highValueRecord, ['highCO2', 'timestamp']);
    
    }

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %}

### I. Déclenchement de services externes
Vous avez accès aux bibliothèques de notifications et aux POST et GET RESTful depuis un script Robot. Cela vous permet d'appeler des services externes depuis votre workflow de données.  
Par exemple, chez Microshare nous aimons journaliser sur notre canal Slack ; voici un exemple de comment faire.

{% highlight js %}
  var webhookURL = 'The webhook to a Slack channel: https://api.slack.com/incoming-webhooks';
  var body = '{\"text\":\"' + JSON.stringify(m, null, '\t').replace(/"/g, "\\\"") + '\"}';
  lib.post(webhookURL, headers, body);
{% endhighlight %}

Pour plus d'exemples, consultez nos [méthodes de notification](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/sending-notifications-new) et [méthodes d'appel d'API externes](/docs/2/fr/technical/microshare-platform-advanced/robots-libraries/making-restful-calls-new)

### J. Écrire des données dans le data lake
Comme indiqué ci-dessus, chaque étape d'un workflow se termine généralement par l'écriture d'un enregistrement dans le data lake.  

Une écriture de données a deux fonctions : elle construit la piste d'audit de vos données et permet de déclencher l'étape suivante du workflow.

Comme illustré ci-dessous, vous pouvez spécifier le recType et les tags de votre nouvelle entrée de données.
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# VIEW READ START ###########################');
    var tags = ['some', 'list', 'tags'];
    var write = lib.writeShare(auth, recType, obj, tags);
    
    print('################################# VIEW READ END #############################');
  }
{% endhighlight %} 

### K. Exemple de workflow de données

Dans cet exemple, nous recevons des données de deux capteurs Tabs dans un bâtiment à Londres.  
Nous voulons afficher les dernières alertes CO2 élevé dans une App, accessible à tous les employés Microshare.  

Notre workflow de données est le suivant :
1. Parse the incoming data stream to single out the Healthy Home Sensor
2. Decode the Payload from the Healthy Home Sensor
3. Single out cases where the CO2 level is high, and pass only those to the next step
4. Agréger les 10 derniers enregistrements avec [une View](/docs/2/technical/microshare-platform/views-guide/)
5. Configurer [une Rule](/docs/2/technical/microshare-platform/rules-guide) pour que tous les employés Microshare puissent exécuter la View d'agrégation

Chez Microshare nous représentons généralement les workflows de données avec des diagrammes [draw.io](https://www.draw.io). [Cliquez ici pour voir un modèle de workflow de données](/assets/html/Data Workflow Template.html) qui décrit cet exemple.  

 1 would use the snippet from the [Analyse de données](#data-parsing) above  
 2 would use the snippet from the [Transformation de données](#data-transformation) above  
 3 would use the snippet from the [Déballage des données](#data-unpacking) above  
 4 La requête View serait :  
{% highlight JSON %}
  [
    {"$match" : {"recType" : "london.tabs.healthyhomesensor.highco2"}},
    {"$limit" : 10}
  ] 
{% endhighlight %}
 5 La Rule pointerait vers le recType de la View, autoriserait l'opération Execute, avec Requestor Organization défini sur `&`.

## 2. What's next?
---------------------------------------

Vous avez maintenant accès aux données IoT décodées via l'API Microshare. Cela vous permet de construire la vue de votre choix avec vos outils préférés : Apps web, Apps mobiles, Tableaux de bord, etc. Libérez les données et laissez libre cours à votre imagination !  

 
