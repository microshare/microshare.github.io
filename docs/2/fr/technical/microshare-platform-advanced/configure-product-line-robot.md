---
layout: docs
title: Comment configurer les Robots de ligne produit
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/configure-product-line-robot.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/configure-product-line-robot
  fr: /docs/2/fr/technical/microshare-platform-advanced/configure-product-line-robot
---
## Avertissement

L'un des principes directeurs d'une bonne configuration de robot est de se prémunir contre des règles trop globales qui opèrent sur des données arbitraires pouvant être partagées avec le propriétaire du robot. Il est probablement bon d'utiliser loc1s et/ou metaTags pour « whitelister » les données et restreindre le robot à ne traiter que les enregistrements share qui l'intéressent.

## Robot Value Monitor

### Vue d'ensemble

Le robot _Value Monitor_ peut être configuré pour surveiller la valeur d'un champ spécifique dans les nouveaux enregistrements share créés dans un recType. Si la valeur est supérieure à un maxValue spécifié OU inférieure à un minValue spécifié OU correspond à l'une des valeurs d'un ensemble, une notification peut être envoyée. Notez que si vous ne spécifiez pas maxValue, minValue ou values, l'alerte sera envoyée quelle que soit la valeur du champ.

Le robot peut être configuré pour « limiter » les messages afin qu'ils soient envoyés moins fréquemment. Il peut aussi être configuré pour envoyer à différents utilisateurs (ou pas du tout) selon l'heure de la journée, le jour de la semaine, l'emplacement ou les metaTags.

Note – en raison de choix de conception, ce robot est optimisé pour une configuration du type :

« si une _valeur_ est EN DEHORS d'une plage, envoyer une alerte »

« si l'_heure_ de cet enregistrement share était DANS une plage horaire, envoyer une alerte »

Si vous voulez configurer un robot pour envoyer une alerte lorsqu'une _valeur_ est DANS une plage ou lorsque l'_heure_ est EN DEHORS d'une période, c'est possible mais nécessite deux règles.

### Créer une View de configuration spécifique au Robot dans le compte client

Dans le compte où le robot sera autorisé, créez une nouvelle _view_ pour contenir les paramètres _personnalisés_ spécifiques au client

  - **Name** - saisir « \_\_\_ Value Monitor Config » où \_\_\_ est le nom de l'élément surveillé
  - **Record Type** - io.microshare.config.robot
  - **Static JSON** - voir les fichiers json d'exemple dans le dossier accompagnant et/ou la section suivante pour plus de détails
    - **notificationRules** – obligatoire
    - **notificationLists** – obligatoire
    - **defaultNotificationRule** – optionnel
- **Static JSON**
  - **notificationLists** – (obligatoire) une ou plusieurs listes d'adresses indexées par un listName :

`"<listName>": ["email:email1@company1.com", "email:email2@company2.com", …]`

    - Les formats pris en charge sont email, sms, ou une référence à une autre liste. Par exemple

`"management":["email:manager@company.com", "sms:+16175555555"],`

