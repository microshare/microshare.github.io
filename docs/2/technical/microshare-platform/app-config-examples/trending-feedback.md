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
			"link": "/apps/view/5e0f8cd22b0000d1c2607d32"
		},
		{
			"title": "Realtime Room Availability",
			"link": "/apps/view/5e2b627d2b000057df94a667"
		},
		{
			"title": "Trending Environment",
			"link": "/apps/view/5de835881d0000dbbc8310c6"
		},
		{
			"title": "Trending Environment F",
			"link": "/apps/view/5e0a72cc2b00009401607cbb"
		},
		{
			"title": "Trending Air Quality",
			"link": "/apps/view/5e0a75502b00006002607cc0"
		},
		{
			"title": "Trending Refrigerator",
			"link": "/apps/view/5e0f6d2a2b0000dcb7607d27"
		},
		{
			"title": "Trending Access Usage",
			"link": "/apps/view/5e0fa0842b00008dc9607d36"
		},
		{
			"title": "Trending Desk Availability",
			"link": "/apps/view/5e0e1f632b00006e43607cff"
		},
		{
			"title": "Trending Usage",
			"link": "/apps/view/5e0e02e92b00004339607ceb"
		},
		{
			"title": "Trending Feedback - 5 Button Toilet",
			"link": "/apps/view/5e94bd1d1d00005d8b77b7b3"
		},
		{
			"title": "Trending Feedback 3 DEP",
			"link": "/apps/view/5e1742252b00001ce1e2ae7c"
		},
		{
			"title": "Trending Feedback 5 DEP",
			"link": "/apps/view/5e172aa52b00006568607e16"
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
	"query": "5e59849446e0fb00283dad37",
	"charts": [
		{
			"title": "Feedback Table",
			"fieldName": "event",
			"viewType": "feedbackTable",
			"backboardRecType": "io.microshare.config.backboard",
			"backboardId": "5ea0488146e0fb002a074145"
		},
		{
			"title": "Feedback Timeline",
			"fieldName": "event",
			"viewType": "feedbackLine",
			"backboardRecType": "io.microshare.config.backboard",
			"backboardId": "5ea0488146e0fb002a074145"
		}
	],
	"selectionOptions": [
		{
			"name": "Haverhill",
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