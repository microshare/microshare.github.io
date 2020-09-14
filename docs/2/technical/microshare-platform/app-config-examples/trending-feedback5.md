---
layout: docs
title: Trending Feedback 5 deprecated JSON
description: 
toc: true
---

---------------------------------------

The following is JSON example code for a Trending Feedback 5 deprecated App.

{% highlight java %}
{
	"appTitle": "Trending Feedback 5",
  "navOptions": [
    {
      "title": "Realtime Desk Availability",
      "link": "https://dapp.microshare.io/apps/view/5e0f8cd22b0000d1c260????"
    },
    {
      "title": "Realtime Room Availability",
      "link": "https://dapp.microshare.io/apps/view/5e2b627d2b000057df94????"
		},
		{
      "title": "Trending Environment",
      "link": "https://dapp.microshare.io/apps/view/5de835881d0000dbbc83????"
    },
    {
      "title": "Trending Environment F",
      "link": "https://dapp.microshare.io/apps/view/5e0a72cc2b0000940160????"
    },
    {
      "title": "Trending Air Quality",
      "link": "https://dapp.microshare.io/apps/view/5e0a75502b0000600260????"
    },
    {
      "title": "Trending Refrigerator",
      "link": "https://dapp.microshare.io/apps/view/5e0f6d2a2b0000dcb760????"
    },
    {
      "title": "Trending Access Usage",
      "link": "https://dapp.microshare.io/apps/view/5e0fa0842b00008dc960????"
    },
    {
      "title": "Trending Desk Availability",
      "link": "https://dapp.microshare.io/apps/view/5e0e1f632b00006e4360????"
    },
    {
      "title": "Trending Usage",
      "link": "https://dapp.microshare.io/apps/view/5e0e02e92b0000433960????"
    },
    {
      "title": "Trending Feedback 3",
      "link": "https://dapp.microshare.io/apps/view/5e1742252b00001ce1e2????"
    },
    {
      "title": "Trending Feedback 5",
      "link": "https://dapp.microshare.io/apps/view/5e172aa52b0000656860????"
    }
  ],
	"": "optional parameters",
	"getRecType": "io.microshare.fm.master.agg",
	"footerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/footer.png",
	"headerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/header.png",
	"headerSecondaryLogo": "",
	"location1": "Building",
	"location2": "Area",
	"location3": "Location",
	" ": "end optional parameters", 

  "dataRecType": "io.microshare.feedback.unpacked",
	"dataContext": "toilet",
	"query1variable": "5e1620d346e0fb002851????",
	"query2variable": "5e17281746e0fb002847????",
	"query3variable": "5e17284a46e0fb002847????",
	"charts": [
		{
			"fieldName": "feedback",
			"buttons": [
				{
					"label": "Low soap",
					"": "optional parameters",
					"color": "#01AFEE",
					"hide": false
				},
				{
					"label": "Please clean",
					"": "optional parameters",
					"color": "#DE268E",
					"hide": false
				},
				{
					"label": "Leak or water",
					"": "optional parameters",
					"color": "#FECF4B",
					"hide": false
				},
				{
					"label": "No paper",
					"": "optional parameters",
					"color": "#F89118",
					"hide": false
				},
				{
					"label": "Great job",
					"": "optional parameters",
					"color": "#86C337",
					"hide": false
				}
			]
		}
	],
	"selectionOptions": [
		{
			"name": "Boston",
			"floors": [
				{
					"name": "1st Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "2nd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "3rd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				}
			]
		},
		{
			"name": "London",
			"floors": [
				{
					"name": "1st Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "2nd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				},
				{
					"name": "3rd Floor",
					"locations": [
						"A",
						"B",
						"C"
					]
				}
			]
		}
	]
}

{% endhighlight %}