`"cleaningStaff": ["email:custodian@company.com", "sms:+19785555555", "list:management"]`

  - **notificationRules** - (obligatoire) Liste ordonnée de règles qui filtrent les enregistrements share et envoient des notifications si les critères sont remplis. Une fois une règle correspondante trouvée, les notifications de cette règle sont envoyées et aucune autre règle n'est traitée. Chaque règle comporte un ou plusieurs des champs suivants :
    - Champs qui filtrent les enregistrements share
      - **loc1s** – (optionnel) le loc1 de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **loc2s** - (optionnel) le loc2 de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **loc3s** - (optionnel) le loc3 de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **metaTags** - (optionnel) les metaTags de l'enregistrement share doivent inclure au moins un élément de ce tableau pour correspondre à la règle
      - **devEUIs** - (optionnel) le devEUI de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **fieldName** - (obligatoire si et seulement si _minValue_, _maxValue_ ou _values_ est présent) nom du champ dans l'enregistrement share si les enregistrements seront filtrés par valeur
        - **maxValue** – si la valeur du champ est supérieure à ceci, la règle correspond
        - **minValue** – si la valeur du champ est inférieure à ceci, la règle correspond
        - **values** – si la valeur du champ est contenue dans cette liste de valeurs, la règle correspond.
        - Notez que _maxValue_ et _minValue_ peuvent être utilisés dans la même règle, mais _values_ ne doit PAS être utilisé avec _minValue_ ou _maxValue_.
      - **days** - (optionnel) le jour de la semaine (en anglais) de création de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle. Si présent, _timezone_ doit être inclus et défini sur le fuseau horaire local où les données sont générées. Par exemple :
        - [&quot;Saturday&quot;, &quot;Sunday&quot;]
      - **startTime** - (optionnel) l'enregistrement share doit être créé _après_ cette heure pour correspondre à la règle. Si présent, _timezone_ doit être inclus et défini sur le fuseau horaire local. Par exemple
        - 9:00
        - 9
        - sont tous deux considérés comme 9:00 AM
      - **endTime** - (optionnel) l'enregistrement share doit être créé _avant_ cette heure pour correspondre à la règle. Si présent, _timezone_ doit être inclus et défini sur le fuseau horaire local. Par exemple
        - 17:00
        - 17
        - Sont tous deux considérés comme 5:00 PM
      - **timezone** - (utilisé si _days_, _startTime_ ou _endTime_ est présent) fuseau horaire (format _tz_) pour déterminer l'heure locale de l'occurrence de la charge utile originale.
        - Voir [https://en.wikipedia.org/wiki/Tz\_database](https://en.wikipedia.org/wiki/Tz_database) pour une liste des fuseaux horaires au format tz
    - **maxFrequencyInMinutes** – (optionnel) limite les e-mails (indexés sur les tags d'emplacement) pour qu'une fois un e-mail envoyé pour cet emplacement, un autre ne soit pas envoyé _pour cet emplacement_ pendant au moins ce nombre de minutes
    - **clientListName** – (obligatoire) nom de la liste e-mail pour les e-mails client
    - **supportListName** – (optionnel) nom de la liste e-mail pour les e-mails support.
      - Les e-mails support incluent les mêmes informations que pour les clients, sauf que le nom d'org est ajouté en préfixe du sujet et des informations de débogage supplémentaires sont ajoutées au corps
    - **subject** – (obligatoire) chaîne pseudo-modèle pour générer le sujet de l'e-mail
      - Du JavaScript peut être inséré dans la chaîne, qui sera eval lorsque le message est prêt à être envoyé.
      - Tout ce qui est saisi entre $&lt; &gt; sera eval. Si une variable existe dans le code avec ce nom, elle sera évaluée. Exemples :
        - loc1, loc2, loc3
        - Tout champ membre de la règle (préfixé par 'rule.') tel que rule.minValue, rule.maxValue, etc
        - Tout champ ou sous-champ de l'enregistrement share (préfixé par 'data.'), tel que data.temp
        - Exemples :
          - &quot;Temperature Alert occurred in $&lt;loc1&gt;, $&lt;loc2&gt;, $&lt;loc2&gt;&quot;
          - &quot;Temperature Reading of $&lt;data.temp&gt; exceeded maximum threshold of $&lt;rule.maxValue&gt;&quot;
      - C'est très similaire aux template strings HTML6 SAUF que j'ai dû utiliser des chevrons au lieu d'accolades car les vrais template strings sont déjà eval lors de la récupération de la config view.
    - **body** – (obligatoire) chaîne pseudo-modèle pour générer le corps de l'e-mail ou SMS. Mêmes règles que pour _subject_ (voir ci-dessus)
  - **defaultNotificationRule** – (optionnel) - mêmes paramètres que pour toute règle de notification. Ces paramètres sont appliqués d'abord à chaque règle, puis les paramètres individuels. Exemple d'usage – configurer la règle par défaut avec la plupart des paramètres (subject, body, fieldName, maxValue, minValue, metaTags, etc), puis utiliser les notificationRules individuelles pour :
    - Alerter différentes personnes selon le jour de la semaine.
    - Alerter différentes personnes selon loc1.
    - Alerter différentes personnes selon la valeur de l'événement, ex. « good » vers une liste vide, « leak » vers facilities, et tout le reste vers custodian.
    - Si vous n'avez qu'une seule règle, la defaultNotificationRule n'est pas nécessaire

### Créer le Robot dans le compte client

Créez le robot dans le bon compte/identité et autorisez-le avec un compte/identité ayant accès aux données à surveiller.

- Avec un client GitHub
  - Récupérez le dépôt Smart Office Masters
  - Trouvez le robot dans le dossier robots/value\_monitor
    - robot.value\_monitor.js
  - Collez l'ID de la view de configuration spécifique client (créée à l'étape précédente) dans la variable « configViewID » en haut du fichier.
- Sur la plateforme Microshare, connectez-vous au compte client.
  - Pour chaque robot ci-dessus, copiez le contenu du fichier GitHub correspondant, puis créez un nouveau Robot dans le compte client :
    - **Name** -
      - \_\_\_\_ Monitor Robot, v2.10
      - Où \_\_\_ est le nom du champ surveillé (« Temperature », etc)
    - **Description** -
    - **Active** - ON
    - **Record Type** - DOIT correspondre au recType cible du device cluster
    - **Permission Scopes**
      - Laisser tel quel - activer _Share Read_, _Share Query_, _Share Execute_
    - **Script** - coller le script du fichier GitHub correspondant

#### Testez maintenant !

## Robot Rate Monitor

### Vue d'ensemble

Le robot _Rate Monitor_ est une version plus générique de l'ancien « Motion Robot » qui surveille le taux de mouvements signalés par un ou plusieurs capteurs et notifie les utilisateurs lorsqu'un taux élevé est détecté. Le robot Rate Monitor est configuré pour surveiller un _fieldName_ arbitraire dans les nouveaux enregistrements share créés dans un recType. Par exemple, définissez _fieldName_ sur device.count si vous implémentez l'ancienne fonctionnalité avec le capteur de mouvement Tracknet. Si la valeur change de plus de _rateThreshold_ en _thresholdDurationInMinutes_ minutes, le seuil est dépassé et le reste des règles de notification s'applique. Les e-mails sont limités pour ne pas être envoyés plus souvent que _maxFrequencyInMinutes_ minutes par appareil. Comme pour le robot Value Monitor, vous pouvez configurer le Rate Monitor pour notifier certaines personnes à certains moments, pour certains emplacements ou pour des identifiants d'appareils spécifiques, etc. via notificationRules.

Une anomalie d'implémentation à noter : le robot ne suit les taux que pour les enregistrements share correspondant à au moins une règle de notification. Supposons que le client veuille être notifié si quelqu'un se promène dans le bureau après 21:00. Supposons que votre rateRule soit :

&quot;rateThreshold&quot;: 30,

&quot;fieldName&quot;: &quot;device.count&quot;,

&quot;maxFrequencyInMinutes&quot;: 120,

&quot;thresholdDurationInMinutes&quot;: 60

Si vous avez une seule notificationRule avec startTime à 21:00, c'est à ce moment que le robot commence à suivre les lectures. Considérez l'exemple suivant :

| Heure | Valeur | Taux | Résultat |
| --- | --- | --- | --- |
| 20:45 | 1000 | NA | Avant startTime donc ignoré |
| 21:15 | 1030 | NA | Valeur enregistrée |
| 21:45 | 1041 | 1041 – 1030 = 11 | Seuil NON dépassé |
| 22:14 | 1051 | 1051 – 1030 = 21 | Seuil NON dépassé |
| 22:16 | 1062 | 1062 – 1041 = 21 | La lecture à 21:15 date de plus de 60 minutes, elle est donc ignorée. Le taux sur les 60 dernières minutes est toujours 21. Seuil NON dépassé |
| 22:44 | 1071 | 1071 – 1041 = 30 | Seuil dépassé ! Notifications envoyées |
| 22:59 | 1106 | 1106 – 1051 = 55 | Seuil dépassé ! Notifications limitées car le dernier e-mail date de seulement 15 minutes (moins de 120 minutes). Notifications NON envoyées. |

Peut-être de façon inattendue, ajouter une autre règle peut changer le résultat de la première. Si vous configurez une règle pour envoyer un e-mail à la réception de 18:00 à 21:00 puis une règle suivante pour alerter la sécurité de 21:00 à minuit, la lecture à 20:45 correspondrait à une règle et serait donc enregistrée et non ignorée. La lecture à 21:15 de 1030 afficherait un taux de 30 et déclencherait la notification à ce moment.

### Créer une View de configuration spécifique au Robot dans le compte client

Dans le compte où le robot sera autorisé, créez une nouvelle _view_ pour contenir les paramètres _personnalisés_ spécifiques au client

  - **Name** - saisir « \_\_\_ Rate Monitor Config » où \_\_\_ est le nom de l'élément surveillé, ex. « Motion »
  - **Record Type** - io.microshare.config.robot
  - **Static JSON** - voir les fichiers json d'exemple dans le dossier accompagnant et/ou la section suivante pour plus de détails
    - **fieldName** – obligatoire
    - **rateRule** – obligatoire
    - **notificationRules** – obligatoire
    - **notificationLists** – obligatoire
- **Static JSON**
  - **rateRule -**
    - **fieldName** – (obligatoire) quel champ de l'enregistrement share surveiller ? Référencez les sous-champs en notation pointée comme « _device.count ».
    - **rateThreshold** – (obligatoire) de combien le champ doit changer (pendant la durée) pour que le seuil soit atteint
    - **thresholdDurationInMinutes** – (obligatoire) durée de la période pour mesurer le taux.
    - **maxFrequencyInMinutes** – (optionnel) limite les e-mails (indexés sur l'ID appareil) pour qu'une fois un e-mail envoyé pour cet ID, un autre ne soit pas envoyé _pour cet ID_ pendant au moins ce nombre de minutes. Différent du value monitor, qui indexe par emplacement.
  - **notificationLists** – (obligatoire) identique au robot Value Monitor
  - **notificationRules** - (obligatoire) Liste ordonnée de règles identique au Value Monitor SAUF que _fieldName_, _minValue_, _maxValue_ et _values_ ne sont pas utilisés.
    - Champs qui filtrent les enregistrements share
      - **loc1s** – (optionnel) le loc1 de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **loc2s** - (optionnel) le loc2 de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **loc3s** - (optionnel) le loc3 de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **metaTags** - (optionnel) les metaTags de l'enregistrement share doivent inclure au moins un élément de ce tableau pour correspondre à la règle
      - **devEUIs** - (optionnel) le devEUI de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
      - **days** - (optionnel) le jour de la semaine (en anglais) de création de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle. Si présent, _timezone_ doit être inclus et défini sur le fuseau horaire local où les données sont générées. Par exemple :
        - [&quot;Saturday&quot;, &quot;Sunday&quot;]
      - **startTime** - (optionnel) l'enregistrement share doit être créé _après_ cette heure pour correspondre à la règle. Si présent, _timezone_ doit être inclus et défini sur le fuseau horaire local. Par exemple
        - 9:00
        - 9
        - sont tous deux considérés comme 9:00 AM
      - **endTime** - (optionnel) l'enregistrement share doit être créé _avant_ cette heure pour correspondre à la règle. Si présent, _timezone_ doit être inclus et défini sur le fuseau horaire local. Par exemple
        - 17:00
        - 17
        - Sont tous deux considérés comme 5:00 PM
      - **timezone** - (utilisé si _days_, _startTime_ ou _endTime_ est présent) fuseau horaire (format _tz_) pour déterminer l'heure locale de l'occurrence de la charge utile originale.
        - Voir [https://en.wikipedia.org/wiki/Tz\_database](https://en.wikipedia.org/wiki/Tz_database) pour une liste des fuseaux horaires au format tz
    - **clientListName** – (obligatoire) nom de la liste e-mail pour les e-mails client
    - **supportListName** – (optionnel) nom de la liste e-mail pour les e-mails support.
      - Les e-mails support incluent les mêmes informations que pour les clients, sauf que le nom d'org est ajouté en préfixe du sujet et des informations de débogage supplémentaires sont ajoutées au corps
    - **subject** – (obligatoire) chaîne pseudo-modèle pour générer le sujet de l'e-mail
      - Du JavaScript peut être inséré dans la chaîne, qui sera eval lorsque le message est prêt à être envoyé.
      - Tout ce qui est saisi entre $&lt; &gt; sera eval. Si une variable existe dans le code avec ce nom, elle sera évaluée. Exemples :
        - loc1, loc2, loc3
        - Tout champ membre de la règle (préfixé par 'rule.') tel que rule.minValue, rule.maxValue, etc
        - Tout champ ou sous-champ de l'enregistrement share (préfixé par 'data.'), tel que data.temp
        - Exemples :
          - &quot;Temperature Alert occurred in $&lt;loc1&gt;, $&lt;loc2&gt;, $&lt;loc2&gt;&quot;
          - &quot;Temperature Reading of $&lt;data.temp&gt; exceeded maximum threshold of $&lt;rule.maxValue&gt;&quot;
      - C'est très similaire aux template strings HTML6 SAUF que j'ai dû utiliser des chevrons au lieu d'accolades car les vrais template strings sont déjà eval lors de la récupération de la config view.
    - **body** – (obligatoire) chaîne pseudo-modèle pour générer le corps de l'e-mail ou SMS. Mêmes règles que pour _subject_ (voir ci-dessus).

### Créer le Robot dans le compte client

Créez le robot dans le bon compte / identité et autorisez-le avec un compte / identité ayant accès aux données à surveiller.

- Avec un client GitHub
  - Récupérez le dépôt Smart Office Masters
  - Trouvez le robot dans le dossier robots/rate\_monitor
    - robot.rate\_monitor.js
  - Collez l'ID de la view de configuration spécifique client (créée à l'étape précédente) dans la variable « configViewID » en haut du fichier.
- Sur la plateforme Microshare, connectez-vous au compte client.
  - Pour chaque robot ci-dessus, copiez le contenu du fichier GitHub correspondant, puis créez un nouveau Robot dans le compte client :
    - **Name** -
      - \_\_\_\_ Rate Monitor Robot, v2.10
      - Où \_\_\_ est le nom du champ surveillé (« Motion », etc)
    - **Description** -
    - **Active** - ON
    - **Record Type** - DOIT correspondre au recType cible du device cluster
    - **Permission Scopes**
      - Laisser tel quel - activer _Share Read_, _Share Query_, _Share Execute_
    - **Script** - coller le script du fichier GitHub correspondant

#### Testez maintenant !

## Robot de notification planifiée

### Vue d'ensemble

Le robot _Scheduled Notification_ sert à envoyer des notifications (e-mails ou SMS) selon un planning. Actuellement le seul cas d'usage est en accompagnement de l'application « Electronic Attendance Records ». Le robot est configuré pour envoyer un e-mail hebdomadaire au client, qui peut cliquer sur le lien pour télécharger les « Electronic Attendance Records » hebdomadaires.

### Créer une View de configuration spécifique au Robot dans le compte client

Dans le compte où le robot sera autorisé, créez une nouvelle _view_ pour contenir les paramètres _personnalisés_ spécifiques au client

  - **Name** - saisir « \_\_\_ Value Monitor Config » où \_\_\_ est le nom de l'élément surveillé
  - **Record Type** - io.microshare.config.robot
  - **Static JSON** – also see the example json files
    - **notificationRule** – obligatoire
      - **subject** – identique ci-dessus
      - **body** – identique ci-dessus
        - les variables « autorisées » sont _now_, _notificationRule_ et _url_
      - **timezone** – utilisé pour produire un champ 'date' dans les paramètres url
      - **addresses** – liste d'adresses e-mail et sms. Contrairement aux autres robots, vous ne pouvez pas référencer une liste d'e-mails (list:myList n'est jamais valide) car il s'agit d'une notification unique.
      - **url** – utilisé pour initialiser une variable url
      - _Paramètres optionnels_
        - Tout argument supplémentaire dans la règle de notification sera ajouté comme paramètre url à la fin de l'url. Si l'url est pour l'application « Electronic Attendance Records », vous pouvez inclure les arguments valides comme autoDownload, downloadXLSX, excludeSaturday, excludeSunday et eventName.

Ce robot est optimisé pour envoyer un e-mail contenant une url. Le code construit cette url automatiquement en ajoutant les arguments de notificationRule en paramètres url. Mais vous devez inclure l'url dans le body pour qu'elle apparaisse dans la notification. Ce n'est PAS automatique. Le paramètre 'date' EST ajouté automatiquement à la fin de l'url par commodité.

Par exemple :

&quot;body&quot;: &quot;Click this link to download your report.&lt;br&gt;&lt;br&gt;&lt;a href=&quot;$&lt;url&gt;&quot;&gt;Weekly Attendance Report&lt;/a&gt;.&quot;,

### Créer le Robot dans le compte client

Créez le robot dans le bon compte / identité et autorisez-le avec un compte / identité ayant accès aux données à surveiller.

- Avec un client GitHub
  - Récupérez le dépôt Smart Office Masters
  - Trouvez le robot dans le dossier robots/scheduled\_notification
    - robot.scheduled\_notification.js
  - Collez l'ID de la view de configuration spécifique client (créée à l'étape précédente) dans la variable « configViewID » en haut du fichier.
- Sur la plateforme Microshare, connectez-vous au compte client.
  - Pour chaque robot ci-dessus, copiez le contenu du fichier GitHub correspondant, puis créez un nouveau Robot dans le compte client :
    - **Name** - (exemple)
      - \_\_\_\_ Scheduled Notification Robot, v2.10
      - Où \_\_\_ est le nom de l'application surveillée (« Attendance », etc)
    - **Description** -
    - **Active** - ON
    - **Record Type** - non applicable
    - **Permission Scopes**
      - Laisser tel quel - activer _Share Read_, _Share Query_, _Share Execute_
    - **Script** - coller le script du fichier GitHub correspondant

#### Testez maintenant !

## Robots Smilio

### Vue d'ensemble

L'appareil Smilio envoie des charges utiles qui rapportent le total des appuis sur chaque bouton depuis la dernière réinitialisation. Appelons cette charge utile _device data_. Malheureusement, les device data seules ne rapportent PAS quel bouton a été pressé – il faut comparer la charge utile actuelle avec la précédente. Si nous le faisons, nous pouvons générer un nouveau shareRecord avec l'information d'appui – appelons cela un _device event_. Le device event ne rapporte pas la signification du bouton au moment de l'appui – comme « Low soap ». Si nous consultons cette information pour générer un nouveau shareRecord, appelons cela un _business event_.

- Smilio Robot 1 – écoute un enregistrement share _device data_ (généré par le unpacker Smilio) sur unpackedRecType, le compare aux device data les plus récentes, et génère (zéro, un ou plusieurs) _device events_ – créant un nouveau shareRecord avec des champs différents – et le(s) sauvegarde dans un recType composite – &lt;unpackedRecType&gt;.event
- Smilio Robot 2 – écoute un enregistrement share _device event_ sur le recType &lt;unpackedRecType&gt;.event et le traduit en _business event_ - c'est-à-dire un nouveau shareRec dans un recType composite – &lt;unpackedRecType&gt;.event.meta
- Smilio Robot 3 – NOTE : OBSOLÈTE – veuillez utiliser le robot Value Monitor à la place

### Prérequis pour les installations nouvelles ou existantes

- Lire les exigences ou le SOW
  - Quelles applications avec quels appareils, etc. ?
- Configurer les comptes et identités client.
  - Assurez-vous de comprendre quel compte/identité possédera les données. Les robots créés doivent être autorisés dans le compte et l'identité propriétaires des données. Vous devrez peut-être créer des share rules (selon le SOW) pour partager les nouveaux recTypes avec d'autres groupes.

### Créer des Share Rules dans le compte Assets

**NOTE : IGNORER CETTE ÉTAPE POUR L'INSTANT – NOUS PARTAGEONS LES VIEWS GLOBALEMENT À COURT TERME**

Partagez les views communes avec le client. Les robots nécessitent l'accès à deux views communes différentes du compte assets.

- Connectez-vous au compte assets ([assets@microshare.io](mailto:assets@microshare.io) dans l'identité par défaut) et créez deux share rules pour partager les views avec l'organisation cliente. L'account qui autorise les robots est celui qui a besoin d'accès aux views communes.
  - **Active** - Cocher ON
  - **Resource Type** - View
  - **Operations** - _Read, Query_ et _Execute_
  - **Organization** - choisir _Specific Value_, puis saisir l'organisation cliente
  - Pour la 1ère share rule
    - **Name** – saisir « Share Query Views with \_\_\_ » où \_\_\_ est l'organisation cliente
    - **Record Type** - io.microshare.query
  - Pour la 2ème share rule
    - **Name** – saisir « Share Config Views with \_\_\_ » où \_\_\_ est l'organisation cliente
    - **Record Type** - io.microshare.config

### Créer la configuration Smilio spécifique client dans le compte client

- Dans le compte où les robots seront autorisés, créez une nouvelle _view_ pour les paramètres _personnalisés_ spécifiques au client
  - **Name** - saisir « \_\_\_ Smilio Config » où \_\_\_ est l'organisation cliente
  - **Record Type** - io.microshare.config
  - **Static JSON** - voir les fichiers json d'exemple dans le dossier accompagnant et/ou la section suivante pour plus de détails
    - **latestSmilioReadings** - requis par Smilio Robot 1
    - **backboardRules** – requis par Smilio Robot 2
    - **emailLists** – requis par Smilio Robot 3
    - **emailRules** – requis par Smilio Robot 3
- **Static JSON**
  - **latestSmilioReadings**
    - **backDays** – combien de jours en arrière chercher la lecture « la plus récente » de chaque appareil Smilio
    - **viewRecType** – io.microshare.query (recType de la query view pour chercher les dernières lectures)
    - **viewID** – 5e54746146e0fb00284a8229 (ID de la query view pour chercher les dernières lectures)
    - **loc1s** – tableau de chaînes utilisé comme « white list » pour filtrer les shareRecs traités par le robot. NON optionnel car c'est le seul mécanisme de filtrage de ce robot.
  - **backboardRules** - les backboard rules forment une liste. Quand Smilio Robot 2 est déclenché par un shareRecord device event, le robot cherche dans backboardRules un backboard correspondant. La première backboardRule correspondante est utilisée. S'il n'en trouve pas, le robot quitte SANS créer de nouveau shareRecord _business event_. Ignorer les enregistrements sans backboardRule correspondante est un comportement normal.
    - **backboardRectype** – (obligatoire - utiliser _io.microshare.config.backboard_) recType pour rechercher la config view backboard
    - **backboardId** – (obligatoire) id de la config view pour le backboard cible

NOTE – le format de la backboard config view a changé en version 2.7 de la ligne produit. Des exemples se trouvent dans le dossier _Example Touchfree Configuration_. Pour les instructions détaillées, voir la section _Backboard View_ du document « Instructions – Apps ».

- **loc1s** – (optional) the loc1 of the share record must be included in this array in order for it to match the rule
- **loc2s** - (optional) the loc2 of the share record must be included in this array in order for it to match the rule
- **loc3s** - (optional) the loc3 of the share record must be included in this array in order for it to match the rule
- **metaTags** - (optional) the metaTags of the share record must include at least one of the elements in this array in order for it to match the rule
- **events** - (optionnel) l'événement de l'enregistrement share doit être inclus dans ce tableau pour correspondre à la règle
- **devEUIs** - (optional) the devEUI of the share record must be included in this array in order for it to match the rule
- **days** - (optional) the day of the week (in English) that the share record was created must be included in this array in order for it to match the rule. Par exemple :
- [&quot;Saturday&quot;, &quot;Sunday&quot;]
- **timezone** - (obligatoire si et seulement si _days_ est présent) fuseau horaire pour déterminer le jour de l'occurrence de la charge utile originale en GMT.
- **language** - (optionnel) langue pour générer le label dans le business event. Si aucune langue n'est fournie ou si la langue cible n'est pas trouvée dans le backboard, la langue par défaut est 'en'. Utilisez le code langue à deux caractères ISO 639-1. Voir [https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
- **emailLists** – une ou plusieurs listes d'e-mails indexées par emailListName :

`"<emailListName>": ["email1@company1.com", "email2@company2.com", …]`

  - **emailRules** -
    - **clientEmailListName** – nom de la liste e-mail pour les e-mails client
    - **supportEmailListName** – nom de la liste e-mail pour les e-mails support.
      - Les e-mails support incluent les mêmes informations que pour les clients, sauf que le nom d'org est ajouté en préfixe du sujet et des informations de débogage supplémentaires sont ajoutées au corps
    - (mêmes options que ci-dessus dans backboardRules)
- Une fois la view de configuration client créée, sauvegardez-la puis copiez son ID dans le presse-papiers.

#### Astuces pour la configuration spécifique client

Réutiliser la même liste e-mail Support

Évitez la complexité de configuration en utilisant la même liste e-mail pour supportEmailListName dans chaque règle.

Configurer une « Black List »

Supposons que le client ne veuille aucun e-mail pour les événements « Great job » du Smilio 5 boutons, mais un planning complexe pour tous les autres. Au lieu de lister exhaustivement « tous les autres événements » dans chaque règle, utilisez une approche « black list ». Filtrez d'abord les événements de la black list et configurez-les pour envoyer vers une liste e-mail vide. Par exemple, configurez cette règle comme PREMIÈRE dans emailRules :

{% highlight java %}
{

&quot;events&quot;: [&quot;good&quot;],

&quot;clientEmailListName&quot;: &quot;noEmail&quot;,

&quot;supportEmailListName&quot;: &quot; noEmail &quot;

}

{% endhighlight %}
Et configurez une liste e-mail vide dans emailLists

`"noEmail": []`

Le résultat est qu'aucun e-mail ne sera jamais envoyé pour un événement « Good Job », quelle que soit le reste des emailRules.

### Créer les Robots dans le compte client

Créez les trois Robots Smilio et authentifiez-les avec le compte / identité propriétaire des données client.

- Avec un client GitHub
  - Récupérez le dépôt Smart Office Masters
  - Trouvez les trois fichiers robot dans le dossier robots/smilio
    - robot.smilio\_1\_devevent.js
    - robot.smilio\_2\_busevent.js
    - robot.smilio\_3\_alert.js
  - Collez l'ID de la view de configuration client dans la variable « configViewID » en haut de chaque fichier.
- Sur la plateforme Microshare, connectez-vous au compte client.
  - Pour chaque robot ci-dessus, copiez le contenu du fichier GitHub correspondant, puis créez un nouveau Robot dans le compte client :
    - **Name** -
      - (for smilio\_1\_devevent) Smilio Robot 1, v2.7
      - (for smilio\_2\_busevent) Smilio Robot 2, v2.7
      - (for smilio\_3\_alert) Smilio Robot 3, v2.7
    - **Description** -
    - **Active** - ON
    - **Record Type** -
      - (pour smilio\_1\_devevent) io.microshare.feedback.unpacked
        - DOIT correspondre au recType cible du device cluster
      - (pour smilio\_2\_busevent) io.microshare.feedback.unpacked.event
        - La première partie du recType doit correspondre au recType ci-dessus
      - (pour smilio\_3\_alert) io.microshare.feedback.unpacked.event.meta
        - La première partie du recType doit correspondre au recType ci-dessus
    - **Permission Scopes**
      - Activer _Share Read_, _Share Query_, _Share Write_
    - **Script** - coller le script du fichier GitHub correspondant
    - Assurez-vous d'autoriser les robots avec le compte / identité propriétaire des données

#### Testez maintenant !

- Une fois le(s) Smilio en production de données, utilisez Postman ou une testView simple pour vérifier les share records de chaque recType.
- Vérifiez que vous recevez les e-mails support comme prévu.
  - La ligne de sujet doit commencer par l'organisation cliente
  - Vérifiez que le label et l'événement correspondent au backboard physiquement en place chez le client
- Si vous modifiez la Smilio Config View, basculez les robots OFF puis ON à nouveau. Oui, faites-le pour les trois pour tester exactement ce que vous avez configuré.

 