---
layout: docs
title: Comment créer une règle
description: Page enfant du guide du tableau de bord
group: advanced
lang: fr
translation_of: docs/2/technical/microshare-platform/create-rule.md
translations:
  en: /docs/2/technical/microshare-platform/create-rule
  fr: /docs/2/fr/technical/microshare-platform/create-rule
toc: true
---

---------------------------------------

 Les vues utilisées par les applications génériques sont des vues génériques créées par Microshare et hébergées sur le compte **asset@microshare.io**.

Ces vues sont déjà partagées avec tous les comptes. Vous trouverez plus d'informations à ce sujet dans le [guide des vues.](/docs/2/fr/technical/microshare-platform/views-guide)

Si une nouvelle vue est créée pour les tableaux de bord, il est nécessaire de suivre les étapes suivantes :

 * Créer des [règles](/docs/2/fr/technical/microshare-platform/rules-guide/) pour partager les vues avec tout le monde via le compte **assets@microshare.io**.
 * Le nom doit être « Share Views with <em>(insérer le nom du client)</em> »

 {% include image.html url="\assets\img\dashboard-guide-1.png" height="900" width="900" description="Dashboard Guide1" %}

 * Cocher Active, souligné en bleu.
 * Utiliser le Record Type : io.microshare.fm.master.agg souligné en rouge.
 * Cocher les opérations : Read, Query et Execute soulignées en vert.
