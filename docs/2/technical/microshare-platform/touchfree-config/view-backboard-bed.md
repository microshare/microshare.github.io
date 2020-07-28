---
layout: docs
title: Touchfree Feedback Backboard Bed Example JSON Code
description: 
toc: true
---

---------------------------------------


The following JSON code is an example for a Touchfree Feedback Backboard Bed App.

{% highlight java %}


{
  "id": "bed",
  "en": {
    "question": "What do you need?",
    "buttons": [
      {
        "event": "drink",
        "label": "I'm hungry / I'm thirsty",
        "smilioEvent": "Button #1, Upper Left"
      },
      {
        "event": "pain",
        "label": "I'm in pain",
        "smilioEvent": "Button #2, Upper Right"
      },
      {
        "event": "toilet",
        "label": "I need to go to the toilet",
        "smilioEvent": "Button #3, Lower Left"
      },
      {
        "event": "temperature",
        "label": "I'm cold / I'm hot",
        "smilioEvent": "Button #4, Lower Right"
      },
      {
        "event": "good",
        "label": "Cancel my request",
        "smilioEvent": "Button #5, Middle"
      }
    ]
  },
  "es": {
    "question": "¿Que necesitas?",
    "buttons": [
      {
        "event": "drink",
        "label": "Tengo hambre / Tengo sed",
        "smilioEvent": "Button #1, Upper Left"
      },
      {
        "event": "pain",
        "label": "Tengo dolor",
        "smilioEvent": "Button #2, Upper Right"
      },
      {
        "event": "toilet",
        "label": "Necesito el baño",
        "smilioEvent": "Button #3, Lower Left"
      },
      {
        "event": "temperature",
        "label": "Tengo frío / Estoy caliente",
        "smilioEvent": "Button #4, Lower Right"
      },
      {
        "event": "good",
        "label": "Cancele mi solicitud",
        "smilioEvent": "Button #5, Middle"
      }
    ]
  }
}


{% endhighlight %}