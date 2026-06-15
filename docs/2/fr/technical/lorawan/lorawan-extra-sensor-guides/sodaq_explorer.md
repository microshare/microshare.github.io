---
layout: docs
title: SODAQ ExpLoRer
description: Programmer la carte SODAQ ExpLoRer avec l'IDE Arduino
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-extra-sensor-guides/sodaq_explorer.md
translations:
  en: /docs/2/technical/lorawan/lorawan-extra-sensor-guides/sodaq_explorer
  fr: /docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/sodaq_explorer
group: lorawan-devices
toc: true
---

Dans ce tutoriel, vous allez programmer la [carte SODAQ ExpLoRer](http://support.sodaq.com/sodaq-one/explorer/){:target="_blank"} en utilisant l'[IDE Arduino](https://www.arduino.cc/en/Main/Software){:target="_blank"}. Suivez ce guide pour programmer la carte SODAQ Explorer et la connecter à [The Things Network (TTN)](https://www.thethingsnetwork.org/)

**Important** Vous devez être à portée de la zone de couverture The Things Network ou d'une passerelle. Vous pouvez consulter la [carte de couverture The Things Network](https://www.thethingsnetwork.org/map){:target="_blank"} pour vérifier la couverture dans votre zone ou installer votre propre [passerelle LoRaWAN](https://www.thethingsnetwork.org/docs/gateways/gateway/){:target="_blank"} connectée à The Things Network. Si vous n'êtes **pas** dans la zone de couverture The Things Network, votre appareil ne se connectera pas et ne transmettra pas de données à la plateforme The Things Network.

### Exigence Linux
**Ceci s'applique UNIQUEMENT à Linux** `Utilisateurs Linux` vous devrez peut-être donner à votre utilisateur actuel un accès en lecture/écriture au fichier de périphérique série. Cela nécessite généralement d'ajouter l'utilisateur actuel à un groupe système. Ces noms de groupe varient selon la distribution Linux que vous utilisez. Voici quelques exemples pour Ubuntu et Arch Linux.

`Accès série Ubuntu` exécutez cette commande dans un terminal et `REDÉMARREZ` la machine
```
sudo usermod -a -G dialout $USER
```

`Accès série Arch Linux` exécutez cette commande dans un terminal et `REDÉMARREZ` la machine
```
gpasswd -a $USER uucp
```
``` 
gpasswd -a $USER lock
```

## IDE de bureau Arduino
- Téléchargez et installez l'[IDE de bureau Arduino](../arduino_ide)

### Configurer Arduino pour les bibliothèques SODAQ ExpLoRer
- Ouvrez l'IDE Arduino
- Cliquez sur `File` > `Preferences`
- Dans le champ `Additional Boards Manager URLs`, entrez cette url pour définir les bibliothèques de la carte SODAQ Explorer

    ```
    http://downloads.sodaq.net/package_sodaq_samd_index.json
    ```
- Cliquez sur `OK`

{% include image.html url="/assets/img/ardunino_sodaq_libs_preferences.png" description="Configure the SODAQ Board Libraries" %}

### Installer les bibliothèques SODAQ Explorer via le Board Manager
- Cliquez sur `Tools` > `Board` > `Boards Manager`
- Tapez `SODAQ` dans le champ de filtre
- Cliquez sur les boutons `Install` pour chacun des appareils SODAQ listés

{% include image.html url="/assets/img/sodaq_explorer_install_libs.png" description="Install the SODAQ Board Libraries" %}

### Installer les bibliothèques Arduino The Things Network
Installez les bibliothèques d'appareils TTN pour Arduino
- Cliquez sur `Sketch` > `Include Library` > `Manage Libraries`
- Tapez `The Things Network` dans le champ de filtre
- Cliquez sur le bouton install dans la section `The Things Network Arduino Library`

{% include image.html url="/assets/img/arduino_install_ttn_lib.png" description="Install the TTN Arduino Libraries" %}

Vous pouvez en savoir plus sur la bibliothèque Arduino TTN depuis le [dépôt github du projet](https://github.com/thethingsnetwork/arduino-device-lib){:target="_blank"}

### Installer les bibliothèques Cayenne Low Power Payload (LPP)
Installez la bibliothèque Cayenne LPP dans l'IDE Arduino.
- Cliquez sur `Sketch` > `Include Library` > `Manage Libraries`
- Tapez `CayanneLPP` dans le champ de filtre
- Cliquez sur le bouton install dans la section `CayenneLPP Arduino Library`

{% include image.html url="/assets/img/arduino_sodaq_install_cayanneLPP.png" description="Install the CayenneLPP Arduino Libraries" %}

En savoir plus sur [Cayenne LPP ici](https://mydevices.com/cayenne/docs_stage/lora/#lora-cayenne-low-power-payload){:target="_blank"}

### Sélectionner la carte SODAQ Explorer
- Cliquez sur `Tools` > `Board` > `Boards Manager` faites défiler le menu, trouvez et cliquez sur l'option `SODAQ Explorer` dans la liste
 
{% include image.html url="/assets/img/arduino_menu_select_sodaq.png" description="Select the SODAQ Board Libraries" %}

### Configurer le port série Arduino
Le moniteur série vous permet d'interagir, de journaliser et de déboguer les applications sur les appareils connectés. Vous utiliserez le moniteur série pour obtenir des informations de l'appareil connecté. À ce stade, connectez le micro USB à l'appareil puis à l'ordinateur. Ensuite, sélectionnez le port série dans l'IDE Arduino.

**Note** Les `Port Names` réels varieront selon les systèmes d'exploitation. Les captures d'écran ci-dessous proviennent d'Ubuntu.

- Cliquez sur `Tools` > `Ports:`> Sélectionnez le port `USB` qui devrait correspondre à l'appareil connecté.

{% include image.html url="/assets/img/arduino_serial_selection.png" description="Setup Ardunino Serial Port" %}

LoRaWAN nécessite des informations spécifiques à chaque appareil pour qu'ils puissent se connecter et fonctionner sur les réseaux LoRaWAN. Vous utiliserez le `Arduino Serial Monitor` pour obtenir les informations de l'appareil requises pour l'enregistrement sur les serveurs The Things Network plus tard dans ce tutoriel.

- Cliquez sur `Tools` > `Serial Monitor` une fenêtre s'ouvrira (assurez-vous que votre appareil est connecté et que vous avez sélectionné le bon `USB Port`)

{% include image.html url="/assets/img/arduino_new_serial_monitor.png" description="Open Ardunino Serial Monitor" %}


### Sketch/code Arduino TTN SODAQ ExpLoRer
La plateforme Arduino maintient son code source dans des `sketches`, qui sont des fichiers avec l'extension `.ino`. Le code que nous utilisons pour ce tutoriel se trouve dans le dépôt github [https://github.com/microshare/hackiot_examples](https://github.com/microshare/hackiot_examples){:target="_blank"}

- Téléchargez ou clonez le [dépôt d'exemples](https://github.com/microshare/hackiot_examples){:target="_blank"} pour avoir le code source en local
- Cliquez sur `File` > `Open` parcourez l'emplacement où vous avez cloné le dépôt et ouvrez le fichier `hackiot_examples/ttn_sodaq_hackiot_reading/ttn_sodaq_hackiot_reading.ino`

Vous devriez voir le code que nous utiliserons pour ce tutoriel dans l'IDE. Pour enregistrer et connecter correctement l'appareil à TTN, nous aurons besoin d'informations de la carte SODAQ telles que le [DevEUI](https://www.thethingsnetwork.org/docs/lorawan/address-space.html){:target="_blank"} de la carte. Vous allez maintenant compiler et téléverser cette application d'exemple sur la carte SODAQ via l'IDE. Ce code d'exemple ne fonctionnera pas à ce stade car il nous manque les clés pour TTN. Dans les prochaines étapes, nous obtiendrons les informations de l'appareil requises pour l'enregistrement sur TTN.

- Cliquez sur `Sketch` > `Upload`

L'application sera compilée et téléversée sur la carte SODAQ. Vous devriez voir des messages de succès similaires dans la section terminal de l'IDE.

{% include image.html url="/assets/img/arduino_upload.png" description="Arduino Upload Success" %}

Dans la fenêtre du moniteur série, vous devriez commencer à voir des informations défiler. Décochez la case `Auto Scroll` pour arrêter le défilement automatique. Faites défiler manuellement vers le haut du moniteur série et enregistrez ou copiez la valeur `DevEUI` listée

{% include image.html url="/assets/img/arduino_sodaq_deveui.png" description="Arduino Upload Success" %}

Maintenant que vous avez la valeur `DevEUI` de votre appareil, vous pouvez commencer à enregistrer et connecter votre appareil à The Things Network. La section suivante vous montre comment enregistrer et connecter votre appareil SODAQ à TTN en utilisant LoRaWAN.

## Créer un compte The Things Network
Si vous n'avez pas de compte TTN, rendez-vous sur le [site web The Things Network](https://account.thethingsnetwork.org/register){:target="_blank"} et inscrivez-vous. Après l'inscription et la connexion à votre compte TTN, allez sur le [tableau de bord de la console TTN](https://console.thethingsnetwork.org/){:target="_blank"}

### Console TTN
Dans cette console, vous devrez créer une nouvelle application TTN qui est essentiellement un conteneur sur la plateforme TTN et où vous enregistrerez/associerez votre carte SODAQ.

- Rendez-vous sur le [tableau de bord de la console TTN](https://console.thethingsnetwork.org/){:target="_blank"}
- Cliquez sur `Applications`
- Cliquez sur `Add Application`
- Entrez un nom pour votre application. Vous pouvez entrer ce que vous voulez ici.
- Entrez une description pour votre application
- Sélectionnez le Handler approprié dans la liste. Ceux-ci sont basés sur l'emplacement où votre appareil fonctionnera.
    - Europe :   `ttn-handler-eu`
    - USA :      `ttn-handler-us-west`
    - Asie :     `ttn-handler-asia-se`

{% include image.html url="/assets/img/ttn_add_app.png" description="TTN Add Application" %}

## TTN Définir le format de charge utile de l'application - CayenneLPP
Le [Cayenne Low Power Payload (LPP)](https://mydevices.com/cayenne/docs_stage/lora/#lora-cayenne-low-power-payload){:target="_blank"} offre un moyen pratique et simple d'envoyer des données sur les réseaux LPWAN tels que LoRaWAN. Les données transmises à TTN sont formatées en utilisant LPP et vous devez configurer votre application TTN nouvellement créée pour décoder les données.

- Cliquez sur l'onglet `Payloads Formats`
- Sélectionnez > `Cayenne LPP` dans la liste déroulante
- Cliquez sur le bouton `Save`

{% include image.html url="/assets/img/ttn_app_format_LPP.png" description="TTN Add Application" %}

## TTN Enregistrer un appareil
Maintenant que vous avez créé une nouvelle application, nous devons enregistrer un nouvel appareil dans l'application, ce qui fournira les informations dont vous aurez besoin pour programmer la carte SODAQ et la connecter à TTN via LoRaWAN.
- Cliquez sur l'onglet `Device Tab`
- Cliquez sur `Register Device`

{% include image.html url="/assets/img/ttn_dev_tab.png" description="TTN Register Device" %}

- **Device ID:** Entrez un nom pour votre appareil (ce nom est permanent et ne peut pas être modifié après création)
- **DeviceEUI:** Entrez le `DevEUI` de votre appareil que vous avez enregistré dans les étapes précédentes depuis le moniteur série.
- Cliquez sur le bouton `Register`

{% include image.html url="/assets/img/ttn_reg_device.png" description="TTN Register Device" %}

Après avoir cliqué sur le bouton `Register`, vous serez redirigé vers la console `Device Overview`. Faites défiler jusqu'à la section `Example Code` en bas de la page. Vous y verrez les définitions de variables pour les paramètres `appEUI` et `appKey`. Copiez ces valeurs, vous en aurez besoin lors de la programmation de la carte SODAQ. Ces valeurs sont utilisées par TTN pour identifier et sécuriser les données circulant entre l'appareil et TTN.

{% include image.html url="/assets/img/ttn_dev_ex_code_vals.png" description="TTN Register Device" %}

## Programmer l'appareil
Vous avez maintenant toutes les informations nécessaires pour programmer la carte SODAQ afin de se connecter et de transmettre des données à TTN. Dans cette section, vous allez mettre à jour le code `ttn_sodaq_hackiot_reading.ino` avec les dernières valeurs

- Connectez l'appareil via USB à votre ordinateur
- Ouvrez le fichier `ttn_sodaq_hackiot_reading.ino` dans l'IDE Arduino

Remplacez les valeurs de ces variables :

- `const char *appEui` = "< Entrez votre valeur `appEUI` de TTN >";
- `const char *appKey` = "< Entrez votre valeur `appKey` de TTN >";

Assurez-vous de spécifier la bonne fréquence LoRa pour votre emplacement.
Europe : `TTN_FP_EU868`
USA :    `TTN_FP_US915`

- #define freqPlan `TTN_FP_EU86`

Votre code est maintenant prêt à être compilé et téléversé sur l'appareil.

Dans l'IDE Arduino :

-Cliquez sur `File` > `Upload` ou cliquez sur le bouton `Upload` de la barre d'outils

{% include image.html url="/assets/img/arduino_upload_button.png" description="Arduino Upload Button" %}

La console de l'IDE Arduino affiche l'état de la compilation et du téléversement de l'application sur l'appareil. Utilisez le `Serial Monitor` dans l'IDE Arduino pour voir l'activité de l'appareil et son statut de connexion à la plateforme TTN.

Félicitations ! L'appareil exécute maintenant le code que vous avez compilé. Ensuite, nous vérifierons le tableau de bord TTN pour voir le trafic LoRaWAN réel collecté depuis votre appareil.

### Confirmer que l'appareil transmet vers The Things Network

Connectez-vous au portail TTN et naviguez vers votre application TTN et trouvez votre appareil enregistré. Si l'appareil transmet correctement, vous verrez des données dans le portail de l'appareil TTN en quelques minutes comme indiqué ci-dessous.

{% include image.html url="/assets/img/ttn_dev_data_view.png" description="TTN Device Payload View" %}

Votre appareil est maintenant programmé pour lire et transmettre ses données de capteur à la plateforme TTN pour traitement.

## Streamer des paquets IoT de Senet vers Microshare

Suivez [ce tutoriel The Things Network (TTN)](../tts_tutorial) pour configurer une redirection de paquets IoT vers la plateforme Microshare.
