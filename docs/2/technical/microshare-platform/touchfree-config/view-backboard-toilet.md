---
layout: docs
title: Touchfree Feedback Backboard Toilet Example JSON Code
description: 
toc: true
---

---------------------------------------


The following JSON code is an example for a Touchfree Feedback Backboard Toilet App.




{% highlight java %}

{
  "id": "toilet",
  "en": {
    "question": "How are we doing?",
    "buttons": [
      {
        "event": "soap",
        "label": "Low soap",
        "smilioEvent": "Button #1, Upper Left"
      },
      {
        "event": "clean",
        "label": "Please clean",
        "smilioEvent": "Button #2, Upper Right"
      },
      {
        "event": "leak",
        "label": "Leak or water",
        "smilioEvent": "Button #3, Lower Left"
      },
      {
        "event": "paper",
        "label": "No paper",
        "smilioEvent": "Button #4, Lower Right"
      },
      {
        "event": "good",
        "label": "Great job",
        "smilioEvent": "Button #5, Middle"
      },
      {
        "event": "staff",
        "label": "Staff arrival",
        "smilioEvent": "Hall Effect"
      }
    ]
  },
  "es": {
    "question": "¿Como lo estamos haciendo?",
    "buttons": [
      {
        "event": "soap",
        "label": "Más jabon",
        "smilioEvent": "Button #1, Upper Left"
      },
      {
        "event": "clean",
        "label": "Por favor limpie la habitación",
        "smilioEvent": "Button #2, Upper Right"
      },
      {
        "event": "leak",
        "label": "Hay una fuga",
        "smilioEvent": "Button #3, Lower Left"
      },
      {
        "event": "paper",
        "label": "Se necesita papel",
        "smilioEvent": "Button #4, Lower Right"
      },
      {
        "event": "good",
        "label": "Buenas condiciones",
        "smilioEvent": "Button #5, Middle"
      },
      {
        "event": "staff",
        "label": "Miembro del equipo",
        "smilioEvent": "Hall Effect"
      }
    ]
  }
}

{% endhighlight %}