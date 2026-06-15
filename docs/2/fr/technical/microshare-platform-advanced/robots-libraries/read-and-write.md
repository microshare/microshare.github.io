---
layout: docs
title: Lire et écrire des enregistrements depuis le data lake Microshare
description:
group: advanced
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/robots-libraries/read-and-write.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/robots-libraries/read-and-write
  fr: /docs/2/fr/technical/microshare-platform-advanced/robots-libraries/read-and-write
---
## Lire des données depuis le data lake

Votre workflow commence généralement par la lecture des données poussées dans le data lake. Cela peut être déclenché automatiquement si votre Robot écoutait un recType de flux de données, ou périodiquement avec un Robot planifié.  
Ci-dessous se trouvent des extraits de code pour lire des données depuis le data lake.  

### Lire l'enregistrement déclenchant le Robot

Analysez le message qui a déclenché le Robot avec lib.parseMsg pour obtenir les données et métadonnées : 

{% highlight js %}
  // Include the helper objects which allows you to read and write to microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# RECORD READ START ###########################');
    
    var resp1 = lib.parseMsg(text);
    if (resp1.err != 1) {
        print('resp1 = ' + JSON.stringify(resp1));
        print('obj = ' + JSON.stringify(resp1.objs[0]));
        print('updater = ' + JSON.stringify(resp1.objs[0].updaterId));
        print('recType = ' + JSON.stringify(resp1.recType));
    }
    
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
            "updaterId": "youremail@microshare.io",
            "desc": "",
            "name": "",
            "createDate": {
                "$date": 1507824651492
            },
            "_id": {
                "$oid": "59df940b46e0fb0028fb????"
            },
            "tags": [
                "tempID1234",
                "demoOnly",
                "raw"
            ],
            "data": {
                "Freq": 868300000,
                "upid": {
                    "$numberLong": "23393998034011????"
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
                "FRMPayload": "00EB05050046E???",
                "FPort": 000
            },
            "creatorId": "youremail@microshare.io",
            "id": "59df940b46e0fb0028fb????",
            "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98????",
            "tstamp": {
                "$numberLong": "1507824651???"
            },
            "origin": {
                "tokendata": {
                    "id": "3766b4fc-4fae-49ab-afc4-cb0d741d????"
                },
                "desc": "Object of Type io.microshare.demo.sensor.temperature",
                "name": "io.microshare.demo.sensor.temperature",
                "createDate": {
                    "$numberLong": "150782465????"
                },
                "creatorId": "youremail@microshare.io",
                "id": "59df940b46e0fb0028fb????",
                "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98????"
            },
            "recType": "io.microshare.demo.sensor.temperature",
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462????",
                "org": "io.microshare",
                "user": "youremail@microshare.io"
            }
        }
      ]  
  }
{% endhighlight %} 

### Lire n'importe quel enregistrement(s)
Vous pouvez également lire tout enregistrement dont vous connaissez le recType et/ou l'id.  
Cet appel retourne toujours un tableau et selon la lecture, 0 ou plusieurs enregistrements peuvent être retournés. Le dernier paramètre de chaque appel readShareBy est optionnel.

Pour obtenir des enregistrements par recType et id :

{% highlight js %}
// Include the helper objects which allows you to read and write to Microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
      print('################################# RECORD READ START ###########################');
      var tags = ["tag1", "tag2"]
      var record = lib.readShareById(auth, "com.yourdomain.yourrecType", "yourid");
      print('################################# RECORD READ END #############################');
  }
{% endhighlight %}

Pour obtenir des enregistrements par recType et tags associés :

{% highlight js %}
// Include the helper objects which allows you to read and write to Microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
      print('################################# RECORD READ START ###########################');
      var tags = ["tag1", "tag2"]
      var record = lib.readShareByTags(auth, "com.your.recType", tags);
      print('################################# RECORD READ END #############################');
  }
{% endhighlight %}

### Requêtes avancées sur le data lake
Consultez le [guide Views](/docs/2/technical/microshare-platform/views-guide/) pour effectuer des requêtes avancées sur le data lake.

Les Views exécutent une requête d'agrégation sur les entrées du data lake et peuvent prendre des paramètres. Le format retourné est le même que pour la lecture.

{% highlight js %}
  //Include the helper objects which allows you to read and write to microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# VIEW READ START ###########################');
    
    var queryParams = {
        "id": "any view id"
    };
    
    var viewResult = lib.readShareByView(auth, "com.your.recType", "1234viewid", queryParams);
    
    print('################################# VIEW READ END #############################');
  }
{% endhighlight %}

## Écrire des données dans le data lake
Comme indiqué ci-dessus, chaque étape d'un workflow se termine généralement par l'écriture d'un enregistrement dans le data lake.  

Une écriture de données a trois fonctions : valider les données en stockage long terme, générer une piste d'audit de vos données et déclencher l'événement de création pour lancer l'étape suivante du workflow.

Comme illustré ci-dessous, vous pouvez spécifier le recType et les tags de votre nouvelle entrée de données.
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# WRITE START ###########################');
    
    var tags = ['some', 'tag', 'list'];

    var write = lib.writeShare(auth, recType, obj, tags);
    
    print('################################# WRITE END #############################');
  }
{% endhighlight %} 

## Référence rapide des fonctions
**function parseMsg(text)**

    usage: parse the triggering message to obtain object and metadata
    input: text: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of triggering shares [should be index 0]
            id: id of returned share
            recType: recType of returned share
    }

**function readShareById(auth, recType, id, params)**

    usage: read a single share from the datalake with the specified id and recType
    input: auth: String, recType: String, [optional] params: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of returned shares [should be index 0]
            id: id of returned share
            recType: recType of returned share
    }

**function readShareByTags(auth, recType, tags, params)** 

    usage: read a shares from the datalake that contain all tags
    input: auth: String, recType: String, tags: Array[String], [optional] params: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of returned shares
            id: empty string
            recType: recType of returned shares
    }

function readShareByView(auth, recType, viewId, params)**

    usage: read a view from the datalake by recType and viewId
    input: auth: String, recType: String, viewId: String, [optional] params: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of the returned view objects
            viewId: id of the invoked view
            recType: recType of the invoked view
    }

**function writeShare(auth, recType, obj, tags)**

    usage: write a new share into the datalake
    input: auth: String, recType: String, obj: JsObject, tag: Array[String]
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of the returned view objects
            id: id of created share
            recType: recType of the invoked view
    }

**function writeShareWithOwners(auth, recType, obj, tags, owners)**

    usage: write a new share into the datalake with specified co-owners
    input: auth: String, recType: String, obj: JsObject, tag: Array[String], owners: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of the returned view objects
            id: id of created share
            recType: recType of the invoked view
    }
