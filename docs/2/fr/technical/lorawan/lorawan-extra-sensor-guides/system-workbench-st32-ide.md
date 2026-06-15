---
layout: docs
title: System Workbench ST32 IDE
description: Installer System Workbench for STM32 pour programmer des cartes STM32
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-extra-sensor-guides/system-workbench-st32-ide.md
translations:
  en: /docs/2/technical/lorawan/lorawan-extra-sensor-guides/system-workbench-st32-ide
  fr: /docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/system-workbench-st32-ide
group: advanced
toc: true
---

System Workbench for STM32 – Bare Metal Edition est un IDE intégré Eclipse. Il fournit une plateforme de développement logiciel pour votre carte STM32. L'IDE vous aide à créer rapidement un projet C embarqué pour votre cible. Il intègre également un éditeur de code complet, des outils de compilation (compilateur, assembleur, linker…) et des outils de débogage à distance.

## Créer un compte [OpenSTM32 Community](http://www.openstm32.org){:target="_blank"}
Pour télécharger l'IDE, vous devez créer un compte. Rendez-vous sur le [site OpenSTM32 Community](http://www.openstm32.org){:target="_blank"} et inscrivez-vous.

## Télécharger [System Workbench for STM32](http://www.openstm32.org/Downloading%2Bthe%2BSystem%2BWorkbench%2Bfor%2BSTM32%2Binstaller){:target="_blank"}

Téléchargez et installez System Workbench IDE. Vous trouverez les instructions d'installation pour votre plateforme :

- [Microsoft Windows](http://www.openstm32.org/Downloading%2Bthe%2BSystem%2BWorkbench%2Bfor%2BSTM32%2Binstaller#Windows_7){:target="_blank"}
- [Mac OSX](http://www.openstm32.org/Downloading%2Bthe%2BSystem%2BWorkbench%2Bfor%2BSTM32%2Binstaller#Mac_OS_X){:target="_blank"}
- [Linux](http://www.openstm32.org/Downloading%2Bthe%2BSystem%2BWorkbench%2Bfor%2BSTM32%2Binstaller#Linux){:target="_blank"}
 Portez attention aux **avertissements** des instructions d'installation

Pour démarrer l'installation sous Windows, lancez le fichier .exe.
Sur Mac OSX et Linux, ouvrez votre ligne de commande à l'emplacement du fichier puis :
- Définissez le fichier comme exécutable avec :
`> chmod +x install_sw4stm32_XXX-vX.X.run`
- Puis exécutez-le avec :
`> ./install_sw4stm32_XXX-vX.X.run`

**Notes**
- Cochez l'option `STLinkServer` lorsque l'assistant vous le demande.
- Pendant l'installation, une invite de ligne de commande demandera votre mot de passe. Vérifiez votre terminal si l'installation semble bloquée ou dure plus de 5 minutes.

Une fois l'installation terminée, vous pourrez ouvrir l'IDE dans System Workbench dans vos menus d'applications

## Étapes suivantes

Maintenant que vous avez installé System Workbench IDE, vous pouvez consulter l'un de nos tutoriels de programmation d'appareils et apprendre à programmer vos dispositifs.

### [Appareils LoRaWAN](/docs/2/technical/lorawan/lorawan-sensors)
