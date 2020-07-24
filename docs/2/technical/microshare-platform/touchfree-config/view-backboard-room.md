---
layout: docs
title: Touchfree Feedback Backboard Room Example JSON Code
description: 
toc: true
---

---------------------------------------


The following JSON code is an example for a Touchfree Feedback Backboard Room App.

{% highlight java %}

{
  "id": "room",
	"en": {
    "question": "Request Cleaning",
		"buttons": [ 
			{
				"event": "deep",
				"label": "Deep Clean",
				"smilioEvent": "Button #1, Upper Left"
			},
			{
				"event": "clean",
				"label": "Normal Clean",
				"smilioEvent": "Button #2, Upper Right"			
			},
			{
				"event": "staff",
				"label": "Room Prepared",
        "smilioEvent": "Hall Effect"
			}
		]
	},
	"fr": {
    "question": "Request Cleaning",
		"buttons": [ 
			{
				"event": "deep",
				"label": "Nettoyage en profondeur",
				"smilioEvent": "Button #1, Upper Left"
			},
			{
				"event": "clean",
				"label": "Ordinaire Nettoyer",
				"smilioEvent": "Button #2, Upper Right"			
			},
			{
				"event": "staff",
				"label": "Salle préparée",
        "smilioEvent": "Hall Effect"
			}
		]
	}
}

{% endhighlight %}