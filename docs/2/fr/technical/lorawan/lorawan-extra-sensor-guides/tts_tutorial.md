---
layout: docs
title: Intégration The Things Stack (TTS) et Microshare™
description: Configurer le streaming de paquets IoT depuis TTS vers Microshare
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-extra-sensor-guides/tts_tutorial.md
translations:
  en: /docs/2/technical/lorawan/lorawan-extra-sensor-guides/tts_tutorial
  fr: /docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/tts_tutorial
group: advanced
toc: true
---

--------------------------------------- 
 
{% include image.html url="\assets\img\banner-2.jpg"  description="ms logo" %} 

##### SOMMAIRE :  
 
1. [Créer un compte Microshare.io](./#register-for-a-microshareio-account) 
2. [Comment envoyer des données vers Microshare](./#how-to-send-data-to-microshare) 
3. [Générer un Pipe Token Microshare](./#generate-a-microshare-pipe-token) 
4. [Configurer l'intégration d'application TTS](./#setup-your-tts-application-integration)
5. [Vérifier le streaming de données vers Microshare](./#verify-the-data-streaming-to-microshare) 
 
--------------------------------------- 
 
<br>


### Comment : streamer des paquets IoT depuis The Things Stack (TTS) vers Microshare

Ce tutoriel suppose que vous vous êtes déjà inscrit et disposez d'[un compte TTS](https://console.thethingsnetwork.org/){:target="_blank"}. Il suppose également que vous avez provisionné au moins un appareil envoyant des paquets uplink vers TTS.

Ce tutoriel vous montrera comment configurer vos applications TTS pour transférer les données IoT vers le data lake Microshare. Il vous guidera dans la création d'un compte Microshare, la génération d'un token de streaming et son utilisation dans une cible de notification TTS. Ensuite, vous pourrez utiliser les fonctionnalités de la plateforme Microshare pour partager vos données en toute sécurité, créer des workflows de données, des applications, etc.

### Créer un compte Microshare.io

Le processus d'inscription à Microshare est simple.
1. Rendez-vous sur [https://app.microshare.io](https://app.microshare.io){:target="_blank"}.
2. Cliquez sur [Sign Up](https://auth.microshare.io/portal/signup){:target="_blank"}.

3. Vous recevrez un e-mail vous demandant de confirmer votre compte et de définir votre mot de passe.

Votre expérience devrait ressembler aux captures d'écran ci-dessous.

{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}
{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}
{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

### Comment envoyer des données vers Microshare

Maintenant que vous avez créé votre compte, vous possédez une petite partie du data lake Microshare. Vous allez utiliser la redirection automatisée des paquets de TTS, c'est-à-dire la cible de notification d'un appareil, pour transmettre ces données à [l'API RESTful de Microshare](../../generic-rest-api){:target="_blank"}.

L'API a besoin de deux informations lors de la réception de données provenant d'un service externe :

- Le propriétaire des données
- La catégorie des données

Ces deux informations sont configurées dans les sections Intégrations d'application de TTS.

Pour vous identifier comme propriétaire des données streamées, vous devez générer un token pour votre compte Microshare. La génération de ce token sera couverte dans la section suivante.

La catégorie sous laquelle chacun de vos paquets de données est stocké dans Microshare s'appelle un `recType` (comme le Type de votre enregistrement). Il n'y a pas de catégories prédéfinies, vous pouvez utiliser ce que vous voulez, et même réutiliser un recType pour deux appareils distincts. Nous vous donnerons quelques conseils pour déterminer les recTypes plus tard.

### Générer un Pipe Token Microshare

Vous allez maintenant générer un Pipe Token en utilisant l'API Microshare. Le moyen le plus simple d'interagir avec l'API Microshare est d'utiliser [Postman](https://www.getpostman.com/){:target="_blank"}

**Pour installer Postman sur votre ordinateur :**

1. Rendez-vous sur notre [page de documentation API](../../generic-rest-api){:target="_blank"}

2. Cliquez sur le bouton `Run in Postman` pour installer Postman sur votre ordinateur et charger automatiquement notre collection et environnement API Postman.
**Si cela échoue**, rendez-vous sur [le site web Postman](https://www.getpostman.com/){:target="_blank"} pour installer Postman manuellement, puis téléchargez et importez la collection et l'environnement depuis notre [page de documentation API](../../generic-rest-api){:target="_blank"}.

3. Ouvrez Postman sur votre ordinateur pour voir la collection Microshare. Vous pouvez sélectionner et gérer l'environnement depuis le coin supérieur droit de votre application Postman.
Pour utiliser les appels de génération de token, vous devez vous identifier avec votre nom d'utilisateur, votre mot de passe et une APIkey.

**Pour obtenir une APIkey Microshare :**

4. Connectez-vous à votre [compte Microshare](https://app.microshare.io){:target="_blank"}
5. Allez dans `Manage -> Keys.`
6. Cliquez sur `CREATE NEW APP` et donnez un nom convivial à votre APIkey (pourquoi pas « HackIoT » ?).
5. Une fois la clé créée, cliquez sur la valeur dans la section API KEY (CLIENT ID) pour la copier dans votre presse-papiers. (Voir les captures d'écran ci-dessous)

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

**Pour générer enfin le Pipe Token Microshare :**
6. Retournez dans Postman et modifiez votre environnement.
7. Copiez l'APIkey et saisissez votre nom d'utilisateur et votre mot de passe.

8. Cela vous permet d'exécuter la requête `Authentication -> Request pipe token`. Le token généré est renvoyé sous la clé `access token` dans le jeu de résultats et est valide pour une durée illimitée. Le Pipe token ne peut être utilisé que pour publier des données sur la plateforme Microshare.

Plus tard, nous utiliserons l'appel `Request Token` qui renvoie un access token valide seulement 48 heures et utilisable avec les autres API Microshare.

{% include image.html url="/assets/img/generate-pipe-token-1new.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2new.png" description="Filled Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** Tous les tokens générés peuvent être trouvés, copiés ou révoqués depuis l'écran `Manage -> Key -> Tokens` dans Microshare. Si vous n'avez pas copié le pipe token juste après l'appel, allez sur cet écran, trouvez le token de type Pipe et copiez-le.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}

### Configurer l'intégration d'application TTS

- Maintenant que vous avez généré votre token, [connectez-vous à TTS](https://console.thethingsnetwork.org/) choisissez votre application et cliquez sur l'onglet `Integrations`.

{% include image.html url="/assets/img/ttn_app_integration_tab.png" description="" %}

- Cliquez sur `Add Integration`
- Cliquez sur l'option `HTTP Integration`

{% include image.html url="/assets/img/ttn_app_integ_select_http.png" description="Select the Http Integration" %}
<br>
- Saisissez les données dans les champs suivants :
    - **Process ID:** donnez un nom à votre intégration comme `microshare_hackiot_reading`
    - **Access Key:** sélectionnez l'option `default`
    - **URL:** la valeur de l'url est composée de l'url de base **https://api.microshare.io/share/** et de la valeur `recType` que vous avez choisie précédemment.
    <br>**Astuce** : Nous composons généralement un recType en fonction de l'origine des données, en utilisant un schéma du plus général au plus spécifique. Par exemple, ici l'appareil est une carte sodaq, provisionnée dans TTS, physiquement située à Reading au Royaume-Uni, donc le recType peut être : `uk.reading.ttn.sodaq` un exemple d'url et de recType est `https://api.microshare.io/share/uk.reading.ttn.sodaq`
    - **Method:** Sélectionnez l'option `POST`
    - **Authorization:** Collez votre pipe token que vous avez généré précédemment. La valeur devrait ressembler à cet exemple :<br>
    `eedbb46fd94XXXXXDDDDD537e0d1c8fd411bb8bf3556a39??`
    - Cliquez sur le bouton `Add Integration`

Tous les autres champs ne sont pas requis pour ce tutoriel.<br>
Ci-dessous un exemple de formulaire `Integrations`.

{% include image.html url="/assets/img/ttn_integ_http_updated_form.png" description="TTN HTTP Integration Form" %}

Ensuite, vous devriez voir votre nouvelle intégration HTTP Microshare en cours d'exécution dans la section Aperçu des intégrations

{% include image.html url="/assets/img/ttn_integ_http_running.png" description="TTN HTTP Integration Running" %}

### Vérifier le streaming de données vers Microshare

Les données de votre appareil TTS devraient maintenant être streamées vers votre compte Microshare. Vous pouvez le vérifier avec l'API Microshare.

Vous allez utiliser l'appel `Share -> Get Shares by recType`, pour lequel vous avez besoin d'un `password token`.

1. Ouvrez et exécutez la requête `Authentication -> Request Token`. L'`access-token` généré est automatiquement copié dans votre environnement, vous êtes donc immédiatement prêt à exécuter d'autres requêtes.
2. Ouvrez `Shares -> Get Shares by recType` pour le configurer.
3. Spécifiez le recType que vous avez utilisé dans TTS dans les paramètres de requête.
4. Cliquez sur `Send`.

La réponse de la requête est une vue de toutes les données **AUXQUELLES VOUS SEUL AVEZ ACCÈS** stockées sous le recType spécifié :
            
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}
{% include image.html url="/assets/img/get-share-call-2.png" description="Successful share call" %}
{% include image.html url="/assets/img/get-share-call-3-ttn-json.png" description="TTN data in microshare example" %}

Les données TTS se trouvent sous les clés `objs -> data`. La clé `payload_fields` contient les données de charge utile de votre appareil, qui sont généralement des données de capteur telles que la température, le GPS ou les mesures de CO2.
Utilisez notre [bibliothèque de décodage Robot](../../robots-libraries/decoding-payloads/) pour décoder la Low Power Payload.

Si vous exécutez à nouveau la requête, le nombre d'enregistrements augmentera au fur et à mesure du streaming des données. Les métadonnées Microshare vous indiquent combien de pages d'enregistrements vous avez, et le nombre total d'enregistrements (à l'échelle de la plateforme) stockés sous ce recType.

**Attention** la valeur `totalCount` peut être supérieure au nombre total d'enregistrements que vous possédez. C'est parce qu'un autre utilisateur pourrait stocker des données sous le même recType. Ne vous inquiétez pas, vous ne verrez que vos données, et l'autre utilisateur ne verra que les siennes, sauf si vous avez créé des Rules pour partager vos données.

Pour en savoir plus sur la collaboration avec d'autres utilisateurs en partageant des enregistrements, consultez notre [guide des Rules](../../../getting-started/rules-guide)
