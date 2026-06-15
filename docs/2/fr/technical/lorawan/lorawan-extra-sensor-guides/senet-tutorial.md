---
layout: docs
title: Intégrer Microshare™ dans Senet
description: Configurer le streaming de paquets IoT depuis Senet vers Microshare
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-extra-sensor-guides/senet-tutorial.md
translations:
  en: /docs/2/technical/lorawan/lorawan-extra-sensor-guides/senet-tutorial
  fr: /docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/senet-tutorial
group: advanced
toc: true
---

# Comment : streamer des paquets IoT depuis Senet vers Microshare

Ce tutoriel suppose que vous vous êtes déjà inscrit et disposez d'[un compte développeur Senet](http://www.senetco.com/developer-portal/). Il suppose également que vous avez provisionné au moins un appareil envoyant des paquets uplink vers Senet.

Ce tutoriel vous montrera comment configurer vos appareils Senet pour transférer les données IoT vers le data lake Microshare. Il vous guidera dans la création d'un compte Microshare, la génération d'un token de streaming et son utilisation dans une cible de notification Senet. Ensuite, vous pourrez utiliser les fonctionnalités de la plateforme Microshare pour partager vos données en toute sécurité, créer des workflows de données, des applications, etc.

### Créer un compte Microshare

Le processus d'inscription à Microshare est simple.
1. Rendez-vous sur [https://app.microshare.io](https://app.microshare.io).
2. Cliquez sur [Sign Up](https://auth.microshare.io/portal/signup).

3. Vous recevrez un e-mail vous demandant de confirmer votre compte et de définir votre mot de passe.

Votre expérience devrait ressembler aux captures d'écran ci-dessous.

{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}
{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}
{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

### Comment envoyer des données vers Microshare

Maintenant que vous avez créé votre compte, vous possédez une petite partie du data lake Microshare. Vous allez utiliser la redirection automatisée des paquets de Senet, c'est-à-dire la cible de notification d'un appareil, pour transmettre ces données à [l'API RESTful de Microshare](../../generic-rest-api).

L'API a besoin de deux informations lors de la réception de données provenant d'un service externe :

- Le propriétaire des données
- La catégorie des données

Ces deux informations sont configurées dans la cible de notification de Senet.

Pour vous identifier comme propriétaire des données streamées, vous devez générer un token pour votre compte Microshare. La génération de ce token sera couverte dans la section suivante.

La catégorie sous laquelle chacun de vos paquets de données est stocké dans Microshare s'appelle un recType (comme le Type de votre enregistrement). Il n'y a pas de catégories prédéfinies, vous pouvez utiliser ce que vous voulez, et même réutiliser un recType pour deux appareils distincts. Nous vous donnerons quelques conseils pour déterminer les recTypes plus tard.

### Générer un Pipe Token Microshare

Vous allez maintenant générer un Pipe Token en utilisant l'API Microshare. Le moyen le plus simple d'interagir avec l'API Microshare est d'utiliser Postman.

**Pour installer Postman sur votre ordinateur :**

1. Rendez-vous sur notre [page de documentation API](../../generic-rest-api)

2. Cliquez sur le bouton `Run in Postman` pour installer Postman sur votre ordinateur et charger automatiquement notre collection et environnement API Postman.
**Si cela échoue**, rendez-vous sur [le site web Postman](https://www.getpostman.com/) pour installer Postman manuellement, puis téléchargez et importez la collection et l'environnement depuis notre [page de documentation API](../../generic-rest-api).

3. Ouvrez Postman sur votre ordinateur pour voir la collection Microshare. Vous pouvez sélectionner et gérer l'environnement depuis le coin supérieur droit de votre application Postman.
Pour utiliser les appels de génération de token, vous devez vous identifier avec votre nom d'utilisateur, votre mot de passe et une APIkey.

**Pour obtenir une APIkey Microshare :**

4. Connectez-vous à votre [compte Microshare](https://app.microshare.io)
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

### Configurer votre cible de notification sur Senet

1. Maintenant que vous avez généré votre token, [connectez-vous à Senet](https://portal.senetco.io/) et ouvrez la configuration d'un appareil.
2. Cliquez sur l'onglet `Notification Target`.
3. Pour rediriger les paquets vers notre API, utilisez l'option `Forward to HTTP`.

4. Comme vous avez le pipe token dans votre presse-papiers, configurez-le d'abord. Ajoutez un paramètre d'en-tête comme ceci :
- Header Key: Authorization
- Header Value: Bearer <entrez le pipe token ici>

5. Puis saisissez ceci dans le champ URL : `https://api.microshare.io/share/< entrez le recType que vous avez choisi ici>`

**Astuce** : Nous composons généralement un recType en fonction de l'origine des données, en utilisant un schéma du plus général au plus spécifique. Par exemple, ici l'appareil est une carte sodaq, provisionnée dans Senet, physiquement située à Philadelphie aux États-Unis, donc le recType peut être : `us.philadelphia.senet.sodaq`

Toutes les autres options sont spécifiques à Senet, vous n'avez pas besoin de les activer pour que vos données de capteur soient publiées sur Microshare. En savoir plus sur les données supplémentaires que vous pouvez ajouter à votre paquet dans la documentation Senet : [http://docs.senetco.io/docs/stream/#packet-data](http://docs.senetco.io/docs/stream/#packet-data)

6. Enfin, n'oubliez pas d'activer la cible de notification.

{% include image.html url="/assets/img/senet-notification-target-1.png" description="Senet portal" %}
{% include image.html url="/assets/img/senet-notification-target-2.png" description="Empty notification target" %}
{% include image.html url="/assets/img/senet-notification-target-3.png" description="Microshare notification target" %}

**Note** Vous ne pouvez avoir qu'une seule cible de notification par appareil sur la plateforme Senet, mais vous pouvez utiliser le même recType pour plusieurs appareils si vous souhaitez que leurs paquets arrivent sur Microshare sous forme de flux groupé.

### Vérifier le streaming de données vers Microshare

Les données de votre appareil Senet devraient maintenant être streamées vers votre compte Microshare. Vous pouvez le vérifier avec l'API Microshare.

Vous allez utiliser l'appel `Share -> Get Shares by recType`, pour lequel vous avez besoin d'un `password token`.

1. Ouvrez et exécutez la requête `Authentication -> Request Token`. L'`access-token` généré est automatiquement copié dans votre environnement, vous êtes donc immédiatement prêt à exécuter d'autres requêtes.
2. Ouvrez `Shares -> Get Shares by recType` pour le configurer.
3. Spécifiez le recType que vous avez utilisé dans Senet dans les paramètres de requête.
4. Cliquez sur `Send`.
La réponse de la requête est une vue de toutes les données **AUXQUELLES VOUS SEUL AVEZ ACCÈS** stockées sous le recType spécifié :
            
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}
{% include image.html url="/assets/img/get-share-call-2new.png" description="Successful share call" %}
{% include image.html url="/assets/img/get-share-call-3.png" description="Senet data in microshare example" %}

Les données Senet se trouvent sous les clés `objs -> data`. La clé `pdu` contient les données de charge utile de votre appareil, qui sont généralement des données de capteur telles que la température, le GPS ou les mesures de CO2.
Utilisez notre [bibliothèque de décodage Robot](../../robots-libraries/decoding-payloads/) pour décoder la Low Power Payload.

Si vous exécutez à nouveau la requête, le nombre d'enregistrements augmentera au fur et à mesure du streaming des données. Les métadonnées Microshare vous indiquent combien de pages d'enregistrements vous avez, et le nombre total d'enregistrements (à l'échelle de la plateforme) stockés sous ce recType.

**Attention** la valeur `totalCount` peut être supérieure au nombre total d'enregistrements que vous possédez. C'est parce qu'un autre utilisateur pourrait stocker des données sous le même recType. Ne vous inquiétez pas, vous ne verrez que vos données, et l'autre utilisateur ne verra que les siennes, sauf si vous avez créé des Rules pour partager vos données.

Pour en savoir plus sur la collaboration avec d'autres utilisateurs en partageant des enregistrements, consultez notre [guide des Rules](../../../getting-started/rules-guide)
