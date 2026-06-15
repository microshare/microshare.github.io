---
layout: docs
title: Décodage Sagemcom Siconia
description:
group: advanced
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/robots-libraries/sagemcom-siconia.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/robots-libraries/sagemcom-siconia
  fr: /docs/2/fr/technical/microshare-platform-advanced/robots-libraries/sagemcom-siconia
---
Le Siconia est programmable, le décodage de sa charge utile dépend donc du programme que vous y installez.
Cela dit, la valeur de température est encodée en Float — Little Endian avec 2 décimales de précision. Utilisez la température hex du Siconia sur [ce site](https://www.scadacore.com/tools/programming-calculators/online-hex-converter/) pour avoir une idée de la valeur de température. 

Utilisez le code ci-dessous dans votre Robot pour convertir la température Hex en float correspondant.

{% highlight js %}
    // payload is expected to be a Hex value

    var hex = payload.toUpperCase();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    
    entry.temperature = parseFloat(str);
{% endhighlight %}
