---
layout: docs
title: Router les paquets de Kerlink SPN vers Microshare™
description: Configurer le routage des paquets IoT depuis une passerelle Kerlink vers Microshare
lang: fr
translation_of: docs/2/technical/lorawan/lorawan-extra-sensor-guides/kerlink-tutorial.md
translations:
  en: /docs/2/technical/lorawan/lorawan-extra-sensor-guides/kerlink-tutorial
  fr: /docs/2/fr/technical/lorawan/lorawan-extra-sensor-guides/kerlink-tutorial
group: advanced
toc: true
---

Pour cette configuration, nous supposons que vous avez suivi le [démarrage rapide](../../getting-started-quick-start). Vous devez savoir comment générer un Pipe Token et ce qu'est un recType.

Pour router tous les nouveaux paquets reçus par une passerelle Kerlink vers votre compte Microshare :

* Connectez-vous à votre Kerlink SPN
* Allez dans Configuration -> Service (dans les onglets de gauche)

* Trois champs sont à renseigner comme suit :
1. dans hostname, entrez `https://api.microshare.io`
2. dans port `443`
3. dans path entrez `/share/:recType/token/:pipeToken/` et remplacez `:recType` par le type d'enregistrement choisi pour ces données, et `:pipeToken` par le pipe token que vous avez généré.

* Tous les paquets doivent être redirigés vers votre compte Microshare et stockés avec le recType sélectionné
* Si ce n'est pas le cas, ouvrez l'onglet Logs sur le SPN. L'un des menus de logs indique s'il y a une erreur de routage des paquets.
