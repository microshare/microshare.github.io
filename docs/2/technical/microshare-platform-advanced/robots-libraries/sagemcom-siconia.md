---
layout: docs
title: Decoding Sagemcom Siconia
description:
group: advanced
toc: true
---

The Siconia is programmable, so the decoding of its payload will depend of the program you put into it.
That said, the temperature value get's encoded as a Float - Little Endian with 2 points of precision. Use the hex temperature from the Siconia on [this website](https://www.scadacore.com/tools/programming-calculators/online-hex-converter/) to get an idea of the temperature value. 

Use the code below in you Robot the Hex temperature into the corresponding float.

{% highlight js %}
    // payload is expected to be a Hex value

    var hex = payload.toUpperCase();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    
    entry.temperature = parseFloat(str);
{% endhighlight %}