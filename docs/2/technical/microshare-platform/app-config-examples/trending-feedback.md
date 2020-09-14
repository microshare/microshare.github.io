---
layout: docs
title: Trending Feedback JSON
description: 
toc: true
---

---------------------------------------

The following is JSON example code for a Trending Feedback App.

{% highlight java %}

{
	"appTitle": "Trending Feedback",
	"navOptions": [
		{
			"title": "Realtime Desk Availability",
			"link": "/apps/view/5e0f8cd22b0000d1c260????"
		},
		{
			"title": "Realtime Room Availability",
			"link": "/apps/view/5e2b627d2b000057df94????"
		},
		{
			"title": "Trending Environment",
			"link": "/apps/view/5de835881d0000dbbc83????"
		},
		{
			"title": "Trending Environment F",
			"link": "/apps/view/5e0a72cc2b0000940160????"
		},
		{
			"title": "Trending Air Quality",
			"link": "/apps/view/5e0a75502b0000600260????"
		},
		{
			"title": "Trending Refrigerator",
			"link": "/apps/view/5e0f6d2a2b0000dcb760????"
		},
		{
			"title": "Trending Access Usage",
			"link": "/apps/view/5e0fa0842b00008dc960????"
		},
		{
			"title": "Trending Desk Availability",
			"link": "/apps/view/5e0e1f632b00006e4360????"
		},
		{
			"title": "Trending Usage",
			"link": "/apps/view/5e0e02e92b0000433960????"
		},
		{
			"title": "Trending Feedback - 5 Button Toilet",
			"link": "/apps/view/5e94bd1d1d00005d8b77????"
		},
		{
			"title": "Trending Feedback 3 DEP",
			"link": "/apps/view/5e1742252b00001ce1e2????"
		},
		{
			"title": "Trending Feedback 5 DEP",
			"link": "/apps/view/5e172aa52b0000656860????"
		}
	],
	"": "optional parameters",
	"getRecType": "io.microshare.fm.master.agg",
	"headerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/header.png",
	"headerSecondaryLogo": "",
	"footerLogo": "https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/footer.png",
	"axisFormat": "EEE HH:mm",
	"location1": "Building",
	"location2": "Floor",
	"location3": "Location",
	"useWeekendColorBan": true,
	"startOfWorkDay": 6,
	"endOfWorkDay": 20,
	"colorOfThresholdBand": "green",
	"colorOfOffHoursBand": "blue",
	"debug": false,
	" ": "end optional parameters",
	"dataRecType": "io.microshare.feedback.event.meta",
	"dataContext": "toilet",
	"query": "5e59849446e0fb00283d????",
	"charts": [
		{
			"title": "Feedback Table",
			"fieldName": "event",
			"viewType": "feedbackTable",
			"backboardRecType": "io.microshare.config.backboard",
			"backboardId": "5ea0488146e0fb002a07????"
		},
		{
			"title": "Feedback Timeline",
			"fieldName": "event",
			"viewType": "feedbackLine",
			"backboardRecType": "io.microshare.config.backboard",
			"backboardId": "5ea0488146e0fb002a07????"
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