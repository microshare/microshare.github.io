---
layout: docs
title: Kit de découverte B-L072Z-LRWAN1
description: Programmer le kit B-L072Z-LRWAN1 LoRa® Discovery avec System Workbench
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-extra-sensor-guides/st-b-1072z-lrwan1-discovery-kit.md
translations:
  en: /docs/2/technical/lorawan/lorawan-extra-sensor-guides/st-b-1072z-lrwan1-discovery-kit
  fr: /docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/st-b-1072z-lrwan1-discovery-kit
group: advanced
toc: true
---

Suivez ce tutoriel pour programmer le [kit LoRa® Discovery B-L072Z-LRWAN1](http://www.st.com/en/evaluation-tools/b-l072z-lrwan1.html){:target="_blank"} en utilisant [System Workbench for STM32 IDE](../system-workbench-st32-ide){:target="_blank"}.

## Obtenir les ressources ST Micro

- Connectez-vous à votre [compte ST Micro](https://my.st.com/cas/login?service=https%3A%2F%2Fmy.st.com%2Fcontent%2Fmy_st_com%2Fen.html){:target="_blank"} ou créez un compte si vous n'en avez pas déjà un
- Téléchargez le [SDK I-CUBE-LRWAN](http://www.st.com/content/st_com/en/products/embedded-software/mcus-embedded-software/stm32-embedded-software/stm32cube-embedded-software-expansion/i-cube-lrwan.html){:target="_blank"} de ST Micro
- Décompressez le fichier SDK I-CUBE-LRWAN `en.i-cube_lrwan.zip` que vous venez de télécharger

## IDE System Workbench STM32

- Téléchargez et installez [System Workbench for STM32 IDE](../system-workbench-st32-ide)

### SDK I-CUBE-LRWAN dans l'IDE System Workbench

- Ouvrez l'IDE System Workbench
- Cliquez sur `File` > Open Projects from File System...
- Cliquez sur `Directory` > Parcourez jusqu'au répertoire `en.i-cube_lrwan` créé lors de la décompression du fichier en.i-cube_lrwan.zip
- Continuez jusqu'à `/Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/`
- Sélectionnez le répertoire `mlm32l07x01` > Cliquez sur `OK`
- **Cochez** la case à côté du répertoire `mlm32l07x01`
- Cliquez sur `Finish`

### Compilation initiale du projet mlm32l07x01

À ce stade, vous avez ouvert le projet `mlm32l07x01` et vous devez maintenant compiler toutes les bibliothèques du SDK.

- Dans l'explorateur de projets, vous devriez voir le répertoire `mlm32l07x01`
- Cliquez sur le menu `Project` > `Build All` ou appuyez sur **CTRL-B** pour compiler
- Lorsque la compilation est terminée, vous devriez voir des messages de succès tels que `15:13:22 Build Finished (took 22s.424ms)`

### Configurer les paramètres d'environnement globaux

Si vous êtes aux États-Unis, vous devez changer la fréquence LoRaWAN à `915MHZ` dans le paramètre `Preprocessor` du projet au sein de l'IDE

- Dans la fenêtre Project Explorer, trouvez le projet `mlm32l07x01`
- Clic droit sur le répertoire `mlm32l07x01` > Cliquez sur `Properties`
- Développez l'arborescence `C/C++ Build` > Cliquez sur `Settings`
- Cliquez sur l'onglet `Tools Settings` > Développez l'arborescence `MCU GCC Compiler`
- Cliquez sur le répertoire `Preprocessor` > Double-cliquez sur la valeur `REGION_EU868` dans la section Defined Symbols
- Remplacez la valeur **REGION_EU868** par `REGION_US915` > Cliquez sur `OK` > Cliquez à nouveau sur `OK`
- Recompilez avec les nouveaux paramètres > Cliquez sur le menu `Project` > `Build All` ou appuyez sur **CTRL-B** pour compiler

Après une compilation réussie du projet, vous êtes prêt à programmer l'appareil **B-L072Z-LRWAN1** pour rejoindre un réseau LoRaWAN tel que [Senet](http://www.senetco.com/){:target="_blank"}

## Provisionner le kit de découverte B-L072Z-LRWAN1 sur [Senet](http://www.senetco.com/){:target="_blank"}

Avant de commencer à programmer l'appareil pour rejoindre le réseau LoRaWAN Senet, vous devez ajouter votre appareil à votre profil de compte développeur Senet.

### Créer un compte développeur Senet

Si vous n'avez pas de compte Senet, rendez-vous sur le [site web Senet](http://www.senetco.com/developer-portal/){:target="_blank"} et demandez un compte développeur. Lorsque votre compte développeur Senet est approuvé, vous devez vous connecter au portail développeur et enregistrer votre nouvel appareil en utilisant l'activation Over The Air `OTAA` selon les instructions d'[enregistrement d'appareil Senet](http://docs.senetco.io/docs/dev/#device-registration){:target="_blank"}.

Lors de l'enregistrement d'un nouvel appareil dans l'interface du portail Senet, procédez comme suit.

- Générez un `DevEUI` en cliquant sur le lien `Senet's EUI Registry` sous le champ DevEUI. Cela attribuera un DevEUI à l'appareil sur la plateforme.
- Type d'activation :  `OTAA`
- Type d'appareil :  `Nucleo + ST SX1276 Shield`

### Capturer les clés LoRa requises de l'appareil

Après avoir ajouté votre nouvel appareil, assurez-vous de capturer les nombres au format Hex MSB qui ressemblent à cet exemple `{0x00,0x22,0x09,0x00,0x00,0x01,0x03,0x04}`

Obtenez les valeurs des clés suivantes :

- Device EUI - Vous devrez convertir la valeur `DevEUI` du portail Senet au nombre formaté `MSB Hex` mentionné ci-dessus. Par exemple, si vous avez le nombre `12345678`, la valeur `MSB Hex` est : `{ 0x12, 0x34, 0x56, 0x78 }`. Divisez les valeurs en paires, préfixez les paires avec `0x` et séparez les paires par une virgule. Les accolades `{   }` doivent entourer la valeur entière au format `MSB`

- App EUI - Vous pouvez cliquer sur l'icône `Copy` à côté du nombre MSB
- AppKey - Vous pouvez cliquer sur l'icône `Copy` à côté du nombre MSB

Vous programmerez l'appareil avec ces valeurs.

### Configurer les appareils pour l'activation OTAA

Ici, vous allez modifier les valeurs de certaines variables dans le code source pour qu'elles correspondent aux valeurs attribuées à votre appareil sur la plateforme Senet.

Dans l'IDE System Workbench :

- Développez le projet `mlm32l07x01` dans le Project Explorer
- Développez le répertoire `Includes`
- Trouvez les fichiers Include du projet, qui sont normalement le dernier répertoire de cette liste. Le chemin du fichier est similaire à `< chemin vers votre répertoire de projet>/Projects/Multi/Applications/LoRa/End_Node/inc` où la valeur `< chemin vers votre répertoire de projet>` est l'emplacement de votre projet sur le disque.
- Développez le répertoire `inc` et ouvrez ces fichiers dans l'IDE :
    - `hw_conf.h`
    - `Commissioning.h`

Ouvrez le fichier `main.c`

- Développez le répertoire `Projects\End_Node\`
- Ouvrez le fichier `main.c`

### Configurer le fichier hw_conf.h

Le fichier `hw_conf.h` contient des variables qui doivent être définies lors de l'utilisation d'un [bouclier capteur](http://www.st.com/en/ecosystems/x-nucleo-iks01a2.html){:target="_blank"} ou lorsque vous devez déboguer votre application.

- Si vous avez un [bouclier capteur](http://www.st.com/en/ecosystems/x-nucleo-iks01a2.html) attaché à l'appareil, décommentez la déclaration `#define SENSOR_ENABLED`

### Configurer le fichier Commissioning.h

À ce stade, vous êtes prêt à configurer les valeurs `OTAA` Senet pour votre appareil.

Ouvrez le fichier `Commissioning.h`. Trouvez les déclarations suivantes dans le code et remplacez leurs valeurs

- #define STATIC_DEVICE_EUI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         `1`
- #define LORAWAN_DEVICE_EUI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       `Valeur Device EUI de la plateforme Senet convertie au format hexadécimal MSB`
- #define LORAWAN_APPLICATION_EUI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `Valeur App EUI de la plateforme Senet`
- #define LORAWAN_APPLICATION_KEY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `Valeur AppKey de la plateforme Senet`
- Enregistrez vos modifications

### Configurer le fichier main.c

Les données de charge utile que cet appareil envoie seront formatées au format Cayenne LPP

- Décommentez la déclaration `//#define CAYENNE_LPP`
- #define LORAWAN_ADR_ON  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   `1`
- #define LORAWAN_CONFIRMED_MSG  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      `ENABLE`

### Compiler le binaire

Après avoir configuré l'appareil avec les valeurs appropriées de la plateforme Senet, vous pouvez maintenant compiler le projet, ce qui produira un fichier binaire d'application.

- Cliquez sur le menu `Project` > `Build All` ou appuyez sur CTRL-B pour compiler
- Vous devriez voir un message **Successful Build** dans l'onglet Console de l'IDE

### Programmer l'appareil

Le fichier binaire est prêt à être téléversé sur l'appareil.

- Connectez l'appareil via USB à votre ordinateur
- Ouvrez une fenêtre d'explorateur de fichiers et trouvez l'appareil connecté. Il devrait apparaître comme un périphérique externe avec un nom similaire à `DIS_L072Z`

Vous devez maintenant récupérer le binaire et le téléverser sur l'appareil.

- Parcourez jusqu'à `< chemin vers votre répertoire de projet> /Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/mlm32l07x01/Debug/` où la valeur `< chemin vers votre répertoire de projet>` est l'emplacement de votre projet sur le disque.
- Trouvez le fichier `mlm32l07x01.bin` et copiez/collez ou glissez-déposez-le dans le périphérique `DIS_L072Z` listé dans l'explorateur de fichiers de votre système d'exploitation
- La LED de l'appareil clignotera en vert et rouge pendant la programmation et restera fixe en vert ou rouge une fois terminée.

Félicitations ! L'appareil exécute maintenant le code que vous avez compilé. Ensuite, nous vérifierons le tableau de bord Senet pour voir le trafic LoRaWAN réel collecté depuis votre appareil.

### Confirmer que l'appareil transmet vers Senet

Connectez-vous au portail Senet et cliquez sur votre appareil B-L072Z enregistré. Si l'appareil transmet correctement, vous devriez voir des données dans le portail de l'appareil Senet en quelques minutes. Utilisez la [documentation de l'interface utilisateur Senet](http://docs.senetco.io/docs/#user-interface) pour en savoir plus sur l'interface Senet

Si vous ne voyez aucune donnée après quelques minutes :

- Confirmez que vous avez correctement configuré le code avec les valeurs appropriées de ce tutoriel
- Assurez-vous que le code a compilé sans erreurs
- Copiez à nouveau le fichier `.bin` sur l'appareil en suivant les étapes de la section `Programmer l'appareil`
- Assurez-vous que vous êtes à portée d'une passerelle LoRaWAN Senet ou dans une zone couverte par Senet Outdoor, consultez la [carte de couverture ici](http://www.senetco.com/coverage/){:target="_blank"}

## Streamer des paquets IoT de Senet vers Microshare

Suivez [ce tutoriel Senet](../senet-tutorial) pour configurer une redirection de paquets IoT vers la plateforme Microshare.
